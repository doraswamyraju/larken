import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-larken-navy hover:bg-larken-blue text-white shadow-dropdown hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 focus:outline-none focus:ring-2 focus:ring-larken-blue focus:ring-offset-2"
      >
        <ArrowUp className="w-5 h-5 text-larken-cyan group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
        
        {/* Tooltip */}
        <span className="absolute -top-9 right-1/2 translate-x-1/2 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
          Back to top
        </span>
      </button>
    </div>
  );
};
