import express from 'express';
import { enquiriesController } from '../controllers/enquiriesController.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public submission with rate limiting
router.post('/', submissionLimiter, enquiriesController.createEnquiry);

// Protected Admin endpoints
router.get('/', authenticateAdmin, enquiriesController.getEnquiries);
router.patch('/:id/status', authenticateAdmin, enquiriesController.updateEnquiryStatus);

export default router;
