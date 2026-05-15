import { B } from "./App";

/*
  Grão Tech — Logo System v2

  Marca: grão de café / trigo estilizado
  O grão é a metáfora central — padaria (trigo), café (grão),
  restaurante (ingrediente), adega (semente de uva).

  GTLogo  — wordmark completo
  GTMark  — símbolo isolado (ícone, favicon)
*/

export function GTMark({ size = 40, color = B.accent, bg = "transparent" }) {
  const s = size;
  const cx = s / 2, cy = s / 2;
  const rx = s * 0.28, ry = s * 0.44;

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      {bg !== "transparent" && (
        <rect width={s} height={s} rx={s * 0.22} fill={bg} />
      )}
      {/* Grão externo (halo) */}
      <ellipse cx={cx} cy={cy} rx={rx + s * 0.05} ry={ry + s * 0.05}
        fill={color} opacity="0.14" />
      {/* Grão principal */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={color} />
      {/* Linha central (sulco do grão) */}
      <line
        x1={cx} y1={cy - ry * 0.66}
        x2={cx} y2={cy + ry * 0.66}
        stroke="rgba(255,255,255,.55)" strokeWidth={s * 0.044} strokeLinecap="round"
      />
      {/* Nó superior */}
      <circle cx={cx} cy={cy - ry * 0.28} r={s * 0.048} fill="rgba(255,255,255,.7)" />
      {/* Nó inferior */}
      <circle cx={cx} cy={cy + ry * 0.28} r={s * 0.038} fill="rgba(255,255,255,.5)" />
    </svg>
  );
}

export function GTLogo({ variant = "light", size = 40 }) {
  const onLight = variant === "light";
  const textColor = onLight ? B.ink : B.text;
  const subColor  = onLight ? B.muted : B.textLow;
  const markColor = B.accent;

  const markSize = size * 0.9;
  const gap      = size * 0.55;
  const totalW   = markSize + gap + size * 3.8;

  return (
    <svg
      width={totalW} height={size}
      viewBox={`0 0 ${totalW} ${size}`}
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* Mark */}
      <g transform={`translate(0, ${(size - markSize) / 2})`}>
        <GTMarkInline size={markSize} color={markColor} />
      </g>

      {/* GRÃO — serif bold */}
      <text
        x={markSize + gap}
        y={size * 0.58}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={size * 0.42}
        fontWeight="700"
        fill={textColor}
        letterSpacing="0.01em"
      >
        GRÃO
      </text>

      {/* Linha divisória */}
      <rect
        x={markSize + gap}
        y={size * 0.63}
        width={size * 2.1}
        height={size * 0.032}
        fill={markColor}
        opacity="0.7"
        rx="1"
      />

      {/* TECH — sans, espaçado */}
      <text
        x={markSize + gap}
        y={size * 0.85}
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize={size * 0.2}
        fontWeight="500"
        fill={subColor}
        letterSpacing={size * 0.195}
      >
        TECH
      </text>
    </svg>
  );
}

/* Versão inline usada dentro de GTLogo (sem nested SVG) */
function GTMarkInline({ size, color }) {
  const s = size;
  const cx = s / 2, cy = s / 2;
  const rx = s * 0.28, ry = s * 0.44;
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={rx + s * 0.05} ry={ry + s * 0.05}
        fill={color} opacity="0.14" />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={color} />
      <line
        x1={cx} y1={cy - ry * 0.66}
        x2={cx} y2={cy + ry * 0.66}
        stroke="rgba(255,255,255,.55)" strokeWidth={s * 0.044} strokeLinecap="round"
      />
      <circle cx={cx} cy={cy - ry * 0.28} r={s * 0.048} fill="rgba(255,255,255,.7)" />
      <circle cx={cx} cy={cy + ry * 0.28} r={s * 0.038} fill="rgba(255,255,255,.5)" />
    </g>
  );
}
