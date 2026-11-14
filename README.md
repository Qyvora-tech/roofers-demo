# RIDGELINE ARCHITECTURAL ROOFING
### *Architectural Precision Overhead. Engineered for 50-Year Longevity.*

An elite, bespoke agency-grade digital experience for a premium American residential roofing firm. Built with custom architectural art direction, Swiss-inspired typographic hierarchy, a 60–120 FPS high-resolution pinned scroll-driven roof assembly interaction, and conversion-focused UX.

---

## 🏛️ Design System & Creative Direction

- **Limestone (`#EAE7DF`):** Primary architectural background surface.
- **Carbon (`#252B2C`):** High-contrast editorial dark surface for hero, footer, and specification panels.
- **Oxidized Copper (`#A66E4E`):** Restrained luxury metal accents, active progress badges, and CTA highlights.
- **Weathered Stone (`#AAA99C`):** Subtle architectural indicators and technical metadata.
- **Chalk (`#F8F7F3`):** High-contrast crisp card surfaces.
- **Typography:** Instrument Serif (Editorial headings), Manrope (Body & navigation), IBM Plex Mono (Technical specifications & metadata).

---

## 🌟 Key Architectural Features

### 1. Signature Pinned Canvas Roof Assembly (60–120 FPS)
- High-performance HTML5 `<canvas>` rendering 94 pre-decoded WebP frames of an authentic residential roof build sequence.
- Decoupled frame interpolation (`diff * 0.22`) with Lenis inertial smooth momentum scrolling.
- ~60–70% dark carbon contrast overlay with left-side architectural gradient for readable typography over bright substrate decking.
- Pure white bold typography (`text-white`) with high-depth drop shadows (`drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]`) and oxidized copper accents.
- Cinematic blur-dissolve phase crossfades powered by Framer Motion (`<AnimatePresence mode="wait">`).
- Sleek hairline progress track and real-time assembly percentage indicator.

### 2. Anatomy of Craft (Interactive Technical Pins)
- High-resolution photographic spread with interactive pulsating pinpoints (Aged Copper Valley, 6-Nail Fastener Schedule, 5/8" CDX Substrate, Continuous Ridge Exhaust).
- Dynamic specification ribbon with smooth animated transitions.

### 3. Bespoke Capabilities & Deliverables
- 1 dominant photographic feature + 4 text-led service entries (Roof Replacement, Precision Repair, Storm Restoration, Forensic Inspection).
- Fluid image scale crossfades and deliverable checklist animations.

### 4. Material Selection Studio
- Interactive tabs for Class 4 Impact Architectural Shingles, Standing Seam Metal, Hand-Split Western Red Cedar, and DaVinci Synthetic Slate.
- Detailed verified attributes matrix with physical sample kit ordering.

### 5. Selected Work & Interactive Before/After Slider
- Asymmetric portfolio grid of genuine Dallas-Fort Worth estates.
- Interactive touch- and drag-enabled split Before/After comparison modal with spring dynamics.

### 6. Working Philosophy & Credentials
- W2 certified artisans, 80+ photographic checkpoints, magnetic property shielding, GAF Master Elite® (#ME-98214) license verification.

### 7. Regional DFW Jurisdictions & ZIP Lookup
- Live service radius checking across Dallas, Plano, Frisco, Southlake, McKinney, Allen, and Fort Worth.

### 8. High-Contrast Estimate Intake & Modal
- Spring-animated booking modal with celebration particles and rapid dispatch commitments.

---

## 🛠 Tech Stack

- **Framework:** React 19 + Vite 6
- **Smooth Inertial Scrolling:** Lenis (`@studio-freight/lenis` / `lenis`)
- **Animation & Transitions:** Framer Motion (`framer-motion`), Canvas Confetti
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:3000`

---

## 📦 Production Build & Deployment

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Vercel / Netlify Deployment
This project includes `vercel.json` configured for Vite SPA routing:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework:** `vite`
