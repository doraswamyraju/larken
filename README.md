# Larken Technologies LLC — Corporate Website & Application Platform

Official corporate website and technical architecture for **Larken Technologies LLC**, a United States technology consulting and staffing firm headquartered in Overland Park, Kansas.

---

## 1. Verified Company Information
* **Legal Business Name:** Larken Technologies LLC
* **Website:** [https://larkenit.com](https://larkenit.com)
* **Corporate Email:** [contracts@larkenit.com](mailto:contracts@larkenit.com)
* **Phone:** [+1 (913) 636-9902](tel:+19136369902)
* **Corporate Address:** 10318 Conser St, Ste 1J, Overland Park, KS 66212, USA

---

## 2. Core Offerings
1. **IT Consulting:** AI & Emerging Technologies (Generative AI & ML), Custom Software & Application Development, Cloud Computing & DevOps, Data Engineering & Analytics, Cybersecurity Consulting, Digital Transformation, Technology Strategy & Advisory, and Enterprise Technology Integration.
2. **IT Staffing:** Pre-vetted technology talent across AI/ML Specialists, Full-Stack Developers, Cloud & DevOps Engineers, Data Analysts & Engineers, Cybersecurity Specialists, QA & Automation Engineers, and Enterprise IT Leadership.

---

## 3. Brand Design System
* **Primary Navy:** `#071D3B`
* **Secondary Navy:** `#0B2D52`
* **Primary Blue:** `#087DDB`
* **Accent Cyan:** `#43C5FF`
* **Light Background:** `#F4F7FB`
* **Body Text:** `#35465B`
* **White:** `#FFFFFF`
* **Typography:** Inter (modern sans-serif)

---

## 4. Technical Architecture
```
Larken/
├── client/                     # Frontend Application (React + Vite + TypeScript + Tailwind)
│   ├── public/                 # Static assets (SVG logo mark, favicon)
│   ├── src/
│   │   ├── components/         # Modular layout, common, and home page components
│   │   ├── constants/          # Verified company data, capabilities, open careers
│   │   ├── pages/              # Home, About, Consulting, Staffing, Careers, Contact, Legal
│   │   ├── services/           # API integration service
│   │   └── types/              # TypeScript interfaces
│   └── dist/                   # Production build distribution
│
├── server/                     # Backend REST API (Node.js + Express + PostgreSQL)
│   ├── src/
│   │   ├── config/             # PostgreSQL database pool & table initialization
│   │   ├── controllers/        # Business enquiries, jobs, applications, admin
│   │   ├── middleware/         # Rate limiting, JWT authentication, secure file upload
│   │   ├── routes/             # Express API routes (/api/enquiries, /api/jobs, etc.)
│   │   └── services/           # Nodemailer notification service (contracts@larkenit.com)
│   └── uploads/resumes/        # Private, non-public candidate resume storage
│
├── deploy/                     # Deployment configurations
│   └── nginx/                  # Nginx site configuration for larkenit.com
├── ecosystem.config.cjs        # PM2 cluster configuration for Hostinger VPS
└── DEPLOYMENT.md               # VPS deployment, security, and maintenance guide
```

---

## 5. Local Development Quickstart

### Prerequisites
* Node.js >= 18.x
* npm >= 9.x

### Installation
```bash
# Install dependencies for both client and server
npm run install:all
```

### Running Frontend (Vite Dev Server)
```bash
cd client
npm run dev
# Accessible at http://localhost:3000
```

### Running Backend API
```bash
cd server
cp .env.example .env
# Edit .env with your local credentials if using PostgreSQL
node src/server.js
# Running on port 5050 (API: http://localhost:5050/api/health)
```

### Production Build
```bash
npm run build:client
```
