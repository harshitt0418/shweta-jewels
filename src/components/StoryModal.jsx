import React from 'react';
import { X, Sparkles, Gem, Heart, Shield } from 'lucide-react';

export const StoryModal = ({ isOpen, onClose, onBookConsultation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="fixed inset-0 bg-espresso/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-cream-100 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-cream-400 text-espresso">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-400 bg-cream-200">
          <span className="text-xs uppercase tracking-luxury font-medium text-espresso">
            The House of Shweta — Story
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-cream-400 text-espresso hover:border-espresso transition-colors bg-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1 text-left">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest_editorial text-gold-dark font-medium">
              A Heritage of Brilliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-espresso leading-snug">
              Jewellery made to celebrate love, milestones & memories.
            </h2>
            <p className="text-sm text-espresso-muted font-light leading-relaxed font-sans">
              Based in New York City’s Diamond District at 20 West 47th Street, Shweta Diam Inc. was created with a quiet and personal philosophy: fine diamond jewellery should celebrate life’s most meaningful moments without pretension or complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="p-4 rounded-xl bg-white border border-cream-400 space-y-1.5">
              <Gem className="w-4 h-4 text-gold-dark" />
              <h4 className="text-xs uppercase tracking-luxury font-medium text-espresso">
                Selected Diamonds
              </h4>
              <p className="text-[11px] text-espresso-muted font-light leading-relaxed">
                Hand-chosen natural stones assessed for genuine fire and crystal life.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-cream-400 space-y-1.5">
              <Heart className="w-4 h-4 text-gold-dark" />
              <h4 className="text-xs uppercase tracking-luxury font-medium text-espresso">
                Personal Attention
              </h4>
              <p className="text-[11px] text-espresso-muted font-light leading-relaxed">
                One-on-one guidance to find or customize a piece that feels unmistakably yours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-cream-400 space-y-1.5">
              <Shield className="w-4 h-4 text-gold-dark" />
              <h4 className="text-xs uppercase tracking-luxury font-medium text-espresso">
                Ethical Sourcing
              </h4>
              <p className="text-[11px] text-espresso-muted font-light leading-relaxed">
                Strict adherence to the Kimberley Process with 100% conflict-free integrity.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-cream-200 border border-cream-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-serif text-espresso font-medium text-sm">
                Visit our New York Salon
              </div>
              <div className="text-[11px] text-espresso-muted mt-0.5 font-light">
                20 W 47th Street, Suite #501 • In-person or virtual appointments
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="py-2.5 px-6 rounded-full bg-espresso text-cream-50 text-xs tracking-luxury uppercase font-medium hover:bg-espresso-light transition-all shrink-0"
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
