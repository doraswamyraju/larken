import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'navy' | 'cyan' | 'slate' | 'green';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'blue', className = '' }) => {
  const styles = {
    blue: 'bg-blue-50 text-larken-blue border-blue-200/60',
    navy: 'bg-larken-navy/10 text-larken-navy border-larken-navy/20',
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
