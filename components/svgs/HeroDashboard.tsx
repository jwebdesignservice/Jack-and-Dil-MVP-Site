'use client'
import { motion } from 'framer-motion'

export default function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[580px] mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <svg viewBox="0 0 580 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
          <defs>
            <filter id="glow-orange" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
            <filter id="glow-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
            <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F97316"/>
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.5"/>
            </linearGradient>
            <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.15"/>
            </linearGradient>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0"/>
              <stop offset="25%" stopColor="#F97316"/>
              <stop offset="100%" stopColor="#FB923C"/>
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#F97316" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="cardBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111111"/>
              <stop offset="100%" stopColor="#0A0A0A"/>
            </linearGradient>
            <linearGradient id="donutTrack" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F97316"/>
              <stop offset="100%" stopColor="#FB923C"/>
            </linearGradient>
            <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.06"/>
              <stop offset="100%" stopColor="#F97316" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Background glow */}
          <ellipse cx="290" cy="250" rx="280" ry="240" fill="url(#bgGlow)"/>

          {/* ── MAIN CARD ── */}
          <rect x="40" y="20" width="500" height="370" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>

          {/* Top bar */}
          <rect x="40" y="20" width="500" height="48" rx="14" fill="rgba(255,255,255,0.04)"/>
          <rect x="40" y="54" width="500" height="14" fill="rgba(255,255,255,0.04)"/>

          {/* Window dots */}
          <circle cx="66" cy="44" r="5.5" fill="#1A1A1A" stroke="rgba(249,115,22,0.25)" strokeWidth="1"/>
          <circle cx="84" cy="44" r="5.5" fill="#1A1A1A" stroke="rgba(249,115,22,0.25)" strokeWidth="1"/>
          <circle cx="102" cy="44" r="5.5" fill="#1A1A1A" stroke="rgba(249,115,22,0.25)" strokeWidth="1"/>

          {/* Nav tabs */}
          <text x="132" y="48" fill="#F97316" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="400">Overview</text>
          <text x="196" y="48" fill="#4a4a4a" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="400">Analytics</text>
          <text x="258" y="48" fill="#4a4a4a" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="400">Projects</text>
          <rect x="130" y="62" width="52" height="2" rx="1" fill="#F97316"/>

          {/* Live chip */}
          <rect x="462" y="32" width="62" height="22" rx="11" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.3)" strokeWidth="0.5"/>
          <circle cx="474" cy="43" r="3.5" fill="#F97316"/>
          <motion.circle cx="474" cy="43" r="3.5" fill="#F97316" opacity="0.4"
            animate={{ r: [3.5, 8], opacity: [0.4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}/>
          <text x="482" y="47" fill="#F97316" fontSize="9.5" fontFamily="Inter, sans-serif" fontWeight="500">LIVE</text>

          {/* ── LEFT: BAR CHART ── */}
          <rect x="56" y="84" width="216" height="280" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5"/>

          {/* Revenue header */}
          <text x="72" y="108" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="0.05em">REVENUE</text>
          <text x="72" y="132" fill="#ffffff" fontSize="22" fontFamily="Inter, sans-serif" fontWeight="300">$124,500</text>
          <rect x="72" y="142" width="140" height="1" fill="rgba(249,115,22,0.1)"/>
          <text x="72" y="158" fill="#4ade80" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="400">↑ 18.4% from last month</text>

          {/* Grid lines */}
          {[0,1,2,3].map(i => (
            <line key={i} x1="72" y1={178 + i * 36} x2="256" y2={178 + i * 36} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
          ))}

          {/* Bars */}
          {[
            { x: 80, h: 90, delay: 0 },
            { x: 106, h: 64, delay: 0.08 },
            { x: 132, h: 108, delay: 0.16 },
            { x: 158, h: 50, delay: 0.24 },
            { x: 184, h: 120, delay: 0.32 },
            { x: 210, h: 80, delay: 0.40 },
            { x: 236, h: 98, delay: 0.48 },
          ].map((bar, i) => (
            <motion.rect
              key={i}
              x={bar.x} y={286 - bar.h} width="18" height={bar.h} rx="4"
              fill={i === 4 ? 'url(#bar1)' : 'url(#bar2)'}
              filter={i === 4 ? 'url(#glow-soft)' : undefined}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              style={{ transformOrigin: `${bar.x + 9}px 286px` }}
              transition={{ duration: 0.5, delay: bar.delay + 0.6, ease: 'easeOut' }}
            />
          ))}

          {/* X labels */}
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <text key={i} x={89 + i * 26} y="302" fill="#3a3a3a" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle">{d}</text>
          ))}

          {/* ── RIGHT: LINE CHART ── */}
          <rect x="284" y="84" width="240" height="150" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5"/>
          <text x="300" y="108" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="0.05em">GROWTH</text>
          <text x="300" y="128" fill="#ffffff" fontSize="18" fontFamily="Inter, sans-serif" fontWeight="300">+24%</text>
          <text x="340" y="128" fill="#4ade80" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="400"> MoM</text>

          {/* Grid lines */}
          {[0,1,2].map(i => (
            <line key={i} x1="298" y1={148 + i * 22} x2="516" y2={148 + i * 22} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
          ))}

          {/* Area */}
          <motion.path
            d="M298 204 L330 186 L362 192 L394 172 L426 178 L458 158 L490 162 L516 148 L516 214 L298 214Z"
            fill="url(#areaGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
          {/* Line */}
          <motion.path
            d="M298 204 L330 186 L362 192 L394 172 L426 178 L458 158 L490 162 L516 148"
            stroke="url(#lineGrad)" strokeWidth="2" strokeLinecap="round" fill="none"
            filter="url(#glow-soft)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.7, ease: 'easeInOut' }}
          />
          <motion.circle cx="516" cy="148" r="4.5" fill="#F97316" filter="url(#glow-orange)"
            animate={{ r: [4.5, 7, 4.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <circle cx="516" cy="148" r="2" fill="#fff"/>

          {/* ── BOTTOM RIGHT: Donut + Stats ── */}
          <rect x="284" y="248" width="110" height="116" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5"/>
          <text x="300" y="270" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="0.05em">DELIVERED</text>
          <circle cx="339" cy="316" r="28" stroke="#1A1A1A" strokeWidth="9" fill="none"/>
          <motion.circle cx="339" cy="316" r="28"
            stroke="url(#donutTrack)" strokeWidth="9" fill="none"
            strokeDasharray="144 176" strokeLinecap="round"
            strokeDashoffset="44"
            filter="url(#glow-soft)"
            initial={{ strokeDasharray: '0 176' }}
            animate={{ strokeDasharray: '144 176' }}
            transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
          />
          <text x="339" y="320" fill="#fff" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="300" textAnchor="middle">82%</text>

          {/* Mini stats */}
          <rect x="406" y="248" width="118" height="116" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5"/>
          <text x="422" y="270" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="0.05em">METRICS</text>
          {[
            { label: 'Clients', value: '142', color: '#F97316' },
            { label: 'Projects', value: '38', color: '#4ade80' },
            { label: 'Avg days', value: '9.2', color: '#60a5fa' },
          ].map((s, i) => (
            <g key={i}>
              <text x="422" y={292 + i * 26} fill="#555" fontSize="9.5" fontFamily="Inter, sans-serif" fontWeight="400">{s.label}</text>
              <text x="514" y={292 + i * 26} fill={s.color} fontSize="13" fontFamily="Inter, sans-serif" fontWeight="300" textAnchor="end">{s.value}</text>
              {i < 2 && <line x1="422" y1={298 + i * 26} x2="514" y2={298 + i * 26} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>}
            </g>
          ))}

          {/* ── BOTTOM STAT CARDS ── */}
          {[
            { x: 56,  label: 'Total MVPs',    value: '50+',   sub: 'Since 2022',      color: '#F97316' },
            { x: 180, label: 'Avg Delivery',  value: '9 days',sub: '↓ 3 days YoY',   color: '#4ade80' },
            { x: 304, label: 'Satisfaction',  value: '100%',  sub: 'NPS Score: 94',   color: '#F97316' },
            { x: 428, label: 'Uptime',        value: '99.9%', sub: 'Last 12 months',  color: '#60a5fa' },
          ].map((card, i) => (
            <g key={i}>
              <rect x={card.x} y="380" width="110" height="70" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5"/>
              <text x={card.x + 14} y="400" fill="#555" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="0.06em">{card.label.toUpperCase()}</text>
              <text x={card.x + 14} y="424" fill={card.color} fontSize="17" fontFamily="Inter, sans-serif" fontWeight="300">{card.value}</text>
              <text x={card.x + 14} y="440" fill="#3a3a3a" fontSize="9" fontFamily="Inter, sans-serif">{card.sub}</text>
            </g>
          ))}

          {/* Corner accents */}
          {[[44,24],[536,24],[44,386],[536,386]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="rgba(249,115,22,0.25)"/>
          ))}
        </svg>

        {/* Floating notification — top-right, OPAQUE, clearly above main panel */}
        <motion.div
          className="absolute -right-2 top-20 rounded-xl px-4 py-3 w-52 z-50 isolate border border-orange-500/30"
          style={{
            background: '#0A0A0A',
            boxShadow: '0 24px 60px -8px rgba(0,0,0,0.95), 0 0 0 1px rgba(249,115,22,0.20), inset 0 1px 0 0 rgba(255,255,255,0.08)',
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0"/>
            <span className="text-orange-400 text-xs font-medium">New MVP Shipped</span>
          </div>
          <p className="text-neutral-500 text-[10px] leading-relaxed">HealthFlow dashboard deployed to production</p>
          <p className="text-neutral-500 text-[9px] mt-1.5">2 mins ago</p>
        </motion.div>

        {/* Floating deploy badge — original spot, OPAQUE on top */}
        <motion.div
          className="absolute -left-2 bottom-28 rounded-xl px-4 py-3 z-50 isolate border border-orange-500/30"
          style={{
            background: '#0A0A0A',
            boxShadow: '0 24px 60px -8px rgba(0,0,0,0.95), 0 0 0 1px rgba(249,115,22,0.20), inset 0 1px 0 0 rgba(255,255,255,0.08)',
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-[11px] font-medium">Deployed</p>
              <p className="text-neutral-500 text-[10px]">vercel.app ✓</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
