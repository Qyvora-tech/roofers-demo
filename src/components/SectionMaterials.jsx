import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Check, ShieldCheck } from 'lucide-react';

export default function SectionMaterials({ onOpenEstimate }) {
  const [selectedMaterialIndex, setSelectedMaterialIndex] = useState(0);

  const materials = [
    {
      code: 'MAT. 01',
      name: 'Class 4 Impact Architectural Shingles',
      brand: 'GAF Timberline HDZ / CertainTeed NorthGate SBS',
      idealFor: 'Texas Hail Alley & Extreme Thermal Cycling',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85',
      summary: 'Engineered with SBS polymer-modified asphalt that mimics high-density rubber, flexing under hail strikes up to 2 inches in diameter rather than shattering brittle fiberglass mats.',
      specs: [
        { label: 'Impact Test Standard', value: 'UL 2218 Class 4 (Maximum Rating)' },
        { label: 'Wind Resistance', value: '130 MPH WindProven™ Dual-Band Seal' },
        { label: 'Algae Protection', value: 'Copper-infused StainGuard Plus™' },
        { label: 'Insurance Impact', value: 'Qualifies for up to 28% annual Texas premium reduction' },
        { label: 'Expected Lifespan', value: '35–50 Years under active maintenance' }
      ]
    },
    {
      code: 'MAT. 02',
      name: 'Standing Seam Architectural Metal',
      brand: '24-Gauge Galvalume with Kynar 500® PVDF Finish',
      idealFor: 'Modern Residences, Architectural Accents, & Low Pitches',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
      summary: 'Fabricated on-site with concealed mechanical clips and 1.5-inch vertical seams. Eliminates thousands of exposed fastener holes where conventional metal panels eventually leak.',
      specs: [
        { label: 'Base Substrate', value: '24-Gauge Hot-Dipped Galvalume Steel' },
        { label: 'Finish System', value: 'Kynar 500 / Hylar 5000 70% PVDF Resin' },
        { label: 'Fastener System', value: 'Concealed Floating Expansion Clips' },
        { label: 'Solar Reflectance', value: 'Cool Roof Rating Council (CRRC) Certified' },
        { label: 'Expected Lifespan', value: '60–75+ Years with near-zero maintenance' }
      ]
    },
    {
      code: 'MAT. 03',
      name: 'Natural Hand-Split Western Red Cedar',
      brand: 'Certified #1 Grade Western Red Cedar Shakes',
      idealFor: 'Historic Preservations, Craftsman & Hill Country Estates',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1000&q=85',
      summary: 'Sourced from sustainable Pacific Northwest timber stands, hand-split to provide rich multi-dimensional shadowlines, natural thermal insulation, and exceptional wind resistance.',
      specs: [
        { label: 'Timber Grade', value: '#1 Certi-Split 100% Edge-Grain Heartwood' },
        { label: 'Treatment Option', value: 'Pressure-impregnated Class A Fire Retardant' },
        { label: 'Thermal Resistance', value: 'R-1.15 per inch natural insulating value' },
        { label: 'Environmental', value: '100% Biodegradable & carbon-negative harvest' },
        { label: 'Expected Lifespan', value: '30–45 Years when properly ventilated' }
      ]
    },
    {
      code: 'MAT. 04',
      name: 'Engineered Synthetic Slate Composite',
      brand: 'DaVinci Multi-Width Slate Composite',
      idealFor: 'Luxury Estates Requiring Slate Aesthetics Without Weight',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=85',
      summary: 'Molded from authentic natural slate tiles using virgin resins and state-of-the-art UV stabilizers. Delivers the authentic stone appearance at 1/3 the structural dead-load weight.',
      specs: [
        { label: 'Composition', value: 'Engineered virgin polymer composite' },
        { label: 'Weight Footprint', value: 'Only 330 lbs/square (no roof rafter reinforcement needed)' },
        { label: 'Impact & Fire', value: 'Class 4 Impact & Class A Fire Rated' },
        { label: 'Freeze-Thaw Resistance', value: 'Zero moisture absorption (impervious to freeze spalling)' },
        { label: 'Expected Lifespan', value: '50-Year Non-Prorated Limited Lifetime Warranty' }
      ]
    }
  ];

  const current = materials[selectedMaterialIndex];

  return (
    <section id="materials" className="py-24 sm:py-32 bg-limestone-200 text-carbon-800 border-t border-hairline">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-hairline"
        >
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-copper-500 uppercase block mb-3">
              SECTION 04 // MATERIAL SELECTION
            </span>
            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-carbon-900 leading-tight">
              Materials engineered <br />
              <span className="font-sans font-black not-italic text-carbon-900">for climate endurance.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-carbon-600 font-sans leading-relaxed">
              We exclusively install architectural-grade materials with verified manufacturer testing. No commodity 3-tab shortcuts or untested imports.
            </p>
          </div>
        </motion.div>

        {/* Material Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {materials.map((mat, idx) => {
            const isSelected = selectedMaterialIndex === idx;
            return (
              <button
                key={mat.code}
                onClick={() => setSelectedMaterialIndex(idx)}
                className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-carbon-900 text-chalk border-carbon-900 shadow-fine'
                    : 'bg-chalk text-carbon-800 border-hairline hover:border-stone-400 hover:bg-limestone-50'
                }`}
              >
                <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${
                  isSelected ? 'text-copper-400 font-bold' : 'text-stone-500'
                }`}>
                  {mat.code}
                </span>
                <div className="font-sans font-bold text-xs sm:text-sm leading-snug line-clamp-1">
                  {mat.name.split(' ')[0]} {mat.name.split(' ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Material Exploration Spread with Smooth Transitions */}
        <div className="bg-chalk border border-hairline shadow-editorial overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Close-Up Texture Photo (5 cols) */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto min-h-[360px] bg-carbon-950 overflow-hidden">
                <motion.img
                  src={current.image}
                  alt={current.name}
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover filter contrast-[1.04] brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-chalk">
                  <span className="text-[10px] font-mono text-copper-400 uppercase tracking-widest block mb-1">
                    GENUINE INSTALLATION SPEC
                  </span>
                  <div className="font-sans font-bold text-lg leading-tight">
                    {current.brand}
                  </div>
                </div>
              </div>

              {/* Detailed Verification Matrix (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-hairline mb-4">
                    <span className="text-[10px] font-mono text-copper-500 uppercase tracking-widest">
                      {current.code} // MATERIAL BRIEF
                    </span>
                    <span className="text-[11px] font-mono text-stone-500">
                      {current.idealFor}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-carbon-900 mb-3">
                    {current.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-carbon-700 font-sans leading-relaxed mb-6">
                    {current.summary}
                  </p>

                  {/* Technical Specifications Matrix */}
                  <div className="space-y-2.5 pt-2 border-t border-hairline">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-2">
                      VERIFIED TECHNICAL ATTRIBUTES
                    </span>
                    {current.specs.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-hairline text-xs gap-1">
                        <span className="font-mono text-stone-500 text-[11px]">{item.label}</span>
                        <span className="font-sans font-semibold text-carbon-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-500">
                    WANT PHYSICAL MATERIAL SAMPLES?
                  </span>
                  <button
                    onClick={() => onOpenEstimate(`Sample Kit Request: ${current.name}`)}
                    className="px-5 py-2.5 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Request Sample Kit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
