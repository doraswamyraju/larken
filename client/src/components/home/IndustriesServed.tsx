import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { INDUSTRIES_SERVED } from '../../constants/services';
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
  return (
    <section className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Domain Expertise"
          title="Industries We Empower"
          subtitle="We bring specialized cross-industry expertise, navigating regulatory compliance, data privacy, and domain-specific challenges."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-200 bg-larken-lightBg/50 hover:bg-white hover:border-larken-blue/40 hover:shadow-soft transition-all duration-200 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-blue-50 text-larken-blue flex-shrink-0">
                {industryIcons[ind.icon] || <Briefcase className="w-6 h-6" />}
              </div>
              <div>
                <h4 className="text-base font-bold text-larken-navy">
                  {ind.title}
                </h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
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
