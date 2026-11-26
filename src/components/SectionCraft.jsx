import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, CheckCircle2, Crosshair, Eye, ShieldCheck, Cpu } from 'lucide-react';

export default function SectionCraft() {
  const [activeAnnotation, setActiveAnnotation] = useState(0);
  const [isBlueprintMode, setIsBlueprintMode] = useState(false);

  const annotations = [
    {
      id: 'valley',
      coord: { top: '38%', left: '26%' },
      tag: '01 // COPPER VALLEY CHANNEL',
      title: 'Aged Copper Valley Flashing',
      detail: '20-ounce cold-rolled copper sheets hand-braked into valleys. Resists expansion fatigue and eliminates leak points where dual roof slopes shed torrential water.',
      spec: '20 oz. ASTM B370 Architectural Copper',
      blueprint: 'WATER CONVERGENCE: 180 GPM // ZERO EXPOSED FASTENERS'
    },
    {
      id: 'nailing',
      coord: { top: '56%', left: '52%' },
      tag: '02 // FASTENER CALIBRATION',
      title: '6-Nail Mechanical Hurricane Schedule',
      detail: 'Every individual architectural shingle is mechanically anchored with six hot-dipped galvanized ring-shank nails driven flush through the reinforced nailing strip.',
      spec: '130 MPH Wind Warranty Fastener Pattern',
      blueprint: 'DEPTH TOLERANCE: ±0.06" // 300% SHEAR TENSILE RESISTANCE'
    },
    {
      id: 'decking',
      coord: { top: '22%', left: '68%' },
      tag: '03 // SUBSTRATE INTEGRITY',
      title: 'Solid 5/8" CDX Exterior Decking',
      detail: 'We never shingle over rotted, warped, or spongy plywood. Every sheet is walked, load-tested, and re-fastened with 8d spiral nails before underlayment application.',
      spec: 'APA Rated 5-Ply Exterior Fir CDX',
      blueprint: 'LIVE LOAD: 50 PSF // MAXIMUM DEFLECTION L/240'
    },
    {
      id: 'ridge',
      coord: { top: '15%', left: '42%' },
      tag: '04 // CONTINUOUS EXHAUST',
      title: 'High-Profile Ridge Cap Ventilation',
      detail: 'Sculpted architectural ridge caps installed over an external-baffle ventilation core. Exhausts 140°F attic heat to prevent premature shingle blistering from beneath.',
      spec: '18 sq. in. Net Free Airflow / Linear Foot',
      blueprint: 'THERMAL RESIDENTIAL VENTILATION // 1:300 NFA CODE STANDARD'
    }
  ];

  return (
    <section id="craft" className="py-24 sm:py-32 bg-carbon-950 text-chalk relative overflow-hidden border-t border-carbon-800">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        
        {/* Editorial Top Headline Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-carbon-800"
        >
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-900 border border-copper-500/50 text-[10px] font-mono tracking-widest text-copper-300 font-bold uppercase mb-4 shadow-copper-glow">
              <Cpu className="w-3.5 h-3.5 text-copper-400" />
              <span>SECTION 02 // FORENSIC CRAFTSMANSHIP</span>
            </div>
            <h2 className="font-serif italic font-normal text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.98] tracking-tight">
              Precision lives <br />
              <span className="font-sans font-black not-italic text-white">in the details.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              True architectural longevity is measured by what remains invisible beneath the finished shingle course. Every flashing transition, fastener angle, and waterproof boundary is executed with surgical rigor.
            </p>

            {/* Blueprint / Inspection Mode Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setIsBlueprintMode(!isBlueprintMode)}
                className={`px-4 py-2 border text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                  isBlueprintMode 
                    ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                    : 'bg-carbon-900 border-copper-500/60 text-copper-300 hover:bg-carbon-850'
                }`}
              >
                <Crosshair className="w-3.5 h-3.5 animate-pulse" />
                <span>{isBlueprintMode ? 'Disable Blueprint Schematic' : 'Enable Blueprint X-Ray Mode'}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Oversized Full-Width Photographic Craft Feature with Fine Technical Annotations */}
        <div className="relative w-full rounded-none overflow-hidden bg-carbon-950 border border-carbon-800 shadow-obsidian-lg">
          
          {/* Main Craftsmanship Photograph */}
          <div className="relative h-[480px] sm:h-[620px] lg:h-[720px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85"
              alt="Architectural Roofing Craftsmanship"
              className={`w-full h-full object-cover object-center filter transition-all duration-700 ${
                isBlueprintMode 
                  ? 'contrast-[1.3] brightness-75 invert hue-rotate-180' 
                  : 'contrast-[1.08] brightness-90'
              }`}
            />
            
            {/* Blueprint Schematic Grid Overlay when Active */}
            {isBlueprintMode && (
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none animate-in fade-in duration-500" />
            )}

            <div className="absolute inset-0 bg-carbon-950/20 pointer-events-none" />

            {/* Interactive Technical Pinpoint Markers */}
            {annotations.map((ann, idx) => {
              const isActive = activeAnnotation === idx;
              return (
                <div
                  key={ann.id}
                  style={{ top: ann.coord.top, left: ann.coord.left }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group"
                >
                  <button
                    onClick={() => setActiveAnnotation(idx)}
                    className="relative flex items-center justify-center cursor-pointer focus:outline-none"
                    aria-label={ann.title}
                  >
                    <span className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      isActive 
                        ? 'border-copper-400 bg-carbon-950 text-copper-400 scale-125 shadow-copper-glow ring-2 ring-copper-400/50' 
                        : isBlueprintMode
                          ? 'border-cyan-400 bg-carbon-950 text-cyan-300 hover:scale-110'
                          : 'border-chalk/80 bg-carbon-950/80 text-chalk hover:border-copper-400 hover:scale-110 backdrop-blur-sm'
                    }`}>
                      <span className="font-mono text-[10px] font-bold">0{idx + 1}</span>
                    </span>
                    <span className="absolute -inset-2 rounded-full border border-copper-400/40 animate-ping pointer-events-none" />
                  </button>
                </div>
              );
            })}

            {/* Blueprint Live Telemetry Floating Pill */}
            {isBlueprintMode && (
              <div className="absolute top-6 left-6 z-20 px-3.5 py-2 bg-carbon-950/90 border border-cyan-500/50 text-cyan-300 font-mono text-[11px] shadow-lg backdrop-blur-md">
                <span>CAD SCHEMATIC ACTIVE // TOLERANCE ±0.06"</span>
              </div>
            )}
          </div>

          {/* Bottom Technical Annotation Ribbon with Smooth Transition */}
          <div className="bg-carbon-900 border-t border-carbon-800 p-6 sm:p-8 text-chalk">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-9 min-h-[90px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAnnotation}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-9 gap-6 items-center w-full"
                  >
                    <div className="lg:col-span-4">
                      <span className="text-[10px] font-mono text-copper-400 uppercase tracking-widest block mb-1 font-bold">
                        {annotations[activeAnnotation].tag}
                      </span>
                      <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                        {annotations[activeAnnotation].title}
                      </h3>
                      <span className="text-[11px] font-mono text-stone-400 mt-1 block">
                        {isBlueprintMode ? annotations[activeAnnotation].blueprint : annotations[activeAnnotation].spec}
                      </span>
                    </div>

                    <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-carbon-800 lg:pl-6 pt-4 lg:pt-0">
                      <p className="text-xs sm:text-sm text-stone-200 font-sans leading-relaxed">
                        {annotations[activeAnnotation].detail}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="lg:col-span-3 flex items-center justify-end gap-2 border-t lg:border-t-0 border-carbon-800 pt-4 lg:pt-0">
                <div className="flex gap-1.5">
                  {annotations.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveAnnotation(idx)}
                      className={`h-1.5 transition-all cursor-pointer ${
                        activeAnnotation === idx ? 'w-8 bg-copper-400' : 'w-3 bg-carbon-700 hover:bg-stone-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
