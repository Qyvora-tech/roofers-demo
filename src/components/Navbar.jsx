import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Star, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenLeadModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Materials', href: '#materials' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Cost Calculator', href: '#calculator' },
    { name: 'Storm Verification', href: '#hail-radar' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5 text-amber-400">
              <div className="flex">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <span className="text-white font-semibold ml-1">4.99/5.0</span>
              <span className="hidden sm:inline text-slate-400">• 1,840+ Homeowner Reviews</span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-copper-400" />
              <span>GAF Master Elite® Certified (Top 2% in US)</span>
            </div>
          </div>

          <div className="flex items-center gap-5 font-medium">
            <span className="hidden sm:inline text-slate-400">24/7 Storm Dispatch</span>
            <a 
              href="tel:18007927663" 
              className="text-copper-400 hover:text-copper-300 font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(800) 792-ROOF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-medium py-3.5 border-b border-slate-800' 
            : 'bg-slate-900/80 backdrop-blur-sm py-5 border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-slate-850 text-white flex items-center justify-center font-serif text-xl font-bold border border-slate-700 shadow-sm group-hover:border-copper-500 group-hover:text-copper-400 transition-colors">
              TP
            </div>
            <div>
              <div className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                TIMBER <span className="text-copper-500 font-light">&</span> PEAK
              </div>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium mt-1">
                Architectural Roofing Co. • USA
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors py-1 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-copper-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenLeadModal('Header CTA')}
              className="px-5 py-2.5 rounded bg-copper-500 hover:bg-copper-600 text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center gap-2"
            >
              <span>Free Drone Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 shadow-elevated">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-200 hover:text-copper-400 py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                href="tel:18007927663"
                className="block text-center py-3 bg-slate-800 text-white font-bold text-sm rounded shadow-sm border border-slate-700"
              >
                Call: (800) 792-ROOF (24/7)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('Mobile Menu CTA');
                }}
                className="w-full py-3 bg-copper-500 text-white font-bold text-sm rounded uppercase tracking-wider shadow-sm"
              >
                Schedule Free Drone Scan
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
