import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { initDatabase } from './config/db.js';
import { standardLimiter } from './middleware/rateLimiter.js';

import { emailService } from './services/emailService.js';
import enquiriesRoutes from './routes/enquiriesRoutes.js';
import jobsRoutes from './routes/jobsRoutes.js';
import applicationsRoutes from './routes/applicationsRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5092;

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allows flexible CDN & embed resources
  crossOriginEmbedderPolicy: false,
}));
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// Apply rate limiting across /api endpoints
app.use('/api', standardLimiter);

// Health check endpoint with email diagnostic
app.get('/api/health', async (req, res) => {
  const emailStatus = await emailService.verifyConnection();
  res.json({
    status: 'healthy',
    company: 'Larken Technologies LLC',
    domain: 'larkenit.com',
    location: 'Overland Park, KS',
    timestamp: new Date().toISOString(),
    emailRouting: {
      recipient: process.env.NOTIFICATION_RECEIVER || 'contracts@larkenit.com',
      status: emailStatus,
    },
  });
});

// Mount Modular API Routes
app.use('/api/enquiries', enquiriesRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/admin', adminRoutes);

// In production, serve the built React static client files
const clientDistPath = path.resolve(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  // Let /api 404s fall through
  if (req.path.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(clientDistPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send('Larken Technologies API running. Frontend static build pending.');
    }
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: err.message || 'An unexpected internal error occurred.',
  });
});

// Start Server and Initialize Database
app.listen(PORT, async () => {
  console.log(`🚀 Larken Technologies Server running on port ${PORT}`);
  console.log(`📍 Corporate Headquarters: Overland Park, KS | contracts@larkenit.com`);
  await initDatabase();
});
