import React from 'react';
import { COMPANY_INFO } from '../constants/company';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-larken-lightBg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-soft space-y-8">
          
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-larken-blue text-xs font-semibold mb-3">
              <FileText className="w-4 h-4" />
              <span>Legal Terms</span>
            </div>
            <h1 className="text-3xl font-extrabold text-larken-navy">
              Terms of Use
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Last Updated: February 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website of <strong>{COMPANY_INFO.legalName}</strong> at <strong>{COMPANY_INFO.website}</strong>, you agree to be bound by these Terms of Use and all applicable United States federal, state, and local laws.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">2. Nature of Services and Information</h2>
              <p>
                The materials and information presented on this website are provided solely for general informational purposes concerning our IT Consulting and IT Staffing service capabilities. No client engagement, consulting contract, or employment relationship is formed solely by submitting an enquiry or application through this website. Binding agreements require an executed Master Services Agreement (MSA), Statement of Work (SOW), or written employment agreement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">3. Intellectual Property Rights</h2>
              <p>
                All original text, website design, graphics, logos, icons, and software code on this website are the intellectual property of <strong>{COMPANY_INFO.legalName}</strong> and are protected by United States and international copyright and trademark laws. Unauthorized reproduction or redistribution is prohibited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">4. Candidate Submissions & Resumes</h2>
              <p>
                When submitting a resume or candidate profile through our Careers portal, you represent that all information provided is accurate, truthful, and non-misleading. You retain ownership of your resume, granting {COMPANY_INFO.legalName} authorization to review and evaluate your qualifications for matching employment or consulting opportunities.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">5. Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Submit false, fraudulent, or impersonated information.</li>
                <li>Attempt to probe, scan, or breach system security or bypass access restrictions.</li>
                <li>Deploy automated bots, spiders, or scrapers to extract candidate data or corporate assets.</li>
                <li>Transmit malicious code, viruses, or unauthorized attachments.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">6. Disclaimer of Warranties & Limitation of Liability</h2>
              <p>
                This website and its content are provided on an "as-is" and "as-available" basis without warranties of any kind. In no event shall {COMPANY_INFO.legalName} be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this site.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">7. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Kansas, USA, without regard to conflict of law principles.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">8. Contact Information</h2>
              <p>
                Direct legal questions regarding these Terms to:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div><strong>{COMPANY_INFO.legalName}</strong></div>
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
