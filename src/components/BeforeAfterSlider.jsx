import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, CheckCircle2, MapPin } from 'lucide-react';
import { BEFORE_AFTER_PROJECTS } from '../data/roofingData';

export default function BeforeAfterSlider({ onOpenLeadModal }) {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const project = BEFORE_AFTER_PROJECTS[activeProjectIdx];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleStart = (clientX) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="before-after" className="py-24 sm:py-32 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
            Visual Proof of Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            From Storm Damage to Architectural Masterpiece
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Slide horizontally to inspect the difference. We don't just replace shingles; we engineer lifetime architectural systems that boost curb appeal and weather immunity.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {BEFORE_AFTER_PROJECTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProjectIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeProjectIdx === idx
                  ? 'bg-copper-500 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {p.location.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Split View Container & Project Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual Slider (8 cols) */}
          <div className="lg:col-span-8">
            <div 
              ref={containerRef}
              onMouseDown={(e) => handleStart(e.clientX)}
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-800 cursor-ew-resize select-none bg-slate-900 group shadow-medium"
            >
              {/* "After" Image */}
              <img
                src={project.afterImage}
                alt="After Architectural Restoration"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.98]"
              />

              {/* "Before" Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={project.beforeImage}
                  alt="Before Damage"
                  className="absolute inset-0 w-full h-full object-cover max-w-none filter brightness-[0.78] contrast-[1.08]"
                  style={{ 
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%' 
                  }}
                />
                
                {/* Before Label */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3.5 py-1.5 rounded-md bg-slate-950/90 text-red-300 border border-red-900/60 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    Before: Storm Damage
                  </span>
                </div>
              </div>

              {/* After Label */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3.5 py-1.5 rounded-md bg-slate-950/90 text-emerald-300 border border-emerald-900/60 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  After: Timber & Peak
                </span>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 bg-copper-500 shadow-[0_0_12px_rgba(217,119,54,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-copper-400 text-copper-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Instructional hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="px-3.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] text-slate-300 border border-slate-800">
                  ◀ Slide horizontally to compare ▶
                </span>
              </div>
            </div>
          </div>

          {/* Project Details (4 cols) */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-medium">
            <div>
              <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
                Case Study
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-copper-400" />
                {project.location}
              </p>
            </div>

            {/* Metrics */}
            <div className="space-y-3 border-t border-slate-800 pt-4 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Roof Area:</span>
                <span className="text-white font-bold">{project.roofSize}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Install Turnaround:</span>
                <span className="text-white font-bold">{project.turnaround}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Insurance Outcome:</span>
                <span className="text-emerald-400 font-bold">{project.insuranceStatus}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Homeowner Paid:</span>
                <span className="text-white font-bold">{project.homeownerDeductible}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Warranty Term:</span>
                <span className="text-white font-bold">{project.warranty}</span>
              </div>
            </div>

            {/* Homeowner Review */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <p className="text-xs text-slate-300 font-light italic leading-relaxed">
                {project.homeownerReview}
              </p>
              <div className="text-[11px] font-bold text-copper-300 pt-1">
                — {project.homeownerName}
              </div>
            </div>

            <button
              onClick={() => onOpenLeadModal(`Transformation: ${project.title}`)}
              className="w-full py-3.5 rounded bg-copper-500 hover:bg-copper-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              Request Similar Roof Scope
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
