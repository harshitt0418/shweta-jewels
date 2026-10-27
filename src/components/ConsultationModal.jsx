import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Video, CheckCircle2, Sparkles } from 'lucide-react';
import { ALL_SHAPES_LIST } from '../data/diamonds';

export const ConsultationModal = ({ isOpen, onClose, selectedStone, theme = 'light' }) => {
  const [sessionType, setSessionType] = useState('nyc');
  const [selectedShape, setSelectedShape] = useState(selectedStone?.shape || selectedStone?.shortName || 'Oval');
  const [caratRange, setCaratRange] = useState('1.5 - 2.5 CT');
  const [date, setDate] = useState('2026-11-04');
  const [timeSlot, setTimeSlot] = useState('2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState(selectedStone ? `Inquiry regarding stone ${selectedStone.sku || selectedStone.title}` : '');
  const [submitted, setSubmitted] = useState(false);
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col border ${
        isLight
          ? 'bg-white border-[#E2DAC9] text-[#111116]'
          : 'bg-obsidian-card border-champagne/15 text-champagne'
      }`}>
        
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isLight ? 'bg-[#FAF8F5] border-[#EAE3D4]' : 'bg-obsidian-surface/60 border-champagne/10'
        }`}>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-indigoBrand" />
            <span className={`text-xs uppercase tracking-widest_editorial font-sans font-semibold ${
              isLight ? 'text-[#111116]' : 'text-champagne'
            }`}>
              Private Salon Consultation
            </span>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-full border transition-colors ${
              isLight 
                ? 'border-[#DED6C6] text-[#2C2C32] hover:border-[#111116]' 
                : 'border-champagne/15 text-champagne/70 hover:text-champagne'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8 flex-1">
          {submitted ? (
            <div className="py-12 px-4 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-indigoBrand/15 border border-indigoBrand text-indigoBrand flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest_editorial text-indigoBrand font-sans font-bold">
                  Private Viewing Reserved
                </span>
                <h3 className={`text-2xl md:text-3xl font-serif ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                  We look forward to welcoming you.
                </h3>
                <p className={`text-xs max-w-md mx-auto leading-relaxed ${
                  isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                }`}>
                  A private diamond curator has received your dossier. An invitation confirmation with viewing credentials will be dispatched to <strong className={`font-mono ${
                    isLight ? 'text-[#111116]' : 'text-champagne'
                  }`}>{email || 'your email'}</strong> within 2 hours.
                </p>
              </div>

              {/* Consultation Summary Card */}
              <div className={`max-w-md mx-auto p-4 rounded-xl border text-left text-xs space-y-2 ${
                isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
              }`}>
                <div className={`flex justify-between py-1 border-b ${isLight ? 'border-[#EAE3D4]' : 'border-champagne/5'}`}>
                  <span className={isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}>Location / Mode</span>
                  <span className={`font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                    {sessionType === 'nyc' ? '20 W 47th St, Suite #501, NYC' : 'Secure HD Virtual Vault'}
                  </span>
                </div>
                <div className={`flex justify-between py-1 border-b ${isLight ? 'border-[#EAE3D4]' : 'border-champagne/5'}`}>
                  <span className={isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}>Preferred Date & Time</span>
                  <span className={`font-mono ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>{date} • {timeSlot}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className={isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}>Diamond Focus</span>
                  <span className={`font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>{selectedShape} • {caratRange}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className={`py-3 px-8 rounded-full text-xs tracking-widest_editorial uppercase font-medium transition-all ${
                  isLight
                    ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-md'
                    : 'bg-champagne text-obsidian hover:bg-champagne-light'
                }`}
              >
                Return to Archive
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Type selector */}
              <div>
                <label className={`block text-xs uppercase tracking-widest_editorial mb-2 font-semibold ${
                  isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                }`}>
                  1. Consultation Experience
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSessionType('nyc')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      sessionType === 'nyc'
                        ? 'border-indigoBrand bg-indigoBrand/10 shadow-sm'
                        : isLight
                          ? 'border-[#E2DAC9] bg-[#FAF8F5] hover:border-[#111116]'
                          : 'border-champagne/10 bg-obsidian-surface hover:border-champagne/25'
                    }`}
                  >
                    <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${sessionType === 'nyc' ? 'text-indigoBrand' : ''}`} />
                    <div>
                      <div className={`text-xs font-semibold ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                        New York Atelier Vault
                      </div>
                      <div className={`text-[11px] mt-0.5 ${isLight ? 'text-[#7D776C]' : 'text-champagne-muted'}`}>
                        20 W 47th Street, Suite #501
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSessionType('virtual')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      sessionType === 'virtual'
                        ? 'border-indigoBrand bg-indigoBrand/10 shadow-sm'
                        : isLight
                          ? 'border-[#E2DAC9] bg-[#FAF8F5] hover:border-[#111116]'
                          : 'border-champagne/10 bg-obsidian-surface hover:border-champagne/25'
                    }`}
                  >
                    <Video className={`w-4 h-4 mt-0.5 shrink-0 ${sessionType === 'virtual' ? 'text-indigoBrand' : ''}`} />
                    <div>
                      <div className={`text-xs font-semibold ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                        Private Virtual Salon
                      </div>
                      <div className={`text-[11px] mt-0.5 ${isLight ? 'text-[#7D776C]' : 'text-champagne-muted'}`}>
                        Direct 4K stone viewing
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Diamond Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs uppercase tracking-widest_editorial mb-2 font-semibold ${
                    isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                  }`}>
                    Diamond Cut Interest
                  </label>
                  <select
                    value={selectedShape}
                    onChange={(e) => setSelectedShape(e.target.value)}
                    className={`w-full rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigoBrand border ${
                      isLight
                        ? 'bg-[#FAF8F5] border-[#E2DAC9] text-[#111116]'
                        : 'bg-obsidian-surface border-champagne/15 text-champagne'
                    }`}
                  >
                    {ALL_SHAPES_LIST.map((shape) => (
                      <option key={shape} value={shape}>
                        {shape} Cut
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-xs uppercase tracking-widest_editorial mb-2 font-semibold ${
                    isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                  }`}>
                    Carat Target
                  </label>
                  <select
                    value={caratRange}
                    onChange={(e) => setCaratRange(e.target.value)}
                    className={`w-full rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigoBrand border ${
                      isLight
                        ? 'bg-[#FAF8F5] border-[#E2DAC9] text-[#111116]'
                        : 'bg-obsidian-surface border-champagne/15 text-champagne'
                    }`}
                  >
                    <option value="1.00 - 1.50 CT">1.00 - 1.50 Carats</option>
                    <option value="1.50 - 2.50 CT">1.50 - 2.50 Carats</option>
                    <option value="2.50 - 4.00 CT">2.50 - 4.00 Carats</option>
                    <option value="5.00+ CT Vault Stone">5.00+ CT Rare Investment Stone</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs uppercase tracking-widest_editorial mb-2 font-semibold ${
                    isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                  }`}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`w-full rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigoBrand border ${
                      isLight
                        ? 'bg-[#FAF8F5] border-[#E2DAC9] text-[#111116]'
                        : 'bg-obsidian-surface border-champagne/15 text-champagne'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs uppercase tracking-widest_editorial mb-2 font-semibold ${
                    isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                  }`}>
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className={`w-full rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigoBrand border ${
                      isLight
                        ? 'bg-[#FAF8F5] border-[#E2DAC9] text-[#111116]'
                        : 'bg-obsidian-surface border-champagne/15 text-champagne'
                    }`}
                  >
                    <option value="10:30 AM EST">10:30 AM EST (Morning Salon)</option>
                    <option value="2:00 PM EST">2:00 PM EST (Afternoon Light)</option>
                    <option value="4:30 PM EST">4:30 PM EST (Evening Vault)</option>
                  </select>
                </div>
              </div>

              {/* Client Details */}
              <div className="space-y-3 pt-2">
                <label className={`block text-xs uppercase tracking-widest_editorial font-semibold ${
                  isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                }`}>
                  2. Client Information
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigoBrand border ${
                        isLight
                          ? 'bg-[#FAF8F5] border-[#E2DAC9] text-[#111116] placeholder:text-[#8E877B]'
                          : 'bg-obsidian-surface border-champagne/15 text-champagne placeholder:text-champagne-muted/50'
                      }`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigoBrand border ${
                        isLight
                          ? 'bg-[#FAF8F5] border-[#E2DAC9] text-[#111116] placeholder:text-[#8E877B]'
                          : 'bg-obsidian-surface border-champagne/15 text-champagne placeholder:text-champagne-muted/50'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone (+1)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigoBrand border ${
                        isLight
                          ? 'bg-[#FAF8F5] border-[#E2DAC9] text-[#111116] placeholder:text-[#8E877B]'
                          : 'bg-obsidian-surface border-champagne/15 text-champagne placeholder:text-champagne-muted/50'
                      }`}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Specific diamond criteria or ring style"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className={`w-full rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigoBrand border ${
                        isLight
                          ? 'bg-[#FAF8F5] border-[#E2DAC9] text-[#111116] placeholder:text-[#8E877B]'
                          : 'bg-obsidian-surface border-champagne/15 text-champagne placeholder:text-champagne-muted/50'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3.5 px-6 rounded-full font-sans font-medium text-xs tracking-widest_editorial uppercase transition-all shadow-xl flex items-center justify-center gap-2 ${
                    isLight
                      ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-[0_8px_25px_rgba(0,0,0,0.12)]'
                      : 'bg-champagne text-obsidian hover:bg-champagne-light shadow-champagne/10'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Confirm Private Viewing Appointment
                </button>
                <div className={`mt-2 text-center text-[11px] ${
                  isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                }`}>
                  Discreet, complimentary, and with no purchase obligation.
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
