import React from 'react';
import { Camera, FileText, Hammer, ShieldCheck, ArrowRight, Magnet } from 'lucide-react';
import { PROCESS_STEPS } from '../data/roofingData';

const STEP_ICONS = [Camera, FileText, Hammer, ShieldCheck];

export default function CraftsmanshipProcess({ onOpenLeadModal }) {
  return (
    <section id="process" className="py-24 sm:py-32 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
            The White-Glove Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our 4-Stage Architectural Protocol
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Roofing is notorious for cut corners and unreliable crews. Our proven 4-stage process guarantees complete property protection, maximized insurance payouts, and zero stress.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];
            return (
              <div
                key={step.step}
                className="bg-slate-850 border border-slate-750 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-copper-500/50 transition-all shadow-medium group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-copper-400 shadow-sm group-hover:bg-copper-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-slate-600 group-hover:text-slate-400 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs text-copper-400 font-bold uppercase tracking-wider mb-1">{step.duration}</div>
                    <h3 className="font-serif text-lg font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs">
                  <span className="text-slate-400 text-[11px] block font-medium">Guaranteed Deliverable:</span>
                  <span className="text-emerald-400 font-bold text-xs mt-0.5 block">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Magnetic Property Shield Banner */}
        <div className="mt-12 bg-slate-950 text-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-elevated">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-copper-400 font-bold text-xs uppercase tracking-wider">
              <Magnet className="w-4 h-4" />
              <span>Magnetic Property Shield™ Protocol</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Zero Stray Nails Guaranteed
            </h4>
            <p className="text-xs text-slate-300 max-w-xl font-light leading-relaxed">
              We protect flowerbeds, HVAC units, and pools with breathable netting. After installation, technicians complete three consecutive passes with rolling industrial neodymium magnets so not a single nail is left behind for pets or tires.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal('Process Section CTA')}
            className="px-6 py-3.5 rounded bg-copper-500 hover:bg-copper-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-copper-glow"
          >
            <span>Schedule 21-Pt Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
