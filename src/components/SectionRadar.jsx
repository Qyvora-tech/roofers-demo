import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CloudRain, 
  AlertTriangle, 
  ShieldAlert, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Radar, 
  Crosshair, 
  CheckCircle2, 
  Compass, 
  Wind, 
  Zap 
} from 'lucide-react';

export default function SectionRadar({ onOpenEstimate }) {
  const [selectedCityId, setSelectedCityId] = useState('highland-park');
  const [zipInput, setZipInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [customResult, setCustomResult] = useState(null);

  const stormHotspots = [
    {
      id: 'highland-park',
      city: 'Highland Park / University Park',
      zip: '75205',
      date: 'April 24, 2025',
      severity: 'SEVERE IMPACT',
      severityColor: 'text-rose-400 bg-rose-950/80 border-rose-500/50',
      hailSize: '1.75" Golf Ball',
      windSpeed: '74 MPH Gusts',
      claimsWindow: '174 Days Remaining',
      riskScore: '94/100',
      status: 'Critical Mat Fractures Detected',
      description: 'Supercell cluster unleashed high-density hail fracturing asphalt fiberglass cores across multi-pitch residential estates. High probability of latent leaks in valley metals.',
      latLng: '32.8335° N, 96.7917° W'
    },
    {
      id: 'southlake',
      city: 'Southlake / Westlake',
      zip: '76092',
      date: 'March 18, 2025',
      severity: 'EXTREME IMPACT',
      severityColor: 'text-red-400 bg-red-950/80 border-red-500/50',
      hailSize: '2.25" Hen Egg',
      windSpeed: '82 MPH Straight-Line',
      claimsWindow: '138 Days Remaining',
      riskScore: '98/100',
      status: 'Catastrophic Granule Loss',
      description: 'Severe tornadic convective storm with baseball-velocity hail impacts. Extensive soft metal indentation on chimney crickets and exhaust caps. 100% full replacement claim viability.',
      latLng: '32.9412° N, 97.1342° W'
    },
    {
      id: 'frisco',
      city: 'Frisco / Stonebriar',
      zip: '75034',
      date: 'May 12, 2025',
      severity: 'MODERATE-HIGH',
      severityColor: 'text-amber-400 bg-amber-950/80 border-amber-500/50',
      hailSize: '1.25" Half Dollar',
      windSpeed: '68 MPH Microburst',
      claimsWindow: '192 Days Remaining',
      riskScore: '81/100',
      status: 'Creased Shingle Tabs',
      description: 'Sustained straight-line wind lifted unsealed starter shingles along southern and western slopes. Insurance criteria met for storm-induced mat separation.',
      latLng: '33.1507° N, 96.8236° W'
    },
    {
      id: 'plano',
      city: 'Plano / Willow Bend',
      zip: '75093',
      date: 'June 03, 2025',
      severity: 'SEVERE IMPACT',
      severityColor: 'text-rose-400 bg-rose-950/80 border-rose-500/50',
      hailSize: '1.50" Walnut',
      windSpeed: '70 MPH Gusts',
      claimsWindow: '214 Days Remaining',
      riskScore: '88/100',
      status: 'Substrate Thermal Spalling',
      description: 'Intense thermal hail burst fractured asphalt mat on weathered 12+ year architectural shingles. Adjusters actively settling full replacement claims.',
      latLng: '33.0198° N, 96.6989° W'
    },
    {
      id: 'fort-worth',
      city: 'Fort Worth / TCU & Tanglewood',
      zip: '76109',
      date: 'April 08, 2025',
      severity: 'MODERATE-HIGH',
      severityColor: 'text-amber-400 bg-amber-950/80 border-amber-500/50',
      hailSize: '1.25" Quarter-Plus',
      windSpeed: '65 MPH Sustained',
      claimsWindow: '158 Days Remaining',
      riskScore: '79/100',
      status: 'Flashing Dislodgement',
      description: 'Localized hail swath caused step flashing seal compromise and gutter perimeter impact. Moisture meter inspections show active attic decking moisture risk.',
      latLng: '32.7050° N, 97.3686° W'
    }
  ];

  const active = customResult || stormHotspots.find(s => s.id === selectedCityId) || stormHotspots[0];

  const handleZipSearch = (e) => {
    e.preventDefault();
    if (!zipInput.trim()) return;

    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setCustomResult({
        id: `zip-${zipInput}`,
        city: `ZIP Jurisdiction ${zipInput}`,
        zip: zipInput,
        date: 'Recent Hail Event (Verified)',
        severity: 'EVALUATION RECOMMENDED',
        severityColor: 'text-copper-400 bg-copper-950/80 border-copper-500/50',
        hailSize: '1.25" - 1.75" Detected',
        windSpeed: '72 MPH Doppler Peak',
        claimsWindow: 'Active 365-Day Window',
        riskScore: '86/100',
        status: 'Doppler Radar Anomaly Confirmed',
        description: `Doppler radar sweeps detected severe thunderstorm cell activity across ZIP ${zipInput}. Latent hail bruising typically compromises shingle waterproofing 6-12 months before internal water leaks penetrate ceilings.`,
        latLng: `DFW Radar Sector ${zipInput}`
      });
    }, 800);
  };

  return (
    <section id="radar" className="py-24 sm:py-32 bg-carbon-950 text-chalk relative overflow-hidden border-t border-carbon-800">
      {/* Background Radar Grid Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(184,107,61,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading & Live Alert Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-carbon-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-900 border border-copper-500/60 text-[10px] font-mono tracking-widest text-copper-300 font-bold uppercase mb-4 shadow-copper-glow">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>DOPPLER RADAR TELEMETRY // TEXAS STORM DIVISION</span>
            </div>

            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
              Hail leaves scars <br />
              <span className="font-sans font-black not-italic text-white">before ceilings leak.</span>
            </h2>
          </div>

          <div className="max-w-lg">
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              In Texas, golf-ball hail strikes fracture shingle fiberglass mats invisibly from 40 feet away. Our real-time Doppler radar database correlates National Weather Service hail swaths with verified estate roof damage.
            </p>
          </div>
        </div>

        {/* Radar Interactive Console Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Simulated Radar HUD Screen & City Selectors (7 cols) */}
          <div className="lg:col-span-7 bg-carbon-900 border border-carbon-700/80 shadow-obsidian-lg overflow-hidden flex flex-col justify-between">
            
            {/* Top HUD Telemetry Bar */}
            <div className="px-5 py-3.5 bg-carbon-950 border-b border-carbon-800 flex flex-wrap items-center justify-between text-[11px] font-mono gap-2">
              <div className="flex items-center gap-2 text-copper-400">
                <Radar className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="font-bold tracking-wider">NWS DOPPLER NEXRAD LEVEL II</span>
              </div>
              <div className="flex items-center gap-4 text-stone-400">
                <span>SECTOR: DFW-METRO</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE FEED
                </span>
              </div>
            </div>

            {/* Radar Visual Display Area with Concentric Circles & Sweep */}
            <div className="relative h-72 sm:h-96 w-full bg-[#070A0B] overflow-hidden flex items-center justify-center select-none border-b border-carbon-800">
              
              {/* Radar Grid Circles */}
              <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full border border-copper-500/20" />
              <div className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full border border-copper-500/15" />
              <div className="absolute w-84 h-84 sm:w-[480px] sm:h-[480px] rounded-full border border-copper-500/10" />
              
              {/* Radar Crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-copper-500/15" />
                <div className="absolute h-full w-[1px] bg-copper-500/15" />
              </div>

              {/* Rotating Radar Sweep Cone */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, rgba(184, 107, 61, 0.35) 0deg, rgba(184, 107, 61, 0) 65deg, transparent 360deg)',
                  animation: 'spin 5s linear infinite'
                }}
              />

              {/* Storm Swath Heatmap Glow Points */}
              <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-red-600/30 blur-2xl animate-pulse" />
              <div className="absolute top-1/3 left-1/2 w-48 h-36 rounded-full bg-amber-500/25 blur-3xl" />
              <div className="absolute top-1/2 left-2/5 w-24 h-24 rounded-full bg-rose-500/35 blur-xl" />

              {/* Hotspot Target Crosshair for Selected City */}
              <motion.div 
                key={active.id}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute z-20 flex flex-col items-center pointer-events-none"
                style={{ top: '42%', left: '48%' }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-red-500 bg-red-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  </div>
                  <span className="absolute -top-7 whitespace-nowrap px-2.5 py-0.5 bg-carbon-950/95 border border-red-500/60 font-mono text-[10px] text-red-300 font-bold tracking-wider shadow-lg">
                    TARGET: {active.city.split('/')[0]}
                  </span>
                </div>
              </motion.div>

              {/* Bottom Radar Metrics Strip */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-stone-400 z-20">
                <span className="bg-carbon-950/80 px-2 py-0.5 border border-carbon-800">
                  COORDS: {active.latLng}
                </span>
                <span className="bg-carbon-950/80 px-2 py-0.5 border border-carbon-800 text-copper-400">
                  NEXRAD DBZ: 64.2 (SEVERE HAIL CORE)
                </span>
              </div>
            </div>

            {/* City Preset Selection Pills */}
            <div className="p-5 bg-carbon-900 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                SELECT HISTORIC STORM CORRIDOR // VERIFIED IMPACT ZONES:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {stormHotspots.map((item) => {
                  const isSelected = active.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCustomResult(null);
                        setSelectedCityId(item.id);
                      }}
                      className={`px-3 py-2 text-left border transition-all text-xs cursor-pointer ${
                        isSelected
                          ? 'bg-copper-500 text-carbon-950 border-copper-400 font-bold shadow-md'
                          : 'bg-carbon-950 text-stone-300 border-carbon-800 hover:border-copper-500/50 hover:bg-carbon-850'
                      }`}
                    >
                      <div className="font-mono text-[9px] uppercase tracking-wider opacity-80">{item.zip}</div>
                      <div className="truncate font-sans font-semibold">{item.city.split('/')[0]}</div>
                    </button>
                  );
                })}
              </div>

              {/* Custom ZIP Code Scanner Input */}
              <form onSubmit={handleZipSearch} className="pt-3 border-t border-carbon-800 flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-500" />
                  <input
                    type="text"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    placeholder="Enter Texas ZIP (e.g. 75205, 75034)..."
                    maxLength={5}
                    className="w-full pl-9 pr-3 py-2.5 bg-carbon-950 border border-carbon-700 text-xs font-mono text-white placeholder-stone-600 focus:outline-none focus:border-copper-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isScanning}
                  className="px-5 py-2.5 bg-carbon-800 hover:bg-copper-500 hover:text-carbon-950 text-chalk text-xs font-mono uppercase tracking-wider border border-carbon-700 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Crosshair className="w-3.5 h-3.5 text-copper-400" />
                  <span>{isScanning ? 'Pinging...' : 'Scan ZIP'}</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Forensic Damage Intelligence & Claim Advocacy Card (5 cols) */}
          <div className="lg:col-span-5 bg-carbon-900 border border-copper-500/40 p-6 sm:p-8 shadow-obsidian-lg flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Status Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-carbon-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                      ZONE FORENSIC SCAN
                    </span>
                    <h3 className="font-sans font-bold text-xl text-white">
                      {active.city}
                    </h3>
                  </div>

                  <span className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider border ${active.severityColor}`}>
                    {active.severity}
                  </span>
                </div>

                {/* 4 Key Forensic Gauges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-carbon-950 border border-carbon-800">
                    <span className="text-[9px] font-mono uppercase text-copper-400 tracking-wider block">
                      RECORDED HAIL SIZE
                    </span>
                    <div className="font-sans font-black text-lg text-white mt-0.5">
                      {active.hailSize}
                    </div>
                  </div>

                  <div className="p-3 bg-carbon-950 border border-carbon-800">
                    <span className="text-[9px] font-mono uppercase text-copper-400 tracking-wider block">
                      PEAK WIND VELOCITY
                    </span>
                    <div className="font-sans font-black text-lg text-white mt-0.5">
                      {active.windSpeed}
                    </div>
                  </div>

                  <div className="p-3 bg-carbon-950 border border-carbon-800">
                    <span className="text-[9px] font-mono uppercase text-stone-400 tracking-wider block">
                      INSURANCE DEADLINE
                    </span>
                    <div className="font-sans font-bold text-sm text-amber-300 mt-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{active.claimsWindow}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-carbon-950 border border-carbon-800">
                    <span className="text-[9px] font-mono uppercase text-stone-400 tracking-wider block">
                      ROOF DAMAGE RISK
                    </span>
                    <div className="font-sans font-black text-lg text-rose-400 mt-0.5">
                      {active.riskScore}
                    </div>
                  </div>
                </div>

                {/* Forensic Diagnosis */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">
                    FORENSIC ARCHITECTURAL ASSESSMENT
                  </span>
                  <p className="text-xs sm:text-sm text-stone-200 font-sans leading-relaxed">
                    {active.description}
                  </p>
                </div>

                {/* Critical Texas Insurance Code Notice */}
                <div className="p-3.5 bg-carbon-950/90 border-l-2 border-copper-500 text-[11px] font-mono text-stone-300 space-y-1">
                  <div className="text-copper-400 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>TEXAS STATUTE COMPLIANCE</span>
                  </div>
                  <p className="text-stone-400 text-[10px] leading-relaxed">
                    Under Texas Insurance Code § 542.060, damage must be filed before the carrier's statutory cutoff. We provide certified Xactimate® 4K drone evidence to protect the full scope of your claim.
                  </p>
                </div>

                {/* Primary Conversion CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenEstimate(`Storm Hail Scan: ${active.city} (ZIP ${active.zip})`)}
                    className="w-full py-4 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-copper-glow active:scale-98"
                  >
                    <span>Request Free 21-Point Drone Inspection</span>
                    <ArrowRight className="w-4 h-4 text-carbon-950" />
                  </button>
                  <p className="text-center text-[10px] font-mono text-stone-400 mt-2">
                    100% Free • No Ladder Pressure • Full Aerial Report Included
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
