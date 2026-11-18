import React from 'react';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../constants/company';
import { Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-larken-navy via-larken-navyDark to-[#071D3B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-larken-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-larken-cyan text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Ready to Accelerate Your Technology Roadmap?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Let's Build Robust Systems & <br />
          Deploy Exceptional Talent Together.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From strategic architecture consulting to deploying specialized engineers, Larken Technologies LLC delivers results with US operational accountability.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Start a Conversation
          </Button>
          <Button to="/services/it-consulting" variant="white" size="lg">
            Review Consulting Services
          </Button>
        </div>

        {/* Contact Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-300">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-larken-cyan" />
            <span className="font-semibold">{COMPANY_INFO.phone}</span>
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-larken-cyan" />
            <span>{COMPANY_INFO.email}</span>
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>{COMPANY_INFO.shortAddress}</span>
        </div>

      </div>
    </section>
  );
};
