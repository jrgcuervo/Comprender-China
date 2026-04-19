/**
 * SVG illustrations for each module (Gallery view).
 * Each illustration uses CSS custom properties so they adapt to the active palette.
 */
export default function ModuleIllustration({ moduleId }: { moduleId: number }) {
  switch (moduleId) {
    case 0: // Las Tres Lentes — three overlapping circles
      return (
        <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="240" height="300" fill="var(--card-2)" />
          <g stroke="var(--ink)" strokeWidth="1.5" fill="none">
            <circle cx="80"  cy="130" r="52" />
            <circle cx="120" cy="170" r="52" />
            <circle cx="160" cy="130" r="52" />
          </g>
          <g fill="var(--accent)" opacity=".2">
            <circle cx="80"  cy="130" r="52" />
            <circle cx="120" cy="170" r="52" />
            <circle cx="160" cy="130" r="52" />
          </g>
          <text x="120" y="268" fontFamily="'Noto Serif SC', serif" fontSize="26" fill="var(--ink)" textAnchor="middle" opacity=".7">三种视角</text>
        </svg>
      )

    case 1: // Raíces — Great Wall crenellations silhouette
      return (
        <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="240" height="300" fill="var(--card-2)" />
          {/* Mountains */}
          <path d="M0 210 L50 160 L90 180 L130 130 L170 155 L210 120 L240 140 L240 300 L0 300Z"
            fill="var(--ink)" opacity=".12" />
          {/* Wall base */}
          <rect x="0" y="230" width="240" height="40" fill="var(--ink)" opacity=".85" />
          {/* Crenellations */}
          <g fill="var(--ink)" opacity=".85">
            {[0, 30, 60, 90, 120, 150, 180, 210].map(x => (
              <rect key={x} x={x + 5} y="210" width="16" height="22" />
            ))}
          </g>
          {/* Gate arch */}
          <path d="M100 270 L100 245 Q120 228 140 245 L140 270Z" fill="var(--bg)" />
          {/* Dragon accent circle */}
          <circle cx="120" cy="100" r="42" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".5" />
          <circle cx="120" cy="100" r="30" fill="none" stroke="var(--accent)" strokeWidth=".5" opacity=".35" />
          <text x="120" y="108" fontFamily="'Noto Serif SC', serif" fontSize="28" fill="var(--accent)" textAnchor="middle" opacity=".7">清</text>
          <text x="20" y="280" fontFamily="'Noto Serif SC', serif" fontSize="18" fill="var(--bg)" opacity=".6">根</text>
        </svg>
      )

    case 2: // Caos — fragmented/broken lines
      return (
        <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="240" height="300" fill="var(--card-2)" />
          {/* Broken map fragments */}
          <g stroke="var(--ink)" strokeWidth="1.2" fill="none" opacity=".6">
            <line x1="30"  y1="80"  x2="95"  y2="110" />
            <line x1="95"  y1="110" x2="140" y2="85"  />
            <line x1="140" y1="85"  x2="200" y2="115" />
            <line x1="95"  y1="110" x2="80"  y2="170" />
            <line x1="140" y1="85"  x2="155" y2="155" />
            <line x1="80"  y1="170" x2="155" y2="155" />
            <line x1="80"  y1="170" x2="60"  y2="230" />
            <line x1="155" y1="155" x2="185" y2="210" />
          </g>
          {/* Faction nodes */}
          <g fill="var(--ink)">
            <circle cx="30"  cy="80"  r="5" />
            <circle cx="200" cy="115" r="4" />
            <circle cx="60"  cy="230" r="4" />
            <circle cx="185" cy="210" r="4" />
          </g>
          {/* Conflict node */}
          <circle cx="118" cy="130" r="14" fill="var(--accent)" opacity=".75" />
          <circle cx="118" cy="130" r="22" fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".4" />
          {/* Crack lines */}
          <g stroke="var(--accent)" strokeWidth=".8" opacity=".5">
            <line x1="118" y1="130" x2="50"  y2="60"  />
            <line x1="118" y1="130" x2="200" y2="55"  />
            <line x1="118" y1="130" x2="30"  y2="260" />
            <line x1="118" y1="130" x2="215" y2="270" />
          </g>
          <text x="210" y="290" fontFamily="'Noto Serif SC', serif" fontSize="36" fill="var(--accent)" textAnchor="end" opacity=".25">乱</text>
        </svg>
      )

    case 3: // Revolución — rising sun with silhouettes
      return (
        <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="240" height="300" fill="var(--card-2)" />
          <circle cx="120" cy="170" r="70" fill="var(--accent)" opacity=".85" />
          <g stroke="var(--accent)" strokeWidth=".8" opacity=".5">
            <line x1="120" y1="40"  x2="120" y2="90"  />
            <line x1="50"  y1="170" x2="20"  y2="170" />
            <line x1="190" y1="170" x2="220" y2="170" />
            <line x1="60"  y1="100" x2="40"  y2="80"  />
            <line x1="180" y1="100" x2="200" y2="80"  />
          </g>
          <path d="M0 220 L40 205 L80 215 L120 200 L160 215 L200 205 L240 215 L240 300 L0 300Z" fill="var(--ink)" />
          <g fill="var(--ink)">
            <rect x="59"  y="194" width="2" height="23" />
            <rect x="109" y="189" width="2" height="26" />
            <rect x="154" y="194" width="2" height="23" />
            <circle cx="60"  cy="191" r="2.5" />
            <circle cx="110" cy="186" r="2.5" />
            <circle cx="155" cy="191" r="2.5" />
          </g>
          <text x="30" y="62" fontFamily="'Noto Serif SC', serif" fontSize="32" fill="var(--accent)" opacity=".3">革</text>
        </svg>
      )

    case 4: // Transformación — growing skyline
      return (
        <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="240" height="300" fill="var(--card-2)" />
          <g fill="var(--ink)">
            <rect x="28"  y="185" width="22" height="85"  />
            <rect x="56"  y="155" width="18" height="115" />
            <rect x="80"  y="125" width="26" height="145" />
            <rect x="112" y="105" width="16" height="165" />
            <rect x="134" y="145" width="22" height="125" />
            <rect x="162" y="175" width="18" height="95"  />
            <rect x="186" y="195" width="22" height="75"  />
          </g>
          <g fill="var(--accent)" opacity=".6">
            {[[84,135],[94,145],[84,165],[94,185],[116,120],[116,148],[116,182]].map(([x,y],i) => (
              <rect key={i} x={x} y={y} width="4" height="4" />
            ))}
          </g>
          <line x1="0" y1="272" x2="240" y2="272" stroke="var(--ink)" strokeWidth="1" />
          <path d="M190 80 L210 60 L210 68 L216 68 L216 78 L210 78 L210 88Z" fill="var(--accent)" opacity=".6" />
          <text x="20" y="46" fontFamily="'Noto Serif SC', serif" fontSize="20" fill="var(--accent)" opacity=".35">改革</text>
        </svg>
      )

    case 5: // Ascenso — global network nodes
      return (
        <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="240" height="300" fill="var(--card-2)" />
          <g stroke="var(--ink)" strokeWidth=".6" opacity=".5">
            <line x1="50"  y1="80"  x2="120" y2="130" />
            <line x1="50"  y1="80"  x2="90"  y2="180" />
            <line x1="120" y1="130" x2="180" y2="90"  />
            <line x1="120" y1="130" x2="180" y2="180" />
            <line x1="120" y1="130" x2="60"  y2="220" />
            <line x1="180" y1="180" x2="200" y2="240" />
            <line x1="90"  y1="180" x2="130" y2="240" />
            <line x1="180" y1="90"  x2="200" y2="40"  />
          </g>
          <g fill="var(--ink)">
            <circle cx="50"  cy="80"  r="4" />
            <circle cx="90"  cy="180" r="3" />
            <circle cx="180" cy="90"  r="3" />
            <circle cx="180" cy="180" r="3" />
            <circle cx="60"  cy="220" r="3" />
            <circle cx="130" cy="240" r="3" />
            <circle cx="200" cy="240" r="3" />
            <circle cx="200" cy="40"  r="2" />
          </g>
          <circle cx="120" cy="130" r="12" fill="var(--accent)" />
          <circle cx="120" cy="130" r="22" fill="none" stroke="var(--accent)" strokeWidth=".8" opacity=".4" />
          <text x="200" y="282" fontFamily="'Noto Serif SC', serif" fontSize="22" fill="var(--accent)" opacity=".35" textAnchor="end">新时代</text>
        </svg>
      )

    case 6: // Síntesis — interlocking pattern / yin-yang hexagon
      return (
        <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="240" height="300" fill="var(--card-2)" />
          {/* Outer hexagon */}
          <polygon
            points="120,60 178,93 178,160 120,193 62,160 62,93"
            fill="none" stroke="var(--ink)" strokeWidth="1.5" opacity=".7"
          />
          {/* Inner hexagon rotated */}
          <polygon
            points="120,80 160,103 160,150 120,173 80,150 80,103"
            fill="none" stroke="var(--accent)" strokeWidth="1" opacity=".6"
          />
          {/* Spokes */}
          <g stroke="var(--ink)" strokeWidth=".6" opacity=".4">
            <line x1="120" y1="60"  x2="120" y2="193" />
            <line x1="62"  y1="93"  x2="178" y2="160" />
            <line x1="62"  y1="160" x2="178" y2="93"  />
          </g>
          {/* Centre */}
          <circle cx="120" cy="127" r="16" fill="var(--accent)" opacity=".8" />
          <circle cx="120" cy="127" r="6"  fill="var(--bg)" />
          {/* Bottom text */}
          <text x="120" y="235" fontFamily="'Noto Serif SC', serif" fontSize="20" fill="var(--ink)" textAnchor="middle" opacity=".55">综合</text>
          <line x1="60" y1="248" x2="180" y2="248" stroke="var(--rule)" strokeWidth=".5" opacity=".4" />
          <text x="120" y="268" fontFamily="'Noto Serif SC', serif" fontSize="12" fill="var(--ink-mute)" textAnchor="middle" opacity=".6">Síntesis · Tres perspectivas</text>
        </svg>
      )

    default:
      return (
        <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="300" fill="var(--card-2)" />
        </svg>
      )
  }
}
