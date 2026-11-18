import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { INDUSTRIES_SERVED } from '../../constants/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { 
  Building2, 
  HeartPulse, 
  Truck, 
  ShoppingBag, 
  Server, 
  Briefcase 
} from 'lucide-react';

const industryIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const IndustriesServed: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-white border-t border-slate-200/60 relative overflow-hidden" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <SectionHeading
            badge="Domain Expertise"
            title="Industries We Empower"
            subtitle="We bring specialized cross-industry expertise, navigating regulatory compliance, data privacy, and domain-specific challenges."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border border-slate-200/90 bg-larken-lightBg/50 hover:bg-white hover-glow group transition-all duration-300 flex items-start gap-4 reveal-on-scroll ${
                isVisible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="p-3.5 rounded-xl bg-blue-50 text-larken-blue group-hover:bg-larken-blue group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                {industryIcons[ind.icon] || <Briefcase className="w-6 h-6" />}
              </div>
              <div>
                <h4 className="text-base font-bold text-larken-navy group-hover:text-larken-blue transition-colors">
                  {ind.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
