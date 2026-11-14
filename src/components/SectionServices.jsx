import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function SectionServices({ onOpenEstimate }) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const services = [
    {
      code: '01',
      title: 'Roof Replacement',
      subtitle: 'Complete 6-Layer Architectural Overhaul',
      tagline: 'Engineered for half a century of North Texas thermal and storm stress.',
      description: 'We strip down to bare decking, replace compromised plywood, install continuous ice and water barriers in valleys, and hand-calibrate Class 4 impact shingles with factory-certified 6-nail fastening.',
      deliverables: [
        'Full tear-off to clean 5/8" CDX plywood substrate',
        'Elastomeric self-healing membranes in valleys & penetrations',
        'Class 4 impact-rated composite shingles (insurance discount eligible)',
        'GAF Golden Pledge® 50-year non-prorated manufacturer warranty'
      ],
      timeframe: '1–2 Days Execution',
      warranty: '50-Year Non-Prorated',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      caption: 'Highland Park residential estate replacement with Class 4 charcoal shingles.'
    },
    {
      code: '02',
      title: 'Precision Roof Repair',
      subtitle: 'Targeted Diagnostics Without Pushing Replacement',
      tagline: 'When 5 to 10 years of roof life remains, we isolate and cure the leak.',
      description: 'Not every roof requires replacement. Our diagnostic specialists utilize moisture meters and thermal cameras to identify the exact water pathway through chimneys, skylights, or valleys without sales games.',
      deliverables: [
        'Chimney step and counter-flashing rebuilds',
        'Lead pipe collar boot resets with elastomeric seals',
        'Wind-lifted and fractured shingle course splicing',
        'Full attic moisture inspection to verify dry-in'
      ],
      timeframe: 'Same-Day / 24-Hr Dispatch',
      warranty: '5-Year Workmanship',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      caption: 'Precision valley re-flashing and localized shingle restoration.'
    },
    {
      code: '03',
      title: 'Storm Restoration',
      subtitle: 'Insurance Claim Advocacy & Forensic Documentation',
      tagline: 'Independent forensic evidence that adjusters cannot dismiss.',
      description: 'Texas spring hail storms fracture shingle mats invisibly. We compile a 4K drone image matrix cataloging impact points and attend on-site adjuster meetings to protect the full scope of your claim.',
      deliverables: [
        'High-resolution aerial 4K drone impact mapping',
        'Direct on-roof representation during adjuster evaluation',
        'Emergency 4-hour rapid waterproof tarping dispatch',
        'Zero out-of-pocket beyond your standard insurance deductible'
      ],
      timeframe: 'Rapid Emergency Response',
      warranty: 'Full Manufacturer Coverage',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1200&q=85',
      caption: 'Frisco storm damage restoration following 1.75-inch hail impact.'
    },
    {
      code: '04',
      title: 'Roof Inspections',
      subtitle: '25-Point Thermal & Structural Assessment',
      tagline: 'An objective health certificate for your home overhead.',
      description: 'No ladder-sales pressure. Receive an honest, objective digital condition report complete with drone photographs, attic decking temperature scans, remaining lifespan calculation, and maintenance guidance.',
      deliverables: [
        '4K aerial drone photographic inspection of steep pitches',
        'Attic structural truss and ventilation temperature audit',
        'Fastener withdrawal and granule erosion measurement',
        'Comprehensive 12-page written condition certificate'
      ],
      timeframe: '45-Minute Assessment',
      warranty: 'Official Condition Certificate',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      caption: 'Objective drone assessment for Southlake estate homeowner.'
    }
  ];

  const active = services[activeServiceIndex];

  return (
    <section id="services" className="py-24 sm:py-32 bg-chalk text-carbon-800 border-t border-hairline">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-hairline"
        >
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-copper-500 uppercase block mb-3">
              SECTION 03 // BESPOKE CAPABILITIES
            </span>
            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-carbon-900 leading-tight">
              Roofing solutions. <br />
              <span className="font-sans font-black not-italic text-carbon-900">Thoughtfully delivered.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-carbon-600 font-sans leading-relaxed">
              Every service is delivered by permanent, factory-certified craftsmen. We design each project as a lasting architectural investment rather than a temporary transactional fix.
            </p>
          </div>
        </motion.div>

        {/* Editorial Spread: 1 Dominant Photographic Feature + Supporting Text Entries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Dominant Photographic Feature (7 cols) with Smooth Transitions */}
          <div className="lg:col-span-7 bg-limestone-200 border border-hairline overflow-hidden shadow-editorial flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.code}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between w-full"
              >
                {/* Visual Frame */}
                <div className="relative h-80 sm:h-96 lg:h-[460px] w-full overflow-hidden bg-carbon-950">
                  <motion.img
                    src={active.image}
                    alt={active.title}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Photo Caption & Metadata */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-chalk uppercase">
                    <span className="px-2.5 py-1 bg-carbon-950/80 backdrop-blur-sm border border-carbon-700">
                      REF. {active.code} // {active.timeframe}
                    </span>
                    <span className="px-2.5 py-1 bg-carbon-950/80 backdrop-blur-sm border border-carbon-700 text-copper-400">
                      {active.warranty}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-chalk">
                    <p className="text-xs font-mono text-stone-300">
                      {active.caption}
                    </p>
                  </div>
                </div>

                {/* Narrative & Specifications Block */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono text-copper-500 uppercase tracking-widest block mb-1">
                      DETAILED SPECIFICATION
                    </span>
                    <h3 className="font-sans font-bold text-2xl text-carbon-900 mb-2">
                      {active.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-serif italic text-carbon-600 mb-4">
                      "{active.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-carbon-700 font-sans leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="pt-4 border-t border-hairline space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-2">
                      ENGINEERING PROTOCOL
                    </span>
                    {active.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-carbon-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-copper-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <div className="pt-6 border-t border-hairline flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-500">
                      READY FOR CONSULTATION?
                    </span>
                    <button
                      onClick={() => onOpenEstimate(`Inquiry: ${active.title}`)}
                      className="px-5 py-2.5 bg-carbon-900 hover:bg-copper-500 hover:text-carbon-950 text-chalk font-sans font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                    >
                      <span>Request Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Supporting Text-Led Service Entries (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block px-2 mb-2">
              SELECT CAPABILITY // 04 SOLUTIONS
            </span>

            {services.map((srv, idx) => {
              const isSelected = activeServiceIndex === idx;
              return (
                <button
                  key={srv.code}
                  onClick={() => setActiveServiceIndex(idx)}
                  className={`w-full text-left p-6 transition-all duration-300 border cursor-pointer block ${
                    isSelected
                      ? 'bg-limestone-200 border-copper-500/80 shadow-fine'
                      : 'bg-chalk border-hairline hover:border-stone-400 hover:bg-limestone-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-mono font-bold tracking-widest ${
                      isSelected ? 'text-copper-500' : 'text-stone-400'
                    }`}>
                      {srv.code}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-copper-500 translate-x-0.5 -translate-y-0.5' : 'text-stone-400'
                    }`} />
                  </div>

                  <h4 className="font-sans font-bold text-xl text-carbon-900 mb-1">
                    {srv.title}
                  </h4>

                  <p className="text-xs text-carbon-600 font-sans mb-3 line-clamp-1">
                    {srv.subtitle}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] font-mono text-stone-500 pt-3 border-t border-hairline">
                    <span>{srv.timeframe}</span>
                    <span>•</span>
                    <span>{srv.warranty}</span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
