import React from 'react';
import { COMPANY_INFO } from '../constants/company';
import { Cookie } from 'lucide-react';

export const CookiePolicyPage: React.FC = () => {
  return (
    <div className="bg-larken-lightBg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-soft space-y-8">
          
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-larken-blue text-xs font-semibold mb-3">
              <Cookie className="w-4 h-4" />
              <span>Cookie Policy</span>
            </div>
            <h1 className="text-3xl font-extrabold text-larken-navy">
              Cookie Notice & Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Last Updated: February 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your computer or mobile device when you access websites. They are widely used to ensure websites function properly, retain visitor preferences, and provide analytical insights to website operators.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">2. How Larken Technologies LLC Uses Cookies</h2>
              <p>
                <strong>{COMPANY_INFO.legalName}</strong> uses minimal, essential, and performance-related cookies on <strong>{COMPANY_INFO.website}</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Strictly Necessary Cookies:</strong> Essential for the operation of our website, including security token validation, CSRF protection, and session maintenance when interacting with inquiry forms.
                </li>
                <li>
                  <strong>Performance & Analytics Cookies:</strong> Help us measure visitor counts, traffic sources, and navigational flow across pages so we can diagnose bottlenecks and enhance user experience.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">3. Third-Party Cookies</h2>
              <p>
                We do not sell data to third-party advertising networks. We may utilize standardized web analytics tools or embedded interactive maps (e.g., Google Maps iframe for our verified office location) which may set functional cookies governed by their respective privacy policies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">4. Managing Your Cookie Preferences</h2>
              <p>
                Most modern web browsers allow you to control or block cookies through browser settings. Note that disabling strictly necessary cookies may degrade certain website features, such as form submissions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-larken-navy">5. Contact Information</h2>
              <p>
                For questions regarding our use of cookies, contact us at:
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
