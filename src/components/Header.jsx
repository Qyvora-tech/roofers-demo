import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';

export default function Header({ onOpenEstimate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Craft', num: '01', href: '#craft' },
    { label: 'Services', num: '02', href: '#services' },
    { label: 'Materials', num: '03', href: '#materials' },
    { label: 'Selected Work', num: '04', href: '#portfolio' },
    { label: 'Process', num: '05', href: '#process' },
    { label: 'Philosophy', num: '06', href: '#philosophy' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Unified Bespoke Editorial Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-carbon-950/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-carbon-950/90 via-carbon-950/40 to-transparent py-4 sm:py-5'
      }`}>
        <div className="max-w-site mx-auto px-6 sm:px-12 flex items-center justify-between">
          
          {/* Brand Wordmark & Crest */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="w-8 h-8 border border-copper-500/50 bg-carbon-900 flex items-center justify-center transition-colors group-hover:border-copper-400">
              <svg className="w-4 h-4 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M2 14L12 4L22 14" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 10.5V20H18V10.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="2" y1="20" x2="22" y2="20" stroke="#AAA99C" strokeWidth="1" />
              </svg>
            </div>
            <div>
              <div className="font-sans font-black text-lg tracking-[0.16em] text-chalk uppercase flex items-center gap-1 leading-none">
                <span>RIDGELINE</span>
              </div>
              <p className="text-[9px] font-mono tracking-[0.22em] text-stone-400 uppercase mt-0.5">
                Architectural Roofing
              </p>
            </div>
          </a>

          {/* Editorial Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                className="group flex items-baseline gap-1.5 py-1 text-xs font-mono uppercase tracking-wider text-stone-300 hover:text-chalk transition-colors"
              >
                <span className="text-[10px] text-copper-400 font-mono transition-colors">
                  {link.num}
                </span>
                <span className="font-medium font-sans lowercase first-letter:uppercase text-[13px] tracking-normal text-stone-200 group-hover:text-chalk">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Action CTAs on Right */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:2148337663" 
              className="text-xs font-mono tracking-wider text-stone-300 hover:text-copper-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-copper-400" />
              <span>(214) 833-7663</span>
            </a>

            <button
              onClick={() => onOpenEstimate()}
              className="px-5 py-2.5 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 active:scale-95 cursor-pointer shadow-sm"
            >
              <span>Request an Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 text-carbon-950" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenEstimate()}
              className="px-3 py-1.5 bg-copper-500 text-carbon-950 font-mono text-[10px] font-bold uppercase tracking-wider"
            >
              Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 border border-stone-500/30 text-stone-300 hover:text-chalk transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-carbon-950 border-t border-white/10 px-6 py-6 space-y-4 animate-in fade-in duration-200 shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.num}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 border-b border-white/5 text-sm font-sans text-stone-200 hover:text-copper-400"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-copper-400">{link.num}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <a
                href="tel:2148337663"
                className="w-full py-3 border border-white/10 text-stone-200 font-mono text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-copper-400" />
                <span>Call (214) 833-7663</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full py-3 bg-copper-500 text-carbon-950 font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Request an Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
