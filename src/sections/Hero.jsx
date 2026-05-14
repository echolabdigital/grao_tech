import { useState, useEffect } from "react";
import { B, Counter } from "../App";
import { GTMark } from "../Logo";

const CHANNELS = ["iFood", "WhatsApp", "App Próprio", "PIX", "PDV"];

const METRICS = [
  { to: 520,     suf: "+",   pre: "",   label: "negócios ativos"  },
  { to: 3100000, suf: "+",   pre: "R$", label: "em vendas/mês"    },
  { to: 48,      suf: "h",   pre: "",   label: "para ir ao ar"    },
];

export default function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 2800);
    return () => clearInterval(t);
  }, []);

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

      {/* Glow orbs */}
      <div style={{
        position: "absolute", right: "-10%", top: "5%",
        width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(184,66,26,.18), transparent 65%)`,
        pointerEvents: "none", animation: "floatY 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", left: "-5%", bottom: "-10%",
        width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(45,92,62,.14), transparent 65%)`,
        pointerEvents: "none",
      }} />

      {/* Watermark mark */}
      <div style={{
        position: "absolute", right: "5%", top: "50%",
        transform: "translateY(-50%)", opacity: .055, pointerEvents: "none",
      }}>
        <GTMark size={320} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

        {/* Eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: ".6rem",
          border: "1px solid rgba(232,184,64,.35)",
          padding: ".28rem 1rem", marginBottom: "1.6rem",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: B.gold, display: "inline-block",
            animation: "pulsering 2s ease-in-out infinite",
          }} />
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".58rem",
            letterSpacing: ".22em", textTransform: "uppercase", color: B.wheat,
          }}>
            Tecnologia para padarias, cafés e conveniências
          </span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: "Georgia,'Times New Roman',serif",
          fontSize: "clamp(2.6rem,7vw,5.4rem)",
          color: B.cream, fontWeight: 400, lineHeight: 1.06,
          maxWidth: 820, marginBottom: "1.2rem",
        }}>
          Sua padaria no digital,{" "}
          <span style={{ color: B.wheat, fontStyle: "italic" }}>sem abrir mão</span>{" "}
          do que é seu.
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

          {CHANNELS.map((ch, i) => (
            <span key={ch} style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".68rem",
              fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase",
              padding: ".2rem .7rem",
              background:  i === tick % CHANNELS.length ? B.terra  : "rgba(255,255,255,.06)",
              color:       i === tick % CHANNELS.length ? "#fff"   : "rgba(250,243,230,.4)",
              border:      "1px solid",
              borderColor: i === tick % CHANNELS.length ? B.terra  : "rgba(255,255,255,.1)",
              transition:  "all .4s",
            }}>{ch}</span>
          ))}
        </div>

        <p style={{
          fontFamily: "'Trebuchet MS',sans-serif", fontSize: "1.02rem",
          color: "rgba(250,243,230,.65)", maxWidth: 520,
          lineHeight: 1.8, marginBottom: "2.5rem",
        }}>
          Site e app próprios, robô no WhatsApp, gestão de encomendas e clube de fidelidade —
          tudo integrado, tudo com a sua marca.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: ".9rem", flexWrap: "wrap" }}>
          <a href="#contato" className="gt-btn-primary">Quero meu sistema →</a>
          <a href="#solucoes" className="gt-btn-outline">Ver soluções</a>
        </div>

        {/* Metrics row */}
        <div style={{
          display: "flex", gap: "3.5rem", marginTop: "4rem",
          flexWrap: "wrap",
          borderTop: "1px solid rgba(255,255,255,.08)",
          paddingTop: "2rem",
        }}>
          {METRICS.map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "Georgia,serif", fontSize: "2.4rem",
                color: B.wheat, lineHeight: 1,
              }}>
                <Counter to={s.to} suffix={s.suf} prefix={s.pre} />
              </div>
              <div style={{
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".62rem",
                color: "rgba(250,243,230,.38)",
                letterSpacing: ".12em", textTransform: "uppercase",
                marginTop: ".4rem",
              }}>
                {s.label}
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
          <circle cx="10" cy="9" r="3" fill={B.gold}
            style={{ animation: "scrolldot 2s ease-in-out infinite" }} />
        </svg>
      </div>
    </section>
  );
}
