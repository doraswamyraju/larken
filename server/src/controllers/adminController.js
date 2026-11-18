import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import { pool, isDbConnected } from '../config/db.js';

export const adminController = {
  /**
   * Admin Login
   */
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const defaultEmail = process.env.ADMIN_DEFAULT_EMAIL || 'contracts@larkenit.com';
      const defaultPass = process.env.ADMIN_DEFAULT_PASSWORD || 'LarkenAdmin2026!';

      if (email === defaultEmail && password === defaultPass) {
        const token = jwt.sign(
          { email, role: 'admin' },
          process.env.JWT_SECRET || 'larken_jwt_secret_dev',
          { expiresIn: '12h' }
        );
        return res.json({
          success: true,
          token,
          user: { name: 'Larken Corporate Administrator', email, role: 'admin' },
        });
      }

      if (isDbConnected()) {
        const result = await pool.query('SELECT * FROM admin_users WHERE email = $1', [email]);
        if (result.rows.length > 0) {
          const user = result.rows[0];
          const matches = await bcrypt.compare(password, user.password_hash);
          if (matches) {
            const token = jwt.sign(
              { id: user.id, email: user.email, role: user.role },
              process.env.JWT_SECRET || 'larken_jwt_secret_dev',
              { expiresIn: '12h' }
            );
            return res.json({
              success: true,
              token,
              user: { name: user.name, email: user.email, role: user.role },
            });
          }
        }
      }

      return res.status(401).json({ success: false, message: 'Invalid administrative credentials.' });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Secure Resume Access (Protected from public access per Section 7 & 11)
   */
  async downloadResume(req, res) {
    try {
      const { storageKey } = req.params;
      const uploadDir = path.resolve(process.env.UPLOAD_DIR || './uploads/resumes');
      const filePath = path.join(uploadDir, path.basename(storageKey));

      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ success: false, message: 'Resume document not found.' });
      }

      return res.sendFile(filePath);
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
};
