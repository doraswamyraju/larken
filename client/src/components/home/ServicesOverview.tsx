import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { 
  Cpu, 
  Users, 
  ArrowRight, 
  Check
} from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Core Offerings"
          title="Two Specialized Engines for Your Digital Growth"
          subtitle="Whether you need comprehensive technical architecture or high-caliber technology talent to scale your sprints, Larken Technologies delivers with precision."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: IT Consulting */}
          <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50/70 to-white p-8 sm:p-10 flex flex-col justify-between shadow-soft hover:shadow-card transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-larken-blue/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            
            <div>
              <div className="inline-flex p-3 rounded-xl bg-larken-navy text-white shadow-md mb-6">
                <Cpu className="w-7 h-7 text-larken-cyan" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-larken-blue mb-1">
                Strategic Solutions
              </div>
              <h3 className="text-2xl font-bold text-larken-navy">
                IT Consulting
              </h3>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                We advise, architect, and build transformative digital solutions. From integrating foundational Generative AI workflows to modernizing legacy monolithic systems into responsive cloud-native architectures, we turn technology investments into sustainable business advantage.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Consulting Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-larken-blue flex-shrink-0" />
                    <span>AI & Machine Learning Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-larken-blue flex-shrink-0" />
                    <span>Cloud Architecture & DevOps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-larken-blue flex-shrink-0" />
                    <span>Custom Software Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-larken-blue flex-shrink-0" />
                    <span>Data Engineering & Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-larken-blue flex-shrink-0" />
                    <span>Cybersecurity & Risk Advisory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-larken-blue flex-shrink-0" />
                    <span>Enterprise Tech Integration</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Button to="/services/it-consulting" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Consulting
              </Button>
              <span className="text-xs font-medium text-slate-500">
                8 Core Practice Areas
              </span>
            </div>
          </div>

          {/* Card 2: IT Staffing */}
          <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50/70 to-white p-8 sm:p-10 flex flex-col justify-between shadow-soft hover:shadow-card transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>

            <div>
              <div className="inline-flex p-3 rounded-xl bg-larken-navy text-white shadow-md mb-6">
                <Users className="w-7 h-7 text-emerald-400" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                Specialized Technical Talent
              </div>
              <h3 className="text-2xl font-bold text-larken-navy">
                IT Staffing
              </h3>

              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect your engineering teams with pre-screened, high-caliber technology professionals. We provide flexible talent models—contract, contract-to-hire, and dedicated teams—spanning cutting-edge AI engineers to enterprise architects ready to deliver on day one.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Staffing Specializations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>AI, GenAI & ML Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Full-Stack, React & Node Devs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Cloud, DevOps & SRE Engineers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Data Engineers & BI Analysts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>QA & Automation Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>IT PMs & Enterprise Architects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Button to="/services/it-staffing" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Staffing
              </Button>
              <span className="text-xs font-medium text-slate-500">
                7 Talent Disciplines
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
