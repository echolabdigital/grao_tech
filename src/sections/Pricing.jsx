import { useState } from "react";
import { B, Fade, FONTS } from "../App";

const PLANS = [
  {
    name: "Starter", price: 297, highlight: false,
    color: B.surface2,
    desc: "Para quem quer começar a vender online com o essencial.",
    cta: "Começar",
    features: [
      "Site de vendas com sua marca",
      "Cardápio digital com fotos",
      "Pedidos via WhatsApp",
      "PIX e cartão integrado",
      "Painel de gestão",
      "Suporte via chat",
    ],
    off: ["App iOS + Android", "Robô WhatsApp", "Clube de pontos"],
  },
  {
    name: "Profissional", price: 597, highlight: true,
    color: B.accent,
    desc: "A plataforma completa para quem quer escalar.",
    cta: "Quero o Profissional",
    features: [
      "Tudo do Starter",
      "App iOS + Android",
      "Robô WhatsApp 24h",
      "Integração iFood",
      "Clube de pontos e fidelidade",
      "Gestão de encomendas",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
    off: [],
  },
  {
    name: "Enterprise", price: null, highlight: false,
    color: B.surface2,
    desc: "Para redes, indústrias e operações multi-unidade.",
    cta: "Falar com especialista",
    features: [
      "Tudo do Profissional",
      "Múltiplas unidades",
      "PDV integrado",
      "Vendas B2B com tabela",
      "Fila de produção em TV",
      "API e integrações customizadas",
      "Gerente de conta dedicado",
    ],
    off: [],
  },
];

export default function Pricing() {
  const [anual, setAnual] = useState(false);

  return (
    <section id="planos" style={{
      background: B.bg,
      padding: "96px 1.5rem",
      borderTop: `1px solid ${B.line}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="label" style={{ color: B.accent, display: "block", marginBottom: ".7rem" }}>
              planos
            </span>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: B.text, fontWeight: 400, marginBottom: "1.4rem",
            }}>
              Transparente,{" "}
              <em style={{ color: B.accent }}>sem surpresas.</em>
            </h2>

            {/* Toggle anual/mensal */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: ".75rem",
              background: B.surface,
              border: `1px solid ${B.line}`,
              padding: ".35rem .8rem",
            }}>
              <span style={{
                fontFamily: FONTS.sys, fontSize: ".7rem",
                color: anual ? B.textLow : B.text, fontWeight: anual ? 400 : 600,
                transition: ".2s",
              }}>Mensal</span>
              <button onClick={() => setAnual(v => !v)} style={{
                width: 38, height: 20, borderRadius: 10,
                background: anual ? B.accent : "rgba(255,255,255,.12)",
                border: "none", cursor: "pointer",
                position: "relative", transition: ".25s",
              }}>
                <div style={{
                  position: "absolute", top: 2,
                  left: anual ? 19 : 2,
                  width: 16, height: 16, borderRadius: "50%",
                  background: "#fff", transition: "left .25s",
                }} />
              </button>
              <span style={{
                fontFamily: FONTS.sys, fontSize: ".7rem",
                color: anual ? B.text : B.textLow, fontWeight: anual ? 600 : 400,
                transition: ".2s",
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
          gap: "1px",
          background: B.line,
          border: `1px solid ${B.line}`,
        }}>
          {PLANS.map((p, i) => (
            <Fade key={p.name} delay={.08 * i}>
              <div style={{
                background: p.highlight ? p.color : B.surface,
                padding: "2.4rem 2rem",
                display: "flex", flexDirection: "column",
                position: "relative",
              }}>
                {p.highlight && (
                  <div style={{
                    position: "absolute", top: 0, left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    background: B.gold, color: B.ink,
                    fontFamily: FONTS.sys,
                    fontSize: ".58rem", fontWeight: 700,
                    letterSpacing: ".12em", textTransform: "uppercase",
                    padding: ".2rem 1rem", whiteSpace: "nowrap",
                  }}>Mais popular</div>
                )}

                <div style={{ marginBottom: "1.4rem" }}>
                  <div style={{
                    fontFamily: FONTS.sys, fontSize: ".65rem",
                    letterSpacing: ".12em", textTransform: "uppercase",
                    color: p.highlight ? "rgba(255,255,255,.55)" : B.textLow,
                    marginBottom: ".4rem",
                  }}>{p.name}</div>

                  <div style={{
                    fontFamily: FONTS.serif, fontSize: "2.1rem",
                    fontWeight: 700,
                    color: p.highlight ? "#fff" : B.text,
                    lineHeight: 1, display: "flex",
                    alignItems: "baseline", gap: ".2rem",
                  }}>
                    {p.price
                      ? `R$ ${(anual ? Math.round(p.price * .8) : p.price).toLocaleString("pt-BR")}`
                      : "Sob consulta"}
                    {p.price && (
                      <span style={{
                        fontFamily: FONTS.sys, fontSize: ".65rem",
                        color: p.highlight ? "rgba(255,255,255,.4)" : B.textLow,
                      }}>/mês</span>
                    )}
                  </div>
                  <p style={{
                    fontFamily: FONTS.sys, fontSize: ".72rem",
                    color: p.highlight ? "rgba(255,255,255,.55)" : B.textMid,
                    marginTop: ".4rem", lineHeight: 1.5,
                  }}>{p.desc}</p>
                </div>

                <ul style={{ listStyle: "none", flex: 1, marginBottom: "1.6rem" }}>
                  {p.features.map(f => (
                    <li key={f} style={{
                      fontFamily: FONTS.sys, fontSize: ".72rem",
                      color: p.highlight ? "rgba(255,255,255,.8)" : B.textMid,
                      padding: ".36rem 0",
                      display: "flex", alignItems: "center", gap: ".5rem",
                      borderBottom: `1px solid ${p.highlight ? "rgba(255,255,255,.08)" : B.line}`,
                    }}>
                      <span style={{ color: p.highlight ? "rgba(255,255,255,.5)" : B.gold, fontSize: ".7rem" }}>✓</span>
                      {f}
                    </li>
                  ))}
                  {p.off.map(f => (
                    <li key={f} style={{
                      fontFamily: FONTS.sys, fontSize: ".72rem",
                      color: "rgba(250,249,247,.18)", textDecoration: "line-through",
                      padding: ".36rem 0",
                      display: "flex", alignItems: "center", gap: ".5rem",
                      borderBottom: `1px solid ${B.line}`,
                    }}>
                      <span style={{ opacity: .3 }}>✗</span>{f}
                    </li>
                  ))}
                </ul>

                <a href="#contato" style={{
                  display: "block", textAlign: "center",
                  background: p.highlight ? "rgba(255,255,255,.14)" : B.accent,
                  border: p.highlight ? "1.5px solid rgba(255,255,255,.25)" : "none",
                  color: "#fff", padding: ".72rem",
                  fontFamily: FONTS.sys, fontSize: ".7rem",
                  fontWeight: 600, letterSpacing: ".04em",
                  textDecoration: "none", transition: "opacity .2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = ".82"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >{p.cta}</a>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
