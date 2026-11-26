import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SectionProcess({ onOpenEstimate }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      code: 'STAGE 01',
      title: 'Forensic Aerial Scan & Attic Audit',
      timing: 'Day 1 • 45 Minutes',
      summary: 'Before touching a single tool, our forensic specialists perform a comprehensive 4K aerial drone mapping of all roof facets combined with an interior thermal moisture evaluation of attic decking.',
      deliverables: [
        '4K drone aerial photography of all pitches and valleys',
        'Thermal attic imaging to identify hidden wood deck rot',
        'Granule loss and shingle mat fracture quantification',
        'Objective assessment of remaining viable lifespan'
      ]
    },
    {
      code: 'STAGE 02',
      title: 'Itemized Engineering Proposal & 3D Mapping',
      timing: 'Within 24 Hours',
      summary: 'You receive an itemized proposal with clear material choices, 50-year warranty options, and an interactive 3D digital rendering showing exactly how each shingle profile integrates with your exterior architecture.',
      deliverables: [
        'Transparent line-item investment schedule (zero hidden extras)',
        '3D architectural color preview calibrated to your brick & siding',
        'Direct coordination with your insurance adjuster if storm-related',
        'Flexible 0% APR financing overview with instant soft pre-qualification'
      ]
    },
    {
      code: 'STAGE 03',
      title: 'Property Shielding & Clean Tear-Off',
      timing: 'Install Day • 7:00 AM',
      summary: 'We protect your estate like a museum. Catch-All netting systems surround landscaping, AC compressors and pool pumps are protected by rigid plywood shields, and old shingles are removed down to clean plywood.',
      deliverables: [
        'Complete perimeter netting protecting flowerbeds and shrubs',
        'Heavy-duty plywood boxes shielding external HVAC units',
        '100% removal down to bare 5/8" CDX decking',
        'Replacement of all compromised or spongy plywood sheets'
      ]
    },
    {
      code: 'STAGE 04',
      title: 'Master Installation & Peak Ventilation',
      timing: 'Install Day • 11:00 AM – 4:00 PM',
      summary: 'Factory-certified craftsmen install self-adhering elastomeric ice & water membranes in all valleys, high-tensile synthetic underlayment, and Class 4 architectural shingles using a 6-nail hurricane nailing pattern.',
      deliverables: [
        'Self-healing ice & water shield applied to all critical junctions',
        'Class 4 impact-rated architectural shingles aligned with precision',
        '6-nail mechanical hurricane fastening schedule (130 MPH wind rated)',
        'Continuous external-baffle ridge exhaust installed across all peaks'
      ]
    },
    {
      code: 'STAGE 05',
      title: 'Triple-Pass Magnetic Clean & Warranty Registration',
      timing: 'Install Day • 5:00 PM',
      summary: 'We conduct three separate passes with industrial high-gauss magnetic sweepers across turf, driveways, and flowerbeds. Our project director conducts a 50-point walkthrough before registering your 50-year warranty.',
      deliverables: [
        '300-lb magnetic sweep across lawn, driveway, and flowerbeds',
        '50-point quality assurance structural punch-list sign-off',
        'Manufacturer GAF Golden Pledge 50-year warranty certificate issuance',
        'High-resolution completion photo album uploaded to owner portal'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-carbon-900 text-chalk border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-copper-400 uppercase block mb-3 font-bold">
              SECTION 07 // EXECUTION PROTOCOL
            </span>
            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-copper-200 leading-tight">
              The 5-stage homeowner journey. <br />
              <span className="font-sans font-black not-italic text-white">Zero chaos. Zero surprises.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Most residential replacements require just 1 to 2 days of on-site presence. Here is our calibrated protocol from initial aerial scan to final manufacturer certification.
            </p>
          </div>
        </div>

        {/* Custom Fine-Line Timeline Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stage Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block px-2 mb-2">
              SELECT TIMELINE STAGE
            </span>

            {stages.map((stg, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stg.code}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-5 border transition-all duration-200 cursor-pointer block ${
                    isSelected
                      ? 'bg-carbon-950 border-copper-400 shadow-copper-glow'
                      : 'bg-carbon-950/60 border-white/5 hover:border-copper-500/40 hover:bg-carbon-950/90 text-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${
                      isSelected ? 'text-copper-400' : 'text-stone-500'
                    }`}>
                      {stg.code}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">
                      {stg.timing}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-base text-white leading-snug">
                    {stg.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card (7 cols) */}
          <div className="lg:col-span-7 bg-carbon-950/90 border border-white/10 p-6 sm:p-10 shadow-obsidian-lg flex flex-col justify-between space-y-8 backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-copper-400 uppercase tracking-widest block mb-1 font-bold">
                    {stages[activeStage].code} // VERIFIED DELIVERABLE
                  </span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white">
                    {stages[activeStage].title}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-carbon-900 border border-white/10 text-xs font-mono text-copper-300">
                  {stages[activeStage].timing}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed mb-8">
                {stages[activeStage].summary}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-copper-400 font-bold block mb-2">
                  MANDATORY STAGE CHECKPOINTS
                </span>
                {stages[activeStage].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-copper-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="p-4 bg-carbon-900 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans">
              <div>
                <strong className="text-white block">Our Homeowner Assurance:</strong>
                <span className="text-stone-400">Zero final balance due until your personal inspection sign-off.</span>
              </div>
              <button
                onClick={() => onOpenEstimate(`Inquiry for ${stages[activeStage].title}`)}
                className="px-5 py-2.5 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-lg active:scale-95"
              >
                Schedule Stage 01
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
