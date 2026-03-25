'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import CTA from '@/components/sections/CTA'

interface Stat { value: string; label: string }
interface ApproachCard { icon: string; title: string; desc: string }
interface Feature { icon: string; title: string; desc: string }
interface CaseStudy {
  title: string
  tagline: string
  industry: string[]
  heroImage: string
  stats: Stat[]
  challenge: string
  approach: string
  approachCards: ApproachCard[]
  features: Feature[]
  images: string[]
  results: { stats: Stat[]; quote: string; author: string }
  tech: string[]
  liveUrl: string | null
}

const caseStudies: Record<string, CaseStudy> = {
  'eliminent': {
    title: 'Eliminent',
    tagline: 'An AI social deduction game where players must identify the AI hidden among them.',
    industry: ['Gaming', 'AI', 'Multiplayer'],
    heroImage: '/Images/work/eliminent-tablet.png',
    stats: [
      { value: '8', label: 'Days to ship' },
      { value: '4-12', label: 'Players' },
      { value: '100%', label: 'Real-time' },
      { value: '3', label: 'Game modes' },
    ],
    challenge: 'The founder wanted a real-time multiplayer game that blurred the line between human and AI — a social deduction experience with timed discussion rounds, voting mechanics, and seamless session management, all delivered in under 2 weeks.',
    approach: 'We designed the game loop before writing a line of code — scoped the MVP to core game mechanics, real-time session sync, and a clean UI. Built with Next.js and Supabase Realtime for live player state, then layered in the AI persona system.',
    approachCards: [
      { icon: '🎮', title: 'Game Loop First', desc: 'Scoped and validated core mechanics before any code was written.' },
      { icon: '⚡', title: 'Real-Time Architecture', desc: 'Supabase Realtime for live player state, voting, and session sync.' },
      { icon: '🤖', title: 'AI Persona System', desc: 'Dynamic AI responses that convincingly mimic human players.' },
    ],
    features: [
      { icon: '🔄', title: 'Real-Time Multiplayer', desc: 'Live sessions for 4-12 players with instant state sync.' },
      { icon: '🗳️', title: 'Voting System', desc: 'Timed discussion and elimination rounds with animated UI.' },
      { icon: '🤖', title: 'AI Integration', desc: 'AI players indistinguishable from humans during gameplay.' },
      { icon: '📱', title: 'Mobile Responsive', desc: 'Fully playable on any device, no install required.' },
    ],
    images: ['/Images/work/eliminent-tablet.png', '/Images/work/eliminent.png'],
    results: {
      stats: [
        { value: '8', label: 'Days delivered' },
        { value: '100%', label: 'Uptime' },
        { value: '3', label: 'Game modes shipped' },
        { value: '0', label: 'Critical bugs at launch' },
      ],
      quote: 'The game loop just works. The team nailed the real-time sync — we launched on day 8 with zero issues.',
      author: 'Founder, Eliminent',
    },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'Framer Motion'],
    liveUrl: null,
  },
  'metalex-terminal': {
    title: 'Metalex Terminal',
    tagline: 'A professional-grade precious metals trading terminal for serious traders.',
    industry: ['FinTech', 'Trading', 'Real-Time'],
    heroImage: '/Images/work/metalex-phone.png',
    stats: [
      { value: '14', label: 'Days to ship' },
      { value: 'Live', label: 'Spot prices' },
      { value: '6', label: 'Metals tracked' },
      { value: '24/7', label: 'Market data' },
    ],
    challenge: 'Build a professional trading terminal for precious metals that felt as capable as Bloomberg — live spot prices, AI signals, futures curves, and real-time market depth — in 14 days.',
    approach: 'Started with data architecture — WebSocket price feeds and normalisation layer first, then the trading UI. Built modular dashboard widgets so the client could customise their workspace without dev changes.',
    approachCards: [
      { icon: '📡', title: 'Data First', desc: 'WebSocket feeds and normalisation layer before any UI was built.' },
      { icon: '📊', title: 'Modular Dashboard', desc: 'Widget-based layout the client can customise without dev.' },
      { icon: '🤖', title: 'AI Signal Layer', desc: 'Machine learning signals overlaid on live price data.' },
    ],
    features: [
      { icon: '📈', title: 'Live Spot Prices', desc: 'Real-time gold, silver, platinum, and palladium feeds.' },
      { icon: '🤖', title: 'AI Signals', desc: 'Automated buy/sell signals based on technical indicators.' },
      { icon: '📉', title: 'Futures Curves', desc: 'Visual forward curves across contract months.' },
      { icon: '🔔', title: 'Price Alerts', desc: 'Custom threshold alerts with push notifications.' },
    ],
    images: ['/Images/work/metalex-phone.png', '/Images/work/metalex.png'],
    results: {
      stats: [
        { value: '14', label: 'Days delivered' },
        { value: '<100ms', label: 'Price latency' },
        { value: '6', label: 'Metals tracked' },
        { value: '99.9%', label: 'Uptime' },
      ],
      quote: 'We had a Bloomberg-quality terminal in two weeks. The real-time architecture is rock solid.',
      author: 'Founder, Metalex',
    },
    tech: ['Next.js', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'Vercel', 'Chart.js'],
    liveUrl: null,
  },
  'desert-falcons': {
    title: 'Desert Falcons Collective',
    tagline: 'A premium automotive community platform for luxury car enthusiasts across the Middle East.',
    industry: ['Automotive', 'Luxury', 'Community'],
    heroImage: '/Images/work/desertfalcons-tablet.png',
    stats: [
      { value: '7', label: 'Days to ship' },
      { value: '500+', label: 'Founding members' },
      { value: '8', label: 'Dashboard modules' },
      { value: '99.9%', label: 'Uptime' },
    ],
    challenge: "Desert Falcons needed a platform to unite Saudi Arabia's top automotive enthusiasts — combining a public-facing website with a private member portal, all with a luxury dark aesthetic and Arabic RTL support.",
    approach: 'Designed the public site and member portal in parallel. Built a modular dashboard system with Supabase auth, then layered Arabic RTL internationalisation across all components.',
    approachCards: [
      { icon: '🏎️', title: 'Dual Surface Design', desc: 'Public marketing site and private member portal designed in parallel.' },
      { icon: '🌐', title: 'Arabic RTL i18n', desc: 'Full right-to-left internationalisation across all pages and components.' },
      { icon: '🔐', title: 'Member Auth System', desc: 'Supabase auth with role-based access control for member areas.' },
    ],
    features: [
      { icon: '🏎️', title: 'Member Portal', desc: 'Full dashboard with discussions, events, and member directory.' },
      { icon: '💬', title: 'Discussion Forums', desc: 'Categorised forums with real-time activity feeds.' },
      { icon: '🌐', title: 'Arabic RTL Support', desc: 'Complete bilingual experience — English and Arabic.' },
      { icon: '📅', title: 'Event Management', desc: 'Events calendar with RSVPs and member notifications.' },
    ],
    images: ['/Images/work/desertfalcons-tablet.png', '/Images/work/desertfalcons.png', '/Images/work/desertfalcons-dashboard.png'],
    results: {
      stats: [
        { value: '7', label: 'Days delivered' },
        { value: '500+', label: 'Founding members' },
        { value: '8', label: 'Dashboard modules' },
        { value: '2', label: 'Languages' },
      ],
      quote: 'The platform launched on time and our founding members loved it. The bilingual support was seamless.',
      author: 'Founder, Desert Falcons Collective',
    },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'Framer Motion'],
    liveUrl: null,
  },
  'memory-market': {
    title: 'Memory Market',
    tagline: 'A Web3 prediction and knowledge marketplace where AI memory becomes a tradeable asset.',
    industry: ['Web3', 'DeFi', 'Blockchain'],
    heroImage: '/Images/work/memorymarket.png',
    stats: [
      { value: '9', label: 'Days to ship' },
      { value: '847', label: 'Memories minted' },
      { value: '$2M+', label: 'Trading volume' },
      { value: '256', label: 'Active wallets' },
    ],
    challenge: 'Create a marketplace where AI-generated knowledge and memories could be stored, traded, and verified on Solana — a completely new concept with no existing playbook.',
    approach: 'Rapid prototyping of the trading interface first, then Solana wallet integration. Used a 4-tier pricing system to create natural market dynamics.',
    approachCards: [
      { icon: '💡', title: 'UI Prototype First', desc: 'Validated the trading UX before any blockchain integration.' },
      { icon: '⛓️', title: 'Solana Integration', desc: 'Wallet connect, transaction signing, and on-chain verification.' },
      { icon: '📊', title: '4-Tier Pricing', desc: 'Market dynamics built in from day one to drive trading behaviour.' },
    ],
    features: [
      { icon: '👛', title: 'Solana Wallet', desc: 'Native wallet integration for seamless on-chain transactions.' },
      { icon: '🧠', title: 'Memory Trading', desc: 'Buy, sell, and trade AI-generated knowledge assets.' },
      { icon: '✅', title: 'On-Chain Verification', desc: 'Immutable proof of memory ownership and provenance.' },
      { icon: '📡', title: 'Real-Time Feeds', desc: 'Live pricing and market depth for all memory assets.' },
    ],
    images: ['/Images/work/memorymarket.png', '/Images/work/memorymarket-phone.png'],
    results: {
      stats: [
        { value: '9', label: 'Days delivered' },
        { value: '847', label: 'Memories minted' },
        { value: '$2M+', label: 'Trading volume' },
        { value: '256', label: 'Active wallets' },
      ],
      quote: "They shipped something that didn't exist before — a functioning Web3 marketplace for AI memory, in under two weeks.",
      author: 'Founder, Memory Market',
    },
    tech: ['Next.js', 'TypeScript', 'Solana', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: null,
  },
  'aramas-property': {
    title: 'Aramas Property',
    tagline: 'A premium real estate investment platform for off-plan properties in Abu Dhabi and Dubai.',
    industry: ['Real Estate', 'PropTech', 'Investment'],
    heroImage: '/Images/work/aramas.png',
    stats: [
      { value: '6', label: 'Days to ship' },
      { value: '200+', label: 'Properties listed' },
      { value: 'AED 2B+', label: 'Property value' },
      { value: '15+', label: 'Developer partners' },
    ],
    challenge: 'Aramas needed a luxury-feel platform to showcase UAE off-plan developments, connect international buyers with developers, and provide market insights.',
    approach: 'Built the property listing engine and search filters first, then developer profiles, then the market insights section.',
    approachCards: [
      { icon: '🏗️', title: 'Listings Engine First', desc: 'Property search and filters before any marketing content.' },
      { icon: '👔', title: 'Developer Profiles', desc: 'Verified developer network with portfolio showcases.' },
      { icon: '📰', title: 'Market Insights', desc: 'News and data section to support investment decisions.' },
    ],
    features: [
      { icon: '🔍', title: 'Advanced Search', desc: 'Filter by area, price, bedrooms, developer, and completion date.' },
      { icon: '🏢', title: 'Developer Network', desc: 'Verified profiles for 15+ UAE developers.' },
      { icon: '💰', title: 'AED Pricing', desc: 'Native AED pricing with international currency conversion.' },
      { icon: '📊', title: 'Market Insights', desc: 'Latest UAE property market news and investment data.' },
    ],
    images: ['/Images/work/aramas.png', '/Images/work/aramas-phone.png'],
    results: {
      stats: [
        { value: '6', label: 'Days delivered' },
        { value: '200+', label: 'Properties listed' },
        { value: 'AED 2B+', label: 'Listed value' },
        { value: '15+', label: 'Developer partners' },
      ],
      quote: "The platform looks and feels exactly like the premium brand we've built. Delivered in 6 days, production-ready from day one.",
      author: 'Founder, Aramas Property',
    },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: null,
  },
  'insights-dashboard': {
    title: 'Insights Dashboard',
    tagline: 'An analytics SaaS for tracking business KPIs, revenue metrics, and team performance.',
    industry: ['Analytics', 'SaaS', 'BI'],
    heroImage: '/Images/work/insights.png',
    stats: [
      { value: '5', label: 'Days to ship' },
      { value: '340%', label: 'Faster reporting' },
      { value: '12', label: 'Data integrations' },
      { value: '98%', label: 'User adoption' },
    ],
    challenge: 'The client needed a clean, real-time analytics dashboard pulling data from multiple sources — actionable insights without the bloat of enterprise BI tools.',
    approach: 'Mapped all data sources first and built a normalisation layer. Then built the dashboard with configurable widgets so the client could adapt it to different teams without dev work.',
    approachCards: [
      { icon: '🗃️', title: 'Data Architecture', desc: 'Multi-source normalisation layer before any visualisation work.' },
      { icon: '📊', title: 'Configurable Widgets', desc: 'Dashboard components adaptable by non-technical users.' },
      { icon: '⚡', title: 'Real-Time Updates', desc: 'Live KPI feeds with sub-second refresh rates.' },
    ],
    features: [
      { icon: '📈', title: 'Real-Time KPIs', desc: 'Live metrics with configurable refresh rates.' },
      { icon: '💵', title: 'Revenue Analytics', desc: 'MRR, ARR, and churn tracked with visual trend lines.' },
      { icon: '👥', title: 'Team Performance', desc: 'Individual and team-level metrics in one view.' },
      { icon: '📧', title: 'Automated Reports', desc: 'Weekly email digests generated and sent automatically.' },
    ],
    images: ['/Images/work/insights.png'],
    results: {
      stats: [
        { value: '5', label: 'Days delivered' },
        { value: '340%', label: 'Faster reporting' },
        { value: '12', label: 'Integrations' },
        { value: '98%', label: 'User adoption' },
      ],
      quote: 'We went from spreadsheets to a live dashboard in 5 days. The team adoption rate was almost immediate.',
      author: 'Founder, Insights',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    liveUrl: null,
  },
  'ams-tool': {
    title: 'AMS Tool',
    tagline: 'An AI-powered adverse media screening platform for compliance teams and financial institutions.',
    industry: ['RegTech', 'Compliance', 'FinTech'],
    heroImage: '/Images/work/ams-tablet.png',
    stats: [
      { value: '10', label: 'Days to ship' },
      { value: '120+', label: 'Screenings run' },
      { value: '7', label: 'Risk data sources' },
      { value: '99%', label: 'Match accuracy' },
    ],
    challenge: 'The compliance team needed a tool to automate adverse media screening — replacing manual Google searches with an AI-driven pipeline that could analyse, score, and queue flagged subjects for analyst review, at scale.',
    approach: 'Built the screening pipeline first — search, analyse, risk-score, review queue. Then the admin and analyst dashboards. Role-based access was designed from the start so admins and analysts see exactly what they need.',
    approachCards: [
      { icon: '🔍', title: 'Pipeline First', desc: 'End-to-end screening flow designed before any UI was built.' },
      { icon: '⚖️', title: 'Risk Scoring Engine', desc: 'AI-driven scoring with high/medium/low classification and reasoning.' },
      { icon: '👥', title: 'Role-Based Access', desc: 'Separate admin and analyst views with tailored permissions.' },
    ],
    features: [
      { icon: '🔍', title: 'AI Adverse Media Search', desc: 'Automated screening against news, legal, and public records sources.' },
      { icon: '⚠️', title: 'Risk Classification', desc: 'High/medium/low scoring with article-level evidence for every result.' },
      { icon: '📋', title: 'Review Queue', desc: 'Structured analyst workflow: submitted, searching, analysing, review, completed.' },
      { icon: '📊', title: 'Admin Dashboard', desc: 'Real-time KPIs: total users, screenings, pending reviews, and flagged subjects.' },
      { icon: '📁', title: 'Audit Log', desc: 'Complete activity trail for compliance and regulatory reporting.' },
      { icon: '👤', title: 'User Management', desc: 'Admin controls for analyst accounts, roles, and access levels.' },
    ],
    images: ['/Images/work/ams-tablet.png', '/Images/work/ams-desktop.png', '/Images/work/ams-screening.png'],
    results: {
      stats: [
        { value: '10', label: 'Days delivered' },
        { value: '120+', label: 'Screenings processed' },
        { value: '99%', label: 'Match accuracy' },
        { value: '0', label: 'Manual searches needed' },
      ],
      quote: 'We went from doing this manually to having a full AI-powered compliance tool in 10 days. The risk scoring alone saves our analysts hours every week.',
      author: 'Compliance Lead, AMS Tool',
    },
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'AI/ML'],
    liveUrl: null,
  },
}

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params?.slug as string
  const study = caseStudies[slug]

  if (!study) {
    return (
      <main className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-400 mb-4">Case study not found</p>
          <Button href="/work" variant="outline">Back to Work</Button>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-black">
      {/* Dot grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black pointer-events-none z-10" />
        <div className="absolute inset-0 z-0">
          <Image src={study.heroImage} alt={study.title} fill className="object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/work" className="inline-flex items-center gap-2 text-neutral-500 hover:text-orange-400 text-sm mb-8 transition-colors">
              <span>←</span> Back to Work
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex justify-start mb-5">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
            }>Case Study</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight max-w-4xl"
          >
            {study.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mb-6 leading-relaxed"
          >
            {study.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {study.industry.map(tag => (
              <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 bg-orange-500/5">
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
          >
            {study.stats.map((stat, i) => (
              <div key={i} className="border border-[rgba(249,115,22,0.15)] rounded-lg p-4 bg-black/60 backdrop-blur-sm">
                <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-neutral-500 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="flex items-start gap-6"
            >
              <div className="w-[3px] bg-orange-500 rounded-full flex-shrink-0 self-stretch min-h-[80px]" />
              <div>
                <SectionLabel icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                  </svg>
                }>The Challenge</SectionLabel>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-4 mb-4">What needed solving</h2>
                <p className="text-neutral-400 leading-relaxed text-base">{study.challenge}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-start mb-4">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
              </svg>
            }>Our Approach</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-semibold text-white mb-4 max-w-2xl"
          >
            How we built it
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-neutral-400 leading-relaxed mb-10 max-w-2xl"
          >
            {study.approach}
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-6">
            {study.approachCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-[rgba(249,115,22,0.12)] rounded-lg p-6 bg-black hover:border-orange-500/30 transition-colors"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-start mb-4">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            }>Key Features</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-semibold text-white mb-10"
          >
            What was built
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {study.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="border border-[rgba(249,115,22,0.12)] rounded-lg p-5 bg-[#0A0A0A] hover:border-orange-500/25 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{feature.icon}</span>
                  <div>
                    <h3 className="text-white font-medium mb-1 text-sm">{feature.title}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="relative py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-start mb-4">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
            }>Screenshots</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-semibold text-white mb-10"
          >
            The finished product
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {study.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-lg overflow-hidden border border-[rgba(249,115,22,0.12)] ${i === 0 && study.images.length === 1 ? 'sm:col-span-2' : ''}`}
                style={{ aspectRatio: '16/10' }}
              >
                <Image src={img} alt={`${study.title} screenshot ${i + 1}`} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-20" style={{ background: '#0A0500' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-start mb-4">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
              </svg>
            }>Results</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-semibold text-white mb-10"
          >
            What we delivered
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
            {study.results.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="text-center border border-orange-500/20 rounded-lg p-5 bg-black/50"
              >
                <div className="text-3xl sm:text-4xl font-semibold text-orange-400 mb-2">{stat.value}</div>
                <div className="text-xs text-neutral-500 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="border-l-2 border-orange-500 pl-6 max-w-2xl"
          >
            <p className="text-neutral-300 text-base leading-relaxed italic mb-3">&ldquo;{study.results.quote}&rdquo;</p>
            <cite className="text-neutral-500 text-sm not-italic">— {study.results.author}</cite>
          </motion.blockquote>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-start mb-4">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            }>Tech Stack</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-semibold text-white mb-8"
          >
            Built with
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            {study.tech.map((tech, i) => (
              <span
                key={i}
                className="text-sm font-mono px-4 py-2 rounded-lg border border-[rgba(249,115,22,0.2)] text-neutral-300 bg-[#0A0A0A] hover:border-orange-500/40 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
