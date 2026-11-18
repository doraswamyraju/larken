import rateLimit from 'express-rate-limit';

// Standard public API rate limiter (100 requests per 15 minutes)
export const standardLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes.',
  },
});

// Strict rate limiter for form submissions (enquiries & applications: max 5 requests per 10 minutes)
export const submissionLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Submission limit reached. Please wait a few minutes before submitting another request.',
  },
});
