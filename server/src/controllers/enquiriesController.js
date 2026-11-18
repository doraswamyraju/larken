import { pool, isDbConnected } from '../config/db.js';
import { emailService } from '../services/emailService.js';

export const enquiriesController = {
  /**
   * Submit a new business enquiry
   */
  async createEnquiry(req, res) {
    try {
      const { fullName, email, phone, serviceInterest, message } = req.body;

      // Validation
      if (!fullName || !email || !phone) {
        return res.status(400).json({
          success: false,
          message: 'Full name, email address, and phone number are required.',
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Please provide a valid business email address.',
        });
      }

      const validServices = ['IT Consulting', 'IT Staffing', 'General Enquiry'];
      const selectedService = validServices.includes(serviceInterest) ? serviceInterest : 'General Enquiry';

      let enquiryId = null;

      if (isDbConnected()) {
        const query = `
          INSERT INTO business_enquiries (full_name, email, phone, service_interest, message, status)
          VALUES ($1, $2, $3, $4, $5, 'new')
          RETURNING id, created_at;
        `;
        const result = await pool.query(query, [
          fullName.trim(),
          email.trim().toLowerCase(),
          phone.trim(),
          selectedService,
          (message || '').trim(),
        ]);
        enquiryId = result.rows[0].id;
      } else {
        enquiryId = 'mem_' + Date.now();
      }

      // Notify contracts@larkenit.com asynchronously
      emailService.notifyEnquiry({
        id: enquiryId,
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        serviceInterest: selectedService,
        message: (message || '').trim(),
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you for contacting Larken Technologies. Your enquiry has been received and routed to our team.',
        data: { id: enquiryId },
      });
    } catch (err) {
      console.error('Error creating enquiry:', err);
      return res.status(500).json({
        success: false,
        message: 'An internal server error occurred while processing your enquiry. Please try again.',
      });
    }
  },

  /**
   * Get all enquiries (Admin)
   */
  async getEnquiries(req, res) {
    try {
      if (!isDbConnected()) {
        return res.json({ success: true, data: [] });
      }
      const result = await pool.query('SELECT * FROM business_enquiries ORDER BY created_at DESC');
      return res.json({ success: true, data: result.rows });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Update enquiry status (Admin)
   */
  async updateEnquiryStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      if (isDbConnected()) {
        await pool.query('UPDATE business_enquiries SET status = $1 WHERE id = $2', [status, id]);
      }
      return res.json({ success: true, message: 'Status updated.' });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
};
