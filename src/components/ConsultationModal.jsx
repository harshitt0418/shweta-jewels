import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Video, CheckCircle2, Sparkles } from 'lucide-react';

export const ConsultationModal = ({ isOpen, onClose, selectedPiece }) => {
  const [sessionType, setSessionType] = useState('nyc');
  const [selectedCategory, setSelectedCategory] = useState(selectedPiece?.category || 'Rings');
  const [date, setDate] = useState('2026-11-06');
  const [timeSlot, setTimeSlot] = useState('2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState(selectedPiece ? `Inquiry regarding ${selectedPiece.name}` : '');
  const [submitted, setSubmitted] = useState(false);

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
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-cream-100 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col border border-cream-400">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-400 bg-cream-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-dark" />
            <span className="text-xs uppercase tracking-luxury font-medium text-espresso">
              Personal Jewellery Consultation
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-cream-400 text-espresso hover:border-espresso transition-colors bg-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {submitted ? (
            <div className="py-10 px-4 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-cream-300 border border-gold text-gold-dark flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-luxury text-gold-dark font-medium">
                  Appointment Reserved
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-espresso">
                  We look forward to welcoming you.
                </h3>
                <p className="text-xs text-espresso-muted max-w-md mx-auto leading-relaxed font-light">
                  Our private jewellery advisor has received your request. An invitation confirmation with viewing details has been dispatched to <strong className="font-medium text-espresso">{email || 'your email'}</strong>.
                </p>
              </div>

              {/* Consultation Summary Card */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-cream-200 border border-cream-400 text-left text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-cream-400/60">
                  <span className="text-espresso-muted">Salon Location</span>
                  <span className="font-medium text-espresso">
                    {sessionType === 'nyc' ? '20 W 47th St, Suite #501, NYC' : 'Private HD Virtual Salon'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-cream-400/60">
                  <span className="text-espresso-muted">Date & Time</span>
                  <span className="font-medium text-espresso">{date} • {timeSlot}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-espresso-muted">Jewellery Interest</span>
                  <span className="font-medium text-espresso">{selectedCategory}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="py-3 px-8 rounded-full bg-espresso text-cream-50 text-xs tracking-luxury uppercase font-medium hover:bg-espresso-light transition-all shadow-md"
              >
                Return to Collection
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Type selector */}
              <div>
                <label className="block text-xs uppercase tracking-luxury text-espresso-muted mb-2 font-medium">
                  1. Consultation Experience
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSessionType('nyc')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      sessionType === 'nyc'
                        ? 'border-espresso bg-white shadow-sm'
                        : 'border-cream-400 bg-cream-200 hover:border-espresso/40'
                    }`}
                  >
                    <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${sessionType === 'nyc' ? 'text-gold-dark' : 'text-espresso-muted'}`} />
                    <div>
                      <div className="text-xs font-medium text-espresso">New York 47th St Salon</div>
                      <div className="text-[11px] text-espresso-muted mt-0.5 font-light">20 W 47th St, Suite #501</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSessionType('virtual')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      sessionType === 'virtual'
                        ? 'border-espresso bg-white shadow-sm'
                        : 'border-cream-400 bg-cream-200 hover:border-espresso/40'
                    }`}
                  >
                    <Video className={`w-4 h-4 mt-0.5 shrink-0 ${sessionType === 'virtual' ? 'text-gold-dark' : 'text-espresso-muted'}`} />
                    <div>
                      <div className="text-xs font-medium text-espresso">Virtual Consultation</div>
                      <div className="text-[11px] text-espresso-muted mt-0.5 font-light">Private 1-on-1 video session</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Category selector */}
              <div>
                <label className="block text-xs uppercase tracking-luxury text-espresso-muted mb-2 font-medium">
                  Jewellery Focus
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Rings', 'Earrings', 'Necklaces', 'Pendants', 'Bracelets', 'Bridal'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium transition-all text-center border ${
                        selectedCategory === cat
                          ? 'bg-espresso text-cream-50 border-espresso'
                          : 'bg-white border-cream-400 text-espresso hover:border-espresso'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-luxury text-espresso-muted mb-1.5 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-cream-400 rounded-lg px-3 py-2 text-xs text-espresso focus:outline-none focus:border-espresso"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-luxury text-espresso-muted mb-1.5 font-medium">
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-cream-400 rounded-lg px-3 py-2 text-xs text-espresso focus:outline-none focus:border-espresso"
                  >
                    <option value="11:00 AM EST">11:00 AM EST (Morning)</option>
                    <option value="2:00 PM EST">2:00 PM EST (Afternoon)</option>
                    <option value="4:30 PM EST">4:30 PM EST (Late Afternoon)</option>
                  </select>
                </div>
              </div>

              {/* Client Details */}
              <div className="space-y-3 pt-1">
                <label className="block text-xs uppercase tracking-luxury text-espresso-muted font-medium">
                  2. Contact Information
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-cream-400 rounded-lg px-3 py-2.5 text-xs text-espresso placeholder:text-espresso-subtle focus:outline-none focus:border-espresso"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-cream-400 rounded-lg px-3 py-2.5 text-xs text-espresso placeholder:text-espresso-subtle focus:outline-none focus:border-espresso"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="Phone (+1)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-cream-400 rounded-lg px-3 py-2.5 text-xs text-espresso placeholder:text-espresso-subtle focus:outline-none focus:border-espresso"
                  />
                  <input
                    type="text"
                    placeholder="Specific design or piece in mind"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-cream-400 rounded-lg px-3 py-2.5 text-xs text-espresso placeholder:text-espresso-subtle focus:outline-none focus:border-espresso"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-espresso text-cream-50 font-sans font-medium text-xs tracking-luxury uppercase hover:bg-espresso-light transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-light" />
                  Confirm Private Appointment
                </button>
                <div className="mt-2 text-center text-[11px] text-espresso-muted">
                  Discreet, personalized, and with no purchase obligation.
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
