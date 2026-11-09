import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/roofingData';

export default function FAQSection({ onOpenLeadModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-900 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
            Homeowner Knowledge Base
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Everything you need to know about insurance claims, materials, warranties, and our installation process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-850 border border-slate-750 rounded-xl overflow-hidden shadow-soft transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-copper-400 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-900 text-copper-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-copper-500 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-750">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Box */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-soft">
          <div>
            <div className="font-bold text-white text-sm">Have a specific question about your roof?</div>
            <div className="text-xs text-slate-400 mt-0.5">Speak directly with a Master Inspector, not a generic call center.</div>
          </div>
          <a
            href="tel:18007927663"
            className="px-5 py-2.5 rounded bg-copper-500 hover:bg-copper-600 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call (800) 792-ROOF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
