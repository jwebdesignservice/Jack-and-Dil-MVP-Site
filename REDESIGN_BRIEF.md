# LaunchFast Redesign Brief

## Context
This is the LaunchFast MVP agency website — currently vanilla HTML/CSS/JS. Rebuild it as a Next.js 14 app with a radical visual redesign.

## SETUP
1. Scaffold Next.js 14 in this directory (App Router, TypeScript, Tailwind):
   - Create app/, components/, public/ folder structure
   - Create next.config.js, tsconfig.json, tailwind.config.ts, package.json (Next.js based)
   - Install dependencies: next react react-dom typescript @types/react @types/node tailwindcss postcss autoprefixer framer-motion
   - Install shadcn: npx shadcn@latest init
   - Install Playwright: npm install -D @playwright/test

2. tailwind.config.ts must include:
   - Colors: black (#000), orange-500 (#F97316), orange-600 (#EA580C)
   - Custom animations: float, glow, marquee-left, marquee-right, pulse-ring, scan-line, gradient-sweep

## DESIGN SYSTEM
- Background: Pure black #000000
- Primary: Orange #F97316
- Surface: #0A0A0A, #111111, #1A1A1A
- Border: rgba(249, 115, 22, 0.15)
- Text: white / #A3A3A3
- Font: Inter via next/font/google
- Glow: rgba(249, 115, 22, 0.2)

## FILE STRUCTURE
```
app/
  layout.tsx         (root layout, nav, footer)
  page.tsx           (home — composes all sections)
  contact/page.tsx   (contact form — port from contact.html)
components/
  layout/
    Nav.tsx          (glassmorphism on scroll, orange CTA)
    Footer.tsx       (dark, orange top border gradient)
  sections/
    Hero.tsx
    Marquee.tsx
    Services.tsx
    Comparison.tsx
    Process.tsx
    About.tsx
    Pricing.tsx
    Testimonials.tsx
    FAQ.tsx
    CTA.tsx
  ui/
    GlowCard.tsx     (mouse-tracking directional glow)
    CountUp.tsx      (scroll-triggered number animation)
    AnimatedText.tsx (word/char stagger)
    MarqueeTicker.tsx
  svgs/
    HeroGraphic.tsx  (animated SVG — rocket/nodes/orbits)
    CircuitPattern.tsx
```

## SECTION SPECS

### Hero
- Background: dot grid (small dots, subtle orange tint, breathing animation) + asymmetric orange blurred circles off edges + thin diagonal lines SVG overlay
- Badge: '⚡ Now accepting projects Q1 2026' — orange border, pulsing dot
- H1: 'Production-Ready MVPs' + orange gradient 'For Ambitious Founders'
- Two CTAs: solid orange | ghost with scan-line sweep hover
- Right side: HeroGraphic SVG (animated draw-in paths, orbiting nodes)
- Floating stat cards (50+ MVPs, 3-14 Days, 100% Ownership, 24/7 Support)
- Framer Motion stagger on load

### Marquee Ticker
- TWO rows: row 1 scrolls left, row 2 scrolls right
- Items: React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase, Stripe, Vercel, Tailwind, Prisma, Redis, AWS
- Each item: small icon SVG + name, separated by orange diamond
- Gradient masks (left/right edges fade)
- Pause on hover

### Services
- Background: #0A0A0A + animated grid lines + corner bracket SVGs
- 2x2 grid of cards
- Each card: number badge (orange monospace), custom geometric SVG icon, title, description, feature list, arrow link
- Hover: lift, orange border glow
- Card 03 (Full-Stack Dev): 'POPULAR' badge

### Comparison
- Left: 'Old Way' red-tinted glass card with X marks
- Center: 'VS' large bold rotates on scroll
- Right: 'Fast Way' orange-glowing card with checks
- Background: circuit board SVG pattern
- Below: horizontal timeline '3-6 months' → '14 days' with animated progress bar

### Process
- Background: #0D0D0D + vertical glowing orange center line + particle field
- Alternating left-right cards on timeline
- Steps: 01 SCOPE, 02 DESIGN, 03 BUILD, 04 LAUNCH
- Each card: animated gradient border on hover, custom step SVG icon
- Final step: orange starburst effect, 'Go Live 🚀'

### About
- Background: black + hexagonal shapes (low opacity orange stroke) + noise texture
- Left: animated stats hub — central '50+ MVPs' in glowing circle, 4 orbiting satellite stats
- Right: text, section label, gradient H2, description, tech tag pills, CTA

### Pricing
- Background: black + orange grid lines (0.08 opacity) + radial gradient center
- 3 cards: Sprint ($7,500), Launch ($15,000 - POPULAR), Premium ($30,000)
- CountUp animation on scroll for prices
- Middle card: animated gradient border sweep, orange glow underneath
- Below: trust badges row

### Testimonials
- Background: #080808 + flowing SVG wave shapes + radial spotlight
- Left: text + 3 inline stats + CTA
- Right: two infinite-scroll columns (one up, one down)
- Cards: black glass, 5 orange stars, quote, avatar with orange ring

### FAQ
- Background: black + large decorative orange question mark SVG (very low opacity) + dot matrix
- Custom accordion (NO browser default): smooth height animation, orange left border when open, rotate icon

### CTA
- Full-width card with rotating conic gradient border (orange → amber → orange)
- Animated gradient blobs inside
- Noise texture
- Orange particle burst in corners

### Nav
- Transparent → backdrop blur + dark on scroll
- Mobile hamburger with slide panel
- Active link: orange underline
- CTA: orange button 'Book a Call'

### Footer
- #050505
- Gradient orange top border (fades at edges)
- 3 columns + copyright

## SVGs TO CREATE

### HeroGraphic.tsx
- Abstract rocket shape (geometric, not cartoon)
- Data nodes connected by thin lines (animated draw-in)
- Orbiting dots/elements
- Code bracket decorations
- All paths animate in with stroke-dashoffset on mount

### CircuitPattern.tsx
- Circuit board trace pattern (horizontal/vertical lines with nodes)
- For comparison section background

## ANIMATIONS
Framer Motion:
- Hero stagger load (0.1s between children)
- whileInView triggers for all sections (once: true)
- Card whileHover (y: -4, boxShadow)
- CountUp on scroll

CSS:
- Marquee loops
- Testimonial column infinite scroll
- Dot grid breathing
- Gradient border sweeps
- Particle floats

## PLAYWRIGHT
Create playwright.config.ts + tests/e2e/home.spec.ts:
- Tests: page loads (200), nav present, hero CTA present, mobile viewport renders

## COMPLETION
1. Run npm run build — must pass 0 errors
2. Fix any TypeScript/build errors
3. git add -A && git commit -m "feat: complete redesign — Next.js 14, black/orange, shadcn + animations"
4. Run: openclaw system event --text "Done: LaunchFast redesign complete. Next.js 14, black/orange theme, all sections built, build passes." --mode now
