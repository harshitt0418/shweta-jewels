import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FinalCTA = ({ onBookConsultation }) => {
  return (
    <section id="consultation-cta" className="py-24 md:py-32 bg-cream-300 border-t border-cream-400 text-espresso text-center px-6 sm:px-8 md:px-12 relative overflow-hidden">
      {/* Background warm radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/40 blur-[100px] rounded-full pointer-events-none" />

      <ScrollReveal className="relative z-10 max-w-3xl mx-auto space-y-8">
        <span className="text-xs uppercase tracking-widest_editorial text-gold-dark font-sans font-medium">
          Private Appointment
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-espresso leading-tight">
          Find the piece that feels like you.
        </h2>

        <p className="text-sm sm:text-base text-espresso-muted font-light max-w-md mx-auto leading-relaxed">
          Whether you are choosing an engagement ring or curating your personal collection, our New York advisors are here to assist with care and discretion.
        </p>

        <div className="pt-2">
          <button
            onClick={onBookConsultation}
            className="px-9 py-4 rounded-full bg-espresso text-cream-50 font-sans font-medium text-xs tracking-luxury uppercase hover:bg-espresso-light hover:shadow-[0_10px_35px_rgba(30,26,23,0.18)] transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2.5"
          >
            <Calendar className="w-3.5 h-3.5 text-gold-light" />
            Book a Personal Consultation
          </button>
        </div>

        <div className="text-xs text-espresso-subtle font-light pt-2">
          Complimentary in-person appointments at our New York 47th St salon or via private virtual viewing.
        </div>
      </ScrollReveal>
    </section>
  );
};
