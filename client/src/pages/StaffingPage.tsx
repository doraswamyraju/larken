import React from 'react';
import { STAFFING_CATEGORIES } from '../constants/services';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Users, 
  Bot, 
  Code, 
  CloudCog, 
  Database, 
  Lock, 
  CheckCircle2, 
  Briefcase, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CalendarCheck
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  CloudCog: <CloudCog className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Lock: <Lock className="w-8 h-8" />,
  CheckCircle2: <CheckCircle2 className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
};

export const StaffingPage: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <div className="bg-larken-lightBg">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-larken-navy via-larken-navyDark to-[#071D3B] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Specialized US Technology Staffing</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                IT Staffing & Talent Acquisition
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Connect your engineering initiatives with verified, high-performing technology specialists ready to make immediate impact across your roadmap.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button to="/contact" variant="primary" size="lg">
                  Request Candidate Profiles
                </Button>
                <Button to="#disciplines" variant="white" size="lg">
                  Explore Disciplines
                </Button>
              </div>
            </div>

            {/* Featured Official Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 img-zoom-container group">
                <img
                  src="/images/it-staffing.jpg"
                  alt="Larken Technologies IT Staffing"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white flex items-center justify-between">
                  <span className="font-semibold text-emerald-400">Pre-Vetted US Talent</span>
                  <span className="text-slate-300">Overland Park, KS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Staffing Disciplines */}
      <section className="py-24" id="disciplines" ref={elementRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            <SectionHeading
              badge="Staffing Disciplines"
              title="Pre-Vetted Technology Talent for High-Velocity Teams"
              subtitle="Explore our active talent pools spanning emerging AI engineering, cloud infrastructure, full-stack development, and enterprise leadership."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {STAFFING_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                id={cat.id}
                className={`bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft hover-glow transition-all duration-300 flex flex-col justify-between group reveal-on-scroll ${
                  isVisible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      {iconMap[cat.iconName] || <Users className="w-8 h-8" />}
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      DISCIPLINE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-larken-navy group-hover:text-emerald-600 transition-colors">
                    {cat.category}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Available Roles & Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.roles.map((role, ridx) => (
                        <span
                          key={ridx}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button to="/contact" variant="outline" size="sm" className="w-full">
                    Request Talent Profiles
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Flexible Hiring Models */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Engagement Flexibility"
            title="Flexible Staffing Models to Suit Your Timelines"
            subtitle="Choose the hiring structure that best fits your project duration, team velocity, and budgetary objectives."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-larken-lightBg border border-slate-200 hover-glow space-y-4 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-larken-blue flex items-center justify-center shadow-sm">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-larken-navy">Contract Staffing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rapidly scale your sprint capacity with pre-screened technical contractors for short-term surges, critical product milestones, or specialized niche technologies.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-larken-lightBg border border-slate-200 hover-glow space-y-4 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
                <CalendarCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-larken-navy">Contract-to-Hire (C2H)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Evaluate candidates directly within your development workflows and company culture before making permanent full-time hiring commitments.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-larken-lightBg border border-slate-200 hover-glow space-y-4 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-larken-navy">Dedicated Pods & Teams</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deploy cohesive multi-disciplinary squads (Tech Lead, Full-Stack Devs, QA, DevOps) fully equipped to own and deliver an entire feature set or modernization track.
              </p>
            </div>
          </div>

          {/* Recruiter & Candidate Showcase Card */}
          <div className="mt-16 bg-gradient-to-r from-larken-navy via-larken-navyDark to-[#071D3B] rounded-3xl p-8 sm:p-12 text-white shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-white/10">
                  Elite Candidate Vetting
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Architect-Led Technical Screening
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every software engineer and specialist submitted to your team has undergone real-world technical assessments, architectural evaluations, and culture-fit interviews by veteran US engineers.
                </p>
                <div className="pt-2">
                  <Button to="/contact" variant="primary" size="md">
                    Schedule a Talent Discovery Call
                  </Button>
                </div>
              </div>

              {/* Generated Staffing Visual */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-white/20 img-zoom-container group relative">
                  <img
                    src="/images/enterprise-staffing.jpg"
                    alt="Larken Technologies Executive Technical Interview"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium flex justify-between items-center">
                    <span className="font-semibold text-emerald-400">Technical Interviewing</span>
                    <span className="text-slate-300">Overland Park, KS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Discuss Your Staffing Needs
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};
