import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EstimateModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: initialService || 'Roof Replacement (Full System)',
    preferredWindow: 'Morning (8 AM – 12 PM)',
    urgency: 'Standard Scheduling (Next 1–3 Days)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

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
          colors: ['#A66E4E', '#DEBAA3', '#252B2C', '#F8F7F3']
        });
      } catch (err) {}
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon-950/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-chalk border border-hairline max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Modal Top Bar */}
        <div className="p-6 bg-limestone-200 border-b border-hairline flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-copper-500 bg-carbon-900 text-copper-400 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-copper-600 font-bold block">
                RIDGELINE ARCHITECTURAL
              </span>
              <h3 className="font-sans font-bold text-lg text-carbon-900">
                Book Architectural Inspection
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border border-carbon-800 flex items-center justify-center text-carbon-900 hover:bg-carbon-900 hover:text-chalk transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-copper-100 border border-copper-500 text-copper-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h4 className="font-sans font-bold text-2xl text-carbon-900">
                  Inspection Confirmed
                </h4>
                <p className="text-xs text-carbon-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-carbon-900">{formData.name}</strong>. Our regional field director will call you at <strong className="text-copper-600">{formData.phone}</strong> shortly to confirm access coordinates.
                </p>
              </div>

              <div className="p-3 bg-limestone-100 border border-hairline text-xs font-mono text-carbon-700 max-w-xs mx-auto">
                <div>Preferred Window: <strong className="text-carbon-900">{formData.preferredWindow}</strong></div>
                <div className="mt-1 text-copper-600">4K Drone Flight Included at Zero Fee</div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-carbon-900 hover:bg-copper-500 hover:text-carbon-950 text-chalk text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-carbon-800 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-limestone-50 border border-hairline text-xs text-carbon-900 focus:outline-none focus:border-copper-500 placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-carbon-800 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(214) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-limestone-50 border border-hairline text-xs text-carbon-900 focus:outline-none focus:border-copper-500 placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-carbon-800 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-limestone-50 border border-hairline text-xs text-carbon-900 focus:outline-none focus:border-copper-500 placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-carbon-800 mb-1">
                    Property Address & ZIP *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street, City, ZIP"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-limestone-50 border border-hairline text-xs text-carbon-900 focus:outline-none focus:border-copper-500 placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-carbon-800 mb-1">
                  Service Inquired
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-limestone-50 border border-hairline text-xs text-carbon-900 focus:outline-none focus:border-copper-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-carbon-800 mb-1">
                    Preferred Window
                  </label>
                  <select
                    value={formData.preferredWindow}
                    onChange={(e) => setFormData({ ...formData, preferredWindow: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-limestone-50 border border-hairline text-xs text-carbon-900 focus:outline-none focus:border-copper-500 cursor-pointer"
                  >
                    <option value="Morning (8 AM – 12 PM)">Morning (8 AM – 12 PM)</option>
                    <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (4 PM – 7 PM)">Evening (4 PM – 7 PM)</option>
                    <option value="Weekend Appointment">Weekend Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-carbon-800 mb-1">
                    Urgency
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-limestone-50 border border-hairline text-xs text-carbon-900 focus:outline-none focus:border-copper-500 cursor-pointer"
                  >
                    <option value="Standard Scheduling (Next 1–3 Days)">Standard (Next 1–3 Days)</option>
                    <option value="Emergency Storm Tarping Needed">Emergency Storm Tarping Needed</option>
                    <option value="Planning for Future Project">Planning for Future Project</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-copper-500 hover:bg-copper-400 text-carbon-950 font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Coordinates...</span>
                  ) : (
                    <>
                      <span>Confirm Free Inspection Booking</span>
                      <ArrowRight className="w-4 h-4 text-carbon-950" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[10px] font-mono text-stone-500">
                100% Free • Comprehensive 4K Aerial Drone Flight Included
              </div>
            </form>
          )}
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
