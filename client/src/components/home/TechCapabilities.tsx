import React, { useState } from 'react';
import { CONSULTING_CAPABILITIES, STAFFING_CATEGORIES } from '../../constants/services';
import { SectionHeading } from '../common/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { 
  Cpu, 
  Code2, 
  Cloud, 
  BarChart3, 
  ShieldCheck, 
  RefreshCw, 
  Compass, 
  Layers,
  Users,
  Bot,
  Code,
  CloudCog,
  Database,
  Lock,
  CheckCircle2,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  RefreshCw: <RefreshCw className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  CloudCog: <CloudCog className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const TechCapabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'consulting' | 'staffing'>('consulting');
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-larken-lightBg border-y border-slate-200/60 relative overflow-hidden" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <SectionHeading
            badge="Technology Capabilities"
            title="Engineered for Scalability, Security, and Impact"
            subtitle="Explore the full spectrum of our technology consulting practices and specialized staffing disciplines."
          />
        </div>

        {/* Tab Toggle */}
        <div className={`mt-10 flex justify-center reveal-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          <div className="inline-flex p-1.5 rounded-2xl bg-white shadow-soft border border-slate-200/90">
            <button
              onClick={() => setActiveTab('consulting')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'consulting'
                  ? 'bg-larken-navy text-white shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-larken-navy hover:bg-slate-50'
              }`}
            >
              IT Consulting Practices ({CONSULTING_CAPABILITIES.length})
            </button>
            <button
              onClick={() => setActiveTab('staffing')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'staffing'
                  ? 'bg-larken-navy text-white shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-larken-navy hover:bg-slate-50'
              }`}
            >
              IT Staffing Disciplines ({STAFFING_CATEGORIES.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Consulting Capabilities Grid */}
        {activeTab === 'consulting' && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {CONSULTING_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                className={`bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft hover-glow flex flex-col justify-between group transition-all duration-300 reveal-on-scroll ${
                  isVisible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-larken-blue flex items-center justify-center mb-5 group-hover:bg-larken-blue group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                    {iconMap[cap.iconName] || <Cpu className="w-6 h-6" />}
                  </div>
                  <h4 className="text-base font-bold text-larken-navy group-hover:text-larken-blue transition-colors">
                    {cap.title}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {cap.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <ul className="space-y-1.5 mb-4">
                    {cap.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-larken-blue flex-shrink-0"></span>
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/it-consulting#${cap.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-larken-blue hover:text-larken-navy group/link transition-colors"
                  >
                    <span>View Capability Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Staffing Disciplines Grid */}
        {activeTab === 'staffing' && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {STAFFING_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl p-7 border border-slate-200/80 shadow-soft hover-glow flex flex-col justify-between group transition-all duration-300 reveal-on-scroll ${
                  isVisible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                    {iconMap[cat.iconName] || <Users className="w-6 h-6" />}
                  </div>
                  <h4 className="text-lg font-bold text-larken-navy group-hover:text-emerald-600 transition-colors">
                    {cat.category}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Pre-Screened Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cat.roles.map((r, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/services/it-staffing#${cat.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-larken-navy group/link transition-colors"
                  >
                    <span>Request Talent Profiles</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
