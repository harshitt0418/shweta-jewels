import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Heart, Eye } from 'lucide-react';
import { DIAMOND_SHAPES } from '../data/diamonds';
import { DiamondVectorIcon } from './DiamondVectors';
import { ScrollReveal } from './ScrollReveal';

export const DiamondShapes = ({ onInspectShape, onToggleWishlist, wishlist = [], theme = 'light' }) => {
  const scrollContainerRef = useRef(null);
  const [activeShapeId, setActiveShapeId] = useState(null);
  const isLight = theme === 'light';

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="shapes-section" 
      className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-700 ${
        isLight ? 'bg-[#F9F7F2]' : 'bg-obsidian'
      }`}
    >
      {/* Background glow */}
      <div className={`absolute top-1/3 left-1/4 w-96 h-96 blur-[120px] pointer-events-none rounded-full ${
        isLight ? 'bg-indigoBrand/5' : 'bg-indigoBrand/10'
      }`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 blur-[120px] pointer-events-none rounded-full ${
        isLight ? 'bg-[#E5DEC9]/40' : 'bg-champagne/5'
      }`} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest_editorial font-sans font-semibold ${
                isLight ? 'text-indigoBrand' : 'text-indigoBrand-light'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                The Lapidary Masterwork
              </div>
              <h2 className={`text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-tight ${
                isLight ? 'text-[#111116]' : 'text-champagne'
              }`}>
                Every cut holds a <br className="hidden sm:inline" />
                <span className="italic font-normal">different kind of light.</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <p className={`text-xs max-w-xs font-sans hidden lg:block leading-relaxed ${
                isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
              }`}>
                Six singular silhouettes, each calibrated to manipulate refraction, contrast, and optical geometry. Hover any stone to highlight its facet architecture.
              </p>
              {/* Scroll Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  className={`p-3 rounded-full border transition-all ${
                    isLight
                      ? 'border-[#DED6C6] text-[#2C2C32] hover:bg-white hover:border-[#111116]'
                      : 'border-champagne/15 text-champagne hover:border-champagne/40 hover:bg-champagne/5'
                  }`}
                  title="Previous shape"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className={`p-3 rounded-full border transition-all ${
                    isLight
                      ? 'border-[#DED6C6] text-[#2C2C32] hover:bg-white hover:border-[#111116]'
                      : 'border-champagne/15 text-champagne hover:border-champagne/40 hover:bg-champagne/5'
                  }`}
                  title="Next shape"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Immersive Editorial Promenade: Cards elevated above others on hover */}
        <div 
          ref={scrollContainerRef}
          className="group/track flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar pb-12 pt-6 scroll-smooth select-none items-center"
        >
          {DIAMOND_SHAPES.map((shape, index) => {
            const isWishlisted = wishlist.some(item => (item.id || item.sku) === shape.id);
            const isTaller = index % 2 === 1;

            return (
              <ScrollReveal 
                key={shape.id}
                delay={index * 110} 
                direction="up" 
                duration={750}
                className="shrink-0"
              >
                <div
                  className={`relative w-[290px] sm:w-[340px] md:w-[370px] rounded-2xl overflow-hidden group/card animate-light-sweep flex flex-col justify-between border cursor-pointer ${
                    /* CRITICAL HOVER REQUIREMENTS:
                       1. Elevated above other cards (z-30 relative vs z-10)
                       2. Scales up (hover:scale-[1.04] / hover:-translate-y-2)
                       3. Deep luxury glow shadow & highlighted border
                       4. Track focus: dim other non-hovered cards (group-hover/track:opacity-70 hover:!opacity-100)
                    */
                    'transition-all duration-500 ease-out z-10 hover:z-30 hover:scale-[1.045] hover:-translate-y-2.5 group-hover/track:opacity-75 hover:!opacity-100'
                  } ${
                    isLight
                      ? 'bg-white border-[#E5DEC9] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-indigoBrand hover:shadow-[0_25px_65px_rgba(77,54,168,0.25)] ring-1 ring-transparent hover:ring-indigoBrand/40'
                      : 'bg-obsidian-card border-champagne/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-indigoBrand-light hover:shadow-[0_25px_65px_rgba(114,86,212,0.4)] ring-1 ring-transparent hover:ring-indigoBrand/50'
                  } ${isTaller ? 'h-[530px]' : 'h-[490px]'}`}
                  onMouseEnter={() => setActiveShapeId(shape.id)}
                  onMouseLeave={() => setActiveShapeId(null)}
                >
                  {/* Background Macro Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={shape.image}
                      alt={shape.name}
                      className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-110 ${
                        isLight 
                          ? 'filter brightness-[0.9] contrast-105' 
                          : 'filter brightness-[0.72] contrast-110'
                      }`}
                    />
                    {/* Dark/Light Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      isLight 
                        ? 'from-white via-white/70 to-transparent' 
                        : 'from-obsidian via-obsidian/40 to-transparent'
                    }`} />
                    
                    {/* Animated Light Sweep Effect on Hover */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent light-beam pointer-events-none" />
                  </div>

                  {/* Top Card Info */}
                  <div className="relative z-10 p-6 sm:p-7 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border transition-colors ${
                        isLight
                          ? 'bg-white/95 text-[#4A463F] border-[#DED6C6] group-hover/card:border-indigoBrand group-hover/card:text-indigoBrand font-bold'
                          : 'bg-obsidian/75 text-champagne-muted border-champagne/10 group-hover/card:border-indigoBrand-light group-hover/card:text-champagne font-bold'
                      }`}>
                        0{index + 1}
                      </span>
                      <span className={`text-[10px] uppercase tracking-widest font-medium ${
                        isLight ? 'text-[#3E3A33] bg-white/80 px-2 py-0.5 rounded-full' : 'text-champagne-muted'
                      }`}>
                        {shape.facets}
                      </span>
                    </div>

                    {/* Actions: Wishlist */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(shape);
                      }}
                      className={`p-2 rounded-full border backdrop-blur-md transition-all ${
                        isWishlisted 
                          ? 'border-indigoBrand bg-indigoBrand text-white shadow-md' 
                          : isLight
                            ? 'border-[#DED6C6] bg-white/85 text-[#2C2C32] hover:border-[#111116] hover:scale-110'
                            : 'border-champagne/20 bg-obsidian/60 text-champagne hover:border-champagne/50 hover:scale-110'
                      }`}
                      title="Save cut preference"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom Card Editorial Specs */}
                  <div className={`relative z-10 p-6 sm:p-7 space-y-4 ${
                    isLight 
                      ? 'bg-gradient-to-t from-white via-white/95 to-transparent text-[#111116]' 
                      : 'bg-gradient-to-t from-obsidian/95 via-obsidian/85 to-transparent text-champagne'
                  }`}>
                    {/* Geometric Vector Silhouette Badge */}
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover/card:scale-110 ${
                      isLight
                        ? 'bg-white border-[#DED6C6] text-[#111116] group-hover/card:text-indigoBrand group-hover/card:border-indigoBrand group-hover/card:shadow-md'
                        : 'bg-obsidian/80 border-champagne/20 text-champagne group-hover/card:text-indigoBrand-light group-hover/card:border-indigoBrand/60 group-hover/card:shadow-md'
                    }`}>
                      <DiamondVectorIcon shape={shape.shortName} className="w-5 h-5" strokeWidth={1.3} />
                    </div>

                    <div className="space-y-1">
                      <h3 className={`text-2xl sm:text-3xl font-serif transition-colors ${
                        isLight ? 'text-[#111116] group-hover/card:text-indigoBrand' : 'text-champagne group-hover/card:text-champagne-light'
                      }`}>
                        {shape.name}
                      </h3>
                      <p className={`text-xs sm:text-sm font-serif italic ${
                        isLight ? 'text-[#5C564C]' : 'text-champagne-muted'
                      }`}>
                        “{shape.poetic}”
                      </p>
                    </div>

                    <p className={`text-xs line-clamp-2 leading-relaxed font-sans ${
                      isLight ? 'text-[#6B665E]' : 'text-champagne-muted'
                    }`}>
                      {shape.description}
                    </p>

                    {/* CTA */}
                    <div className={`pt-2 flex items-center justify-between border-t ${
                      isLight ? 'border-[#EAE3D4]' : 'border-champagne/10'
                    }`}>
                      <button
                        onClick={() => onInspectShape(shape)}
                        className={`text-[11px] uppercase tracking-widest_editorial transition-all flex items-center gap-1.5 font-semibold py-1 group-hover/card:translate-x-1 ${
                          isLight ? 'text-[#111116] hover:text-indigoBrand' : 'text-champagne hover:text-indigoBrand-light'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5 text-indigoBrand" />
                        Inspect Blueprint
                      </button>
                      <span className={`text-[10px] font-mono ${
                        isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                      }`}>
                        Ratio {shape.ratio}
                      </span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom subtle note */}
        <ScrollReveal direction="up" delay={200}>
          <div className={`mt-4 flex flex-col sm:flex-row items-center justify-between text-xs border-t pt-6 ${
            isLight ? 'text-[#7D776C] border-[#E8E1D2]' : 'text-champagne-muted border-champagne/10'
          }`}>
            <span className="font-sans">
              Every rough diamond is cut to bespoke tolerances in our New York atelier.
            </span>
            <span className={`font-serif italic mt-2 sm:mt-0 ${
              isLight ? 'text-[#3E3A33]' : 'text-champagne/80'
            }`}>
              Available in Round, Emerald, Pear, Oval, Heart, Princess, Radiant, Marquise, Asscher, Cushion & Fancy.
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
