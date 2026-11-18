import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', showTagline = false }) => {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Brand Icon Mark */}
      <div className="relative w-10 h-10 rounded-lg bg-larken-navy flex items-center justify-center shadow-md border border-white/10 group-hover:scale-105 transition-transform duration-200">
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
          {/* Stylized Modern "L" and connected digital node */}
          <path
            d="M9 7V27C9 28.1046 9.89543 29 11 29H27C27.5523 29 28 28.5523 28 28V24C28 23.4477 27.5523 23 27 23H17V8C17 7.44772 16.5523 7 16 7H10C9.44772 7 9 7.44772 9 8V7Z"
            fill="url(#logoGrad)"
          />
          <circle cx="26" cy="12" r="3.5" fill="#43C5FF" />
          <path d="M19 12H23" stroke="#43C5FF" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="logoGrad" x1="9" y1="7" x2="28" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#087DDB" />
              <stop offset="1" stopColor="#43C5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span className={`text-xl font-extrabold tracking-wider ${isLight ? 'text-white' : 'text-larken-navy'}`}>
            LARKEN
          </span>
          <span className="text-xl font-light tracking-wide text-larken-blue ml-1.5">
            TECHNOLOGIES
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] uppercase font-semibold tracking-widest ${isLight ? 'text-blue-200' : 'text-slate-500'}`}>
            Consulting & Staffing • Overland Park, KS
          </span>
        )}
      </div>
    </Link>
  );
};
