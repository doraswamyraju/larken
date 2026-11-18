import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
  markOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = false,
  markOnly = false,
}) => {
  const isLight = variant === 'light';
  const logoSrc = markOnly
    ? '/logo-icon.png'
    : isLight
    ? '/logo-white.png'
    : '/logo.png';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Larken Technologies LLC"
        className={`w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] ${
          markOnly ? 'h-10 w-10' : 'h-9 sm:h-11 max-w-[220px] sm:max-w-[260px]'
        }`}
      />
      {showTagline && !markOnly && (
        <span
          className={`hidden md:inline-block text-[10px] uppercase font-semibold tracking-widest border-l pl-3 py-1 ${
            isLight ? 'border-white/20 text-slate-300' : 'border-slate-300 text-slate-500'
          }`}
        >
          Overland Park, KS
        </span>
      )}
    </Link>
  );
};
