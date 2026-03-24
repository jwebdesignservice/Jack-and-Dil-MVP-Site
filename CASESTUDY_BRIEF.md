# Case Study Pages Brief

Create 4 individual case study pages at `app/work/[slug]/page.tsx` using Next.js dynamic routes. Each page should be rich, detailed, and professional.

## DESIGN RULES — same as existing site:
- `'use client'` at top of page
- Background: `#000000` with `radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)` dot grid at `32px 32px`
- Primary: `#F97316`
- Container: `container mx-auto px-6`
- Font: Inter, headings `font-semibold`
- Section labels: `SectionLabel` from `@/components/ui/SectionLabel`
- Buttons: `Button` from `@/components/ui/Button`
- Animations: Framer Motion `whileInView` with `viewport={{ once: true }}`
- Import CTA section: `import CTA from '@/components/sections/CTA'`

## PAGE STRUCTURE (each case study):

### 1. Hero
- Full-width hero image (the main project screenshot) with dark gradient overlay
- SectionLabel badge: "Case Study"
- Project name as H1 (large)
- One-line tagline
- Tags row (industry tags)
- Stats row: 3-4 big numbers (delivery time, key metrics — make up realistic ones)

### 2. The Challenge
- Text section explaining the client's problem
- Use left-aligned text with a subtle orange accent bar on the left

### 3. Our Approach
- How we solved it — methodology, decisions made
- 3-column grid of approach cards with icons

### 4. Key Features
- Feature cards in a 2-column grid
- Each card: icon, title, short description

### 5. Screenshots Gallery
- Show the project images (main + hover/phone if available)
- Use the images already in `/Images/work/`

### 6. Results
- Big stats in a dark card (inverted section `#0A0500`)
- 4 large numbers with labels
- Brief testimonial or quote (make up a realistic one from the "client")

### 7. Tech Stack Used
- Row of tech pills showing what was used

### 8. CTA Section
- Reuse `<CTA />` from homepage

## THE 4 PROJECTS:

### a) Desert Falcons Collective (`/work/desert-falcons`)
- **What:** A premium automotive community platform + full member dashboard for luxury car enthusiasts in Saudi Arabia
- **Industry:** Automotive, Luxury, Community
- **Challenge:** Desert Falcons needed a platform to unite Saudi Arabia's top automotive engineers, designers, and enthusiasts under one digital roof — combining a public-facing website with a private member portal
- **Approach:** Built a sleek public website (dark theme, Arabic-inspired design) AND a full member dashboard with discussions, announcements, project updates, member directory, resources, events, and settings
- **Key features:** Member portal with auth, Discussion forums with categories, Founder's updates feed, Member directory, Event management, Resource library, Project updates board, Dark luxury aesthetic
- **Stats:** 12-day delivery, 500+ founding members, 8 dashboard modules, 99.9% uptime
- **Tech:** Next.js, TypeScript, Supabase, Tailwind CSS, Vercel
- **Images available:** `/Images/work/desertfalcons.png` (website), `/Images/work/desertfalcons-phone.png` (phone), `/Images/work/desertfalcons-dashboard.png` (dashboard)

### b) Memory Market (`/work/memory-market`)
- **What:** A Web3 prediction and knowledge marketplace built on Solana — where AI memory becomes a tradeable asset
- **Industry:** Web3, DeFi, AI, Blockchain
- **Challenge:** The founders wanted to create a marketplace where AI-generated knowledge and memories could be stored, traded, and verified on-chain — a completely new concept with no existing playbook
- **Approach:** Built a multi-tier marketplace with Solana wallet integration, real-time pricing feeds, decentralised storage, and a clean trading interface that makes complex Web3 interactions feel simple
- **Key features:** Solana wallet integration, Memory trading engine, 4-tier pricing system, On-chain verification, Decentralised storage, Real-time data feeds, Knowledge graph visualisation
- **Stats:** 14-day delivery, 847 memories minted, $2M+ in trading volume, 256 active wallets
- **Tech:** Next.js, TypeScript, Solana/Anchor, React, Tailwind CSS, Vercel
- **Images available:** `/Images/work/memorymarket.png`, `/Images/work/memorymarket-phone.png`

### c) Aramas Property (`/work/aramas-property`)
- **What:** A premium real estate investment platform for off-plan properties in the UAE — Abu Dhabi and Dubai markets
- **Industry:** Real Estate, PropTech, Investment
- **Challenge:** Aramas needed a platform that showcased premium UAE off-plan developments, connected international buyers with trusted developers, and provided market insights — all with a luxury feel matching their clientele
- **Approach:** Built a property listings platform with advanced search/filters, developer profiles, featured properties, market news/insights section, and a network of verified developers
- **Key features:** Property search with filters, Off-plan development listings, Developer network/profiles, Featured properties showcase, Market news & insights, Enquiry system, AED pricing with international conversion
- **Stats:** 10-day delivery, 200+ properties listed, AED 2B+ in listed property value, 15+ developer partnerships
- **Tech:** Next.js, TypeScript, Supabase, Tailwind CSS, Vercel
- **Images available:** `/Images/work/aramas.png`, `/Images/work/aramas-phone.png`

### d) Insights Dashboard (`/work/insights-dashboard`)
- **What:** An analytics SaaS dashboard for tracking business KPIs, revenue metrics, and team performance
- **Industry:** Analytics, SaaS, Business Intelligence
- **Challenge:** The client needed a clean, real-time analytics dashboard that pulled data from multiple sources, visualised key business metrics, and provided actionable insights — without the complexity of enterprise BI tools
- **Approach:** Built a lightweight but powerful dashboard with real-time data visualisation, customisable widgets, team performance tracking, and automated reporting
- **Key features:** Real-time KPI tracking, Revenue analytics with charts, Team performance metrics, Customisable dashboard widgets, Automated weekly reports, Multi-source data integration
- **Stats:** 8-day delivery, 340% faster than previous reporting, 12 data integrations, 98% user adoption rate
- **Tech:** Next.js, React, TypeScript, PostgreSQL, Tailwind CSS, Vercel
- **Images available:** `/Images/work/insights.png`

## ALSO UPDATE:
1. Link the case study cards on `/work` page to their individual pages (wrap each card in a Link)
2. Link the work marquee items on the homepage to their case study pages

## BUILD CHECK:
Must pass `npm run build` with 0 errors. Then:
```
git add -A
git commit -m "feat: 4 individual case study pages with stats, features, screenshots"
git push origin main
openclaw system event --text "Done: 4 case study pages built and pushed" --mode now
```
