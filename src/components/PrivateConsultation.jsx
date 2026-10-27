import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ALL_SHAPES_LIST } from '../data/diamonds';
import { ScrollReveal } from './ScrollReveal';

export const PrivateConsultation = ({ onOpenConsultation, theme = 'light' }) => {
  const [selectedLocation, setSelectedLocation] = useState('nyc');
  const [selectedShape, setSelectedShape] = useState('Emerald');
  const [selectedSlot, setSelectedSlot] = useState('2:30 PM');
  const [isBooked, setIsBooked] = useState(false);
  const isLight = theme === 'light';

  const handleQuickBook = (e) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 5000);
  };

  return (
    <section 
      id="consultation-section" 
      className={`py-24 md:py-36 relative overflow-hidden border-t transition-colors duration-700 ${
        isLight ? 'bg-[#EFEAE0] border-[#E0D8C8]' : 'bg-obsidian border-champagne/10'
      }`}
    >
      
      {/* Background Floating Translucent Diamond Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className={`w-[850px] h-[850px] animate-pulse-subtle ${
          isLight ? 'opacity-20 text-indigoBrand' : 'opacity-15 text-indigoBrand-light'
        }`}>
          <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-full h-full">
            <polygon points="200,40 340,140 280,340 120,340 60,140" strokeDasharray="4 4" />
            <polygon points="200,80 300,160 250,300 150,300 100,160" />
            <line x1="200" y1="40" x2="200" y2="340" strokeOpacity="0.4" />
            <line x1="60" y1="140" x2="340" y2="140" strokeOpacity="0.4" />
            <line x1="100" y1="160" x2="300" y2="160" strokeOpacity="0.4" />
            <line x1="120" y1="340" x2="200" y2="40" strokeOpacity="0.3" />
            <line x1="280" y1="340" x2="200" y2="40" strokeOpacity="0.3" />
            <circle cx="200" cy="200" r="140" stroke="rgba(77,54,168,0.25)" strokeDasharray="2 6" />
          </svg>
        </div>

        <div className={`absolute w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none ${
          isLight ? 'bg-indigoBrand/8' : 'bg-indigoBrand/15'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Invitation Copy with ScrollReveal */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="up" duration={700}>
              <div className="space-y-4">
                <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest_editorial font-sans font-semibold ${
                  isLight ? 'text-indigoBrand' : 'text-indigoBrand-light'
                }`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  BESPOKE SALON SERVICE
                </div>

                <h2 className={`text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-[1.12] ${
                  isLight ? 'text-[#111116]' : 'text-champagne'
                }`}>
                  A diamond should <br />
                  <span className="italic font-normal">feel personal.</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} duration={700}>
              <p className={`text-sm sm:text-base font-sans font-light leading-relaxed max-w-lg ${
                isLight ? 'text-[#5C564C]' : 'text-champagne-muted'
              }`}>
                From a first question to the final selection, our experts help you find a stone that feels unmistakably yours.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250} duration={700}>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 text-xs">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                    isLight
                      ? 'bg-white border-[#DED6C6] text-indigoBrand'
                      : 'bg-obsidian-surface border-champagne/15 text-indigoBrand-light'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`font-serif text-sm font-semibold ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                      New York 47th St Private Atelier
                    </div>
                    <div className={`text-[11px] mt-0.5 ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                      20 W 47th Street, Suite #501, New York, NY 10036
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-xs">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                    isLight
                      ? 'bg-white border-[#DED6C6] text-indigoBrand'
                      : 'bg-obsidian-surface border-champagne/15 text-indigoBrand-light'
                  }`}>
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`font-serif text-sm font-semibold ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                      Global HD Virtual Salon
                    </div>
                    <div className={`text-[11px] mt-0.5 ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                      Confidential high-magnification stone review from anywhere worldwide
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Main CTA */}
            <ScrollReveal direction="up" delay={350} duration={700}>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className={`group px-8 py-4 rounded-full text-xs tracking-widest_editorial uppercase font-medium transition-all shadow-2xl flex items-center gap-2 transform hover:-translate-y-1 ${
                    isLight
                      ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_45px_rgba(77,54,168,0.2)]'
                      : 'bg-champagne text-obsidian hover:bg-champagne-light shadow-champagne/10'
                  }`}
                >
                  Speak to a Diamond Expert
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>

          </div>

          {/* Right: Elegant Mini Appointment UI Card with Hover Elevation & ScrollReveal */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={200} duration={800}>
              <div className={`max-w-md mx-auto lg:ml-auto p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 relative border transition-all duration-500 ease-out z-10 hover:z-30 hover:scale-[1.025] hover:-translate-y-2 cursor-pointer ${
                isLight
                  ? 'bg-white/95 backdrop-blur-xl border-[#E2DAC9] hover:border-indigoBrand hover:shadow-[0_25px_65px_rgba(77,54,168,0.22)] ring-1 ring-transparent hover:ring-indigoBrand/40'
                  : 'bg-obsidian-card/90 backdrop-blur-xl border-champagne/20 hover:border-indigoBrand-light hover:shadow-[0_25px_65px_rgba(114,86,212,0.35)] ring-1 ring-transparent hover:ring-indigoBrand/40'
              }`}>
                
                {/* Card Header */}
                <div className={`flex items-center justify-between pb-4 border-b ${
                  isLight ? 'border-[#EAE3D4]' : 'border-champagne/10'
                }`}>
                  <div className="space-y-0.5">
                    <span className={`text-[10px] uppercase tracking-widest_editorial font-semibold ${
                      isLight ? 'text-indigoBrand' : 'text-indigoBrand-light'
                    }`}>
                      Reserve An Appointment
                    </span>
                    <h3 className={`text-base font-serif font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                      Private Viewing Pass
                    </h3>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-indigoBrand animate-ping" />
                </div>

                {isBooked ? (
                  <div className="py-8 text-center space-y-3 animate-in fade-in">
                    <CheckCircle2 className="w-10 h-10 text-indigoBrand mx-auto" />
                    <h4 className={`text-base font-serif font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                      Private Request Confirmed
                    </h4>
                    <p className={`text-xs ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                      Our diamond specialist will reach out shortly to finalize your appointment details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickBook} className="space-y-4">
                    {/* Location Segmented Controls */}
                    <div>
                      <label className={`block text-[10px] uppercase tracking-widest mb-2 font-semibold ${
                        isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                      }`}>
                        Viewing Venue
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedLocation('nyc')}
                          className={`p-2.5 rounded-lg border text-xs text-center transition-all ${
                            selectedLocation === 'nyc'
                              ? isLight
                                ? 'border-indigoBrand bg-indigoBrand/10 text-indigoBrand font-semibold shadow-sm'
                                : 'border-indigoBrand bg-indigoBrand/20 text-champagne font-medium'
                              : isLight
                                ? 'border-[#E2DAC9] bg-[#F7F4EE] text-[#4A463F] hover:border-[#111116]'
                                : 'border-champagne/10 bg-obsidian-surface text-champagne-muted hover:border-champagne/25'
                          }`}
                        >
                          Manhattan Atelier
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedLocation('virtual')}
                          className={`p-2.5 rounded-lg border text-xs text-center transition-all ${
                            selectedLocation === 'virtual'
                              ? isLight
                                ? 'border-indigoBrand bg-indigoBrand/10 text-indigoBrand font-semibold shadow-sm'
                                : 'border-indigoBrand bg-indigoBrand/20 text-champagne font-medium'
                              : isLight
                                ? 'border-[#E2DAC9] bg-[#F7F4EE] text-[#4A463F] hover:border-[#111116]'
                                : 'border-champagne/10 bg-obsidian-surface text-champagne-muted hover:border-champagne/25'
                          }`}
                        >
                          Virtual HD Salon
                        </button>
                      </div>
                    </div>

                    {/* Cut Preference Selector */}
                    <div>
                      <label className={`block text-[10px] uppercase tracking-widest mb-2 font-semibold ${
                        isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                      }`}>
                        Preferred Cut Silhouette
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {['Round', 'Emerald', 'Oval', 'Pear', 'Heart', 'Princess'].map((shape) => (
                          <button
                            key={shape}
                            type="button"
                            onClick={() => setSelectedShape(shape)}
                            className={`px-3 py-1 rounded-full text-xs transition-all ${
                              selectedShape === shape
                                ? isLight
                                  ? 'bg-[#111116] text-[#FAF8F5] font-medium shadow-sm'
                                  : 'bg-champagne text-obsidian font-medium'
                                : isLight
                                  ? 'bg-[#F7F4EE] border border-[#E2DAC9] text-[#4A463F] hover:text-[#111116]'
                                  : 'bg-obsidian-surface border border-champagne/10 text-champagne-muted hover:text-champagne'
                            }`}
                          >
                            {shape}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Date & Time Slot */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={`block text-[10px] uppercase tracking-widest mb-1.5 font-semibold ${
                          isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                        }`}>
                          Date
                        </label>
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs ${
                          isLight
                            ? 'bg-[#F7F4EE] border-[#E2DAC9] text-[#111116]'
                            : 'bg-obsidian-surface border-champagne/15 text-champagne'
                        }`}>
                          <Calendar className={`w-3.5 h-3.5 ${isLight ? 'text-[#7D776C]' : 'text-champagne-muted'}`} />
                          <span>Nov 05, 2026</span>
                        </div>
                      </div>

                      <div>
                        <label className={`block text-[10px] uppercase tracking-widest mb-1.5 font-semibold ${
                          isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                        }`}>
                          Time Window
                        </label>
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs ${
                          isLight
                            ? 'bg-[#F7F4EE] border-[#E2DAC9] text-[#111116]'
                            : 'bg-obsidian-surface border-champagne/15 text-champagne'
                        }`}>
                          <Clock className={`w-3.5 h-3.5 ${isLight ? 'text-[#7D776C]' : 'text-champagne-muted'}`} />
                          <span>{selectedSlot} EST</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Email Input */}
                    <div>
                      <label className={`block text-[10px] uppercase tracking-widest mb-1.5 font-semibold ${
                        isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                      }`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@vault.com"
                        className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigoBrand ${
                          isLight
                            ? 'bg-[#F7F4EE] border-[#E2DAC9] text-[#111116] placeholder:text-[#8E877B]'
                            : 'bg-obsidian-surface border-champagne/15 text-champagne placeholder:text-champagne-muted/40'
                        }`}
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className={`w-full py-3 rounded-full text-xs tracking-widest_editorial uppercase font-medium transition-all flex items-center justify-center gap-2 ${
                          isLight
                            ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-[0_8px_20px_rgba(0,0,0,0.1)]'
                            : 'bg-champagne text-obsidian hover:bg-champagne-light'
                        }`}
                      >
                        Request Private Appointment
                      </button>
                    </div>
                  </form>
                )}

                {/* Discreet note */}
                <div className={`text-[10px] text-center font-sans ${isLight ? 'text-[#7D776C]' : 'text-champagne-muted'}`}>
                  Direct phone inquiry: <a href="tel:+12012415503" className={`hover:underline font-medium ${
                    isLight ? 'text-[#111116]' : 'text-champagne'
                  }`}>+1 201-241-5503</a>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
