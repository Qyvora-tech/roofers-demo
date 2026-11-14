import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Calendar, 
  Hammer, 
  CloudRain, 
  Search, 
  Droplets,
  ArrowRight,
  Clock
} from 'lucide-react';

export default function Navbar({ onOpenEstimate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    {
      title: 'Complete Roof Replacement',
      desc: 'Architectural & designer shingles engineered for 50-year longevity.',
      icon: Hammer,
      href: '#services',
    },
    {
      title: 'Precision Leak & Shingle Repairs',
      desc: 'Same-day diagnostic response and structural moisture mitigation.',
      icon: ShieldCheck,
      href: '#services',
    },
    {
      title: 'Storm, Hail & Wind Restoration',
      desc: 'Forensic digital inspections and complete insurance claim support.',
      icon: CloudRain,
      href: '#services',
    },
    {
      title: 'Drone & Structural Inspections',
      desc: 'High-res thermal imaging and comprehensive attic decking analysis.',
      icon: Search,
      href: '#services',
    },
    {
      title: 'Seamless Gutters & Drainage',
      desc: 'Custom continuous copper and aluminum rainwater diverters.',
      icon: Droplets,
      href: '#services',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Strip */}
      <div className={`bg-slate-950 text-sage-200 text-xs py-2 px-4 border-b border-white/5 transition-all duration-300 ${
        isScrolled ? 'hidden md:hidden' : 'block'
      }`}>
        <div className="max-w-site mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-ivory-100 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Serving Dallas-Fort Worth & North Texas
            </span>
            <span className="hidden lg:inline text-sage-400">•</span>
            <span className="hidden lg:inline text-sage-300">TX Lic. #48921 • $2M Insured</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-sage-300">
              <Clock className="w-3.5 h-3.5 text-copper-500" />
              <span>Mon - Sat: 7:00 AM – 7:00 PM</span>
            </div>
            <a 
              href="tel:2148337663" 
              className="text-ivory-100 hover:text-copper-400 font-medium flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-copper-500" />
              <span>Storm Hotline: (214) 833-7663</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10' 
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4'
      }`}>
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-copper-400 rounded-lg p-1">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-copper-500/20 to-copper-600/10 border border-copper-500/40 flex items-center justify-center group-hover:border-copper-400 transition-colors">
              <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m2 13 10-9 10 9" />
                <path d="M5 10.3V21h14V10.3" />
                <path d="M9 21v-7h6v7" />
                <path d="M12 4v4" stroke="#FAF0E8" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                <span>SLATE</span>
                <span className="text-copper-400 font-serif italic text-lg">&</span>
                <span>RIDGE</span>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-sage-300 font-medium font-sans">
                Roofing Co.
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a 
              href="#" 
              className="px-3 py-2 text-sm font-medium text-ivory-100 hover:text-copper-400 transition-colors rounded-md"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="px-3 py-2 text-sm font-medium text-ivory-100 hover:text-copper-400 transition-colors rounded-md flex items-center gap-1 focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-copper-400' : 'text-sage-400'}`} />
              </button>

              {/* Mega-menu dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-84 mt-2 p-3 bg-slate-900/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-sage-400 px-3 py-1.5 border-b border-white/5 mb-1">
                    Specialized Solutions
                  </div>
                  {serviceItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-md bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400 group-hover:bg-copper-500 group-hover:text-slate-900 transition-colors shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-copper-300 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-sage-300 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                  <div className="mt-2 pt-2 border-t border-white/5 px-2">
                    <button
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        onOpenEstimate();
                      }}
                      className="w-full py-2 px-3 text-xs font-semibold text-copper-300 hover:text-white bg-copper-500/10 hover:bg-copper-500/20 rounded-md flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Need a custom roofing evaluation?</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#anatomy" 
              className="px-3 py-2 text-sm font-medium text-ivory-100 hover:text-copper-400 transition-colors rounded-md"
            >
              Roof Anatomy
            </a>

            <a 
              href="#gallery" 
              className="px-3 py-2 text-sm font-medium text-ivory-100 hover:text-copper-400 transition-colors rounded-md"
            >
              Our Work
            </a>

            <a 
              href="#why-us" 
              className="px-3 py-2 text-sm font-medium text-ivory-100 hover:text-copper-400 transition-colors rounded-md"
            >
              The Difference
            </a>

            <a 
              href="#calculator" 
              className="px-3 py-2 text-sm font-medium text-ivory-100 hover:text-copper-400 transition-colors rounded-md"
            >
              Cost Estimator
            </a>

            <a 
              href="#process" 
              className="px-3 py-2 text-sm font-medium text-ivory-100 hover:text-copper-400 transition-colors rounded-md"
            >
              Process
            </a>

            <a 
              href="#areas" 
              className="px-3 py-2 text-sm font-medium text-ivory-100 hover:text-copper-400 transition-colors rounded-md"
            >
              Areas
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:2148337663" 
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-ivory-100 hover:text-copper-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-copper-400" />
              <span className="hidden xl:inline">(214) 833-7663</span>
            </a>

            <button 
              onClick={onOpenEstimate}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-copper-500 text-slate-950 font-display font-semibold text-sm shadow-md hover:shadow-copper-glow hover:bg-copper-400 transition-all duration-200 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEstimate}
              className="px-3 py-1.5 text-xs font-bold rounded bg-copper-500 text-slate-950 hover:bg-copper-400"
            >
              Free Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-sage-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-t border-white/10 px-4 pt-4 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5"
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5 flex items-center justify-between"
              >
                <span>Services</span>
                <span className="text-xs text-copper-400">5 Solutions</span>
              </a>
              <a 
                href="#anatomy" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5"
              >
                Roof Anatomy & System Layers
              </a>
              <a 
                href="#gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5"
              >
                Our Work (Before & After)
              </a>
              <a 
                href="#why-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5"
              >
                The Slate & Ridge Standard
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5"
              >
                Instant Cost Calculator
              </a>
              <a 
                href="#process" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5"
              >
                5-Step Installation Journey
              </a>
              <a 
                href="#areas" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5"
              >
                Dallas-Fort Worth Service Areas
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white font-medium hover:bg-white/5"
              >
                Frequently Asked Questions
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <a 
                href="tel:2148337663" 
                className="w-full py-3 px-4 rounded-lg bg-slate-800 text-white font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-copper-400" />
                <span>Call (214) 833-7663</span>
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full py-3 px-4 rounded-lg bg-copper-500 text-slate-950 font-display font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Schedule Free Roof Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
