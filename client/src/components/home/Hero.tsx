import React from 'react';
import { Button } from '../common/Button';
import { HeroEnquiryForm } from './HeroEnquiryForm';
import { COMPANY_INFO } from '../../constants/company';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  TrendingUp,
  Cpu,
  Users
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-larken-navy via-larken-navyDark to-[#071D3B] text-white py-16 lg:py-24">
      {/* Decorative Background Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-larken-blue/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-larken-cyan/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-larken-cyan backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>Overland Park, Kansas • US Technology Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Technology Solutions. <br />
              <span className="bg-gradient-to-r from-larken-cyan via-blue-300 to-white bg-clip-text text-transparent">
                The Right Talent.
              </span> <br />
              Business Growth.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button
                to="/services/it-consulting"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Our Services
              </Button>
              <Button
                to="/contact"
                variant="white"
                size="lg"
              >
                Talk to Our Team
              </Button>
            </div>

            {/* Core Capability Pillars Overview */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-larken-blue/20 text-larken-cyan">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">IT Consulting</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    GenAI, Cloud Architecture, DevOps & Custom Software Modernization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">IT Staffing</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Pre-vetted AI, Data, Cloud & Full-Stack Engineers for your teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Credibility Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-larken-cyan" />
                Verified US Operations
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-larken-cyan" />
                Strict Confidentiality
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-larken-cyan" />
                Rapid Deployment Sourcing
              </span>
            </div>

          </div>

          {/* Right Column: Hero Business Enquiry Form */}
          <div className="lg:col-span-5">
            <HeroEnquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
};
