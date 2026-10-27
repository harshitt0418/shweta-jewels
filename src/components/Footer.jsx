import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream-100 border-t border-cream-400/90 text-espresso pt-20 pb-12 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <img
              src="/brand/shweta-logo-rich@2x.png"
              alt="Shweta Diam Inc."
              className="h-11 object-contain drop-shadow-[0_1px_4px_rgba(77,54,168,0.15)]"
            />
            
            <p className="text-xs text-espresso-muted font-light leading-relaxed max-w-sm">
              Headquartered in New York City’s legendary Diamond District, Shweta Diam Inc. crafts timeless fine diamond jewellery made to celebrate life’s most meaningful moments.
            </p>

            {/* Social Placeholders */}
            <div className="flex items-center gap-4 text-espresso-muted pt-1">
              <a 
                href="#instagram" 
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-cream-400 flex items-center justify-center hover:text-espresso hover:border-espresso transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#facebook" 
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-cream-400 flex items-center justify-center hover:text-espresso hover:border-espresso transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Collections Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury font-medium text-espresso">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-espresso-muted font-light">
              <li>
                <button onClick={() => scrollTo('collections-section')} className="hover:text-espresso transition-colors">
                  Diamond Rings
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('collections-section')} className="hover:text-espresso transition-colors">
                  Earrings & Solitaire Studs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('collections-section')} className="hover:text-espresso transition-colors">
                  Diamond Collars & Necklaces
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('collections-section')} className="hover:text-espresso transition-colors">
                  Pendants & Solitaires
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('collections-section')} className="hover:text-espresso transition-colors">
                  Tennis Bracelets & Bangles
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('bridal-section')} className="hover:text-espresso transition-colors">
                  Bridal & Wedding Collection
                </button>
              </li>
            </ul>
          </div>

          {/* About & Services Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury font-medium text-espresso">
              About & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-espresso-muted font-light">
              <li>
                <button onClick={() => scrollTo('heritage-section')} className="hover:text-espresso transition-colors">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('consultation-cta')} className="hover:text-espresso transition-colors">
                  Bespoke Consultation
                </button>
              </li>
              <li>
                <span className="hover:text-espresso transition-colors cursor-pointer">
                  Jewellery Care Guide
                </span>
              </li>
              <li>
                <span className="hover:text-espresso transition-colors cursor-pointer">
                  Ethical Sourcing
                </span>
              </li>
            </ul>
          </div>

          {/* Business Contact Details Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury font-medium text-espresso">
              New York Salon
            </h4>
            
            <div className="space-y-3 text-xs text-espresso-muted font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-gold-dark mt-0.5 shrink-0" />
                <span>
                  20 W, 47th Street, Suite #501,<br />
                  New York, NY 10036, USA
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                <a href="tel:+12012415503" className="hover:text-espresso transition-colors">
                  +1 201-241-5503
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                <a href="mailto:shwetadiam@gmail.com" className="hover:text-espresso transition-colors">
                  shwetadiam@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-cream-400 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-espresso-subtle font-light">
          <div>
            © {new Date().getFullYear()} Shweta Diam Inc. All rights reserved. • Fine Diamond Jewellery
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-espresso cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-espresso cursor-pointer transition-colors">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-espresso transition-colors"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
