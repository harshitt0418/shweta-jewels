import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { SIGNATURE_PIECES, FEATURED_COLLECTIONS } from '../data/jewellery';

export const SearchModal = ({ isOpen, onClose, onInspect }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredPieces = SIGNATURE_PIECES.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCollections = FEATURED_COLLECTIONS.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.tagline.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div className="fixed inset-0 bg-espresso/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-cream-100 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col border border-cream-400 text-espresso">
        
        {/* Search input bar */}
        <div className="p-4 sm:p-5 border-b border-cream-400 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-gold-dark shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search rings, earrings, necklaces, pendants, bridal..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-espresso placeholder:text-espresso-subtle focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-cream-400 text-espresso hover:border-espresso transition-colors bg-cream-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Category Pills */}
        <div className="px-5 py-3 border-b border-cream-400 bg-cream-200 flex flex-wrap gap-2 items-center">
          <span className="text-[11px] uppercase tracking-luxury text-espresso-muted font-medium mr-1">
            Categories:
          </span>
          {['Rings', 'Earrings', 'Necklaces', 'Pendants', 'Bracelets', 'Bridal'].map((cat) => (
            <button
              key={cat}
              onClick={() => setQuery(cat)}
              className="px-2.5 py-1 rounded-full text-xs bg-white border border-cream-400 text-espresso hover:border-espresso transition-all"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-5 text-left">
          {/* Pieces */}
          <div>
            <div className="text-[11px] uppercase tracking-luxury text-espresso-muted mb-2 font-medium">
              Featured Ornaments
            </div>
            <div className="space-y-2">
              {filteredPieces.map((piece) => (
                <div
                  key={piece.id}
                  onClick={() => {
                    onInspect(piece);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white border border-cream-400 hover:border-espresso transition-all flex items-center justify-between cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={piece.image}
                      alt={piece.name}
                      className="w-12 h-12 rounded-lg object-cover border border-cream-300"
                    />
                    <div>
                      <h4 className="text-xs font-serif font-medium text-espresso group-hover:text-gold-dark transition-colors">
                        {piece.name}
                      </h4>
                      <div className="text-[11px] text-espresso-muted">
                        {piece.category} • {piece.price}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-espresso-muted group-hover:text-espresso group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <div className="text-[11px] uppercase tracking-luxury text-espresso-muted mb-2 font-medium">
              Collections
            </div>
            <div className="grid grid-cols-2 gap-2">
              {filteredCollections.map((col) => (
                <div
                  key={col.id}
                  onClick={() => {
                    onInspect(col);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white border border-cream-400 hover:border-espresso transition-all flex items-center gap-3 cursor-pointer group shadow-sm"
                >
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-10 h-10 rounded-lg object-cover border border-cream-300"
                  />
                  <div>
                    <h5 className="text-xs font-serif font-medium text-espresso">{col.name}</h5>
                    <div className="text-[10px] text-espresso-muted">{col.tagline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
