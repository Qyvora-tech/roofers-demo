import React, { useState } from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Wind, 
  Droplet, 
  Flame, 
  ChevronRight, 
  Info,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function RoofingAnatomy() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const layers = [
    {
      id: 'decking',
      step: 'Layer 01',
      title: 'Solid 5/8" CDX Roof Decking',
      category: 'Structural Substrate',
      icon: Layers,
      highlight: 'The Structural Foundation of Your Home',
      description: 'We inspect every sheet of existing plywood decking. Any compromised, rotted, or delaminated wood is removed and replaced with APA-rated 5/8" exterior grade CDX plywood fastened with ring-shank nails.',
      specifications: [
        { label: 'Material', value: '5/8-inch 5-Ply APA Rated CDX Exterior Pine' },
        { label: 'Fasteners', value: 'Hot-dipped galvanized ring-shank 8d nails' },
        { label: 'Fastener Pattern', value: '6" on edges, 12" on interior joists' },
        { label: 'Role', value: 'Eliminates structural sagging and ensures fastener holding power' }
      ],
      diagramColor: '#343F43',
      defenseIcon: ShieldCheck,
      defenseText: 'Prevents roof sagging and ensures strong mechanical grip for all top layers.'
    },
    {
      id: 'drip-edge',
      step: 'Layer 02',
      title: 'Corrosion-Resistant Metal Drip Edge',
      category: 'Perimeter Defense',
      icon: Wind,
      highlight: 'Guiding Runoff Safely Into Gutters',
      description: 'Heavy-gauge F-style aluminum drip edge installed along all eaves and rakes. It creates a watertight bridge that directs rainwater away from fascia boards and directly into gutter channels.',
      specifications: [
        { label: 'Gauge', value: '.024 Aluminum / 26-Gauge Galvanized' },
        { label: 'Profile', value: 'Extended F-Style Overhang with Kick-out' },
        { label: 'Coating', value: 'Baked enamel anti-corrosive finish' },
        { label: 'Role', value: 'Prevents capillary water suction into wooden eaves' }
      ],
      diagramColor: '#8B9995',
      defenseIcon: Droplet,
      defenseText: 'Protects expensive fascia and soffit wood from rot and insect intrusion.'
    },
    {
      id: 'ice-water',
      step: 'Layer 03',
      title: 'Self-Adhering Ice & Water Shield',
      category: 'Waterproofing Membrane',
      icon: Droplet,
      highlight: 'Self-Healing Membrane for Critical Vulnerabilities',
      description: 'A SBS-modified rubberized asphalt membrane installed across valleys, skylights, chimney crickets, and eaves. It bonds directly to the wood decking and self-seals tightly around every nail puncture.',
      specifications: [
        { label: 'Thickness', value: '50-mil rubberized SBS bitumen' },
        { label: 'Surface', value: 'High-traction slip-resistant polymer top' },
        { label: 'Placement', value: 'Valleys, eaves, rake edges, sidewalls & penetrations' },
        { label: 'Role', value: '100% impenetrable barrier against ice dams and wind-driven deluges' }
      ],
      diagramColor: '#C29369',
      defenseIcon: ShieldCheck,
      defenseText: 'Guarantees zero leaks in the most vulnerable 10% of your roof footprint.'
    },
    {
      id: 'synthetic-underlayment',
      step: 'Layer 04',
      title: 'High-Performance Synthetic Underlayment',
      category: 'Secondary Barrier',
      icon: ShieldCheck,
      highlight: 'Modern Breathable Vapor Barrier',
      description: 'Gone are the days of cheap organic 15# felt that tears and rots. We utilize woven polypropylene synthetic underlayment that provides 25x higher tear strength and resists 6 months of UV exposure.',
      specifications: [
        { label: 'Tensile Strength', value: '25x stronger than standard asphalt felt' },
        { label: 'Fasteners', value: 'Plastic cap nails (no leaking staples)' },
        { label: 'Perm Rating', value: 'Permeable breathability allows attic moisture out' },
        { label: 'Role', value: 'Continuous secondary water shield across the entire roof plane' }
      ],
      diagramColor: '#172328',
      defenseIcon: Wind,
      defenseText: 'Stays intact in extreme winds even if top shingles were ever displaced.'
    },
    {
      id: 'starter-strip',
      step: 'Layer 05',
      title: 'Mechanical High-Wind Starter Strip',
      category: 'Perimeter Lockdown',
      icon: Wind,
      highlight: 'Locking Eaves & Rakes Against 130 MPH Uplift',
      description: 'Factory-applied high-tack DuraGrip adhesive strips installed along eaves and rakes. Without proper starter shingles, first-course shingles can easily lift in heavy Texas windstorms.',
      specifications: [
        { label: 'Adhesive', value: 'Continuous factory thermoseal strip' },
        { label: 'Wind Rating', value: 'Rated for up to 130 MPH Category 3 wind gusts' },
        { label: 'Alignment', value: 'Precision laser-guided perimeter lockdown' },
        { label: 'Role', value: 'Prevents edge shingle tear-off during sudden squalls' }
      ],
      diagramColor: '#707E7A',
      defenseIcon: Wind,
      defenseText: 'Secures perimeter shingles where 80% of roof wind failures originate.'
    },
    {
      id: 'shingles',
      step: 'Layer 06',
      title: 'Class 4 Architectural Shingles',
      category: 'Primary Weather Barrier',
      icon: Flame,
      highlight: 'Multi-Layered Armor With Architectural Dimension',
      description: 'Heavyweight fiberglass laminate shingles featuring SBS-modified polymer formulation. Engineered with copper-infused StainGuard Plus™ algae protection and UL 2218 Class 4 impact resistance.',
      specifications: [
        { label: 'Impact Rating', value: 'UL 2218 Class 4 (Maximum Hail Resistance)' },
        { label: 'Fastener Schedule', value: '6-nail enhanced hurricane nailing pattern' },
        { label: 'Warranty', value: '50-Year Non-Prorated Lifetime Manufacturer Warranty' },
        { label: 'Insurance Benefit', value: 'Qualifies for up to 28% homeowners insurance premium reduction' }
      ],
      diagramColor: '#C29369',
      defenseIcon: Sparkles,
      defenseText: 'Withstands golf-ball size hail strikes and severe solar thermal stress.'
    },
    {
      id: 'ridge-cap',
      step: 'Layer 07',
      title: 'Continuous High-Flow Ridge Ventilation & Caps',
      category: 'Thermal Exhaust System',
      icon: Layers,
      highlight: 'Balanced Attic Airflow That Prolongs Roof Life',
      description: 'External baffle ridge vents paired with multi-layer high-profile ridge cap shingles. They draw stale 140°F attic air out while preventing wind-driven snow or rain from penetrating backwards.',
      specifications: [
        { label: 'Net Free Airflow', value: '18 sq inches per linear foot' },
        { label: 'Filter', value: 'Internal weather barrier blocks rain and insect infiltration' },
        { label: 'Profile', value: 'Sculpted high-profile ridge cap for sharp architectural shadowlines' },
        { label: 'Energy Impact', value: 'Reduces summer attic heat by up to 35°F, lowering AC utility bills' }
      ],
      diagramColor: '#172328',
      defenseIcon: Wind,
      defenseText: 'Prevents attic heat baking shingles from underneath, preserving warranty life.'
    }
  ];

  const activeLayer = layers[activeLayerIndex];

  return (
    <section id="anatomy" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/15 border border-copper-500/30 text-copper-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-copper-400" />
            <span>Architectural Engineering</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
            The Anatomy of an <br />
            <span className="copper-gradient-text font-serif italic font-normal">Uncompromising Roof System.</span>
          </h2>

          <p className="text-sm sm:text-base text-sage-200 max-w-2xl mx-auto leading-relaxed">
            A premium roof is not just a bundle of shingles. It is an integrated multi-tier weather defense system designed to endure decades of severe weather.
          </p>
        </div>

        {/* Interactive Anatomy Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Layer Selector Stack */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs uppercase tracking-wider font-mono text-sage-400 mb-3 px-2 flex items-center justify-between">
              <span>Interactive Cross-Section</span>
              <span className="text-copper-400">Click to Inspect</span>
            </div>

            {layers.map((layer, idx) => {
              const isActive = activeLayerIndex === idx;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? 'bg-slate-900 border-copper-500 shadow-copper-glow text-white'
                      : 'bg-slate-900/60 border-white/5 hover:border-white/15 text-sage-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-copper-500 text-slate-950' : 'bg-white/5 text-sage-400'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <div className={`text-sm font-semibold leading-tight ${
                        isActive ? 'text-white' : 'text-sage-200'
                      }`}>
                        {layer.title}
                      </div>
                      <div className="text-[11px] text-sage-400 font-mono mt-0.5">
                        {layer.category}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'rotate-90 text-copper-400' : 'text-sage-500'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Layer Inspection Card */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
            
            {/* Top Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-copper-500/20 border border-copper-500/40 text-copper-300 flex items-center justify-center font-mono font-bold text-xs">
                  0{activeLayerIndex + 1}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold">
                    {activeLayer.step} // {activeLayer.category}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {activeLayer.title}
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Standard on all installs</span>
              </div>
            </div>

            {/* Highlight Statement */}
            <div className="p-4 rounded-xl bg-copper-500/10 border border-copper-500/20 mb-6 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-copper-200">
                  {activeLayer.highlight}
                </div>
                <div className="text-xs text-sage-300 mt-1 leading-relaxed">
                  {activeLayer.defenseText}
                </div>
              </div>
            </div>

            {/* Narrative description */}
            <p className="text-sm text-sage-200 leading-relaxed mb-8">
              {activeLayer.description}
            </p>

            {/* Specifications Matrix */}
            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-sage-400">
                Architectural Specifications
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeLayer.specifications.map((spec, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-3.5 rounded-lg bg-slate-950/60 border border-white/5 space-y-1"
                  >
                    <div className="text-[11px] font-mono text-copper-400/90 font-medium">
                      {spec.label}
                    </div>
                    <div className="text-xs text-white font-medium leading-snug">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => setActiveLayerIndex((prev) => (prev > 0 ? prev - 1 : layers.length - 1))}
                className="text-xs font-semibold text-sage-300 hover:text-white px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors"
              >
                ← Previous Layer
              </button>

              <span className="text-xs font-mono text-sage-400">
                Layer {activeLayerIndex + 1} of {layers.length}
              </span>

              <button
                onClick={() => setActiveLayerIndex((prev) => (prev < layers.length - 1 ? prev + 1 : 0))}
                className="text-xs font-semibold text-copper-300 hover:text-white px-3 py-1.5 rounded bg-copper-500/20 hover:bg-copper-500/30 transition-colors"
              >
                Next Layer →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
