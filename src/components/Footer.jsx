import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenLeadModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 border border-slate-750 flex items-center justify-center font-serif text-lg font-bold text-copper-400">
                TP
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  TIMBER <span className="text-copper-400 font-light">&</span> PEAK
                </span>
                <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                  Architectural Roofing Co. • USA
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              America's master-certified architectural roofing firm. Installing standing seam copper and steel, hand-split cedar shake, and designer shingles for premier custom residences.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-2 font-sans">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-copper-400" />
                <a href="tel:18007927663" className="hover:text-white transition-colors">(800) 792-ROOF (24/7 Hotline)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-copper-400" />
                <span>concierge@timberpeakroofing.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-copper-400" />
                <span>4500 Preston Road, Highland Park, TX 75205</span>
              </div>
            </div>
          </div>

          {/* Col 1: Systems */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Systems
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#materials" className="hover:text-white transition-colors">Standing Seam Metal</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Western Red Cedar</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Vermont Natural Slate</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Heritage Class 4 Shingle</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Commercial TPO Membrane</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Resources
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#calculator" className="hover:text-white transition-colors">Instant Cost Calculator</a></li>
              <li><a href="#hail-radar" className="hover:text-white transition-colors">Doppler Storm Verification</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Before & After Gallery</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Installation Protocol</a></li>
              <li><a href="#warranties" className="hover:text-white transition-colors">50-Year Golden Pledge</a></li>
            </ul>
          </div>

          {/* Col 3: Coverage */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Primary Service States
            </h5>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div>• Texas (Dallas, Fort Worth, Austin)</div>
              <div>• Colorado (Denver, Vail, Aspen)</div>
              <div>• Tennessee (Nashville, Franklin)</div>
              <div>• Georgia (Atlanta, Buckhead)</div>
              <div>• North Carolina (Charlotte, Raleigh)</div>
            </div>
          </div>

        </div>

        {/* License Strip */}
        <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/60 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            Licensed General Roofing Contractor: TX #RC-892401 • CO #RC-449102 • TN #RC-772901 • GA #RC-319940
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>GAF Master Elite® #ME49821</span>
            <span>•</span>
            <span>$5,000,000 Comprehensive Liability Insured</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Timber & Peak Roofing Co. All Rights Reserved. Master Architectural Exteriors USA.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-copper-400 hover:text-white transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
