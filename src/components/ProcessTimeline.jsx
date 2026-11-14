import React, { useState } from 'react';
import { 
  Scan, 
  FileText, 
  Hammer, 
  Sparkles, 
  Award, 
  ChevronRight, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function ProcessTimeline({ onOpenEstimate }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Forensic Scan & Diagnostic Inspection',
      duration: 'Day 1 • 45 Minutes',
      icon: Scan,
      summary: 'We evaluate every square foot of your roof utilizing high-resolution 4K aerial drone photography, thermal attic moisture scanning, and hands-on valley inspection.',
      deliverables: [
        'High-resolution aerial photo audit of all slopes',
        'Attic moisture & deck rot evaluation',
        'Granule erosion & hail impact assessment',
        'Objective assessment of remaining viable lifespan'
      ]
    },
    {
      step: '02',
      title: 'Itemized Proposal & 3D Shingle Visualizer',
      duration: 'Within 24 Hours',
      icon: FileText,
      summary: 'No vague lump-sum guesses. You receive an itemized proposal with clear material tiers, warranty options, and interactive 3D digital renderings showing how each shingle looks on your home.',
      deliverables: [
        'Detailed line-item pricing with zero hidden fees',
        '3D color preview customized to your home exterior',
        'Direct coordination with your insurance adjuster (if applicable)',
        'Flexible 0% APR financing options overview'
      ]
    },
    {
      step: '03',
      title: 'Property Shielding & Clean Tear-Off',
      duration: 'Install Day • 7:00 AM',
      icon: Hammer,
      summary: 'We protect your property like it is our own. Our Catch-All net barrier catches 99.8% of falling debris, HVAC units are shielded with rigid plywood, and old shingles are removed down to clean wood decking.',
      deliverables: [
        'Protective tarps and plywood shielding across landscaping',
        'Complete removal of old shingles down to bare plywood',
        'Replacement of any rotted or water-damaged decking sheets',
        'Ice & Water Shield installed in all valleys and eaves'
      ]
    },
    {
      step: '04',
      title: 'Master Installation & Ventilation',
      duration: 'Install Day • 11:00 AM – 4:00 PM',
      icon: Sparkles,
      summary: 'Factory-certified master installers lay your architectural shingles with precision staggered spacing and 6-nail high-wind mechanical fastening, topped by continuous high-flow ridge vents.',
      deliverables: [
        'Class 4 impact-rated architectural shingles installed',
        '6-nail hurricane nailing schedule for 130 MPH wind resistance',
        'Lead and neoprene pipe boots with silicone flashings',
        'External baffle ridge vent installed along roof peaks'
      ]
    },
    {
      step: '05',
      title: 'Magnetic Clean-up & Warranty Registration',
      duration: 'Install Day • 5:00 PM',
      icon: Award,
      summary: 'We perform 3 passes with industrial high-strength magnetic sweepers through your yard, driveway, and flowerbeds. Our project manager conducts a 50-point walkthrough before registering your 50-year warranty.',
      deliverables: [
        'Triple-pass magnetic nail sweep guarantee',
        'Full gutter cleanout and ground pressure wash',
        '50-point quality assurance sign-off with homeowner',
        'Official 50-Year Non-Prorated Warranty Certificate issued'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-ivory-100 text-graphite-400 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5 text-copper-600" />
            <span>The 5-Step Homeowner Journey</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            What to Expect. <br />
            <span className="font-serif italic font-normal text-copper-600">Zero Chaos. Zero Surprises.</span>
          </h2>

          <p className="text-sm sm:text-base text-graphite-300 max-w-2xl mx-auto leading-relaxed">
            Most residential roof replacements take just 1 to 2 days. Here is our exact step-by-step protocol from initial drone scan to your final warranty registration.
          </p>
        </div>

        {/* Desktop Horizontal Step Navigation Tabs */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl ring-2 ring-copper-400/40'
                    : 'bg-white text-graphite-400 border-slate-900/10 hover:border-copper-500/30 hover:bg-ivory-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isCurrent ? 'bg-copper-500 text-slate-950' : 'bg-slate-100 text-graphite-300'
                  }`}>
                    STEP {item.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-copper-400' : 'text-graphite-200'}`} />
                </div>
                <div className="font-display font-bold text-xs leading-snug line-clamp-2">
                  {item.title}
                </div>
                <div className={`text-[10px] font-mono mt-1 ${
                  isCurrent ? 'text-sage-300' : 'text-graphite-200'
                }`}>
                  {item.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Spotlight Card */}
        <div className="bg-white rounded-3xl border border-slate-900/10 shadow-elevated p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 text-copper-600 flex items-center justify-center font-display font-black text-lg">
                  {steps[activeStep].step}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-copper-600 font-bold">
                    {steps[activeStep].duration}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-graphite-300 leading-relaxed">
                {steps[activeStep].summary}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Step Deliverables & Safeguards:
                </div>
                {steps[activeStep].deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-graphite-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper-500/20 text-copper-300 text-xs font-mono uppercase mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-copper-400" />
                  <span>The Homeowner Guarantee</span>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-2">
                  No Payment Until Final Walkthrough
                </h4>
                <p className="text-xs text-sage-200 leading-relaxed">
                  We never require full payment upfront. You don't pay your final invoice until you walk the perimeter with our project director and personally sign off on the magnetic clean-up and craftsmanship.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenEstimate(`Inquiry for ${steps[activeStep].title}`)}
                  className="px-5 py-2.5 rounded-lg bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-xs shadow-md transition-colors"
                >
                  Start at Step 01 Today
                </button>
                <span className="text-[11px] font-mono text-sage-400">
                  Step {activeStep + 1} of 5
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile / Tablet Step Selector Pills */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2">
          {steps.map((st, sIdx) => (
            <button
              key={sIdx}
              onClick={() => setActiveStep(sIdx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 border ${
                activeStep === sIdx 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-graphite-300 border-slate-900/10'
              }`}
            >
              Step 0{sIdx + 1}: {st.title.split(' ')[0]}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
