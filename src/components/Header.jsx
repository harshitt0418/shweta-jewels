import React, { useState, useEffect } from 'react';
import { Search, Heart, Menu, X, ChevronDown, Sparkles, Sun, Moon } from 'lucide-react';
import { ALL_SHAPES_LIST, DIAMOND_SHAPES } from '../data/diamonds';
import { DiamondVectorIcon } from './DiamondVectors';

export const Header = ({
  onOpenSearch,
  onOpenWishlist,
  wishlistCount = 0,
  onBookConsultation,
  onInspectShape,
  theme = 'light',
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  const isLight = theme === 'light';

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

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    setIsCollectionsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Header Wrapper */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out px-4 sm:px-6 md:px-10 ${
          isScrolled
            ? isLight
              ? 'py-3 bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#E8E2D5] shadow-[0_4px_25px_rgba(0,0,0,0.05)]'
              : 'py-3 bg-obsidian/90 backdrop-blur-xl border-b border-champagne/10 shadow-2xl'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-xs uppercase tracking-widest_editorial transition-colors relative group py-1 ${
                isLight 
                  ? 'text-[#2C2C32] hover:text-[#111116] font-medium' 
                  : 'text-champagne/80 hover:text-champagne'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                isLight ? 'bg-[#111116]' : 'bg-champagne-dark'
              }`} />
            </button>

            {/* Collections with Dropdown */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button
                onClick={() => scrollToSection('shapes-section')}
                className={`text-xs uppercase tracking-widest_editorial transition-colors flex items-center gap-1 group ${
                  isLight 
                    ? 'text-[#2C2C32] hover:text-[#111116] font-medium' 
                    : 'text-champagne/80 hover:text-champagne'
                }`}
              >
                Collections
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isCollectionsOpen ? 'rotate-180' : ''
                } ${isLight ? 'text-[#6A6660]' : 'text-champagne/60'}`} />
                <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  isLight ? 'bg-[#111116]' : 'bg-champagne-dark'
                }`} />
              </button>

              {/* Editorial Mega Dropdown */}
              {isCollectionsOpen && (
                <div className={`absolute top-full left-0 mt-3 w-80 p-5 rounded-2xl shadow-2xl space-y-4 animate-in fade-in duration-200 backdrop-blur-xl border ${
                  isLight
                    ? 'bg-white/95 border-[#E5DEC9]'
                    : 'bg-obsidian-card/95 border-champagne/15'
                }`}>
                  <div className={`flex items-center justify-between pb-3 border-b ${
                    isLight ? 'border-[#EDE7D9]' : 'border-champagne/10'
                  }`}>
                    <span className="text-[10px] uppercase tracking-widest_editorial text-indigoBrand font-semibold">
                      Diamond Cut Shapes
                    </span>
                    <span className={`text-[10px] font-mono ${
                      isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                    }`}>
                      11 Silhouettes
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {ALL_SHAPES_LIST.map((shape) => (
                      <button
                        key={shape}
                        onClick={() => {
                          setIsCollectionsOpen(false);
                          const found = DIAMOND_SHAPES.find(s => s.shortName.toLowerCase() === shape.toLowerCase());
                          if (found) {
                            onInspectShape(found);
                          } else {
                            scrollToSection('shapes-section');
                          }
                        }}
                        className={`flex items-center gap-2 p-2 rounded-lg text-left transition-colors group ${
                          isLight
                            ? 'hover:bg-[#F7F4EE] text-[#333338] hover:text-[#111116]'
                            : 'hover:bg-obsidian-surface text-champagne/80 hover:text-champagne'
                        }`}
                      >
                        <DiamondVectorIcon 
                          shape={shape} 
                          className={`w-3.5 h-3.5 transition-colors ${
                            isLight ? 'text-[#8E877B] group-hover:text-indigoBrand' : 'text-champagne-muted group-hover:text-indigoBrand-light'
                          }`} 
                        />
                        <span className="font-serif font-medium">{shape}</span>
                      </button>
                    ))}
                  </div>

                  <div className={`pt-2 border-t ${isLight ? 'border-[#EDE7D9]' : 'border-champagne/10'}`}>
                    <button
                      onClick={() => {
                        setIsCollectionsOpen(false);
                        scrollToSection('featured-section');
                      }}
                      className={`w-full text-center py-2 text-[11px] uppercase tracking-widest_editorial transition-colors ${
                        isLight ? 'text-[#6E685E] hover:text-[#111116]' : 'text-champagne-muted hover:text-champagne'
                      }`}
                    >
                      View Vault Reserve Pieces →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('brand-story')}
              className={`text-xs uppercase tracking-widest_editorial transition-colors relative group py-1 ${
                isLight 
                  ? 'text-[#2C2C32] hover:text-[#111116] font-medium' 
                  : 'text-champagne/80 hover:text-champagne'
              }`}
            >
              The House
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                isLight ? 'bg-[#111116]' : 'bg-champagne-dark'
              }`} />
            </button>
          </nav>

          {/* Center: Official Shweta Diam Inc. Logo */}
          <div className="flex items-center justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
              title="Shweta Diam Inc. — Fine Diamonds"
            >
              <div className="relative flex items-center justify-center">
                {/* Backlight subtle glow */}
                <div className={`absolute -inset-2 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                  isLight ? 'bg-indigoBrand/10' : 'bg-indigoBrand/25'
                }`} />
                
                <img
                  src={isLight ? '/brand/shweta-logo-rich@2x.png' : '/brand/shweta-logo-clean@2x.png'}
                  alt="Shweta Diam Inc."
                  className={`object-contain transition-all duration-300 ${
                    isLight 
                      ? 'filter contrast-125 drop-shadow-[0_2px_8px_rgba(77,54,168,0.2)]'
                      : 'filter contrast-125 brightness-110 drop-shadow-[0_2px_10px_rgba(77,54,168,0.3)]'
                  } ${isScrolled ? 'h-9 md:h-11' : 'h-11 md:h-14'}`}
                />
              </div>
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Theme Switcher Button */}
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-full border transition-all flex items-center gap-1.5 ${
                isLight
                  ? 'border-[#E2D8C6] bg-white/70 text-[#2C2C32] hover:bg-white hover:border-indigoBrand hover:text-indigoBrand'
                  : 'border-champagne/20 bg-obsidian-surface/60 text-champagne hover:border-champagne hover:text-indigoBrand-light'
              }`}
              title={isLight ? 'Switch to Obsidian Vault (Dark Mode)' : 'Switch to Luminous Ivory (Light Mode)'}
            >
              {isLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigoBrand" />
                  <span className="hidden xl:inline text-[10px] uppercase tracking-widest font-mono">Vault Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-champagne-light" />
                  <span className="hidden xl:inline text-[10px] uppercase tracking-widest font-mono">Luminous</span>
                </>
              )}
            </button>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className={`p-2 transition-colors relative group ${
                isLight ? 'text-[#2C2C32] hover:text-[#111116]' : 'text-champagne/80 hover:text-champagne'
              }`}
              title="Search Diamond Inventory"
            >
              <Search className="w-4 h-4 md:w-4.5 md:h-4.5" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={onOpenWishlist}
              className={`p-2 transition-colors relative group ${
                isLight ? 'text-[#2C2C32] hover:text-[#111116]' : 'text-champagne/80 hover:text-champagne'
              }`}
              title="View Vault Wishlist"
            >
              <Heart className="w-4 h-4 md:w-4.5 md:h-4.5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-indigoBrand text-champagne-light text-[9px] font-bold flex items-center justify-center border border-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Private Viewing CTA Button */}
            <button
              onClick={() => onBookConsultation()}
              className={`hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-widest_editorial transition-all duration-300 font-medium ${
                isLight
                  ? 'border-[#111116] bg-[#111116] text-[#FAF8F5] hover:bg-transparent hover:text-[#111116]'
                  : 'border-champagne/25 text-champagne hover:bg-champagne hover:text-obsidian'
              }`}
            >
              <Sparkles className="w-3 h-3 text-indigoBrand-light" />
              Private Salon
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 md:hidden transition-colors ${
                isLight ? 'text-[#111116]' : 'text-champagne'
              }`}
              title="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-50 backdrop-blur-2xl flex flex-col p-6 sm:p-8 animate-in fade-in duration-300 ${
          isLight ? 'bg-[#FAF8F5]/98 text-[#111116]' : 'bg-obsidian/98 text-champagne'
        }`}>
          <div className={`flex items-center justify-between pb-6 border-b ${
            isLight ? 'border-[#E8E2D5]' : 'border-champagne/10'
          }`}>
            <img
              src={isLight ? '/brand/shweta-logo-rich@2x.png' : '/brand/shweta-logo-clean@2x.png'}
              alt="Shweta Diam Inc."
              className="h-10 object-contain filter contrast-125"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-2 rounded-full border ${
                isLight ? 'border-[#DCD5C6] text-[#111116]' : 'border-champagne/20 text-champagne'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 space-y-8 flex flex-col justify-center text-center">
            <nav className="space-y-6">
              <div>
                <button
                  onClick={() => scrollToSection('hero-section')}
                  className="text-2xl font-serif hover:text-indigoBrand transition-colors tracking-wide"
                >
                  The Light Archive
                </button>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection('shapes-section')}
                  className="text-2xl font-serif hover:text-indigoBrand transition-colors tracking-wide"
                >
                  Diamond Shapes
                </button>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection('featured-section')}
                  className="text-2xl font-serif hover:text-indigoBrand transition-colors tracking-wide"
                >
                  Featured Selection
                </button>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection('brand-story')}
                  className="text-2xl font-serif hover:text-indigoBrand transition-colors tracking-wide"
                >
                  The House of Shweta
                </button>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection('consultation-section')}
                  className="text-2xl font-serif hover:text-indigoBrand transition-colors tracking-wide"
                >
                  Private Consultation
                </button>
              </div>
            </nav>

            <div className={`pt-6 border-t space-y-4 max-w-sm mx-auto w-full ${
              isLight ? 'border-[#E8E2D5]' : 'border-champagne/10'
            }`}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className={`w-full py-3.5 rounded-full text-xs tracking-widest_editorial uppercase font-medium transition-all ${
                  isLight
                    ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black'
                    : 'bg-champagne text-obsidian hover:bg-champagne-light'
                }`}
              >
                Book Private Viewing
              </button>
              
              <div className={`text-xs space-y-1 ${isLight ? 'text-[#7D776C]' : 'text-champagne-muted'}`}>
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
