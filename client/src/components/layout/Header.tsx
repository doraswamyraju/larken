import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../constants/company';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Cpu,
  Users
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger floating compact state once scrolled past 25px
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isScrolled ? 'py-1.5' : 'py-2'
    } ${
      isActive 
        ? 'text-larken-blue font-semibold' 
        : 'text-larken-navy hover:text-larken-blue'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 pointer-events-auto">
      {/* 1. Top Utility Row: verified contact info - Hides smoothly on scroll */}
      <div 
        className={`bg-larken-navy text-xs text-slate-300 hidden md:block overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'max-h-0 opacity-0 -translate-y-full py-0 border-none' 
            : 'max-h-12 opacity-100 py-2 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-larken-cyan" />
              <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.stateCode}, USA</span>
            </span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-larken-cyan" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`} 
              className="flex items-center gap-1.5 font-medium hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-larken-cyan" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 font-medium">US Registered Technology Partner</span>
          </div>
        </div>
      </div>

      {/* 2. Next Row: Becomes a floating, compact navbar with curved sides on scroll */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'px-4 sm:px-6 lg:px-8 pt-2.5 sm:pt-3' 
            : 'w-full bg-white border-b border-slate-100'
        }`}
      >
        <div 
          className={`transition-all duration-300 flex items-center justify-between ${
            isScrolled
              ? 'max-w-6xl mx-auto px-4 sm:px-6 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-card border border-slate-200/90'
              : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5'
          }`}
        >
          {/* Logo with dynamic compact size */}
          <Logo compact={isScrolled} />

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'py-1.5' : 'py-2'
                } ${
                  location.pathname.startsWith('/services') 
                    ? 'text-larken-blue font-semibold' 
                    : 'text-larken-navy hover:text-larken-blue'
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-dropdown border border-slate-100 p-2 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link 
                    to="/services/it-consulting" 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-larken-lightBg transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-larken-blue group-hover/item:bg-larken-blue group-hover/item:text-white transition-colors">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-larken-navy group-hover/item:text-larken-blue">
                        IT Consulting
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        AI, Cloud, Custom Software & Architecture
                      </div>
                    </div>
                  </Link>

                  <Link 
                    to="/services/it-staffing" 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-larken-lightBg transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-larken-navy group-hover/item:text-emerald-600">
                        IT Staffing
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Specialized engineers & dedicated squads
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/careers" className={navLinkClasses}>
              Careers
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </nav>

          {/* Action Button: Let's Talk CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              to="/contact" 
              variant="primary" 
              size={isScrolled ? 'sm' : 'md'} 
              className={isScrolled ? 'rounded-full px-5 py-2 text-xs shadow-sm' : 'rounded-lg'}
              rightIcon={<ArrowRight className={isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'} />}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="p-1.5 rounded-lg text-larken-navy hover:text-larken-blue hover:bg-slate-100 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div 
          className={`lg:hidden bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl border border-slate-200/90 transition-all ${
            isScrolled 
              ? 'max-w-xl mx-4 sm:mx-auto mt-2 rounded-2xl' 
              : 'border-b'
          }`}
        >
          <div className="space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-larken-navy hover:bg-slate-50"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-larken-navy hover:bg-slate-50"
            >
              About Us
            </Link>
            <div className="px-3 py-1 font-bold text-xs uppercase tracking-wider text-slate-400">
              Services
            </div>
            <Link 
              to="/services/it-consulting" 
              className="block pl-6 pr-3 py-2 rounded-lg text-sm font-medium text-larken-navy hover:bg-slate-50 flex items-center justify-between"
            >
              <span>IT Consulting</span>
              <span className="text-xs text-larken-blue font-semibold">AI & Cloud</span>
            </Link>
            <Link 
              to="/services/it-staffing" 
              className="block pl-6 pr-3 py-2 rounded-lg text-sm font-medium text-larken-navy hover:bg-slate-50 flex items-center justify-between"
            >
              <span>IT Staffing</span>
              <span className="text-xs text-emerald-600 font-semibold">Tech Talent</span>
            </Link>
            <Link 
              to="/careers" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-larken-navy hover:bg-slate-50"
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-larken-navy hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`} 
              className="flex items-center gap-2 text-xs font-semibold text-larken-navy px-3 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-larken-blue" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-2 text-xs font-semibold text-larken-navy px-3 py-1"
            >
              <Mail className="w-3.5 h-3.5 text-larken-blue" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="pt-1">
              <Button to="/contact" variant="primary" size="sm" className="w-full rounded-full">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
