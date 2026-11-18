import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { COMPANY_INFO } from '../constants/company';
import { apiService } from '../services/api';
import { BusinessEnquiryPayload, ServiceInterest } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<BusinessEnquiryPayload>({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'IT Consulting',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await apiService.submitEnquiry(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(res.message);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Error sending enquiry.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-larken-lightBg">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-larken-navy via-larken-navyDark to-[#071D3B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-larken-cyan text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Overland Park, Kansas • Direct Corporate Line</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Contact Larken Technologies
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project to discuss or need specialized engineering talent? Get in touch with our team directly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Official Contact Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft space-y-6">
                
                {/* Official Corporate Office Visual */}
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 img-zoom-container group relative">
                  <img
                    src="/images/contact-office.jpg"
                    alt="Larken Technologies LLC Headquarters in Overland Park, KS"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium flex justify-between items-center">
                    <span className="font-semibold text-larken-cyan">Overland Park, KS HQ</span>
                    <span className="text-slate-300">10318 Conser St</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-larken-blue bg-blue-50 px-2.5 py-1 rounded">
                    Official Corporate Details
                  </span>
                  <h2 className="text-2xl font-bold text-larken-navy mt-2">
                    {COMPANY_INFO.legalName}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    State of Kansas Registered Entity
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Street Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-larken-navy">Corporate Headquarters</div>
                      <div className="text-slate-600 mt-0.5">{COMPANY_INFO.address.street}</div>
                      <div className="text-slate-600">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.stateCode} {COMPANY_INFO.address.zip}</div>
                      <div className="text-slate-600">{COMPANY_INFO.address.country}</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-larken-navy">Telephone (Click to call)</div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="text-larken-blue hover:underline font-semibold block mt-0.5"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-larken-navy">Business Email (Click to email)</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-larken-blue hover:underline font-semibold block mt-0.5"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0 mt-0.5">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-larken-navy">Official Website</div>
                      <a
                        href={COMPANY_INFO.website}
                        className="text-larken-blue hover:underline block mt-0.5"
                      >
                        {COMPANY_INFO.website}
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-larken-navy">Operating Hours</div>
                      <div className="text-slate-600 mt-0.5">{COMPANY_INFO.businessHours}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={COMPANY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-larken-blue hover:text-larken-navy"
                  >
                    <span>Open in Google Maps Application</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Security and SLA Note */}
              <div className="p-5 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-larken-navy">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict Confidentiality Guaranteed</span>
                </div>
                <p>
                  All project inquiries and business requirements are safeguarded under standard mutual non-disclosure and processed solely by authorized Larken Technologies LLC engagement officers.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-soft">
              <h2 className="text-2xl font-bold text-larken-navy">
                Send an Official Enquiry
              </h2>
              <p className="text-sm text-slate-500 mt-1 mb-6">
                Fill in the form below. Inquiries are dispatched directly to our contract desk at <strong>{COMPANY_INFO.email}</strong>.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-larken-navy">Enquiry Dispatched!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. We have received your submission and an email notification has been triggered to <strong>{COMPANY_INFO.email}</strong>. An engagement partner will be in touch with you shortly.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          serviceInterest: 'IT Consulting',
                          message: '',
                        });
                      }}
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.smith@enterprise.com"
                        className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (913) 636-9902"
                        className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value as ServiceInterest })}
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none bg-white"
                    >
                      <option value="IT Consulting">IT Consulting (AI, Cloud, Software, Architecture)</option>
                      <option value="IT Staffing">IT Staffing (Specialized Engineers & Technical Teams)</option>
                      <option value="General Enquiry">General Corporate Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Detailed Message / Requirements
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your objectives, existing stack, hiring timeline, or any specific requirements..."
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isLoading}
                      rightIcon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      Send Enquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Google Maps Location Integration */}
          <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-larken-navy">
                  Verified Headquarters Location
                </h3>
                <p className="text-xs text-slate-500">
                  {COMPANY_INFO.fullAddress}
                </p>
              </div>
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-larken-blue hover:text-larken-navy"
              >
                <span>Get Driving Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              <iframe
                title="Larken Technologies LLC Office Location"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
