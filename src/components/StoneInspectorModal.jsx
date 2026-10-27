import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, Heart, ArrowUpRight, Calendar } from 'lucide-react';
import { DiamondVectorIcon } from './DiamondVectors';

export const StoneInspectorModal = ({ stone, isOpen, onClose, onBookConsultation, onToggleWishlist, isWishlisted, theme = 'light' }) => {
  const [activeTab, setActiveTab] = useState('specs');
  const [glintActive, setGlintActive] = useState(false);
  const isLight = theme === 'light';

  if (!isOpen || !stone) return null;

  const triggerLightReflection = () => {
    setGlintActive(true);
    setTimeout(() => setGlintActive(false), 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col border ${
        isLight
          ? 'bg-white border-[#E2DAC9] text-[#111116]'
          : 'bg-obsidian-card border-champagne/15 text-champagne'
      }`}>
        {/* Top Bar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isLight ? 'bg-[#FAF8F5] border-[#EAE3D4]' : 'bg-obsidian-surface/60 border-champagne/10'
        }`}>
          <div className="flex items-center gap-3">
            <span className={`text-xs uppercase tracking-widest_editorial font-sans font-semibold ${
              isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
            }`}>
              Archive Stone Record
            </span>
            <span className={`h-3 w-px ${isLight ? 'bg-[#DED6C6]' : 'bg-champagne/20'}`} />
            <span className={`text-xs font-mono tracking-wider ${
              isLight ? 'text-[#111116] font-medium' : 'text-champagne/60'
            }`}>
              {stone.sku || `SD-${stone.id?.toUpperCase()}`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(stone)}
              className={`p-2 rounded-full border transition-all ${
                isWishlisted
                  ? 'border-indigoBrand text-white bg-indigoBrand'
                  : isLight
                    ? 'border-[#DED6C6] text-[#2C2C32] hover:border-[#111116]'
                    : 'border-champagne/15 text-champagne/70 hover:text-champagne hover:border-champagne/40'
              }`}
              title="Save to Vault Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-full border transition-colors ${
                isLight 
                  ? 'border-[#DED6C6] text-[#2C2C32] hover:border-[#111116]' 
                  : 'border-champagne/15 text-champagne/70 hover:text-champagne hover:border-champagne/40'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Visual Column */}
            <div className="md:col-span-5 space-y-4">
              <div 
                className={`relative aspect-square rounded-xl overflow-hidden group cursor-pointer border ${
                  isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian border-champagne/15'
                }`}
                onClick={triggerLightReflection}
                title="Click to illuminate diamond light refraction"
              >
                <img 
                  src={stone.image} 
                  alt={stone.title || stone.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {glintActive && (
                  <div className="absolute top-1/3 left-1/3 w-16 h-16 pointer-events-none">
                    <Sparkles className="w-12 h-12 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-ping" />
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-sans tracking-widest text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-indigoBrand-light" />
                    Touch to refract light
                  </span>
                  <div className="bg-black/80 p-1.5 rounded-full border border-white/20 text-white">
                    <DiamondVectorIcon shape={stone.shape || stone.shortName} className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Certificate badge */}
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                isLight ? 'bg-[#F7F4EE] border-[#E2DAC9]' : 'bg-obsidian-surface/60 border-champagne/10'
              }`}>
                <ShieldCheck className="w-5 h-5 text-indigoBrand shrink-0" />
                <div className="text-left text-xs">
                  <div className={`font-sans font-semibold ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                    {stone.cert || 'Independently Laboratory Certified'}
                  </div>
                  <div className={`text-[11px] ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                    Conflict-Free & Ethically Sourced • GIA / IGI dossier
                  </div>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs uppercase tracking-widest_editorial text-indigoBrand font-bold">
                    {stone.shape || stone.shortName} Cut Diamond
                  </span>
                  {stone.tag && (
                    <span className="px-2 py-0.5 text-[10px] tracking-widest uppercase bg-indigoBrand/15 text-indigoBrand rounded-full border border-indigoBrand/30 font-semibold">
                      {stone.tag}
                    </span>
                  )}
                </div>
                <h3 className={`text-2xl md:text-3xl font-serif font-normal tracking-wide ${
                  isLight ? 'text-[#111116]' : 'text-champagne'
                }`}>
                  {stone.title || `${stone.name} — ${stone.poetic}`}
                </h3>
                {stone.price && (
                  <div className={`mt-2 text-xl font-serif tracking-wider ${
                    isLight ? 'text-[#111116]' : 'text-champagne-light'
                  }`}>
                    {stone.price} <span className={`text-xs font-sans font-normal ${
                      isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                    }`}>USD • Bespoke Inquiry</span>
                  </div>
                )}
              </div>

              {/* Tabs */}
              <div className={`flex border-b gap-6 text-xs uppercase tracking-widest_editorial ${
                isLight ? 'border-[#EAE3D4]' : 'border-champagne/10'
              }`}>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2.5 transition-colors relative font-medium ${
                    activeTab === 'specs' 
                      ? isLight ? 'text-[#111116]' : 'text-champagne' 
                      : isLight ? 'text-[#7D776C] hover:text-[#111116]' : 'text-champagne-muted hover:text-champagne'
                  }`}
                >
                  The 4Cs & Anatomy
                  {activeTab === 'specs' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigoBrand" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('facets')}
                  className={`pb-2.5 transition-colors relative font-medium ${
                    activeTab === 'facets' 
                      ? isLight ? 'text-[#111116]' : 'text-champagne' 
                      : isLight ? 'text-[#7D776C] hover:text-[#111116]' : 'text-champagne-muted hover:text-champagne'
                  }`}
                >
                  Facet Geometry
                  {activeTab === 'facets' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigoBrand" />
                  )}
                </button>
              </div>

              {/* Tab: Specs Grid */}
              {activeTab === 'specs' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className={`p-3 rounded-lg border ${
                      isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
                    }`}>
                      <div className={`text-[10px] uppercase tracking-widest ${
                        isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                      }`}>Carat Weight</div>
                      <div className={`text-base font-serif font-semibold mt-0.5 ${
                        isLight ? 'text-[#111116]' : 'text-champagne'
                      }`}>{stone.carat || '1.50+ CT'}</div>
                    </div>
                    <div className={`p-3 rounded-lg border ${
                      isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
                    }`}>
                      <div className={`text-[10px] uppercase tracking-widest ${
                        isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                      }`}>Colour Grade</div>
                      <div className={`text-base font-serif font-semibold mt-0.5 ${
                        isLight ? 'text-[#111116]' : 'text-champagne'
                      }`}>{stone.color || 'D — F'}</div>
                    </div>
                    <div className={`p-3 rounded-lg border ${
                      isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
                    }`}>
                      <div className={`text-[10px] uppercase tracking-widest ${
                        isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                      }`}>Clarity</div>
                      <div className={`text-base font-serif font-semibold mt-0.5 ${
                        isLight ? 'text-[#111116]' : 'text-champagne'
                      }`}>{stone.clarity || 'VVS1 - VS1'}</div>
                    </div>
                    <div className={`p-3 rounded-lg border ${
                      isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
                    }`}>
                      <div className={`text-[10px] uppercase tracking-widest ${
                        isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                      }`}>Cut Precision</div>
                      <div className={`text-base font-serif font-semibold mt-0.5 ${
                        isLight ? 'text-[#111116]' : 'text-champagne'
                      }`}>{stone.cut || 'Excellent'}</div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border space-y-2 text-xs ${
                    isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface/40 border-champagne/10'
                  }`}>
                    <div className={`flex justify-between py-1 border-b ${
                      isLight ? 'border-[#EAE3D4]' : 'border-champagne/5'
                    }`}>
                      <span className={isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}>Polish & Symmetry</span>
                      <span className={`font-mono font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                        {stone.polish || 'Excellent'} / {stone.symmetry || 'Excellent'}
                      </span>
                    </div>
                    <div className={`flex justify-between py-1 border-b ${
                      isLight ? 'border-[#EAE3D4]' : 'border-champagne/5'
                    }`}>
                      <span className={isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}>Fluorescence</span>
                      <span className={`font-mono font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                        {stone.fluorescence || 'None'}
                      </span>
                    </div>
                    <div className={`flex justify-between py-1 border-b ${
                      isLight ? 'border-[#EAE3D4]' : 'border-champagne/5'
                    }`}>
                      <span className={isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}>Measurements</span>
                      <span className={`font-mono font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                        {stone.measurements || 'Precision Cut Ratio'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className={isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}>Table / Depth Ratio</span>
                      <span className={`font-mono font-medium ${isLight ? 'text-[#111116]' : 'text-champagne'}`}>
                        {stone.tablePercent || '58%'} / {stone.depthPercent || '62%'}
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed font-sans ${
                    isLight ? 'text-[#6A665E]' : 'text-champagne-muted'
                  }`}>
                    {stone.description || 'Each stone in the Light Archive is hand-inspected in our New York 47th Street facility for optimal light return, scintillation symmetry, and crystalline fire.'}
                  </p>
                </div>
              )}

              {/* Tab: Facets */}
              {activeTab === 'facets' && (
                <div className={`p-6 rounded-xl border flex flex-col items-center text-center space-y-4 ${
                  isLight ? 'bg-[#FAF8F5] border-[#E2DAC9]' : 'bg-obsidian-surface border-champagne/10'
                }`}>
                  <div className={`w-24 h-24 p-3 rounded-full border ${
                    isLight ? 'bg-white border-[#DED6C6] text-indigoBrand' : 'bg-obsidian border-indigoBrand/30 text-indigoBrand-light'
                  }`}>
                    <DiamondVectorIcon shape={stone.shape || stone.shortName} className="w-full h-full" strokeWidth={1.2} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-serif tracking-wider font-semibold ${
                      isLight ? 'text-[#111116]' : 'text-champagne'
                    }`}>
                      Geometric Facet Blueprint
                    </h4>
                    <p className={`text-xs mt-1 max-w-sm ${isLight ? 'text-[#6A665E]' : 'text-champagne-muted'}`}>
                      {stone.facets || '57 meticulously polished facets designed to refract light through crown and pavilion.'}
                    </p>
                  </div>
                  <div className={`inline-flex gap-4 text-[11px] font-mono ${
                    isLight ? 'text-[#7D776C]' : 'text-champagne-muted'
                  }`}>
                    <span>Crown Angle: 34.5°</span>
                    <span>Pavilion Angle: 40.8°</span>
                    <span>Girdle: Medium</span>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onBookConsultation(stone);
                  }}
                  className={`w-full sm:flex-1 py-3.5 px-6 rounded-full font-sans font-medium text-xs tracking-widest_editorial uppercase transition-all shadow-lg flex items-center justify-center gap-2 ${
                    isLight
                      ? 'bg-[#111116] text-[#FAF8F5] hover:bg-black shadow-[0_8px_20px_rgba(0,0,0,0.1)]'
                      : 'bg-champagne text-obsidian hover:bg-champagne-light'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Request Private Viewing
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onBookConsultation(stone);
                  }}
                  className={`w-full sm:w-auto py-3.5 px-6 rounded-full border font-sans text-xs tracking-widest_editorial uppercase transition-all flex items-center justify-center gap-2 font-medium ${
                    isLight
                      ? 'border-[#111116] text-[#111116] hover:bg-black/5'
                      : 'border-champagne/25 text-champagne hover:border-champagne/60'
                  }`}
                >
                  Direct Specialist Call
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
