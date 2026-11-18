export interface ConsultingCapability {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: string;
}

export interface StaffingCategory {
  id: string;
  category: string;
  description: string;
  roles: string[];
  iconName: string;
}

export const CONSULTING_CAPABILITIES: ConsultingCapability[] = [
  {
    id: 'ai-emerging-tech',
    title: 'AI & Emerging Technologies',
    shortDesc: 'Generative AI, machine learning models, and automated intelligent workflows engineered for enterprise growth.',
    fullDesc: 'We help organizations harness cutting-edge Generative AI and Machine Learning models to optimize decision-making, automate complex tasks, and create intelligent digital products tailored to business workflows.',
    features: [
      'Generative AI & LLM Integration',
      'Machine Learning Pipeline Development',
      'Intelligent Automation & Agentic Systems',
      'AI Ethics, Governance & Model Safety'
    ],
    iconName: 'Cpu',
  },
  {
    id: 'software-application-development',
    title: 'Software & Application Development',
    shortDesc: 'Full lifecycle modern web, mobile, and enterprise software engineering built for speed, scale, and resilience.',
    fullDesc: 'End-to-end custom application development from architecture design to deployment. We leverage modern microservices, clean code paradigms, and secure development practices.',
    features: [
      'Custom Web & Mobile Applications',
      'Microservices & API Architecture',
      'Legacy System Modernization',
      'Scalable Multi-Tenant Platforms'
    ],
    iconName: 'Code2',
  },
  {
    id: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    shortDesc: 'Secure cloud architecture, automated CI/CD pipelines, and high-availability infrastructure on AWS and Azure.',
    fullDesc: 'Modernize your infrastructure with secure cloud migrations, container orchestration (Docker/Kubernetes), automated deployment pipelines, and proactive infrastructure monitoring.',
    features: [
      'Cloud Migration & Architecture (AWS, Azure, GCP)',
      'CI/CD Pipeline Automation',
      'Infrastructure as Code (Terraform, Ansible)',
      'Site Reliability Engineering & Observability'
    ],
    iconName: 'Cloud',
  },
  {
    id: 'data-engineering-analytics',
    title: 'Data Engineering & Analytics',
    shortDesc: 'Robust data pipelines, centralized warehouses, and real-time business intelligence to unlock data value.',
    fullDesc: 'Design and deploy modern data lakes, ETL/ELT pipelines, and advanced analytics architectures that empower leaders to make confident, data-driven decisions.',
    features: [
      'Modern Data Warehousing & Lakehouses',
      'Real-Time ETL/ELT Pipeline Engineering',
      'Business Intelligence & Reporting Dashboards',
      'Data Governance & Quality Management'
    ],
    iconName: 'BarChart3',
  },
  {
    id: 'cybersecurity-consulting',
    title: 'Cybersecurity Consulting',
    shortDesc: 'Proactive defense, vulnerability assessment, compliance alignment, and enterprise security architecture.',
    fullDesc: 'Protect business-critical assets through rigorous risk assessments, security auditing, zero-trust architecture, and adherence to leading compliance frameworks.',
    features: [
      'Zero-Trust Architecture & Threat Modeling',
      'Vulnerability Assessments & Code Auditing',
      'Identity & Access Management (IAM)',
      'Security Compliance & Risk Advisory'
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    shortDesc: 'Modernizing legacy workflows with agile, digital-first platforms that boost operational velocity.',
    fullDesc: 'Guide your organization through seamless digital modernization, migrating cumbersome legacy processes into responsive, cloud-native operational ecosystems.',
    features: [
      'Operational Workflow Digitization',
      'Agile Process Engineering',
      'Customer Experience (CX) Modernization',
      'Change Management & Technology Adoption'
    ],
    iconName: 'RefreshCw',
  },
  {
    id: 'strategy-advisory',
    title: 'Technology Strategy & Advisory',
    shortDesc: 'Executive technology roadmaps, IT portfolio evaluation, and strategic alignment with business objectives.',
    fullDesc: 'Equip leadership with forward-looking technology strategies, cost-optimization plans, and vendor-neutral evaluation frameworks designed to drive measurable ROI.',
    features: [
      'Virtual CTO / Technical Advisory',
      'IT Architecture Roadmapping & Budgeting',
      'Technology Stack Evaluation',
      'Vendor & Tooling Assessment'
    ],
    iconName: 'Compass',
  },
  {
    id: 'enterprise-integration',
    title: 'Enterprise Technology Integration',
    shortDesc: 'Seamless connectivity between disparate ERP, CRM, legacy systems, and modern SaaS ecosystems.',
    fullDesc: 'Eliminate operational silos by connecting core enterprise systems through robust middleware, secure event-driven messaging, and resilient API gateways.',
    features: [
      'Enterprise Service Bus & API Gateways',
      'ERP & CRM System Interoperability',
      'Event-Driven Architecture (Kafka, RabbitMQ)',
      'Data Synchronization & Consistency'
    ],
    iconName: 'Layers',
  },
];

export const STAFFING_CATEGORIES: StaffingCategory[] = [
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    description: 'Specialists driving AI model development, natural language processing, computer vision, and machine learning infrastructure.',
    roles: [
      'AI Engineers',
      'Machine Learning Engineers',
      'Generative AI Specialists',
      'Data Scientists'
    ],
    iconName: 'Bot',
  },
  {
    id: 'software-dev',
    category: 'Software Development',
    description: 'Expert engineers across modern front-end, high-throughput back-end, and cross-platform mobile environments.',
    roles: [
      'Frontend Developers',
      'Backend Developers',
      'Full-Stack Developers',
      'Mobile Application Developers',
      'Software Architects'
    ],
    iconName: 'Code',
  },
  {
    id: 'cloud-devops',
    category: 'Cloud & DevOps',
    description: 'Infrastructure and automation experts ensuring zero-downtime, continuous delivery, and optimized cloud spend.',
    roles: [
      'Cloud Engineers',
      'DevOps Engineers',
      'AWS / Azure Specialists',
      'Infrastructure Engineers',
      'Site Reliability Engineers'
    ],
    iconName: 'CloudCog',
  },
  {
    id: 'data-analytics',
    category: 'Data & Analytics',
    description: 'Data professionals proficient in modern data stacks, pipeline engineering, predictive analytics, and executive BI.',
    roles: [
      'Data Analysts',
      'Data Engineers',
      'Business Intelligence Developers',
      'Data Scientists'
    ],
    iconName: 'Database',
  },
  {
    id: 'cybersecurity',
    category: 'Cybersecurity',
    description: 'Security practitioners focused on threat monitoring, penetration testing, compliance, and infrastructure hardening.',
    roles: [
      'Security Analysts',
      'Security Engineers',
      'Security Consultants'
    ],
    iconName: 'Lock',
  },
  {
    id: 'qa-testing',
    category: 'QA & Testing',
    description: 'Quality assurance engineers ensuring software reliability, test coverage, and performance under peak loads.',
    roles: [
      'Manual Test Engineers',
      'Automation Test Engineers',
      'QA Analysts',
      'Performance Testing Specialists'
    ],
    iconName: 'CheckCircle2',
  },
  {
    id: 'enterprise-it',
    category: 'Enterprise IT',
    description: 'Strategic IT leaders and analysts bridging technical implementation with business objectives and delivery timelines.',
    roles: [
      'IT Project Managers',
      'Business Analysts',
      'Technical Consultants',
      'Enterprise Architects',
      'IT Support Specialists'
    ],
    iconName: 'Briefcase',
  },
];

export const INDUSTRIES_SERVED = [
  {
    title: 'Financial Services & FinTech',
    desc: 'High-security transaction platforms, regulatory compliance architectures, and fraud detection algorithms.',
    icon: 'Building2',
  },
  {
    title: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant data pipelines, patient-centric portals, and analytics for clinical efficiency.',
    icon: 'HeartPulse',
  },
  {
    title: 'Supply Chain & Logistics',
    desc: 'Real-time telemetry, automated inventory analytics, and cloud dispatch tracking architectures.',
    icon: 'Truck',
  },
  {
    title: 'Retail & E-Commerce',
    desc: 'High-throughput omni-channel platforms, personalized AI recommendation engines, and resilient payment checkouts.',
    icon: 'ShoppingBag',
  },
  {
    title: 'Enterprise Software & SaaS',
    desc: 'Multi-tenant cloud architectures, scalable REST & GraphQL APIs, and reliable CI/CD release engineering.',
    icon: 'Server',
  },
  {
    title: 'Professional Services',
    desc: 'Custom CRM/ERP workflows, document automation, and secure corporate collaboration platforms.',
    icon: 'Briefcase',
  },
];
