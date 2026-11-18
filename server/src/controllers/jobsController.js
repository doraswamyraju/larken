import { pool, isDbConnected } from '../config/db.js';

const DEFAULT_JOBS = [
  {
    id: 1,
    title: 'Generative AI & Machine Learning Engineer',
    department: 'AI & Emerging Technologies',
    location: 'Overland Park, KS / Hybrid / Remote (US)',
    employment_type: 'Full-time',
    description: 'We are seeking an experienced AI/ML Engineer to architect, fine-tune, and deploy modern LLM solutions and predictive machine learning models for enterprise clients.',
    requirements: [
      'Strong hands-on experience in Python, PyTorch/TensorFlow, and Hugging Face.',
      'Experience with LLM orchestration (LangChain, LlamaIndex, RAG architectures).',
      'Solid background in vector databases (Pinecone, pgvector, Milvus).',
      'BS/MS in Computer Science, Data Science, or equivalent practical experience.',
      'Must be authorized to work in the United States.'
    ],
    status: 'Open',
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Senior Full-Stack Engineer (React & Node.js)',
    department: 'Software Engineering',
    location: 'Overland Park, KS / Hybrid / Remote (US)',
    employment_type: 'Full-time',
    description: 'Looking for a Senior Full-Stack Engineer skilled in TypeScript, React, Node.js, and relational database systems to develop robust, customer-facing corporate and enterprise platforms.',
    requirements: [
      '5+ years building web applications with React, TypeScript, and modern state management.',
      'Strong proficiency with Node.js/Express, RESTful APIs, and relational databases (PostgreSQL).',
      'Demonstrated expertise in responsive UI, Tailwind CSS, and frontend performance optimization.',
      'Familiarity with cloud hosting, Docker, and CI/CD pipelines.'
    ],
    status: 'Open',
    created_at: new Date().toISOString(),
  },
];

export const jobsController = {
  /**
   * Get public open jobs
   */
  async getPublicJobs(req, res) {
    try {
      if (isDbConnected()) {
        const result = await pool.query(
          "SELECT * FROM job_listings WHERE status = 'Open' ORDER BY created_at DESC"
        );
        if (result.rows.length > 0) {
          return res.json({ success: true, data: result.rows });
        }
      }
      return res.json({ success: true, data: DEFAULT_JOBS });
    } catch (err) {
      return res.json({ success: true, data: DEFAULT_JOBS });
    }
  },

  /**
   * Create a new job listing (Admin)
   */
  async createJob(req, res) {
    try {
      const { title, department, location, employmentType, description, requirements } = req.body;
      if (!title || !department || !location || !description) {
        return res.status(400).json({ success: false, message: 'All job fields are required.' });
      }

      if (isDbConnected()) {
        const query = `
          INSERT INTO job_listings (title, department, location, employment_type, description, requirements, status)
          VALUES ($1, $2, $3, $4, $5, $6, 'Open')
          RETURNING *;
        `;
        const result = await pool.query(query, [
          title,
          department,
          location,
          employmentType || 'Full-time',
          description,
          requirements || [],
        ]);
        return res.status(201).json({ success: true, data: result.rows[0] });
      }

      return res.status(201).json({
        success: true,
        data: { id: Date.now(), title, department, location, employmentType, description, requirements },
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
};
