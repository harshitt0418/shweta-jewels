import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { DiamondShapes } from './components/DiamondShapes';
import { FeaturedSelection } from './components/FeaturedSelection';
import { BrandStory } from './components/BrandStory';
import { PrivateConsultation } from './components/PrivateConsultation';
import { Footer } from './components/Footer';

import { StoneInspectorModal } from './components/StoneInspectorModal';
import { ConsultationModal } from './components/ConsultationModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { StoryModal } from './components/StoryModal';

import { FEATURED_DIAMONDS } from './data/diamonds';

export default function App() {
  // Theme state: default to 'light' (Luminous Luxury Warm Champagne & Alabaster)
  const [theme, setTheme] = useState('light');

  // Wishlist state preloaded with the primary gem for immediate interactive polish
  const [wishlist, setWishlist] = useState([FEATURED_DIAMONDS[0]]);
  const [inspectedStone, setInspectedStone] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationStone, setConsultationStone] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleWishlist = (stone) => {
    const stoneKey = stone.id || stone.sku;
    setWishlist((prev) => {
      const exists = prev.some((item) => (item.id || item.sku) === stoneKey);
      if (exists) {
        return prev.filter((item) => (item.id || item.sku) !== stoneKey);
      } else {
        return [...prev, stone];
      }
    });
  };

  const handleRemoveFromWishlist = (stoneKey) => {
    setWishlist((prev) => prev.filter((item) => (item.id || item.sku) !== stoneKey));
  };

  const handleOpenConsultation = (stone = null) => {
    setConsultationStone(stone);
    setIsConsultationOpen(true);
  };

  const handleInspectStone = (stone) => {
    setInspectedStone(stone);
  };

  const handleExplore = () => {
    const el = document.getElementById('shapes-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isCurrentStoneWishlisted = inspectedStone 
    ? wishlist.some((item) => (item.id || item.sku) === (inspectedStone.id || inspectedStone.sku))
    : false;

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans overflow-x-hidden ${
      isLight 
        ? 'theme-light bg-[#F9F7F2] text-[#111116] selection:bg-indigoBrand/20 selection:text-indigoBrand' 
        : 'theme-dark bg-obsidian text-champagne selection:bg-indigoBrand/40 selection:text-champagne'
    }`}>
      
      {/* Floating Header with Theme Switcher */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={wishlist.length}
        onBookConsultation={() => handleOpenConsultation()}
        onInspectShape={(shape) => handleInspectStone(shape)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Home Page Sections */}
      <main>
        {/* Section 1: Cinematic Hero */}
        <Hero
          onExplore={handleExplore}
          onBookConsultation={() => handleOpenConsultation()}
          theme={theme}
        />

        {/* Section 2: Trust Marquee Strip */}
        <TrustMarquee theme={theme} />

        {/* Section 3: Diamond Shape Experience */}
        <DiamondShapes
          onInspectShape={handleInspectStone}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
          theme={theme}
        />

        {/* Section 4: Featured Selection */}
        <FeaturedSelection
          onInspectStone={handleInspectStone}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
          onBookConsultation={(stone) => handleOpenConsultation(stone)}
          theme={theme}
        />

        {/* Section 5: Brand Story / Artisanal Credibility */}
        <BrandStory
          onOpenStory={() => setIsStoryOpen(true)}
          theme={theme}
        />

        {/* Section 6: Private Consultation Section */}
        <PrivateConsultation
          onOpenConsultation={() => handleOpenConsultation()}
          theme={theme}
        />
      </main>

      {/* Section 7: Minimal Architectural Footer */}
      <Footer
        onInspectShape={handleInspectStone}
        onBookConsultation={() => handleOpenConsultation()}
        theme={theme}
      />

      {/* Modals & Interactive Drawers */}
      <StoneInspectorModal
        stone={inspectedStone}
        isOpen={Boolean(inspectedStone)}
        onClose={() => setInspectedStone(null)}
        onBookConsultation={(stone) => handleOpenConsultation(stone)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={isCurrentStoneWishlisted}
        theme={theme}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false);
          setConsultationStone(null);
        }}
        selectedStone={consultationStone}
        theme={theme}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemove={handleRemoveFromWishlist}
        onInspect={handleInspectStone}
        onBookConsultation={(stone) => handleOpenConsultation(stone)}
        theme={theme}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onInspect={handleInspectStone}
        theme={theme}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onBookConsultation={() => handleOpenConsultation()}
        theme={theme}
      />

    </div>
  );
}
