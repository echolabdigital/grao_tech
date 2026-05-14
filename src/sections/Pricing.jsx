import { useState } from "react";
import { B, Fade } from "../App";

const PLANS = [
  {
    name: "Starter", price: 297, highlight: false,
    color: B.brown,
    desc: "Para quem quer começar a vender online.",
    cta: "Começar",
    features: ["Site de vendas próprio", "Cardápio digital", "Pedidos via WhatsApp", "Painel de gestão", "Suporte por chat"],
    off: ["App mobile", "Robô WhatsApp", "Clube de pontos"],
  },
  {
    name: "Profissional", price: 597, highlight: true,
    color: B.terra,
    desc: "Para quem quer escalar com tecnologia completa.",
    cta: "Quero o Profissional",
    features: ["Tudo do Starter", "App iOS + Android", "Robô WhatsApp", "Integração iFood", "Clube de pontos", "Gestão de encomendas", "Relatórios avançados", "Suporte prioritário"],
    off: [],
  },
  {
    name: "Enterprise", price: null, highlight: false,
    color: B.ink,
    desc: "Redes, indústrias e distribuidoras.",
    cta: "Falar com especialista",
    features: ["Tudo do Profissional", "Múltiplas unidades", "PDV integrado", "Vendas B2B", "Produção em TV", "API personalizada", "Gerente dedicado"],
    off: [],
  },
];

export default function Pricing() {
  const [anual, setAnual] = useState(false);

  return (
    <section id="planos" style={{
      background: B.cream, padding: "100px 1.5rem",
      borderTop: `1px solid ${B.cream2}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
              letterSpacing: ".2em", textTransform: "uppercase",
              color: B.terra, display: "block", marginBottom: ".6rem",
            }}>Planos</span>
            <h2 style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              color: B.ink, fontWeight: 400, marginBottom: "1.2rem",
            }}>
              Transparente, sem surpresas.
            </h2>

            {/* Annual toggle */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: ".7rem",
              background: "#fff", border: `1px solid ${B.cream2}`, padding: ".3rem .65rem",
            }}>
              <span style={{
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".68rem",
                color: anual ? B.muted : B.ink, fontWeight: anual ? 400 : 700,
              }}>Mensal</span>
              <button onClick={() => setAnual(v => !v)} style={{
                width: 38, height: 20, borderRadius: 10,
                background: anual ? B.terra : B.latte,
                border: "none", cursor: "pointer",
                position: "relative", transition: ".3s",
              }}>
                <div style={{
                  position: "absolute", top: 2, left: anual ? 19 : 2,
                  width: 16, height: 16, borderRadius: "50%",
                  background: "#fff", transition: "left .3s",
                }} />
              </button>
              <span style={{
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".68rem",
                color: anual ? B.ink : B.muted, fontWeight: anual ? 700 : 400,
              }}>
                Anual{" "}
                <span style={{ color: B.sage, fontWeight: 700 }}>−20%</span>
              </span>
            </div>
          </div>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5px", background: B.latte, border: `1.5px solid ${B.latte}`,
        }}>
          {PLANS.map((p, i) => (
            <Fade key={p.name} delay={.08 * i}>
              <div style={{
                background: p.highlight ? p.color : B.white,
                padding: "2.4rem 2rem",
                display: "flex", flexDirection: "column",
                position: "relative",
              }}>
                {p.highlight && (
                  <div style={{
                    position: "absolute", top: 0, left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    background: B.gold, color: B.ink,
                    fontFamily: "'Trebuchet MS',sans-serif",
                    fontSize: ".58rem", fontWeight: 700,
                    letterSpacing: ".12em", textTransform: "uppercase",
                    padding: ".2rem 1rem", whiteSpace: "nowrap",
                  }}>Mais Popular</div>
                )}

                {/* Price block */}
                <div style={{ marginBottom: "1.4rem" }}>
                  <div style={{
                    fontFamily: "'Trebuchet MS',sans-serif",
                    fontSize: ".68rem", letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: p.highlight ? "rgba(255,255,255,.5)" : B.muted,
                    marginBottom: ".35rem",
                  }}>{p.name}</div>

                  <div style={{
                    fontFamily: "Georgia,serif", fontSize: "2rem",
                    fontWeight: 700,
                    color: p.highlight ? "#fff" : B.ink,
                    lineHeight: 1, display: "flex", alignItems: "baseline", gap: ".2rem",
                  }}>
                    {p.price
                      ? `R$ ${(anual ? Math.round(p.price * .8) : p.price).toLocaleString("pt-BR")}`
                      : "Sob consulta"}
                    {p.price && (
                      <span style={{
                        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".68rem",
                        color: p.highlight ? "rgba(255,255,255,.45)" : B.muted,
                      }}>/mês</span>
                    )}
                  </div>
                  <p style={{
                    fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".72rem",
                    color: p.highlight ? "rgba(255,255,255,.6)" : B.muted,
                    marginTop: ".4rem", lineHeight: 1.5,
                  }}>{p.desc}</p>
                </div>

                {/* Features */}
                <ul style={{ listStyle: "none", flex: 1, marginBottom: "1.6rem" }}>
                  {p.features.map(f => (
                    <li key={f} style={{
                      fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".72rem",
                      color: p.highlight ? "rgba(255,255,255,.82)" : B.brown,
                      padding: ".38rem 0",
                      display: "flex", alignItems: "center", gap: ".5rem",
                      borderBottom: `1px solid ${p.highlight ? "rgba(255,255,255,.1)" : B.cream2}`,
                    }}>
                      <span style={{ color: p.highlight ? "rgba(255,255,255,.6)" : B.gold }}>✓</span>
                      {f}
                    </li>
                  ))}
                  {p.off.map(f => (
                    <li key={f} style={{
                      fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".72rem",
                      color: "rgba(0,0,0,.2)", textDecoration: "line-through",
                      padding: ".38rem 0",
                      display: "flex", alignItems: "center", gap: ".5rem",
                      borderBottom: `1px solid ${B.cream2}`,
                    }}>
                      <span style={{ opacity: .35 }}>✗</span>{f}
                    </li>
                  ))}
                </ul>

                <a href="#contato" style={{
                  display: "block", textAlign: "center",
                  background: p.highlight ? "rgba(255,255,255,.14)" : B.terra,
                  border: p.highlight ? "1.5px solid rgba(255,255,255,.28)" : "none",
                  color: "#fff", padding: ".72rem",
                  fontFamily: "'Trebuchet MS',sans-serif",
                  fontSize: ".68rem", fontWeight: 700,
                  letterSpacing: ".1em", textTransform: "uppercase",
                  textDecoration: "none", transition: ".2s",
                }}>{p.cta}</a>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
