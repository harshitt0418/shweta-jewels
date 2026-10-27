import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Compass, Eye, Gem } from 'lucide-react';
import { DiamondVectorIcon } from './DiamondVectors';

const HERO_STONES = [
  {
    id: 'oval',
    name: 'Oval Cut',
    title: '2.01 CT Oval Diamond',
    poetic: 'Modern romance',
    carat: '2.01 CT',
    color: 'D Colorless',
    clarity: 'VVS1',
    ratio: '1.38 : 1',
    image: '/assets/featured-oval.jpg',
    facets: '58 Facets',
    lightPerformance: '99.8%'
  },
  {
    id: 'emerald',
    name: 'Emerald Cut',
    title: '1.50 CT Emerald Diamond',
    poetic: 'Quiet confidence',
    carat: '1.50 CT',
    color: 'E Colorless',
    clarity: 'VS1',
    ratio: '1.42 : 1',
    image: '/assets/featured-emerald.jpg',
    facets: 'Step Cut (57 Facets)',
    lightPerformance: '98.9%'
  },
  {
    id: 'round',
    name: 'Round Cut',
    title: '1.20 CT Round Brilliant',
    poetic: 'Eternal brilliance',
    carat: '1.20 CT',
    color: 'F Colorless',
    clarity: 'VVS2',
    ratio: '1.00 : 1',
    image: '/assets/featured-round.jpg',
    facets: '57 Facets (Hearts & Arrows)',
    lightPerformance: '100%'
  },
  {
    id: 'pear',
    name: 'Pear Shape',
    title: '1.80 CT Pear Diamond',
    poetic: 'A rare point of view',
    carat: '1.80 CT',
    color: 'D Colorless',
    clarity: 'VVS2',
    ratio: '1.55 : 1',
    image: '/assets/diamond-pear.jpg',
    facets: '58 Facets (Teardrop)',
    lightPerformance: '99.4%'
  }
];

export const Hero = ({ onExplore, onBookConsultation, theme = 'light' }) => {
  const isLight = theme === 'light';
  
  // Interactive selected cut in Hero
  const [activeStoneIndex, setActiveStoneIndex] = useState(0);
  const activeStone = HERO_STONES[activeStoneIndex];

  // 3D Tilt & Light Reflection mouse state
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const heroRef = useRef(null);
  const stageRef = useRef(null);

  // Parallax Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Perspective Tilt on Mouse Move
  const handleStageMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates -1 to 1
    const xNorm = (x / rect.width) * 2 - 1;
    const yNorm = (y / rect.height) * 2 - 1;

    setTilt({
      rotateX: -yNorm * 10, // Max 10 deg tilt
      rotateY: xNorm * 12
    });

    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleStageMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  // Parallax calculations based on scroll
  const parallaxTextY = Math.min(scrollY * 0.22, 140);
  const parallaxTextOpacity = Math.max(1 - scrollY / 650, 0);
  const parallaxStageY = Math.min(scrollY * 0.14, 100);
  const parallaxStageScale = Math.max(1 - (scrollY * 0.0003), 0.94);

  return (
    <section 
      ref={heroRef}
      id="hero-section"
      className={`relative min-h-[105vh] w-full flex items-center justify-center overflow-hidden select-none transition-colors duration-700 pt-28 pb-20 ${
        isLight 
          ? 'bg-[#F9F7F2] text-[#111116] noise-overlay-light' 
          : 'bg-[#0A0A0C] text-champagne noise-overlay-dark'
      }`}
    >
      {/* Dynamic Ambient Background Illumination */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Ambient Lights */}
        <div 
          className={`absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full blur-[160px] transition-all duration-1000 ${
            isLight ? 'bg-indigoBrand/6 opacity-80' : 'bg-indigoBrand/18 opacity-100'
          }`}
          style={{
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`
          }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] transition-all duration-1000 ${
            isLight ? 'bg-[#E5DEC9]/50' : 'bg-champagne/5'
          }`}
        />

        {/* Studio Ceiling Beam */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${
          isLight ? 'from-white via-transparent to-transparent' : 'from-indigoBrand/10 via-transparent to-transparent'
        }`} />
      </div>

      {/* Main Hero Container: Split-Screen Editorial Architecture */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT TYPOGRAPHIC COLUMN (7 cols) with Parallax Scroll */}
          <div 
            className="lg:col-span-7 space-y-8 text-left"
            style={{
              transform: `translateY(${parallaxTextY}px)`,
              opacity: parallaxTextOpacity,
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            {/* Illuminated Eyebrow Pill */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] shadow-sm ${
              isLight
                ? 'border-[#E2D8C6] bg-white/80 text-[#2C2C32]'
                : 'border-champagne/15 bg-obsidian-surface/60 text-champagne-muted'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-indigoBrand animate-spin-slow" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest_editorial font-sans font-semibold">
                Direct NYC 47th St Vault • Master Lapidary
              </span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-3">
              <h1 className={`text-4xl sm:text-6xl md:text-7xl xl:text-[82px] font-serif font-light leading-[1.05] tracking-tight ${
                isLight ? 'text-[#111116]' : 'text-champagne'
              }`}>
                Not every diamond <br />
                <span className={`italic font-normal relative inline-block ${
                  isLight
                    ? 'bg-gradient-to-r from-[#111116] via-[#3B2882] to-[#111116] bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-champagne-light via-champagne to-champagne-muted bg-clip-text text-transparent'
                }`}>
                  becomes a legacy.
                  {/* Subtle underline hairline */}
                  <span className={`absolute -bottom-1 left-0 w-full h-px ${
                    isLight ? 'bg-indigoBrand/20' : 'bg-champagne/20'
                  }`} />
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className={`text-base sm:text-lg font-sans font-light tracking-wide max-w-xl leading-relaxed ${
              isLight ? 'text-[#5C564C]' : 'text-champagne-muted'
            }`}>
              Exceptional diamonds, selected for the moments that define you. Precision-cut and certified in our private Manhattan salon.
            </p>

            {/* Action Buttons with Magnetic Hover & Fluid Transitions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExplore}
                className={`group relative px-8 py-4 rounded-full font-sans font-medium text-xs tracking-widest_editorial uppercase transition-all duration-500 overflow-hidden flex items-center justify-center gap-2 transform hover:-translate-y-1 ${
                  isLight
                    ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-[0_12px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_18px_45px_rgba(77,54,168,0.25)]'
                    : 'bg-champagne text-obsidian hover:bg-champagne-light hover:shadow-[0_0_35px_rgba(244,240,232,0.3)]'
                }`}
              >
                {/* Button light sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10">Explore the Collection</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookConsultation}
                className={`px-8 py-4 rounded-full border font-sans font-medium text-xs tracking-widest_editorial uppercase transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 transform hover:-translate-y-0.5 ${
                  isLight
                    ? 'border-[#2C2C32]/30 text-[#111116] hover:border-[#111116] hover:bg-black/5 shadow-sm'
                    : 'border-champagne/30 text-champagne hover:border-champagne hover:bg-champagne/10'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-indigoBrand" />
                Book a Private Viewing
              </button>
            </div>

            {/* Interactive Live Cut Selector Strip */}
            <div className={`pt-6 border-t ${isLight ? 'border-[#EAE3D4]' : 'border-champagne/10'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] uppercase tracking-widest font-semibold ${
                  isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                }`}>
                  Interactive Specimen Showcase:
                </span>
                <span className={`text-[10px] font-mono ${isLight ? 'text-indigoBrand' : 'text-indigoBrand-light'}`}>
                  {activeStone.carat} • {activeStone.facets}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {HERO_STONES.map((stone, idx) => {
                  const isActive = idx === activeStoneIndex;
                  return (
                    <button
                      key={stone.id}
                      onClick={() => setActiveStoneIndex(idx)}
                      className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-300 flex items-center gap-1.5 border ${
                        isActive
                          ? isLight
                            ? 'bg-[#111116] text-[#FAF8F5] border-[#111116] shadow-md scale-105'
                            : 'bg-champagne text-obsidian border-champagne shadow-lg scale-105'
                          : isLight
                            ? 'bg-white/80 border-[#E2DAC9] text-[#4A463F] hover:border-[#111116] hover:text-[#111116]'
                            : 'bg-obsidian-surface border-champagne/15 text-champagne-muted hover:border-champagne hover:text-champagne'
                      }`}
                    >
                      <DiamondVectorIcon 
                        shape={stone.id} 
                        className={`w-3.5 h-3.5 ${isActive ? (isLight ? 'text-white' : 'text-obsidian') : 'text-indigoBrand'}`} 
                        strokeWidth={1.4}
                      />
                      <span className="font-serif font-medium">{stone.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D INTERACTIVE DIAMOND SHOWCASE STAGE (5 cols) */}
          <div 
            className="lg:col-span-5 relative flex items-center justify-center"
            style={{
              transform: `translateY(${parallaxStageY}px) scale(${parallaxStageScale})`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* The 3D Stage Container with Perspective */}
            <div 
              ref={stageRef}
              onMouseMove={handleStageMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleStageMouseLeave}
              className="relative w-full max-w-[430px] aspect-[4/5] rounded-3xl p-4 transition-all duration-300 ease-out cursor-pointer [perspective:1000px] group"
            >
              {/* Card Interior with 3D Rotate */}
              <div 
                className={`w-full h-full rounded-2xl overflow-hidden relative shadow-2xl transition-transform duration-200 ease-out border ${
                  isLight
                    ? 'bg-white border-[#E2DAC9] shadow-[0_25px_60px_rgba(0,0,0,0.1)] group-hover:border-indigoBrand/40 group-hover:shadow-[0_30px_70px_rgba(77,54,168,0.2)]'
                    : 'bg-obsidian-card border-champagne/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group-hover:border-champagne/40'
                }`}
                style={{
                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Diamond Specimen Macro Image */}
                <img
                  src={activeStone.image}
                  alt={activeStone.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108 ${
                    isLight ? 'filter brightness-[0.93] contrast-105' : 'filter brightness-[0.8] contrast-110'
                  }`}
                />

                {/* Dynamic Mouse Spotlight Beam Follower */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle 280px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.35), transparent 70%)`
                  }}
                />

                {/* Prismatic Diamond Glint Sparkles */}
                <div className="absolute top-1/4 left-1/3 w-8 h-8 pointer-events-none glint-sparkle">
                  <Sparkles className="w-8 h-8 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]" />
                </div>
                <div className="absolute top-1/2 right-1/4 w-6 h-6 pointer-events-none glint-sparkle [animation-delay:1.5s]">
                  <Sparkles className="w-6 h-6 text-indigoBrand-light drop-shadow-[0_0_10px_rgba(114,86,212,0.9)]" />
                </div>

                {/* Gradient Vignette */}
                <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${
                  isLight 
                    ? 'from-black/75 via-transparent to-black/20' 
                    : 'from-obsidian via-transparent to-obsidian/40'
                }`} />

                {/* Top Badge: Floating Gemological Dossier Header */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-sans uppercase tracking-widest font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigoBrand-light" />
                    Archive Specimen 0{activeStoneIndex + 1}
                  </div>

                  <div className="p-2 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white">
                    <DiamondVectorIcon shape={activeStone.id} className="w-4 h-4" strokeWidth={1.4} />
                  </div>
                </div>

                {/* Bottom Dossier Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 backdrop-blur-xl border border-white/20 text-white z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-indigoBrand-light font-bold">
                      {activeStone.name} • {activeStone.carat}
                    </span>
                    <span className="text-[10px] font-mono text-white/80">
                      Fire: {activeStone.lightPerformance}
                    </span>
                  </div>

                  <div className="text-sm font-serif font-normal text-white">
                    {activeStone.title}
                  </div>

                  <div className="grid grid-cols-3 gap-1 pt-1 border-t border-white/10 text-center text-[10px] font-mono text-white/70">
                    <div>
                      <span className="block text-[8px] uppercase text-white/50">Color</span>
                      {activeStone.color.split(' ')[0]}
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase text-white/50">Clarity</span>
                      {activeStone.clarity}
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase text-white/50">Ratio</span>
                      {activeStone.ratio}
                    </div>
                  </div>
                </div>

                {/* Floating "Hover to tilt" Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[10px] font-sans tracking-widest uppercase text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-indigoBrand-light" />
                    3D Light Refraction
                  </span>
                </div>
              </div>

              {/* Decorative Geometric Wireframe Behind Card */}
              <div className={`absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 -z-10 pointer-events-none transition-all duration-500 ${
                isLight 
                  ? 'border-indigoBrand/25 group-hover:translate-x-1 group-hover:translate-y-1' 
                  : 'border-champagne/15 group-hover:translate-x-1 group-hover:translate-y-1'
              }`} />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Rotating Shape Indicator & Brand Text (Bottom Right) */}
      <div className="hidden xl:flex absolute right-12 bottom-12 z-20 flex-col items-center gap-5 pointer-events-none">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className={`absolute inset-0 rounded-full border animate-spin-slow ${
            isLight ? 'border-[#D4CBBA] border-t-indigoBrand' : 'border-champagne/20 border-t-indigoBrand-light'
          }`} />
          <div className={`w-5 h-5 ${isLight ? 'text-indigoBrand' : 'text-champagne-muted'}`}>
            <DiamondVectorIcon shape={activeStone.id} className="w-5 h-5" strokeWidth={1.4} />
          </div>
        </div>

        <div className={`text-[10px] tracking-ultra uppercase [writing-mode:vertical-lr] font-sans font-medium ${
          isLight ? 'text-[#8A8478]' : 'text-champagne-muted/70'
        }`}>
          SHWETA DIAM INC. — FINE DIAMONDS
        </div>
      </div>

      {/* Tactile Magnetic "Scroll to Reveal" Indicator Pill (Bottom Center) */}
      <div 
        onClick={onExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className={`text-[10px] uppercase tracking-widest_editorial font-sans font-medium transition-colors ${
          isLight ? 'text-[#7D776C] group-hover:text-[#111116]' : 'text-champagne-muted group-hover:text-champagne'
        }`}>
          Scroll to reveal
        </span>
        <div className={`w-5 h-9 rounded-full border-2 p-1 flex justify-center transition-all group-hover:scale-110 ${
          isLight ? 'border-[#111116]/40 group-hover:border-[#111116]' : 'border-champagne/40 group-hover:border-champagne'
        }`}>
          <div className={`w-1 h-2 rounded-full animate-bounce ${
            isLight ? 'bg-indigoBrand' : 'bg-champagne'
          }`} />
        </div>
      </div>

    </section>
  );
};
