import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Calendar,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EstimateModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: initialService || 'Complete Roof Replacement',
    preferredTime: 'Morning (8 AM – 12 PM)',
    urgency: 'Standard (Next 1–3 Days)'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#C29369', '#E7CEBC', '#8B9995', '#FFFFFF']
        });
      } catch (err) {}
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-white/15 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative text-white max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-copper-500/20 border border-copper-500/30 flex items-center justify-center text-copper-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-copper-400 font-bold">
                Slate & Ridge Roofing Co.
              </span>
              <h3 className="font-display font-bold text-lg text-white">
                Book Free On-Site Inspection
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-sage-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-bold text-2xl text-white">
                  Inspection Confirmed!
                </h4>
                <p className="text-xs sm:text-sm text-sage-200 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our dispatch team is reviewing your address and will call you at <strong className="text-copper-300">{formData.phone}</strong> to confirm your inspector's arrival window.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-white/5 text-xs text-sage-300 max-w-sm mx-auto">
                <div>Preferred Window: <strong className="text-white">{formData.preferredTime}</strong></div>
                <div className="mt-1 text-emerald-400">Drone flight inspection included at zero charge</div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-xs shadow-md transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-sage-300 mb-1 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 text-xs text-white placeholder:text-slate-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-sage-300 mb-1 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(214) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 text-xs text-white placeholder:text-slate-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-sage-300 mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 text-xs text-white placeholder:text-slate-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-sage-300 mb-1 font-medium">
                    Home Address & ZIP *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street, City, ZIP"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 text-xs text-white placeholder:text-slate-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-sage-300 mb-1 font-medium">
                  Service Inquired
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 text-xs text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-sage-300 mb-1 font-medium">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 text-xs text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Morning (8 AM – 12 PM)">Morning (8 AM – 12 PM)</option>
                    <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (4 PM – 7 PM)">Evening (4 PM – 7 PM)</option>
                    <option value="Weekend Appointment">Weekend Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-sage-300 mb-1 font-medium">
                    Urgency
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-copper-500 text-xs text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Active Emergency / Tarping Needed">Active Emergency / Tarping Needed</option>
                    <option value="Standard (Next 1–3 Days)">Standard (Next 1–3 Days)</option>
                    <option value="Planning for Future Project">Planning for Future Project</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-copper-500 hover:bg-copper-400 text-slate-950 font-display font-bold text-xs tracking-wide shadow-lg hover:shadow-copper-glow transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming...</span>
                  ) : (
                    <>
                      <span>Confirm Free Inspection Booking</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[10px] text-sage-400">
                100% Free • Comprehensive 4K Aerial Drone Flight Included
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer Emergency Callout */}
        <div className="p-4 bg-slate-950 border-t border-white/10 flex items-center justify-between text-xs text-sage-300">
          <span className="hidden sm:inline">Prefer to speak directly with an inspector?</span>
          <a
            href="tel:2148337663"
            className="text-copper-400 hover:text-white font-bold flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call (214) 833-7663</span>
          </a>
        </div>
      </div>
    </div>
  );
}
