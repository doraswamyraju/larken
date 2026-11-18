import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { COMPANY_INFO } from '../../constants/company';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck, 
  Globe2, 
  Lock 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-larken-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1 & 2: Brand & Company Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" showTagline />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Larken Technologies LLC delivers enterprise-grade IT consulting and elite technology staffing solutions. Based in Overland Park, Kansas, we bridge high-growth organizations with transformative technology and top-tier US talent.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-larken-cyan" />
                US Registered LLC
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <Globe2 className="w-3.5 h-3.5 text-larken-blue" />
                Overland Park, KS
              </span>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-larken-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-larken-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/it-consulting" className="hover:text-larken-cyan transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/it-staffing" className="hover:text-larken-cyan transition-colors">
                  IT Staffing
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-larken-cyan transition-colors">
                  Careers & Jobs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-larken-cyan transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Core Capabilities */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/it-consulting#ai-emerging-tech" className="hover:text-larken-cyan transition-colors">
                  Generative AI & ML
                </Link>
              </li>
              <li>
                <Link to="/services/it-consulting#cloud-computing-devops" className="hover:text-larken-cyan transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/it-consulting#software-application-development" className="hover:text-larken-cyan transition-colors">
                  Custom Software Dev
                </Link>
              </li>
              <li>
                <Link to="/services/it-staffing#ai-ml" className="hover:text-larken-cyan transition-colors">
                  AI/ML Talent Staffing
                </Link>
              </li>
              <li>
                <Link to="/services/it-staffing#software-dev" className="hover:text-larken-cyan transition-colors">
                  Full-Stack Engineers
                </Link>
              </li>
              <li>
                <Link to="/services/it-consulting#cybersecurity-consulting" className="hover:text-larken-cyan transition-colors">
                  Cybersecurity Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Verified Contact Details */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Headquarters
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-larken-cyan mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">{COMPANY_INFO.legalName}</div>
                  <div className="text-slate-400">{COMPANY_INFO.address.street}</div>
                  <div className="text-slate-400">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.stateCode} {COMPANY_INFO.address.zip}</div>
                  <div className="text-slate-400">{COMPANY_INFO.address.country}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-larken-cyan flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-slate-300 hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-larken-cyan flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a 
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-larken-cyan hover:underline"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/cookie-notice" className="hover:text-white transition-colors">
              Cookie Notice
            </Link>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Overland Park, Kansas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
