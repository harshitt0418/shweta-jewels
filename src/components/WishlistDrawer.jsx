import React from 'react';
import { X, Trash2, ArrowRight, Heart } from 'lucide-react';

export const WishlistDrawer = ({ isOpen, onClose, items, onRemove, onInspect, onBookConsultation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-100 border-l border-cream-400 shadow-2xl flex flex-col text-espresso">
          
          {/* Header */}
          <div className="p-6 border-b border-cream-400 flex items-center justify-between bg-cream-200">
            <div className="flex items-center gap-2.5">
              <Heart className="w-4 h-4 text-gold-dark fill-current" />
              <h3 className="text-xs uppercase tracking-luxury font-medium text-espresso">
                Saved Pieces ({items.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-cream-400 text-espresso hover:border-espresso transition-colors bg-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full border border-cream-400 flex items-center justify-center mx-auto text-espresso-muted bg-cream-200">
                  <Heart className="w-5 h-5 text-gold-dark" />
                </div>
                <div className="text-sm font-serif text-espresso font-normal">
                  Your Wishlist is Empty
                </div>
                <p className="text-xs text-espresso-muted font-light max-w-xs mx-auto">
                  Click the heart icon on any diamond ring, necklace or earring to save pieces for your private consultation.
                </p>
              </div>
            ) : (
              items.map((piece) => (
                <div
                  key={piece.id}
                  className="p-3.5 rounded-xl bg-white border border-cream-400 hover:border-cream-500 transition-all flex gap-3.5 items-center shadow-sm"
                >
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-16 h-16 rounded-lg object-cover border border-cream-300 shrink-0"
                  />

                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-[10px] uppercase tracking-luxury text-espresso-muted font-medium">
                      {piece.category}
                    </span>
                    <h4 className="text-xs font-serif text-espresso font-medium truncate mt-0.5">
                      {piece.name}
                    </h4>
                    <div className="text-xs font-sans text-espresso mt-0.5">
                      {piece.price || 'Price upon request'}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        onInspect(piece);
                        onClose();
                      }}
                      className="p-1.5 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso text-xs transition-colors"
                      title="View piece"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRemove(piece.id)}
                      className="p-1.5 rounded-full hover:bg-red-50 text-espresso-muted hover:text-red-600 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer CTAs */}
          {items.length > 0 && (
            <div className="p-6 border-t border-cream-400 bg-cream-200 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation(items[0]);
                }}
                className="w-full py-3.5 rounded-full bg-espresso text-cream-50 text-xs tracking-luxury uppercase font-medium hover:bg-espresso-light transition-all shadow-md"
              >
                Inquire on Curated Selection
              </button>
              <p className="text-[11px] text-center text-espresso-muted">
                Our New York salon will prepare these pieces for your viewing.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
