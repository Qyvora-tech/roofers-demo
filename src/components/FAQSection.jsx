import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';

export default function FAQSection({ onOpenEstimate }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Does homeowners insurance cover a full roof replacement after a Texas storm?',
      a: 'Yes, in most cases where wind, hail, or storm debris has compromised the functional integrity of your shingles. In North Texas, policies typically cover sudden wind and hail damage minus your deductible. We conduct a forensic 4K aerial drone scan, catalog every shingle fracture, and meet your insurance adjuster on-site to ensure your full replacement claim is approved rather than an inadequate spot repair.'
    },
    {
      q: 'How long does a complete roof replacement take from start to finish?',
      a: 'For an average 2,500 to 4,000 square foot home in Dallas-Fort Worth, our dedicated crew completes 100% of the tear-off, decking fortification, shingle installation, and magnetic clean-up in just 1 to 2 days. We stage all materials beforehand so there is zero downtime on your installation morning.'
    },
    {
      q: 'What is the real difference between standard shingles and Class 4 impact shingles?',
      a: 'Standard Class 3 shingles use brittle oxidized asphalt that shatters under heavy hail impacts. Class 4 shingles feature SBS polymer-modified asphalt that acts like dense rubber, absorbing the kinetic energy of up to 2-inch hail stones without fracturing the fiberglass mat. In addition, Texas insurance carriers typically reward Class 4 installations with up to a 28% annual premium reduction.'
    },
    {
      q: 'What happens if unexpected rain rolls in while my roof is stripped bare?',
      a: 'We monitor live Doppler radar constantly. We only tear off the square footage that our crew can safely dry-in with synthetic water barriers within the same operational window. Furthermore, our trucks carry commercial-grade rapid waterproof tarps and emergency sealing adhesives to protect your home interior instantly in the event of an unexpected weather shift.'
    },
    {
      q: 'How do I know if my roof has hail damage if I do not see water leaking inside?',
      a: 'Roof leaks rarely appear immediately after a hail storm. Hail impacts knock off the protective mineral granules that shield asphalt from ultraviolet degradation. Over the following 6 to 18 months, intense Texas sun bakes the exposed bitumen, causing micro-cracking and sudden catastrophic attic leaks. A free 25-point drone inspection detects these granule bruises before structural deck rot sets in.'
    },
    {
      q: 'What does the GAF Golden Pledge® 50-Year Non-Prorated Warranty actually cover?',
      a: 'Unlike generic 10-year contractor warranties that prorate value after year 10, the Golden Pledge warranty covers 100% of material replacement costs and certified labor for 50 non-prorated years. Even if Slate & Ridge were to cease operations decades from now, the manufacturer itself covers the repair. It also includes 25-year comprehensive workmanship coverage and is 100% transferable to your home’s next buyer.'
    },
    {
      q: 'Do I need to be home for the entire roof replacement?',
      a: 'You do not need to remain inside your home. Because all work is exterior, many homeowners prefer to carry on their regular work or school schedules. We only ask that cars are parked outside the garage or driveway by 6:45 AM, pets are kept comfortable indoors, and you review our real-time photo checkpoints uploaded to your homeowner portal throughout the day.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-ivory-100 text-graphite-400 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-700 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-copper-600" />
            <span>Clear Answers for Homeowners</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Frequently Asked <br />
            <span className="font-serif italic font-normal text-copper-600">Roofing Questions.</span>
          </h2>

          <p className="text-sm sm:text-base text-graphite-300 max-w-xl mx-auto leading-relaxed">
            Straightforward explanations regarding warranties, insurance claim advocacy, shingle grades, and installation timelines.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-3 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-900/10 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-copper-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-copper-500 text-slate-950 rotate-180' : 'bg-ivory-100 text-graphite-300'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 animate-in fade-in duration-200">
                    <div className="border-t border-slate-900/5 pt-4 text-sm sm:text-base text-graphite-300 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have another question prompt */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-display font-bold text-lg text-white">
              Have a specific question about your home's roof?
            </h4>
            <p className="text-xs sm:text-sm text-sage-200">
              Speak directly with an experienced project director, not a scripted telemarketer.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:2148337663"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-copper-400" />
              <span>(214) 833-7663</span>
            </a>
            <button
              onClick={() => onOpenEstimate('FAQ Question')}
              className="px-5 py-3 rounded-xl bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-xs shadow-md transition-colors"
            >
              Ask an Inspector
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
