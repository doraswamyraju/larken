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
  ChevronDown, 
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Dark Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-[#071325]/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={closeEnquiryModal}
      ></div>

      {/* Modal Dialog Card - Exact Match to User Mockup */}
      <div className="relative w-full max-w-[885px] bg-white rounded-3xl sm:rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-100 z-10 animate-in zoom-in-95 fade-in duration-300">
        
        {/* Close Button (top-right of modal) */}
        <button
          onClick={closeEnquiryModal}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 p-1.5 text-slate-400 hover:text-slate-800 transition-colors rounded-full hover:bg-slate-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row items-stretch min-h-[540px]">
          
          {/* Left Column: Authentic Brand Artwork with Flowing S-Curve Wave */}
          <div className="w-full lg:w-[385px] lg:min-w-[385px] h-[240px] sm:h-[280px] lg:h-auto relative overflow-hidden bg-[#031838] flex-shrink-0">
            <img
              src="/images/popup-left-banner-retina.png"
              alt="Larken Technologies - IT Consulting, IT Staffing, Technology Solutions"
              className="w-full h-full object-cover object-left-top select-none pointer-events-none"
            />
          </div>

          {/* Right Column: Clean White Form with Rounded Inputs */}
          <div className="flex-1 p-6 sm:p-8 lg:p-9 flex flex-col justify-center bg-white relative">
            
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-larken-navy">Enquiry Dispatched!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Larken Technologies LLC. A notification has been sent directly to <strong>contracts@larkenit.com</strong>. Our team will review your requirements and follow up with you promptly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-[#0052cc] hover:bg-[#0047b3] text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header Section */}
                <div className="mb-5 pr-8">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#087DDB] mb-1.5">
                    <span>LET'S CONNECT</span>
                    <span className="w-8 sm:w-10 h-[2px] bg-[#087DDB]/40 inline-block"></span>
                  </div>
                  <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0B1E38] tracking-tight leading-tight">
                    Discuss Your <br className="hidden sm:inline" />
                    Technology Needs
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 mt-2 leading-relaxed">
                    Share your requirements and our team will get back to you shortly with the right solutions.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-3.5 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">
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
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#087DDB] focus:ring-2 focus:ring-[#087DDB]/15 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800"
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
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#087DDB] focus:ring-2 focus:ring-[#087DDB]/15 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800"
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
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#087DDB] focus:ring-2 focus:ring-[#087DDB]/15 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800"
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
                          className="w-full text-xs sm:text-sm pl-10 pr-8 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#087DDB] focus:ring-2 focus:ring-[#087DDB]/15 outline-none transition-all bg-white text-slate-700 appearance-none cursor-pointer"
                        >
                          <option value="IT Consulting">IT Consulting</option>
                          <option value="IT Staffing">IT Staffing</option>
                          <option value="General Enquiry">Technology Solutions</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message"
                        className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#087DDB] focus:ring-2 focus:ring-[#087DDB]/15 outline-none transition-all placeholder:text-slate-400 resize-none bg-white text-slate-800"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button (Vibrant Royal Blue matching mockup) */}
                  <div className="pt-1.5">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0052cc] hover:bg-[#0047b3] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                    >
                      {isLoading ? (
                        <span>Sending...</span>
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
