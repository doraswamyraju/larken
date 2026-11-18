import React, { useEffect, useState, useRef } from 'react';

export const TechCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position refs for smooth 60fps linear interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const haloPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Immediately set the center dot position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, select, textarea, [role="button"], .hover-glow, .group')
        );
        setIsHoveringInteractive(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Smooth lerp loop for the trailing halo
    const animateHalo = () => {
      // Lerp formula: current + (target - current) * factor
      haloPos.current.x += (mousePos.current.x - haloPos.current.x) * 0.18;
      haloPos.current.y += (mousePos.current.y - haloPos.current.y) * 0.18;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${haloPos.current.x}px, ${haloPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateHalo);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animationFrameId = requestAnimationFrame(animateHalo);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // If on touch device or not yet moved, don't show
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Precision Core Digital Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-larken-cyan shadow-sm pointer-events-none will-change-transform transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Trailing Tech Halo Ring with Dynamic Hover Expansion */}
      <div
        ref={haloRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full pointer-events-none will-change-transform transition-all duration-300 ease-out border ${
          isClicking
            ? 'w-8 h-8 -ml-4 -mt-4 bg-larken-blue/30 border-larken-cyan scale-90'
            : isHoveringInteractive
            ? 'w-14 h-14 -ml-7 -mt-7 bg-larken-cyan/15 border-larken-cyan shadow-[0_0_15px_rgba(67,197,255,0.4)] scale-110'
            : 'w-10 h-10 -ml-5 -mt-5 bg-larken-blue/5 border-larken-blue/40'
        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
};
