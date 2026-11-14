import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  Clock, 
  Phone, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ServiceAreas({ onOpenEstimate }) {
  const [zipInput, setZipInput] = useState('');
  const [zipStatus, setZipStatus] = useState(null); // null, 'available', 'pending'

  const cities = [
    {
      name: 'Highland Park & University Park',
      county: 'Dallas County',
      response: 'Within 2 Hours',
      focus: 'Historic Slate & Architectural Shingles',
      zips: ['75205', '75225', '75209']
    },
    {
      name: 'Frisco & Prosper',
      county: 'Collin & Denton County',
      response: 'Within 2 Hours',
      focus: 'Hail-Resistant Class 4 Restorations',
      zips: ['75033', '75034', '75035', '75078']
    },
    {
      name: 'Southlake, Westlake & Colleyville',
      county: 'Tarrant County',
      response: 'Same-Day Dispatch',
      focus: 'Luxury Designer Shingles & Copper Accents',
      zips: ['76092', '76262', '76034']
    },
    {
      name: 'Plano (Willow Bend & West)',
      county: 'Collin County',
      response: 'Within 2 Hours',
      focus: 'Full Roof Replacement & Attic Ventilation',
      zips: ['75024', '75093', '75025']
    },
    {
      name: 'McKinney & Celina',
      county: 'Collin County',
      response: 'Same-Day Dispatch',
      focus: 'Storm Damage Insurance Restorations',
      zips: ['75070', '75071', '75072', '75009']
    },
    {
      name: 'Dallas (Preston Hollow & Lakewood)',
      county: 'Dallas County',
      response: 'Within 2 Hours',
      focus: 'Architectural GAF Golden Pledge Installs',
      zips: ['75220', '75229', '75230', '75214']
    },
    {
      name: 'Allen & Fairview',
      county: 'Collin County',
      response: 'Same-Day Dispatch',
      focus: 'Residential Re-Roofing & Gutters',
      zips: ['75002', '75013']
    },
    {
      name: 'Fort Worth & Tarrant County',
      county: 'Tarrant County',
      response: 'Same-Day Dispatch',
      focus: 'Wind & Hail Impact Fortification',
      zips: ['76102', '76107', '76109', '76132']
    }
  ];

  const handleZipCheck = (e) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (cleanZip.length >= 3) {
      setZipStatus({
        status: 'available',
        message: `Active Roofing Dispatch Available in ZIP ${cleanZip}`,
        sub: 'We currently have field inspectors operating across your sector. Same-day appointments available.'
      });
    }
  };

  return (
    <section id="areas" className="py-24 bg-ivory-100 text-graphite-400 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-700 text-xs font-mono uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-copper-600" />
            <span>North Texas Service Footprint</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Serving Dallas-Fort Worth & <br />
            <span className="font-serif italic font-normal text-copper-600">Surrounding Communities.</span>
          </h2>

          <p className="text-sm sm:text-base text-graphite-300 max-w-2xl mx-auto leading-relaxed">
            Our certified inspectors and installation crews are stationed strategically throughout North Texas to deliver prompt emergency response and scheduled estimates.
          </p>
        </div>

        {/* Interactive ZIP Code Checker Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-900/10 shadow-elevated">
            <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-copper-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Enter your 5-digit ZIP code (e.g. 75024, 75205)"
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value);
                    if (zipStatus) setZipStatus(null);
                  }}
                  className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-ivory-50 border border-slate-900/10 focus:outline-none focus:ring-2 focus:ring-copper-500 text-slate-900 placeholder:text-graphite-200"
                  maxLength={5}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs shadow-md transition-colors whitespace-nowrap"
              >
                Check Local Coverage
              </button>
            </form>

            {/* Instant ZIP check feedback */}
            {zipStatus && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{zipStatus.message}</span>
                </div>
                <p className="text-emerald-700 mt-1">
                  {zipStatus.sub}
                </p>
                <div className="mt-3 pt-2 border-t border-emerald-500/20 flex items-center justify-between">
                  <span className="text-[11px] text-graphite-300">Fast inspection turnaround</span>
                  <button
                    onClick={() => onOpenEstimate(`Service for ZIP ${zipInput}`)}
                    className="font-bold text-copper-700 hover:text-copper-900 underline"
                  >
                    Schedule ZIP {zipInput} Inspection →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-900/5 shadow-elevated hover:shadow-premium transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-copper-600 uppercase font-semibold">
                    {city.county}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {city.response}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2 leading-snug">
                  {city.name}
                </h3>

                <p className="text-xs text-graphite-300 leading-relaxed mb-4">
                  {city.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-graphite-200">
                  {city.zips.slice(0, 2).join(', ')}...
                </span>
                <button
                  onClick={() => onOpenEstimate(`Roofing in ${city.name}`)}
                  className="text-xs font-bold text-slate-900 hover:text-copper-600 flex items-center gap-1 transition-colors"
                >
                  <span>Request Crew</span>
                  <ArrowRight className="w-3.5 h-3.5 text-copper-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
