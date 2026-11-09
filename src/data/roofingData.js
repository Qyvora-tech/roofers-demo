// Complete Roofing Data for Timber & Peak Roofing Co. (USA Demo)

export const ROOFING_MATERIALS = [
  {
    id: 'standing-seam',
    name: 'Standing Seam Architectural Metal',
    tagline: 'Modern Elegance & 70+ Year Lifespan',
    category: 'Premium Metal',
    windRating: '165 MPH',
    impactRating: 'UL 2218 Class 4 (Highest)',
    fireRating: 'Class A (Non-Combustible)',
    lifespan: '70+ Years',
    curbAppealScore: 99,
    baseCostPerSq: 850,
    accentColor: '#D96C2E',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description: 'Concealed fastener 24-gauge Galvalume steel and architectural copper panels. Engineered for extreme wind, heavy snow loads, and direct hail impact with zero puncture risk.',
    features: [
      'Concealed fasteners prevent thermal expansion leaks',
      'Reflective Kynar 500® coating cuts cooling costs up to 25%',
      'Eligible for up to 30% homeowner insurance discounts in storm states',
      'Zero maintenance required over a 70-year operational life'
    ],
    popularColors: ['Matte Charcoal', 'Burnished Bronze', 'Aged Copper', 'Slate Black']
  },
  {
    id: 'cedar-shake',
    name: 'Hand-Split Western Red Cedar Shake',
    tagline: 'Authentic Organic Warmth & Timber Heritage',
    category: 'Handcrafted Timber',
    windRating: '140 MPH',
    impactRating: 'Class 3 / Class 4 Fire-Treated',
    fireRating: 'Class A (Pressure-Impregnated Treated)',
    lifespan: '45-55 Years',
    curbAppealScore: 98,
    baseCostPerSq: 980,
    accentColor: '#A6633C',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
    description: '100% Old-Growth Pacific Northwest Western Red Cedar. Naturally resistant to decay, insects, and UV degradation. Naturally breathes to regulate attic temperatures in all seasons.',
    features: [
      'Hand-split face with sawn back for deep shadow lines and authentic rustic depth',
      'High natural thermal R-value insulates attic during sub-zero winters',
      'Eco-sustainable timber harvested from certified regenerative forests',
      'Ages gracefully into a distinguished silvery-cedar patina'
    ],
    popularColors: ['Natural Honey Cedar', 'Weathered Driftwood', 'Deep Walnut Stain', 'Smoked Amber']
  },
  {
    id: 'heritage-shingle',
    name: 'Heritage Architectural Designer Shingles',
    tagline: 'Heavyweight Dimensional Asphalt with 50-Yr Warranty',
    category: 'Architectural Asphalt',
    windRating: '130 MPH',
    impactRating: 'UL 2218 Class 4 Hail Resilient',
    fireRating: 'Class A',
    lifespan: '40-50 Years',
    curbAppealScore: 93,
    baseCostPerSq: 490,
    accentColor: '#BE9273',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    description: 'Dual-layered micro-granulated architectural shingles engineered with SBS-modified rubberized asphalt to withstand 2-inch hail stones without granule shedding or fiberglass fractures.',
    features: [
      'SBS rubberized polymers absorb hailstone impacts like shock absorbers',
      'StainGuard Plus™ 25-year algae protection prevents unsightly black streaks',
      'DuraGrip™ adhesive seals withstand hurricane gusts up to 130 MPH',
      'Most cost-effective route to qualify for 100% insurance claim coverage'
    ],
    popularColors: ['Weathered Wood', 'Barkwood', 'Onyx Black', 'Pewter Gray']
  },
  {
    id: 'vermont-slate',
    name: 'Vermont Hand-Cut Natural Slate',
    tagline: 'The Century Roof - Indestructible Stone Craftsmanship',
    category: 'Natural Stone',
    windRating: '150+ MPH',
    impactRating: 'Class 4 Impervious',
    fireRating: 'Class A Incombustible',
    lifespan: '100+ Years',
    curbAppealScore: 100,
    baseCostPerSq: 1450,
    accentColor: '#7E533B',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    description: 'Quarried from the historic slate valleys of Vermont. Unrivaled permanence, impervious to freeze-thaw cycles, moisture absorption, and mold. The gold standard of luxury estates.',
    features: [
      'Centuries of proven longevity on historic American manors and cathedrals',
      'Zero synthetic materials, zero chemical off-gassing, 100% natural earth stone',
      'Completely impervious to fire, airborne sparks, and rot',
      'Adds permanent equity to historic and luxury custom residences'
    ],
    popularColors: ['Unfading Green', 'Mottled Purple', 'Strata Charcoal', 'Royal Black']
  },
  {
    id: 'commercial-tpo',
    name: 'Commercial TPO & Low-Slope Membrane',
    tagline: 'EnergyStar Reflective Cool Roof System',
    category: 'Commercial / Flat',
    windRating: '150 MPH',
    impactRating: 'Severe Hail Rated',
    fireRating: 'Class A',
    lifespan: '30-40 Years',
    curbAppealScore: 89,
    baseCostPerSq: 420,
    accentColor: '#3D281D',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc398?auto=format&fit=crop&w=1200&q=85',
    description: '80-mil thick thermoplastic polyolefin membrane hot-air welded into a continuous watertight monolithic shield. Engineered for modern residential flat-sections and commercial facilities.',
    features: [
      'Hot-air heat welded seams are 4x stronger than traditional adhesive tape',
      'Solar reflective topcoat lowers building interior temperatures by 12-18°F',
      'Ponding water resistant with zero degradation under standing pools',
      'Includes custom tapered polyiso rigid insulation for optimal drainage slope'
    ],
    popularColors: ['Bright Polar White', 'Slate Tan', 'Industrial Gray']
  }
];

export const BEFORE_AFTER_PROJECTS = [
  {
    id: 'plano-estate',
    title: 'Historic Craftsman Estate - Storm Restoration',
    location: 'Plano, Texas (Collin County)',
    beforeTitle: 'Before: Severe Softball Hail Damage & Attic Leaks',
    afterTitle: 'After: Standing Seam Matte Charcoal & Cedar Gables',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    roofSize: '4,400 Sq Ft (44 Squares)',
    insuranceStatus: '100% Insurance Covered ($41,800 Payout)',
    homeownerDeductible: '$1,000 Out-of-Pocket',
    turnaround: '3 Days Total Install',
    warranty: '50-Year Golden Pledge® Transferable',
    homeownerReview: '"Timber & Peak met our insurance adjuster on our steep roof with drone heat maps. The adjuster approved the full replacement on the spot. Our energy bill dropped 22% the first summer!"',
    homeownerName: 'Dr. Gregory & Sarah Vance'
  },
  {
    id: 'aspen-chalet',
    title: 'Alpine Timber Chalet - Heavy Snow & Ice Shield',
    location: 'Aspen / Vail, Colorado',
    beforeTitle: 'Before: 18-Yr Curling Shingles & Ice Dam Leaks',
    afterTitle: 'After: Western Red Cedar Shake with Copper Snow Guards',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
    roofSize: '5,200 Sq Ft (52 Squares)',
    insuranceStatus: 'Ice Dam Winter Emergency Claim',
    homeownerDeductible: '$1,500 Out-of-Pocket',
    turnaround: '4 Days Install',
    warranty: 'Lifetime Architectural Timber Warranty',
    homeownerReview: '"We needed a roof that could handle 6 feet of Rocky Mountain snow and look like a work of art. The crew protected our heated driveway and completed everything ahead of winter."',
    homeownerName: 'Marcus Lindqvist, Architectural Designer'
  },
  {
    id: 'nashville-manor',
    title: 'Belle Meade Colonial - Tornado Wind Restoration',
    location: 'Nashville, Tennessee',
    beforeTitle: 'Before: 90 MPH Wind-Stripped Decking & Fallen Trees',
    afterTitle: 'After: Class 4 Architectural Shingle & Custom Copper Valleys',
    beforeImage: 'https://images.unsplash.com/photo-1508873696983-2df5703bc398?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    roofSize: '3,800 Sq Ft (38 Squares)',
    insuranceStatus: 'State Farm Full Supplement Approval',
    homeownerDeductible: '$2,000 Out-of-Pocket',
    turnaround: '2 Days Install (48-Hr Speed Crew)',
    warranty: '50-Year Non-Prorated Warranty',
    homeownerReview: '"A massive oak branch pierced our roof during the spring tornado. Timber & Peak tarped our roof within 90 minutes at 11 PM and had the entire new roof finished that week."',
    homeownerName: 'Caroline & Brett Sterling'
  }
];

export const STORM_RADAR_DATA = [
  {
    zip: '75001',
    city: 'Dallas / North Dallas',
    state: 'TX',
    stormEvent: 'Golf Ball Hail (1.75") & 75 MPH Wind',
    date: 'Recent Hail Corridor',
    threatLevel: 'High Risk',
    claimApprovalRate: '98.4%',
    statusBadge: 'Active Adjuster Mobilization',
    avgClaimValue: '$36,800'
  },
  {
    zip: '80202',
    city: 'Denver / Front Range',
    state: 'CO',
    stormEvent: 'Severe Hail & Freeze-Thaw Shearing',
    date: 'Recent Front Range Storm',
    threatLevel: 'Critical Severity',
    claimApprovalRate: '99.1%',
    statusBadge: 'State Insurance Emergency',
    avgClaimValue: '$42,500'
  },
  {
    zip: '37203',
    city: 'Nashville / Williamson County',
    state: 'TN',
    stormEvent: 'Supercell Microburst & 80 MPH Gusts',
    date: 'Recent Wind System',
    threatLevel: 'High Risk',
    claimApprovalRate: '97.2%',
    statusBadge: 'Rapid Crew Deployed',
    avgClaimValue: '$31,400'
  },
  {
    zip: '30301',
    city: 'Atlanta / Buckhead Metro',
    state: 'GA',
    stormEvent: 'Tropical Rain Band & Heavy Shingle Lift',
    date: 'Recent Severe Front',
    threatLevel: 'Moderate-High',
    claimApprovalRate: '96.8%',
    statusBadge: 'Drone Inspections Active',
    avgClaimValue: '$29,900'
  },
  {
    zip: '28201',
    city: 'Charlotte / Mecklenburg',
    state: 'NC',
    stormEvent: 'Hail Swarm & Micro-Cracks',
    date: 'Recent Piedmont Storm',
    threatLevel: 'Moderate',
    claimApprovalRate: '95.5%',
    statusBadge: 'Free Drone Scans',
    avgClaimValue: '$28,200'
  }
];

export const STATS = [
  { value: '4,890+', label: 'Master Roofs Completed', sub: 'Across 6 Southern & Mountain States' },
  { value: '99.2%', label: 'Insurance Approval Rate', sub: 'Over $48M in Storm Claims Settled' },
  { value: '50-Year', label: 'Golden Pledge® Warranty', sub: '100% Non-Prorated Labor & Materials' },
  { value: '4.99 ★', label: 'Homeowner Satisfaction', sub: '1,840+ Verified 5-Star Reviews' }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: '4K Drone Thermal & Micro-Fracture Scan',
    duration: '60 Minutes',
    description: 'We deploy high-resolution commercial drones with thermal imaging to map every square foot of your roof. We uncover hail bruises and microscopic water intrusion invisible from the ground.',
    deliverable: 'Free 24-Page Engineering CAD Roof Health Report'
  },
  {
    step: '02',
    title: 'Insurance Adjuster Forensic Representation',
    duration: 'Days 2-4',
    description: 'Insurance companies train adjusters to minimize payouts. Our certified Haag forensic roof inspectors climb onto the roof with your adjuster, presenting line-by-line Xactimate® evidence to secure 100% replacement.',
    deliverable: 'Zero Out-of-Pocket Beyond Your Legal Deductible'
  },
  {
    step: '03',
    title: '48-Hour Master Elite® Precision Installation',
    duration: '48 Hours',
    description: 'Full tear-off down to raw decking. We replace rotten plywood, install Ice & Water Shield, synthetic breathable underlayment, and hand-nail with 6 nails per shingle to withstand 130+ MPH winds.',
    deliverable: 'Triple Magnetic Lawn Sweep (Pet & Tire Safe Guarantee)'
  },
  {
    step: '04',
    title: '50-Year Transferable Warranty Handover',
    duration: 'Final Day',
    description: 'Our senior master builder conducts a 45-point final QA check. We register your warranty directly with the manufacturer, guaranteeing non-prorated replacement for half a century.',
    deliverable: 'Registered Golden Pledge Certificate for Future Home Resale'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Robert C. Kensington',
    role: 'Homeowner & Real Estate Investor',
    city: 'Southlake, TX',
    rating: 5,
    roofType: 'Standing Seam Metal in Matte Charcoal',
    quote: 'Other roofers gave me scribbled quotes on napkins and pushed cheap asphalt. Timber & Peak brought an iPad with 4K drone models, handled the whole \$54,000 claim with Travelers Insurance, and finished in 2 days. The standing seam roof looks like something out of Architectural Digest.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Helena Morales-Vance',
    role: 'Interior Designer & Custom Homeowner',
    city: 'Vail Valley, CO',
    rating: 5,
    roofType: 'Western Red Cedar Shake Restoration',
    quote: 'Living at 8,200 feet altitude, standard roofs disintegrate under intense UV and heavy ice packs. Timber & Peak hand-selected fire-treated Western Red Cedar shakes. Their crew was polite, kept our landscaped gardens pristine, and the wood aroma and craftsmanship are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Marcus & Allison Vance',
    role: 'Historic Homeowners',
    city: 'Franklin / Nashville, TN',
    rating: 5,
    roofType: 'Heritage Class 4 Architectural Shingle',
    quote: 'After the March wind storm tore off half our ridge cap, water was dripping into our master bedroom. Timber & Peak had an emergency tarp crew at our house by midnight. Three weeks later, we have a brand new Class 4 roof that lowered our annual home insurance by \$1,240!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS = [
  {
    q: 'Will my homeowners insurance pay for a full roof replacement?',
    a: 'In the majority of US hail and wind events, yes! If hail has fractured your shingles or wind has lifted the adhesive seals, your insurance carrier is legally obligated to restore the property to pre-storm condition. We meet your insurance adjuster on the roof with 4K drone photographic evidence and Xactimate® pricing codes to ensure you get approved for full replacement, not just a partial patch.'
  },
  {
    q: 'Why should I choose standing seam metal or cedar shake over basic shingles?',
    a: 'While basic 3-tab shingles last 15-20 years and blow off at 60 MPH winds, standing seam metal and cedar shakes last 50 to 75+ years, withstand 150+ MPH winds, and provide UL Class 4 impact resistance. Furthermore, standing seam metal cuts summer cooling bills by up to 25% and can qualify you for up to a 30% reduction in homeowner insurance premiums.'
  },
  {
    q: 'How messy is a roof tear-off? Will there be nails in my lawn?',
    a: 'We treat your property like our own. Before a single shingle is stripped, we erect our signature "Catch-All" breathable netting around your landscaping, AC condensers, and pool. After completion, our crew performs three consecutive passes with industrial rolling neodymium magnets to ensure zero stray nails for your pets or car tires.'
  },
  {
    q: 'What does the 50-Year Non-Prorated Golden Pledge® Warranty mean?',
    a: 'Standard contractor warranties are "prorated," meaning after 10 years they only cover 20% of material costs and 0% labor. Our Golden Pledge® warranty is backed directly by the manufacturer (GAF/Owens Corning) and covers 100% of material defects AND 100% of master installation labor for 50 full years. It is fully transferable to the next homeowner if you sell.'
  },
  {
    q: 'How fast can you start if I have an emergency leak or pending storm?',
    a: 'We operate 24/7 Rapid Emergency Response units. If you have an active leak, we dispatch a certified crew within 2 to 4 hours to install industrial poly-tarps and sandbags to stop interior water damage. For scheduled roof replacements, our typical start window is 3 to 7 business days.'
  }
];
