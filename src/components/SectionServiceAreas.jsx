import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SectionServiceAreas({ onOpenEstimate }) {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState(null);

  const territories = [
    {
      region: 'Dallas & Park Cities',
      coords: '32.8335° N, 96.8042° W',
      cities: 'Highland Park, University Park, Preston Hollow, Lakewood',
      turnaround: 'Within 2 Hours',
      focus: 'Historic Tudor Slate & Architectural Shingles'
    },
    {
      region: 'Collin County Corridor',
      coords: '33.1507° N, 96.8236° W',
      cities: 'Plano (Willow Bend), Frisco (Stonebriar), Prosper, Celina, McKinney',
      turnaround: 'Within 2 Hours',
      focus: 'Class 4 Impact SBS & Hail Claim Fortification'
    },
    {
      region: 'Tarrant & Denton County',
      coords: '32.9412° N, 97.1342° W',
      cities: 'Southlake, Colleyville, Westlake, Fort Worth, Keller',
      turnaround: 'Same-Day Dispatch',
      focus: 'Luxury Designer Shingles & Standing Seam Metal'
    }
  ];

  const handleZipCheck = (e) => {
    e.preventDefault();
    if (zipInput.trim().length >= 3) {
      setZipResult({
        verified: true,
        message: `Field Dispatch Confirmed for ZIP ${zipInput.trim()}`,
        detail: 'We have certified project directors active in your zone today. Same-day 4K drone appointments available.'
      });
    }
  };

  return (
    <section id="areas" className="py-24 sm:py-32 bg-carbon-900 text-chalk border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-copper-400 uppercase block mb-3 font-bold">
              SECTION 09 // REGIONAL JURISDICTION
            </span>
            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-copper-200 leading-tight">
              Dallas-Fort Worth <br />
              <span className="font-sans font-black not-italic text-white">regional coverage.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Our certified inspection teams are permanently stationed throughout North Texas to deliver rapid emergency response and scheduled on-site audits.
            </p>
          </div>
        </div>

        {/* Interactive ZIP Code Verification Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="p-4 sm:p-6 bg-carbon-950/90 border border-white/10 shadow-obsidian-lg backdrop-blur-md">
            <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-copper-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Enter your 5-digit ZIP code (e.g. 75205, 75024)"
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value);
                    if (zipResult) setZipResult(null);
                  }}
                  className="w-full pl-11 pr-4 py-3 bg-carbon-900 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-copper-400 placeholder:text-stone-500 transition-colors"
                  maxLength={5}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-copper-500 hover:bg-copper-400 text-carbon-950 text-xs font-mono font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-lg active:scale-95"
              >
                Verify Dispatch
              </button>
            </form>

            {zipResult && (
              <div className="mt-4 p-4 bg-carbon-900 border border-copper-400/50 text-xs animate-in fade-in duration-200 space-y-2">
                <div className="flex items-center gap-2 font-mono font-bold text-copper-300">
                  <CheckCircle2 className="w-4 h-4 text-copper-400" />
                  <span>{zipResult.message}</span>
                </div>
                <p className="text-stone-300 font-sans">
                  {zipResult.detail}
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-stone-400">Fast 45-minute on-site assessment</span>
                  <button
                    onClick={() => onOpenEstimate(`Service for ZIP ${zipInput}`)}
                    className="font-mono text-xs font-bold text-copper-400 hover:text-copper-300 underline cursor-pointer"
                  >
                    Schedule ZIP {zipInput} Inspection →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Territory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {territories.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-carbon-950/90 border border-white/10 flex flex-col justify-between space-y-6 shadow-obsidian-lg hover:border-copper-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-3">
                  <span>{t.coords}</span>
                  <span className="text-copper-400 font-bold">{t.turnaround}</span>
                </div>

                <h3 className="font-sans font-bold text-xl text-white mb-2">
                  {t.region}
                </h3>

                <p className="text-xs text-stone-300 font-sans mb-4">
                  {t.cities}
                </p>

                <div className="p-3 bg-carbon-900 border border-white/10 text-[11px] font-mono text-stone-200">
                  <span className="text-copper-400 block uppercase font-bold text-[9px] mb-0.5">Primary Specialization:</span>
                  {t.focus}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-400">Crews Dispatched Daily</span>
                <button
                  onClick={() => onOpenEstimate(`Territory: ${t.region}`)}
                  className="text-xs font-mono font-bold text-copper-400 hover:text-copper-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Request Crew</span>
                  <ArrowRight className="w-3.5 h-3.5 text-copper-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
