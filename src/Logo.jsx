/*
  Grão Tech — Logo System v4

  GTMark  — line-art wheat ear + PCB circuit traces inside circle
  GTLogo  — horizontal lockup (mark + wordmark)

  Stroke-only style to match the actual brand mark:
  grain kernels as open leaf paths along a center stem,
  circuit traces branching right with PCB via endpoints.
*/

const ORANGE = "#F26522";

export function GTMark({ size = 40, color = ORANGE }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="5.5" />

      {/* Center stem */}
      <line
        x1="100" y1="165" x2="100" y2="26"
        stroke={color} strokeWidth="4.5" strokeLinecap="round"
      />

      {/* Top spike — symmetrical pointed leaf */}
      <path
        d="M100 55 C90 48, 90 32, 100 24 C110 32, 110 48, 100 55"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Left grain leaves — open paths (stem edge hidden under stem line) */}
      <path
        d="M100 78 C88 62, 64 58, 57 68 C50 79, 70 91, 100 84"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M100 107 C88 91, 64 87, 57 97 C50 108, 70 120, 100 113"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M100 136 C88 120, 64 116, 57 126 C50 137, 70 149, 100 142"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Right grain leaves */}
      <path
        d="M100 79 C112 63, 136 59, 143 69 C150 80, 130 92, 100 85"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M100 108 C112 92, 136 88, 143 98 C150 109, 130 121, 100 114"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Circuit traces — PCB-style angular lines */}
      <polyline
        points="100,148 130,148 153,126"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="100,157 137,157 162,138"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="100,165 131,165 148,172"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* PCB via endpoints — outer ring + center dot */}
      <circle cx="153" cy="126" r="7" stroke={color} strokeWidth="3" />
      <circle cx="153" cy="126" r="2.5" fill={color} />
      <circle cx="162" cy="138" r="7" stroke={color} strokeWidth="3" />
      <circle cx="162" cy="138" r="2.5" fill={color} />
      <circle cx="148" cy="172" r="7" stroke={color} strokeWidth="3" />
      <circle cx="148" cy="172" r="2.5" fill={color} />
    </svg>
  );
}

export function GTLogo({ variant = "light", size = 36 }) {
  const ink = variant === "light" ? "#0C0806" : "#FAF9F7";
  const h   = size;

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: Math.round(h * 0.30) + "px",
      userSelect: "none",
      flexShrink: 0,
    }}>
      <GTMark size={Math.round(h * 1.18)} color={ORANGE} />

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: Math.round(h * 0.52) + "px",
          fontWeight: 600,
          color: ink,
          letterSpacing: "0.05em",
          lineHeight: 1,
          display: "block",
        }}>
          GRÃO
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div style={{ width: Math.round(h * 0.44) + "px", height: "1.5px", background: ORANGE }} />
          <span style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: Math.round(h * 0.26) + "px",
            fontWeight: 600,
            color: ORANGE,
            letterSpacing: "0.22em",
            lineHeight: 1,
          }}>TECH</span>
          <div style={{ width: Math.round(h * 0.44) + "px", height: "1.5px", background: ORANGE }} />
        </div>
      </div>
    </div>
  );
}
