import React from 'react';

export const DiamondVectorIcon = ({ shape, className = "w-6 h-6", strokeWidth = 1 }) => {
  switch (shape?.toLowerCase()) {
    case 'round':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
          <circle cx="50" cy="50" r="45" strokeOpacity="0.8" />
          <polygon points="50,15 82,32 82,68 50,85 18,68 18,32" strokeOpacity="0.6" />
          <polygon points="50,28 70,39 70,61 50,72 30,61 30,39" strokeOpacity="0.9" />
          <line x1="50" y1="5" x2="50" y2="15" strokeOpacity="0.5" />
          <line x1="95" y1="50" x2="82" y2="50" strokeOpacity="0.5" />
          <line x1="50" y1="95" x2="50" y2="85" strokeOpacity="0.5" />
          <line x1="5" y1="50" x2="18" y2="50" strokeOpacity="0.5" />
          <line x1="18" y1="32" x2="30" y2="39" strokeOpacity="0.5" />
          <line x1="82" y1="32" x2="70" y2="39" strokeOpacity="0.5" />
          <line x1="82" y1="68" x2="70" y2="61" strokeOpacity="0.5" />
          <line x1="18" y1="68" x2="30" y2="61" strokeOpacity="0.5" />
        </svg>
      );
    case 'emerald':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
          <polygon points="20,10 80,10 92,22 92,78 80,90 20,90 8,78 8,22" strokeOpacity="0.85" />
          <polygon points="26,18 74,18 84,28 84,72 74,82 26,82 16,72 16,28" strokeOpacity="0.65" />
          <polygon points="34,26 66,26 74,34 74,66 66,74 34,74 26,66 26,34" strokeOpacity="0.9" />
          <line x1="8" y1="22" x2="26" y2="34" strokeOpacity="0.5" />
          <line x1="92" y1="22" x2="74" y2="34" strokeOpacity="0.5" />
          <line x1="92" y1="78" x2="74" y2="66" strokeOpacity="0.5" />
          <line x1="8" y1="78" x2="26" y2="66" strokeOpacity="0.5" />
        </svg>
      );
    case 'oval':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
          <ellipse cx="50" cy="50" rx="36" ry="46" strokeOpacity="0.85" />
          <ellipse cx="50" cy="50" rx="24" ry="32" strokeOpacity="0.65" />
          <polygon points="50,12 70,30 70,70 50,88 30,70 30,30" strokeOpacity="0.85" />
          <line x1="50" y1="4" x2="50" y2="12" strokeOpacity="0.5" />
          <line x1="50" y1="96" x2="50" y2="88" strokeOpacity="0.5" />
          <line x1="14" y1="50" x2="26" y2="50" strokeOpacity="0.5" />
          <line x1="86" y1="50" x2="74" y2="50" strokeOpacity="0.5" />
        </svg>
      );
    case 'pear':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
          <path d="M50 8 C68 35, 84 55, 84 72 C84 86, 68 94, 50 94 C32 94, 16 86, 16 72 C16 55, 32 35, 50 8 Z" strokeOpacity="0.85" />
          <path d="M50 25 C62 45, 72 60, 72 72 C72 82, 60 86, 50 86 C40 86, 28 82, 28 72 C28 60, 38 45, 50 25 Z" strokeOpacity="0.6" />
          <polygon points="50,38 65,60 50,78 35,60" strokeOpacity="0.9" />
          <line x1="50" y1="8" x2="50" y2="25" strokeOpacity="0.5" />
          <line x1="50" y1="86" x2="50" y2="94" strokeOpacity="0.5" />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
          <path d="M50 32 C42 16, 15 16, 15 42 C15 62, 38 78, 50 90 C62 78, 85 62, 85 42 C85 16, 58 16, 50 32 Z" strokeOpacity="0.85" />
          <path d="M50 42 C44 30, 26 30, 26 48 C26 62, 42 74, 50 82 C58 74, 74 62, 74 48 C74 30, 56 30, 50 42 Z" strokeOpacity="0.6" />
          <polygon points="50,48 62,56 50,72 38,56" strokeOpacity="0.9" />
        </svg>
      );
    case 'princess':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
          <rect x="12" y="12" width="76" height="76" strokeOpacity="0.85" />
          <polygon points="50,12 88,50 50,88 12,50" strokeOpacity="0.7" />
          <rect x="28" y="28" width="44" height="44" strokeOpacity="0.9" />
          <line x1="12" y1="12" x2="28" y2="28" strokeOpacity="0.5" />
          <line x1="88" y1="12" x2="72" y2="28" strokeOpacity="0.5" />
          <line x1="88" y1="88" x2="72" y2="72" strokeOpacity="0.5" />
          <line x1="12" y1="88" x2="28" y2="72" strokeOpacity="0.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
          <polygon points="50,10 88,38 74,88 26,88 12,38" strokeOpacity="0.8" />
          <polygon points="50,26 72,44 64,74 36,74 28,44" strokeOpacity="0.9" />
        </svg>
      );
  }
};
