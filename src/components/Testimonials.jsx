import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  MapPin,
  ShieldCheck
} from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      author: 'David & Sarah Henderson',
      neighborhood: 'Highland Park, Dallas',
      service: 'Full Roof Replacement & Copper Valleys',
      rating: 5,
      date: 'October 2025',
      homeImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      title: 'Our landscaping was completely untouched — zero nails found.',
      quote: 'We were terrified of having our roof replaced because our previous contractor 10 years ago trampled our hydrangeas and left nails everywhere. Slate & Ridge brought complete netting shields, shielded our custom AC compressor, and ran magnetic sweepers 3 times. The charcoal architectural shingles completely transformed our Tudor curb appeal.',
      verified: 'Verified Google Review'
    },
    {
      id: 2,
      author: 'Marcus Vance',
      neighborhood: 'Stonebriar, Frisco',
      service: 'Hail Damage Claim & Class 4 Upgrade',
      rating: 5,
      date: 'September 2025',
      homeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      title: 'Met with our insurance adjuster and got 100% full replacement approved.',
      quote: 'When the May hail storm blew through Collin County, our insurance company initially offered a microscopic repair estimate that barely covered patch work. Slate & Ridge conducted a forensic 4K drone scan, marked every hail impact on the shingles, and met our adjuster on the roof. They approved full replacement on the spot. Seamless process from start to finish.',
      verified: 'Verified Google Review'
    },
    {
      id: 3,
      author: 'Elena & Robert Chen',
      neighborhood: 'Southlake Woods, Southlake',
      service: 'GAF Golden Pledge 50-Year System',
      rating: 5,
      date: 'August 2025',
      homeImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      title: 'Meticulous communication and daily photographic check-ins.',
      quote: 'As an architect myself, I watch contractor details like a hawk. Their foreman, Tomas, walked me through the ice & water barrier installation in our complex valleys and showed me the 6-nail fastening schedule on the shingles. You rarely find this level of structural integrity in residential trades today. Worth every single penny.',
      verified: 'Verified Angi Super Service'
    }
  ];

  const currentReview = reviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  return (
    <section className="py-24 bg-white text-graphite-400 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-900/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-600 font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-copper-500"></span>
              <span>Homeowner Voices</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Trusted by 3,400+ <br />
              <span className="font-serif italic font-normal text-copper-600">North Texas Homeowners.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl border border-slate-900/10 hover:border-slate-900/30 bg-ivory-50 flex items-center justify-center text-slate-900 hover:bg-ivory-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl border border-slate-900/10 hover:border-slate-900/30 bg-ivory-50 flex items-center justify-center text-slate-900 hover:bg-ivory-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-ivory-50 rounded-3xl border border-slate-900/10 shadow-elevated overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Home Photo */}
          <div className="relative h-72 sm:h-96 lg:h-auto lg:col-span-5 bg-slate-900">
            <img
              src={currentReview.homeImage}
              alt={currentReview.author}
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="flex items-center gap-1.5 text-xs text-copper-300 font-medium mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentReview.neighborhood}</span>
              </div>
              <div className="font-display font-bold text-sm">
                Project: {currentReview.service}
              </div>
            </div>
          </div>

          {/* Review Content */}
          <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Rating stars & verified badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-mono text-xs font-bold text-slate-900 ml-1.5">5.0 / 5.0</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{currentReview.verified}</span>
                </div>
              </div>

              {/* Title & Quote */}
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 leading-snug mb-4">
                "{currentReview.title}"
              </h3>

              <p className="text-sm sm:text-base text-graphite-300 leading-relaxed italic">
                "{currentReview.quote}"
              </p>
            </div>

            {/* Author info & pagination indicator */}
            <div className="pt-6 border-t border-slate-900/10 flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-base text-slate-900">
                  {currentReview.author}
                </div>
                <div className="text-xs text-graphite-300">
                  {currentReview.neighborhood} • {currentReview.date}
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentIndex === idx ? 'bg-copper-500 w-6' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
