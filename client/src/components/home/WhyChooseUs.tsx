import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { 
  ShieldCheck, 
  MapPin, 
  Cpu, 
  Zap, 
  Users2, 
  CheckCircle2 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  const points = [
    {
      title: 'US Registered & Centered',
      desc: 'Headquartered in Overland Park, Kansas, we operate strictly under US legal, compliance, and corporate standards with responsive US time-zone support.',
      icon: <MapPin className="w-6 h-6 text-larken-blue" />,
    },
    {
      title: 'Dual-Engine Synergy',
      desc: 'We uniquely bridge strategic IT consulting with targeted technical staffing. Our consulting leads inform our staffing benchmarks, ensuring superior talent matching.',
      icon: <Cpu className="w-6 h-6 text-larken-blue" />,
    },
    {
      title: 'Multi-Tiered Technical Vetting',
      desc: 'Every candidate undergoes hands-on architectural and code evaluation before ever reaching your interview loop, saving your engineering leadership critical hours.',
      icon: <ShieldCheck className="w-6 h-6 text-larken-blue" />,
    },
    {
      title: 'Rapid Deployment Velocity',
      desc: 'Fill mission-critical skill shortages in AI, Cloud, and Software Engineering in days, not months, backed by an active talent pipeline.',
      icon: <Zap className="w-6 h-6 text-larken-blue" />,
    },
    {
      title: 'Flexible Engagement Frameworks',
      desc: 'Tailor partnerships to your financial and organizational model—from turnkey fixed-scope projects to dedicated sprint teams and contract staff.',
      icon: <Users2 className="w-6 h-6 text-larken-blue" />,
    },
    {
      title: 'Obsession with Code & Delivery Quality',
      desc: 'We adhere to clean-code standards, robust automated testing, and comprehensive documentation to ensure seamless long-term maintainability.',
      icon: <CheckCircle2 className="w-6 h-6 text-larken-blue" />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <SectionHeading
            badge="Why Larken Technologies"
            title="The Technology Partner High-Growth Businesses Rely On"
            subtitle="We combine Midwestern reliability, modern architectural rigor, and deep staffing networks to help enterprises scale without compromise."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-larken-lightBg/80 border border-slate-200/80 hover-glow transition-all duration-300 group reveal-on-scroll ${
                isVisible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-soft border border-slate-200/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {pt.icon}
              </div>
              <h3 className="text-xl font-bold text-larken-navy group-hover:text-larken-blue transition-colors">
                {pt.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
