'use client'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import CTA from '@/components/sections/CTA'

/* ─── Project Data ─── */
const projects: Record<string, Project> = {
  'desert-falcons': {
    slug: 'desert-falcons',
    title: 'Desert Falcons Collective',
    tagline: 'The premium digital home for Saudi Arabia\'s automotive elite.',
    tags: ['Automotive', 'Luxury', 'Community'],
    delivery: '12 days',
    year: '2026',
    heroImage: '/Images/work/desertfalcons.png',
    phoneImage: '/Images/work/desertfalcons-phone.png',
    dashboardImage: '/Images/work/desertfalcons-dashboard.png',
    heroStats: [
      { value: '12', label: 'Day Delivery' },
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
      { src: '/Images/work/desertfalcons-dashboard.png', alt: 'Desert Falcons member dashboard' },
      { src: '/Images/work/desertfalcons-phone.png', alt: 'Desert Falcons mobile view' },
    ],
    results: [
      { value: '500+', label: 'Members in first 48 hours' },
      { value: '12', label: 'Days to production' },
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
    delivery: '14 days',
    year: '2025',
    heroImage: '/Images/work/memorymarket.png',
    phoneImage: '/Images/work/memorymarket-phone.png',
    heroStats: [
      { value: '14', label: 'Day Delivery' },
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
      { value: '14', label: 'Days from brief to live' },
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
    delivery: '10 days',
    year: '2025',
    heroImage: '/Images/work/aramas.png',
    phoneImage: '/Images/work/aramas-phone.png',
    heroStats: [
      { value: '10', label: 'Day Delivery' },
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
      { value: '10', label: 'Days to go live' },
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
    delivery: '8 days',
    year: '2025',
    heroImage: '/Images/work/insights.png',
    heroStats: [
      { value: '8', label: 'Day Delivery' },
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
      { value: '8', label: 'Days to production' },
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
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Hero image */}
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pb-16 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            }>Case Study</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl lg:text-7xl font-semibold text-white mb-4 leading-tight max-w-3xl"
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
                <div className="text-3xl mb-4">{card.icon}</div>
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
                <div className="text-2xl flex-shrink-0 mt-0.5">{feature.icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Screenshots Gallery ── */}
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
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
              </svg>
            }>Screenshots</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-semibold text-white mb-12 leading-snug"
          >
            The finished product
          </motion.h2>

          <div className={`grid gap-6 ${project.images.length === 1 ? 'grid-cols-1' : project.images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-lg overflow-hidden border border-[rgba(249,115,22,0.12)] group ${project.images.length === 1 ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-mono text-white/70">{img.alt}</span>
                </div>
                {/* Corner accents */}
                <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-orange-500/40" />
                <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-orange-500/40" />
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
                  <div className="text-4xl lg:text-5xl font-semibold text-orange-400 mb-2">{stat.value}</div>
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
