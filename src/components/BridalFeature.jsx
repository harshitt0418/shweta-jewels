import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const BridalFeature = ({ onExploreBridal }) => {
  return (
    <section id="bridal-section" className="py-24 md:py-36 bg-cream-200 border-t border-cream-400/80 px-6 sm:px-8 md:px-12 text-espresso">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <ScrollReveal className="lg:col-span-6 space-y-8 text-left order-2 lg:order-1" direction="right">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest_editorial text-gold-dark font-sans font-medium">
                Bridal & Wedding Fine Jewellery
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-espresso leading-[1.14]">
                For the moment that <br />
                <span className="italic font-normal">becomes forever.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-espresso-muted font-light leading-relaxed font-sans max-w-xl">
              Discover diamond jewellery designed to stay close to your story—on the day, and long after.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreBridal}
                className="px-8 py-4 rounded-full bg-espresso text-cream-50 font-sans font-medium text-xs tracking-luxury uppercase hover:bg-espresso-light hover:shadow-[0_8px_30px_rgba(30,26,23,0.15)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Explore Bridal Jewellery
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </ScrollReveal>

          {/* Right: Full-height / Large Image of Bride Wearing Refined Diamond Jewellery */}
          <ScrollReveal className="lg:col-span-6 order-1 lg:order-2" direction="left" delay={120}>
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(30,26,23,0.06)] border border-cream-400/90 group">
              <img
                src="/ornaments/bridal-feature.jpg"
                alt="Bride wearing refined diamond jewellery by Shweta Diam Inc."
                className="w-full h-full object-cover object-center img-zoom filter brightness-[0.98] contrast-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />

              {/* Subtle caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-cream-400/90 flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif text-espresso font-medium text-sm">The Bridal Suite</div>
                  <div className="text-[11px] text-espresso-muted font-light mt-0.5">Bespoke engagement rings & heirloom sets</div>
                </div>
                <div className="text-[10px] uppercase tracking-luxury text-gold-dark font-medium">
                  Eternal Grace
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
