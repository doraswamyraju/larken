import React from 'react';
import { Button } from '../common/Button';
import { HeroEnquiryForm } from './HeroEnquiryForm';
import { COMPANY_INFO } from '../../constants/company';
import { ConsultingBrandIcon, StaffingBrandIcon } from '../common/BrandIcons';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-larken-navy via-larken-navyDark to-[#071D3B] text-white py-16 lg:py-24">
      {/* High-Tech Background Image Overlay with Rich Visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-tech.jpg"
          alt="Larken Technologies Enterprise Technology Team"
          className="w-full h-full object-cover object-center opacity-45 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071D3B]/92 via-[#071D3B]/80 to-[#071D3B]/65"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
      </div>

      {/* Decorative Radial Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-larken-blue/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-larken-cyan/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-larken-cyan backdrop-blur-md shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-larken-cyan animate-pulse" />
              <span>Overland Park, Kansas • US Technology Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Technology Solutions. <br />
              <span className="bg-gradient-to-r from-larken-cyan via-blue-200 to-white bg-clip-text text-transparent">
                The Right Talent.
              </span> <br />
              Business Growth.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Primary Action Buttons with Hover Effects */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button
                to="/services/it-consulting"
                variant="primary"
                size="lg"
                className="btn-shimmer shadow-lg hover:shadow-cyan-500/25"
                rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              >
                Explore Our Services
              </Button>
              <Button
                to="/contact"
                variant="white"
                size="lg"
                className="hover-lift"
              >
                Talk to Our Team
              </Button>
            </div>

            {/* Core Capability Pillars with Authentic Brand Icons */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                to="/services/it-consulting" 
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 hover:border-larken-cyan/50 hover:scale-[1.02] transition-all duration-300 group shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-larken-blue/20 text-larken-cyan group-hover:bg-larken-blue group-hover:text-white transition-colors duration-300">
                  <ConsultingBrandIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-larken-cyan transition-colors">
                    IT Consulting
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    GenAI, Cloud Architecture, DevOps & Custom Software Modernization.
                  </p>
                </div>
              </Link>

              <Link 
                to="/services/it-staffing" 
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 hover:border-emerald-400/50 hover:scale-[1.02] transition-all duration-300 group shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <StaffingBrandIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    IT Staffing
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Pre-vetted AI, Data, Cloud & Full-Stack Engineers for your teams.
                  </p>
                </div>
              </Link>
            </div>

            {/* Credibility Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
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
            <HeroEnquiryForm className="hover-lift" />
          </div>

        </div>
      </div>
    </section>
  );
};
