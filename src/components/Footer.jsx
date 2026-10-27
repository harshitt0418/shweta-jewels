import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { ALL_SHAPES_LIST } from '../data/diamonds';

export const Footer = ({ onInspectShape, onBookConsultation, theme = 'light' }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const isLight = theme === 'light';

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`pt-20 pb-12 relative overflow-hidden transition-colors duration-700 border-t ${
      isLight 
        ? 'bg-[#EAE4D6] border-[#DDD4C2] text-[#111116]' 
        : 'bg-obsidian border-champagne/15 text-champagne'
    }`}>
      
      {/* Background glow */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 blur-[120px] pointer-events-none rounded-full ${
        isLight ? 'bg-indigoBrand/5' : 'bg-indigoBrand/5'
      }`} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={isLight ? '/brand/shweta-logo-rich@2x.png' : '/brand/shweta-logo-clean@2x.png'}
                alt="Shweta Diam Inc."
                className={`h-12 object-contain filter contrast-125 ${
                  isLight ? 'drop-shadow-[0_2px_8px_rgba(77,54,168,0.2)]' : 'brightness-110 drop-shadow-[0_2px_8px_rgba(77,54,168,0.3)]'
                }`}
              />
            </div>

            <p className={`text-xs font-sans font-light leading-relaxed max-w-sm ${
              isLight ? 'text-[#5C564C]' : 'text-champagne-muted'
            }`}>
              Headquartered in New York City’s Diamond District, Shweta Diam Inc. delivers masterfully cut and ethically sourced natural diamonds directly from rough selection to bespoke private vaults.
            </p>

            <div className={`pt-2 flex items-center gap-2 text-[11px] ${
              isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
            }`}>
              <ShieldCheck className="w-4 h-4 text-indigoBrand shrink-0" />
              <span>Kimberley Process Compliant • Conflict-Free Diamonds</span>
            </div>
          </div>

          {/* Diamond Cuts Catalogue Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className={`text-xs uppercase tracking-widest_editorial font-semibold ${
              isLight ? 'text-[#111116]' : 'text-champagne'
            }`}>
              Diamond Shapes
            </div>
            <div className={`grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-serif ${
              isLight ? 'text-[#5C564C]' : 'text-champagne-muted'
            }`}>
              {ALL_SHAPES_LIST.map((shape) => (
                <button
                  key={shape}
                  onClick={() => onInspectShape({ shortName: shape, name: `${shape} Cut`, image: `/assets/diamond-${shape.toLowerCase()}.jpg` })}
                  className={`text-left transition-colors py-0.5 ${
                    isLight ? 'hover:text-indigoBrand' : 'hover:text-champagne'
                  }`}
                >
                  {shape} Cut
                </button>
              ))}
            </div>
          </div>

          {/* Business Details Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className={`text-xs uppercase tracking-widest_editorial font-semibold ${
              isLight ? 'text-[#111116]' : 'text-champagne'
            }`}>
              New York Atelier
            </div>
            
            <div className={`space-y-3 text-xs font-sans leading-relaxed ${
              isLight ? 'text-[#5C564C]' : 'text-champagne-muted'
            }`}>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-indigoBrand mt-0.5 shrink-0" />
                <span>
                  20 W, 47th Street, Suite #501,<br />
                  New York, NY 10036, USA
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-indigoBrand shrink-0" />
                <a href="tel:+12012415503" className={`transition-colors ${
                  isLight ? 'hover:text-[#111116] font-medium' : 'hover:text-champagne'
                }`}>
                  +1 201-241-5503
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-indigoBrand shrink-0" />
                <a href="mailto:shwetadiam@gmail.com" className={`transition-colors ${
                  isLight ? 'hover:text-[#111116] font-medium' : 'hover:text-champagne'
                }`}>
                  shwetadiam@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookConsultation}
                className={`text-xs uppercase tracking-widest_editorial transition-colors flex items-center gap-1 font-semibold ${
                  isLight ? 'text-indigoBrand hover:text-[#111116]' : 'text-indigoBrand-light hover:text-champagne'
                }`}
              >
                Schedule Private Appointment →
              </button>
            </div>
          </div>

          {/* Gazette / Private Dispatch Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className={`text-xs uppercase tracking-widest_editorial font-semibold ${
              isLight ? 'text-[#111116]' : 'text-champagne'
            }`}>
              Private Dispatch
            </div>
            <p className={`text-xs leading-relaxed ${
              isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
            }`}>
              Receive confidential notices of rare carat arrivals and private vault openings.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigoBrand pr-9 ${
                    isLight
                      ? 'bg-white border-[#D5CBBA] text-[#111116] placeholder:text-[#8E877B]'
                      : 'bg-obsidian-surface border-champagne/15 text-champagne placeholder:text-champagne-muted/40'
                  }`}
                />
                <button
                  type="submit"
                  className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1 transition-colors ${
                    isLight ? 'text-[#111116] hover:text-indigoBrand' : 'text-champagne hover:text-indigoBrand-light'
                  }`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[10px] text-indigoBrand flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Privileged dispatch enrolled.
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans ${
          isLight ? 'border-[#DDD4C2] text-[#7D776C]' : 'border-hairline text-champagne-muted'
        }`}>
          <div>
            © {new Date().getFullYear()} Shweta Diam Inc. All rights reserved. • NYC Diamond House
          </div>

          <div className="flex items-center gap-6">
            <span>Confidentiality & Privacy</span>
            <span>Ethical Diamond Charter</span>
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1.5 transition-colors ${
                isLight ? 'text-[#111116] hover:text-indigoBrand font-medium' : 'text-champagne hover:text-indigoBrand-light'
              }`}
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
