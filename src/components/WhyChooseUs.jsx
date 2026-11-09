import React from 'react';
import { Award, Magnet, Users, Lock, CheckCircle2 } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Award,
    title: 'GAF Master Elite® Contractor Status',
    subtitle: 'Top 2% Of North American Roofers',
    desc: 'Only 2 out of every 100 roofing contractors in the United States meet the rigorous licensure, continuous factory training, and financial vetting required to attain Master Elite certification. Unlocks 50-year non-prorated Golden Pledge® warranties directly backed by the manufacturer.'
  },
  {
    icon: Magnet,
    title: 'Magnetic Property Shield™ Protocol',
    subtitle: 'Zero Stray Nails Guaranteed',
    desc: 'Before substrate tear-off begins, breathable containment nets protect your landscaping, pool, and AC units. After completion, technicians make three thorough passes with industrial rolling neodymium magnets to keep pets and tires safe.'
  },
  {
    icon: Users,
    title: '100% Dedicated In-House Craftsmen',
    subtitle: 'Zero Day-Labor Subcontractors',
    desc: 'We never sell a job only to broker it out to unvetted third-party crews. Every installer is a permanent in-house employee, background-checked, drug-tested, and certified in manufacturer installation protocols.'
  },
  {
    icon: Lock,
    title: '$5,000,000 Liability & Worker Comp',
    subtitle: 'Full Comprehensive Property Protection',
    desc: 'Never risk your personal homeowners insurance. We maintain \$5,000,000 in dedicated commercial general liability and statutory worker’s compensation on every technician who steps onto your property.'
  }
];

export default function WhyChooseUs({ onOpenLeadModal }) {
  return (
    <section id="warranties" className="py-24 sm:py-32 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
            The Contractor Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Discerning Homeowners Choose Us
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            In an industry plagued by storm chasers and cut corners, we built our reputation on obsessive engineering, permanent warranties, and white-glove homeowner care.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-slate-850 border border-slate-750 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6 hover:border-copper-500/50 transition-all shadow-medium"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-copper-400 shrink-0 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-copper-400 uppercase tracking-wider">
                    {adv.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Row */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-300 shadow-soft">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white">GAF Master Elite® License #ME49821</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white">Owens Corning Platinum Preferred</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white">CertainTeed SELECT ShingleMaster™</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white">BBB Accredited A+ Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
}
