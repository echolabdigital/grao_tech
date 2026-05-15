import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════
   GRÃO TECH — Design System v2
   Paleta sóbria, editorial, food-tech premium
══════════════════════════════════════════════ */
export const B = {
  // Dark UI — marrom quente, não cinza frio
  bg:        "#160800",
  surface:   "#1E0D02",
  surface2:  "#2A1206",
  line:      "rgba(255,255,255,.08)",
  lineHi:    "rgba(255,255,255,.15)",

  // Text on dark
  text:      "#FAF9F7",
  textMid:   "rgba(250,249,247,.52)",
  textLow:   "rgba(250,249,247,.26)",

  // Brand
  accent:    "#F26522",
  accentLo:  "rgba(242,101,34,.13)",
  gold:      "#F2B135",
  goldLo:    "rgba(242,177,53,.12)",

  // Light sections
  cream:     "#F9F5EE",
  cream2:    "#EEE8D8",
  latte:     "#D4B896",
  sand:      "#C4A47C",

  // Text on light
  ink:       "#0C0806",
  brown:     "#2C1206",
  muted:     "#7A6050",

  // Compat
  terra:     "#F26522",
  caramel:   "#D4851A",
  wheat:     "#F0D080",
  white:     "#F9F5EE",
  sage:      "#1B7A3E",
  sageLight: "#27A356",
};

export function useScroll() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

export function useInView(ref, threshold = 0.12) {
  const [v, setV] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold }
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return v;
}

export function Fade({ children, delay = 0, up = 28 }) {
  const ref = useRef(null);
  const v   = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity:    v ? 1 : 0,
      transform:  v ? "none" : `translateY(${up}px)`,
      transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export function Counter({ to, suffix = "", prefix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const v   = useInView(ref, 0.5);
  useEffect(() => {
    if (!v) return;
    let i = 0;
    const steps = 55, dur = 1600;
    const t = setInterval(() => {
      i++;
      setN(Math.round(to * i / steps));
      if (i >= steps) clearInterval(t);
    }, dur / steps);
    return () => clearInterval(t);
  }, [v, to]);
  return <span ref={ref}>{prefix}{n.toLocaleString("pt-BR")}{suffix}</span>;
}

const SYS    = `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
const SERIF  = `'Playfair Display', Georgia, 'Times New Roman', serif`;

export const FONTS = { sys: SYS, serif: SERIF };

export const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: ${B.cream};
    font-family: ${SYS};
    color: ${B.text};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes grain {
    0%,100%{ transform: translate(0,0) }
    20%{ transform: translate(-1%,-1%) }
    40%{ transform: translate(1%,1%) }
    60%{ transform: translate(-1%,1%) }
    80%{ transform: translate(1%,-1%) }
  }
  @keyframes floatY {
    0%,100%{ transform: translateY(0) }
    50%{ transform: translateY(-12px) }
  }
  @keyframes rotateSlow {
    from{ transform: rotate(0deg) }
    to{   transform: rotate(360deg) }
  }
  @keyframes pulsering {
    0%,100%{ opacity: 1 }
    50%{     opacity: .4 }
  }
  @keyframes scrolldot {
    0%,100%{ opacity:.7; transform: translateY(0)  }
    50%{     opacity:.2; transform: translateY(8px) }
  }
  @keyframes shimmer {
    0%{   background-position: -200% center }
    100%{ background-position:  200% center }
  }

  .gt-btn {
    display: inline-flex; align-items: center; gap: .5rem;
    padding: .7rem 1.8rem;
    font-family: ${SYS};
    font-size: .76rem; font-weight: 600;
    letter-spacing: .04em;
    cursor: pointer; text-decoration: none;
    border: none; transition: opacity .2s, transform .18s;
  }
  .gt-btn:hover { opacity: .88; transform: translateY(-2px); }
  .gt-btn:active { transform: translateY(0); }

  .gt-btn-primary {
    background: ${B.accent}; color: #fff;
  }
  .gt-btn-ghost {
    background: rgba(255,255,255,.07);
    color: ${B.text};
    border: 1px solid rgba(255,255,255,.12);
  }
  .gt-btn-ghost:hover { background: rgba(255,255,255,.12); }

  .label {
    font-family: ${SYS};
    font-size: .6rem; letter-spacing: .2em;
    text-transform: uppercase;
  }
`;
