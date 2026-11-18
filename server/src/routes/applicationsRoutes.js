import express from 'express';
import { applicationsController } from '../controllers/applicationsController.js';
import { resumeUpload } from '../middleware/upload.js';
import { submissionLimiter } from '../middleware/rateLimiter.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Candidate submission with resume file upload & rate limiter
router.post(
  '/',
  submissionLimiter,
  resumeUpload.single('resume'),
  applicationsController.submitApplication
);

// Protected Admin access
router.get('/', authenticateAdmin, applicationsController.getApplications);

export default router;
