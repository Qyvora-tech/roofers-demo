import React from 'react';
import { Star, ShieldCheck, Award, FileCheck2, Clock, CheckCircle2 } from 'lucide-react';

export default function TrustStrip() {
  const credentials = [
    {
      icon: Star,
      iconColor: 'text-amber-400',
      badge: '4.9 ★ Rating',
      primary: '280+ Verified Reviews',
      secondary: 'Google & Angi Verified Homeowners',
    },
    {
      icon: Award,
      iconColor: 'text-copper-400',
      badge: 'Top 2% in USA',
      primary: 'GAF Master Elite®',
      secondary: 'Certified Factory-Trained Crews',
    },
    {
      icon: Clock,
      iconColor: 'text-copper-400',
      badge: 'Established 2006',
      primary: '18+ Years Experience',
      secondary: 'Over 3,400 Dallas-area Roofs Built',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-emerald-400',
      badge: 'Fully Protected',
      primary: '$2,000,000 Insured',
      secondary: 'Texas Licensed & Bonded #48921',
    },
    {
      icon: FileCheck2,
      iconColor: 'text-copper-400',
      badge: 'Non-Prorated',
      primary: '50-Year Warranty',
      secondary: 'Full Material & 10-Yr Workmanship',
    },
  ];

  return (
    <section className="relative z-30 bg-slate-900 border-y border-white/10 py-7 px-4 sm:px-6 lg:px-8 shadow-xl">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-start gap-3.5 pt-4 lg:pt-0 ${
                  idx > 0 ? 'lg:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-copper-400 font-semibold mb-0.5">
                    {item.badge}
                  </span>
                  <div className="font-display font-bold text-sm text-white leading-tight">
                    {item.primary}
                  </div>
                  <div className="text-xs text-sage-300 mt-0.5 leading-snug">
                    {item.secondary}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice of compliance */}
        <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-sage-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>All credentials, licensing numbers, and insurance certificates verified for Dallas & Collin Counties.</span>
          </div>
          <span className="text-copper-300/80">Documentation provided in all estimate packets.</span>
        </div>
      </div>
    </section>
  );
}
