import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/roofingData';

export default function Testimonials({ onOpenLeadModal }) {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
            Homeowner Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by Over 1,840+ American Families
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Read real reviews from luxury custom estate owners, architects, and storm-affected homeowners who trusted us with their largest asset.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:border-copper-500/50 transition-all shadow-medium"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-xs">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-900/60 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Project
                  </span>
                </div>

                <div className="text-xs font-bold text-copper-400 uppercase tracking-wider">
                  {t.roofType}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-copper-400"
                />
                <div>
                  <div className="text-sm font-bold text-white">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {t.city} • {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Strip */}
        <div className="mt-14 bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-2xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center shadow-soft">
          <div>
            <div className="font-serif text-2xl font-bold text-white">4.99 ★</div>
            <div className="text-xs text-slate-400 font-medium">Google Verified Reviews</div>
          </div>

          <div className="h-8 w-px bg-slate-800 hidden sm:block" />

          <div>
            <div className="font-serif text-2xl font-bold text-white">A+</div>
            <div className="text-xs text-slate-400 font-medium">Better Business Bureau</div>
          </div>

          <div className="h-8 w-px bg-slate-800 hidden sm:block" />

          <div>
            <div className="font-serif text-2xl font-bold text-white">Top 2%</div>
            <div className="text-xs text-slate-400 font-medium">GAF Master Elite in US</div>
          </div>
        </div>

      </div>
    </section>
  );
}
