import React, { useState } from 'react';
import { Calculator, Download, ArrowRight, ShieldCheck, Home, Sliders, TrendingUp, DollarSign } from 'lucide-react';
import { ROOFING_MATERIALS } from '../data/roofingData';

export default function InstantCostEstimator({ onOpenLeadModal }) {
  const [roofSqFt, setRoofSqFt] = useState(2800);
  const [pitchFactor, setPitchFactor] = useState(1.15);
  const [selectedMaterialId, setSelectedMaterialId] = useState(ROOFING_MATERIALS[0].id);
  const [hasTearOff, setHasTearOff] = useState(true);
  const [hasStormDamage, setHasStormDamage] = useState(true);

  const selectedMaterial = ROOFING_MATERIALS.find(m => m.id === selectedMaterialId) || ROOFING_MATERIALS[0];

  const squares = Math.round((roofSqFt * pitchFactor) / 100);
  const materialCost = squares * selectedMaterial.baseCostPerSq;
  const tearOffCost = hasTearOff ? squares * 85 : 0;
  const underlaymentAndShield = squares * 65;
  const totalBase = materialCost + tearOffCost + underlaymentAndShield;

  const lowEst = Math.round((totalBase * 0.92) / 100) * 100;
  const highEst = Math.round((totalBase * 1.08) / 100) * 100;
  const monthlyFinance = Math.round(lowEst * 0.0121);
  const equityBoost = Math.round(totalBase * 0.72);
  const annualInsuranceSavings = selectedMaterial.impactRating.includes('Class 4') ? 950 : 350;

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
            Transparent Pricing Engine
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Instant Roof Cost & ROI Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            No aggressive salesperson visits or vague estimates. Configure your property parameters below for real-time cost brackets, insurance offsets, and equity returns.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-850 border border-slate-750 rounded-2xl p-6 sm:p-8 space-y-8 shadow-medium">
            
            {/* Step 1: Roof Size Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <Home className="w-4 h-4 text-copper-400" />
                  <span>1. Roof Area (Square Footage)</span>
                </label>
                <div className="text-right">
                  <span className="text-2xl font-bold font-serif text-white">{roofSqFt.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 ml-1">sq ft ({squares} squares)</span>
                </div>
              </div>

              <input
                type="range"
                min="1200"
                max="6500"
                step="100"
                value={roofSqFt}
                onChange={(e) => setRoofSqFt(Number(e.target.value))}
                className="w-full cursor-pointer"
              />

              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>Cottage (1,200 sq ft)</span>
                <span>Suburban (2,800 sq ft)</span>
                <span>Estate (6,500 sq ft)</span>
              </div>
            </div>

            {/* Step 2: Pitch & Slope */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-copper-400" />
                <span>2. Roof Pitch & Architectural Slope</span>
              </label>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Walkable / Low', factor: 1.05, desc: '4:12 Pitch' },
                  { label: 'Standard Gable', factor: 1.15, desc: '6:12 - 8:12' },
                  { label: 'Steep / Chateau', factor: 1.35, desc: '10:12+ Slope' },
                ].map((pitch) => (
                  <button
                    key={pitch.label}
                    onClick={() => setPitchFactor(pitch.factor)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      pitchFactor === pitch.factor
                        ? 'border-copper-500 bg-copper-500/10 text-white shadow-sm'
                        : 'border-slate-750 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-xs text-white">{pitch.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{pitch.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Preference */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-copper-400" />
                <span>3. Selected Material System</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ROOFING_MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMaterialId(m.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between gap-2 ${
                      selectedMaterialId === m.id
                        ? 'border-copper-500 bg-copper-500/10 shadow-sm'
                        : 'border-slate-750 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs text-white">{m.name}</div>
                      <div className="text-[11px] text-slate-400">{m.category}</div>
                    </div>
                    <span className="text-xs font-bold text-copper-400 shrink-0">
                      ${m.baseCostPerSq}/sq
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Tear-Off & Storm Damage Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <label className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-750 cursor-pointer hover:border-slate-700 transition-colors">
                <input
                  type="checkbox"
                  checked={hasTearOff}
                  onChange={(e) => setHasTearOff(e.target.checked)}
                  className="w-4 h-4 rounded text-copper-500 accent-copper-500 focus:ring-0"
                />
                <span className="text-xs text-slate-300">
                  <span className="font-bold text-white block">Full Decking Tear-Off</span>
                  <span className="text-[11px] text-slate-400">Strip old shingles & inspect plywood</span>
                </span>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-750 cursor-pointer hover:border-slate-700 transition-colors">
                <input
                  type="checkbox"
                  checked={hasStormDamage}
                  onChange={(e) => setHasStormDamage(e.target.checked)}
                  className="w-4 h-4 rounded text-copper-500 accent-copper-500 focus:ring-0"
                />
                <span className="text-xs text-slate-300">
                  <span className="font-bold text-emerald-400 block">Storm Damage Insurance Claim</span>
                  <span className="text-[11px] text-slate-400">Carrier covers cost minus deductible</span>
                </span>
              </label>
            </div>

          </div>

          {/* Right Scope Summary (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 text-slate-100 rounded-2xl p-6 sm:p-8 space-y-6 shadow-elevated border border-slate-800">
            <div className="border-b border-slate-800 pb-6 space-y-1">
              <span className="text-xs font-bold text-copper-400 uppercase tracking-wider">
                Estimated Project Scope
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-white pt-1">
                ${lowEst.toLocaleString()} — ${highEst.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 font-medium pt-1">
                Zero Down Financing Option: From ${monthlyFinance} / month
              </div>
            </div>

            {/* Insurance Supplement Callout */}
            {hasStormDamage && (
              <div className="bg-emerald-950/60 border border-emerald-800/80 p-4 rounded-xl text-xs space-y-1">
                <div className="font-bold text-emerald-400">
                  Eligible for 100% Insurance Replacement
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Under Texas, Colorado, and regional storm statutes, homeowner liability is strictly limited to your legal policy deductible (typically \$1,000 to \$2,500).
                </p>
              </div>
            )}

            {/* Breakdown Benefits */}
            <div className="space-y-3 text-xs border-t border-slate-800 pt-4">
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-copper-400" />
                  <span>Home Resale Equity Boost:</span>
                </span>
                <span className="font-bold text-white">+${equityBoost.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-copper-400" />
                  <span>Class 4 Insurance Policy Discount:</span>
                </span>
                <span className="font-bold text-emerald-400">Up to -${annualInsuranceSavings} / year</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Manufacturer Warranty:</span>
                <span className="font-bold text-white">50-Year Non-Prorated</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenLeadModal(`Estimator Quote: $${lowEst.toLocaleString()} - $${highEst.toLocaleString()} (${selectedMaterial.name})`)}
                className="w-full py-4 rounded bg-copper-500 hover:bg-copper-600 text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-copper-glow"
              >
                <Download className="w-4 h-4" />
                <span>Lock In Estimate & Download Scope</span>
              </button>
              <div className="text-center text-[11px] text-slate-500 mt-2">
                *Estimate locked for 30 days. Backed directly by GAF and Owens Corning.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
