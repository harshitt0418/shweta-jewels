import React from 'react';
import { X, Heart, Calendar, Sparkles } from 'lucide-react';

export const PieceModal = ({ piece, isOpen, onClose, onBookConsultation, onToggleWishlist, isWishlisted }) => {
  if (!isOpen || !piece) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-cream-100 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col border border-cream-400">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-400 bg-cream-200">
          <span className="text-xs uppercase tracking-luxury text-gold-dark font-sans font-medium">
            Fine Diamond Ornament
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(piece)}
              className={`p-2 rounded-full border transition-colors ${
                isWishlisted
                  ? 'bg-espresso text-cream-50 border-espresso'
                  : 'bg-white border-cream-400 text-espresso hover:border-espresso'
              }`}
              title="Save to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-white' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-cream-400 text-espresso hover:border-espresso transition-colors bg-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column */}
            <div className="md:col-span-6">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-cream-200 border border-cream-400/90 shadow-sm">
                <img
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.98]"
                />
              </div>
            </div>

            {/* Information Column */}
            <div className="md:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-[11px] uppercase tracking-luxury text-espresso-muted font-sans font-medium">
                  {piece.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-espresso font-normal mt-1">
                  {piece.name}
                </h3>
                {piece.price && (
                  <div className="text-xl font-sans font-medium text-espresso mt-2">
                    {piece.price}
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-espresso-muted font-light leading-relaxed">
                {piece.description || 'Thoughtfully selected natural diamonds crafted in precious metal, designed for everyday sophistication and enduring memories.'}
              </p>

              {piece.details && (
                <div className="p-4 rounded-xl bg-cream-200 border border-cream-400 text-xs text-espresso space-y-1.5 font-light">
                  <div className="text-[10px] uppercase tracking-luxury text-gold-dark font-medium">
                    Specifications
                  </div>
                  <div>{piece.details}</div>
                </div>
              )}

              <div className="pt-2 space-y-2.5">
                <button
                  onClick={() => {
                    onClose();
                    onBookConsultation(piece);
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-espresso text-cream-50 font-sans font-medium text-xs tracking-luxury uppercase hover:bg-espresso-light transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-light" />
                  Inquire & Book Viewing
                </button>
                <p className="text-[11px] text-center text-espresso-subtle">
                  Complimentary New York salon appointment or virtual consultation.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
