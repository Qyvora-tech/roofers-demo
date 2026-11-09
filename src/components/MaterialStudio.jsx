import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Shield, Clock, Flame, ArrowRight, Package } from 'lucide-react';
import { ROOFING_MATERIALS } from '../data/roofingData';

export default function MaterialStudio({ onOpenLeadModal }) {
  const [selectedMaterial, setSelectedMaterial] = useState(ROOFING_MATERIALS[0]);
  const [selectedColor, setSelectedColor] = useState(ROOFING_MATERIALS[0].popularColors[0]);

  const handleSelectMaterial = (mat) => {
    setSelectedMaterial(mat);
    setSelectedColor(mat.popularColors[0]);
  };

  return (
    <section id="materials" className="py-24 sm:py-32 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
              Signature Materials Showroom
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Engineered for Generational Longevity
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light pt-1">
              Select a system below to inspect wind resistance ratings, hail impact resilience, and architectural finishes. Every roof is installed exclusively by in-house master craftsmen.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal('Material Kit Request')}
            className="self-start md:self-auto px-5 py-3 rounded bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 hover:text-white text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 shadow-soft"
          >
            <Package className="w-4 h-4 text-copper-400" />
            <span>Order Physical Sample Kit</span>
          </button>
        </div>

        {/* System Selector Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar border-b border-slate-800">
          {ROOFING_MATERIALS.map((mat) => {
            const isSelected = selectedMaterial.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => handleSelectMaterial(mat)}
                className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
                  isSelected
                    ? 'border-copper-500 text-copper-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {mat.name.split(' ')[0]} {mat.name.split(' ')[1]}
              </button>
            );
          })}
        </div>

        {/* Selected Material Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMaterial.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-850 rounded-2xl border border-slate-750 p-6 sm:p-10 shadow-medium"
          >
            {/* Visual Photo & Color Picker (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 shadow-sm">
                <img
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover filter brightness-[0.98]"
                />
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded text-xs text-white font-medium border border-slate-750">
                  {selectedMaterial.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-slate-750 shadow-sm">
                  <span className="text-slate-400 font-medium">Estimated Installed Scope</span>
                  <span className="font-bold text-copper-400">${selectedMaterial.baseCostPerSq} / Square</span>
                </div>
              </div>

              {/* Color Swatch Selection */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-750 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span>Curated Architectural Finishes:</span>
                  <span className="font-bold text-white">{selectedColor}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedMaterial.popularColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedColor === color
                          ? 'bg-copper-500 text-white shadow-sm'
                          : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Spec Details (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-copper-400 uppercase tracking-wider">
                  {selectedMaterial.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedMaterial.name}
                </h3>
                <p className="text-sm text-slate-300 font-light mt-3 leading-relaxed">
                  {selectedMaterial.description}
                </p>
              </div>

              {/* 4 Performance Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-750 space-y-1">
                  <div className="flex items-center gap-1.5 text-copper-400 text-xs font-semibold">
                    <Wind className="w-4 h-4" />
                    <span>Wind Uplift</span>
                  </div>
                  <div className="text-xl font-bold text-white">{selectedMaterial.windRating}</div>
                  <div className="text-[11px] text-slate-400">ASTM Hurricane Uplift Rated</div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-750 space-y-1">
                  <div className="flex items-center gap-1.5 text-copper-400 text-xs font-semibold">
                    <Shield className="w-4 h-4" />
                    <span>Hail & Impact</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    {selectedMaterial.impactRating.split(' ')[0]} {selectedMaterial.impactRating.split(' ')[1]}
                  </div>
                  <div className="text-[11px] text-slate-400">Insurance Discount Eligible</div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-750 space-y-1">
                  <div className="flex items-center gap-1.5 text-copper-400 text-xs font-semibold">
                    <Flame className="w-4 h-4" />
                    <span>Fire Rating</span>
                  </div>
                  <div className="text-xl font-bold text-white">{selectedMaterial.fireRating}</div>
                  <div className="text-[11px] text-slate-400">Class A Non-Combustible</div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-750 space-y-1">
                  <div className="flex items-center gap-1.5 text-copper-400 text-xs font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Design Lifespan</span>
                  </div>
                  <div className="text-xl font-bold text-white">{selectedMaterial.lifespan}</div>
                  <div className="text-[11px] text-slate-400">50-Year Non-Prorated Warranty</div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenLeadModal(`Quote Request for ${selectedMaterial.name}`)}
                  className="w-full py-4 rounded bg-copper-500 hover:bg-copper-600 text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Select for Your Home Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
