import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Clock,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    service: 'Complete Roof Replacement',
    roofAge: '10–20 Years',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast qualified lead processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C29369', '#E7CEBC', '#8B9995', '#FFFFFF']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle copper accent glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-copper-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-800/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/15 border border-copper-500/30 text-copper-300 text-xs font-mono uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-copper-400" />
                <span>Schedule Your Free Evaluation</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
                Start with a Free, <br />
                <span className="copper-gradient-text font-serif italic font-normal">Objective Inspection.</span>
              </h2>

              <p className="text-sm sm:text-base text-sage-200 leading-relaxed">
                Take the guesswork out of your roof's condition. We will inspect your entire roofing system, capture high-definition drone photos, and deliver an itemized written assessment with zero pressure.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:2148337663"
                className="group p-5 rounded-2xl bg-slate-900 border border-white/10 hover:border-copper-500/40 transition-all flex items-center gap-4 shadow-lg block"
              >
                <div className="w-12 h-12 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400 group-hover:bg-copper-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-sage-400">
                    Immediate Phone Inquiries
                  </div>
                  <div className="font-display font-bold text-xl text-white group-hover:text-copper-300 transition-colors">
                    (214) 833-7663
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Direct dispatch available now</span>
                  </div>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 flex items-center gap-4 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-sage-400/10 border border-sage-400/20 flex items-center justify-center text-sage-300 shrink-0">
                  <Clock className="w-6 h-6 text-copper-400" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-sage-400">
                    Response Commitment
                  </div>
                  <div className="font-display font-bold text-base text-white">
                    Guaranteed Call Within 15 Minutes
                  </div>
                  <div className="text-xs text-sage-300 mt-0.5">
                    During business hours (Mon–Sat, 7 AM – 7 PM)
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees list */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-sage-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Free Drone Aerial Scan & Attic Deck Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Itemized Written Proposal Valid for 60 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Obligation & Zero High-Pressure Sales Tactics</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Estimate Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/95 border border-white/10 backdrop-blur-xl shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-bold">
                      Estimate Request Confirmed
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                      Thank You, {formData.name || 'Neighbor'}!
                    </h3>
                    <p className="text-sm text-sage-200 max-w-md mx-auto leading-relaxed">
                      We have received your details for <strong className="text-white">{formData.address || 'your property'}</strong>. A senior project director is reviewing your request and will call you at <strong className="text-copper-300">{formData.phone || '(214) 833-7663'}</strong> shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 max-w-sm mx-auto text-xs text-sage-300">
                    <div className="font-semibold text-white mb-1">What Happens Next?</div>
                    <div>1. Brief 3-minute intake call to confirm access</div>
                    <div>2. 4K Drone and attic inspection at your convenience</div>
                    <div>3. Detailed PDF report and itemized proposal delivered</div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-copper-400 hover:text-copper-300 underline"
                  >
                    Submit another inquiry or edit information
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <h3 className="font-display font-bold text-xl text-white">
                      Request Your Free Roof Inspection
                    </h3>
                    <p className="text-xs text-sage-300 mt-0.5">
                      Fill out the form below and we will contact you within 15 minutes.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-sage-300 mb-1.5 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm text-white placeholder:text-slate-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-sage-300 mb-1.5 font-medium">
                        Direct Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(214) 555-0192"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm text-white placeholder:text-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Street Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-sage-300 mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm text-white placeholder:text-slate-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-sage-300 mb-1.5 font-medium">
                        Property Address & City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1234 Preston Rd, Dallas"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm text-white placeholder:text-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Roof Age */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-sage-300 mb-1.5 font-medium">
                        Service Desired
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm text-white focus:outline-none cursor-pointer"
                      >
                        <option value="Complete Roof Replacement">Complete Roof Replacement</option>
                        <option value="Storm & Hail Damage Claim">Storm & Hail Damage Claim</option>
                        <option value="Precision Leak Repair">Precision Leak Repair</option>
                        <option value="Free Drone Inspection">Free Drone Inspection</option>
                        <option value="Seamless Gutters & Drainage">Seamless Gutters & Drainage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-sage-300 mb-1.5 font-medium">
                        Approximate Roof Age
                      </label>
                      <select
                        value={formData.roofAge}
                        onChange={(e) => setFormData({ ...formData, roofAge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm text-white focus:outline-none cursor-pointer"
                      >
                        <option value="Under 5 Years">Under 5 Years</option>
                        <option value="5–10 Years">5–10 Years</option>
                        <option value="10–20 Years">10–20 Years</option>
                        <option value="20+ Years">20+ Years</option>
                        <option value="Not Sure / Recently Moved In">Not Sure / Recently Moved In</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special Circumstances */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-sage-300 mb-1.5 font-medium">
                      Notes or Recent Damage Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Recent hail storm in our area, noticed water spots in ceiling, or planning replacement before listing home."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm text-white placeholder:text-slate-600 focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-sm tracking-wide shadow-lg hover:shadow-copper-glow transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Securing Inspection Time Slot...</span>
                    ) : (
                      <>
                        <span>Submit Free Estimate Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-sage-400 pt-1">
                    <Lock className="w-3 h-3 text-copper-400" />
                    <span>Your privacy is sacred. We never sell your personal information or spam you.</span>
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
