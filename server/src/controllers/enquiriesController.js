import { storageService } from '../services/storageService.js';
import { emailService } from '../services/emailService.js';

export const enquiriesController = {
  /**
   * Submit a new business enquiry
   */
  async createEnquiry(req, res) {
    try {
      const { fullName, email, phone, serviceInterest, message, source } = req.body;

      // Validation - Full name and email are mandatory
      if (!fullName || !email) {
        return res.status(400).json({
          success: false,
          message: 'Full name and business email address are required.',
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
      const sanitizedPhone = (phone || '').trim();

      // 1. Permanently store in PostgreSQL (and persistent disk fallback) for Dashboard
      const savedLead = await storageService.saveEnquiry({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: sanitizedPhone,
        serviceInterest: selectedService,
        message: (message || '').trim(),
        source: source || 'Website Contact Form',
      });

      // 2. Dispatch email notification directly to contracts@larkenit.com
      const emailResult = await emailService.notifyEnquiry({
        id: savedLead.id,
        fullName: savedLead.fullName,
        email: savedLead.email,
        phone: savedLead.phone,
        serviceInterest: savedLead.serviceInterest,
        message: savedLead.message,
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you for contacting Larken Technologies. Your enquiry has been received and routed to our team.',
        data: {
          id: savedLead.id,
          emailDispatched: emailResult.success,
        },
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
   * Get all enquiries (Admin Dashboard)
   */
  async getEnquiries(req, res) {
    try {
      const leads = await storageService.getAllEnquiries();
      return res.json({ success: true, data: leads });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Update enquiry status (Admin Dashboard)
   */
  async updateEnquiryStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      await storageService.updateStatus(id, status);
      return res.json({ success: true, message: 'Status updated.' });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
};
