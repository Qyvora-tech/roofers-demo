import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import HeroAssembly from './components/HeroAssembly';
import SectionRadar from './components/SectionRadar';
import SectionCraft from './components/SectionCraft';
import SectionCalculator from './components/SectionCalculator';
import SectionServices from './components/SectionServices';
import SectionMaterials from './components/SectionMaterials';
import SectionProjects from './components/SectionProjects';
import SectionCompany from './components/SectionCompany';
import SectionProcess from './components/SectionProcess';
import SectionTrust from './components/SectionTrust';
import SectionServiceAreas from './components/SectionServiceAreas';
import SectionEstimate from './components/SectionEstimate';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';
import FloatingEmergencyBar from './components/FloatingEmergencyBar';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [initialService, setInitialService] = useState('');
  const [lenis, setLenis] = useState(null);

  // Initialize Lenis Smooth Inertial Scrolling
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
      infinite: false,
    });

    setLenis(lenisInstance);

    let rafId;
    function raf(time) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Smooth anchor navigation handler
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const id = target.getAttribute('href');
        if (id && id !== '#') {
          const element = document.querySelector(id);
          if (element) {
            e.preventDefault();
            lenisInstance.scrollTo(element, { offset: -60, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenisInstance.destroy();
    };
  }, []);

  const handleOpenEstimate = (service = 'Roof Replacement (Full System)') => {
    setInitialService(typeof service === 'string' ? service : 'Roof Replacement (Full System)');
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-carbon-950 text-chalk font-sans selection:bg-copper-500 selection:text-carbon-950">
      {/* Editorial Header */}
      <Header onOpenEstimate={handleOpenEstimate} />

      <main>
        {/* Signature Pinned Roof Assembly Experience (60FPS Canvas Scrubbing) */}
        <HeroAssembly 
          onOpenEstimate={handleOpenEstimate} 
          lenisInstance={lenis} 
        />

        {/* Lethal Authority Marquee Ribbon */}
        <div className="bg-copper-500 text-carbon-950 py-3.5 overflow-hidden select-none border-y border-copper-400 font-mono text-[11px] uppercase tracking-widest font-black shadow-lg">
          <div className="flex w-max animate-marquee gap-8">
            <span>★ GAF MASTER ELITE® CONTRACTOR — TOP 1% IN NORTH AMERICA</span>
            <span>•</span>
            <span>50-YEAR GOLDEN PLEDGE® NON-PRORATED WARRANTY</span>
            <span>•</span>
            <span>OVER $48,000,000 IN STORM DAMAGE VALUATIONS RESTORED</span>
            <span>•</span>
            <span>UL 2218 CLASS 4 IMPACT RESISTANT MODIFIED ASPHALT</span>
            <span>•</span>
            <span>130 MPH HURRICANE WIND MECHANICAL FASTENING</span>
            <span>•</span>
            <span>$0 DOWN PROMOTIONAL FINANCING AVAILABLE</span>
            <span>•</span>
            <span>80+ DIGITAL PHOTO FORENSIC AUDITS</span>
            <span>•</span>
            <span>SERVING HIGHLAND PARK • SOUTHLAKE • FRISCO • PLANO • DFW METRO</span>
            <span>•</span>
            <span>★ GAF MASTER ELITE® CONTRACTOR — TOP 1% IN NORTH AMERICA</span>
            <span>•</span>
            <span>50-YEAR GOLDEN PLEDGE® NON-PRORATED WARRANTY</span>
            <span>•</span>
            <span>OVER $48,000,000 IN STORM DAMAGE VALUATIONS RESTORED</span>
            <span>•</span>
            <span>UL 2218 CLASS 4 IMPACT RESISTANT MODIFIED ASPHALT</span>
            <span>•</span>
            <span>130 MPH HURRICANE WIND MECHANICAL FASTENING</span>
            <span>•</span>
            <span>$0 DOWN PROMOTIONAL FINANCING AVAILABLE</span>
            <span>•</span>
            <span>80+ DIGITAL PHOTO FORENSIC AUDITS</span>
            <span>•</span>
            <span>SERVING HIGHLAND PARK • SOUTHLAKE • FRISCO • PLANO • DFW METRO</span>
          </div>
        </div>

        {/* NEW WEAPON 1: Interactive Doppler Hail & Storm Damage Radar Scanner */}
        <SectionRadar onOpenEstimate={handleOpenEstimate} />

        {/* Section 02 — Material & Craft ("Precision lives in the details.") with X-Ray Blueprint Mode */}
        <SectionCraft />

        {/* NEW WEAPON 2: Interactive Turnkey Roof Cost, Financing & ROI Estimator */}
        <SectionCalculator onOpenEstimate={handleOpenEstimate} />

        {/* Section 03 — Services (Editorial spread: Dominant photo + text-led entries) */}
        <SectionServices onOpenEstimate={handleOpenEstimate} />

        {/* Section 04 — Materials Exploration (Class 4 SBS, Standing Seam, Cedar, Slate) */}
        <SectionMaterials onOpenEstimate={handleOpenEstimate} />

        {/* Section 05 — Selected Projects (Architectural portfolio & split slider) */}
        <SectionProjects onOpenEstimate={handleOpenEstimate} />

        {/* Section 06 — The Company (Working philosophy & artisan W2 standards) */}
        <SectionCompany onOpenEstimate={handleOpenEstimate} />

        {/* Section 07 — Installation Process (5-Stage timeline) */}
        <SectionProcess onOpenEstimate={handleOpenEstimate} />

        {/* Section 08 — Trust & Verification (Credentials & verified reviews) */}
        <SectionTrust />

        {/* Section 09 — Service Areas (DFW regional jurisdictions & ZIP check) */}
        <SectionServiceAreas onOpenEstimate={handleOpenEstimate} />

        {/* Section 10 — Estimate Experience (Refined intake form) */}
        <SectionEstimate />
      </main>

      {/* Carbon Editorial Footer */}
      <Footer onOpenEstimate={handleOpenEstimate} />

      {/* Floating Emergency Dispatch & Quick Estimate Bar */}
      <FloatingEmergencyBar onOpenEstimate={handleOpenEstimate} />

      {/* Global Estimate Booking Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        initialService={initialService}
      />
    </div>
  );
}
