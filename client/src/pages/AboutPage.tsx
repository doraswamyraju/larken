import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { COMPANY_INFO } from '../constants/company';
import { 
  ShieldCheck, 
  MapPin, 
  Target, 
  Eye, 
  ArrowRight, 
  Building
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-larken-lightBg">
      {/* Page Header */}
      <section className="bg-larken-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-larken-cyan text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Overland Park, Kansas, USA</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Larken Technologies LLC
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering modern technology architecture, AI-driven digital transformation, and specialized engineering talent to US enterprises.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-larken-blue bg-blue-50 px-3 py-1 rounded-md">
                Our Corporate Identity
              </span>
              <h2 className="text-3xl font-extrabold text-larken-navy leading-tight">
                A Principled Technology Consulting & Staffing Partner
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Larken Technologies LLC is a US-registered technology consulting and staffing firm headquartered at <strong>10318 Conser St, Ste 1J, Overland Park, KS 66212</strong>. We were founded to address the widening gap between strategic technology evolution and the specialized talent required to execute it.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                In an era dominated by rapid breakthroughs in Generative AI, cloud-native modernization, and complex distributed data ecosystems, businesses require more than generic advice—they require concrete technical execution and proven professionals who can integrate seamlessly into their delivery cadence.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-larken-lightBg border border-slate-200">
                  <div className="font-bold text-larken-navy text-sm flex items-center gap-2">
                    <Building className="w-4 h-4 text-larken-blue" />
                    US-Based Operations
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct accountability, clear communication, and alignment with Central and nationwide US time zones.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-larken-lightBg border border-slate-200">
                  <div className="font-bold text-larken-navy text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-larken-blue" />
                    Principled Transparency
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    No inflated claims. Honest technical assessments, verified candidate capabilities, and clear SLAs.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-larken-navy to-larken-navyDark text-white p-8 sm:p-10 rounded-2xl shadow-card space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-larken-cyan/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                Company Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block">Legal Entity Name</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.legalName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Registered Location</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.fullAddress}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Official Website</span>
                  <span className="font-semibold text-larken-cyan">{COMPANY_INFO.website}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Corporate Contact</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Telephone</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Primary Business Lines</span>
                  <span className="font-semibold text-white">IT Consulting & IT Staffing</span>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Connect With Us
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-larken-lightBg border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-larken-blue flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-larken-navy">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To empower forward-thinking businesses by providing high-impact IT consulting architectures and deploying exceptionally vetted technology talent that catalyzes scalable digital innovation and measurable business growth.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-larken-navy">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To be the most trusted US technology partner for enterprises modernizing their systems and scaling high-performing engineering squads—recognized for technical excellence, integrity, and client satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-20 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Core Tenets"
            title="How We Maintain Excellence"
            subtitle="The core values that guide our advisory engagements, talent assessments, and client relationships."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-larken-lightBg border border-slate-200 space-y-3">
              <div className="text-larken-blue font-bold text-lg">01. Architectural Precision</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe in scalable designs from day one. Whether advising on cloud infrastructure or building data pipelines, we prioritize security, maintainability, and clean architecture.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-larken-lightBg border border-slate-200 space-y-3">
              <div className="text-larken-blue font-bold text-lg">02. Rigorous Talent Standards</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We do not keyword-match resumes. Our staffing candidate evaluations include technical vetting and practical problem-solving to ensure real-world competency.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-larken-lightBg border border-slate-200 space-y-3">
              <div className="text-larken-blue font-bold text-lg">03. Client-Centric Alignment</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your goals are our benchmarks. We customize our consulting engagements and staffing terms to match your sprint rhythms, budget cycles, and strategic targets.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start a Conversation With Us
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};
