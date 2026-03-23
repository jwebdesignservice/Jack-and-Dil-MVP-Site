export default function CircuitPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Horizontal traces */}
      <line x1="0" y1="100" x2="800" y2="100" stroke="#F97316" strokeWidth="1" />
      <line x1="0" y1="300" x2="800" y2="300" stroke="#F97316" strokeWidth="1" />
      <line x1="0" y1="500" x2="800" y2="500" stroke="#F97316" strokeWidth="1" />
      {/* Vertical traces */}
      <line x1="200" y1="0" x2="200" y2="600" stroke="#F97316" strokeWidth="1" />
      <line x1="400" y1="0" x2="400" y2="600" stroke="#F97316" strokeWidth="1" />
      <line x1="600" y1="0" x2="600" y2="600" stroke="#F97316" strokeWidth="1" />
      {/* Nodes */}
      {[[200,100],[400,100],[600,100],[200,300],[400,300],[600,300],[200,500],[400,500],[600,500]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#F97316" />
      ))}
      {/* Extra traces */}
      <line x1="100" y1="0" x2="100" y2="200" stroke="#F97316" strokeWidth="0.5" />
      <line x1="100" y1="200" x2="200" y2="200" stroke="#F97316" strokeWidth="0.5" />
      <line x1="500" y1="200" x2="500" y2="400" stroke="#F97316" strokeWidth="0.5" />
      <line x1="500" y1="400" x2="600" y2="400" stroke="#F97316" strokeWidth="0.5" />
      <line x1="300" y1="400" x2="400" y2="400" stroke="#F97316" strokeWidth="0.5" />
      <line x1="300" y1="400" x2="300" y2="600" stroke="#F97316" strokeWidth="0.5" />
      {/* Small component boxes */}
      <rect x="370" y="270" width="60" height="60" stroke="#F97316" strokeWidth="0.5" fill="none" />
      <rect x="170" y="470" width="60" height="60" stroke="#F97316" strokeWidth="0.5" fill="none" />
    </svg>
  )
}
