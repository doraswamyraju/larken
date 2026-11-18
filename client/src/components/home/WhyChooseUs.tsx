import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  ShieldCheck, 
  MapPin, 
  Cpu, 
  Zap, 
  Users2, 
  CheckCircle2 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Why Larken Technologies"
          title="The Technology Partner High-Growth Businesses Rely On"
          subtitle="We combine Midwestern reliability, modern architectural rigor, and deep staffing networks to help enterprises scale without compromise."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-larken-lightBg/70 border border-slate-200/80 hover:border-larken-blue/40 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-6">
                {pt.icon}
              </div>
              <h3 className="text-lg font-bold text-larken-navy">
                {pt.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
