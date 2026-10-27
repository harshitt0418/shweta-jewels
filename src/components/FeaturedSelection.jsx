import React from 'react';
import { Eye, Heart, Sparkles, ArrowUpRight } from 'lucide-react';
import { FEATURED_DIAMONDS } from '../data/diamonds';
import { DiamondVectorIcon } from './DiamondVectors';
import { ScrollReveal } from './ScrollReveal';

export const FeaturedSelection = ({ onInspectStone, onToggleWishlist, wishlist = [], onBookConsultation, theme = 'light' }) => {
  const primaryStone = FEATURED_DIAMONDS.find(d => d.isPrimary);
  const secondaryStones = FEATURED_DIAMONDS.filter(d => !d.isPrimary);
  const isLight = theme === 'light';

  return (
    <section 
      id="featured-section" 
      className={`py-24 md:py-32 relative overflow-hidden border-t transition-colors duration-700 ${
        isLight ? 'bg-[#F4F0E6] border-[#E8E1D2]' : 'bg-obsidian-light border-champagne/10'
      }`}
    >
      {/* Background Subtle Radiance */}
      <div className={`absolute top-1/2 right-10 w-[500px] h-[500px] blur-[140px] pointer-events-none rounded-full ${
        isLight ? 'bg-indigoBrand/5' : 'bg-indigoBrand/8'
      }`} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-2xl mb-16 space-y-3">
            <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest_editorial font-sans font-semibold ${
              isLight ? 'text-indigoBrand' : 'text-indigoBrand-light'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              Curated Vault Inventory
            </div>
            <h2 className={`text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-tight ${
              isLight ? 'text-[#111116]' : 'text-champagne'
            }`}>
              Selected for <span className="italic font-normal">brilliance.</span>
            </h2>
            <p className={`text-xs sm:text-sm font-sans leading-relaxed ${
              isLight ? 'text-[#6B665E]' : 'text-champagne-muted'
            }`}>
              Three exceptional stones hand-chosen from our current Manhattan vault reserves. Hover any piece to view stone diagnostics and certificate dossier.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric Composition with Hover Elevation above siblings */}
        <div className="group/featured grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* PRIMARY OVERSIZED CARD */}
          {primaryStone && (() => {
            const isWishlisted = wishlist.some(item => (item.id || item.sku) === primaryStone.sku);

            return (
              <div className="lg:col-span-7">
                <ScrollReveal direction="up" delay={150} duration={800} className="h-full">
                  <div 
                    className={`h-full rounded-2xl overflow-hidden flex flex-col justify-between group/card transition-all duration-500 ease-out relative border cursor-pointer ${
                      /* Hover effects: come above other cards, elevate scale, shadow, ring */
                      'z-10 hover:z-30 hover:scale-[1.025] hover:-translate-y-2 group-hover/featured:opacity-85 hover:!opacity-100'
                    } ${
                      isLight
                        ? 'bg-white border-[#E2DAC9] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:border-indigoBrand hover:shadow-[0_30px_70px_rgba(77,54,168,0.22)] ring-1 ring-transparent hover:ring-indigoBrand/40'
                        : 'bg-obsidian-card border-champagne/15 shadow-2xl hover:border-indigoBrand-light hover:shadow-[0_30px_70px_rgba(114,86,212,0.35)] ring-1 ring-transparent hover:ring-indigoBrand/40'
                    }`}
                  >
                    {/* Visual Area */}
                    <div className={`relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden ${
                      isLight ? 'bg-[#EDE7DA]' : 'bg-obsidian'
                    }`}>
                      <img
                        src={primaryStone.image}
                        alt={primaryStone.title}
                        className={`w-full h-full object-cover object-center group-hover/card:scale-108 transition-transform duration-700 ease-out ${
                          isLight ? 'filter brightness-[0.92] contrast-105' : 'filter brightness-[0.8] contrast-110'
                        }`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        isLight 
                          ? 'from-white via-white/20 to-transparent' 
                          : 'from-obsidian-card via-obsidian-card/20 to-transparent'
                      }`} />

                      {/* Animated Light Sweep */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent light-beam pointer-events-none group-hover/card:animate-pulse" />

                      {/* Badges */}
                      <div className="absolute top-5 left-5 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest_editorial font-semibold bg-indigoBrand text-white shadow-md">
                          {primaryStone.tag}
                        </span>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider backdrop-blur-md border ${
                          isLight
                            ? 'bg-white/90 text-[#111116] border-[#DED6C6]'
                            : 'bg-obsidian/75 text-champagne border-champagne/15'
                        }`}>
                          {primaryStone.sku}
                        </span>
                      </div>

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(primaryStone);
                        }}
                        className={`absolute top-5 right-5 p-2.5 rounded-full border backdrop-blur-md transition-all ${
                          isWishlisted 
                            ? 'border-indigoBrand bg-indigoBrand text-white shadow-lg' 
                            : isLight
                              ? 'border-[#DED6C6] bg-white/85 text-[#111116] hover:border-[#111116] hover:scale-110'
                              : 'border-champagne/20 bg-obsidian/60 text-champagne hover:border-champagne/50 hover:scale-110'
                        }`}
                        title="Add to Vault Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>

                      <div className={`absolute bottom-4 right-4 p-2.5 rounded-full border pointer-events-none transition-transform duration-300 group-hover/card:scale-110 ${
                        isLight
                          ? 'bg-white/90 border-[#DED6C6] text-[#111116]'
                          : 'bg-obsidian/85 border-champagne/15 text-champagne'
                      }`}>
                        <DiamondVectorIcon shape={primaryStone.shape} className="w-5 h-5" strokeWidth={1.3} />
                      </div>
                    </div>

                    {/* Editorial Details */}
                    <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-baseline justify-between mb-2">
                          <span className={`text-xs uppercase tracking-widest_editorial font-semibold ${
                            isLight ? 'text-indigoBrand' : 'text-indigoBrand-light'
                          }`}>
                            {primaryStone.shape} Cut • Super Ideal
                          </span>
                          <span className={`text-2xl font-serif tracking-wider font-medium ${
                            isLight ? 'text-[#111116]' : 'text-champagne'
                          }`}>
                            {primaryStone.price}
                          </span>
                        </div>

                        <h3 className={`text-2xl sm:text-3xl font-serif font-normal tracking-wide transition-colors ${
                          isLight ? 'text-[#111116] group-hover/card:text-indigoBrand' : 'text-champagne group-hover/card:text-champagne-light'
                        }`}>
                          {primaryStone.title}
                        </h3>
                      </div>

                      {/* Specs strip */}
                      <div className={`grid grid-cols-4 gap-2 py-3 border-y text-center text-xs ${
                        isLight ? 'border-[#EAE3D4]' : 'border-hairline'
                      }`}>
                        <div>
                          <div className={`text-[10px] uppercase tracking-widest ${
                            isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                          }`}>Carat</div>
                          <div className={`font-serif font-semibold text-sm mt-0.5 ${
                            isLight ? 'text-[#111116]' : 'text-champagne'
                          }`}>{primaryStone.carat}</div>
                        </div>
                        <div>
                          <div className={`text-[10px] uppercase tracking-widest ${
                            isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                          }`}>Colour</div>
                          <div className={`font-serif font-semibold text-sm mt-0.5 ${
                            isLight ? 'text-[#111116]' : 'text-champagne'
                          }`}>{primaryStone.color} (D Colorless)</div>
                        </div>
                        <div>
                          <div className={`text-[10px] uppercase tracking-widest ${
                            isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                          }`}>Clarity</div>
                          <div className={`font-serif font-semibold text-sm mt-0.5 ${
                            isLight ? 'text-[#111116]' : 'text-champagne'
                          }`}>{primaryStone.clarity}</div>
                        </div>
                        <div>
                          <div className={`text-[10px] uppercase tracking-widest ${
                            isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                          }`}>Certificate</div>
                          <div className={`font-serif font-semibold text-sm mt-0.5 ${
                            isLight ? 'text-[#111116]' : 'text-champagne'
                          }`}>GIA Dossier</div>
                        </div>
                      </div>

                      {/* Bottom Action Strip */}
                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => onInspectStone(primaryStone)}
                          className={`px-6 py-3 rounded-full text-xs tracking-widest_editorial uppercase font-medium transition-all flex items-center gap-2 shadow-lg ${
                            isLight
                              ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-[0_8px_20px_rgba(0,0,0,0.1)]'
                              : 'bg-champagne text-obsidian hover:bg-champagne-light'
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View Stone Dossier
                        </button>

                        <button
                          onClick={() => onBookConsultation(primaryStone)}
                          className={`text-xs uppercase tracking-widest_editorial transition-all flex items-center gap-1 font-semibold group-hover/card:translate-x-1 ${
                            isLight
                              ? 'text-[#111116] hover:text-indigoBrand'
                              : 'text-champagne hover:text-indigoBrand-light'
                          }`}
                        >
                          Private Inquiry
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })()}

          {/* TWO SECONDARY CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {secondaryStones.map((stone, idx) => {
              const isWishlisted = wishlist.some(item => (item.id || item.sku) === stone.sku);

              return (
                <ScrollReveal key={stone.sku} direction="up" delay={250 + (idx * 150)} duration={800}>
                  <div
                    className={`rounded-2xl overflow-hidden flex flex-col sm:flex-row lg:flex-col group/card transition-all duration-500 ease-out border cursor-pointer ${
                      /* Hover elevates above siblings */
                      'z-10 hover:z-30 hover:scale-[1.03] hover:-translate-y-2 group-hover/featured:opacity-85 hover:!opacity-100'
                    } ${
                      isLight
                        ? 'bg-white border-[#E2DAC9] shadow-[0_12px_35px_rgba(0,0,0,0.05)] hover:border-indigoBrand hover:shadow-[0_25px_60px_rgba(77,54,168,0.2)] ring-1 ring-transparent hover:ring-indigoBrand/40'
                        : 'bg-obsidian-card border-champagne/15 shadow-xl hover:border-indigoBrand-light hover:shadow-[0_25px_60px_rgba(114,86,212,0.35)] ring-1 ring-transparent hover:ring-indigoBrand/40'
                    }`}
                  >
                    {/* Image area */}
                    <div className={`relative aspect-[16/10] sm:aspect-square sm:w-52 lg:w-full lg:aspect-[16/9] overflow-hidden shrink-0 ${
                      isLight ? 'bg-[#EDE7DA]' : 'bg-obsidian'
                    }`}>
                      <img
                        src={stone.image}
                        alt={stone.title}
                        className={`w-full h-full object-cover object-center group-hover/card:scale-108 transition-transform duration-700 ease-out ${
                          isLight ? 'filter brightness-[0.92] contrast-105' : 'filter brightness-[0.8] contrast-110'
                        }`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        isLight ? 'from-white via-transparent to-transparent' : 'from-obsidian-card via-transparent to-transparent'
                      }`} />

                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider backdrop-blur-md border ${
                          isLight
                            ? 'bg-white/90 text-[#111116] border-[#DED6C6]'
                            : 'bg-obsidian/80 text-champagne border-champagne/15'
                        }`}>
                          {stone.sku}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(stone);
                        }}
                        className={`absolute top-3 right-3 p-2 rounded-full border backdrop-blur-md transition-all ${
                          isWishlisted 
                            ? 'border-indigoBrand bg-indigoBrand text-white shadow-md' 
                            : isLight
                              ? 'border-[#DED6C6] bg-white/85 text-[#111116] hover:border-[#111116] hover:scale-110'
                              : 'border-champagne/20 bg-obsidian/60 text-champagne hover:border-champagne/50 hover:scale-110'
                        }`}
                        title="Add to Vault Wishlist"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] uppercase tracking-widest_editorial font-semibold ${
                            isLight ? 'text-indigoBrand' : 'text-indigoBrand-light'
                          }`}>
                            {stone.shape} Cut • {stone.cut}
                          </span>
                          <span className={`text-lg font-serif tracking-wider font-medium ${
                            isLight ? 'text-[#111116]' : 'text-champagne'
                          }`}>
                            {stone.price}
                          </span>
                        </div>

                        <h4 className={`text-lg font-serif transition-colors ${
                          isLight ? 'text-[#111116] group-hover/card:text-indigoBrand' : 'text-champagne group-hover/card:text-champagne-light'
                        }`}>
                          {stone.title}
                        </h4>
                      </div>

                      <div className={`flex items-center justify-between py-2 border-y text-xs font-mono ${
                        isLight ? 'border-[#EAE3D4] text-[#6A665E]' : 'border-hairline text-champagne-muted'
                      }`}>
                        <span>{stone.carat}</span>
                        <span>•</span>
                        <span>Color {stone.color}</span>
                        <span>•</span>
                        <span>{stone.clarity}</span>
                        <span>•</span>
                        <span className={`font-semibold ${isLight ? 'text-[#111116]' : 'text-champagne/90'}`}>
                          {stone.cert.split(' ')[0]}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => onInspectStone(stone)}
                          className={`text-xs uppercase tracking-widest_editorial transition-colors flex items-center gap-1.5 font-semibold py-1 ${
                            isLight ? 'text-[#111116] hover:text-indigoBrand' : 'text-champagne hover:text-indigoBrand-light'
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View Stone
                        </button>

                        <button
                          onClick={() => onBookConsultation(stone)}
                          className={`text-[11px] uppercase tracking-widest transition-all group-hover/card:translate-x-1 ${
                            isLight ? 'text-[#7D776C] hover:text-[#111116] font-medium' : 'text-champagne-muted hover:text-champagne'
                          }`}
                        >
                          Inquire
                        </button>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
