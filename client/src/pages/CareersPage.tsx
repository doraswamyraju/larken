import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { INITIAL_JOB_LISTINGS } from '../constants/careers';
import { JobListing, CandidateApplicationPayload } from '../types';
import { apiService } from '../services/api';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Lock,
  Filter
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [jobs] = useState<JobListing[]>(INITIAL_JOB_LISTINGS);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Candidate Application Form State
  const [formData, setFormData] = useState<CandidateApplicationPayload>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    experience: '',
    preferredRole: '',
    additionalMessage: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const categories = ['All', 'AI & Emerging Technologies', 'Software Engineering', 'Cloud & Infrastructure', 'Data & Analytics'];

  const filteredJobs = selectedCategory === 'All'
    ? jobs
    : jobs.filter((j) => j.department === selectedCategory);

  const handleOpenApplyModal = (job?: JobListing) => {
    if (job) {
      setSelectedJob(job);
      setFormData((prev) => ({
        ...prev,
        jobId: job.id,
        preferredRole: job.title,
      }));
    } else {
      setSelectedJob(null);
      setFormData((prev) => ({
        ...prev,
        jobId: undefined,
        preferredRole: '',
      }));
    }
    setSubmitted(false);
    setErrorMessage(null);
    setIsApplyModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 10MB, PDF/DOC/DOCX
      const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowed.includes(file.type)) {
        setErrorMessage('Please upload a PDF or Word document (.pdf, .doc, .docx).');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('Resume file size cannot exceed 10MB.');
        return;
      }
      setResumeFile(file);
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setErrorMessage('Please fill in your full name, email, phone number, and location.');
      return;
    }

    if (!resumeFile) {
      setErrorMessage('Please attach your resume file (PDF or Word document).');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const payload: CandidateApplicationPayload = {
        ...formData,
        resumeFile,
      };

      const res = await apiService.submitApplication(payload);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(res.message);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Submission failed. Please try again.');
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Technology Network</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Careers & Technical Opportunities
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Collaborate on mission-critical corporate technology initiatives. We connect skilled software engineers, AI researchers, and cloud architects with premier enterprise projects.
          </p>
          <div className="pt-2">
            <Button
              onClick={() => handleOpenApplyModal()}
              variant="primary"
              size="lg"
            >
              Submit General Candidate Application
            </Button>
          </div>
        </div>
      </section>

      {/* Main Opportunities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-larken-navy">Current Openings</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore available roles or submit an open application to our verified talent network.
              </p>
            </div>

            {/* Department Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-larken-navy text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft hover:shadow-card transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3 flex-grow">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-larken-blue border border-blue-100">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        {job.employmentType}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-larken-navy">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        Posted: {job.createdAt}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                      {job.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Key Requirements:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                        {job.requirements.map((req, ridx) => (
                          <li key={ridx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-larken-blue mt-1.5 flex-shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:border-l lg:border-slate-100 lg:pl-8 flex flex-col justify-center sm:items-start lg:min-w-[180px]">
                    <Button
                      onClick={() => handleOpenApplyModal(job)}
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      Apply Now
                    </Button>
                    <span className="text-[11px] text-slate-400 text-center w-full mt-2">
                      Direct Review by HR
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Candidate Privacy & Security Disclosure */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Strict Candidate Privacy Guarantee</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            All submitted candidate information, contact records, and resumes are securely stored and protected from public access. Your profile is handled exclusively by authorized Larken Technologies talent acquisition staff in compliance with US employment privacy standards.
          </p>
        </div>
      </section>

      {/* Application Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-larken-navy">
                  Application Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for applying to Larken Technologies LLC. Your profile and resume have been securely logged in our system. A talent acquisition specialist will review your background and reach out to you at <strong>{formData.email}</strong>.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setIsApplyModalOpen(false)}
                  >
                    Close Window
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-larken-blue bg-blue-50 px-2.5 py-1 rounded">
                    Candidate Application
                  </span>
                  <h3 className="text-xl font-bold text-larken-navy mt-2">
                    {selectedJob ? `Apply for ${selectedJob.title}` : 'Submit General Application'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {selectedJob ? selectedJob.location : 'Larken Technologies Talent Network'}
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john.smith@domain.com"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Current Location (City, State) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Overland Park, KS / Dallas, TX"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Years of Experience
                      </label>
                      <input
                        type="text"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="e.g. 5+ years"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Role / Specialization
                      </label>
                      <input
                        type="text"
                        value={formData.preferredRole}
                        onChange={(e) => setFormData({ ...formData, preferredRole: e.target.value })}
                        placeholder="e.g. AI Engineer, Full-Stack Lead"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Technical Skills
                    </label>
                    <input
                      type="text"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      placeholder="e.g. React, TypeScript, Python, PyTorch, AWS, Docker"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none"
                    />
                  </div>

                  {/* Resume Upload Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Resume Attachment (PDF or DOCX, max 10MB) <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-larken-blue transition-colors cursor-pointer relative bg-slate-50/50">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required={!resumeFile}
                      />
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <Upload className="w-6 h-6 text-larken-blue" />
                        {resumeFile ? (
                          <span className="text-xs font-semibold text-emerald-600">
                            Selected: {resumeFile.name} ({(resumeFile.size / 1024).toFixed(0)} KB)
                          </span>
                        ) : (
                          <>
                            <span className="text-xs font-medium text-slate-700">
                              Click to browse or drop your resume here
                            </span>
                            <span className="text-[11px] text-slate-400">
                              PDF, DOC, DOCX up to 10MB
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Additional Message / Cover Note
                    </label>
                    <textarea
                      rows={2}
                      value={formData.additionalMessage}
                      onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                      placeholder="Brief note on your availability, work authorization, or career objectives..."
                      className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-larken-blue focus:border-larken-blue outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full"
                      isLoading={isLoading}
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};
