import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Official IT Consulting Icon:
 * Presenter standing next to an upward trending analytics board (matching Larken IT Consulting graphic)
 */
export const ConsultingBrandIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Presenter Head */}
    <circle cx="16" cy="14" r="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Presenter Body */}
    <path
      d="M8 38V32C8 28.6863 10.6863 26 14 26H18C21.3137 26 24 28.6863 24 32V38"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Presenter Pointer Arm */}
    <path d="M22 28L30 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Presentation Board */}
    <rect x="26" y="8" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* Upward Trending Chart inside Board */}
    <path
      d="M29 19L33 15L36 17L40 12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M37 12H40V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Board Stand */}
    <path d="M35 23V38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M30 38H40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/**
 * Official IT Staffing Icon:
 * Team member silhouettes with a search/magnifying glass (matching Larken IT Staffing graphic)
 */
export const StaffingBrandIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left Person */}
    <circle cx="14" cy="16" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <path d="M6 34C6 29.5 9.5 26 14 26C15.5 26 16.8 26.4 18 27.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Right Person */}
    <circle cx="34" cy="16" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <path d="M42 34C42 29.5 38.5 26 34 26C32.5 26 31.2 26.4 30 27.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Center Top Person */}
    <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="3" />
    
    {/* Magnifying Glass (Search) */}
    <circle cx="24" cy="30" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M30 36L38 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    
    {/* User silhouette inside search lens */}
    <circle cx="24" cy="28" r="2.5" fill="currentColor" />
    <path d="M19.5 35C19.5 32.5 21.5 31 24 31C26.5 31 28.5 32.5 28.5 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
