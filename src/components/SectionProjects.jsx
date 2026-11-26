import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Eye, ArrowRight, X } from 'lucide-react';

export default function SectionProjects({ onOpenEstimate }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);

  const projects = [
    {
      id: 'prj-01',
      code: 'PRJ. 2025-01',
      title: 'Highland Park Tudor Estate',
      location: 'Highland Park, Dallas, TX',
      type: 'Complete Roof Replacement & Copper Valleys',
      material: 'GAF Timberline HDZ in Charcoal + 20 oz. Hand-Braked Copper',
      scope: 'Tear-off of 24-year-old storm-damaged 3-tab roof. Replaced 8 sheets compromised CDX plywood, installed 400 linear feet of self-adhering elastomeric ice/water barrier, and custom-fabricated copper drip edge.',
      duration: '2 Days On-Site',
      area: '48 Squares (4,800 sq ft)',
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
      span: 'lg:col-span-8',
      height: 'h-[440px] sm:h-[520px]'
    },
    {
      id: 'prj-02',
      code: 'PRJ. 2025-02',
      title: 'Southlake Modern Farmhouse',
      location: 'Southlake, TX',
      type: 'Class 4 Hail Fortification',
      material: 'CertainTeed NorthGate Class 4 SBS in Weathered Wood',
      scope: 'Post-hail event insurance restoration. Upgraded homeowner from brittle builder-grade shingles to Class 4 impact modified shingles, securing a 26% annual homeowners insurance reduction.',
      duration: '2 Days On-Site',
      area: '54 Squares (5,400 sq ft)',
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      span: 'lg:col-span-4',
      height: 'h-[440px] sm:h-[520px]'
    },
    {
      id: 'prj-03',
      code: 'PRJ. 2025-03',
      title: 'Stonebriar Creek Transitional',
      location: 'Frisco, TX',
      type: 'Emergency Wind Restoration',
      material: 'Owens Corning TruDefinition Duration Designer',
      scope: '75 MPH straight-line wind damage lifted south eave shingles. Deployed emergency tarping within 3 hours. Provided 4K drone photo matrix resulting in 100% full insurer replacement funding.',
      duration: '1 Day On-Site',
      area: '36 Squares (3,600 sq ft)',
      beforeImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=85',
      span: 'lg:col-span-4',
      height: 'h-[400px] sm:h-[480px]'
    },
    {
      id: 'prj-04',
      code: 'PRJ. 2025-04',
      title: 'Willow Bend Executive Residence',
      location: 'Plano, TX',
      type: 'Custom Standing Seam & Slate Composite',
      material: 'DaVinci Bellaforté Slate in Slate Black + Standing Seam Accents',
      scope: 'Complete architectural transformation replacing hail-cracked concrete tiles. Eliminated 18,000 lbs of dead-weight stress on trusses while elevating curb appeal and wind threshold to 110 MPH.',
      duration: '3 Days On-Site',
      area: '62 Squares (6,200 sq ft)',
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85',
      span: 'lg:col-span-8',
      height: 'h-[400px] sm:h-[480px]'
    }
  ];

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-carbon-900 text-chalk border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10"
        >
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-copper-400 uppercase block mb-3 font-bold">
              SECTION 05 // SELECTED PORTFOLIO
            </span>
            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-copper-200 leading-tight">
              Real American homes. <br />
              <span className="font-sans font-black not-italic text-white">Crafted to endure.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Every photograph depicts genuine craftsmanship executed by our in-house certified artisans across the Dallas-Fort Worth metroplex.
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Architectural Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((prj) => (
            <div
              key={prj.id}
              className={`${prj.span} group relative bg-carbon-950 border border-white/10 shadow-obsidian-lg hover:border-copper-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between`}
            >
              {/* Image Frame */}
              <div className={`relative ${prj.height} w-full overflow-hidden bg-carbon-950`}>
                <img
                  src={prj.afterImage}
                  alt={prj.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.88] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-chalk">
                  <span className="px-2.5 py-1 bg-carbon-950/90 backdrop-blur-md border border-white/10 text-stone-300">
                    {prj.code}
                  </span>
                  <span className="px-2.5 py-1 bg-copper-500/20 backdrop-blur-md border border-copper-400 text-copper-300 font-bold">
                    {prj.duration}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-chalk">
                  <div className="flex items-center gap-1.5 text-xs text-copper-400 font-mono mb-1 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-copper-400" />
                    <span>{prj.location}</span>
                  </div>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl leading-snug text-white">
                    {prj.title}
                  </h3>
                </div>
              </div>

              {/* Editorial Card Footer */}
              <div className="p-6 bg-carbon-950/95 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-copper-400 uppercase tracking-wider block font-bold">
                    {prj.type}
                  </span>
                  <p className="text-xs text-stone-300 font-sans line-clamp-1">
                    {prj.material}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedProject(prj);
                    setSliderPos(50);
                  }}
                  className="px-5 py-2.5 border border-white/20 text-stone-200 hover:bg-copper-500 hover:text-carbon-950 hover:border-copper-400 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer shadow-sm active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5 text-copper-400 group-hover:text-carbon-950" />
                  <span>Inspect Project</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Detailed Project Exploration & Split Slider */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon-950/85 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-carbon-950 border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Modal Top Bar */}
                <div className="p-6 bg-carbon-900 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-copper-400 uppercase tracking-widest block mb-1 font-bold">
                      {selectedProject.code} // {selectedProject.location}
                    </span>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-9 h-9 border border-white/20 flex items-center justify-center text-stone-300 hover:bg-copper-500 hover:text-carbon-950 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Before / After Slider Comparison */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-copper-400 font-bold">← PRE-RESTORATION STATE</span>
                      <span className="text-white font-bold">RIDGELINE COMPLETED ARCHITECTURAL ROOF →</span>
                    </div>

                    <div className="relative h-72 sm:h-96 w-full overflow-hidden select-none border border-white/10">
                      <img
                        src={selectedProject.afterImage}
                        alt="Completed Roof"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Before Image Clipped */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPos}%` }}
                      >
                        <img
                          src={selectedProject.beforeImage}
                          alt="Before Roof"
                          className="absolute inset-0 w-full h-full object-cover filter sepia-[0.3]"
                          style={{ width: '100%', minWidth: '100%' }}
                        />
                      </div>

                      {/* Split Line */}
                      <div
                        className="absolute top-0 bottom-0 w-[2px] bg-copper-400 cursor-ew-resize z-20 shadow-md"
                        style={{ left: `${sliderPos}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-copper-500 text-carbon-950 flex items-center justify-center font-bold text-xs shadow-lg">
                          ↔
                        </div>
                      </div>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPos}
                        onChange={(e) => setSliderPos(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                      />
                    </div>
                  </div>

                  {/* Scope Specifications */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-carbon-900 border border-white/10 text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-copper-400 uppercase block font-semibold">Material Specification</span>
                      <p className="font-bold text-white mt-0.5">{selectedProject.material}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-copper-400 uppercase block font-semibold">Project Scale</span>
                      <p className="font-bold text-white mt-0.5">{selectedProject.area}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-copper-400 uppercase block font-semibold">Installation Schedule</span>
                      <p className="font-bold text-white mt-0.5">{selectedProject.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-base text-white mb-1">Architectural Scope & Forensic Report</h4>
                    <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                      {selectedProject.scope}
                    </p>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-carbon-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-stone-400">
                    Commission a similar architectural assessment for your home:
                  </span>
                  <button
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onOpenEstimate(`Inquiry regarding ${title}`);
                    }}
                    className="px-6 py-2.5 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg active:scale-95"
                  >
                    Request Similar Estimate
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
