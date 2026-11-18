import React from 'react';
import { COMPANY_INFO } from '../constants/company';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-larken-lightBg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-soft space-y-8">
          
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-larken-blue text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>US Legal & Compliance Document</span>
            </div>
            <h1 className="text-3xl font-extrabold text-larken-navy">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date: February 15, 2026 • Last Reviewed: 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">1. Introduction</h2>
              <p>
                <strong>{COMPANY_INFO.legalName}</strong> ("Larken Technologies", "we", "us", or "our"), located at {COMPANY_INFO.fullAddress}, is committed to respecting and protecting the privacy of our website visitors, clients, partners, and job candidates.
              </p>
              <p>
                This Privacy Policy explains how we collect, store, use, disclose, and safeguard personal information collected through our website (<strong>{COMPANY_INFO.website}</strong>), during business inquiries, and throughout our recruiting and candidate submission processes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">2. Information We Collect</h2>
              <p>We collect information in two primary categories:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Business Enquiry Information:</strong> When you request consulting or staffing services, we collect your full name, corporate email address, telephone number, organization name, service interest, and any information provided in your project description.
                </li>
                <li>
                  <strong>Candidate & Career Information:</strong> When you apply for a job or join our talent pool, we collect your full name, email address, telephone number, geographic location, career history, skills, employment eligibility, and uploaded documents (such as resumes, CVs, or portfolios).
                </li>
                <li>
                  <strong>Technical & Usage Data:</strong> IP address, browser type, operating system, pages visited, and referring URLs, collected automatically to maintain website security, prevent fraud, and optimize performance.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">3. Purpose and Legal Basis for Processing</h2>
              <p>We process your data for legitimate business purposes, including:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Responding to inquiries submitted via our contact forms and scheduling consultations.</li>
                <li>Evaluating candidate applications for suitable consulting, contract, or full-time roles.</li>
                <li>Complying with applicable US federal, state, and local employment and tax laws.</li>
                <li>Preventing malicious activities, automated spam, and unauthorized access to our systems.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">4. Candidate Resume & Data Protection</h2>
              <p>
                Candidate resumes and personally identifiable information (PII) are stored in secure, private directories and access-restricted databases. We do NOT sell, rent, or publicly display candidate resumes. Resumes are accessed exclusively by authorized recruiters, hiring managers, and prospective client evaluators under confidentiality terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">5. Third-Party Disclosures</h2>
              <p>
                We do not sell your personal data. We may share necessary information with trusted service providers who assist our operations (e.g., cloud hosting infrastructure, transactional email dispatch) under strict confidentiality and security agreements. We may also disclose data when required by valid legal process or court order.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">6. Your Privacy Rights</h2>
              <p>
                Depending on your jurisdiction (including rights under state privacy regulations such as the California Consumer Privacy Act and other applicable state statutes), you may have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at <strong>{COMPANY_INFO.email}</strong>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">7. Contact Information</h2>
              <p>If you have any questions or concerns regarding this Privacy Policy, please contact our privacy compliance desk:</p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div><strong>{COMPANY_INFO.legalName}</strong></div>
                <div>Attn: Privacy & Compliance</div>
                <div>{COMPANY_INFO.fullAddress}</div>
                <div>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-larken-blue underline">{COMPANY_INFO.email}</a></div>
                <div>Phone: {COMPANY_INFO.phone}</div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};
