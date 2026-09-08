'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'dark' }) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-20 w-20',
  };

  const colors = {
    light: 'text-white',
    dark: 'text-pb-red',
  };

  return (
    <div className={`flex items-center justify-center ${sizes[size]} ${colors[variant]}`}>
      {/* Placeholder - Replace with actual PizzaBurg logo */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M50 10 L95 85 L5 85 Z"
          fill="currentColor"
          opacity="0.8"
        />
        <text x="50" y="55" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">
          PB
        </text>
      </svg>
    </div>
  );
};

export default Logo;
