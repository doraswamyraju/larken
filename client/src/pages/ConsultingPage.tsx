import React from 'react';
import { CONSULTING_CAPABILITIES } from '../constants/services';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
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
  return (
    <div className="bg-larken-lightBg">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-larken-navy via-larken-navyDark to-[#071D3B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-larken-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Practice Areas</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            IT Consulting Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From modernizing complex architectures to integrating breakthrough Generative AI systems, our consultants deliver practical, resilient technology outcomes.
          </p>
        </div>
      </section>

      {/* Main Practices List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeading
            badge="Consulting Capabilities"
            title="Strategic Architecture & Technology Modernization"
            subtitle="Explore our specialized practice areas designed to solve complex business hurdles and drive long-term digital agility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {CONSULTING_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                id={cap.id}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-blue-50 text-larken-blue">
                      {iconMap[cap.iconName] || <Cpu className="w-8 h-8" />}
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-400">
                      PRACTICE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-larken-navy">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {cap.fullDesc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Deliverables & Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cap.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-xs text-slate-700">
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
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-larken-navy rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-larken-cyan">
                Consulting Engagement Models
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Tailored Engagements Built for Enterprise Flexibility
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need an upfront advisory audit, a turnkey fixed-scope implementation, or long-term fractional technical leadership, we configure our consulting teams to align with your governance standards.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="primary" size="md">
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
