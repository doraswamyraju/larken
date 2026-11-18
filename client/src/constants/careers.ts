import { JobListing } from '../types';

export const INITIAL_JOB_LISTINGS: JobListing[] = [
  {
    id: 'job-ai-01',
    title: 'Generative AI & Machine Learning Engineer',
    department: 'AI & Emerging Technologies',
    location: 'Overland Park, KS / Hybrid / Remote (US)',
    employmentType: 'Full-time',
    description: 'We are seeking an experienced AI/ML Engineer to architect, fine-tune, and deploy modern LLM solutions and predictive machine learning models for enterprise clients.',
    requirements: [
      'Strong hands-on experience in Python, PyTorch/TensorFlow, and Hugging Face.',
      'Experience with LLM orchestration (LangChain, LlamaIndex, RAG architectures).',
      'Solid background in vector databases (Pinecone, pgvector, Milvus).',
      'BS/MS in Computer Science, Data Science, or equivalent practical experience.',
      'Must be authorized to work in the United States.'
    ],
    responsibilities: [
      'Design and implement production-ready Generative AI workflows.',
      'Optimize model latency, token utilization, and evaluation metrics.',
      'Collaborate with client stakeholders to translate business use cases into scalable technical implementations.'
    ],
    status: 'Open',
    createdAt: '2026-02-15',
  },
  {
    id: 'job-fs-02',
    title: 'Senior Full-Stack Engineer (React & Node.js)',
    department: 'Software Engineering',
    location: 'Overland Park, KS / Hybrid / Remote (US)',
    employmentType: 'Full-time',
    description: 'Looking for a Senior Full-Stack Engineer skilled in TypeScript, React, Node.js, and relational database systems to develop robust, customer-facing corporate and enterprise platforms.',
    requirements: [
      '5+ years building web applications with React, TypeScript, and modern state management.',
      'Strong proficiency with Node.js/Express, RESTful APIs, and relational databases (PostgreSQL).',
      'Demonstrated expertise in responsive UI, Tailwind CSS, and frontend performance optimization.',
      'Familiarity with cloud hosting, Docker, and CI/CD pipelines.',
      'Strong communication skills and collaborative problem-solving.'
    ],
    responsibilities: [
      'Architect modular front-end and back-end services.',
      'Participate in code reviews, technical architecture sessions, and sprint deliverables.',
      'Ensure high standards of security, accessibility, and cross-browser reliability.'
    ],
    status: 'Open',
    createdAt: '2026-02-10',
  },
  {
    id: 'job-devops-03',
    title: 'Cloud & DevOps Infrastructure Specialist',
    department: 'Cloud & Infrastructure',
    location: 'Remote (US)',
    employmentType: 'Contract',
    description: 'Seeking a Cloud & DevOps engineer to design automated CI/CD pipelines, manage container orchestration, and harden cloud infrastructure on AWS and Azure.',
    requirements: [
      '4+ years managing production workloads on AWS or Azure.',
      'Proficiency in Infrastructure as Code (Terraform or CloudFormation).',
      'Extensive experience with Kubernetes, Docker, Helm, and PM2/Nginx reverse proxy setups.',
      'Solid understanding of VPC networking, IAM security, and automated cloud backups.',
      'US-based work authorization.'
    ],
    responsibilities: [
      'Automate infrastructure provisioning and continuous delivery pipelines.',
      'Monitor system availability, latency, and resource utilization.',
      'Implement proactive security hardening and disaster recovery protocols.'
    ],
    status: 'Open',
    createdAt: '2026-02-05',
  },
  {
    id: 'job-data-04',
    title: 'Lead Data Engineer',
    department: 'Data & Analytics',
    location: 'Overland Park, KS / Remote (US)',
    employmentType: 'Full-time',
    description: 'Lead the design and execution of scalable data pipelines, data warehouses, and analytics infrastructure for enterprise decision intelligence.',
    requirements: [
      '5+ years building production ETL/ELT pipelines using SQL, Python, and Airflow/dbt.',
      'Deep expertise in modern relational and analytical databases (PostgreSQL, Snowflake, BigQuery).',
      'Experience in data modeling, schema optimization, and data governance standards.',
      'BS in Computer Science, Information Systems, or equivalent.'
    ],
    responsibilities: [
      'Build robust data ingestion and processing pipelines.',
      'Ensure high data quality, pipeline resilience, and compliance with privacy guidelines.',
      'Work alongside business analysts to deliver actionable reporting dashboards.'
    ],
    status: 'Open',
    createdAt: '2026-01-28',
  },
];
