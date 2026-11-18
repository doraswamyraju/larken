import React, { useState } from 'react';
import { Button } from '../common/Button';
import { BusinessEnquiryPayload } from '../../types';
import { apiService } from '../../services/api';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface HeroEnquiryFormProps {
  className?: string;
}

export const HeroEnquiryForm: React.FC<HeroEnquiryFormProps> = ({ className = '' }) => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, business email, and phone number.');
      return;
    }

    // Email validation
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
        setErrorMessage(res.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100 flex flex-col items-center text-center ${className}`}>
        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-larken-navy">Enquiry Submitted!</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Thank you for reaching out to Larken Technologies. A copy of your request has been routed to{' '}
          <strong className="text-larken-navy font-semibold">contracts@larkenit.com</strong>. Our technical team will review your requirements and respond promptly.
        </p>
        <div className="mt-6 w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
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
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200/90 relative ${className}`}>
      <div className="mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-larken-blue bg-blue-50 px-2.5 py-1 rounded-md">
          Fast-Track Consultation
        </span>
        <h3 className="text-xl font-bold text-larken-navy mt-2">
          Request a Consultation
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Tell us about your technical roadmap or talent requirements.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              required
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Service Interest <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all bg-white"
          >
            <option value="IT Consulting">IT Consulting (Architecture, Cloud, AI)</option>
            <option value="IT Staffing">IT Staffing (Tech Specialists & Teams)</option>
            <option value="General Enquiry">General Corporate Enquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Project Overview or Requirements
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your objectives, technologies, or hiring timeline..."
            className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all placeholder:text-slate-400 resize-none"
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full mt-2"
          isLoading={isLoading}
          rightIcon={<Send className="w-4 h-4" />}
        >
          Send Enquiry
        </Button>

        <p className="text-[11px] text-center text-slate-400 pt-1">
          Confidential. Direct dispatch to contracts@larkenit.com. No spam.
        </p>
      </form>
    </div>
  );
};
