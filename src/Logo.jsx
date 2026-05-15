/*
  Grão Tech — Logo System v6

  GTMark  — rotated ellipse grain kernels + PCB circuit traces in a circle
  GTLogo  — horizontal lockup
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

      {/* Top spike — upright oval */}
      <ellipse cx="100" cy="42" rx="11" ry="20" fill={color} />

      {/* Left grain kernels — rotated ellipses pointing upper-left */}
      <ellipse cx="79" cy="68"  rx="14" ry="23" fill={color} transform="rotate(-38 79 68)"  />
      <ellipse cx="77" cy="96"  rx="14" ry="23" fill={color} transform="rotate(-38 77 96)"  />
      <ellipse cx="79" cy="124" rx="14" ry="23" fill={color} transform="rotate(-38 79 124)" />

      {/* Right grain kernels — mirrored */}
      <ellipse cx="121" cy="82"  rx="14" ry="23" fill={color} transform="rotate(38 121 82)"  />
      <ellipse cx="123" cy="110" rx="14" ry="23" fill={color} transform="rotate(38 123 110)" />

      {/* Center stem — drawn on top as the spine */}
      <line
        x1="100" y1="162" x2="100" y2="36"
        stroke={color} strokeWidth="4" strokeLinecap="round"
      />

      {/* Circuit traces */}
      <polyline
        points="100,141 128,141 150,121"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="100,152 135,152 160,134"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="100,162 131,162 148,172"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* PCB via endpoints */}
      <circle cx="150" cy="121" r="6.5" stroke={color} strokeWidth="3" />
      <circle cx="150" cy="121" r="2.5" fill={color} />
      <circle cx="160" cy="134" r="6.5" stroke={color} strokeWidth="3" />
      <circle cx="160" cy="134" r="2.5" fill={color} />
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
