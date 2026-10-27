import React from 'react';
import { Gem, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { TRUST_PROMISES } from '../data/jewellery';

const ICONS = [Gem, Sparkles, HeartHandshake, ShieldCheck];

export const WarmTrustStrip = () => {
  return (
    <section className="relative w-full bg-cream-200 border-b border-cream-400/80 py-7 px-6 sm:px-8 md:px-12 text-espresso">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-cream-400">
          {TRUST_PROMISES.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <div 
                key={item.title} 
                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 ${
                  index !== 0 ? 'pt-5 md:pt-0 md:pl-6 lg:pl-8' : ''
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-white/70 border border-cream-400 flex items-center justify-center shrink-0 text-gold-dark">
                  <Icon className="w-4 h-4 stroke-[1.6]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-sans font-medium tracking-wide text-espresso">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-espresso-muted font-light mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
