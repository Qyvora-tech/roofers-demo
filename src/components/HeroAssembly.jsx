import React, { useRef, useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle2, 
  Phone,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

const TOTAL_FRAMES = 94;

export default function HeroAssembly({ onOpenEstimate, lenisInstance }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedFramesCount, setLoadedFramesCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);

  // Smooth frame interpolation ref
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  // Preload all 94 frames progressively
  useEffect(() => {
    let isCancelled = false;
    const images = [];

    // Preload first frame immediately for instant first paint
    const firstImg = new Image();
    firstImg.src = '/media/roof-frames/frame_000.webp';
    firstImg.onload = () => {
      if (isCancelled) return;
      images[0] = firstImg;
      setLoadedFramesCount(1);
      drawFrame(0);
    };

    // Load remaining frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/media/roof-frames/frame_${frameNum}.webp`;
      img.onload = () => {
        if (isCancelled) return;
        images[i] = img;
        setLoadedFramesCount((prev) => {
          const next = prev + 1;
          if (next >= 15 && !isReady) {
            setIsReady(true);
          }
          return next;
        });
      };
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
    };
  }, []);

  // Draw specific frame onto canvas with aspect-ratio preservation (object-cover)
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
    const img = imagesRef.current[idx];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Canvas size in logical CSS pixels
    const width = canvas.width;
    const height = canvas.height;

    // Calculate aspect ratio covering
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Resize canvas to match window with retina support
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }

      drawFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Scroll listener for calculating assembly progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isPlayingAuto) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clamped);
      targetFrameRef.current = clamped * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlayingAuto]);

  // High-performance continuous animation loop (60fps lerp)
  useEffect(() => {
    let animId;

    const renderLoop = () => {
      // Lerp with damping factor 0.3 for instantaneous responsiveness without jitter
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.3;
        drawFrame(currentFrameRef.current);
      }
      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animId);
  }, [drawFrame]);

  // Auto-play preview mode
  useEffect(() => {
    if (!isPlayingAuto) {
      if (autoPlayTimerRef.current) cancelAnimationFrame(autoPlayTimerRef.current);
      return;
    }

    let progress = scrollProgress;
    const speed = 0.0035; // smooth auto-advance

    const step = () => {
      progress += speed;
      if (progress > 1) {
        progress = 0;
      }
      setScrollProgress(progress);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
      currentFrameRef.current = targetFrameRef.current;
      drawFrame(currentFrameRef.current);
      autoPlayTimerRef.current = requestAnimationFrame(step);
    };

    autoPlayTimerRef.current = requestAnimationFrame(step);

    return () => {
      if (autoPlayTimerRef.current) cancelAnimationFrame(autoPlayTimerRef.current);
    };
  }, [isPlayingAuto, drawFrame]);

  const toggleAutoPlay = () => {
    setIsPlayingAuto(!isPlayingAuto);
  };

  // Jump to specific milestone using Lenis or native smooth scroll
  const seekToStage = (progress) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = window.scrollY + rect.top + (progress * totalScrollable);

    if (lenisInstance) {
      lenisInstance.scrollTo(targetScrollY, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
  };

  const skipToEnd = () => {
    seekToStage(0.98);
  };

  // Determine current active phase for text overlays
  const currentPhase = 
    scrollProgress < 0.18 ? 0 :
    scrollProgress < 0.45 ? 1 :
    scrollProgress < 0.75 ? 2 :
    scrollProgress < 0.88 ? 3 : 4;

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-slate-950 text-white"
      style={{ height: '360vh' }}
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Canvas Render Layer (Instant 60fps Scrubbing) */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.93]"
          />

          {/* Cinematic Vignettes and Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/70 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/20 to-slate-950/75 pointer-events-none" />
        </div>

        {/* Top Floating Controls Bar */}
        <div className="relative z-20 pt-24 md:pt-28 px-4 sm:px-6 lg:px-8 max-w-site mx-auto w-full flex items-center justify-between pointer-events-auto">
          {/* Milestone Indicator */}
          <div className="flex items-center gap-2.5 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono shadow-lg">
            <span className="w-2 h-2 rounded-full bg-copper-400 animate-ping"></span>
            <span className="text-sage-300">ASSEMBLY PROGRESS:</span>
            <span className="text-copper-300 font-bold">{Math.round(scrollProgress * 100)}%</span>
          </div>

          {/* Quick interactive helpers */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAutoPlay}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/85 hover:bg-slate-850 backdrop-blur-md border border-white/10 text-xs text-sage-200 hover:text-white transition-all shadow-md active:scale-95"
              title={isPlayingAuto ? 'Pause Preview' : 'Auto Play Preview'}
            >
              {isPlayingAuto ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-copper-400" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-copper-400" />
                  <span className="hidden sm:inline">Auto Preview</span>
                </>
              )}
            </button>

            {scrollProgress < 0.85 && (
              <button
                onClick={skipToEnd}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 text-xs text-ivory-200 transition-all shadow-md active:scale-95"
              >
                <span>Jump to Finished Roof</span>
                <ArrowRight className="w-3 h-3 text-copper-400" />
              </button>
            )}
          </div>
        </div>

        {/* Middle Synchronized Storytelling Overlays */}
        <div className="relative z-20 max-w-site mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 pointer-events-none">
          
          {/* PHASE 0: 0% - 18% (Initial Unfinished Roof) */}
          <div className={`transition-all duration-500 ease-out max-w-2xl ${
            currentPhase === 0 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-6 pointer-events-none absolute'
          }`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/15 border border-copper-500/30 text-copper-300 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-copper-400" />
              <span>The Art of Protection</span>
            </div>
            
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
              A Better Roof. <br />
              <span className="copper-gradient-text font-serif italic font-normal">A Stronger Home.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-sage-200 max-w-xl leading-relaxed mb-8 drop-shadow">
              Exceptional residential roofing craftsmanship, engineered with forensic precision from the first structural layer to the final architectural ridge.
            </p>

            <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
              <button
                onClick={onOpenEstimate}
                className="px-7 py-3.5 rounded-lg bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-sm tracking-wide shadow-lg hover:shadow-copper-glow transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => seekToStage(0.98)}
                className="px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-ivory-100 border border-white/15 backdrop-blur-md font-medium text-sm transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore Completed Work</span>
              </button>
            </div>
          </div>

          {/* PHASE 1: 18% - 45% (Protection Begins - Underlayment & Decking) */}
          <div className={`transition-all duration-500 ease-out max-w-xl ${
            currentPhase === 1 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6 pointer-events-none absolute'
          }`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sage-400/20 border border-sage-400/30 text-sage-200 text-xs font-mono uppercase mb-4 backdrop-blur-md">
              <Layers className="w-3.5 h-3.5 text-copper-400" />
              <span>Phase 01 // Structural Foundation</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
              Protection starts <br />
              <span className="text-copper-400 font-serif italic">beneath the surface.</span>
            </h2>

            <p className="text-sm sm:text-base text-sage-200 leading-relaxed mb-6">
              Before a single shingle is placed, we secure solid 5/8" CDX decking, drip edges, and high-performance synthetic ice & water shielding in all critical roof valleys.
            </p>

            {/* Spec Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 backdrop-blur-lg border border-white/10 space-y-2 pointer-events-auto shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-ivory-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Engineered Moisture Barrier</span>
              </div>
              <p className="text-xs text-sage-300">
                Repels water intrusion even in sustained 90+ MPH driven rainfall.
              </p>
            </div>
          </div>

          {/* PHASE 2: 45% - 75% (Roofing Assembly - Shingles Descending) */}
          <div className={`transition-all duration-500 ease-out max-w-xl ${
            currentPhase === 2 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6 pointer-events-none absolute'
          }`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-copper-500/20 border border-copper-500/30 text-copper-300 text-xs font-mono uppercase mb-4 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-copper-400" />
              <span>Phase 02 // Architectural Shingle Grid</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
              Every layer. Every detail. <br />
              <span className="copper-gradient-text font-serif italic">Built with purpose.</span>
            </h2>

            <p className="text-sm sm:text-base text-sage-200 leading-relaxed mb-6">
              Premium dark charcoal architectural shingles settle into precision overlapping courses, mechanically anchored with 6-nail high-wind fastener schedules.
            </p>

            {/* Spec Card */}
            <div className="grid grid-cols-2 gap-3 pointer-events-auto">
              <div className="p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-lg border border-white/10 shadow-xl">
                <div className="text-copper-400 font-bold text-xs uppercase tracking-wider mb-1">Class 4 Impact</div>
                <div className="text-xs text-ivory-100">Resists up to 2-inch Texas hail stones</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-lg border border-white/10 shadow-xl">
                <div className="text-copper-400 font-bold text-xs uppercase tracking-wider mb-1">130 MPH Wind</div>
                <div className="text-xs text-ivory-100">DuraGrip® thermal adhesion seal</div>
              </div>
            </div>
          </div>

          {/* PHASE 3: 75% - 88% (Finishing Craftsmanship - Flashing & Caps) */}
          <div className={`transition-all duration-500 ease-out max-w-xl ${
            currentPhase === 3 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6 pointer-events-none absolute'
          }`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sage-400/20 border border-sage-400/30 text-sage-200 text-xs font-mono uppercase mb-4 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-copper-400" />
              <span>Phase 03 // Finishing Craftsmanship</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
              Sealed against storms. <br />
              <span className="text-copper-400 font-serif italic">Finished for a lifetime.</span>
            </h2>

            <p className="text-sm sm:text-base text-sage-200 leading-relaxed mb-6">
              Heavy-gauge step flashing, copper valleys, and continuous high-flow ridge vents exhaust attic heat while providing an immaculate architectural crown.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 backdrop-blur-lg border border-white/10 pointer-events-auto flex items-center justify-between shadow-xl">
              <div>
                <div className="text-xs font-semibold text-ivory-100">Ridge Cap Ventilation System</div>
                <div className="text-xs text-sage-300">Continuous attic airflow balances home climate</div>
              </div>
              <span className="text-xs font-bold text-copper-400 bg-copper-500/10 px-2.5 py-1 rounded">100% Sealed</span>
            </div>
          </div>

          {/* PHASE 4: 88% - 100% (Final Reveal - Complete System) */}
          <div className={`transition-all duration-500 ease-out max-w-2xl ${
            currentPhase === 4 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6 pointer-events-none absolute'
          }`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Complete Architectural System</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5 drop-shadow-lg">
              Built for What <br />
              <span className="copper-gradient-text font-serif italic font-normal">Matters Most.</span>
            </h2>

            <p className="text-base sm:text-lg text-sage-200 max-w-xl leading-relaxed mb-8 drop-shadow">
              Quality materials. Thoughtful installation. Fifty years of confidence overhead for your family and home.
            </p>

            <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
              <button
                onClick={onOpenEstimate}
                className="px-8 py-4 rounded-lg bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-base shadow-xl hover:shadow-copper-glow transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>Schedule Your Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="tel:2148337663"
                className="px-6 py-4 rounded-lg bg-slate-900/90 hover:bg-slate-850 text-ivory-100 border border-white/20 backdrop-blur-md font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-copper-400" />
                <span>Call (214) 833-7663</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Progress & Milestone Navigation Bar */}
        <div className="relative z-20 pb-6 px-4 sm:px-6 lg:px-8 max-w-site mx-auto w-full pointer-events-auto">
          <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl">
            
            {/* Step markers */}
            <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-2.5">
              {[
                { title: 'Decking', pct: 0.05 },
                { title: 'Underlayment', pct: 0.25 },
                { title: 'Shingles', pct: 0.55 },
                { title: 'Flashing', pct: 0.80 },
                { title: 'Complete', pct: 0.98 },
              ].map((step, idx) => {
                const isActive = currentPhase === idx;
                const isPassed = currentPhase > idx;
                return (
                  <button
                    key={idx}
                    onClick={() => seekToStage(step.pct)}
                    className="group text-left focus:outline-none transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? 'bg-copper-400 ring-2 ring-copper-400/30' :
                        isPassed ? 'bg-emerald-400' : 'bg-slate-700'
                      }`} />
                      <span className={`text-[11px] font-mono uppercase tracking-wider hidden sm:inline ${
                        isActive ? 'text-copper-300 font-bold' :
                        isPassed ? 'text-sage-200' : 'text-sage-400'
                      }`}>
                        0{idx + 1}
                      </span>
                    </div>
                    <div className={`text-xs font-medium truncate ${
                      isActive ? 'text-white' : 'text-sage-400 group-hover:text-sage-200'
                    }`}>
                      {step.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Continuous scrub progress bar */}
            <div className="relative w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-copper-500 via-copper-400 to-emerald-400 transition-all duration-75 rounded-full"
                style={{ width: `${Math.max(2, scrollProgress * 100)}%` }}
              />
            </div>

            {/* Bottom helper tip */}
            <div className="flex items-center justify-between text-[11px] text-sage-400 mt-2 font-sans">
              <div className="flex items-center gap-1.5">
                <ChevronDown className="w-3.5 h-3.5 animate-bounce text-copper-400" />
                <span>Scroll down or click milestones to witness the architectural roof assembly</span>
              </div>
              <button 
                onClick={() => seekToStage(0.0)} 
                className="hover:text-copper-300 flex items-center gap-1 cursor-pointer"
                title="Restart Assembly"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
