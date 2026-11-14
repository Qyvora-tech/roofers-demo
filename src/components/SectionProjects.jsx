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
      afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      span: 'lg:col-span-4',
      height: 'h-[400px] sm:h-[480px]'
    },
    {
      id: 'prj-04',
      code: 'PRJ. 2025-04',
      title: 'Willow Bend Provincial Residence',
      location: 'Plano, TX',
      type: 'Luxury Slate Profile & Seamless Gutters',
      material: 'DaVinci Engineered Slate Composite & Real Copper Eavestroughs',
      scope: 'Multi-angled 10/12 pitch roofline. Installed multi-width composite slate tiles paired with continuous 6-inch solid copper half-round gutters and round downspouts.',
      duration: '3 Days On-Site',
      area: '62 Squares (6,200 sq ft)',
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85',
      span: 'lg:col-span-8',
      height: 'h-[400px] sm:h-[480px]'
    }
  ];

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-chalk text-carbon-800 border-t border-hairline">
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
              SECTION 05 // SELECTED PORTFOLIO
            </span>
            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-carbon-900 leading-tight">
              Real American homes. <br />
              <span className="font-sans font-black not-italic text-carbon-900">Crafted to endure.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-carbon-600 font-sans leading-relaxed">
              Every photograph depicts genuine craftsmanship executed by our in-house certified artisans across the Dallas-Fort Worth metroplex.
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Architectural Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((prj) => (
            <div
              key={prj.id}
              className={`${prj.span} group relative bg-limestone-100 border border-hairline shadow-fine hover:shadow-editorial transition-all duration-300 overflow-hidden flex flex-col justify-between`}
            >
              {/* Image Frame */}
              <div className={`relative ${prj.height} w-full overflow-hidden bg-carbon-950`}>
                <img
                  src={prj.afterImage}
                  alt={prj.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-chalk">
                  <span className="px-2.5 py-1 bg-carbon-950/80 backdrop-blur-sm border border-carbon-700">
                    {prj.code}
                  </span>
                  <span className="px-2.5 py-1 bg-carbon-950/80 backdrop-blur-sm border border-carbon-700 text-copper-400">
                    {prj.duration}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-chalk">
                  <div className="flex items-center gap-1.5 text-xs text-copper-300 font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5 text-copper-400" />
                    <span>{prj.location}</span>
                  </div>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl leading-snug">
                    {prj.title}
                  </h3>
                </div>
              </div>

              {/* Editorial Card Footer */}
              <div className="p-6 bg-chalk border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                    {prj.type}
                  </span>
                  <p className="text-xs text-carbon-700 font-sans line-clamp-1">
                    {prj.material}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedProject(prj);
                    setSliderPos(50);
                  }}
                  className="px-4 py-2 border border-carbon-800 text-carbon-900 hover:bg-carbon-900 hover:text-chalk text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-copper-500" />
                  <span>Inspect Project</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Detailed Project Exploration & Split Slider with Smooth Spring Transition */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon-950/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-chalk border border-hairline max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Modal Top Bar */}
                <div className="p-6 bg-limestone-200 border-b border-hairline flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-copper-500 uppercase tracking-widest block mb-1">
                      {selectedProject.code} // {selectedProject.location}
                    </span>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-carbon-900">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-9 h-9 border border-carbon-800 flex items-center justify-center text-carbon-900 hover:bg-carbon-900 hover:text-chalk transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Before / After Slider Comparison */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-copper-600 font-bold">← PRE-RESTORATION STATE</span>
                      <span className="text-carbon-900 font-bold">RIDGELINE COMPLETED ARCHITECTURAL ROOF →</span>
                    </div>

                    <div className="relative h-72 sm:h-96 w-full overflow-hidden select-none border border-hairline">
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
                        className="absolute top-0 bottom-0 w-[2px] bg-chalk cursor-ew-resize z-20 shadow-md"
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-limestone-200 border border-hairline text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-copper-500 uppercase block font-semibold">Material Specification</span>
                      <p className="font-bold text-carbon-900 mt-0.5">{selectedProject.material}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-copper-500 uppercase block font-semibold">Project Scale</span>
                      <p className="font-bold text-carbon-900 mt-0.5">{selectedProject.area}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-copper-500 uppercase block font-semibold">Installation Schedule</span>
                      <p className="font-bold text-carbon-900 mt-0.5">{selectedProject.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-base text-carbon-900 mb-1">Architectural Scope & Forensic Report</h4>
                    <p className="text-xs sm:text-sm text-carbon-700 font-sans leading-relaxed">
                      {selectedProject.scope}
                    </p>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-limestone-200 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-carbon-600">
                    Commission a similar architectural assessment for your home:
                  </span>
                  <button
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onOpenEstimate(`Inquiry regarding ${title}`);
                    }}
                    className="px-6 py-2.5 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
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
