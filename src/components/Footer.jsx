import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck, Award } from 'lucide-react';

export default function Footer({ onOpenEstimate }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-carbon-950 text-chalk border-t border-carbon-800 relative overflow-hidden">
      {/* Top Hairline in Oxidized Copper */}
      <div className="h-[2px] w-full bg-copper-500" />

      <div className="max-w-site mx-auto px-4 sm:px-8 pt-20 pb-12">
        
        {/* Oversized Brand Display */}
        <div className="pb-16 border-b border-carbon-800 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-copper-400 uppercase block mb-3">
              RIDGELINE ARCHITECTURAL ROOFING CO.
            </span>
            <div className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-chalk uppercase leading-none">
              RIDGELINE
            </div>
            <p className="font-serif italic text-xl sm:text-2xl text-stone-400 mt-2">
              Crafted Above. Built Beyond.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-stone-400 space-y-1">
            <div className="text-stone-300">HEADQUARTERS // NORTH TEXAS</div>
            <div>32.7767° N, 96.7970° W — DALLAS, TX</div>
            <div className="text-copper-400">TEXAS ROOFING LIC. #48921</div>
          </div>
        </div>

        {/* 4-Zone Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-carbon-800 text-xs">
          
          {/* Zone 1: Scope & Services (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-copper-400 block">
              01 // SPECIALIZED DISCIPLINES
            </span>
            <ul className="space-y-2.5 font-sans text-stone-300">
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Architectural Roof Replacement (50-Yr Golden Pledge)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Class 4 Hail Impact Fortification (SBS Composite)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Standing Seam Architectural Metal Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Forensic Wind & Hail Insurance Restoration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  High-Definition 4K Drone Aerial Roof Inspections
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Continuous Seamless Aged Copper Gutters & Drainage
                </a>
              </li>
            </ul>
          </div>

          {/* Zone 2: Exploration (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-copper-400 block">
              02 // DIRECTORY & ARCHIVE
            </span>
            <ul className="space-y-2.5 font-sans text-stone-300">
              <li>
                <a href="#craft" className="hover:text-copper-400 transition-colors">
                  Anatomy of Craft
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-copper-400 transition-colors">
                  Material Specifications
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-copper-400 transition-colors">
                  Selected Work (Before & After)
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-copper-400 transition-colors">
                  Working Philosophy
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-copper-400 transition-colors">
                  The 5-Stage Process
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-copper-400 transition-colors">
                  DFW Regional Jurisdictions
                </a>
              </li>
            </ul>
          </div>

          {/* Zone 3: Direct Studio Operations (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:pl-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-copper-400 block">
              03 // DIRECT CONTACT & DISPATCH
            </span>
            <div className="space-y-3 font-sans text-stone-300">
              <a 
                href="tel:2148337663" 
                className="font-sans font-bold text-xl text-chalk hover:text-copper-400 transition-colors block"
              >
                (214) 833-7663
              </a>
              <div className="font-mono text-xs text-stone-400">
                estimates@ridgelineroofing.com
              </div>
              <div className="font-sans text-xs text-stone-300">
                8350 N Central Expressway, Suite 700<br />
                Dallas, Texas 75206
              </div>
              <div className="font-mono text-[11px] text-stone-400 pt-2 border-t border-carbon-800">
                OPERATING: MON – SAT 7:00 AM – 7:00 PM<br />
                <span className="text-copper-400">24/7 ACTIVE STORM EMERGENCY TARPING</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEstimate('Footer Intake')}
                className="w-full py-3 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Architectural Inspection
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory Disclosures & Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-stone-500">
          <div className="space-y-1 text-center md:text-left">
            <div>
              © {new Date().getFullYear()} RIDGELINE ARCHITECTURAL ROOFING CO. ALL RIGHTS RESERVED.
            </div>
            <div>
              TEXAS LIC. #48921 • $2M COMMERCIAL LIABILITY & WORKERS' COMP.
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-chalk transition-colors cursor-pointer">Warranty Certificate</span>
            <span className="hover:text-chalk transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-chalk transition-colors cursor-pointer">Terms of Engagement</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 border border-carbon-700 hover:border-copper-400 flex items-center justify-center text-stone-400 hover:text-chalk transition-colors cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
