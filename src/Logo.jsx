/*
  Grão Tech — Logo System v3

  GTMark  — wheat-ear + PCB circuit mark inside circle
  GTLogo  — horizontal lockup (mark + wordmark)

  The mark captures the brand metaphor: organic (grain) meeting
  digital (circuit board traces), same as the official logo.
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

      {/* Main stem */}
      <line
        x1="97" y1="166" x2="97" y2="24"
        stroke={color} strokeWidth="4.5" strokeLinecap="round"
      />

      {/* Top spike */}
      <path d="M97 23 C89 32 88 48 97 55 C106 48 105 32 97 23Z" fill={color} />

      {/* Left grain kernels */}
      <path d="M96 70 C84 57 68 63 66 72 C65 81 78 83 96 76Z"  fill={color} />
      <path d="M96 99 C84 86 68 92 66 101 C65 110 78 112 96 105Z" fill={color} />
      <path d="M96 128 C84 115 68 121 66 130 C65 139 78 141 96 134Z" fill={color} />

      {/* Right grain kernels */}
      <path d="M98 82 C110 69 126 75 128 84 C129 93 116 95 98 88Z"  fill={color} />
      <path d="M98 111 C110 98 126 104 128 113 C129 122 116 124 98 117Z" fill={color} />

      {/* Circuit traces — PCB-style angular lines */}
      <polyline
        points="97,140 128,140 150,120"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="97,152 134,152 159,134"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="97,164 131,164 151,177"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* PCB via endpoints — outer ring + center dot */}
      <circle cx="150" cy="120" r="6.5" stroke={color} strokeWidth="3" />
      <circle cx="150" cy="120" r="2.5" fill={color} />
      <circle cx="159" cy="134" r="6.5" stroke={color} strokeWidth="3" />
      <circle cx="159" cy="134" r="2.5" fill={color} />
      <circle cx="151" cy="177" r="6.5" stroke={color} strokeWidth="3" />
      <circle cx="151" cy="177" r="2.5" fill={color} />
    </svg>
  );
}

export function GTLogo({ variant = "light", size = 36 }) {
  const onLight = variant === "light";
  const ink     = onLight ? "#0C0806" : "#FAF9F7";
  const h       = size;

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
