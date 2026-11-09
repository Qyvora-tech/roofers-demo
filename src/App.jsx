import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MaterialStudio from './components/MaterialStudio';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import InstantCostEstimator from './components/InstantCostEstimator';
import HailDamageScanner from './components/HailDamageScanner';
import CraftsmanshipProcess from './components/CraftsmanshipProcess';
import ProjectShowcase from './components/ProjectShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import FloatingEmergencyBar from './components/FloatingEmergencyBar';

export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('Free 21-Point Drone Roof Inspection');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLeadModal = (context = 'Free 21-Point Drone Roof Inspection') => {
    setModalContext(context);
    setLeadModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-copper-500 selection:text-white">
      
      {/* Top Hairline Scroll Progress Bar in Burnished Copper */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-copper-500 z-50 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(217,119,54,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navigation */}
      <Navbar onOpenLeadModal={handleOpenLeadModal} />

      <main>
        {/* Cinematic Hero Section */}
        <Hero 
          onOpenLeadModal={handleOpenLeadModal} 
          onScrollToCalculator={handleScrollToCalculator} 
        />

        {/* Signature Materials Showroom */}
        <MaterialStudio onOpenLeadModal={handleOpenLeadModal} />

        {/* Real Before & After Slider */}
        <BeforeAfterSlider onOpenLeadModal={handleOpenLeadModal} />

        {/* Transparent Cost & ROI Calculator */}
        <InstantCostEstimator onOpenLeadModal={handleOpenLeadModal} />

        {/* Doppler Storm & Hail Verification */}
        <HailDamageScanner onOpenLeadModal={handleOpenLeadModal} />

        {/* 4-Stage Architectural Protocol */}
        <CraftsmanshipProcess onOpenLeadModal={handleOpenLeadModal} />

        {/* Selected Works Portfolio */}
        <ProjectShowcase onOpenLeadModal={handleOpenLeadModal} />

        {/* Why Choose Us & Warranties */}
        <WhyChooseUs onOpenLeadModal={handleOpenLeadModal} />

        {/* Verified Homeowner Reviews */}
        <Testimonials onOpenLeadModal={handleOpenLeadModal} />

        {/* FAQ Accordion */}
        <FAQSection onOpenLeadModal={handleOpenLeadModal} />
      </main>

      {/* Comprehensive Woody Luxury Footer */}
      <Footer onOpenLeadModal={handleOpenLeadModal} />

      {/* Floating Action Pill */}
      <FloatingEmergencyBar onOpenLeadModal={handleOpenLeadModal} />

      {/* Lead Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialContext={modalContext}
      />

    </div>
  );
}
