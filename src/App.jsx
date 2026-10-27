import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WarmTrustStrip } from './components/WarmTrustStrip';
import { FeaturedCollections } from './components/FeaturedCollections';
import { SignaturePieces } from './components/SignaturePieces';
import { HeritageStory } from './components/HeritageStory';
import { BridalFeature } from './components/BridalFeature';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { PieceModal } from './components/PieceModal';
import { ConsultationModal } from './components/ConsultationModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { StoryModal } from './components/StoryModal';

import { SIGNATURE_PIECES } from './data/jewellery';

export default function App() {
  // Wishlist state initialized with 1 loved piece
  const [wishlist, setWishlist] = useState([SIGNATURE_PIECES[0]]);
  const [inspectedPiece, setInspectedPiece] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPiece, setConsultationPiece] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  // Wishlist toggle
  const handleToggleWishlist = (piece) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === piece.id);
      if (exists) {
        return prev.filter((item) => item.id !== piece.id);
      } else {
        return [...prev, piece];
      }
    });
  };

  const handleRemoveFromWishlist = (pieceId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== pieceId));
  };

  const handleOpenConsultation = (piece = null) => {
    setConsultationPiece(piece);
    setIsConsultationOpen(true);
  };

  const handleInspectPiece = (piece) => {
    setInspectedPiece(piece);
  };

  const isCurrentPieceWishlisted = inspectedPiece
    ? wishlist.some((item) => item.id === inspectedPiece.id)
    : false;

  return (
    <div className="min-h-screen bg-cream-100 text-espresso font-sans antialiased selection:bg-gold/20 selection:text-espresso overflow-x-hidden">
      
      {/* 1. Floating Lightweight Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={wishlist.length}
        onBookConsultation={() => handleOpenConsultation()}
      />

      <main>
        {/* 1. Cinematic Hero Video Section */}
        <Hero
          onExplore={() => {
            const el = document.getElementById('collections-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onDiscoverStory={() => setIsStoryOpen(true)}
        />

        {/* 2. Warm Trust Strip */}
        <WarmTrustStrip />

        {/* 3. Featured Collections (6 Editorial Tiles) */}
        <FeaturedCollections
          onSelectCollection={(collection) => {
            // Find a matching sample piece or open preview
            const matchingPiece = SIGNATURE_PIECES.find(
              (p) => p.category.toLowerCase().includes(collection.id.toLowerCase())
            ) || {
              id: collection.id,
              name: `${collection.name} Fine Ornament`,
              category: collection.name,
              price: 'Price upon request',
              description: collection.tagline,
              image: collection.image,
              details: 'Handcrafted in 18k Gold or Platinum with certified natural diamonds.'
            };
            handleInspectPiece(matchingPiece);
          }}
        />

        {/* 4. Signature Pieces (4 Most Loved Pieces) */}
        <SignaturePieces
          onInspectPiece={handleInspectPiece}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
        />

        {/* 5. Heritage / Brand Story */}
        <HeritageStory
          onOpenStory={() => setIsStoryOpen(true)}
        />

        {/* 6. Bridal Feature */}
        <BridalFeature
          onExploreBridal={() => {
            const bridalPiece = SIGNATURE_PIECES.find(p => p.id === 'forever-necklace') || SIGNATURE_PIECES[0];
            handleInspectPiece(bridalPiece);
          }}
        />

        {/* 7. Simple Final CTA */}
        <FinalCTA
          onBookConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={() => {
          const el = document.getElementById('collections-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Modals & Slide-over Drawers */}
      <PieceModal
        piece={inspectedPiece}
        isOpen={Boolean(inspectedPiece)}
        onClose={() => setInspectedPiece(null)}
        onBookConsultation={(piece) => handleOpenConsultation(piece)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={isCurrentPieceWishlisted}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false);
          setConsultationPiece(null);
        }}
        selectedPiece={consultationPiece}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemove={handleRemoveFromWishlist}
        onInspect={handleInspectPiece}
        onBookConsultation={(piece) => handleOpenConsultation(piece)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onInspect={handleInspectPiece}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onBookConsultation={() => handleOpenConsultation()}
      />

    </div>
  );
}
