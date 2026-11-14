import React, { useState } from 'react';
import { 
  Hammer, 
  ShieldAlert, 
  CloudRain, 
  Search, 
  Droplets, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  ChevronRight,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Services({ onOpenEstimate }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'replacement',
      title: 'Complete Roof Replacement',
      subtitle: 'Engineered for 50-Year Longevity & Architectural Beauty',
      icon: Hammer,
      badge: 'Most Popular',
      badgeColor: 'bg-copper-500/10 text-copper-600 border-copper-500/20',
      description: 'A complete structural overhaul using Class 4 impact-resistant architectural shingles. We strip down to clean decking, inspect every square foot of plywood, and install a continuous 6-layer defense system.',
      features: [
        'Complete tear-off to clean plywood decking',
        'Ice & Water shield installed on all valleys and eaves',
        'Class 4 impact-rated shingles (insurance discount eligible)',
        'GAF Golden Pledge® 50-year non-prorated warranty',
        'Magnetic nail sweep of yard, driveways, and flowerbeds'
      ],
      timeframe: 'Typically 1–2 Days',
      warranty: '50-Year Non-Prorated',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      bgSpan: 'lg:col-span-8'
    },
    {
      id: 'repair',
      title: 'Precision Leak & Storm Repairs',
      subtitle: 'Targeted Diagnostics Without Pushing Replacement',
      icon: ShieldAlert,
      badge: 'Rapid Response',
      badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
      description: 'Not every roof needs replacement. If your roof has 5–10 years of viable life remaining, our diagnostic team will pinpoint the leak source and restore watertight integrity.',
      features: [
        'Chimney, pipe boot, and valley flashing reseals',
        'Missing, wind-lifted, or cracked shingle replacement',
        'Skylight perimeter waterproofing and flashing replacement',
        'Thermal moisture imaging to detect hidden wood rot'
      ],
      timeframe: 'Same-Day / 24-Hr Dispatch',
      warranty: '5-Year Workmanship',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      bgSpan: 'lg:col-span-4'
    },
    {
      id: 'storm',
      title: 'Storm, Hail & Wind Restoration',
      subtitle: 'Insurance Claim Advocacy & Forensic Documentation',
      icon: CloudRain,
      badge: 'DFW Hail Certified',
      badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
      description: 'Texas hail storms cause micro-fractures in shingles that weaken your roof silently over time. We provide an independent forensic report to ensure your insurer funds the full replacement you are entitled to.',
      features: [
        'Detailed high-resolution photo matrix for insurance adjusters',
        'On-site meeting with your insurance claims adjuster',
        'Emergency storm tarping within 4 hours of contact',
        'Zero out-of-pocket beyond your standard insurance deductible'
      ],
      timeframe: 'Fast-Track Restoration',
      warranty: 'Full Manufacturer Coverage',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?auto=format&fit=crop&w=800&q=80',
      bgSpan: 'lg:col-span-4'
    },
    {
      id: 'inspection',
      title: 'Drone & Structural Attic Inspections',
      subtitle: '4K Aerial Analysis & Thermal Attic Health Check',
      icon: Search,
      badge: '100% Free Consultation',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      description: 'Get an objective 25-point digital evaluation of your roof without high-pressure sales. We deliver an honest PDF condition report with aerial drone images and remaining lifespan estimates.',
      features: [
        'High-resolution 4K drone photography of steep slopes',
        'Attic structural truss and ventilation temperature audit',
        'Granule loss, fastener pop, and shingle curling check',
        'Comprehensive 12-page digital condition summary'
      ],
      timeframe: '45-Minute On-Site Assessment',
      warranty: 'Official Condition Certificate',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      bgSpan: 'lg:col-span-4'
    },
    {
      id: 'gutters',
      title: 'Seamless Gutters & Drainage Systems',
      subtitle: 'Heavy-Gauge Aluminum & Aged Copper Channels',
      icon: Droplets,
      badge: 'Architectural Finish',
      badgeColor: 'bg-copper-500/10 text-copper-600 border-copper-500/20',
      description: 'A premium roof is only as good as its water runoff system. We fabricate on-site 6-inch seamless gutters paired with micro-mesh leaf filters to protect your foundation from costly ground shifting.',
      features: [
        'On-site continuous seamless fabrication (no leak joints)',
        'Heavy-gauge aluminum in 28 designer colors & real copper',
        'Micro-mesh stainless steel gutter guards that block pine needles',
        'Strategic downspout placement to protect Texas expansive soil'
      ],
      timeframe: 'Single Day Installation',
      warranty: '20-Year Finish Warranty',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      bgSpan: 'lg:col-span-4'
    }
  ];

  return (
    <section id="services" className="py-24 bg-ivory-100 text-graphite-400 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-graphite-400/10 pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-600 font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
              <span>Our Capabilities</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Roofing Solutions. <br />
              <span className="font-serif italic font-normal text-copper-600">Thoughtfully Delivered.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-graphite-300 leading-relaxed">
              From precision leak mitigation to complete architectural transformations, every service is executed by certified, in-house master roofers with no cut corners.
            </p>
          </div>
        </div>

        {/* Editorial Asymmetric Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.bgSpan} group relative rounded-2xl bg-white border border-slate-900/5 shadow-elevated hover:shadow-premium transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                {/* Visual Header Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Badge & Icon on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md bg-white/90 text-slate-900 shadow-sm`}>
                      {service.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-copper-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-bold text-xl sm:text-2xl leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-sage-200 mt-1 line-clamp-1 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-graphite-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2.5 border-t border-slate-900/5 pt-5">
                      <div className="text-[11px] uppercase tracking-wider font-mono font-semibold text-copper-600 mb-2">
                        Key Specifications
                      </div>
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-graphite-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta & CTA */}
                  <div className="pt-6 border-t border-slate-900/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs font-medium text-graphite-300">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-copper-500" />
                        <span>{service.timeframe}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{service.warranty}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenEstimate(service.title)}
                      className="inline-flex items-center gap-2 text-xs font-display font-bold text-slate-900 hover:text-copper-600 transition-colors group/btn"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4 text-copper-500 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Emergency Storm Help */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>24/7 Active Storm Response</span>
            </div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Suffered recent wind, hail, or falling limb damage?
            </h4>
            <p className="text-xs sm:text-sm text-sage-200 max-w-xl">
              We deploy rapid tarping crews within 4 hours to prevent interior ceiling damage while our forensic specialists prepare your insurance claim documentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="tel:2148337663"
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-display font-bold text-sm transition-colors shadow-md"
            >
              Emergency Call: (214) 833-7663
            </a>
            <button
              onClick={() => onOpenEstimate('Emergency Storm Inspection')}
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-colors"
            >
              Request Fast Tarping
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
