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
        'Three-stage magnetic sweep guarantee (zero flat tires or pet hazards)',
        'Complete gutter flush and grounds clean-up',
        '50-point quality assurance sign-off with homeowner',
        'Official 50-Year Non-Prorated Golden Pledge® Certificate issued'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-chalk text-carbon-800 border-t border-hairline">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-hairline">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-copper-500 uppercase block mb-3">
              SECTION 07 // EXECUTION PROTOCOL
            </span>
            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-carbon-900 leading-tight">
              The 5-stage homeowner journey. <br />
              <span className="font-sans font-black not-italic text-carbon-900">Zero chaos. Zero surprises.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-carbon-600 font-sans leading-relaxed">
              Most residential replacements require just 1 to 2 days of on-site presence. Here is our calibrated protocol from initial aerial scan to final manufacturer certification.
            </p>
          </div>
        </div>

        {/* Custom Fine-Line Timeline Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stage Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block px-2 mb-2">
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
                      ? 'bg-limestone-200 border-copper-500 shadow-fine'
                      : 'bg-chalk border-hairline hover:border-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${
                      isSelected ? 'text-copper-500' : 'text-stone-400'
                    }`}>
                      {stg.code}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">
                      {stg.timing}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-base text-carbon-900 leading-snug">
                    {stg.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card (7 cols) */}
          <div className="lg:col-span-7 bg-limestone-100 border border-hairline p-6 sm:p-10 shadow-editorial flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline mb-6">
                <div>
                  <span className="text-[10px] font-mono text-copper-500 uppercase tracking-widest block mb-1">
                    {stages[activeStage].code} // VERIFIED DELIVERABLE
                  </span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-carbon-900">
                    {stages[activeStage].title}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-chalk border border-hairline text-xs font-mono text-carbon-800">
                  {stages[activeStage].timing}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-carbon-700 font-sans leading-relaxed mb-8">
                {stages[activeStage].summary}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-4 border-t border-hairline">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-2">
                  MANDATORY STAGE CHECKPOINTS
                </span>
                {stages[activeStage].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-carbon-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-copper-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="p-4 bg-chalk border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans">
              <div>
                <strong className="text-carbon-900 block">Our Homeowner Assurance:</strong>
                <span className="text-carbon-600">Zero final balance due until your personal inspection sign-off.</span>
              </div>
              <button
                onClick={() => onOpenEstimate(`Inquiry for ${stages[activeStage].title}`)}
                className="px-4 py-2 bg-carbon-900 hover:bg-copper-500 hover:text-carbon-950 text-chalk text-xs font-mono uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
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
