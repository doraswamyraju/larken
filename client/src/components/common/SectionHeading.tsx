import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          light
            ? 'bg-white/10 text-larken-cyan border border-white/20'
            : 'bg-larken-blue/10 text-larken-blue border border-larken-blue/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-larken-navy'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-blue-100/90' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
