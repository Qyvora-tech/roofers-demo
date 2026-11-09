import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function FloatingEmergencyBar({ onOpenLeadModal }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Phone Hotline Pill */}
      <a
        href="tel:18007927663"
        className="hidden md:flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 border border-slate-750 text-slate-200 hover:text-white transition-all text-xs font-bold shadow-medium backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <Phone className="w-3.5 h-3.5 text-copper-400" />
        <span>(800) 792-ROOF</span>
      </a>

      {/* Main Action Pill */}
      <button
        onClick={() => onOpenLeadModal('Floating CTA')}
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-copper-500 hover:bg-copper-600 text-white font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all"
      >
        <span>Schedule Drone Scan</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
