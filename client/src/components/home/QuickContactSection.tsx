import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../constants/company';
import { apiService } from '../../services/api';
import { BusinessEnquiryPayload, ServiceInterest } from '../../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';

export const QuickContactSection: React.FC = () => {
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
      setErrorMessage(err.message || 'Error sending message.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Connect With Our Leadership Team"
          subtitle="Reach out directly to discuss your corporate IT roadmap, request candidate profiles, or schedule an exploratory consultation."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Verified Contact Information & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-larken-lightBg rounded-2xl p-8 border border-slate-200/80 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-larken-navy">
                  Larken Technologies LLC
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  US Registered Technology Consulting & Staffing
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-larken-navy">Office Address</div>
                    <div className="text-slate-600 mt-0.5">{COMPANY_INFO.address.street}</div>
                    <div className="text-slate-600">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.stateCode} {COMPANY_INFO.address.zip}</div>
                    <div className="text-slate-600">{COMPANY_INFO.address.country}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-larken-navy">Phone</div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="text-larken-blue hover:underline font-medium block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-larken-navy">Corporate Email</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-larken-blue hover:underline font-medium block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

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
                  className="inline-flex items-center gap-2 text-xs font-semibold text-larken-blue hover:text-larken-navy"
                >
                  <span>Open 10318 Conser St in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-soft">
            <h3 className="text-2xl font-bold text-larken-navy mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Complete the form below and an engagement manager will follow up within one business day.
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-larken-navy">Enquiry Dispatched!</h4>
                <p className="text-sm text-slate-600">
                  Thank you. Your enquiry has been forwarded directly to <strong>{COMPANY_INFO.email}</strong>.
                </p>
                <Button
                  variant="outline"
                  size="sm"
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
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
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
                    placeholder="Full name"
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all"
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
                      placeholder="name@company.com"
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all"
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
                      placeholder="+1 (913) 000-0000"
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all"
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
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all bg-white"
                  >
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="IT Staffing">IT Staffing</option>
                    <option value="General Enquiry">General Corporate Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your project scope, staffing timeline, or general questions..."
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isLoading}
                  rightIcon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Send Enquiry
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
