import React from 'react';
import { CONSULTING_CAPABILITIES } from '../constants/services';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Cpu, 
  Code2, 
  Cloud, 
  BarChart3, 
  ShieldCheck, 
  RefreshCw, 
  Compass, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-8 h-8" />,
  Code2: <Code2 className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  RefreshCw: <RefreshCw className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
};

export const ConsultingPage: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <div className="bg-larken-lightBg">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-larken-navy via-larken-navyDark to-[#071D3B] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-larken-cyan text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Technology Advisory</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                IT Consulting Services
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                From modernizing legacy enterprise systems to architecting scalable Generative AI ecosystems, our consultants deliver practical, resilient outcomes aligned with your strategic ROI.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button to="/contact" variant="primary" size="lg">
                  Request a Technical Consultation
                </Button>
                <Button to="#capabilities" variant="white" size="lg">
                  Explore Capabilities
                </Button>
              </div>
            </div>

            {/* Featured Official Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 img-zoom-container group">
                <img
                  src="/images/it-consulting.jpg"
                  alt="Larken Technologies IT Consulting"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white flex items-center justify-between">
                  <span className="font-semibold text-larken-cyan">US Enterprise Advisory</span>
                  <span className="text-slate-300">Overland Park, KS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Practices List */}
      <section className="py-24" id="capabilities" ref={elementRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            <SectionHeading
              badge="Consulting Capabilities"
              title="Strategic Architecture & Technology Modernization"
              subtitle="Explore our specialized practice areas designed to solve complex business hurdles and drive long-term digital agility."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {CONSULTING_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                id={cap.id}
                className={`bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft hover-glow transition-all duration-300 flex flex-col justify-between group reveal-on-scroll ${
                  isVisible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-50 text-larken-blue group-hover:bg-larken-blue group-hover:text-white transition-all duration-300 shadow-sm">
                      {iconMap[cap.iconName] || <Cpu className="w-8 h-8" />}
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      PRACTICE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-larken-navy group-hover:text-larken-blue transition-colors">
                    {cap.title}
                  </h3>

                  <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                    {cap.fullDesc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                      Key Deliverables & Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cap.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-larken-blue flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Button to="/contact" variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Consult on this Capability
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Engagement Models Banner */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-larken-navy via-larken-navyDark to-[#071D3B] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-card">
            <div className="relative z-10 max-w-3xl space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-larken-cyan px-3 py-1 rounded-full bg-white/10">
                Consulting Engagement Models
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                Tailored Engagements Built for Enterprise Flexibility
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need an upfront architecture audit, a turnkey fixed-scope implementation, or long-term fractional technical leadership, we configure our consulting teams to align with your corporate governance standards.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="primary" size="lg">
                  Schedule a Technical Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
