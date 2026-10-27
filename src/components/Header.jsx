import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

export const Header = ({
  onOpenSearch,
  onOpenWishlist,
  wishlistCount = 0,
  onBookConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Light Translucent Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out px-6 sm:px-8 md:px-12 ${
          isScrolled
            ? 'py-3.5 bg-cream-100/95 backdrop-blur-md border-b border-cream-400/80 shadow-[0_4px_20px_rgba(30,26,23,0.04)] text-espresso'
            : 'py-6 md:py-8 bg-gradient-to-b from-black/45 via-black/15 to-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Navigation: Quiet & Editorial */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-xs uppercase tracking-luxury font-medium transition-colors relative group py-1 ${
                isScrolled ? 'text-espresso hover:text-espresso-muted' : 'text-white/90 hover:text-white'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-espresso' : 'bg-white'
              }`} />
            </button>

            <button
              onClick={() => scrollTo('collections-section')}
              className={`text-xs uppercase tracking-luxury font-medium transition-colors relative group py-1 ${
                isScrolled ? 'text-espresso hover:text-espresso-muted' : 'text-white/90 hover:text-white'
              }`}
            >
              Collections
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-espresso' : 'bg-white'
              }`} />
            </button>

            <button
              onClick={() => scrollTo('bridal-section')}
              className={`text-xs uppercase tracking-luxury font-medium transition-colors relative group py-1 ${
                isScrolled ? 'text-espresso hover:text-espresso-muted' : 'text-white/90 hover:text-white'
              }`}
            >
              Bridal
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-espresso' : 'bg-white'
              }`} />
            </button>

            <button
              onClick={() => scrollTo('heritage-section')}
              className={`text-xs uppercase tracking-luxury font-medium transition-colors relative group py-1 ${
                isScrolled ? 'text-espresso hover:text-espresso-muted' : 'text-white/90 hover:text-white'
              }`}
            >
              About
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-espresso' : 'bg-white'
              }`} />
            </button>

            <button
              onClick={() => scrollTo('consultation-cta')}
              className={`text-xs uppercase tracking-luxury font-medium transition-colors relative group py-1 ${
                isScrolled ? 'text-espresso hover:text-espresso-muted' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-espresso' : 'bg-white'
              }`} />
            </button>
          </nav>

          {/* Center: Official Shweta Diam Inc. Brand Logo */}
          <div className="flex items-center justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center transition-transform duration-300 hover:scale-[1.01]"
              title="Shweta Diam Inc. — Fine Diamond Jewellery"
            >
              <img
                src={isScrolled ? '/brand/shweta-logo-rich@2x.png' : '/brand/shweta-logo-clean@2x.png'}
                alt="Shweta Diam Inc."
                className={`object-contain transition-all duration-400 ${
                  isScrolled 
                    ? 'h-9 md:h-11 drop-shadow-[0_1px_4px_rgba(77,54,168,0.15)]' 
                    : 'h-10 md:h-13 filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] brightness-110'
                }`}
              />
            </a>
          </div>

          {/* Right Action Icons: Search, Wishlist, Bag, Consultation */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenSearch}
              className={`p-1.5 transition-colors relative ${
                isScrolled ? 'text-espresso hover:text-gold' : 'text-white/90 hover:text-white'
              }`}
              title="Search jewellery"
            >
              <Search className="w-4 h-4 md:w-4.5 md:h-4.5" />
            </button>

            <button
              onClick={onOpenWishlist}
              className={`p-1.5 transition-colors relative ${
                isScrolled ? 'text-espresso hover:text-gold' : 'text-white/90 hover:text-white'
              }`}
              title="View Wishlist"
            >
              <Heart className="w-4 h-4 md:w-4.5 md:h-4.5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onBookConsultation()}
              className={`hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] uppercase tracking-luxury font-medium transition-all duration-300 ${
                isScrolled
                  ? 'border-espresso text-espresso hover:bg-espresso hover:text-white'
                  : 'border-white/40 text-white hover:bg-white hover:text-espresso'
              }`}
            >
              Consultation
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 md:hidden transition-colors ${
                isScrolled ? 'text-espresso' : 'text-white'
              }`}
              title="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-cream-100 text-espresso flex flex-col p-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-6 border-b border-cream-400">
            <img
              src="/brand/shweta-logo-rich@2x.png"
              alt="Shweta Diam Inc."
              className="h-9 object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full border border-cream-400 text-espresso"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-10 flex flex-col justify-center text-center space-y-6">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-serif text-espresso hover:text-gold transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('collections-section')}
              className="text-2xl font-serif text-espresso hover:text-gold transition-colors"
            >
              Collections
            </button>
            <button
              onClick={() => scrollTo('signature-section')}
              className="text-2xl font-serif text-espresso hover:text-gold transition-colors"
            >
              Signature Pieces
            </button>
            <button
              onClick={() => scrollTo('bridal-section')}
              className="text-2xl font-serif text-espresso hover:text-gold transition-colors"
            >
              Bridal
            </button>
            <button
              onClick={() => scrollTo('heritage-section')}
              className="text-2xl font-serif text-espresso hover:text-gold transition-colors"
            >
              The House of Shweta
            </button>
            <button
              onClick={() => scrollTo('consultation-cta')}
              className="text-2xl font-serif text-espresso hover:text-gold transition-colors"
            >
              Contact & Salon
            </button>

            <div className="pt-8 border-t border-cream-400 space-y-4 max-w-xs mx-auto w-full">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full py-3.5 rounded-full bg-espresso text-cream-50 text-xs tracking-luxury uppercase font-medium hover:bg-espresso-light transition-all shadow-md"
              >
                Book a Consultation
              </button>
              
              <div className="text-xs text-espresso-muted space-y-1">
                <div>20 W 47th St, Suite #501, New York, NY</div>
                <div>+1 201-241-5503 • shwetadiam@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
