'use client'
import Image from 'next/image'

export default function HeroGraphic() {
  const orbitChars = 'SHIP FAST, BUILT TO LAST. • PREMIUM QUALITY, NO COMPROMISE. • '.split('')

  return (
    <div className="hero-visual">
      {/* Rings */}
      <div className="hero-rings">
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
        <div className="hero-ring hero-ring-4" />
        <div className="hero-ring-dashed" />
      </div>

      {/* Center glow */}
      <div className="hero-center-glow" />

      {/* Orbiting dots */}
      <div className="orbit-dots">
        <div className="orbit-dot orbit-dot-1" />
        <div className="orbit-dot orbit-dot-2" />
        <div className="orbit-dot orbit-dot-3" />
        <div className="orbit-dot orbit-dot-4" />
      </div>

      {/* Orbiting text */}
      <div className="orbit-container">
        <div className="orbit-text">
          {orbitChars.map((char, i) => (
            <span key={i} style={{ '--i': i } as React.CSSProperties}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>

      {/* Floating stats */}
      <div className="floating-stats">
        <div className="float-stat" style={{ '--delay': '0s', '--x': '-180px', '--y': '-120px' } as React.CSSProperties}>
          <span className="stat-number">50+</span>
          <span className="stat-label">MVPs Built</span>
        </div>
        <div className="float-stat" style={{ '--delay': '0.5s', '--x': '180px', '--y': '-100px' } as React.CSSProperties}>
          <span className="stat-number">3-14</span>
          <span className="stat-label">Days</span>
        </div>
        <div className="float-stat" style={{ '--delay': '1s', '--x': '-190px', '--y': '110px' } as React.CSSProperties}>
          <span className="stat-number">100%</span>
          <span className="stat-label">Ownership</span>
        </div>
        <div className="float-stat" style={{ '--delay': '1.5s', '--x': '190px', '--y': '120px' } as React.CSSProperties}>
          <span className="stat-number">24/7</span>
          <span className="stat-label">Support</span>
        </div>
      </div>

      {/* Centre image — LCP element, marked priority for fast load */}
      <div className="hero-center-image">
        <Image
          src="/Images/Hero illustration.png"
          alt="Fast Launch — production-ready MVP dashboard illustration"
          width={600}
          height={600}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
    </div>
  )
}
