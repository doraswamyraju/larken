import express from 'express';
import { jobsController } from '../controllers/jobsController.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public endpoint to view open jobs
router.get('/', jobsController.getPublicJobs);

// Protected Admin endpoints
router.post('/', authenticateAdmin, jobsController.createJob);

export default router;
