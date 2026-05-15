/*
  Grão Tech — Logo System v5

  GTMark  — wheat ear with solid filled grain kernels + PCB circuit traces
  GTLogo  — horizontal lockup (mark + wordmark)
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
      <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="5" />

      {/* Top spike — single pointed kernel */}
      <path
        d="M100 28 C92 34, 90 47, 100 57 C110 47, 108 34, 100 28Z"
        fill={color}
      />

      {/* Left grain kernels — solid teardrop shapes attached to stem */}
      <path
        d="M100 60 C86 46, 52 62, 54 71 C52 80, 68 93, 100 80Z"
        fill={color}
      />
      <path
        d="M100 88 C86 74, 52 90, 54 99 C52 108, 68 121, 100 108Z"
        fill={color}
      />
      <path
        d="M100 116 C86 102, 52 118, 54 127 C52 136, 68 149, 100 136Z"
        fill={color}
      />

      {/* Right grain kernels — mirrored */}
      <path
        d="M100 71 C114 57, 148 73, 146 82 C148 91, 132 104, 100 91Z"
        fill={color}
      />
      <path
        d="M100 99 C114 85, 148 101, 146 110 C148 119, 132 132, 100 119Z"
        fill={color}
      />

      {/* Center stem — drawn on top so it reads as the spine of the ear */}
      <line
        x1="100" y1="165" x2="100" y2="52"
        stroke={color} strokeWidth="3.5" strokeLinecap="round"
      />

      {/* Circuit traces — PCB-style angular lines */}
      <polyline
        points="100,143 130,143 153,121"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="100,153 137,153 162,134"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="100,163 131,163 148,172"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* PCB via endpoints */}
      <circle cx="153" cy="121" r="6.5" stroke={color} strokeWidth="3" />
      <circle cx="153" cy="121" r="2.5" fill={color} />
      <circle cx="162" cy="134" r="6.5" stroke={color} strokeWidth="3" />
      <circle cx="162" cy="134" r="2.5" fill={color} />
      <circle cx="148" cy="172" r="6.5" stroke={color} strokeWidth="3" />
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
