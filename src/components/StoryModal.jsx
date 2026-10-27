import React from 'react';
import { X, Gem, Globe, Shield } from 'lucide-react';

export const StoryModal = ({ isOpen, onClose, onBookConsultation, theme = 'light' }) => {
  if (!isOpen) return null;
  const isLight = theme === 'light';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className={`relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border ${
        isLight
          ? 'bg-white border-[#E2DAC9] text-[#111116]'
          : 'bg-obsidian-card border-champagne/15 text-champagne'
      }`}>
        {/* Top bar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isLight ? 'bg-[#FAF8F5] border-[#EAE3D4]' : 'bg-obsidian-surface/60 border-champagne/10'
        }`}>
          <span className={`text-xs uppercase tracking-widest_editorial font-sans font-semibold ${
            isLight ? 'text-[#111116]' : 'text-champagne'
          }`}>
            The House of Shweta — Brand Dossier
          </span>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-full border transition-colors ${
              isLight ? 'border-[#DED6C6] text-[#2C2C32] hover:border-[#111116]' : 'border-champagne/15 text-champagne/70 hover:text-champagne'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8 flex-1">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest_editorial text-indigoBrand font-bold">
              Heritage & Ethos
            </span>
            <h2 className={`text-2xl md:text-4xl font-serif font-normal leading-tight ${
              isLight ? 'text-[#111116]' : 'text-champagne'
            }`}>
              Chosen with precision.<br />
              Remembered forever.
            </h2>
            <p className={`text-sm leading-relaxed font-sans ${
              isLight ? 'text-[#5C564C]' : 'text-champagne-muted'
            }`}>
              Headquartered in New York City’s legendary Diamond District at 20 West 47th Street, Shweta Diam Inc. operates as a premier diamond manufacturer and international trader. We bridge direct rough diamond sourcing, master precision cutting, and intimate private salon advisement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className={`p-4 rounded-xl border space-y-2 ${
              isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
            }`}>
              <Gem className="w-5 h-5 text-indigoBrand" />
              <h4 className={`text-xs uppercase tracking-wider font-semibold ${
                isLight ? 'text-[#111116]' : 'text-champagne'
              }`}>
                Direct Manufacturing
              </h4>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                By eliminating intermediate dealer markups, we deliver uncompromised quality directly from the cutting wheel to your private collection.
              </p>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 ${
              isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
            }`}>
              <Shield className="w-5 h-5 text-indigoBrand" />
              <h4 className={`text-xs uppercase tracking-wider font-semibold ${
                isLight ? 'text-[#111116]' : 'text-champagne'
              }`}>
                Optical Precision
              </h4>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                Every diamond is evaluated not just by certificate grades, but through real-world light performance, facet symmetry, and sparkle dispersion.
              </p>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 ${
              isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
            }`}>
              <Globe className="w-5 h-5 text-indigoBrand" />
              <h4 className={`text-xs uppercase tracking-wider font-semibold ${
                isLight ? 'text-[#111116]' : 'text-champagne'
              }`}>
                100% Ethical Origin
              </h4>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                Strict adherence to the Kimberley Process and responsible sourcing guarantees every diamond is conflict-free and traceable.
              </p>
            </div>
          </div>

          <div className={`p-5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isLight
              ? 'bg-gradient-to-r from-[#FAF8F5] to-indigoBrand/5 border-[#E2DAC9]'
              : 'bg-gradient-to-r from-obsidian-surface to-indigoBrand/10 border-champagne/15'
          }`}>
            <div>
              <div className={`text-xs font-serif font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                Experience our New York Vault
              </div>
              <div className={`text-[11px] mt-0.5 ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                Schedule a confidential in-person viewing or interactive virtual consultation.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className={`py-2.5 px-6 rounded-full text-xs tracking-widest_editorial uppercase font-medium transition-all shrink-0 ${
                isLight
                  ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-md'
                  : 'bg-champagne text-obsidian hover:bg-champagne-light'
              }`}
            >
              Book Private Salon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
