import { pool, isDbConnected } from '../config/db.js';
import { emailService } from '../services/emailService.js';

export const applicationsController = {
  /**
   * Submit candidate application with resume
   */
  async submitApplication(req, res) {
    try {
      const {
        jobId,
        fullName,
        email,
        phone,
        location,
        skills,
        experience,
        preferredRole,
        additionalMessage,
      } = req.body;

      if (!fullName || !email || !phone || !location) {
        return res.status(400).json({
          success: false,
          message: 'Full name, email, phone, and current location are required.',
        });
      }

      // Resume file key
      const resumeStorageKey = req.file ? req.file.filename : null;

      let applicationId = null;

      if (isDbConnected()) {
        const query = `
          INSERT INTO candidate_applications 
          (job_id, full_name, email, phone, location, skills, experience, preferred_role, resume_storage_key, status)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'received')
          RETURNING id;
        `;
        const result = await pool.query(query, [
          jobId || null,
          fullName.trim(),
          email.trim().toLowerCase(),
          phone.trim(),
          location.trim(),
          skills || '',
          experience || '',
          preferredRole || '',
          resumeStorageKey,
        ]);
        applicationId = result.rows[0].id;
      } else {
        applicationId = 'cand_' + Date.now();
      }

      // Dispatch alert to contracts@larkenit.com
      emailService.notifyApplication({
        id: applicationId,
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        location: location.trim(),
        skills: skills || '',
        experience: experience || '',
        preferredRole: preferredRole || '',
        resumeStorageKey,
        additionalMessage,
      });

      return res.status(201).json({
        success: true,
        message: 'Your candidate application and resume have been submitted securely to Larken Technologies LLC.',
        data: { id: applicationId },
      });
    } catch (err) {
      console.error('Error submitting application:', err);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while submitting your application. Please try again.',
      });
    }
  },

  /**
   * Get all applications (Admin)
   */
  async getApplications(req, res) {
    try {
      if (!isDbConnected()) {
        return res.json({ success: true, data: [] });
      }
      const result = await pool.query('SELECT * FROM candidate_applications ORDER BY created_at DESC');
      return res.json({ success: true, data: result.rows });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
};
