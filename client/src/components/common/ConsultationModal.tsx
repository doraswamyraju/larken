import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { apiService } from '../../services/api';
import { BusinessEnquiryPayload, ServiceInterest } from '../../types';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Layers, 
  MessageSquare, 
  ArrowRight, 
  Code, 
  Users, 
  Cpu, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export const ConsultationModal: React.FC = () => {
  const { isEnquiryModalOpen, closeEnquiryModal } = useModal();

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

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isEnquiryModalOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnquiryModalOpen, closeEnquiryModal]);

  if (!isEnquiryModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage('Full name and business email are required.');
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
      setErrorMessage(err.message || 'Error submitting enquiry.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceInterest: 'IT Consulting',
      message: '',
    });
    closeEnquiryModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={closeEnquiryModal}
      ></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-[28px] shadow-2xl overflow-hidden border border-slate-200/90 z-10 animate-in zoom-in-95 fade-in duration-300">
        
        {/* Close Button */}
        <button
          onClick={closeEnquiryModal}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left Column: Brand Graphic & Service Badges with Curved Wave */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#071D3B] via-[#0B2D52] to-[#041328] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Background Glows & Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-larken-blue/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-larken-cyan/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-8">
              {/* Logo */}
              <div>
                <img
                  src="/logo-white.png"
                  alt="Larken Technologies LLC"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>

              {/* 3 Featured Service Badges (matching design) */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm hover:bg-white/15 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-larken-blue/30 flex items-center justify-center text-larken-cyan border border-larken-cyan/30">
                    <Code className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-white">
                    IT Consulting
                  </span>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm hover:bg-white/15 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/30 flex items-center justify-center text-emerald-400 border border-emerald-400/30">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-white">
                    IT Staffing
                  </span>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm hover:bg-white/15 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/30 flex items-center justify-center text-larken-cyan border border-cyan-400/30">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-white">
                    Technology Solutions
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Holographic Graphic Element */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
              <div className="w-2.5 h-2.5 rounded-full bg-larken-cyan animate-pulse"></div>
              <span>Overland Park, KS • Direct US Consultation</span>
            </div>
          </div>

          {/* Right Column: Clean White Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center bg-white relative">
            
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-larken-navy">Enquiry Dispatched!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for connecting with Larken Technologies LLC. A notification has been sent directly to our team at <strong>contracts@larkenit.com</strong>. We will review your requirements and reach out to you promptly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-larken-blue hover:bg-[#076bc0] text-white text-sm font-semibold shadow-md transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 pr-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-larken-blue mb-1">
                    <span>LET'S CONNECT</span>
                    <span className="w-8 h-[2px] bg-larken-blue/40 inline-block"></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-larken-navy tracking-tight">
                    Discuss Your Technology Needs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                    Share your requirements and our team will get back to you shortly with the right solutions.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Full Name *"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all placeholder:text-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Business Email *"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all placeholder:text-slate-400 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone and Service Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all placeholder:text-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Layers className="w-4 h-4" />
                        </div>
                        <select
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value as ServiceInterest })}
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all bg-white text-slate-700"
                        >
                          <option value="IT Consulting">IT Consulting</option>
                          <option value="IT Staffing">IT Staffing</option>
                          <option value="General Enquiry">General Corporate Enquiry</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message"
                        className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none transition-all placeholder:text-slate-400 resize-none bg-white"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-xl bg-larken-blue hover:bg-[#076bc0] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {isLoading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
