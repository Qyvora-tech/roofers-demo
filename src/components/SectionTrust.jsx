import React from 'react';
import { Star, ShieldCheck, Award, FileCheck2, CheckCircle2 } from 'lucide-react';

export default function SectionTrust() {
  const credentials = [
    {
      code: '01',
      title: '4.9 ★ Rating on Google',
      subtitle: '280+ Verified DFW Homeowners',
      detail: 'Consistent top rating for clean job sites, transparent daily communication, and zero surprise invoices.'
    },
    {
      code: '02',
      title: 'GAF Master Elite® #ME-98214',
      subtitle: 'Awarded to Top 2% in North America',
      detail: 'Factory certified for maximum structural installation standards and authorized to issue 50-year non-prorated Golden Pledge warranties.'
    },
    {
      code: '03',
      title: 'Texas Licensed & $2M Insured',
      subtitle: 'Lic. #48921 • Bonded & Protected',
      detail: 'Comprehensive commercial general liability and full workers compensation for all on-site personnel.'
    },
    {
      code: '04',
      title: '50-Year Non-Prorated Warranty',
      subtitle: '100% Backed by Manufacturer',
      detail: 'Zero material depreciation after year 10. Covers 100% of material defects and factory labor for 50 non-prorated years, transferable to new buyers.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-limestone-200 text-carbon-800 border-t border-hairline">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-hairline">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-copper-500 uppercase block mb-3">
              SECTION 08 // CREDENTIALS & TRUST
            </span>
            <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-carbon-900 leading-tight">
              Verified credibility. <br />
              <span className="font-sans font-black not-italic text-carbon-900">Understated assurance.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-carbon-600 font-sans leading-relaxed">
              Every license, certification number, and insurance policy is verified for Dallas, Collin, and Tarrant Counties. Documentation included in all written proposal packets.
            </p>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((cred) => (
            <div
              key={cred.code}
              className="p-6 bg-chalk border border-hairline shadow-fine flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-[10px] font-mono text-copper-500 tracking-widest block mb-2">
                  CREDENTIAL // {cred.code}
                </span>
                <h3 className="font-sans font-bold text-lg text-carbon-900 leading-tight mb-1">
                  {cred.title}
                </h3>
                <span className="text-xs font-mono text-stone-500 block mb-3">
                  {cred.subtitle}
                </span>
                <p className="text-xs text-carbon-700 font-sans leading-relaxed">
                  {cred.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-hairline flex items-center gap-1.5 text-[10px] font-mono text-stone-500">
                <CheckCircle2 className="w-3 h-3 text-copper-500" />
                <span>Verified Documentation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Two Genuine Homeowner Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-hairline pt-12">
          <blockquote className="p-6 bg-limestone-100 border border-hairline space-y-3">
            <p className="font-serif italic text-base sm:text-lg text-carbon-900 leading-relaxed">
              "We were terrified of having our roof replaced because a previous contractor trampled our hydrangeas and left nails everywhere. Ridgeline brought complete netting shields, shielded our custom AC compressor, and ran magnetic sweepers three times."
            </p>
            <footer className="text-xs font-mono text-stone-600">
              — David & Sarah H. <span className="text-copper-600">• Highland Park, Dallas (Tudor Estate Replacement)</span>
            </footer>
          </blockquote>

          <blockquote className="p-6 bg-limestone-100 border border-hairline space-y-3">
            <p className="font-serif italic text-base sm:text-lg text-carbon-900 leading-relaxed">
              "When the May hail storm hit Collin County, our insurance company initially offered an inadequate spot repair. Ridgeline provided a 4K drone forensic audit and met our adjuster on the roof. Full replacement approved on the spot."
            </p>
            <footer className="text-xs font-mono text-stone-600">
              — Marcus V. <span className="text-copper-600">• Stonebriar, Frisco (Class 4 Hail Upgrade)</span>
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
