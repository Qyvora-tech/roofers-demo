import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const SHOWCASE_ITEMS = [
  {
    id: 1,
    title: 'Highland Park Standing Seam Estate',
    category: 'Standing Seam Metal',
    location: 'Dallas / Fort Worth, TX',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    specs: '5,800 Sq Ft • 24-Ga Galvalume Matte Charcoal • 165 MPH Wind Rated',
    turnaround: '4 Days',
    story: 'Replaced hail-damaged clay tile with ultra-modern standing seam metal and integrated cedar soffits.'
  },
  {
    id: 2,
    title: 'Vail Mountain Hand-Split Timber Chalet',
    category: 'Hand-Split Cedar',
    location: 'Vail / Beaver Creek, CO',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
    specs: '6,400 Sq Ft • Old-Growth Red Cedar Shake • Class A Fire-Retardant',
    turnaround: '5 Days',
    story: 'Engineered with copper snow rails to withstand 8 feet of Rocky Mountain winter snow pack.'
  },
  {
    id: 3,
    title: 'Belle Meade Historic Georgian Manor',
    category: 'Architectural Shingle',
    location: 'Nashville, TN',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    specs: '4,200 Sq Ft • Triple-Layer SBS Class 4 Impact • 50-Year Golden Pledge',
    turnaround: '3 Days',
    story: 'Tornado wind restoration covered 100% by insurance carrier after forensic drone scan.'
  },
  {
    id: 4,
    title: 'Asheville Blue Ridge Contemporary Lodge',
    category: 'Standing Seam Metal',
    location: 'Asheville, NC',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    specs: '3,900 Sq Ft • Aged Burnished Copper Standing Seam • Lifetime Warranty',
    turnaround: '3 Days',
    story: 'Custom cantilevered roof plane with internal hidden box gutters and rainwater harvesting.'
  },
  {
    id: 5,
    title: 'Buckhead Classical Slate Residence',
    category: 'Vermont Slate',
    location: 'Atlanta, GA',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    specs: '7,100 Sq Ft • Vermont Unfading Green Slate • 100-Year Design Lifespan',
    turnaround: '7 Days',
    story: 'Hand-cut genuine quarry slate with hand-beaten copper flashings and bronze drip edges.'
  },
  {
    id: 6,
    title: 'Austin Tech Corridor Modern Pavilion',
    category: 'Standing Seam Metal',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc398?auto=format&fit=crop&w=1200&q=85',
    specs: '28,000 Sq Ft • Architectural Standing Seam • Energy Star Cool Roof',
    turnaround: '12 Days',
    story: 'Architectural Galvalume installed with zero disruption to residential occupants.'
  }
];

const CATEGORIES = ['All Projects', 'Standing Seam Metal', 'Hand-Split Cedar', 'Architectural Shingle', 'Vermont Slate'];

export default function ProjectShowcase({ onOpenLeadModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filtered = selectedCategory === 'All Projects'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section className="py-24 sm:py-32 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-copper-400 uppercase tracking-widest">
              Selected Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Architectural Portfolio
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Explore our recent installations across the country. Every home reflects our obsession with clean lines, watertight flashing, and heirloom durability.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'border-copper-500 bg-copper-500 text-white font-bold shadow-sm'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-medium group flex flex-col justify-between hover:border-copper-500/50 transition-all"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded text-xs text-white font-semibold border border-slate-750">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-copper-400" />
                      <span>{item.location} • {item.turnaround}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-copper-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                      {item.story}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px] truncate max-w-[190px] font-medium">{item.specs.split('•')[0]}</span>
                  <button
                    onClick={() => onOpenLeadModal(`Portfolio Inquiry: ${item.title}`)}
                    className="text-copper-400 hover:text-copper-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
