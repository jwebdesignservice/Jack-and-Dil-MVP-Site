'use client'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import { SectionLabel } from '@/components/ui/SectionLabel'

// CTA renders far below the fold and HeroSlideshow only displays once
// the user reaches the gallery. Lazy-loading both removes ~all of the
// associated JS from the case-study LCP path. ssr stays on so the HTML
// is still server-rendered for crawlers and instant first paint.
const CTA = dynamic(() => import('@/components/sections/CTA'))
const HeroSlideshow = dynamic(() => import('@/components/ui/HeroSlideshow'))

/* ─── Types ─── */
interface Stat { value: string; label: string }
interface ApproachCard { title: string; desc: string }
interface FeatureCard { title: string; desc: string }
interface GalleryImage { src: string; alt: string }

interface Project {
  slug: string
  title: string
  tagline: string
  tags: string[]
  delivery: string
  year: string
  heroImage: string
  phoneImage?: string
  dashboardImage?: string
  siteUrl?: string
  heroStats: Stat[]
  challenge: string
  approach: ApproachCard[]
  features: FeatureCard[]
  images: GalleryImage[]
  results: Stat[]
  testimonial: { quote: string; author: string; role: string }
  tech: string[]
}

/* ─── Project Data ─── */
const projects: Record<string, Project> = {
  'eliminent': {
    slug: 'eliminent',
    title: 'Eliminent',
    tagline: 'Find the AI among you. Or die trying.',
    tags: ['Gaming', 'AI', 'Social Deduction', 'Multiplayer'],
    delivery: '8 days',
    year: '2026',
    heroImage: '/Images/work/eliminent.webp',
    siteUrl: 'https://www.eliminent.com/',
    heroStats: [
      { value: '8', label: 'Day Delivery' },
      { value: '2.8k+', label: 'Players Online' },
      { value: '4-12', label: 'Players Per Game' },
      { value: '<100ms', label: 'Realtime Latency' },
    ],
    challenge: `Eliminent needed to answer one question: can you tell if you're talking to an AI? The concept was simple and sharp: a social deduction game where real players and an AI agent share the same chat room, debating and voting to eliminate who they think isn't human. The twist: sometimes there's no AI at all. The paranoia alone becomes the game. The technical challenge was significant. Real-time multiplayer with sub-100ms latency, a convincing AI agent that could pass as human under pressure, timed discussion and voting mechanics, and an interface minimal enough to keep all the focus on the psychological tension between players.`,
    approach: [
      {
        title: 'Real-Time Game Engine',
        desc: 'WebSocket-powered game state sync across all players simultaneously. Room lifecycle, round timers, voting reveals, and elimination animations all fire in under 100ms.',
      },
      {
        title: 'Convincing AI Agent',
        desc: 'The AI agent uses contextual game state, player history, and adaptive language patterns to respond naturally within the 160-character message limit. Indistinguishable under pressure.',
      },
      {
        title: 'Tension-First Design',
        desc: 'Every design decision serves psychological tension. No avatars, no colour identifiers, just aliases and text. The UI deliberately gives nothing away.',
      },
    ],
    features: [
      { title: 'Quick Play & Private Rooms', desc: 'Jump into a public lobby instantly or create a private room with a code. Games support 4-12 players with automatic host migration.' },
      { title: 'Timed Discussion Rounds', desc: '30-90 second discussion rounds with guided prompts. 5 messages per player per round, 160 character limit. Pressure by design.' },
      { title: 'Hidden Voting System', desc: 'Players vote to eliminate or propose "No AI Present". Votes are hidden until the simultaneous reveal. No bandwagoning.' },
      { title: 'AI Player Agent', desc: 'A live AI agent participates as a player, responding in real time with contextually appropriate, human-like messages calibrated to avoid detection.' },
      { title: 'Zero-Identity Interface', desc: 'No profile pictures, no colours, no history. Just player aliases and messages. Every visual choice reinforces the core uncertainty.' },
      { title: 'Endgame Reveal', desc: 'All identities revealed at the end: who was human, who was AI (if present), full vote history, and winner stats for every player.' },
      { title: 'Elimination Flow', desc: 'Dramatic elimination animations with no identity reveal mid-game. The tension stays alive until the very end.' },
      { title: 'Cross-Device Play', desc: 'Fully playable on desktop, tablet, and mobile. The minimal interface scales perfectly. No app install required.' },
    ],
    images: [
      { src: '/Images/work/eliminent.webp', alt: 'Eliminent on MacBook' },
      { src: '/Images/work/eliminent-tablet.webp', alt: 'Eliminent on iPad' },
      { src: '/Images/work/eliminent-desktop.webp', alt: 'Eliminent game lobby' },
      { src: '/Images/work/eliminent-howtoplay.webp', alt: 'Eliminent How to Play screen' },
    ],
    results: [
      { value: '2.8k+', label: 'Concurrent players at launch' },
      { value: '8', label: 'Days to production' },
      { value: '<100ms', label: 'Real-time sync latency' },
      { value: '5min', label: 'Average session length' },
    ],
    testimonial: {
      quote: 'We had a concept that lived entirely in our heads. FastLaunch turned it into a real, playable game with thousands of concurrent users in 8 days. The AI agent is genuinely unsettling. Exactly what we wanted.',
      author: 'Alex Reid',
      role: 'Founder, Eliminent',
    },
    tech: ['Next.js', 'TypeScript', 'WebSockets', 'OpenAI', 'Supabase', 'Tailwind CSS', 'Vercel'],
  },

  'metalex-terminal': {
    slug: 'metalex-terminal',
    title: 'Metalex Terminal',
    tagline: 'Professional-grade precious metals intelligence for serious traders.',
    tags: ['FinTech', 'Trading', 'Real-Time Data', 'AI Signals'],
    delivery: '14 days',
    year: '2026',
    heroImage: '/Images/work/metalex-phone.webp',
    siteUrl: 'https://www.metalexterminal.com/',
    heroStats: [
      { value: '14', label: 'Day Delivery' },
      { value: '4', label: 'Live Metals' },
      { value: '<1s', label: 'Data Latency' },
      { value: '99.9%', label: 'Uptime' },
    ],
    challenge: `Metalex needed a Bloomberg-grade terminal for precious metals traders, but one that independent traders and small funds could actually use without a six-figure subscription. The platform had to stream live spot prices for XAU, XAG, XPT and XPD, surface AI-generated trade signals, display real-time order book depth, visualise futures curves, and aggregate market news from multiple sources, all in a single interface that worked equally well on desktop and mobile. Existing tools were either too expensive, too slow, or too generic. They needed a custom solution built fast.`,
    approach: [
      {
        title: 'Real-Time Data Architecture',
        desc: 'WebSocket feeds from MetalpriceAPI and TradingView deliver sub-second spot prices, bid/ask spreads, and volume data across all four metals. No polling, no lag.',
      },
      {
        title: 'AI Signal Engine',
        desc: 'Custom signal layer analyses RSI, STOCH, MACD, moving averages, and cross-metal correlations to generate live buy/hold/sell recommendations with confidence scores.',
      },
      {
        title: 'Terminal-Grade Mobile UX',
        desc: 'Full terminal functionality on mobile, not a dumbed-down app. Every data panel, chart, and signal view is optimised for the phone without losing information density.',
      },
    ],
    features: [
      { title: 'Live Spot Prices', desc: 'Real-time XAU, XAG, XPT, XPD spot prices with bid/ask/spread, VWAP, open/high/low, and volume. Updating every second via WebSocket.' },
      { title: 'Interactive Price Charts', desc: 'TradingView-powered candlestick and line charts across 1m, 30m, 1h, 1D timeframes with SMA overlays, volume bars, and indicator toggles.' },
      { title: 'Order Book Depth', desc: 'Real-time depth of market for XAU/USD showing bid/ask ladder, cumulative size, and price impact visualisation.' },
      { title: 'AI Signal Dashboard', desc: 'Live AI-generated trade signals with entry prices, stop-loss, targets, and confidence percentages. Refreshed continuously as market conditions shift.' },
      { title: 'Futures Curve', desc: 'Interactive COMEX futures curve across GC (near to far month) with contango/backwardation visualisation, roll yield, and annualised basis.' },
      { title: 'Discovery Radar', desc: 'Curated news aggregation from Yahoo Finance, Gold Telegraph, and Medium. Filtered by metal relevance, sentiment-tagged, and ranked by market impact.' },
      { title: 'Technical Indicators', desc: 'RSI, Stochastic, Williams %R, CCI, MACD, ADX, and Bollinger Bands, all calculated in real time with configurable periods.' },
      { title: 'Mobile Terminal', desc: 'Full-featured mobile view with the same data density as desktop: spot prices, technicals, charts, and signals in a thumb-friendly layout.' },
    ],
    images: [
      { src: '/Images/work/metalex-phone.webp', alt: 'Metalex Terminal mobile app' },
      { src: '/Images/work/metalex.webp', alt: 'Metalex Terminal on MacBook' },
      { src: '/Images/work/metalex-dashboard.webp', alt: 'Metalex Terminal full dashboard' },
    ],
    results: [
      { value: '<1s', label: 'Live data latency' },
      { value: '14', label: 'Days to production' },
      { value: '8', label: 'Dashboard modules' },
      { value: '99.9%', label: 'Platform uptime' },
    ],
    testimonial: {
      quote: "We've tried every metals terminal out there. Metalex is the first one that gives us Bloomberg-level data without the Bloomberg price tag, and it works perfectly on mobile. FastLaunch built it in 2 weeks.",
      author: 'James Hartwell',
      role: 'Head of Trading, Metalex',
    },
    tech: ['Next.js', 'TypeScript', 'WebSockets', 'TradingView', 'MetalpriceAPI', 'Tailwind CSS', 'Vercel'],
  },

  'desert-falcons': {
    slug: 'desert-falcons',
    title: 'Desert Falcons Collective',
    tagline: "The premium digital home for Saudi Arabia's automotive elite.",
    tags: ['Automotive', 'Luxury', 'Community'],
    delivery: '7 days',
    year: '2026',
    heroImage: '/Images/work/desertfalcons.webp',
    phoneImage: '/Images/work/desertfalcons-phone.webp',
    dashboardImage: '/Images/work/desertfalcons-dashboard.webp',
    siteUrl: 'https://desert-falcons.vercel.app/',
    heroStats: [
      { value: '7', label: 'Day Delivery' },
      { value: '500+', label: 'Founding Members' },
      { value: '8', label: 'Dashboard Modules' },
      { value: '99.9%', label: 'Uptime' },
    ],
    challenge: `Desert Falcons needed a platform to unite Saudi Arabia's most influential automotive engineers, designers, and enthusiasts under one digital roof. Existing platforms were either too generic or lacked the luxury feel that matched their brand. They needed both a stunning public-facing website and a secure, feature-rich private member portal, all shipped fast, before their founding cohort went cold.`,
    approach: [
      {
        title: 'Luxury-First Design',
        desc: 'Dark, premium aesthetic inspired by Arabic calligraphy and supercar design language. Every pixel communicates exclusivity.',
      },
      {
        title: 'Private Member Portal',
        desc: 'Full authentication system with role-based access, member profiles, and a rich dashboard suite, built on Supabase for scale.',
      },
      {
        title: 'Rapid Iteration',
        desc: 'We ran daily design reviews with the founder, shipped incremental builds, and had a production-ready platform in 7 days.',
      },
    ],
    features: [
      { title: 'Member Portal & Auth', desc: 'Secure login, role-based permissions, and personalized member profiles with avatar uploads.' },
      { title: 'Discussion Forums', desc: 'Category-based forums for technical discussion, car showcases, and community announcements.' },
      { title: "Founder's Updates Feed", desc: 'A curated news feed directly from the founder: announcements, insights, and exclusive content.' },
      { title: 'Member Directory', desc: 'Searchable directory of all members with profiles, specialities, and contact options.' },
      { title: 'Event Management', desc: 'Create, RSVP, and manage exclusive automotive events, track-days, and meetups.' },
      { title: 'Resource Library', desc: 'Gated library of technical documents, build guides, and exclusive automotive resources.' },
    ],
    images: [
      { src: '/Images/work/desertfalcons.webp', alt: 'Desert Falcons public website' },
      { src: '/Images/work/desertfalcons-tablet.webp', alt: 'Desert Falcons on tablet' },
      { src: '/Images/work/desertfalcons-dashboard.webp', alt: 'Desert Falcons member dashboard' },
      { src: '/Images/work/desertfalcons-phone.webp', alt: 'Desert Falcons mobile view' },
    ],
    results: [
      { value: '500+', label: 'Members in first 48 hours' },
      { value: '7', label: 'Days to production' },
      { value: '8', label: 'Dashboard modules shipped' },
      { value: '99.9%', label: 'Platform uptime' },
    ],
    testimonial: {
      quote: "FastLaunch delivered something we didn't think was possible in this timeframe. The platform looks like it cost 10x what we paid. Our members were blown away on launch day.",
      author: 'Khalid Al-Rashidi',
      role: 'Founder, Desert Falcons Collective',
    },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
  },

  'memory-market': {
    slug: 'memory-market',
    title: 'Memory Market',
    tagline: 'Where AI memory becomes a tradeable on-chain asset.',
    tags: ['Web3', 'DeFi', 'AI', 'Blockchain'],
    delivery: '9 days',
    year: '2025',
    heroImage: '/Images/work/memorymarket.webp',
    phoneImage: '/Images/work/memorymarket-phone.webp',
    siteUrl: 'https://memory-market.vercel.app/',
    heroStats: [
      { value: '9', label: 'Day Delivery' },
      { value: '847', label: 'Memories Minted' },
      { value: '$2M+', label: 'Trading Volume' },
      { value: '256', label: 'Active Wallets' },
    ],
    challenge: `The Memory Market founders had a genuinely novel concept: a marketplace where AI-generated knowledge and memories could be stored, traded, and verified on-chain via Solana. There was no existing playbook, no comparable product to reference. They needed to make highly complex Web3 interactions feel intuitive to mainstream users, launch before a competitor could execute, and integrate real-time Solana pricing data, all within 2 weeks.`,
    approach: [
      {
        title: 'Solana-Native Architecture',
        desc: 'Built on Solana for sub-second confirmation times and low transaction fees. Anchor framework for secure on-chain program logic.',
      },
      {
        title: 'Simplified Web3 UX',
        desc: "Abstracted wallet interactions behind familiar UI patterns. Users trade memories like they're shopping. Complexity hidden, power preserved.",
      },
      {
        title: 'Real-Time Data Engine',
        desc: 'WebSocket feeds for live pricing, order book depth, and wallet portfolio updates. No page refresh needed.',
      },
    ],
    features: [
      { title: 'Solana Wallet Integration', desc: 'Connect with Phantom, Backpack, or any Solana wallet. One-click authentication with no seed phrase exposure.' },
      { title: 'Memory Trading Engine', desc: 'Buy, sell, and auction AI-generated memories with a custom order matching engine built for Solana speed.' },
      { title: '4-Tier Pricing System', desc: 'Dynamic pricing tiers based on memory rarity, verification status, and historical demand signals.' },
      { title: 'On-Chain Verification', desc: 'Every memory is hashed and verified on Solana. Provenance is immutable and publicly auditable.' },
      { title: 'Decentralised Storage', desc: 'Memories stored on Arweave for permanent, censorship-resistant availability independent of the platform.' },
      { title: 'Knowledge Graph', desc: 'Visual graph explorer showing relationships between memories, their creators, and trading history.' },
    ],
    images: [
      { src: '/Images/work/memorymarket.webp', alt: 'Memory Market trading interface' },
      { src: '/Images/work/memorymarket-phone.webp', alt: 'Memory Market mobile view' },
    ],
    results: [
      { value: '847', label: 'Memories minted at launch' },
      { value: '$2M+', label: 'Total trading volume' },
      { value: '256', label: 'Active wallet holders' },
      { value: '9', label: 'Days from brief to live' },
    ],
    testimonial: {
      quote: "We had a concept that most devs told us couldn't ship in under a month. FastLaunch had us live in 9 days with a product that actually works. The on-chain integration is rock solid.",
      author: 'Zara Okonkwo',
      role: 'Co-Founder, Memory Market',
    },
    tech: ['Next.js', 'TypeScript', 'Solana', 'Anchor', 'React', 'Tailwind CSS', 'Vercel', 'Arweave'],
  },

  'aramas-property': {
    slug: 'aramas-property',
    title: 'Aramas Property',
    tagline: 'Premium off-plan UAE investments, made accessible to global buyers.',
    tags: ['Real Estate', 'PropTech', 'Investment'],
    delivery: '6 days',
    year: '2025',
    heroImage: '/Images/work/aramas.webp',
    phoneImage: '/Images/work/aramas-phone.webp',
    heroStats: [
      { value: '6', label: 'Day Delivery' },
      { value: '200+', label: 'Properties Listed' },
      { value: 'AED 2B+', label: 'Listed Value' },
      { value: '15+', label: 'Developer Partners' },
    ],
    challenge: `Aramas wanted to become the definitive platform for international buyers entering the UAE off-plan property market, primarily Abu Dhabi and Dubai. They needed luxury branding that matched their HNWI clientele, advanced search and filter tooling for complex UAE property requirements, developer profile pages, and a market insights section, all while supporting AED pricing with international currency context. Their previous site had no search, no listings, and no developer network.`,
    approach: [
      {
        title: 'Luxury Platform Design',
        desc: 'Dark, premium aesthetic with gold accents reflecting the UAE luxury market. Built to convert high-net-worth international buyers.',
      },
      {
        title: 'Advanced Property Search',
        desc: 'Multi-parameter search across location, price range, property type, handover date, and developer, with instant results.',
      },
      {
        title: 'Developer Network',
        desc: 'Verified developer profiles with portfolio, completed projects, and direct enquiry routing. Builds trust in an unfamiliar market.',
      },
    ],
    features: [
      { title: 'Advanced Property Search', desc: 'Filter by location, price, type, handover date, developer, and ROI. Results update in real time with no page reload.' },
      { title: 'Off-Plan Listings', desc: 'Rich property pages with floor plans, payment schedules, developer info, and AED/USD/GBP pricing.' },
      { title: 'Developer Profiles', desc: 'Verified developer pages showing track record, current developments, and completed projects with buyer reviews.' },
      { title: 'Featured Properties', desc: 'Premium placement tier for flagship developments: full-bleed hero images, video walkthroughs, priority visibility.' },
      { title: 'Market News & Insights', desc: 'Curated UAE real estate news, ROI data, and market trend reports to position Aramas as a trusted authority.' },
      { title: 'Enquiry System', desc: 'Direct enquiry routing to developers with automated follow-up sequences and CRM integration.' },
    ],
    images: [
      { src: '/Images/work/aramas.webp', alt: 'Aramas Property platform' },
      { src: '/Images/work/aramas-phone.webp', alt: 'Aramas Property mobile view' },
    ],
    results: [
      { value: '200+', label: 'Properties at launch' },
      { value: 'AED 2B+', label: 'Listed property value' },
      { value: '15+', label: 'Developer partnerships' },
      { value: '6', label: 'Days to go live' },
    ],
    testimonial: {
      quote: 'We went from a static brochure site to a full property marketplace in 6 days. The search functionality alone has already converted 3 international buyers in the first week.',
      author: 'Ahmed Al-Mansoori',
      role: 'Director, Aramas Property',
    },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
  },

  'insights-dashboard': {
    slug: 'insights-dashboard',
    title: 'Insights Dashboard',
    tagline: 'Your entire business in one view. Real-time, actionable, beautiful.',
    tags: ['Analytics', 'SaaS', 'Business Intelligence'],
    delivery: '5 days',
    year: '2025',
    heroImage: '/Images/work/insights.webp',
    heroStats: [
      { value: '5', label: 'Day Delivery' },
      { value: '340%', label: 'Faster Reporting' },
      { value: '12', label: 'Data Integrations' },
      { value: '98%', label: 'User Adoption' },
    ],
    challenge: `The client had a team of 40 people relying on a patchwork of spreadsheets, Notion pages, and manual reports to track business performance. They needed a single source of truth: a real-time dashboard pulling from Stripe, HubSpot, Google Analytics, and their internal PostgreSQL database. Enterprise BI tools were overkill (and wildly expensive). They needed something clean, fast, and usable by non-technical team members from day one.`,
    approach: [
      {
        title: 'Real-Time Data Pipeline',
        desc: 'WebSocket connections to live data sources. KPIs update every 30 seconds without a page reload. Always current, never stale.',
      },
      {
        title: 'Zero-Learning-Curve UX',
        desc: 'Designed for non-technical users first. Drag-and-drop widget layout, plain-English metric labels, and one-click report exports.',
      },
      {
        title: 'Multi-Source Integration',
        desc: '12 pre-built connectors covering all major business tools: Stripe, HubSpot, GA4, Intercom, Slack, and more. Setup in minutes.',
      },
    ],
    features: [
      { title: 'Real-Time KPI Tracking', desc: 'Live widgets for MRR, churn, CAC, LTV, and any custom metric. Data refreshes every 30 seconds automatically.' },
      { title: 'Revenue Analytics', desc: 'Detailed revenue breakdowns with trend charts, cohort analysis, and MoM/YoY comparisons.' },
      { title: 'Team Performance', desc: 'Individual and team KPI scorecards, goal tracking, and performance trend lines across any time period.' },
      { title: 'Customisable Widgets', desc: 'Drag-and-drop dashboard builder. Each team member can configure their own layout and saved views.' },
      { title: 'Automated Reports', desc: 'Weekly digest emails sent automatically every Monday. Custom report schedules for different stakeholders.' },
      { title: 'Multi-Source Integration', desc: '12 data connectors including Stripe, HubSpot, GA4, PostgreSQL, Intercom, and Slack. Zero manual data entry.' },
    ],
    images: [
      { src: '/Images/work/insights.webp', alt: 'Insights Dashboard analytics view' },
    ],
    results: [
      { value: '340%', label: 'Faster than manual reporting' },
      { value: '5', label: 'Days to production' },
      { value: '12', label: 'Live data integrations' },
      { value: '98%', label: 'Team adoption rate' },
    ],
    testimonial: {
      quote: "Our Monday morning standup used to take 45 minutes just getting everyone on the same page with numbers. Now it takes 5. The dashboard is open on every team member's screen all day.",
      author: 'Sarah Chen',
      role: 'COO, Operations Lead',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'WebSockets'],
  },

  'ams-tool': {
    slug: 'ams-tool',
    title: 'AMS Tool',
    tagline: 'AI-powered adverse media screening, from manual searches to automated compliance workflows.',
    tags: ['RegTech', 'Compliance', 'FinTech', 'AI'],
    delivery: '10 days',
    year: '2026',
    heroImage: '/Images/work/ams-tablet.webp',
    heroStats: [
      { value: '10', label: 'Day Delivery' },
      { value: '120+', label: 'Screenings Run' },
      { value: '7', label: 'Risk Data Sources' },
      { value: '99%', label: 'Match Accuracy' },
    ],
    challenge: `The compliance team was spending hours every week manually Googling subject names, combing through news results, and copy-pasting findings into spreadsheets. The process was slow, inconsistent, and not audit-ready. They needed a purpose-built adverse media screening tool: one that could automate the search pipeline, classify risk at the article level, and create a structured review queue that analysts could work through systematically.`,
    approach: [
      {
        title: 'Pipeline-First Architecture',
        desc: 'Designed the end-to-end screening flow (submit, search, analyse, risk-score, review queue) before a single UI component was built.',
      },
      {
        title: 'AI Risk Scoring Engine',
        desc: 'Each article is classified high/medium/low by an AI layer that analyses relevance, severity, and entity matching, with reasoning shown to the analyst.',
      },
      {
        title: 'Role-Based Access Design',
        desc: 'Admin and analyst views designed from the ground up with separate permission sets, dashboards, and workflow states tailored to each role.',
      },
    ],
    features: [
      { title: 'AI Adverse Media Search', desc: 'Automated screening against news, legal, and public records sources. Results returned in seconds, not hours.' },
      { title: 'Risk Classification', desc: 'High/medium/low scoring with article-level evidence and AI reasoning for every flagged result.' },
      { title: 'Structured Review Queue', desc: 'Five-stage workflow (submitted, searching, analysing, review, completed) with clear analyst handoff at each stage.' },
      { title: 'Admin Dashboard', desc: 'Real-time KPIs: total users, screenings run, pending reviews, and flagged subjects, at a glance.' },
      { title: 'Audit Log', desc: 'Complete, timestamped activity trail for every action. Built for regulatory review and compliance reporting.' },
      { title: 'User Management', desc: 'Admin controls for analyst accounts, role assignment, and access levels across the organisation.' },
    ],
    images: [
      { src: '/Images/work/ams-tablet.webp', alt: 'AMS Tool admin dashboard on tablet' },
      { src: '/Images/work/ams-desktop.webp', alt: 'AMS Tool full desktop view' },
      { src: '/Images/work/ams-screening.webp', alt: 'AMS Tool screening details and risk classification' },
      { src: '/Images/work/ams-laptop.webp', alt: 'AMS Tool on laptop' },
    ],
    results: [
      { value: '10', label: 'Days to production' },
      { value: '120+', label: 'Screenings processed' },
      { value: '99%', label: 'Match accuracy' },
      { value: '0', label: 'Manual searches needed' },
    ],
    testimonial: {
      quote: 'We went from doing this manually to having a full AI-powered compliance tool in 10 days. The risk scoring alone saves our analysts hours every week, and the audit trail means we can demonstrate compliance instantly.',
      author: 'Compliance Lead',
      role: 'AMS Tool',
    },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'AI/ML'],
  },

  'speed-read': {
    slug: 'speed-read',
    title: 'Speed Read',
    tagline: 'Eliminate eye movement. Bypass subvocalization. Read at the speed of thought.',
    tags: ['EdTech', 'Productivity', 'SaaS'],
    delivery: '7 days',
    year: '2026',
    heroImage: '/Images/work/speedread-laptop.webp',
    siteUrl: 'https://speedreadtool-one.vercel.app/',
    heroStats: [
      { value: '7', label: 'Day Delivery' },
      { value: '1200', label: 'Max WPM' },
      { value: '85%', label: 'Retention Rate' },
      { value: '2-3×', label: 'Speed Increase' },
    ],
    challenge: `The founder had a clear vision: a science-backed speed reading tool that used RSVP (Rapid Serial Visual Presentation) to eliminate the two biggest bottlenecks in reading: saccadic eye movement and subvocalization. Every existing tool on the market was either cluttered, poorly designed, or buried behind a paywall. The goal was a clean, minimal web app with a browser extension, adaptive training mode, and a curated story library, shipped in a week.`,
    approach: [
      {
        title: 'Engine Before UI',
        desc: 'The RSVP word-flash engine was built and tuned first (timing precision, focal point rendering, and smooth transitions) before any layout work began.',
      },
      {
        title: 'Adaptive Training Mode',
        desc: 'Training mode automatically ramps speed based on reading accuracy and session history, pushing users past their comfort zone without overwhelming them.',
      },
      {
        title: 'Browser Extension Integration',
        desc: 'Built a companion browser extension that injects the RSVP reader into any webpage, so users can speed-read articles, docs, and emails in context.',
      },
    ],
    features: [
      { title: 'RSVP Reader', desc: 'Words flash at a fixed focal point. Zero eye movement, zero tracking, maximum speed. Adjustable from 100 to 1200 WPM.' },
      { title: 'Training Mode', desc: 'Auto-ramps from your starting speed to your target WPM across the session. Builds reading endurance progressively.' },
      { title: 'Story Library', desc: '10 curated content categories: science, history, philosophy, business, and more. Start reading immediately with no upload needed.' },
      { title: 'Browser Extension', desc: 'Speed read any text on any website. One keyboard shortcut (Alt+S) activates the reader in-context on any page.' },
      { title: 'Progress Tracking', desc: 'Words read, average WPM, and peak speed tracked across every session. See improvement over time.' },
      { title: 'Dark Mode', desc: 'Automatic theme detection. Light for daytime, dark for low-light. No manual toggle needed.' },
    ],
    images: [
      { src: '/Images/work/speedread-laptop.webp', alt: 'Speed Read on laptop' },
      { src: '/Images/work/speedread-phone.webp', alt: 'Speed Read on mobile' },
      { src: '/Images/work/speedread-library.webp', alt: 'Speed Read story library' },
      { src: '/Images/work/speedread-reader.webp', alt: 'Speed Read reader in action' },
    ],
    results: [
      { value: '7', label: 'Days to production' },
      { value: '1200', label: 'Max WPM supported' },
      { value: '85%', label: 'Reported retention rate' },
      { value: '3×', label: 'Average speed increase' },
    ],
    testimonial: {
      quote: "I went from 250 WPM to over 600 in two weeks of daily training. The app is beautifully simple. It just gets out of the way and lets you read. Best productivity tool I've used this year.",
      author: 'Early User',
      role: 'Speed Read',
    },
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Browser Extension API'],
  },
}

/* ─── SVG Icons ─── */
const IconZap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
)
const IconExternalLink = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 10L10 2M10 2H5M10 2V7"/>
  </svg>
)

/* ─── Page ─── */
export default function CaseStudyPage() {
  const params = useParams()
  const slug = params?.slug as string
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-black min-h-screen">
      {/* Dot grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 70%)' }} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-orange-400 transition-colors"
            >
              <IconArrowLeft />
              Back to Case Studies
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-5"
          >
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            }>Case Study</SectionLabel>
            {project.siteUrl && (
              <a href={project.siteUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 border border-orange-500/30 bg-orange-500/5 rounded-full px-4 py-1.5 hover:border-orange-500/60 hover:text-orange-300 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                View Live Site
                <IconExternalLink />
              </a>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white mb-4 leading-tight max-w-3xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-neutral-300 text-lg mb-6 max-w-xl"
          >
            {project.tagline}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {project.tags.map(tag => (
              <span key={tag} className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-orange-500/30 text-orange-400/80 bg-orange-500/5">
                {tag}
              </span>
            ))}
            <span className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-white/10 text-neutral-500 bg-white/5">
              {project.delivery} delivery
            </span>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
          >
            {project.heroStats.map((stat, i) => (
              <div key={i} className="border-l-2 border-orange-500/40 pl-4">
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <div className="text-xs font-mono text-neutral-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Hero slideshow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-14 w-full"
          >
            <HeroSlideshow images={project.images} heroImage={project.heroImage} title={project.title} />
          </motion.div>
        </div>
      </section>

      {/* ── 2. The Challenge ── */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <SectionLabel icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                </svg>
              }>The Challenge</SectionLabel>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-1 bg-gradient-to-b from-orange-500 via-orange-500/60 to-transparent rounded-full" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-5 leading-snug">
                  What they needed to solve
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Approach ── */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
            }>Our Approach</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-semibold text-white mb-12 max-w-xl leading-snug"
          >
            How we solved it
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {project.approach.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border border-[rgba(249,115,22,0.12)] bg-[#0A0A0A] p-6 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0 mb-4">
                  <IconZap />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{card.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Key Features ── */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            }>Key Features</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-semibold text-white mb-12 leading-snug"
          >
            Everything that was built
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 p-5 rounded-lg border border-[rgba(249,115,22,0.1)] bg-[#0A0A0A] hover:border-orange-500/25 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0 mt-0.5">
                  <IconCheck />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Results ── */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
              </svg>
            }>Results</SectionLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-orange-500/20"
            style={{ background: '#0A0500' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-orange-500/10">
              {project.results.map((stat, i) => (
                <div key={i} className="p-8 text-center" style={{ background: '#0A0500' }}>
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-10 border-t border-orange-500/10">
              <div className="max-w-2xl mx-auto text-center">
                <div className="text-3xl text-orange-500/40 font-serif mb-4">&ldquo;</div>
                <p className="text-neutral-300 text-base leading-relaxed italic mb-6">
                  {project.testimonial.quote}
                </p>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-white font-semibold text-sm">{project.testimonial.author}</span>
                  <span className="text-neutral-500 text-xs font-mono">{project.testimonial.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Tech Stack ── */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
            }>Tech Stack</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-semibold text-white mb-8"
          >
            Built with
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {project.tech.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-[rgba(249,115,22,0.2)] bg-[#0A0A0A] text-sm font-mono text-neutral-300 hover:border-orange-500/40 hover:text-orange-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Back to case studies */}
      <div className="container mx-auto px-6 pb-8 relative z-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-orange-400 transition-colors"
        >
          <IconArrowLeft />
          Back to Case Studies
        </Link>
      </div>

      {/* ── CTA ── */}
      <CTA />
    </main>
  )
}
