import React, { useState } from 'react';
import { 
  Eye, 
  MapPin, 
  Calendar, 
  Layers, 
  SlidersHorizontal, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';

export default function ProjectGallery({ onOpenEstimate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50); // for before/after comparison
  const [isComparing, setIsComparing] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'replacement', label: 'Full Replacements' },
    { id: 'class4', label: 'Class 4 Impact' },
    { id: 'storm', label: 'Storm Restorations' },
    { id: 'designer', label: 'Luxury Designer' },
  ];

  const projects = [
    {
      id: 1,
      category: 'replacement',
      title: 'Modern Tudor Architectural Transformation',
      location: 'Highland Park, TX',
      squares: '48 Squares (4,800 sq ft)',
      material: 'GAF Timberline HDZ in Charcoal + Aged Copper Valleys',
      duration: '2 Days Completion',
      scope: 'Complete tear-off of 22-year-old hail-damaged 3-tab shingles, replacement of 6 sheets rotted CDX decking, ice & water shield in 4 valleys, and custom copper drip edge.',
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
      hasBeforeAfter: true,
      tag: 'Featured Project'
    },
    {
      id: 2,
      category: 'class4',
      title: 'Texas Hill Country Stone Residence',
      location: 'Southlake, TX',
      squares: '54 Squares (5,400 sq ft)',
      material: 'Class 4 Impact Resistant SBS Shingles in Weathered Wood',
      duration: '2 Days Completion',
      scope: 'Upgraded homeowner to UL 2218 Class 4 rating following spring golf-ball hail event. Lowered their annual homeowners insurance premium by 26%.',
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1000&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      hasBeforeAfter: true,
      tag: 'Class 4 Armor'
    },
    {
      id: 3,
      category: 'storm',
      title: 'Emergency Storm & Wind Claim Restoration',
      location: 'Frisco, TX',
      squares: '36 Squares (3,600 sq ft)',
      material: 'Owens Corning TruDefinition Duration Designer',
      duration: '1 Day Completion',
      scope: '75 MPH windstorm ripped off south-facing eaves. Provided 4K drone forensic photos to insurance adjuster, resulting in 100% full replacement approval.',
      beforeImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1000&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      hasBeforeAfter: true,
      tag: 'Insurance Funded'
    },
    {
      id: 4,
      category: 'designer',
      title: 'Stately French Provincial Roof & Gutters',
      location: 'Plano (Willow Bend), TX',
      squares: '62 Squares (6,200 sq ft)',
      material: 'CertainTeed Grand Manor Slate Profile & Real Copper Gutters',
      duration: '3 Days Completion',
      scope: 'Multi-tiered roofline with steep 10/12 pitch. Installed heavyweight luxury slate-profile shingles with seamless 6-inch solid copper half-round gutters.',
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      afterImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
      hasBeforeAfter: false,
      tag: 'Luxury Slate Profile'
    },
    {
      id: 5,
      category: 'replacement',
      title: 'Craftsman Bungalow Complete Restoration',
      location: 'Dallas (Lakewood), TX',
      squares: '28 Squares (2,800 sq ft)',
      material: 'GAF Timberline HDZ in Pewter Gray',
      duration: '1 Day Completion',
      scope: 'Re-decked aged shiplap roof with 5/8" CDX plywood, installed continuous ridge cap ventilation, and preserved architectural historic eaves.',
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1000&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      hasBeforeAfter: false,
      tag: 'Historic Preservation'
    },
    {
      id: 6,
      category: 'class4',
      title: 'Transitional Farmhouse Hail Defense',
      location: 'McKinney, TX',
      squares: '42 Squares (4,200 sq ft)',
      material: 'CertainTeed NorthGate Class 4 in Charcoal Black',
      duration: '2 Days Completion',
      scope: 'Complete roof replacement after destructive May storm with modified SBS asphalt technology engineered for extreme thermal shock.',
      beforeImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1000&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
      hasBeforeAfter: true,
      tag: 'Hail Fortified'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white text-graphite-400 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-600 font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
              <span>Our Portfolio of Craftsmanship</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Real American Homes. <br />
              <span className="font-serif italic font-normal text-copper-600">Built to Stand for Decades.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeFilter === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-ivory-100 text-graphite-300 hover:text-slate-900 hover:bg-ivory-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-ivory-50 border border-slate-900/5 shadow-elevated hover:shadow-premium transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.afterImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                    {project.tag}
                  </span>
                  {project.hasBeforeAfter && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-copper-500 text-slate-950 font-bold uppercase">
                      Before / After Available
                    </span>
                  )}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-copper-300 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5 text-copper-400" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg leading-snug line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-graphite-400">
                    <span className="font-bold text-slate-900 shrink-0">Material:</span>
                    <span className="text-graphite-300">{project.material}</span>
                  </div>
                  <div className="flex items-start gap-2 text-graphite-400">
                    <span className="font-bold text-slate-900 shrink-0">Roof Scale:</span>
                    <span className="text-graphite-300">{project.squares}</span>
                  </div>
                  <p className="text-graphite-300 text-xs line-clamp-2 mt-2 leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setActiveProject(project);
                      setIsComparing(project.hasBeforeAfter);
                      setSliderPosition(50);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-slate-900 hover:text-copper-600 transition-colors"
                  >
                    <Eye className="w-4 h-4 text-copper-500" />
                    <span>View Inspection Specs</span>
                  </button>

                  <span className="text-[11px] font-mono text-sage-500">
                    {project.duration}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-Depth Specs and Interactive Before/After Comparison */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[90vh]">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-900/10 flex items-center justify-between bg-ivory-50">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-600 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeProject.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-10 h-10 rounded-full bg-slate-900/5 hover:bg-slate-900/10 flex items-center justify-center text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Interactive Slider if Before/After exists */}
                {activeProject.hasBeforeAfter ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-amber-800 font-bold">← OLD WORN / DAMAGED ROOF</span>
                      <span className="text-emerald-800 font-bold">SLATE & RIDGE COMPLETED ROOF →</span>
                    </div>

                    <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden select-none shadow-md">
                      {/* After Image (Full background) */}
                      <img
                        src={activeProject.afterImage}
                        alt="Finished Roof"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />

                      {/* Before Image (Clipped on top) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                      >
                        <img
                          src={activeProject.beforeImage}
                          alt="Before Roof"
                          className="absolute inset-0 w-full h-full object-cover object-center filter sepia-[0.3]"
                          style={{ width: '100%', minWidth: '100%' }}
                        />
                      </div>

                      {/* Divider Handle */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-copper-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-lg">
                          ↔
                        </div>
                      </div>

                      {/* Native range slider for smooth drag */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPosition}
                        onChange={(e) => setSliderPosition(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                    <img
                      src={activeProject.afterImage}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Scope & Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-ivory-100">
                  <div>
                    <span className="text-[11px] font-mono text-copper-600 uppercase font-semibold">Material Specification</span>
                    <p className="text-xs font-bold text-slate-900 mt-1">{activeProject.material}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-copper-600 uppercase font-semibold">Total Roof Area</span>
                    <p className="text-xs font-bold text-slate-900 mt-1">{activeProject.squares}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-copper-600 uppercase font-semibold">Installation Time</span>
                    <p className="text-xs font-bold text-slate-900 mt-1">{activeProject.duration}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-bold text-base text-slate-900">Project Narrative & Engineering Scope</h4>
                  <p className="text-sm text-graphite-300 leading-relaxed">
                    {activeProject.scope}
                  </p>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-900/10 flex flex-wrap items-center justify-between gap-4 bg-ivory-50">
                <span className="text-xs text-graphite-300">
                  Want similar architectural results for your home?
                </span>
                <button
                  onClick={() => {
                    const title = activeProject.title;
                    setActiveProject(null);
                    onOpenEstimate(`Inquiry about ${title}`);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-xs shadow-md transition-colors"
                >
                  Request Similar Estimate
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
