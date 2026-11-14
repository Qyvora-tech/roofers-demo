# SLATE & RIDGE ROOFING CO.
### *Crafted Above. Built Beyond.*

A custom, award-winning, agency-grade ($3,000+) digital experience engineered for a premier American residential roofing company. Designed with architectural visual hierarchy, an interactive pinned scroll-driven roof assembly sequence, and conversion-focused UX.

---

## 🌟 Key Highlights & Engineering Features

### 1. Signature Pinned Scroll-Driven Roof Assembly
- **Cinematic Experience:** Homeowners witness a real American residential home transition from raw exposed decking to an armor-clad charcoal architectural roofing system as they scroll.
- **Bi-Directional Scrubbing:** Maps scroll progress to video frames forward and backward with sub-frame linear damping (`requestAnimationFrame` + lerp) for smooth 60fps interaction.
- **Synchronized Overlays:**
  - **0%–18% (Initial):** Exposed decking, "A Better Roof. A Stronger Home."
  - **18%–45% (Foundation):** Synthetic underlayment & ice/water barriers descend.
  - **45%–75% (Assembly):** Class 4 architectural shingles in precision staggered courses.
  - **75%–88% (Finishing):** Step flashing, copper valleys, and high-flow ridge ventilation.
  - **88%–100% (Reveal):** Completed architectural system, "Built for What Matters Most."
- **Non-Blocking UX:** Includes instant milestone navigation buttons (Decking, Underlayment, Shingles, Flashing, Complete), "Jump to Finished Roof", and direct CTA actions so visitors are never trapped by animations.

### 2. Architectural Design System
- **Midnight Slate (`#172328`):** Dominant dark surface for hero, footer, and editorial callouts.
- **Aged Copper (`#C29369`):** Restrained luxury accent for primary CTAs, active highlights, and badges.
- **Warm Ivory (`#F4F0E8`):** Approachable, readable main editorial background.
- **Muted Sage (`#8B9995`):** Subtle architectural accents, metadata, and borders.
- **Deep Graphite (`#343F43`):** High-contrast body typography.
- **Pure White (`#FFFFFF`):** High-contrast card surfaces and interactive calculators.
- **Typography:** Plus Jakarta Sans & Manrope (Display/Headings), Inter & DM Sans (Body), Playfair Display (Restrained editorial accents).

### 3. Interactive Components & Conversion Architecture
- **Interactive 7-Layer Roofing Anatomy:** Clickable cross-section breakdown inspecting Decking, Drip Edge, Ice & Water Shield, Synthetic Underlayment, Starter Strip, Architectural Shingles, and Ridge Cap Ventilation.
- **Interactive Turnkey Cost & Financing Calculator:** Real-time square footage slider, roof pitch selector, and shingle tier comparisons with Texas insurance discounts and monthly payment projections.
- **Filterable Project Portfolio & Before/After Slider:** High-resolution architectural photography with interactive split-slider comparison.
- **The Slate & Ridge Standard (4 Pillars):** In-house certified artisans, 80+ digital photo checkpoints, white-glove property shielding (Catch-All nets & magnetic sweeps), and GAF Golden Pledge warranties.
- **5-Step Homeowner Journey:** Inspection & 4K Drone Scan → Itemized Proposal & 3D Visualizer → Property Shielding & Tear-Off → Master Installation → Magnetic Clean-up & Warranty.
- **DFW Service Areas & Interactive ZIP Checker:** Instant local dispatch lookup across Dallas, Plano, Frisco, Southlake, McKinney, Allen, and Fort Worth.
- **Verified Homeowner Testimonials Carousel:** Authentic stories with finished home photography and neighborhood credentials.
- **Comprehensive FAQ Accordion:** Straightforward answers on insurance claims, shingle longevity, storm damage detection, and warranties.
- **Global Estimate Modal & Lead Capture:** Fast, friction-free booking with confetti celebrations and immediate dispatch response commitments.

---

## 🛠 Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Animations:** HTML5 Video Scrubbing with `requestAnimationFrame` lerping, Framer Motion, GSAP
- **Icons:** Lucide React
- **Delight & Micro-interactions:** Canvas Confetti

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/Qyvora-tech/roofers-demo.git

# Navigate to project directory
cd roofers-demo

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` to view the website.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📄 License & Attribution
Designed and built for Slate & Ridge Roofing Co. Demonstration brand assets and media included.
