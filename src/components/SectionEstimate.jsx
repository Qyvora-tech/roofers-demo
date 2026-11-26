import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, Lock, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SectionEstimate() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    service: 'Roof Replacement (Full System)',
    roofAge: '10–20 Years',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#C88256', '#DEBAA3', '#0B0E0F', '#FFFFFF']
        });
      } catch (err) {}
    }, 500);
  };

  return (
    <section id="estimate" className="py-24 sm:py-32 bg-carbon-950 text-chalk border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Architectural Intake Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-copper-400 uppercase block mb-3 font-bold">
                SECTION 10 // COMMISSION AN AUDIT
              </span>
              <h2 className="font-serif italic font-normal text-4xl sm:text-6xl text-copper-200 leading-tight mb-4">
                Begin with an objective <br />
                <span className="font-sans font-black not-italic text-white">architectural inspection.</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                Take ambiguity out of your roof's condition. We evaluate your entire roofing system, capture high-definition 4K drone photography, and issue an itemized assessment with zero sales games.
              </p>
            </div>

            {/* Direct Inquiry Line */}
            <div className="p-6 bg-carbon-900/90 border border-white/10 shadow-obsidian-lg space-y-4">
              <span className="text-[10px] font-mono text-copper-400 uppercase tracking-widest block font-bold">
                DIRECT INQUIRY DESK
              </span>
              <a
                href="tel:2148337663"
                className="font-sans font-black text-2xl sm:text-3xl text-white hover:text-copper-400 transition-colors block"
              >
                (214) 833-7663
              </a>
              <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                <Clock className="w-3.5 h-3.5 text-copper-400" />
                <span>GUARANTEED 15-MINUTE INTAKE CALLBACK</span>
              </div>
            </div>

            {/* Quality Checkpoints */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-sans text-stone-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <span>100% Free Drone Aerial Scan & Attic Decking Inspection</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <span>Itemized Written Proposal Valid for 60 Days</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <span>Zero Obligation & Respect for Your Home Privacy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, Accessible Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-carbon-900/90 border border-white/10 shadow-obsidian-lg backdrop-blur-md">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-copper-500/20 border border-copper-400 text-copper-400 flex items-center justify-center mx-auto shadow-copper-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-copper-400 font-bold block">
                      INSPECTION COMMODITY INTAKE CONFIRMED
                    </span>
                    <h3 className="font-sans font-black text-2xl sm:text-3xl text-white">
                      Thank You, {formData.name || 'Neighbor'}.
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                      We have logged your request for <strong className="text-white">{formData.address || 'your property'}</strong>. A senior project director is reviewing your coordinates and will call you at <strong className="text-copper-400">{formData.phone}</strong> shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono text-copper-400 hover:text-copper-300 underline cursor-pointer"
                  >
                    Submit another inquiry or edit details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-sans font-bold text-xl text-white">
                      Request Architectural Assessment
                    </h3>
                    <p className="text-xs text-stone-400 font-mono mt-1">
                      ESSENTIAL PROJECT METADATA // FORM 01
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-copper-400 mb-1.5 font-bold">
                        Homeowner Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-carbon-950 border border-white/10 text-xs font-sans text-white focus:outline-none focus:border-copper-400 placeholder:text-stone-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-copper-400 mb-1.5 font-bold">
                        Direct Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(214) 555-0192"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-carbon-950 border border-white/10 text-xs font-sans text-white focus:outline-none focus:border-copper-400 placeholder:text-stone-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-copper-400 mb-1.5 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-carbon-950 border border-white/10 text-xs font-sans text-white focus:outline-none focus:border-copper-400 placeholder:text-stone-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-copper-400 mb-1.5 font-bold">
                        Property Address & City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1234 Preston Rd, Dallas"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 bg-carbon-950 border border-white/10 text-xs font-sans text-white focus:outline-none focus:border-copper-400 placeholder:text-stone-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-copper-400 mb-1.5 font-bold">
                        Service Desired
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-carbon-950 border border-white/10 text-xs font-sans text-white focus:outline-none focus:border-copper-400 cursor-pointer"
                      >
                        <option value="Roof Replacement (Full System)">Roof Replacement (Full System)</option>
                        <option value="Storm & Hail Restoration">Storm & Hail Restoration</option>
                        <option value="Precision Leak Diagnostics">Precision Leak Diagnostics</option>
                        <option value="Free 4K Drone Inspection">Free 4K Drone Inspection</option>
                        <option value="Standing Seam Metal Roof">Standing Seam Metal Roof</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-copper-400 mb-1.5 font-bold">
                        Approximate Roof Age
                      </label>
                      <select
                        value={formData.roofAge}
                        onChange={(e) => setFormData({ ...formData, roofAge: e.target.value })}
                        className="w-full px-4 py-3 bg-carbon-950 border border-white/10 text-xs font-sans text-white focus:outline-none focus:border-copper-400 cursor-pointer"
                      >
                        <option value="Under 5 Years">Under 5 Years</option>
                        <option value="5–10 Years">5–10 Years</option>
                        <option value="10–20 Years">10–20 Years</option>
                        <option value="20+ Years">20+ Years</option>
                        <option value="Not Sure / Recently Purchased">Not Sure / Recently Purchased</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-copper-400 mb-1.5 font-bold">
                      Project Notes & Observed Conditions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Recent hail storm in our neighborhood, noticed water spots on upstairs drywall, or preparing home for resale."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 bg-carbon-950 border border-white/10 text-xs font-sans text-white focus:outline-none focus:border-copper-400 placeholder:text-stone-500 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Logging Request...</span>
                    ) : (
                      <>
                        <span>Submit Architectural Estimate Request</span>
                        <ArrowRight className="w-4 h-4 text-carbon-950" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-stone-400 pt-1">
                    <Lock className="w-3 h-3 text-copper-400" />
                    <span>Your privacy is protected. We never sell homeowner information or send spam.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
