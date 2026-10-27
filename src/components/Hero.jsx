import React, { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = ({ onExplore, onDiscoverStory }) => {
  const videoRef = useRef(null);

  const scrollToCollections = () => {
    const el = document.getElementById('collections-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cream-100 select-none">
      
      {/* Background Looping Cinematic Jewellery Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/ornaments/hero-poster.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02]"
        >
          <source src="/hero-jewellery.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load or on data saver */}
          <img
            src="/ornaments/hero-poster.jpg"
            alt="Shweta Diam Inc. Fine Diamond Jewellery"
            className="w-full h-full object-cover object-center"
          />
        </video>

        {/* Gentle Warm Beige / Espresso Dark-Brown Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/35 to-espresso/45" />
        <div className="absolute inset-0 bg-[#362C25]/25 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center pt-28 pb-20 flex flex-col items-center text-white">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="h-px w-6 bg-white/60" />
          <span className="text-[11px] sm:text-xs uppercase tracking-widest_editorial font-sans font-medium text-white/90">
            SHWETA DIAM INC.
          </span>
          <span className="h-px w-6 bg-white/60" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif font-light leading-[1.08] tracking-tight max-w-3xl text-cream-50 drop-shadow-[0_2px_15px_rgba(0,0,0,0.35)]">
          Jewellery made to be remembered.
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-cream-200/90 font-sans font-light tracking-wide max-w-xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
          Timeless diamond ornaments, thoughtfully chosen for your most meaningful moments.
        </p>

        {/* CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={scrollToCollections}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-cream-50 text-espresso font-sans font-medium text-xs tracking-luxury uppercase hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Explore Jewellery
            <ArrowRight className="w-3.5 h-3.5 text-espresso/70" />
          </button>

          <button
            onClick={onDiscoverStory}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/50 text-white font-sans font-normal text-xs tracking-luxury uppercase hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
          >
            Discover Our Story
          </button>
        </div>

      </div>

      {/* Quiet Scroll Indicator */}
      <div 
        onClick={scrollToCollections}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-luxury font-sans font-medium">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

    </section>
  );
};
