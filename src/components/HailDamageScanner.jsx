import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Radio, Shield, MapPin, ArrowRight, CloudHail, CheckCircle2, FileText } from 'lucide-react';
import { STORM_RADAR_DATA } from '../data/roofingData';

export default function HailDamageScanner({ onOpenLeadModal }) {
  const [zipInput, setZipInput] = useState('');
  const [scanning, setScanning] = useState(false);
  const [currentResult, setCurrentResult] = useState(STORM_RADAR_DATA[0]);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (!zipInput.trim()) return;
    
    setScanning(true);
    setTimeout(() => {
      const found = STORM_RADAR_DATA.find(d => d.zip === zipInput.trim());
      if (found) {
        setCurrentResult(found);
      } else {
        setCurrentResult({
          zip: zipInput.trim(),
          city: 'Regional Metro Corridor',
          state: 'US',
          stormEvent: 'Wind Shear (>65 MPH) & Hail Micro-Impacts',
          date: 'Active Statutory 12-Month Window',
          threatLevel: 'Elevated Risk',
          claimApprovalRate: '96.8%',
          statusBadge: 'Drone Inspection Recommended',
          avgClaimValue: '$34,200'
        });
      }
      setScanning(false);
    }, 600);
  };

  const selectPreset = (preset) => {
    setZipInput(preset.zip);
    setCurrentResult(preset);
  };

  return (
    <section id="hail-radar" className="py-24 sm:py-32 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
            Doppler Weather Verification
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Check If Your Roof Qualifies for a Full Replacement
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Hail bruises and lifted shingles are often invisible from the ground. Enter your 5-digit US ZIP code to verify recent storm radar footprints and statutory insurance filing windows.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10 space-y-3">
          <form onSubmit={handleSearch} className="flex rounded-xl overflow-hidden border border-slate-750 bg-slate-900 shadow-medium">
            <input
              type="text"
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
              placeholder="Enter your 5-digit US ZIP Code (e.g. 75001, 80202, 37203)..."
              maxLength={10}
              className="flex-1 px-5 py-4 bg-transparent text-white placeholder-slate-500 text-sm outline-none font-sans"
            />
            <button
              type="submit"
              disabled={scanning}
              className="px-6 py-4 bg-copper-500 hover:bg-copper-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-copper-glow"
            >
              {scanning ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Checking...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Verify ZIP Code</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Metro Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-medium">Recent severe storm corridors:</span>
            {STORM_RADAR_DATA.map((item) => (
              <button
                key={item.zip}
                onClick={() => selectPreset(item)}
                className={`px-3 py-1 rounded-full border text-xs transition-all ${
                  currentResult.zip === item.zip
                    ? 'border-copper-500 bg-copper-500/20 text-copper-300 font-bold'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {item.city.split('/')[0]} ({item.zip})
              </button>
            ))}
          </div>
        </div>

        {/* Verification Result Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentResult.zip}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-4xl mx-auto rounded-2xl bg-slate-900 border border-slate-750 p-6 sm:p-8 space-y-6 shadow-medium"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/80 font-bold uppercase">
                    {currentResult.threatLevel}
                  </span>
                  <span className="text-slate-400 font-medium">
                    ZIP: <strong className="text-white">{currentResult.zip}</strong>
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {currentResult.city}, {currentResult.state} Corridor
                </h3>
              </div>

              <div className="sm:text-right">
                <div className="text-xs text-slate-400 font-medium">Average Settled Claim Scope</div>
                <div className="font-serif text-2xl font-bold text-copper-400">{currentResult.avgClaimValue}</div>
              </div>
            </div>

            {/* 3 Metric Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-slate-400 font-medium flex items-center gap-1.5">
                  <CloudHail className="w-3.5 h-3.5 text-copper-400" />
                  <span>Detected Weather Event</span>
                </div>
                <div className="text-sm font-bold text-white">{currentResult.stormEvent}</div>
                <div className="text-slate-400 text-[11px]">{currentResult.date}</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-slate-400 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Claim Approval Rate</span>
                </div>
                <div className="text-sm font-bold text-emerald-400">{currentResult.claimApprovalRate}</div>
                <div className="text-slate-400 text-[11px]">When represented by Haag certified inspectors</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-slate-400 font-medium flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-copper-400" />
                  <span>Inspection Eligibility</span>
                </div>
                <div className="text-sm font-bold text-white">{currentResult.statusBadge}</div>
                <div className="text-slate-400 text-[11px]">100% Free 4K Drone Inspection</div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-300 text-center sm:text-left">
                Statutory claim filing windows are strictly limited. We meet your insurance adjuster on your roof with forensic photo proof.
              </div>

              <button
                onClick={() => onOpenLeadModal(`Radar Verification for ZIP ${currentResult.zip} (${currentResult.city})`)}
                className="w-full sm:w-auto px-6 py-3.5 rounded bg-copper-500 hover:bg-copper-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm shrink-0"
              >
                <span>Book Drone Scan in {currentResult.city.split('/')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
