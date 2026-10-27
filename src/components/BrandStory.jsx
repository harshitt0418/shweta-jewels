import React from 'react';
import { ArrowRight, Sparkles, Gem } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const BrandStory = ({ onOpenStory, theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <section 
      id="brand-story" 
      className={`py-24 md:py-36 relative overflow-hidden border-t transition-colors duration-700 ${
        isLight ? 'bg-[#F9F7F2] border-[#E8E1D2]' : 'bg-obsidian border-champagne/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Bold Split-Screen Composition with Scroll Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Close-up luxury image of diamond loupe inspection with ScrollReveal */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" duration={800}>
              <div className={`relative aspect-[4/5] sm:aspect-[5/6] rounded-2xl overflow-hidden border shadow-2xl group cursor-pointer transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_25px_60px_rgba(77,54,168,0.15)] ${
                isLight ? 'border-[#E2DAC9]' : 'border-champagne/15'
              }`}>
                <img
                  src="/assets/craftsmanship-loupe.jpg"
                  alt="Master Diamond Inspection at Shweta Diam Inc"
                  className={`w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-1000 ease-out ${
                    isLight ? 'filter brightness-[0.9] contrast-105' : 'filter brightness-[0.8] contrast-110'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isLight ? 'from-black/60 via-transparent to-transparent' : 'from-obsidian via-transparent to-transparent opacity-60'
                }`} />

                {/* Floating Architectural Badge */}
                <div className={`absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md border flex items-center justify-between transition-transform duration-300 group-hover:translate-y-[-2px] ${
                  isLight
                    ? 'bg-white/90 border-[#DED6C6] text-[#111116] shadow-lg'
                    : 'bg-obsidian-surface/85 border-champagne/15 text-champagne shadow-2xl'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                      isLight
                        ? 'bg-indigoBrand/10 border-indigoBrand text-indigoBrand'
                        : 'bg-indigoBrand/20 border-indigoBrand text-indigoBrand-light'
                    }`}>
                      <Gem className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-serif font-semibold">Manhattan Diamond Atelier</div>
                      <div className={`text-[10px] font-sans ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                        20 W 47th St • Precision Lapidary
                      </div>
                    </div>
                  </div>
                  <div className={`text-[10px] font-mono ${isLight ? 'text-[#7D776C]' : 'text-champagne-muted'}`}>
                    REF. #SD-ATELIER
                  </div>
                </div>
              </div>

              {/* Decorative accent border */}
              <div className={`hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t border-l rounded-tl-2xl pointer-events-none transition-all duration-500 ${
                isLight ? 'border-indigoBrand/30' : 'border-champagne/20'
              }`} />
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Copy with Staggered ScrollReveal */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="left" delay={100} duration={700}>
              <div className="space-y-4">
                <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest_editorial font-sans font-semibold ${
                  isLight ? 'text-indigoBrand' : 'text-indigoBrand-light'
                }`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  THE HOUSE OF SHWETA
                </div>

                <h2 className={`text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-[1.12] ${
                  isLight ? 'text-[#111116]' : 'text-champagne'
                }`}>
                  Chosen with precision. <br />
                  <span className="italic font-normal">Remembered forever.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Luxury Copy */}
            <ScrollReveal direction="left" delay={200} duration={700}>
              <div className={`space-y-5 text-sm sm:text-base font-sans font-light leading-relaxed ${
                isLight ? 'text-[#5C564C]' : 'text-champagne-muted'
              }`}>
                <p>
                  At Shweta Diam Inc., every diamond begins in the hands of master gemologists. As a dedicated diamond manufacturer and international trader based in the heart of New York City, we operate with an uncompromising standard for optical fire and structural integrity.
                </p>
                <p>
                  We believe true luxury is rooted in absolute transparency and personal guidance. Rather than overwhelming you with endless catalogs, we curate exceptional rough and polished stones—matching each client with a diamond of extraordinary character, exact proportions, and enduring value.
                </p>
              </div>
            </ScrollReveal>

            {/* Credibility Pillars */}
            <ScrollReveal direction="left" delay={300} duration={700}>
              <div className={`grid grid-cols-2 gap-4 py-4 border-y ${
                isLight ? 'border-[#EAE3D4]' : 'border-hairline'
              }`}>
                <div className="space-y-1">
                  <div className={`text-xs uppercase tracking-widest_editorial font-semibold ${
                    isLight ? 'text-[#111116]' : 'text-champagne'
                  }`}>
                    Direct Manufacturer
                  </div>
                  <div className={`text-xs ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                    From rough selection directly to certified polish
                  </div>
                </div>

                <div className="space-y-1">
                  <div className={`text-xs uppercase tracking-widest_editorial font-semibold ${
                    isLight ? 'text-[#111116]' : 'text-champagne'
                  }`}>
                    Personal Guidance
                  </div>
                  <div className={`text-xs ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                    Private consultations tailored to individual taste
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="left" delay={400} duration={700}>
              <div>
                <button
                  onClick={onOpenStory}
                  className={`group px-8 py-4 rounded-full text-xs tracking-widest_editorial uppercase font-medium transition-all shadow-xl flex items-center gap-2 transform hover:-translate-y-0.5 ${
                    isLight
                      ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_35px_rgba(77,54,168,0.2)]'
                      : 'bg-champagne text-obsidian hover:bg-champagne-light shadow-champagne/10'
                  }`}
                >
                  Discover Our Story
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
