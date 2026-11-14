import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  Play, 
  Pause, 
  RotateCcw, 
  Phone
} from 'lucide-react';

const TOTAL_FRAMES = 94;

export default function HeroAssembly({ onOpenEstimate, lenisInstance }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastDrawnIndexRef = useRef(-1);
  const lastPctRef = useRef(-1);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);

  // Smooth frame interpolation refs
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const autoPlayTimerRef = useRef(null);

  // Draw specific frame onto canvas with aspect-ratio preservation (object-cover)
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
    const img = imagesRef.current[idx];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

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

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Preload & decode frames off main thread
  useEffect(() => {
    let isCancelled = false;
    const images = new Array(TOTAL_FRAMES);
    let loaded = 0;

    const firstImg = new Image();
    firstImg.src = '/media/roof-frames/frame_000.webp';
    firstImg.decode ? firstImg.decode().then(() => onFirstLoaded()).catch(() => onFirstLoaded()) : (firstImg.onload = onFirstLoaded);

    function onFirstLoaded() {
      if (isCancelled) return;
      images[0] = firstImg;
      loaded++;
      setLoadedCount(1);
      drawFrame(0);
      lastDrawnIndexRef.current = 0;
    }

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i === 0) continue;
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/media/roof-frames/frame_${frameNum}.webp`;

      const onFrameDecoded = () => {
        if (isCancelled) return;
        images[i] = img;
        loaded++;
        setLoadedCount(loaded);
        if (loaded >= TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      if (img.decode) {
        img.decode().then(onFrameDecoded).catch(onFrameDecoded);
      } else {
        img.onload = onFrameDecoded;
        img.onerror = onFrameDecoded;
      }
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // Handle Resize for retina resolution
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      const ctx = canvas.getContext('2d', { alpha: false });
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'medium';
      }

      lastDrawnIndexRef.current = -1;
      drawFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Hook into Lenis smooth inertial scroll
  useEffect(() => {
    const updateProgress = (scrolledY) => {
      if (!containerRef.current || isPlayingAuto) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      targetFrameRef.current = clamped * (TOTAL_FRAMES - 1);

      const roundedPct = Math.round(clamped * 100);
      if (roundedPct !== lastPctRef.current) {
        lastPctRef.current = roundedPct;
        setScrollProgress(clamped);
      }
    };

    if (lenisInstance) {
      const onLenisScroll = (e) => updateProgress(e.scroll);
      lenisInstance.on('scroll', onLenisScroll);
      return () => lenisInstance.off('scroll', onLenisScroll);
    } else {
      const onWindowScroll = () => updateProgress(window.scrollY);
      window.addEventListener('scroll', onWindowScroll, { passive: true });
      return () => window.removeEventListener('scroll', onWindowScroll);
    }
  }, [lenisInstance, isPlayingAuto]);

  // 60-120 FPS continuous render loop with tuned damping
  useEffect(() => {
    let animId;

    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.22;
        const frameToDraw = Math.round(currentFrameRef.current);
        if (frameToDraw !== lastDrawnIndexRef.current) {
          drawFrame(frameToDraw);
          lastDrawnIndexRef.current = frameToDraw;
        }
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
    const speed = 0.0028;

    const step = () => {
      progress += speed;
      if (progress > 1) progress = 0;
      setScrollProgress(progress);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
      currentFrameRef.current = targetFrameRef.current;
      const frameToDraw = Math.round(currentFrameRef.current);
      if (frameToDraw !== lastDrawnIndexRef.current) {
        drawFrame(frameToDraw);
        lastDrawnIndexRef.current = frameToDraw;
      }
      autoPlayTimerRef.current = requestAnimationFrame(step);
    };

    autoPlayTimerRef.current = requestAnimationFrame(step);

    return () => {
      if (autoPlayTimerRef.current) cancelAnimationFrame(autoPlayTimerRef.current);
    };
  }, [isPlayingAuto, drawFrame, scrollProgress]);

  const toggleAutoPlay = () => {
    setIsPlayingAuto(!isPlayingAuto);
  };

  const seekToStage = (progress) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = window.scrollY + rect.top + (progress * totalScrollable);

    if (lenisInstance) {
      lenisInstance.scrollTo(targetScrollY, { duration: 1.1 });
    } else {
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
  };

  const currentPhase = 
    scrollProgress < 0.20 ? 0 :
    scrollProgress < 0.45 ? 1 :
    scrollProgress < 0.75 ? 2 :
    scrollProgress < 0.88 ? 3 : 4;

  const phases = [
    {
      id: 0,
      badge: '01 // ARCHITECTURAL DIRECTIVE',
      headline: (
        <>
          A roof is more than <br />
          <span className="font-serif italic font-normal text-copper-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">a surface.</span>
        </>
      ),
      subhead: 'Every layer matters.',
      description: 'Witness the layered assembly of an architectural roofing system engineered for 50-year structural longevity. Scroll to progress through each forensic layer.',
      content: (
        <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
          <button
            onClick={onOpenEstimate}
            className="px-8 py-4 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xl active:scale-95"
          >
            <span>Request an Estimate</span>
            <ArrowRight className="w-4 h-4 text-carbon-950" />
          </button>
          <button
            onClick={() => seekToStage(0.98)}
            className="px-6 py-4 bg-carbon-900/90 hover:bg-carbon-800 text-white border border-white/20 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
          >
            View Completed Work
          </button>
        </div>
      )
    },
    {
      id: 1,
      badge: '02 // SUBSTRATE FORTIFICATION',
      headline: (
        <>
          Protection starts <br />
          <span className="font-serif italic font-normal text-copper-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">beneath the surface.</span>
        </>
      ),
      subhead: null,
      description: 'Solid 5/8" CDX exterior plywood inspected and ring-shank fastened. Sealed with self-adhering elastomeric ice & water membranes across all valleys, eaves, and chimney crickets.',
      content: (
        <div className="p-4 bg-carbon-950/95 border border-copper-400/40 max-w-md pointer-events-auto shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] font-mono text-stone-300 pb-2 border-b border-carbon-800">
            <span>SPECIFICATION // MEMBRANE</span>
            <span className="text-copper-400 font-bold">50-MIL SBS</span>
          </div>
          <p className="text-xs text-stone-100 pt-2 font-mono leading-relaxed">
            Self-healing bitumen core prevents water intrusion under sustained 90+ MPH wind-driven rainfall.
          </p>
        </div>
      )
    },
    {
      id: 2,
      badge: '03 // ARCHITECTURAL COMPOSITE',
      headline: (
        <>
          Every layer. Every detail. <br />
          <span className="font-serif italic font-normal text-copper-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Built with purpose.</span>
        </>
      ),
      subhead: null,
      description: 'Heavyweight Class 4 impact-resistant architectural shingles descending in calibrated overlapping courses, anchored with a 6-nail high-wind mechanical schedule.',
      content: (
        <div className="grid grid-cols-2 gap-3 max-w-md pointer-events-auto">
          <div className="p-3 bg-carbon-950/95 border border-copper-400/40 shadow-lg">
            <div className="text-[10px] font-mono uppercase text-copper-400 tracking-wider font-bold">IMPACT RATING</div>
            <div className="text-xs font-bold text-white mt-0.5">UL 2218 Class 4 Hail</div>
          </div>
          <div className="p-3 bg-carbon-950/95 border border-copper-400/40 shadow-lg">
            <div className="text-[10px] font-mono uppercase text-copper-400 tracking-wider font-bold">WIND VELOCITY</div>
            <div className="text-xs font-bold text-white mt-0.5">130 MPH DuraGrip®</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      badge: '04 // PERIMETER FLASHING & EXHAUST',
      headline: (
        <>
          Sealed against storms. <br />
          <span className="font-serif italic font-normal text-copper-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Finished for a lifetime.</span>
        </>
      ),
      subhead: null,
      description: '26-gauge baked enamel step flashing and continuous external-baffle ridge ventilation allow attic thermal respiration while blocking wind-driven rain.',
      content: (
        <div className="p-3.5 bg-carbon-950/95 border border-copper-400/40 max-w-md pointer-events-auto flex items-center justify-between text-xs font-mono shadow-lg">
          <span className="text-stone-300">RIDGE EXHAUST COEFFICIENT</span>
          <span className="text-copper-400 font-bold">18 SQ IN / LIN FT</span>
        </div>
      )
    },
    {
      id: 4,
      badge: '05 // COMPLETED ARCHITECTURAL SYSTEM',
      headline: (
        <>
          Built for What <br />
          <span className="font-serif italic font-normal text-copper-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Matters Most.</span>
        </>
      ),
      subhead: null,
      description: 'Quality materials. Thoughtful installation. Fifty years of confidence overhead for your residence.',
      content: (
        <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
          <button
            onClick={onOpenEstimate}
            className="px-8 py-4 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xl active:scale-95"
          >
            <span>Request an Estimate</span>
            <ArrowRight className="w-4 h-4 text-carbon-950" />
          </button>
          <a
            href="tel:2148337663"
            className="px-6 py-4 bg-carbon-900/90 hover:bg-carbon-800 text-white border border-white/20 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg"
          >
            <Phone className="w-3.5 h-3.5 text-copper-400" />
            <span>Call (214) 833-7663</span>
          </a>
        </div>
      )
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-carbon-950 text-chalk"
      style={{ height: '360vh' }}
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Canvas Render Layer */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.88]"
          />

          {/* Overall 60-70% Darkening Overlay across whole footage */}
          <div className="absolute inset-0 bg-carbon-950/60 pointer-events-none" />

          {/* Deep Architectural Left-Side Contrast Gradient for Text Prominence */}
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/95 via-carbon-950/75 to-transparent w-full md:w-3/5 lg:w-1/2 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-transparent to-carbon-950/70 pointer-events-none" />
        </div>

        {/* Top Spacer to clear header */}
        <div className="relative z-20 pt-28 sm:pt-32" />

        {/* Center Editorial Storytelling Overlay: High-Contrast & Prominent */}
        <div className="relative z-20 max-w-site mx-auto px-6 sm:px-12 w-full my-auto pointer-events-none min-h-[380px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl w-full"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-carbon-900/90 border border-copper-400 text-[11px] font-mono tracking-[0.25em] text-copper-300 font-bold uppercase mb-4 shadow-lg backdrop-blur-md">
                <span>{phases[currentPhase].badge}</span>
              </div>

              <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.06] mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
                {phases[currentPhase].headline}
              </h1>

              {phases[currentPhase].subhead && (
                <p className="font-serif italic text-2xl sm:text-4xl text-copper-200 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {phases[currentPhase].subhead}
                </p>
              )}

              <p className="text-sm sm:text-base text-stone-100 leading-relaxed max-w-lg mb-8 font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {phases[currentPhase].description}
              </p>

              {phases[currentPhase].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Discreet Minimalist Scroll Indicator with Hairline Progress Track */}
        <div className="relative z-20 pb-6 px-6 sm:px-12 max-w-site mx-auto w-full pointer-events-none">
          <div className="w-full h-0.5 bg-white/10 mb-3 overflow-hidden rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-copper-500 via-copper-400 to-amber-200 transition-all duration-150"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-stone-400/80">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-copper-400 animate-pulse"></span>
              <span className="tracking-widest">SCROLL TO ASSEMBLE ROOF</span>
            </div>
            <div className="tracking-widest font-bold text-copper-300">
              {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
