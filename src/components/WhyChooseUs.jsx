import React from 'react';
import { 
  Users, 
  Camera, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Flame, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

export default function WhyChooseUs({ onOpenEstimate }) {
  const pillars = [
    {
      num: '01',
      icon: Users,
      title: 'Factory-Trained In-House Artisans',
      subtitle: 'No Transient Day-Laborers. No Subcontracted Shortcuts.',
      desc: 'Most roofing contractors are merely sales brokers who subcontract your roof to the lowest-bidding unknown crew. At Slate & Ridge, our installers are permanent, W2-certified craftsmen who follow strict manufacturer fastening guidelines on every ridge and valley.',
      highlight: 'Every crew foreman has minimum 12+ years of residential roofing experience in Texas.'
    },
    {
      num: '02',
      icon: Camera,
      title: 'Digital Forensic Transparency',
      subtitle: 'Real-Time Photographic Checkpoints Throughout the Day',
      desc: 'You should never have to wonder what lies beneath your shingles. We capture over 80 high-resolution photos of your exposed plywood decking, underlayment barriers, flashing transitions, and nailing schedules, accessible anytime through your private Homeowner Portal.',
      highlight: 'Full digital photo audit transferred directly to your warranty archives.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'White-Glove Property Protection',
      subtitle: 'Safeguarding Your Landscaping, AC Units, & Driveways',
      desc: 'Roof tear-off can be destructive if careless. We surround your home with heavy-duty Catch-All safety nettings, build protective plywood shields over exterior HVAC condensers and pool pumps, and perform 3 separate magnetic nail sweeps across turf and gardens.',
      highlight: 'We guarantee zero damaged shrubs, zero broken patio tiles, and zero flat tires.'
    },
    {
      num: '04',
      icon: Award,
      title: '50-Year Non-Prorated Warranty',
      subtitle: 'Direct Manufacturer Golden Pledge® Backing',
      desc: 'Cheap contractors offer vague "handyman guarantees" that vanish when they change phone numbers. As a GAF Master Elite® installer, your warranty covers 100% of material defects and factory-certified labor for 50 non-prorated years, fully transferable if you sell.',
      highlight: 'Backed directly by North America’s largest roofing manufacturer.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-copper-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/15 border border-copper-500/30 text-copper-300 text-xs font-mono uppercase tracking-widest mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-copper-400" />
            <span>The Slate & Ridge Difference</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
            Roofing Done Right. <br />
            <span className="copper-gradient-text font-serif italic font-normal">Without Compromise.</span>
          </h2>

          <p className="text-sm sm:text-base text-sage-200 max-w-2xl mx-auto leading-relaxed">
            In an industry plagued by fly-by-night storm chasers, we established a higher standard of residential roofing based on meticulous craftsmanship, honest pricing, and accountability.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-white/10 hover:border-copper-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-copper-500/30 group-hover:text-copper-400/80 transition-colors">
                      {pillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400 group-hover:bg-copper-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  
                  <div className="text-xs font-mono uppercase tracking-wider text-copper-400 font-medium mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-sage-200 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Highlight Quote */}
                <div className="p-4 rounded-xl bg-slate-900 border border-white/5 flex items-start gap-3 text-xs text-ivory-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="rounded-3xl bg-gradient-to-r from-copper-500/20 via-slate-800 to-slate-950 border border-copper-500/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl text-center lg:text-left space-y-2">
            <h4 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Ready to experience the contractor standard you deserve?
            </h4>
            <p className="text-sm text-sage-200">
              Schedule your zero-pressure structural inspection today. We will provide a comprehensive 4K drone analysis and itemized pricing with zero sales games.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              onClick={onOpenEstimate}
              className="px-8 py-4 rounded-xl bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-sm tracking-wide shadow-lg hover:shadow-copper-glow transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <span>Schedule Free Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
