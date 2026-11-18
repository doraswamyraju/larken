import React from 'react';
import { STAFFING_CATEGORIES } from '../constants/services';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
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
  return (
    <div className="bg-larken-lightBg">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-larken-navy via-larken-navyDark to-[#071D3B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Specialized US Technology Staffing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            IT Staffing & Talent Acquisition
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect your engineering initiatives with verified, high-performing technology specialists ready to make immediate impact.
          </p>
        </div>
      </section>

      {/* Staffing Disciplines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeading
            badge="Staffing Disciplines"
            title="Pre-Vetted Technology Talent for High-Velocity Teams"
            subtitle="Explore our active talent pools spanning emerging AI engineering, cloud infrastructure, full-stack development, and enterprise leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {STAFFING_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                id={cat.id}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                      {iconMap[cat.iconName] || <Users className="w-8 h-8" />}
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-400">
                      DISCIPLINE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-larken-navy">
                    {cat.category}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
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
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
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
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Engagement Flexibility"
            title="Flexible Staffing Models to Suit Your Timelines"
            subtitle="Choose the hiring structure that best fits your project duration, team velocity, and budgetary objectives."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-larken-lightBg border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-larken-blue flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-larken-navy">Contract Staffing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rapidly scale your sprint capacity with pre-screened technical contractors for short-term surges, critical product milestones, or specialized niche technologies.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-larken-lightBg border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-larken-navy">Contract-to-Hire (C2H)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Evaluate candidates directly within your development workflows and company culture before making permanent full-time hiring commitments.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-larken-lightBg border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-larken-navy">Dedicated Pods & Teams</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deploy cohesive multi-disciplinary squads (Tech Lead, Full-Stack Devs, QA, DevOps) fully equipped to own and deliver an entire feature set or modernization track.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Discuss Your Staffing Needs
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};
