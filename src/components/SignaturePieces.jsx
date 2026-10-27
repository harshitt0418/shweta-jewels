import React from 'react';
import { Heart, Eye } from 'lucide-react';
import { SIGNATURE_PIECES } from '../data/jewellery';
import { ScrollReveal } from './ScrollReveal';

export const SignaturePieces = ({ onInspectPiece, onToggleWishlist, wishlist = [] }) => {
  return (
    <section id="signature-section" className="py-24 md:py-32 bg-cream-200 border-t border-cream-400/80 px-6 sm:px-8 md:px-12 text-espresso">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest_editorial text-gold-dark font-sans font-medium">
            Signature Selection
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-espresso tracking-tight">
            Most loved pieces.
          </h2>
          <p className="text-xs sm:text-sm text-espresso-muted font-light max-w-md mx-auto leading-relaxed">
            Four iconic diamond designs, cherished for their effortless balance of modern wearability and timeless grace.
          </p>
        </ScrollReveal>

        {/* 4 Clean Luxury Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SIGNATURE_PIECES.map((piece, index) => {
            const isWishlisted = wishlist.some((item) => item.id === piece.id);

            return (
              <ScrollReveal key={piece.id} delay={index * 100}>
                <div
                  onClick={() => onInspectPiece(piece)}
                  className="group relative bg-white rounded-xl overflow-hidden border border-cream-400/90 shadow-[0_4px_20px_rgba(30,26,23,0.03)] hover:shadow-[0_16px_40px_rgba(30,26,23,0.08)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
                >
                {/* Product Image Area */}
                <div className="relative aspect-square w-full overflow-hidden bg-cream-100">
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover object-center img-zoom filter brightness-[0.98] contrast-[1.01]"
                  />

                  {/* Wishlist Button (Always Available) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(piece);
                    }}
                    className={`absolute top-3.5 right-3.5 p-2 rounded-full border backdrop-blur-md transition-all duration-300 z-10 ${
                      isWishlisted
                        ? 'bg-espresso text-cream-50 border-espresso'
                        : 'bg-white/80 border-cream-400 text-espresso hover:bg-white hover:border-espresso'
                    }`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-white' : ''}`} />
                  </button>

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[10px] uppercase tracking-luxury font-medium text-espresso/70 bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-cream-400/80">
                      {piece.category}
                    </span>
                  </div>

                  {/* "View Piece" Button Revealed on Hover */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onInspectPiece(piece);
                      }}
                      className="w-full py-2.5 rounded-full bg-espresso/95 backdrop-blur-md text-cream-50 text-xs uppercase tracking-luxury font-medium hover:bg-espresso flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Piece
                    </button>
                  </div>
                </div>

                {/* Minimal Card Details */}
                <div className="p-5 sm:p-6 space-y-2 text-left">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] text-espresso-muted font-sans uppercase tracking-luxury">
                      {piece.category}
                    </span>
                    <span className="text-sm font-sans font-medium text-espresso">
                      {piece.price}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-normal text-espresso group-hover:text-gold-dark transition-colors">
                    {piece.name}
                  </h3>

                  <p className="text-xs text-espresso-muted font-light line-clamp-2 leading-relaxed">
                    {piece.description}
                  </p>
                </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
