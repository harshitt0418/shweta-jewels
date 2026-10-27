import React from 'react';
import { TRUST_PILLARS } from '../data/diamonds';

export const TrustMarquee = ({ theme = 'light' }) => {
  const isLight = theme === 'light';
  const items = [...TRUST_PILLARS, ...TRUST_PILLARS, ...TRUST_PILLARS, ...TRUST_PILLARS];

  return (
    <div className={`relative w-full py-4 sm:py-5 border-y overflow-hidden z-20 transition-colors duration-500 ${
      isLight
        ? 'bg-[#EFEAE0] border-[#E0D8C8]'
        : 'bg-obsidian-light border-champagne/10'
    }`}>
      {/* Edge shadow fades for seamless luxury loop */}
      <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r ${
        isLight ? 'from-[#EFEAE0] to-transparent' : 'from-obsidian-light to-transparent'
      }`} />
      <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l ${
        isLight ? 'from-[#EFEAE0] to-transparent' : 'from-obsidian-light to-transparent'
      }`} />

      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((pillar, idx) => (
          <div key={idx} className="flex items-center mx-6 sm:mx-8">
            <span className={`text-[11px] sm:text-xs font-sans tracking-widest_editorial uppercase font-medium ${
              isLight ? 'text-[#2C2C32]' : 'text-champagne/80'
            }`}>
              {pillar}
            </span>
            <span className={`mx-6 sm:mx-8 ${
              isLight ? 'text-indigoBrand font-bold' : 'text-indigoBrand-light opacity-60'
            }`}>
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
