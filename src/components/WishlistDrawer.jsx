import React from 'react';
import { X, Trash2, ArrowUpRight, Sparkles, Heart } from 'lucide-react';

export const WishlistDrawer = ({ isOpen, onClose, items, onRemove, onInspect, onBookConsultation, theme = 'light' }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className={`w-screen max-w-md shadow-2xl flex flex-col border-l ${
          isLight
            ? 'bg-white border-[#E2DAC9] text-[#111116]'
            : 'bg-obsidian-card border-champagne/15 text-champagne'
        }`}>
          
          {/* Header */}
          <div className={`p-6 border-b flex items-center justify-between ${
            isLight ? 'bg-[#FAF8F5] border-[#EAE3D4]' : 'bg-obsidian-surface/60 border-champagne/10'
          }`}>
            <div className="flex items-center gap-2.5">
              <Heart className="w-4 h-4 text-indigoBrand fill-current" />
              <h3 className={`text-sm uppercase tracking-widest_editorial font-sans font-semibold ${
                isLight ? 'text-[#111116]' : 'text-champagne'
              }`}>
                Vault Wishlist ({items.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-full border transition-colors ${
                isLight ? 'border-[#DED6C6] text-[#2C2C32] hover:border-[#111116]' : 'border-champagne/15 text-champagne/70 hover:text-champagne'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto ${
                  isLight ? 'border-[#DED6C6] text-[#7D776C]' : 'border-champagne/20 text-champagne-muted'
                }`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className={`text-sm font-serif font-semibold ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                  Your Private Vault is Empty
                </div>
                <p className={`text-xs max-w-xs mx-auto ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                  Click the heart icon on any diamond shape or featured stone to curate your private viewing selection.
                </p>
              </div>
            ) : (
              items.map((stone) => (
                <div
                  key={stone.id || stone.sku}
                  className={`p-3.5 rounded-xl border flex gap-3.5 items-center group transition-all ${
                    isLight
                      ? 'bg-[#FAF8F5] border-[#E2DAC9] hover:border-indigoBrand/50 shadow-sm'
                      : 'bg-obsidian-surface border-champagne/10 hover:border-champagne/25'
                  }`}
                >
                  <img
                    src={stone.image}
                    alt={stone.title || stone.name}
                    className={`w-16 h-16 rounded-lg object-cover shrink-0 border ${
                      isLight ? 'border-[#DED6C6]' : 'border-champagne/10'
                    }`}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-indigoBrand font-bold">
                      {stone.shape || stone.shortName}
                    </div>
                    <h4 className={`text-xs font-serif font-medium truncate ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                      {stone.title || stone.name}
                    </h4>
                    <div className={`text-[11px] font-mono mt-0.5 ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                      {stone.price || stone.facets || 'Price on request'}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        onInspect(stone);
                        onClose();
                      }}
                      className={`p-1.5 rounded-full text-xs transition-colors ${
                        isLight ? 'bg-black/5 hover:bg-black/10 text-[#111116]' : 'bg-champagne/10 hover:bg-champagne/20 text-champagne'
                      }`}
                      title="Inspect Stone"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRemove(stone.id || stone.sku)}
                      className={`p-1.5 rounded-full hover:bg-red-500/10 transition-colors ${
                        isLight ? 'text-[#8E877B] hover:text-red-500' : 'text-champagne-muted hover:text-red-400'
                      }`}
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
            <div className={`p-6 border-t space-y-3 ${
              isLight ? 'bg-[#FAF8F5] border-[#EAE3D4]' : 'bg-obsidian-surface/60 border-champagne/10'
            }`}>
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation(items[0]);
                }}
                className={`w-full py-3.5 rounded-full text-xs tracking-widest_editorial uppercase font-medium transition-all flex items-center justify-center gap-2 ${
                  isLight
                    ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-md'
                    : 'bg-champagne text-obsidian hover:bg-champagne-light'
                }`}
              >
                Inquire on All {items.length} Stones
              </button>
              <p className={`text-[11px] text-center ${isLight ? 'text-[#7D776C]' : 'text-champagne-muted'}`}>
                Our New York gemologist will prepare specs for your curated selection.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
