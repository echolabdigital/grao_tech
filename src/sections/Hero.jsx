import { useState, useEffect } from "react";
import { B, Counter, FONTS } from "../App";
import { GTMark } from "../Logo";
import { SEGMENTS } from "../segments";

const METRICS = [
  { to: 520,     suf: "+", pre: "",   label: "negócios ativos"  },
  { to: 3100000, suf: "+", pre: "R$", label: "em vendas/mês"    },
  { to: 98,      suf: "%",     pre: "",  label: "satisfação clientes" },
];

export default function Hero({ segment, setSegment }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 2600);
    return () => clearInterval(t);
  }, []);

  const s = segment;

  return (
    <section style={{
      minHeight: "100vh",
      background: `linear-gradient(150deg, #2C1208 0%, #401A0C 55%, #2C1208 100%)`,
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "110px 1.5rem 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grain texture */}
      <div style={{
        position: "absolute", inset: "-50%",
        width: "200%", height: "200%",
        opacity: .028, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        animation: "grain 8s steps(2) infinite",
      }} />

      {/* Accent glow */}
      <div style={{
        position: "absolute", right: "8%", top: "15%",
        width: 560, height: 560, borderRadius: "50%",
        background: `radial-gradient(circle, ${s.accentDim}, transparent 65%)`,
        pointerEvents: "none",
        transition: "background .7s ease",
        animation: "floatY 10s ease-in-out infinite",
      }} />

      {/* Watermark */}
      <div style={{
        position: "absolute", right: "3%", top: "50%",
        transform: "translateY(-50%)", opacity: .04, pointerEvents: "none",
      }}>
        <GTMark size={360} color={s.accent} />
      </div>

      {/* Floating stat card */}
      <div style={{
        position: "absolute", right: "max(4%, 2rem)", bottom: "22%",
        background: B.surface,
        border: `1px solid ${s.accent}28`,
        padding: "1rem 1.4rem",
        display: "none",
        flexDirection: "column", gap: ".2rem",
        transition: "border-color .5s",
        boxShadow: `0 20px 60px rgba(0,0,0,.4)`,
      }} className="hero-stat-card">
        <div style={{ fontFamily: FONTS.serif, fontSize: "1.8rem", color: s.accent, lineHeight: 1, transition: "color .4s" }}>
          {s.stat.val}
        </div>
        <div style={{ fontFamily: FONTS.sys, fontSize: ".7rem", color: B.text, fontWeight: 600 }}>
          {s.stat.label}
        </div>
        <div style={{ fontFamily: FONTS.sys, fontSize: ".62rem", color: B.textLow }}>
          {s.stat.desc}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

        {/* Segment switcher — minimal tabs */}
        <div style={{
          display: "flex", gap: "0", marginBottom: "3.5rem",
          border: `1px solid ${B.line}`,
          width: "fit-content",
        }}>
          {SEGMENTS.map((seg, i) => {
            const active = segment.id === seg.id;
            return (
              <button
                key={seg.id}
                onClick={() => setSegment(seg)}
                style={{
                  fontFamily: FONTS.sys,
                  fontSize: ".7rem", fontWeight: active ? 600 : 400,
                  letterSpacing: ".02em",
                  padding: ".52rem 1.1rem",
                  border: "none",
                  borderRight: i < SEGMENTS.length - 1 ? `1px solid ${B.line}` : "none",
                  background: active ? s.accent : "transparent",
                  color: active ? "#fff" : B.textMid,
                  cursor: "pointer",
                  transition: "background .22s, color .22s",
                  display: "flex", alignItems: "center", gap: ".38rem",
                }}
              >
                <span style={{ fontSize: ".85rem", lineHeight: 1 }}>{seg.icon}</span>
                {seg.label}
              </button>
            );
          })}
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: FONTS.serif,
          fontSize: "clamp(2.8rem, 6.5vw, 5.6rem)",
          fontWeight: 400,
          lineHeight: 1.0,
          color: B.text,
          maxWidth: 820,
          marginBottom: "1.6rem",
          letterSpacing: "-.01em",
        }}>
          {s.headline.map((line, i) => (
            <span key={i} style={{ display: "block" }}>
              {i === s.accentWord
                ? <em style={{ color: s.accent, fontStyle: "italic", transition: "color .45s" }}>{line}</em>
                : line
              }
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: FONTS.sys,
          fontSize: "1rem",
          color: B.textMid,
          maxWidth: 520,
          lineHeight: 1.75,
          marginBottom: "2.4rem",
        }}>
          {s.sub}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
          <a
            href="#contato"
            className="gt-btn"
            style={{ background: s.accent, color: "#fff", transition: "opacity .2s, transform .18s" }}
          >
            {s.cta} →
          </a>
          <a href="#demo" className="gt-btn gt-btn-ghost">{s.ctaDemo}</a>
        </div>

        {/* Channel tags */}
        <div style={{
          display: "flex", alignItems: "center", gap: ".5rem",
          flexWrap: "wrap", marginBottom: "3.5rem",
        }}>
          <span style={{
            fontFamily: FONTS.sys, fontSize: ".68rem",
            color: B.textLow, marginRight: ".2rem",
          }}>Conectado com</span>
          {s.channels.map((ch, i) => (
            <span key={ch} style={{
              fontFamily: FONTS.sys, fontSize: ".65rem",
              fontWeight: i === tick % s.channels.length ? 600 : 400,
              padding: ".18rem .65rem",
              background: i === tick % s.channels.length ? s.accentDim : "rgba(255,255,255,.04)",
              color: i === tick % s.channels.length ? s.accent : B.textLow,
              border: "1px solid",
              borderColor: i === tick % s.channels.length ? `${s.accent}44` : B.line,
              transition: "all .35s",
            }}>{ch}</span>
          ))}
        </div>

        {/* Metrics strip */}
        <div style={{
          display: "flex", gap: "3rem", flexWrap: "wrap",
          paddingTop: "2rem",
          borderTop: `1px solid ${B.line}`,
        }}>
          {METRICS.map(m => (
            <div key={m.label}>
              <div style={{
                fontFamily: FONTS.serif, fontSize: "2.2rem",
                color: B.text, lineHeight: 1, letterSpacing: "-.02em",
              }}>
                <Counter to={m.to} suffix={m.suf} prefix={m.pre} />
              </div>
              <div style={{
                fontFamily: FONTS.sys, fontSize: ".6rem",
                color: B.textLow, letterSpacing: ".14em",
                textTransform: "uppercase", marginTop: ".35rem",
              }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 24, left: "50%",
        transform: "translateX(-50%)",
      }}>
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <rect x="1" y="1" width="18" height="30" rx="9"
            stroke="rgba(255,255,255,.15)" strokeWidth="1.5" />
          <circle cx="10" cy="9" r="3" fill={s.accent}
            style={{ animation: "scrolldot 2.2s ease-in-out infinite", transition: "fill .4s" }} />
        </svg>
      </div>
    </section>
  );
}
