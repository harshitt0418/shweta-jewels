import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeritageStory = ({ onOpenStory }) => {
  return (
    <section id="heritage-section" className="py-24 md:py-36 bg-cream-100 text-espresso px-6 sm:px-8 md:px-12 border-t border-cream-400/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Elegant Image of Diamond Jewellery Craftsmanship */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-2xl overflow-hidden shadow-[0_12px_45px_rgba(30,26,23,0.06)] border border-cream-400/80 group">
              <img
                src="/ornaments/craftsmanship-warm.jpg"
                alt="Crafting Fine Diamond Jewellery at Shweta Diam Inc."
                className="w-full h-full object-cover object-center img-zoom filter brightness-[0.97] contrast-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />

              {/* Quiet Craftsmanship Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-cream-400/90 flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif text-espresso font-medium text-sm">New York Atelier</div>
                  <div className="text-[11px] text-espresso-muted font-light mt-0.5">Hand-set diamond ornaments</div>
                </div>
                <div className="text-[10px] uppercase tracking-luxury text-gold-dark font-medium">
                  Manhattan • 47th St
                </div>
              </div>
            </div>

            {/* Subtle decorative border corner */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t border-l border-gold/40 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Right: Emotional Brand Story Copy */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest_editorial text-gold-dark font-sans font-medium">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                THE HOUSE OF SHWETA
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-espresso leading-[1.12]">
                A heritage of brilliance, <br />
                <span className="italic font-normal">made personal.</span>
              </h2>
            </div>

            {/* Precise Luxury Copy (no fake history or awards) */}
            <p className="text-sm sm:text-base md:text-lg text-espresso-muted font-light leading-relaxed font-sans max-w-xl">
              At Shweta Diam Inc., every ornament is selected to celebrate love, milestones and memories. We bring together timeless design, exceptional diamonds and personal attention to help every piece feel truly yours.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenStory}
                className="px-8 py-4 rounded-full bg-espresso text-cream-50 font-sans font-medium text-xs tracking-luxury uppercase hover:bg-espresso-light hover:shadow-[0_8px_30px_rgba(30,26,23,0.15)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Our Story
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
