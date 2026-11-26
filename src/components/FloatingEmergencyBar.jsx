import React, { useState, useEffect } from 'react';
import { Phone, Calculator, ArrowRight, ShieldCheck, X } from 'lucide-react';

export default function FloatingEmergencyBar({ onOpenEstimate }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once user scrolls past 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <aside 
      aria-label="Emergency Dispatch and Quick Estimate Actions"
      className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <div className="bg-carbon-950/95 backdrop-blur-xl border border-copper-500/50 p-3 sm:py-2.5 sm:px-5 shadow-obsidian-lg rounded-none flex items-center justify-between gap-4">
        
        {/* Left: Live Dispatch Beacon */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

          <div className="text-left">
            <div className="text-[10px] font-mono uppercase tracking-wider text-copper-400 font-bold flex items-center gap-1.5">
              <span>DFW ACTIVE CREWS: 04</span>
              <span className="text-stone-500 hidden sm:inline">•</span>
              <span className="text-stone-300 hidden sm:inline">RAPID DISPATCH AVAILABLE</span>
            </div>
            <p className="text-[9px] font-mono text-stone-400 hidden md:block">
              Hail & Wind Forensic Team On Standby Across Dallas & Collin Counties
            </p>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:2148337663"
            className="px-3.5 py-2 bg-carbon-900 hover:bg-carbon-800 text-stone-200 border border-carbon-700 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-copper-400" />
            <span className="hidden sm:inline">(214) 833-7663</span>
            <span className="sm:hidden">Call</span>
          </a>

          <a
            href="#calculator"
            className="px-3.5 py-2 bg-carbon-900 hover:bg-carbon-800 text-stone-200 border border-carbon-700 font-mono text-xs uppercase tracking-wider transition-colors hidden md:flex items-center gap-1.5"
          >
            <Calculator className="w-3.5 h-3.5 text-copper-400" />
            <span>ROI Calculator</span>
          </a>

          <button
            onClick={() => onOpenEstimate()}
            className="px-4 py-2 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-copper-glow active:scale-95"
          >
            <span>Free Estimate</span>
            <ArrowRight className="w-3.5 h-3.5 text-carbon-950" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="text-stone-500 hover:text-stone-300 p-1 cursor-pointer transition-colors"
            title="Dismiss bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}
