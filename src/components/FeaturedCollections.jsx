import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_COLLECTIONS } from '../data/jewellery';

export const FeaturedCollections = ({ onSelectCollection }) => {
  return (
    <section id="collections-section" className="py-24 md:py-32 bg-cream-100 text-espresso px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest_editorial text-gold-dark font-sans font-medium">
            Curated Ornaments
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-espresso tracking-tight">
            Jewellery for every chapter.
          </h2>
          <p className="text-xs sm:text-sm text-espresso-muted font-light max-w-md mx-auto leading-relaxed">
            From subtle daily brilliance to unforgettable milestone statements, explore diamond creations designed to be cherished.
          </p>
        </div>

        {/* Asymmetrical Magazine-Style Grid Composition */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {FEATURED_COLLECTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCollection(item)}
              className={`${item.span} relative rounded-xl overflow-hidden group cursor-pointer border border-cream-400/80 shadow-[0_4px_25px_rgba(30,26,23,0.03)] hover:shadow-[0_16px_40px_rgba(30,26,23,0.08)] transition-all duration-700`}
            >
              {/* Image Container with Smooth Zoom */}
              <div className={`relative ${item.aspect} w-full overflow-hidden bg-cream-300`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center img-zoom filter brightness-[0.96] contrast-[1.02]"
                />
                {/* Soft Warm Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/20 to-transparent" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white flex flex-col justify-end space-y-2">
                <span className="text-[11px] uppercase tracking-luxury text-cream-200/85 font-medium">
                  {item.tagline}
                </span>
                
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-cream-50 tracking-wide">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-luxury font-medium text-cream-100 group-hover:text-gold-light transition-all transform group-hover:translate-x-1 duration-300 shrink-0">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
