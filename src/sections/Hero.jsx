import { useState, useEffect, createContext, useContext } from "react";
import { B, Counter } from "../App";
import { GTMark } from "../Logo";
import { SEGMENTS } from "../segments";

export const SegmentCtx = createContext(SEGMENTS[0]);
export const useSegment = () => useContext(SegmentCtx);

const METRICS = [
  { to: 520,     suf: "+", pre: "",   label: "negócios ativos"  },
  { to: 3100000, suf: "+", pre: "R$", label: "em vendas/mês"    },
  { to: 48,      suf: "h", pre: "",   label: "para ir ao ar"    },
];

export default function Hero({ segment, setSegment }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 2800);
    return () => clearInterval(t);
  }, []);

  const s = segment;

  return (
    <section style={{
      minHeight: "100vh",
      background: `linear-gradient(150deg, ${B.ink} 0%, ${B.brown} 40%, #4A1E08 100%)`,
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "120px 1.5rem 90px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grain noise */}
      <div style={{
        position: "absolute", inset: "-50%",
        width: "200%", height: "200%",
        opacity: .035, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        animation: "grain 8s steps(2) infinite",
      }} />

      {/* Glow orb — muda cor com o segmento */}
      <div style={{
        position: "absolute", right: "-10%", top: "5%",
        width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, ${s.glow}, transparent 65%)`,
        pointerEvents: "none",
        transition: "background 0.6s ease",
        animation: "floatY 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", left: "-5%", bottom: "-10%",
        width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${s.glowAlt}, transparent 65%)`,
        pointerEvents: "none",
        transition: "background 0.6s ease",
      }} />

      {/* Watermark */}
      <div style={{
        position: "absolute", right: "5%", top: "50%",
        transform: "translateY(-50%)", opacity: .055, pointerEvents: "none",
      }}>
        <GTMark size={320} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

        {/* Segment switcher */}
        <div style={{
          display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: "2.2rem",
        }}>
          {SEGMENTS.map(seg => (
            <button
              key={seg.id}
              onClick={() => setSegment(seg)}
              style={{
                fontFamily: "'Trebuchet MS',sans-serif",
                fontSize: ".65rem", fontWeight: 700,
                letterSpacing: ".1em", textTransform: "uppercase",
                padding: ".38rem 1rem",
                border: "1.5px solid",
                borderColor: segment.id === seg.id ? seg.accent : "rgba(255,255,255,.15)",
                background: segment.id === seg.id ? seg.accent : "transparent",
                color: segment.id === seg.id ? "#fff" : "rgba(250,243,230,.45)",
                cursor: "pointer",
                transition: "all .25s",
                display: "flex", alignItems: "center", gap: ".4rem",
              }}
            >
              <span style={{ fontSize: ".9rem" }}>{seg.icon}</span>
              {seg.label}
            </button>
          ))}
        </div>

        {/* Eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: ".6rem",
          border: `1px solid ${s.accent}55`,
          padding: ".28rem 1rem", marginBottom: "1.6rem",
          transition: "border-color .4s",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: s.accent, display: "inline-block",
            transition: "background .4s",
            animation: "pulsering 2s ease-in-out infinite",
          }} />
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".58rem",
            letterSpacing: ".22em", textTransform: "uppercase", color: B.wheat,
          }}>
            Tecnologia para {SEGMENTS.map(sg => sg.label.toLowerCase()).join(", ")}
          </span>
        </div>

        {/* H1 — dinâmico */}
        <h1 style={{
          fontFamily: "Georgia,'Times New Roman',serif",
          fontSize: "clamp(2.4rem,6.5vw,5rem)",
          color: B.cream, fontWeight: 400, lineHeight: 1.08,
          maxWidth: 820, marginBottom: "1.2rem",
          transition: "opacity .3s",
        }}>
          {s.headline[0]}{" "}
          <em style={{ color: s.accent, fontStyle: "italic", transition: "color .4s" }}>
            {s.headline[1]}
          </em>{" "}
          {s.headline[2]}
        </h1>

        {/* Channel tags */}
        <div style={{
          display: "flex", alignItems: "center", gap: ".6rem",
          marginBottom: "1.6rem", flexWrap: "wrap",
        }}>
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif",
            fontSize: ".8rem", color: "rgba(250,243,230,.5)",
          }}>Conectado com</span>

          {s.channels.map((ch, i) => (
            <span key={ch} style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".68rem",
              fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase",
              padding: ".2rem .7rem",
              background:  i === tick % s.channels.length ? s.accent : "rgba(255,255,255,.06)",
              color:       i === tick % s.channels.length ? "#fff"   : "rgba(250,243,230,.4)",
              border:      "1px solid",
              borderColor: i === tick % s.channels.length ? s.accent : "rgba(255,255,255,.1)",
              transition:  "all .4s",
            }}>{ch}</span>
          ))}
        </div>

        <p style={{
          fontFamily: "'Trebuchet MS',sans-serif", fontSize: "1.02rem",
          color: "rgba(250,243,230,.65)", maxWidth: 520,
          lineHeight: 1.8, marginBottom: "2.5rem",
        }}>
          {s.sub}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: ".9rem", flexWrap: "wrap" }}>
          <a href="#contato"
            style={{
              background: s.accent, color: "#fff", border: "none",
              padding: ".75rem 2rem",
              fontFamily: "'Trebuchet MS',sans-serif",
              fontSize: ".75rem", fontWeight: 700,
              letterSpacing: ".12em", textTransform: "uppercase",
              cursor: "pointer", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: ".5rem",
              transition: "opacity .2s, transform .2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = ".88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            {s.cta}
          </a>
          <a href="#demo" className="gt-btn-outline">{s.ctaSecondary}</a>
        </div>

        {/* Metrics row */}
        <div style={{
          display: "flex", gap: "3.5rem", marginTop: "4rem",
          flexWrap: "wrap",
          borderTop: "1px solid rgba(255,255,255,.08)",
          paddingTop: "2rem",
        }}>
          {METRICS.map(m => (
            <div key={m.label}>
              <div style={{
                fontFamily: "Georgia,serif", fontSize: "2.4rem",
                color: B.wheat, lineHeight: 1,
              }}>
                <Counter to={m.to} suffix={m.suf} prefix={m.pre} />
              </div>
              <div style={{
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".62rem",
                color: "rgba(250,243,230,.38)",
                letterSpacing: ".12em", textTransform: "uppercase",
                marginTop: ".4rem",
              }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <rect x="1" y="1" width="18" height="30" rx="9"
            stroke="rgba(250,243,230,.2)" strokeWidth="1.5" />
          <circle cx="10" cy="9" r="3" fill={s.accent}
            style={{ animation: "scrolldot 2s ease-in-out infinite", transition: "fill .4s" }} />
        </svg>
      </div>
    </section>
  );
}
