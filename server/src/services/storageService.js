import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool, isDbConnected } from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.resolve(__dirname, '../../data/enquiries.json');

// Ensure data directory and file exist
function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

export const storageService = {
  /**
   * Save a new enquiry to PostgreSQL if available, and always persist to disk
   */
  async saveEnquiry(data) {
    const record = {
      id: 'enq_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || 'Not provided',
      serviceInterest: data.serviceInterest || 'General Enquiry',
      message: data.message || '',
      status: 'new',
      createdAt: new Date().toISOString(),
      source: data.source || 'Website Contact Form',
    };

    // 1. Try PostgreSQL insertion if connected
    if (isDbConnected()) {
      try {
        const query = `
          INSERT INTO business_enquiries (full_name, email, phone, service_interest, message, status)
          VALUES ($1, $2, $3, $4, $5, 'new')
          RETURNING id, created_at;
        `;
        const res = await pool.query(query, [
          record.fullName,
          record.email,
          record.phone,
          record.serviceInterest,
          record.message,
        ]);
        if (res.rows[0]) {
          record.dbId = res.rows[0].id;
        }
      } catch (err) {
        console.error('⚠️ PostgreSQL write failed, falling back to disk storage:', err.message);
      }
    }

    // 2. Always persist to disk so NO LEADS ARE EVER LOST
    try {
      ensureDataFile();
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const list = JSON.parse(raw || '[]');
      list.unshift(record);
      fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), 'utf-8');
      console.log(`💾 Lead saved permanently to disk store (ID: ${record.id})`);
    } catch (err) {
      console.error('⚠️ Disk store write error:', err.message);
    }

    return record;
  },

  /**
   * Retrieve all enquiries for the upcoming Admin Dashboard
   */
  async getAllEnquiries() {
    // If PostgreSQL is connected, fetch from DB
    if (isDbConnected()) {
      try {
        const res = await pool.query('SELECT * FROM business_enquiries ORDER BY created_at DESC');
        if (res.rows.length > 0) {
          return res.rows;
        }
      } catch (err) {
        console.warn('⚠️ Error fetching from PostgreSQL, reading from disk store:', err.message);
      }
    }

    // Fallback: Read from persistent JSON file
    try {
      ensureDataFile();
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw || '[]');
    } catch (err) {
      console.error('⚠️ Error reading disk store:', err.message);
      return [];
    }
  },

  /**
   * Update enquiry status (for the upcoming Admin Dashboard)
   */
  async updateStatus(id, newStatus) {
    if (isDbConnected()) {
      try {
        await pool.query('UPDATE business_enquiries SET status = $1 WHERE id = $2', [newStatus, id]);
      } catch (e) {
        console.warn('⚠️ Could not update in DB:', e.message);
      }
    }

    try {
      ensureDataFile();
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const list = JSON.parse(raw || '[]');
      const updated = list.map((item) => (item.id === id ? { ...item, status: newStatus } : item));
      fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), 'utf-8');
      return true;
    } catch (e) {
      console.error('⚠️ Could not update disk store:', e.message);
      return false;
    }
  },
};
