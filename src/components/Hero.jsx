import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calculator, ShieldCheck, CheckCircle2, Award, MapPin } from 'lucide-react';
import { STATS } from '../data/roofingData';

const HERO_SLIDES = [
  {
    id: 1,
    title: 'Architectural Standing Seam Metal',
    location: 'Highland Park Estate • Dallas, TX',
    specs: '24-Gauge Galvalume • 165 MPH Wind Rated • Class 4 Hail Resilient',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85',
    lifespan: '70+ Year Operational Life'
  },
  {
    id: 2,
    title: 'Hand-Split Western Red Cedar Shake',
    location: 'Alpine Timber Chalet • Vail / Aspen, CO',
    specs: 'Old-Growth Pacific Northwest Timber • Natural Thermal R-Value • Fire Class A',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=85',
    lifespan: '50-Year Transferable Warranty'
  },
  {
    id: 3,
    title: 'Heritage Heavyweight Designer Slate & Shingle',
    location: 'Belle Meade Colonial Manor • Nashville, TN',
    specs: 'Triple-Layer Polymer Matrix • SBS Rubberized Impact Core • Golden Pledge®',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=85',
    lifespan: '50-Year Non-Prorated Warranty'
  }
];

export default function Hero({ onOpenLeadModal, onScrollToCalculator }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[88vh] flex items-center bg-slate-950 overflow-hidden">
      
      {/* Background Cinematic Slide with Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.08]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Clean Vignette Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Headline & Action (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-750 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                GAF Master Elite® Contractor • Top 2% in North America
              </span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Architectural Precision. <br />
                <span className="text-copper-gradient italic font-normal">Master-Grade Roofing</span> Built for Generations.
              </h1>
            </div>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              We engineer America's most resilient Standing Seam Metal, Hand-Split Western Red Cedar, and Vermont Slate roofs. Backed by a non-prorated <span className="text-white font-semibold">50-year manufacturer warranty</span> and full storm insurance claim advocacy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onScrollToCalculator}
                className="px-7 py-4 rounded bg-copper-500 hover:bg-copper-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-copper-glow flex items-center justify-center gap-3 group"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your Instant Roof Cost</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenLeadModal('Hero Video CTA')}
                className="px-6 py-4 rounded bg-slate-900/80 hover:bg-slate-850 text-white font-semibold text-xs uppercase tracking-wider border border-slate-700 hover:border-slate-500 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <span>Free 21-Pt 4K Drone Scan</span>
              </button>
            </div>

            {/* Micro Trust Signals */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Down Payment Financing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>$5M Master Liability Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Class 4 Impact Certified (Insurance Discount)</span>
              </div>
            </div>

          </div>

          {/* Right Floating Project Showcase Card (4 cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-6 shadow-elevated space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                <span className="text-copper-400 font-semibold uppercase tracking-wider">Featured Installation</span>
                <span className="bg-emerald-950/80 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-emerald-900/60">
                  Verified Project
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {slide.title}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-copper-400" />
                  {slide.location}
                </p>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded border border-slate-800 text-xs text-slate-300 leading-relaxed font-light">
                {slide.specs}
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800 text-slate-400">
                <span>Warranty:</span>
                <span className="font-semibold text-copper-300">{slide.lifespan}</span>
              </div>

              {/* Slide Switcher */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-[11px] text-slate-500">
                  Specimen {currentSlide + 1} of {HERO_SLIDES.length}
                </div>
                <div className="flex gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-6 bg-copper-400' : 'w-2 bg-slate-700'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Stat Ledger */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
