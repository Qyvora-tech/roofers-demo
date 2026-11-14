import React, { useState, useId } from 'react';
import { 
  Calculator, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  TrendingDown,
  Info
} from 'lucide-react';

export default function CostCalculator({ onOpenEstimate }) {
  const [homeSqFt, setHomeSqFt] = useState(2600);
  const [pitch, setPitch] = useState('standard'); // 'low', 'standard', 'steep'
  const [materialTier, setMaterialTier] = useState('class4'); // 'standard', 'class4', 'designer'
  const [tearOffLayers, setTearOffLayers] = useState(1);

  // Approximate roof surface multiplier based on pitch and overhangs
  // In residential roofing, roof area is ~1.15 to 1.35x ground footprint
  const pitchMultiplier = pitch === 'low' ? 1.15 : pitch === 'standard' ? 1.25 : 1.40;
  const estimatedRoofSqFt = Math.round(homeSqFt * pitchMultiplier);
  const estimatedSquares = (estimatedRoofSqFt / 100).toFixed(1);

  // Base pricing per square (materials + certified labor + warranty)
  const tierRates = {
    standard: {
      name: 'Architectural Shingles (Class 3)',
      rateLow: 380,
      rateHigh: 440,
      desc: 'GAF Timberline HDZ • WindProven™ Infinite Wind Warranty',
      insuranceDiscount: '0–5% typical'
    },
    class4: {
      name: 'Impact-Resistant Armor (Class 4)',
      rateLow: 460,
      rateHigh: 530,
      desc: 'UL 2218 Class 4 Hail Rated • SBS Polymer-Modified Core',
      insuranceDiscount: 'Up to 28% annual savings'
    },
    designer: {
      name: 'Ultra-Premium Luxury Designer',
      rateLow: 620,
      rateHigh: 740,
      desc: 'CertainTeed Grand Manor / Standing Seam Accents',
      insuranceDiscount: 'Class 4 available'
    }
  };

  const currentTier = tierRates[materialTier];
  const tearOffFee = tearOffLayers === 2 ? estimatedSquares * 35 : 0;

  const lowEstimate = Math.round((estimatedSquares * currentTier.rateLow) + tearOffFee);
  const highEstimate = Math.round((estimatedSquares * currentTier.rateHigh) + tearOffFee);

  // Estimated monthly financing (e.g. 120-month financing at ~8.99% or 0% APR promo)
  const monthlyLow = Math.round(lowEstimate / 72);

  return (
    <section id="calculator" className="py-24 bg-ivory-200 text-graphite-400 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5 text-copper-600" />
            <span>Honest Project Budgeting</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Interactive Roofing <br />
            <span className="font-serif italic font-normal text-copper-600">Cost & Investment Calculator.</span>
          </h2>

          <p className="text-sm sm:text-base text-graphite-300 max-w-2xl mx-auto leading-relaxed">
            No vague quotes or bait-and-switch games. Adjust your home size, pitch, and shingle class to view a realistic turnkey price range for Dallas-Fort Worth homes.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border border-slate-900/10 shadow-elevated overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Inputs Column */}
          <div className="p-6 sm:p-10 lg:col-span-7 space-y-8">
            
            {/* Slider 1: Home Footprint */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                  <span>Home Living Area (Square Footage)</span>
                </label>
                <div className="font-mono font-bold text-lg text-copper-600 bg-copper-500/10 px-3 py-1 rounded-lg">
                  {homeSqFt.toLocaleString()} sq ft
                </div>
              </div>

              <input
                type="range"
                min="1200"
                max="5500"
                step="50"
                value={homeSqFt}
                onChange={(e) => setHomeSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-ivory-300 rounded-lg appearance-none cursor-pointer accent-copper-500 focus:outline-none"
              />

              <div className="flex justify-between text-[11px] font-mono text-graphite-200 mt-2">
                <span>1,200 sq ft (Cottage / Ranch)</span>
                <span>3,200 sq ft (Suburban 2-Story)</span>
                <span>5,500+ sq ft (Estate)</span>
              </div>
              <p className="text-xs text-graphite-200 mt-1.5">
                Calculated roof surface: ~{estimatedRoofSqFt.toLocaleString()} sq ft ({estimatedSquares} roofing squares including pitch & overhangs).
              </p>
            </div>

            {/* Radio 2: Roof Pitch & Slope */}
            <div>
              <label className="font-display font-bold text-base text-slate-900 block mb-3">
                Roof Steepness / Architectural Pitch
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'low', label: 'Low Pitch', sub: 'Walkable (4/12 or under)' },
                  { id: 'standard', label: 'Standard Pitch', sub: 'Typical DFW (5/12 - 7/12)' },
                  { id: 'steep', label: 'Steep Pitch', sub: 'Complex (8/12 - 12/12+)' },
                ].map((item) => {
                  const isSelected = pitch === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPitch(item.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-copper-500 bg-copper-500/10 text-slate-900 shadow-sm ring-1 ring-copper-500'
                          : 'border-slate-900/10 hover:border-slate-900/20 text-graphite-400 bg-ivory-50/50'
                      }`}
                    >
                      <div className="font-display font-bold text-xs leading-tight mb-1">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-graphite-300 leading-snug">
                        {item.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Radio 3: Material Grade */}
            <div>
              <label className="font-display font-bold text-base text-slate-900 block mb-3">
                Select Roofing Material Grade
              </label>
              <div className="space-y-3">
                {[
                  {
                    id: 'standard',
                    name: 'Architectural Shingles (Class 3)',
                    desc: 'GAF Timberline HDZ • WindProven™ Infinite Wind Warranty',
                    perks: 'Standard residential standard, high wind resistance'
                  },
                  {
                    id: 'class4',
                    name: 'Class 4 Impact Resistant Armor (Recommended for Texas)',
                    desc: 'SBS Polymer-Modified Core • Resists up to 2-inch hail stones',
                    perks: 'Eligible for up to 28% annual Texas insurance premium discount',
                    recommended: true
                  },
                  {
                    id: 'designer',
                    name: 'Ultra-Luxury Designer Shingles',
                    desc: 'CertainTeed Grand Manor / Slate Profile Laminates',
                    perks: 'Heavyweight architectural luxury, multi-dimensional shadowline'
                  },
                ].map((tier) => {
                  const isSelected = materialTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setMaterialTier(tier.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all relative ${
                        isSelected
                          ? 'border-copper-500 bg-copper-500/10 ring-1 ring-copper-500 shadow-sm'
                          : 'border-slate-900/10 hover:border-slate-900/20 bg-ivory-50/50'
                      }`}
                    >
                      {tier.recommended && (
                        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-copper-500 text-slate-950 px-2 py-0.5 rounded-full shadow-sm">
                          Texas Best Value
                        </span>
                      )}
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'border-copper-600 bg-copper-600 text-white' : 'border-graphite-200'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="font-display font-bold text-sm text-slate-900">
                            {tier.name}
                          </div>
                          <div className="text-xs text-graphite-300 mt-0.5">
                            {tier.desc}
                          </div>
                          <div className="text-[11px] text-emerald-700 font-medium mt-1">
                            ✓ {tier.perks}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Existing Layers */}
            <div>
              <label className="font-display font-bold text-sm text-slate-900 block mb-2">
                Existing Roof Layers to Tear Off
              </label>
              <div className="flex gap-4">
                {[1, 2].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setTearOffLayers(num)}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold border transition-all ${
                      tearOffLayers === num
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-ivory-50 border-slate-900/10 text-graphite-400 hover:border-slate-900/20'
                    }`}
                  >
                    {num} Existing Layer {num === 1 ? '(Standard)' : '(Double Tear-Off)'}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary & Estimate Output Column */}
          <div className="bg-slate-900 text-white p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold">
                    Turnkey Investment Range
                  </div>
                  <div className="text-xs text-sage-300 mt-0.5">
                    Includes all tear-off, materials, labor, and 50-year warranty
                  </div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-copper-500/20 border border-copper-500/30 flex items-center justify-center text-copper-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Main Price Numbers */}
              <div className="mb-6">
                <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                  ${lowEstimate.toLocaleString()} – ${highEstimate.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-sage-200">
                  <span className="font-semibold text-emerald-400">Or as low as ${monthlyLow}/mo</span>
                  <span className="text-sage-400">•</span>
                  <span>0% APR financing available</span>
                </div>
              </div>

              {/* Itemized Inclusions */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-white/10 mb-6 text-xs">
                <div className="font-mono uppercase text-copper-400 text-[11px] font-semibold border-b border-white/5 pb-2">
                  What This Turnkey Price Covers
                </div>
                <div className="flex justify-between text-sage-200">
                  <span>Full Tear-off & Plywood Inspection:</span>
                  <span className="text-white font-medium">Included</span>
                </div>
                <div className="flex justify-between text-sage-200">
                  <span>Ice & Water Shield in all Valleys:</span>
                  <span className="text-white font-medium">Included</span>
                </div>
                <div className="flex justify-between text-sage-200">
                  <span>Synthetic Breathable Underlayment:</span>
                  <span className="text-white font-medium">Included</span>
                </div>
                <div className="flex justify-between text-sage-200">
                  <span>New Aluminum Drip Edge & Flashings:</span>
                  <span className="text-white font-medium">Included</span>
                </div>
                <div className="flex justify-between text-sage-200">
                  <span>Continuous High-Flow Ridge Ventilation:</span>
                  <span className="text-white font-medium">Included</span>
                </div>
                <div className="flex justify-between text-sage-200">
                  <span>Full Magnetic Yard Nail Sweep:</span>
                  <span className="text-white font-medium">Included</span>
                </div>
                <div className="flex justify-between text-sage-200 border-t border-white/5 pt-2">
                  <span className="text-copper-300 font-semibold">50-Year Non-Prorated Warranty:</span>
                  <span className="text-copper-300 font-bold">Registered</span>
                </div>
              </div>

              {/* Insurance Discount Callout */}
              {materialTier === 'class4' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2.5 mb-6">
                  <TrendingDown className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Texas Homeowner Insurance Discount:</span> Class 4 shingles typically lower annual premiums by $600–$1,200/year in North Texas.
                  </div>
                </div>
              )}
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={() => onOpenEstimate(`Calculated Quote: ${homeSqFt} sq ft, ${currentTier.name}`)}
                className="w-full py-4 px-6 rounded-xl bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-sm tracking-wide shadow-lg hover:shadow-copper-glow transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Lock In This Estimate & Book Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-sage-400 mt-2.5">
                100% Free On-Site Measurement • Zero Obligation
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
