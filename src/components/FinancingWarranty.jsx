import React from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Sparkles, 
  Percent,
  Clock
} from 'lucide-react';

export default function FinancingWarranty({ onOpenEstimate }) {
  return (
    <section className="py-24 bg-white text-graphite-400 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-700 text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-copper-600" />
            <span>Investment Security</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Total Peace of Mind. <br />
            <span className="font-serif italic font-normal text-copper-600">From Protection to Payment.</span>
          </h2>

          <p className="text-sm sm:text-base text-graphite-300 max-w-2xl mx-auto leading-relaxed">
            We eliminate financial anxiety with industry-leading manufacturer warranty coverage and flexible, low-rate financing solutions customized for Dallas homeowners.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Warranties */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-elevated flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-copper-500/10 blur-[80px] pointer-events-none rounded-full" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">
                  Coverage Guarantee
                </span>
                <div className="w-10 h-10 rounded-xl bg-copper-500/20 border border-copper-500/30 flex items-center justify-center text-copper-400">
                  <FileCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                50-Year Non-Prorated Warranty
              </h3>
              <p className="text-sm text-sage-200 leading-relaxed mb-6">
                Most standard contractor warranties prorate after 10 years, leaving you with little protection when you need it most. Our GAF Golden Pledge® covers 100% of material and labor for 50 full years.
              </p>

              <div className="space-y-3 border-t border-white/10 pt-6">
                {[
                  { title: '50-Year Non-Prorated Material Coverage', desc: 'No depreciation. 100% manufacturer replacement.' },
                  { title: '10-Year In-House Workmanship Guarantee', desc: 'If any installation defect causes a leak, we repair it immediately at zero cost.' },
                  { title: '100% Fully Transferable to Next Buyer', desc: 'Increases your home resale value when selling your property in Texas.' },
                  { title: 'Direct Factory Inspection by Manufacturer', desc: 'GAF field auditors conduct random spot-checks on our installations.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">{item.title}</div>
                      <div className="text-sage-300">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-sage-400 font-mono">Factory Certified Assurance</span>
              <button
                onClick={() => onOpenEstimate('Warranty Consultation')}
                className="text-xs font-bold text-copper-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Read Warranty Sample</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Box 2: Financing Options */}
          <div className="bg-ivory-50 rounded-3xl p-8 sm:p-10 border border-slate-900/10 shadow-elevated flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-copper-600 font-semibold">
                  Flexible Lending
                </span>
                <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-600">
                  <CreditCard className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-3">
                0% APR Financing for 18 Months
              </h3>
              <p className="text-sm text-graphite-300 leading-relaxed mb-6">
                Don't delay urgent roof repairs due to budget timing. We partner with leading home improvement lenders like Goodleap and Mosaic to offer instant pre-qualification without impacting your credit score.
              </p>

              <div className="space-y-4 border-t border-slate-900/10 pt-6">
                <div className="p-4 rounded-xl bg-white border border-slate-900/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-slate-900">18 Months Same-As-Cash</div>
                    <div className="text-xs text-graphite-300">0% Interest if paid in full within 18 months</div>
                  </div>
                  <span className="font-mono font-bold text-copper-600 text-sm">0% APR</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-900/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-slate-900">Low Monthly Payment Plan</div>
                    <div className="text-xs text-graphite-300">Terms up to 120 months with rates from 7.99%</div>
                  </div>
                  <span className="font-mono font-bold text-emerald-700 text-sm">From $149/mo</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-graphite-300 pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-copper-500" />
                  <span>60-second soft-credit pre-qualification • No impact to credit rating</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-900/10">
              <button
                onClick={() => onOpenEstimate('Financing Pre-Approval')}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Check Your Financing Eligibility</span>
                <ArrowRight className="w-4 h-4 text-copper-400" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
