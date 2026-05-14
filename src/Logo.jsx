import { B } from "./App";

/* ══════════════════════════════════════════════
   GRÃO TECH — Logo System
   Mark: coffee-bean shape + circuit trace centre line + node dots
   Usage:
     <GTLogo variant="dark" size={48} />   — on light bg
     <GTLogo variant="light" size={48} />  — on dark bg
     <GTMark size={40} />                  — icon only (app icon, favicon)
══════════════════════════════════════════════ */
export function GTLogo({ variant = "dark", size = 48 }) {
  const onDark = variant === "dark";
  const txt    = onDark ? B.white  : B.ink;
  const sub    = onDark ? "rgba(255,250,240,.42)" : B.muted;
  const w      = size * 4.6;
  const ms     = size * 0.72;
  const bw     = ms * 0.55;
  const bh     = ms * 0.88;
  const cx     = ms * 0.5;
  const cy     = ms * 0.5;

  const bean = `
    M ${cx} ${cy - bh * 0.5}
    C ${cx + bw * 0.7} ${cy - bh * 0.35},
      ${cx + bw * 0.7} ${cy + bh * 0.35},
      ${cx} ${cy + bh * 0.5}
    C ${cx - bw * 0.7} ${cy + bh * 0.35},
      ${cx - bw * 0.7} ${cy - bh * 0.35},
      ${cx} ${cy - bh * 0.5} Z
  `;

  return (
    <svg
      width={w} height={size}
      viewBox={`0 0 ${w} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* ── Mark ── */}
      <g transform={`translate(${(size - ms) * 0.1}, ${(size - ms) * 0.06})`}>
        <path d={bean} fill={B.terra} />
        <line
          x1={cx} y1={cy - bh * 0.32}
          x2={cx} y2={cy + bh * 0.32}
          stroke={B.gold} strokeWidth={ms * 0.055} strokeLinecap="round"
        />
        {[-0.14, 0, 0.14].map((o, i) => (
          <circle
            key={i}
            cx={cx + (i === 1 ? ms * 0.1 : 0)}
            cy={cy + bh * o}
            r={ms * (i === 1 ? 0.065 : 0.048)}
            fill={B.gold}
          />
        ))}
        <path d={bean} fill="none" stroke="rgba(255,255,255,.15)" strokeWidth={ms * 0.04} />
      </g>

      {/* ── Wordmark ── */}
      <text
        x={ms * 0.9} y={size * 0.55}
        fontFamily="Georgia,'Times New Roman',serif"
        fontSize={size * 0.4} fontWeight="700"
        fill={txt} letterSpacing={size * 0.028}
      >
        GRÃO
      </text>

      {/* Rule */}
      <rect
        x={ms * 0.9} y={size * 0.6}
        width={size * 2.05} height={size * 0.038}
        fill={B.terra} opacity=".8"
      />

      {/* TECH */}
      <text
        x={ms * 0.9} y={size * 0.83}
        fontFamily="'Trebuchet MS',sans-serif"
        fontSize={size * 0.19} fontWeight="700"
        fill={sub} letterSpacing={size * 0.22}
      >
        TECH
      </text>

      {/* Tagline — only at ≥ 48px */}
      {size >= 48 && (
        <text
          x={ms * 0.9} y={size * 0.96}
          fontFamily="'Trebuchet MS',sans-serif"
          fontSize={size * 0.12}
          fill={onDark ? "rgba(255,250,240,.25)" : "rgba(18,8,0,.28)"}
          letterSpacing={size * 0.065}
        >
          DO GRÃO AO DIGITAL
        </text>
      )}
    </svg>
  );
}

/* ── Icon-only mark (app icon, favicon, seal) ── */
export function GTMark({ size = 40 }) {
  const ms = size;
  const cx = ms * 0.5, cy = ms * 0.5;
  const bw = ms * 0.55, bh = ms * 0.88;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path
        d={`M ${cx} ${cy-bh*.5} C ${cx+bw*.7} ${cy-bh*.35},${cx+bw*.7} ${cy+bh*.35},${cx} ${cy+bh*.5} C ${cx-bw*.7} ${cy+bh*.35},${cx-bw*.7} ${cy-bh*.35},${cx} ${cy-bh*.5} Z`}
        fill={B.terra}
      />
      <line
        x1={cx} y1={cy - bh * .32}
        x2={cx} y2={cy + bh * .32}
        stroke={B.gold} strokeWidth={ms * .055} strokeLinecap="round"
      />
      {[-0.14, 0, 0.14].map((o, i) => (
        <circle
          key={i}
          cx={cx + (i === 1 ? ms * .1 : 0)}
          cy={cy + bh * o}
          r={ms * (i === 1 ? .065 : .048)}
          fill={B.gold}
        />
      ))}
    </svg>
  );
}
