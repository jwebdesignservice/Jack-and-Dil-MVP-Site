'use client'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import CTA from '@/components/sections/CTA'
import HeroSlideshow from '@/components/ui/HeroSlideshow'

/* ─── Project Data ─── */
const projects: Record<string, Project> = {
  'eliminent': {
    slug: 'eliminent',
    title: 'Eliminent',
    tagline: 'Find the AI among you. Or die trying.',
    tags: ['Gaming', 'AI', 'Social Deduction', 'Multiplayer'],
    delivery: '8 days',
    year: '2026',
    heroImage: '/Images/work/eliminent-tablet.png',
    siteUrl: 'https://www.eliminent.com/',
    heroStats: [
      { value: '8', label: 'Day Delivery' },
      { value: '2.8k+', label: 'Players Online' },
      { value: '4-12', label: 'Players Per Game' },
      { value: '<100ms', label: 'Realtime Latency' },
    ],
    challenge: `Eliminent needed to answer one question: can you tell if you're talking to an AI? The concept was simple and sharp — a social deduction game where real players and an AI agent share the same chat room, debating and voting to eliminate who they think isn't human. The twist: sometimes there's no AI at all. The paranoia alone becomes the game. The technical challenge was significant — real-time multiplayer with sub-100ms latency, a convincing AI agent that could pass as human under pressure, timed discussion and voting mechanics, and an interface minimal enough to keep all the focus on the psychological tension between players.`,
    approach: [
      {
        icon: '⚡',
        title: 'Real-Time Game Engine',
        desc: 'WebSocket-powered game state sync across all players simultaneously. Room lifecycle, round timers, voting reveals, and elimination animations all fire in under 100ms.',
      },
      {
        icon: '🤖',
        title: 'Convincing AI Agent',
        desc: 'The AI agent uses contextual game state, player history, and adaptive language patterns to respond naturally within the 160-character message limit — indistinguishable under pressure.',
      },
      {
        icon: '🎯',
        title: 'Tension-First Design',
        desc: 'Every design decision serves psychological tension. No avatars, no colour identifiers — just aliases and text. The UI deliberately gives nothing away.',
      },
    ],
    features: [
      { icon: '⚡', title: 'Quick Play & Private Rooms', desc: 'Jump into a public lobby instantly or create a private room with a code. Games support 4-12 players with automatic host migration.' },
      { icon: '💬', title: 'Timed Discussion Rounds', desc: '30-90 second discussion rounds with guided prompts. 5 messages per player per round, 160 character limit — pressure by design.' },
      { icon: '🗳️', title: 'Hidden Voting System', desc: 'Players vote to eliminate or propose "No AI Present". Votes are hidden until the simultaneous reveal — no bandwagoning.' },
      { icon: '🤖', title: 'AI Player Agent', desc: 'A live AI agent participates as a player, responding in real time with contextually appropriate, human-like messages calibrated to avoid detection.' },
      { icon: '🎭', title: 'Zero-Identity Interface', desc: 'No profile pictures, no colours, no history. Just player aliases and messages. Every visual choice reinforces the core uncertainty.' },
      { icon: '📊', title: 'Endgame Reveal', desc: 'All identities revealed at the end — who was human, who was AI (if present), full vote history, and winner stats for every player.' },
      { icon: '🔁', title: 'Elimination Flow', desc: 'Dramatic elimination animations with no identity reveal mid-game — the tension stays alive until the very end.' },
      { icon: '📱', title: 'Cross-Device Play', desc: 'Fully playable on desktop, tablet, and mobile. The minimal interface scales perfectly — no app install required.' },
    ],
    images: [
      { src: '/Images/work/eliminent-tablet.png', alt: 'Eliminent on iPad' },
      { src: '/Images/work/eliminent.png', alt: 'Eliminent on MacBook' },
      { src: '/Images/work/eliminent-desktop.png', alt: 'Eliminent game lobby' },
      { src: '/Images/work/eliminent-howtoplay.png', alt: 'Eliminent How to Play screen' },
    ],
    results: [
      { value: '2.8k+', label: 'Concurrent players at launch' },
      { value: '8', label: 'Days to production' },
      { value: '<100ms', label: 'Real-time sync latency' },
      { value: '5min', label: 'Average session length' },
    ],
    testimonial: {
      quote: 'We had a concept that lived entirely in our heads. FastLaunch turned it into a real, playable game with thousands of concurrent users in 8 days. The AI agent is genuinely unsettling — exactly what we wanted.',
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
    heroImage: '/Images/work/metalex-phone.png',
    siteUrl: 'https://www.metalexterminal.com/',
    heroStats: [
      { value: '14', label: 'Day Delivery' },
      { value: '4', label: 'Live Metals' },
      { value: '<1s', label: 'Data Latency' },
      { value: '99.9%', label: 'Uptime' },
    ],
    challenge: `Metalex needed a Bloomberg-grade terminal for precious metals traders — but one that independent traders and small funds could actually use without a six-figure subscription. The platform had to stream live spot prices for XAU, XAG, XPT and XPD, surface AI-generated trade signals, display real-time order book depth, visualise futures curves, and aggregate market news from multiple sources — all in a single interface that worked seamlessly across desktop and mobile. Existing tools were either too expensive, too slow, or too generic. They needed a custom solution built fast.`,
    approach: [
      {
        icon: '📡',
        title: 'Real-Time Data Architecture',
        desc: 'WebSocket feeds from MetalpriceAPI and TradingView deliver sub-second spot prices, bid/ask spreads, and volume data across all four metals — no polling, no lag.',
      },
      {
        icon: '🤖',
        title: 'AI Signal Engine',
        desc: 'Custom signal layer analyses RSI, STOCH, MACD, moving averages, and cross-metal correlations to generate live buy/hold/sell recommendations with confidence scores.',
      },
      {
        icon: '📱',
        title: 'Terminal-Grade Mobile UX',
        desc: 'Full terminal functionality on mobile — not a dumbed-down app. Every data panel, chart, and signal view is optimised for the phone without losing information density.',
      },
    ],
    features: [
      { icon: '💰', title: 'Live Spot Prices', desc: 'Real-time XAU, XAG, XPT, XPD spot prices with bid/ask/spread, VWAP, open/high/low, and volume — updating every second via WebSocket.' },
      { icon: '📊', title: 'Interactive Price Charts', desc: 'TradingView-powered candlestick and line charts across 1m, 30m, 1h, 1D timeframes with SMA overlays, volume bars, and indicator toggles.' },
      { icon: '📖', title: 'Order Book Depth', desc: 'Real-time depth of market for XAU/USD showing bid/ask ladder, cumulative size, and price impact visualisation.' },
      { icon: '🤖', title: 'AI Signal Dashboard', desc: 'Live AI-generated trade signals with entry prices, stop-loss, targets, and confidence percentages — refreshed continuously as market conditions shift.' },
      { icon: '📈', title: 'Futures Curve', desc: 'Interactive COMEX futures curve across GC (near to far month) with contango/backwardation visualisation, roll yield, and annualised basis.' },
      { icon: '🔍', title: 'Discovery Radar', desc: 'Curated news aggregation from Yahoo Finance, Gold Telegraph, and Medium — filtered by metal relevance, sentiment-tagged, and ranked by market impact.' },
      { icon: '📉', title: 'Technical Indicators', desc: 'RSI, Stochastic, Williams %R, CCI, MACD, ADX, and Bollinger Bands — all calculated in real time with configurable periods.' },
      { icon: '📱', title: 'Mobile Terminal', desc: 'Full-featured mobile view with the same data density as desktop — spot prices, technicals, charts, and signals in a thumb-friendly layout.' },
    ],
    images: [
      { src: '/Images/work/metalex-phone.png', alt: 'Metalex Terminal mobile app' },
      { src: '/Images/work/metalex.png', alt: 'Metalex Terminal on MacBook' },
      { src: '/Images/work/metalex-dashboard.png', alt: 'Metalex Terminal full dashboard' },
    ],
    results: [
      { value: '<1s', label: 'Live data latency' },
      { value: '14', label: 'Days to production' },
      { value: '8', label: 'Dashboard modules' },
      { value: '99.9%', label: 'Platform uptime' },
    ],
    testimonial: {
      quote: 'We\'ve tried every metals terminal out there. Metalex is the first one that gives us Bloomberg-level data without the Bloomberg price tag — and it works perfectly on mobile. FastLaunch built it in 2 weeks.',
      author: 'James Hartwell',
      role: 'Head of Trading, Metalex',
    },
    tech: ['Next.js', 'TypeScript', 'WebSockets', 'TradingView', 'MetalpriceAPI', 'Tailwind CSS', 'Vercel'],
  },

  'desert-falcons': {
    slug: 'desert-falcons',
    title: 'Desert Falcons Collective',
    tagline: 'The premium digital home for Saudi Arabia\'s automotive elite.',
    tags: ['Automotive', 'Luxury', 'Community'],
    delivery: '7 days',
    year: '2026',
    heroImage: '/Images/work/desertfalcons.png',
    phoneImage: '/Images/work/desertfalcons-phone.png',
    dashboardImage: '/Images/work/desertfalcons-dashboard.png',
    siteUrl: 'https://desert-falcons.vercel.app/',
    heroStats: [
      { value: '7', label: 'Day Delivery' },
      { value: '500+', label: 'Founding Members' },
      { value: '8', label: 'Dashboard Modules' },
      { value: '99.9%', label: 'Uptime' },
    ],
    challenge: `Desert Falcons needed a platform to unite Saudi Arabia's most influential automotive engineers, designers, and enthusiasts under one digital roof. Existing platforms were either too generic or lacked the luxury feel that matched their brand. They needed both a stunning public-facing website and a secure, feature-rich private member portal — all shipped fast, before their founding cohort went cold.`,
    approach: [
      {
        icon: '🏎️',
        title: 'Luxury-First Design',
        desc: 'Dark, premium aesthetic inspired by Arabic calligraphy and supercar design language. Every pixel communicates exclusivity.',
      },
      {
        icon: '🔐',
        title: 'Private Member Portal',
        desc: 'Full authentication system with role-based access, member profiles, and a rich dashboard suite — built on Supabase for scale.',
      },
      {
        icon: '⚡',
        title: 'Rapid Iteration',
        desc: 'We ran daily design reviews with the founder, shipped incremental builds, and had a production-ready platform in 12 days.',
      },
    ],
    features: [
      { icon: '🗝️', title: 'Member Portal & Auth', desc: 'Secure login, role-based permissions, and personalized member profiles with avatar uploads.' },
      { icon: '💬', title: 'Discussion Forums', desc: 'Category-based forums for technical discussion, car showcases, and community announcements.' },
      { icon: '📢', title: "Founder's Updates Feed", desc: 'A curated news feed directly from the founder — announcements, insights, and exclusive content.' },
      { icon: '👥', title: 'Member Directory', desc: 'Searchable directory of all members with profiles, specialities, and contact options.' },
      { icon: '📅', title: 'Event Management', desc: 'Create, RSVP, and manage exclusive automotive events, track-days, and meetups.' },
      { icon: '📚', title: 'Resource Library', desc: 'Gated library of technical documents, build guides, and exclusive automotive resources.' },
    ],
    images: [
      { src: '/Images/work/desertfalcons.png', alt: 'Desert Falcons public website' },
      { src: '/Images/work/desertfalcons-tablet.png', alt: 'Desert Falcons on tablet' },
      { src: '/Images/work/desertfalcons-dashboard.png', alt: 'Desert Falcons member dashboard' },
      { src: '/Images/work/desertfalcons-phone.png', alt: 'Desert Falcons mobile view' },
    ],
    results: [
      { value: '500+', label: 'Members in first 48 hours' },
      { value: '7', label: 'Days to production' },
      { value: '8', label: 'Dashboard modules shipped' },
      { value: '99.9%', label: 'Platform uptime' },
    ],
    testimonial: {
      quote: 'FastLaunch delivered something we didn\'t think was possible in this timeframe. The platform looks like it cost 10x what we paid — our members were blown away on launch day.',
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
    heroImage: '/Images/work/memorymarket.png',
    phoneImage: '/Images/work/memorymarket-phone.png',
    siteUrl: 'https://memory-market.vercel.app/',
    heroStats: [
      { value: '9', label: 'Day Delivery' },
      { value: '847', label: 'Memories Minted' },
      { value: '$2M+', label: 'Trading Volume' },
      { value: '256', label: 'Active Wallets' },
    ],
    challenge: `The Memory Market founders had a genuinely novel concept: a marketplace where AI-generated knowledge and memories could be stored, traded, and verified on-chain via Solana. There was no existing playbook, no comparable product to reference. They needed to make highly complex Web3 interactions feel intuitive to mainstream users, launch before a competitor could execute, and integrate real-time Solana pricing data — all within 2 weeks.`,
    approach: [
      {
        icon: '🔗',
        title: 'Solana-Native Architecture',
        desc: 'Built on Solana for sub-second confirmation times and low transaction fees. Anchor framework for secure on-chain program logic.',
      },
      {
        icon: '🧠',
        title: 'Simplified Web3 UX',
        desc: 'Abstracted wallet interactions behind familiar UI patterns. Users trade memories like they\'re shopping — complexity hidden, power preserved.',
      },
      {
        icon: '📊',
        title: 'Real-Time Data Engine',
        desc: 'WebSocket feeds for live pricing, order book depth, and wallet portfolio updates — no page refresh needed.',
      },
    ],
    features: [
      { icon: '👛', title: 'Solana Wallet Integration', desc: 'Connect with Phantom, Backpack, or any Solana wallet. One-click authentication with no seed phrase exposure.' },
      { icon: '🔄', title: 'Memory Trading Engine', desc: 'Buy, sell, and auction AI-generated memories with a custom order matching engine built for Solana speed.' },
      { icon: '💎', title: '4-Tier Pricing System', desc: 'Dynamic pricing tiers based on memory rarity, verification status, and historical demand signals.' },
      { icon: '✅', title: 'On-Chain Verification', desc: 'Every memory is hashed and verified on Solana. Provenance is immutable and publicly auditable.' },
      { icon: '🗄️', title: 'Decentralised Storage', desc: 'Memories stored on Arweave for permanent, censorship-resistant availability independent of the platform.' },
      { icon: '🕸️', title: 'Knowledge Graph', desc: 'Visual graph explorer showing relationships between memories, their creators, and trading history.' },
    ],
    images: [
      { src: '/Images/work/memorymarket.png', alt: 'Memory Market trading interface' },
      { src: '/Images/work/memorymarket-phone.png', alt: 'Memory Market mobile view' },
    ],
    results: [
      { value: '847', label: 'Memories minted at launch' },
      { value: '$2M+', label: 'Total trading volume' },
      { value: '256', label: 'Active wallet holders' },
      { value: '9', label: 'Days from brief to live' },
    ],
    testimonial: {
      quote: 'We had a concept that most devs told us couldn\'t ship in under a month. FastLaunch had us live in 14 days with a product that actually works. The on-chain integration is rock solid.',
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
    heroImage: '/Images/work/aramas.png',
    phoneImage: '/Images/work/aramas-phone.png',
    heroStats: [
      { value: '6', label: 'Day Delivery' },
      { value: '200+', label: 'Properties Listed' },
      { value: 'AED 2B+', label: 'Listed Value' },
      { value: '15+', label: 'Developer Partners' },
    ],
    challenge: `Aramas wanted to become the definitive platform for international buyers entering the UAE off-plan property market — primarily Abu Dhabi and Dubai. They needed luxury branding that matched their HNWI clientele, advanced search and filter tooling for complex UAE property requirements, developer profile pages, and a market insights section — all while supporting AED pricing with international currency context. Their previous site had no search, no listings, and no developer network.`,
    approach: [
      {
        icon: '🏙️',
        title: 'Luxury Platform Design',
        desc: 'Dark, premium aesthetic with gold accents reflecting the UAE luxury market. Built to convert high-net-worth international buyers.',
      },
      {
        icon: '🔍',
        title: 'Advanced Property Search',
        desc: 'Multi-parameter search across location, price range, property type, handover date, and developer — with instant results.',
      },
      {
        icon: '🤝',
        title: 'Developer Network',
        desc: 'Verified developer profiles with portfolio, completed projects, and direct enquiry routing. Builds trust in an unfamiliar market.',
      },
    ],
    features: [
      { icon: '🔍', title: 'Advanced Property Search', desc: 'Filter by location, price, type, handover date, developer, and ROI. Results update in real time with no page reload.' },
      { icon: '🏢', title: 'Off-Plan Listings', desc: 'Rich property pages with floor plans, payment schedules, developer info, and AED/USD/GBP pricing.' },
      { icon: '🏗️', title: 'Developer Profiles', desc: 'Verified developer pages showing track record, current developments, and completed projects with buyer reviews.' },
      { icon: '⭐', title: 'Featured Properties', desc: 'Premium placement tier for flagship developments — full-bleed hero images, video walkthroughs, priority visibility.' },
      { icon: '📰', title: 'Market News & Insights', desc: 'Curated UAE real estate news, ROI data, and market trend reports to position Aramas as a trusted authority.' },
      { icon: '💬', title: 'Enquiry System', desc: 'Direct enquiry routing to developers with automated follow-up sequences and CRM integration.' },
    ],
    images: [
      { src: '/Images/work/aramas.png', alt: 'Aramas Property platform' },
      { src: '/Images/work/aramas-phone.png', alt: 'Aramas Property mobile view' },
    ],
    results: [
      { value: '200+', label: 'Properties at launch' },
      { value: 'AED 2B+', label: 'Listed property value' },
      { value: '15+', label: 'Developer partnerships' },
      { value: '6', label: 'Days to go live' },
    ],
    testimonial: {
      quote: 'We went from a static brochure site to a full property marketplace in 10 days. The search functionality alone has already converted 3 international buyers in the first week.',
      author: 'Ahmed Al-Mansoori',
      role: 'Director, Aramas Property',
    },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
  },

  'insights-dashboard': {
    slug: 'insights-dashboard',
    title: 'Insights Dashboard',
    tagline: 'Your entire business in one view — real-time, actionable, beautiful.',
    tags: ['Analytics', 'SaaS', 'Business Intelligence'],
    delivery: '5 days',
    year: '2025',
    heroImage: '/Images/work/insights.png',
    heroStats: [
      { value: '5', label: 'Day Delivery' },
      { value: '340%', label: 'Faster Reporting' },
      { value: '12', label: 'Data Integrations' },
      { value: '98%', label: 'User Adoption' },
    ],
    challenge: `The client had a team of 40 people relying on a patchwork of spreadsheets, Notion pages, and manual reports to track business performance. They needed a single source of truth — a real-time dashboard pulling from Stripe, HubSpot, Google Analytics, and their internal PostgreSQL database. Enterprise BI tools were overkill (and wildly expensive). They needed something clean, fast, and usable by non-technical team members from day one.`,
    approach: [
      {
        icon: '⚡',
        title: 'Real-Time Data Pipeline',
        desc: 'WebSocket connections to live data sources. KPIs update every 30 seconds without a page reload — always current, never stale.',
      },
      {
        icon: '🎨',
        title: 'Zero-Learning-Curve UX',
        desc: 'Designed for non-technical users first. Drag-and-drop widget layout, plain-English metric labels, and one-click report exports.',
      },
      {
        icon: '🔌',
        title: 'Multi-Source Integration',
        desc: '12 pre-built connectors covering all major business tools — Stripe, HubSpot, GA4, Intercom, Slack, and more. Setup in minutes.',
      },
    ],
    features: [
      { icon: '📈', title: 'Real-Time KPI Tracking', desc: 'Live widgets for MRR, churn, CAC, LTV, and any custom metric. Data refreshes every 30 seconds automatically.' },
      { icon: '💰', title: 'Revenue Analytics', desc: 'Detailed revenue breakdowns with trend charts, cohort analysis, and MoM/YoY comparisons.' },
      { icon: '👥', title: 'Team Performance', desc: 'Individual and team KPI scorecards, goal tracking, and performance trend lines across any time period.' },
      { icon: '🧩', title: 'Customisable Widgets', desc: 'Drag-and-drop dashboard builder. Each team member can configure their own layout and saved views.' },
      { icon: '📬', title: 'Automated Reports', desc: 'Weekly digest emails sent automatically every Monday. Custom report schedules for different stakeholders.' },
      { icon: '🔗', title: 'Multi-Source Integration', desc: '12 data connectors including Stripe, HubSpot, GA4, PostgreSQL, Intercom, and Slack — zero manual data entry.' },
    ],
    images: [
      { src: '/Images/work/insights.png', alt: 'Insights Dashboard analytics view' },
    ],
    results: [
      { value: '340%', label: 'Faster than manual reporting' },
      { value: '5', label: 'Days to production' },
      { value: '12', label: 'Live data integrations' },
      { value: '98%', label: 'Team adoption rate' },
    ],
    testimonial: {
      quote: 'Our Monday morning standup used to take 45 minutes just getting everyone on the same page with numbers. Now it takes 5. The dashboard is open on every team member\'s screen all day.',
      author: 'Sarah Chen',
      role: 'COO, Operations Lead',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'WebSockets'],
  },
}

/* ─── Types ─── */
interface Stat { value: string; label: string }
interface ApproachCard { icon: string; title: string; desc: string }
interface FeatureCard { icon: string; title: string; desc: string }
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

/* ─── Page ─── */
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]
  if (!project) notFound()

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
                className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 border border-orange-500/30 bg-orange-500/8 rounded-full px-4 py-1.5 hover:border-orange-500/60 hover:text-orange-300 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                View Live Site
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 10L10 2M10 2H5M10 2V7"/>
                </svg>
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

          {/* Hero slideshow — full width */}
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
              {/* Orange accent bar */}
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
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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

      {/* ── 6. Results ── */}
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
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-orange-500/10">
              {project.results.map((stat, i) => (
                <div key={i} className="p-8 text-center" style={{ background: '#0A0500' }}>
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="p-10 border-t border-orange-500/10">
              <div className="max-w-2xl mx-auto text-center">
                <div className="text-3xl text-orange-500/40 font-serif mb-4">"</div>
                <p className="text-neutral-300 text-base leading-relaxed italic mb-6">
                  {project.testimonial.quote}
                </p>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-white font-semibold text-sm">{project.testimonial.author}</span>
                  <span className="text-neutral-600 text-xs font-mono">{project.testimonial.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Tech Stack ── */}
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

      {/* Back to work */}
      <div className="container mx-auto px-6 pb-8 relative z-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-orange-400 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13 7H1M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to all work
        </Link>
      </div>

      {/* ── 8. CTA ── */}
      <CTA />
    </main>
  )
}
