import express from 'express';
import { adminController } from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Admin Authentication
router.post('/login', adminController.login);

// Email Diagnostic Test
router.post('/test-email', adminController.testEmail);

// Secure Resume Download (Non-public)
router.get('/resumes/:storageKey', authenticateAdmin, adminController.downloadResume);

export default router;
