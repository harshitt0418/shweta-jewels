import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { ALL_SHAPES_LIST, FEATURED_DIAMONDS, DIAMOND_SHAPES } from '../data/diamonds';
import { DiamondVectorIcon } from './DiamondVectors';

export const SearchModal = ({ isOpen, onClose, onInspect, theme = 'light' }) => {
  const [query, setQuery] = useState('');
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const filteredFeatured = FEATURED_DIAMONDS.filter(
    (d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.shape.toLowerCase().includes(query.toLowerCase()) ||
      d.sku.toLowerCase().includes(query.toLowerCase()) ||
      d.clarity.toLowerCase().includes(query.toLowerCase())
  );

  const filteredShapes = DIAMOND_SHAPES.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.poetic.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col border ${
        isLight
          ? 'bg-white border-[#E2DAC9] text-[#111116]'
          : 'bg-obsidian-card border-champagne/15 text-champagne'
      }`}>
        {/* Search input bar */}
        <div className={`p-4 sm:p-5 border-b flex items-center gap-3 ${
          isLight ? 'border-[#EAE3D4]' : 'border-champagne/10'
        }`}>
          <Search className="w-5 h-5 text-indigoBrand shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search diamond shapes, carat (e.g. 2.01 CT, Oval, Emerald)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full bg-transparent text-sm sm:text-base focus:outline-none ${
              isLight ? 'text-[#111116] placeholder:text-[#8E877B]' : 'text-champagne placeholder:text-champagne-muted/40'
            }`}
          />
          <button
            onClick={onClose}
            className={`p-1.5 rounded-full border transition-colors ${
              isLight ? 'border-[#DED6C6] text-[#2C2C32] hover:border-[#111116]' : 'border-champagne/15 text-champagne/70 hover:text-champagne'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Shapes Pills */}
        <div className={`px-5 py-3 border-b flex flex-wrap gap-2 items-center ${
          isLight ? 'bg-[#FAF8F5] border-[#EAE3D4]' : 'bg-obsidian-surface/40 border-champagne/10'
        }`}>
          <span className={`text-[11px] uppercase tracking-widest mr-1 font-semibold ${
            isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
          }`}>Cuts:</span>
          {ALL_SHAPES_LIST.slice(0, 7).map((s) => (
            <button
              key={s}
              onClick={() => setQuery(s)}
              className={`px-2.5 py-1 rounded-full text-xs transition-all border ${
                isLight
                  ? 'bg-white border-[#DED6C6] text-[#333338] hover:border-indigoBrand hover:text-indigoBrand'
                  : 'bg-obsidian border-champagne/10 text-champagne/80 hover:text-champagne hover:border-indigoBrand'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-4">
          <div>
            <div className={`text-[11px] uppercase tracking-widest_editorial mb-2 font-semibold ${
              isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
            }`}>
              Featured Archive Stones
            </div>
            <div className="space-y-2">
              {filteredFeatured.map((stone) => (
                <div
                  key={stone.sku}
                  onClick={() => {
                    onInspect(stone);
                    onClose();
                  }}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer group transition-all ${
                    isLight
                      ? 'bg-[#FAF8F5] border-[#E2DAC9] hover:border-indigoBrand/50 shadow-sm'
                      : 'bg-obsidian-surface border-champagne/10 hover:border-champagne/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={stone.image}
                      alt={stone.title}
                      className={`w-12 h-12 rounded-lg object-cover border ${
                        isLight ? 'border-[#DED6C6]' : 'border-champagne/10'
                      }`}
                    />
                    <div>
                      <h4 className={`text-xs font-serif font-medium transition-colors ${
                        isLight ? 'text-[#111116] group-hover:text-indigoBrand' : 'text-champagne group-hover:text-indigoBrand-light'
                      }`}>
                        {stone.title}
                      </h4>
                      <div className={`text-[11px] font-mono ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                        {stone.carat} • {stone.color}/{stone.clarity} • {stone.price}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-all ${
                    isLight ? 'text-[#7D776C] group-hover:text-[#111116]' : 'text-champagne-muted group-hover:text-champagne'
                  }`} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={`text-[11px] uppercase tracking-widest_editorial mb-2 font-semibold ${
              isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
            }`}>
              Diamond Shapes
            </div>
            <div className="grid grid-cols-2 gap-2">
              {filteredShapes.map((shape) => (
                <div
                  key={shape.id}
                  onClick={() => {
                    onInspect(shape);
                    onClose();
                  }}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer group transition-all ${
                    isLight
                      ? 'bg-[#FAF8F5] border-[#E2DAC9] hover:border-indigoBrand/50 shadow-sm'
                      : 'bg-obsidian-surface border-champagne/10 hover:border-champagne/30'
                  }`}
                >
                  <div className={`p-2 rounded-lg border transition-colors ${
                    isLight
                      ? 'bg-white border-[#DED6C6] text-[#111116] group-hover:text-indigoBrand'
                      : 'bg-obsidian border-champagne/10 text-champagne group-hover:text-indigoBrand-light'
                  }`}>
                    <DiamondVectorIcon shape={shape.shortName} className="w-5 h-5" strokeWidth={1.2} />
                  </div>
                  <div>
                    <h5 className={`text-xs font-serif font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                      {shape.name}
                    </h5>
                    <div className={`text-[10px] italic ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                      {shape.poetic}
                    </div>
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
