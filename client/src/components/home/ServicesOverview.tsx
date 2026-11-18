import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={elementRef}>
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <SectionHeading
            badge="Core Offerings"
            title="Two Specialized Engines for Your Digital Growth"
            subtitle="Whether you need transformative technical architecture or high-caliber technology talent to scale your sprints, Larken Technologies delivers with US precision."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: IT Consulting */}
          <div 
            className={`rounded-3xl border border-slate-200/90 bg-white shadow-soft hover-glow flex flex-col justify-between overflow-hidden group transition-all duration-300 reveal-on-scroll ${
              isVisible ? 'is-visible' : ''
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div>
              {/* Official Supplied Graphic - Full Uncropped 1:1 Presentation */}
              <div className="p-5 sm:p-7 bg-slate-900/5 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-card border border-slate-200/80 bg-white">
                  <img
                    src="/images/it-consulting.jpg"
                    alt="IT Consulting - Larken Technologies LLC"
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 sm:p-10 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-larken-navy group-hover:text-larken-blue transition-colors">
                  IT Consulting
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We advise, architect, and build transformative digital solutions. From integrating foundational Generative AI workflows to modernizing legacy monolithic systems into responsive cloud-native architectures, we turn technology investments into sustainable business advantage.
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                    Core Consulting Practice Areas:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-blue-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-larken-blue flex-shrink-0" />
                      <span>AI & Machine Learning Systems</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-blue-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-larken-blue flex-shrink-0" />
                      <span>Cloud Architecture & DevOps</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-blue-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-larken-blue flex-shrink-0" />
                      <span>Custom Software Development</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-blue-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-larken-blue flex-shrink-0" />
                      <span>Data Engineering & Analytics</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-blue-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-larken-blue flex-shrink-0" />
                      <span>Cybersecurity & Risk Advisory</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-blue-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-larken-blue flex-shrink-0" />
                      <span>Digital Transformation & Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-2 flex items-center justify-between">
              <Button to="/services/it-consulting" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}>
                Explore Consulting Services
              </Button>
            </div>
          </div>

          {/* Card 2: IT Staffing */}
          <div 
            className={`rounded-3xl border border-slate-200/90 bg-white shadow-soft hover-glow flex flex-col justify-between overflow-hidden group transition-all duration-300 reveal-on-scroll ${
              isVisible ? 'is-visible' : ''
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div>
              {/* Official Supplied Graphic - Full Uncropped 1:1 Presentation */}
              <div className="p-5 sm:p-7 bg-slate-900/5 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-card border border-slate-200/80 bg-white">
                  <img
                    src="/images/it-staffing.jpg"
                    alt="IT Staffing - Larken Technologies LLC"
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 sm:p-10 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-larken-navy group-hover:text-emerald-600 transition-colors">
                  IT Staffing
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Connect your engineering teams with pre-screened, high-caliber technology professionals. We provide flexible talent models—contract, contract-to-hire, and dedicated teams—spanning cutting-edge AI engineers to enterprise architects ready to deliver on day one.
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                    Active Talent Disciplines:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-emerald-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>AI, GenAI & ML Specialists</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-emerald-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Full-Stack, React & Node Devs</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-emerald-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Cloud, DevOps & SRE Engineers</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-emerald-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Data Engineers & BI Analysts</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-emerald-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>QA & Automation Specialists</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-emerald-50/60 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>IT PMs & Enterprise Architects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-2 flex items-center justify-between">
              <Button to="/services/it-staffing" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}>
                Explore Staffing Solutions
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
