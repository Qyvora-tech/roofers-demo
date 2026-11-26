import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Percent, 
  Layers, 
  Info 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SectionCalculator({ onOpenEstimate }) {
  const [squareFootage, setSquareFootage] = useState(3200);
  const [pitchFactor, setPitchFactor] = useState(1.18); // Standard Gable
  const [selectedMaterial, setSelectedMaterial] = useState('sbs');
  const [replaceDecking, setReplaceDecking] = useState(false);
  const [copperValleys, setCopperValleys] = useState(true);

  const materials = [
    {
      id: 'arch',
      name: 'Class 3 Architectural Shingle',
      brand: 'GAF Timberline HDZ',
      basePricePerSq: 440,
      lifespan: '30–35 Yrs',
      insuranceDiscount: '8%–12%',
      tag: 'Classic Standard'
    },
    {
      id: 'sbs',
      name: 'Class 4 SBS Hail-Impact Modified',
      brand: 'CertainTeed NorthGate SBS',
      basePricePerSq: 580,
      lifespan: '40–50 Yrs',
      insuranceDiscount: 'Up to 28%',
      tag: '★ Texas Most Popular'
    },
    {
      id: 'metal',
      name: '24-Gauge Standing Seam Metal',
      brand: 'Kynar 500 Galvalume Steel',
      basePricePerSq: 960,
      lifespan: '60–75 Yrs',
      insuranceDiscount: 'Up to 30%',
      tag: 'Modern Architectural'
    },
    {
      id: 'slate',
      name: 'DaVinci Engineered Synthetic Slate',
      brand: 'DaVinci Multi-Width Composite',
      basePricePerSq: 1280,
      lifespan: '50-Year Non-Prorated',
      insuranceDiscount: 'Up to 26%',
      tag: 'Ultra-Luxury Profile'
    }
  ];

  const pitchOptions = [
    { label: 'Low-Slope / Walkable', factor: 1.05, desc: 'Pitch 4:12' },
    { label: 'Standard Gable / Hip', factor: 1.18, desc: 'Pitch 6:12 – 8:12' },
    { label: 'Steep Luxury Chateau', factor: 1.35, desc: 'Pitch 10:12 – 14:12+' },
  ];

  // Financial Computations
  const calculations = useMemo(() => {
    // 1 roofing square = 100 sq ft of surface
    const totalRoofArea = squareFootage * pitchFactor;
    const squares = Math.round(totalRoofArea / 100);

    const activeMat = materials.find(m => m.id === selectedMaterial) || materials[1];
    let cost = squares * activeMat.basePricePerSq;

    if (replaceDecking) cost += squares * 65;
    if (copperValleys) cost += 1400;

    const lowEstimate = Math.round(cost * 0.94);
    const highEstimate = Math.round(cost * 1.06);

    // 120-month financing calculation at 8.99% or promo
    const monthlyPayment = Math.round((cost * 0.0125));

    // Home equity value boost (NAR Cost vs Value 2025: avg 65-82% ROI added to appraisal)
    const equityBoost = Math.round(cost * 1.25);

    // Annual Texas insurance premium discount
    const annualInsuranceSavings = 
      selectedMaterial === 'sbs' ? 740 :
      selectedMaterial === 'metal' ? 820 :
      selectedMaterial === 'slate' ? 680 : 250;

    return {
      squares,
      lowEstimate,
      highEstimate,
      average: cost,
      monthlyPayment,
      equityBoost,
      annualInsuranceSavings,
      materialName: activeMat.name
    };
  }, [squareFootage, pitchFactor, selectedMaterial, replaceDecking, copperValleys]);

  const handleLockEstimate = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C88256', '#D5A282', '#FFFFFF', '#0B0E0F']
      });
    } catch (e) {}

    const details = `Estimated Investment Scope: $${calculations.lowEstimate.toLocaleString()} - $${calculations.highEstimate.toLocaleString()} (${calculations.materialName}, ${calculations.squares} Squares, ${squareFootage} sq ft)`;
    onOpenEstimate(details);
  };

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-carbon-900 text-chalk relative border-t border-carbon-800">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        
        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-carbon-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-950 border border-copper-500/50 text-[10px] font-mono tracking-widest text-copper-300 font-bold uppercase mb-4 shadow-copper-glow">
              <Calculator className="w-3.5 h-3.5 text-copper-400" />
              <span>TRANSPARENT ARCHITECTURAL SCOPE // ZERO SALES PRESSURE</span>
            </div>

            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-white leading-tight">
              Invest with clarity. <br />
              <span className="font-sans font-black not-italic text-white">Measure every dollar.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              No hidden contractor markups or generic lump-sum quotes. Adjust square footage, architectural slope, and material tiers below for real-time turnkey cost, equity, and Texas insurance analytics.
            </p>
          </div>
        </div>

        {/* 2-Column Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Sliders & Toggles (7 cols) */}
          <div className="lg:col-span-7 bg-carbon-950 border border-carbon-800 p-6 sm:p-10 shadow-obsidian-lg space-y-8">
            
            {/* 1. Square Footage Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-widest text-stone-300 flex items-center gap-2">
                  <span>01 // RESIDENTIAL FOOTPRINT</span>
                </label>
                <div className="text-right">
                  <span className="font-sans font-black text-2xl sm:text-3xl text-white">
                    {squareFootage.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-copper-400 ml-1.5">SQ FT</span>
                </div>
              </div>

              <input
                type="range"
                min="1400"
                max="6500"
                step="50"
                value={squareFootage}
                onChange={(e) => setSquareFootage(Number(e.target.value))}
                className="w-full h-2 bg-carbon-800 rounded-lg appearance-none cursor-pointer accent-copper-500"
              />

              <div className="flex justify-between text-[10px] font-mono text-stone-500 mt-2">
                <span>1,400 SQ FT (Cottage)</span>
                <span>3,500 SQ FT (Standard DFW)</span>
                <span>6,500 SQ FT (Estate)</span>
              </div>
            </div>

            {/* 2. Roof Pitch Multiplier */}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-stone-300 block mb-3">
                02 // ROOF SLOPE & PITCH COMPLEXITY
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {pitchOptions.map((opt) => {
                  const isSelected = pitchFactor === opt.factor;
                  return (
                    <button
                      key={opt.factor}
                      onClick={() => setPitchFactor(opt.factor)}
                      className={`p-3.5 text-left border transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-copper-500 text-carbon-950 border-copper-400 font-bold shadow-md'
                          : 'bg-carbon-900 text-stone-300 border-carbon-800 hover:border-copper-500/50'
                      }`}
                    >
                      <div className="text-xs font-sans font-bold">{opt.label}</div>
                      <div className="text-[10px] font-mono opacity-80 mt-0.5">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Material System Tier */}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-stone-300 block mb-3">
                03 // ARCHITECTURAL MATERIAL SYSTEM
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {materials.map((mat) => {
                  const isSelected = selectedMaterial === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat.id)}
                      className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-carbon-900 border-copper-400 shadow-copper-glow ring-1 ring-copper-400'
                          : 'bg-carbon-900/60 border-carbon-800 hover:border-stone-600'
                      }`}
                    >
                      <div>
                        <span className="text-[9px] font-mono text-copper-400 uppercase tracking-widest block mb-1">
                          {mat.tag}
                        </span>
                        <div className="font-sans font-bold text-sm text-white">
                          {mat.name}
                        </div>
                        <div className="text-[11px] font-mono text-stone-400 mt-1">
                          {mat.brand}
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-carbon-800 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-stone-400">Lifespan: {mat.lifespan}</span>
                        <span className="text-emerald-400 font-bold">{mat.insuranceDiscount} Ins. Off</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Fortification Options */}
            <div className="pt-2 border-t border-carbon-800 space-y-3">
              <label className="text-xs font-mono uppercase tracking-widest text-stone-300 block">
                04 // STRUCTURAL FORTIFICATIONS
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 bg-carbon-900 border border-carbon-800 cursor-pointer hover:border-carbon-700">
                  <input
                    type="checkbox"
                    checked={replaceDecking}
                    onChange={(e) => setReplaceDecking(e.target.checked)}
                    className="w-4 h-4 rounded accent-copper-500 cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-sans font-bold text-white block">Full CDX Plywood Resheet</span>
                    <span className="text-[10px] font-mono text-stone-400">New 5/8" fir exterior decking</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-carbon-900 border border-carbon-800 cursor-pointer hover:border-carbon-700">
                  <input
                    type="checkbox"
                    checked={copperValleys}
                    onChange={(e) => setCopperValleys(e.target.checked)}
                    className="w-4 h-4 rounded accent-copper-500 cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-sans font-bold text-white block">20 oz. Copper Valleys</span>
                    <span className="text-[10px] font-mono text-stone-400">Hand-braked lifelong copper</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Computing Analytics & Financial Dashboard (5 cols) */}
          <div className="lg:col-span-5 bg-carbon-950 border border-copper-500/40 p-6 sm:p-8 shadow-obsidian-lg flex flex-col justify-between space-y-6">
            
            {/* Top Scope Card */}
            <div>
              <span className="text-[10px] font-mono text-copper-400 uppercase tracking-widest block mb-2 font-bold">
                ESTIMATED TURNKEY INVESTMENT RANGE
              </span>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  ${calculations.lowEstimate.toLocaleString()}
                </span>
                <span className="text-lg font-serif italic text-stone-400">to</span>
                <span className="font-sans font-black text-2xl sm:text-3xl text-copper-300">
                  ${calculations.highEstimate.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-stone-400 pb-4 border-b border-carbon-800">
                <span>Calculated for {calculations.squares} Squares</span>
                <span>•</span>
                <span>All Labor & Materials Included</span>
              </div>
            </div>

            {/* 3 High-Impact Financial ROI Metrics */}
            <div className="space-y-3">
              
              {/* Zero-Down Financing */}
              <div className="p-4 bg-carbon-900 border border-carbon-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-copper-400 tracking-wider block font-bold">
                    $0 DOWN FINANCING PROJECTION
                  </span>
                  <div className="text-xs text-stone-300 mt-0.5">
                    As low as with approved credit
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-sans font-black text-xl text-white">
                    ${calculations.monthlyPayment}/mo
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">0% APR 24-Mo Promo</span>
                </div>
              </div>

              {/* Texas Insurance Annual Savings */}
              <div className="p-4 bg-carbon-900 border border-carbon-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider block font-bold">
                    TEXAS ANNUAL INSURANCE REBATE
                  </span>
                  <div className="text-xs text-stone-300 mt-0.5">
                    Class 4 impact certified reduction
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-sans font-black text-xl text-emerald-400">
                    -${calculations.annualInsuranceSavings}/yr
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">Every Year Ongoing</span>
                </div>
              </div>

              {/* Home Resale Equity Appreciation */}
              <div className="p-4 bg-carbon-900 border border-carbon-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider block font-bold">
                    ESTIMATED RESALE VALUE BOOST
                  </span>
                  <div className="text-xs text-stone-300 mt-0.5">
                    Based on NAR Appraisal ROI index
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-sans font-black text-xl text-copper-300">
                    +${calculations.equityBoost.toLocaleString()}
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">Immediate Equity Lift</span>
                </div>
              </div>

            </div>

            {/* Lock In Estimate Action Button */}
            <div className="pt-2">
              <button
                onClick={handleLockEstimate}
                className="w-full py-4 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-copper-glow active:scale-98"
              >
                <span>Lock In This Scope & Book Drone Flight</span>
                <ArrowRight className="w-4 h-4 text-carbon-950" />
              </button>
              
              <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-stone-400 mt-3">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-copper-400" />
                  100% Written Guarantee
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-copper-400" />
                  Zero Upfront Deposit Required
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
