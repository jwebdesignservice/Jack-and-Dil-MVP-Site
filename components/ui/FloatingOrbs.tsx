// Pure-CSS floating orange orb decoration. Server component — no hydration
// cost, no JS shipped. The animation is a CSS keyframe (`floatUp`) defined
// in app/globals.css, so this is just markup + inline styles.
//
// Pulled out of app/layout.tsx so it can be inlined cheaply without bloating
// the layout module, and so the parent layout stays a slim shell.

const ORBS = [
  { l: 8,  s: 5, o: 0.55, d: 0,    dur: 11 },
  { l: 18, s: 4, o: 0.40, d: 1.5,  dur: 13 },
  { l: 27, s: 6, o: 0.65, d: 3,    dur: 10 },
  { l: 38, s: 3, o: 0.35, d: 0.8,  dur: 14 },
  { l: 48, s: 5, o: 0.50, d: 2.2,  dur: 12 },
  { l: 58, s: 4, o: 0.40, d: 4,    dur: 13 },
  { l: 68, s: 6, o: 0.60, d: 1.2,  dur: 11 },
  { l: 78, s: 4, o: 0.45, d: 3.4,  dur: 14 },
  { l: 88, s: 5, o: 0.55, d: 0.5,  dur: 12 },
  { l: 95, s: 3, o: 0.35, d: 2.7,  dur: 13 },
] as const

export default function FloatingOrbs() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {ORBS.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.s}px`,
            height: `${p.s}px`,
            left: `${p.l}%`,
            bottom: '-20px',
            background: '#F97316',
            opacity: p.o,
            boxShadow: '0 0 10px #F97316',
            animation: `floatUp ${p.dur}s linear ${p.d}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
