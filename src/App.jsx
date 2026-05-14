import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════
   BRAND TOKENS — GRÃO TECH v1.0
   by NewtonIA
══════════════════════════════════════════════ */
export const B = {
  // Core
  ink:      "#120800",
  brown:    "#2E1206",
  terra:    "#B8421A",
  caramel:  "#D4851A",
  gold:     "#E8B840",
  wheat:    "#F0D080",
  // Light
  cream:    "#FAF3E6",
  cream2:   "#F0E6CE",
  latte:    "#D4C0A0",
  sand:     "#C8B090",
  // Accent
  sage:     "#2D5C3E",
  sageLight:"#3E7D56",
  // Neutral
  muted:    "#8C7058",
  white:    "#FFFCF5",
};

/* ── Scroll position ── */
export function useScroll() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

/* ── Intersection observer ── */
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

/* ── Fade-in on scroll ── */
export function Fade({ children, delay = 0, up = 32 }) {
  const ref = useRef(null);
  const v   = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity:   v ? 1 : 0,
      transform: v ? "none" : `translateY(${up}px)`,
      transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

/* ── Animated counter ── */
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

/* ── Global CSS (inject once at root) ── */
export const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${B.cream}; font-family: 'Trebuchet MS', sans-serif; overflow-x: hidden; }

  @keyframes grain {
    0%,100%{ transform: translate(0,0) }
    20%{ transform: translate(-1%,-1%) }
    40%{ transform: translate(1%,1%) }
    60%{ transform: translate(-1%,1%) }
    80%{ transform: translate(1%,-1%) }
  }
  @keyframes floatY {
    0%,100%{ transform: translateY(0) }
    50%{ transform: translateY(-10px) }
  }
  @keyframes rotateSlow {
    from{ transform: rotate(0deg) }
    to{   transform: rotate(360deg) }
  }
  @keyframes pulsering {
    0%,100%{ box-shadow: 0 0 0 3px rgba(232,184,64,.25) }
    50%{     box-shadow: 0 0 0 8px rgba(232,184,64,.07)  }
  }
  @keyframes scrolldot {
    0%,100%{ opacity:.8; transform: translateY(0)  }
    50%{     opacity:.2; transform: translateY(8px) }
  }

  .gt-btn-primary {
    background: ${B.terra}; color: #fff; border: none;
    padding: .75rem 2rem;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: .75rem; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    cursor: pointer; text-decoration: none;
    display: inline-flex; align-items: center; gap: .5rem;
    transition: background .2s, transform .2s;
  }
  .gt-btn-primary:hover { background: ${B.brown}; transform: translateY(-2px); }

  .gt-btn-outline {
    background: transparent; color: ${B.cream};
    border: 1.5px solid rgba(250,243,230,.3);
    padding: .72rem 1.8rem;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: .73rem; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase;
    cursor: pointer; text-decoration: none;
    display: inline-flex; align-items: center;
    transition: border-color .2s, color .2s;
  }
  .gt-btn-outline:hover { border-color: ${B.gold}; color: ${B.gold}; }
`;
