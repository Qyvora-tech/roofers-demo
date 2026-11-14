import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroAssembly from './components/HeroAssembly';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import RoofingAnatomy from './components/RoofingAnatomy';
import CostCalculator from './components/CostCalculator';
import ProjectGallery from './components/ProjectGallery';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessTimeline from './components/ProcessTimeline';
import FinancingWarranty from './components/FinancingWarranty';
import ServiceAreas from './components/ServiceAreas';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import LeadCaptureSection from './components/LeadCaptureSection';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [initialModalService, setInitialModalService] = useState('');
  const [lenis, setLenis] = useState(null);

  // Initialize Lenis Smooth Scrolling across the entire website
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

  const handleOpenEstimate = (service = 'Complete Roof Replacement') => {
    setInitialModalService(typeof service === 'string' ? service : 'Complete Roof Replacement');
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-ivory-200 text-graphite-400 font-sans selection:bg-copper-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenEstimate={handleOpenEstimate} />

      {/* Signature Scroll-Driven Roof Assembly Hero with 60FPS Canvas Scrubbing */}
      <main>
        <HeroAssembly 
          onOpenEstimate={handleOpenEstimate} 
          lenisInstance={lenis} 
        />

        {/* Credibility & Trust Strip */}
        <TrustStrip />

        {/* Roofing Services */}
        <Services onOpenEstimate={handleOpenEstimate} />

        {/* Interactive 7-Layer Roofing Anatomy */}
        <RoofingAnatomy />

        {/* Interactive Instant Cost & Financing Calculator */}
        <CostCalculator onOpenEstimate={handleOpenEstimate} />

        {/* Filterable Portfolio Gallery & Before/After */}
        <ProjectGallery onOpenEstimate={handleOpenEstimate} />

        {/* The Slate & Ridge Standard (4 Pillars) */}
        <WhyChooseUs onOpenEstimate={handleOpenEstimate} />

        {/* 5-Step Homeowner Process Journey */}
        <ProcessTimeline onOpenEstimate={handleOpenEstimate} />

        {/* Warranties & Financing */}
        <FinancingWarranty onOpenEstimate={handleOpenEstimate} />

        {/* DFW Metro Service Areas & ZIP Search */}
        <ServiceAreas onOpenEstimate={handleOpenEstimate} />

        {/* Homeowner Reviews & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection onOpenEstimate={handleOpenEstimate} />

        {/* Lead Capture Estimate Form */}
        <LeadCaptureSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenEstimate={handleOpenEstimate} />

      {/* Global Estimate Booking Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        initialService={initialModalService}
      />
    </div>
  );
}
