import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowUp, 
  Heart,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onOpenEstimate }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative top accent line in Aged Copper */}
      <div className="h-1 w-full bg-gradient-to-r from-copper-600 via-copper-400 to-copper-600" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-copper-500/20 to-copper-600/10 border border-copper-500/40 flex items-center justify-center">
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
            </div>

            <p className="text-xs text-sage-200 leading-relaxed max-w-sm">
              Architectural craftsmanship with dependable residential protection across North Texas. 50-year non-prorated warranties, master certified installers, and forensic storm restorations.
            </p>

            <div className="space-y-2 pt-2 text-xs text-sage-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Texas Roofing License #48921</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-copper-400 shrink-0" />
                <span>GAF Master Elite® Certified #ME-98214</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>$2,000,000 General Liability & Workers' Comp</span>
              </div>
            </div>
          </div>

          {/* Col 2: Roofing Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Roofing Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-sage-300">
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors flex items-center justify-between">
                  <span>Complete Roof Replacement</span>
                  <span className="text-[10px] text-copper-500 font-mono">50-Yr</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Class 4 Impact Hail Resistant Shingles
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Precision Leak & Flashing Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Forensic Storm & Wind Claim Advocacy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Free 4K Drone Aerial Roof Inspections
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Seamless Copper & Aluminum Gutters
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-copper-400 transition-colors">
                  Continuous Ridge Attic Ventilation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Exploration & Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-sage-300">
              <li>
                <a href="#anatomy" className="hover:text-copper-400 transition-colors">
                  Roof Anatomy
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-copper-400 transition-colors">
                  Cost Estimator
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-copper-400 transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-copper-400 transition-colors">
                  The Difference
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-copper-400 transition-colors">
                  5-Step Process
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-copper-400 transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-copper-400 transition-colors">
                  Homeowner FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-sage-300">
              <a 
                href="tel:2148337663" 
                className="flex items-center gap-2.5 text-white hover:text-copper-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-copper-400 shrink-0" />
                <span className="font-semibold text-sm">(214) 833-7663</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-copper-400 shrink-0" />
                <span>estimates@slateandridge.com</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <span>8350 N Central Expy, Suite 700<br />Dallas, TX 75206</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <span>Mon – Sat: 7:00 AM – 7:00 PM<br /><span className="text-copper-300">24/7 Emergency Storm Dispatch</span></span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEstimate('Footer Contact')}
                  className="w-full py-2.5 px-4 rounded-lg bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-xs transition-colors"
                >
                  Schedule Free Roof Audit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclosures & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-sage-400">
          <div className="space-y-1 text-center md:text-left">
            <div>
              © {new Date().getFullYear()} Slate & Ridge Roofing Co. All rights reserved. Texas Lic. #48921.
            </div>
            <div className="text-sage-500">
              Demonstration brand site built to showcase modern American residential roofing digital excellence.
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Warranty Certificate</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-sage-300 hover:text-white transition-colors"
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
