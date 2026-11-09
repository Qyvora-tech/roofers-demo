import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadModal({ isOpen, onClose, initialContext = 'Drone Inspection' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    situation: 'Storm Damage (Insurance Claim)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D97736', '#F1F5F9', '#11161E', '#10B981']
    });
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-slate-900 border border-slate-750 rounded-2xl p-6 sm:p-8 my-8 shadow-elevated"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-copper-400 uppercase tracking-widest block mb-1">
                {initialContext || 'Complimentary Inspection'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Schedule Your Free 21-Point Drone Inspection
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light leading-relaxed">
                Receive an engineering-grade aerial CAD scan and forensic hail report. 100% Free with zero high-pressure sales tactics.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-200 font-bold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Harrison Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-750 text-white placeholder-slate-500 focus:border-copper-500 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-200 font-bold mb-1">
                    Phone (Mobile) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-750 text-white placeholder-slate-500 focus:border-copper-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-bold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-750 text-white placeholder-slate-500 focus:border-copper-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-200 font-bold mb-1">
                  Property Address & ZIP Code *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street Address, City, State, ZIP"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-750 text-white placeholder-slate-500 focus:border-copper-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-200 font-bold mb-1">
                  Current Situation
                </label>
                <select
                  value={formData.situation}
                  onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-750 text-white focus:border-copper-500 outline-none transition-colors"
                >
                  <option value="Storm Damage (Insurance Claim)">Recent Hail / Wind Storm in Area</option>
                  <option value="Urgent Active Leak">Urgent Active Water Leak</option>
                  <option value="Aging Roof Replacement">Planning Roof Replacement (1-3 Months)</option>
                  <option value="Custom Architectural Build">Custom Architectural Blueprint Spec</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded bg-copper-500 hover:bg-copper-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-copper-glow"
                >
                  <span>Confirm Inspection Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400 pt-1">
                Zero high pressure sales. Direct consultation with a licensed master inspector.
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-serif text-2xl font-bold text-white">
                Inspection Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-sm mx-auto font-light leading-relaxed">
                Thank you, <strong className="text-white font-bold">{formData.name || 'Valued Client'}</strong>. Our flight coordinator has received your request for <span className="text-white font-semibold">{formData.address || 'your property'}</span> and will confirm by SMS/phone within 15 minutes.
              </p>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-3 rounded bg-slate-800 hover:bg-slate-750 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm border border-slate-700"
            >
              Close Window
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
