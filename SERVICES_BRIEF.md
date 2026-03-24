# Services Page Brief

Create `app/services/page.tsx` — a detailed services page for LaunchFast.

## DESIGN RULES — must match existing site exactly:
- Background: `#000000` with `radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)` dot grid at `32px 32px`
- Primary: `#F97316` (orange-500)
- Inverted section backgrounds: `#0A0500` with orange grid overlay
- Container: `container mx-auto px-6` (max-width 1200px set in tailwind.config.ts)
- Font: Inter, headings `font-semibold`, body `text-sm text-neutral-400`
- Section labels: use `SectionLabel` component from `@/components/ui/SectionLabel` (pill badge with icon + monospace text)
- Buttons: use `Button` component from `@/components/ui/Button` (primary/outline variants)
- Card borders: `border border-[rgba(249,115,22,0.12)] bg-[#0A0A0A]` or `bg-[#0D0D0D]`
- Animations: Framer Motion `whileInView` with `viewport={{ once: true }}`
- All sections have `relative overflow-hidden`

## PAGE STRUCTURE (scroll order):

### 1. Hero Banner
- Centered text, no sidebar graphic
- SectionLabel: icon=rocket, text="Our Services"
- H1: "Everything You Need to Launch" with orange gradient on "Launch"
- Subtitle: concise value prop about end-to-end MVP delivery
- Two buttons: "Book a Free Call" (primary) + "View Pricing" (outline, links to /#pricing)

### 2. Service Deep-Dive Sections (4 sections, alternating layout)
Each service gets its own full section with:
- Left/right alternating layout (text one side, custom SVG graphic other side)
- SectionLabel pill badge
- H2 title
- 2-3 paragraphs of detailed copy explaining what's included, how we do it, and why it matters
- Feature grid (2 columns of bullet points with orange arrow icons)
- A "What you get" card — dark bordered card listing specific deliverables
- CTA button at the bottom

**The 4 services:**

**a) MVP Development (the core offering)**
- We build production-ready MVPs in 3-14 days
- Modern stack: Next.js, TypeScript, Node.js, PostgreSQL, Supabase
- Not throwaway prototypes — real, scalable, production-grade code
- Daily progress updates — you see builds every 24 hours
- SVG graphic: a stylised dashboard/app being assembled (dark card with UI elements, progress indicators, deployment badge)

**b) UI/UX Design**
- We design before we code — wireframes, prototypes, user flows
- Figma deliverables — you own the design files
- Mobile-first, conversion-optimised interfaces
- Design system setup so your product stays consistent as it scales
- SVG graphic: browser wireframe being designed (larger and more detailed)

**c) Full-Stack Development**
- For founders who need more than an MVP — complex integrations, real-time features, advanced auth
- React/Next.js frontend, Node.js backend, PostgreSQL/Supabase database
- REST and GraphQL APIs, third-party integrations (Stripe, SendGrid, Twilio etc)
- Code review, testing, CI/CD pipeline
- SVG graphic: terminal/code editor style (showing git commands, test results, deploy confirmation)

**d) Launch & Scale**
- Deployment to Vercel/AWS with CI/CD
- Uptime monitoring, error tracking, analytics setup
- SEO, Core Web Vitals optimisation, meta tags
- Post-launch support (2 weeks to 3 months depending on plan)
- SVG graphic: globe with connection nodes, deploy badge, uptime chart

### 3. Why LaunchFast Section (differentiation)
- Inverted section background (`#0A0500` with orange grid)
- 3-column grid comparing LaunchFast vs traditional agencies vs freelancers
- Use cards with clear headers and bullet points
- Make it crystal clear why LaunchFast wins (speed, quality, transparency, ownership)

### 4. Tech Stack Section
- Grid of tech logos/icons with labels: Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, Stripe, Vercel, Tailwind CSS, Prisma, Redis, AWS
- Each in a small card with subtle hover effect
- Brief text: "We use the best tools for the job. No legacy frameworks, no bloat."

### 5. CTA Section
- Reuse the same CTA component from the homepage: `import CTA from '@/components/sections/CTA'`

## COPY TONE:
- Direct, confident, founder-to-founder
- No corporate fluff — short sentences, clear value
- Use specifics (days, tech names, percentages) not vague claims
- Address objections: "Yes, it's actually production-ready", "You own 100% of the code"

## SVG GRAPHICS:
- Create as React components inline in the page
- Black/orange colour scheme matching existing SVGs
- Use coloured accents sparingly: blue (#60a5fa), green (#22c55e), purple (#a78bfa)
- Add subtle Framer Motion animations (draw-in paths, pulsing dots, animated progress bars)
- Traffic lights on browser/terminal SVGs: red (#ef4444), amber (#f59e0b), green (#22c55e)

## IMPORTS TO USE:
```tsx
'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import CTA from '@/components/sections/CTA'
```

## NAVIGATION:
Add "Services" link to the nav that points to `/services`. Nav links are defined in `components/layout/Nav.tsx` as a `links` array at the top of the file.

## BUILD CHECK:
Must pass `npm run build` with 0 errors. After building, run:
```
git add -A
git commit -m "feat: services page — detailed service breakdowns with custom SVGs"
git push origin main
openclaw system event --text "Done: Services page built and pushed" --mode now
```
