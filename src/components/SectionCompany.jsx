import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SectionCompany({ onOpenEstimate }) {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-limestone-200 text-carbon-800 border-t border-hairline overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="mb-16 pb-8 border-b border-hairline">
          <span className="text-[11px] font-mono tracking-[0.25em] text-copper-500 uppercase block mb-3">
            SECTION 06 // WORKING PHILOSOPHY
          </span>
          <h2 className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl text-carbon-900 leading-tight">
            An architectural manifesto <br />
            <span className="font-sans font-black not-italic text-carbon-900">for residential protection.</span>
          </h2>
        </div>

        {/* Split Composition: Imagery + Philosophy Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Authentic Imagery Composition (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-[420px] sm:h-[500px] w-full overflow-hidden bg-carbon-950 border border-hairline shadow-editorial">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=1200&q=85"
                alt="Ridgeline Artisan Roofing Team"
                className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
              />
              <div className="absolute inset-0 bg-carbon-950/20 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-carbon-900/90 backdrop-blur-sm border border-carbon-700 text-chalk text-xs font-mono">
                <span className="text-copper-400 block mb-0.5">FOREMAN PROTOCOL</span>
                Every installation crew is led by a master craftsman with over 12 years of Texas residential experience.
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center font-mono text-xs">
              <div className="p-4 bg-chalk border border-hairline">
                <div className="font-black text-xl text-carbon-900">18+</div>
                <div className="text-[10px] text-stone-500 uppercase mt-1">Years Operating</div>
              </div>
              <div className="p-4 bg-chalk border border-hairline">
                <div className="font-black text-xl text-copper-500">100%</div>
                <div className="text-[10px] text-stone-500 uppercase mt-1">W2 In-House Crews</div>
              </div>
              <div className="p-4 bg-chalk border border-hairline">
                <div className="font-black text-xl text-carbon-900">3,400+</div>
                <div className="text-[10px] text-stone-500 uppercase mt-1">Roofs Engineered</div>
              </div>
            </div>
          </div>

          {/* Restrained Editorial Philosophy Description (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-carbon-900 leading-snug border-l-2 border-copper-500 pl-6">
              "We believe true residential roofing is an act of architecture, not a speculative commodity trade."
            </blockquote>

            <div className="space-y-4 text-xs sm:text-sm text-carbon-700 font-sans leading-relaxed">
              <p>
                In an industry overrun with sales brokers who subcontract homeowner projects to the lowest-bidding unknown crews, Ridgeline operates on a foundation of uncompromised craftsmanship.
              </p>
              <p>
                Our craftsmen are permanent, salaried tradespeople who follow factory-certified nailing schedules, custom copper fabrication tolerances, and multi-tier weather barrier procedures.
              </p>
              <p>
                Throughout your project, our forensic project directors capture over 80 digital checkpoints—from bare plywood moisture scans to chimney counter-flashing bonds—uploaded live to your private Homeowner Portal.
              </p>
            </div>

            <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-mono text-xs text-stone-500">
                TEXAS ROOFING LICENSE #48921
              </div>
              <button
                onClick={() => onOpenEstimate('Philosophy Consultation')}
                className="px-6 py-3 bg-carbon-900 hover:bg-copper-500 hover:text-carbon-950 text-chalk font-sans font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 self-start sm:self-auto cursor-pointer"
              >
                <span>Speak with a Principal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
