import { B, Fade, FONTS } from "../App";

const PLANS = [
  {
    name: "Essencial",
    setup: 1497,
    monthly: 597,
    highlight: false,
    desc: "Site, cardápio e pedidos no ar em até 7 dias.",
    cta: "Começar",
    features: [
      "Site de vendas com sua marca",
      "Cardápio digital completo",
      "Checkout PIX + cartão",
      "Pedidos via WhatsApp",
      "Painel de gestão completo",
      "Suporte via chat",
    ],
    off: ["Agente IA WhatsApp 24h", "Clube de fidelidade"],
  },
  {
    name: "Profissional",
    setup: 2997,
    monthly: 997,
    highlight: true,
    desc: "Plataforma completa para quem quer escalar e fidelizar.",
    cta: "Quero o Profissional",
    features: [
      "Tudo do Essencial",
      "Agente IA WhatsApp 24h",
      "Clube de pontos e fidelidade",
      "Gestão de encomendas",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
    off: [],
  },
  {
    name: "Enterprise",
    setup: null,
    monthly: null,
    highlight: false,
    desc: "Para redes, franquias e operações multi-unidade.",
    cta: "Falar com especialista",
    features: [
      "Tudo do Profissional",
      "Múltiplas unidades",
      "Integrações customizadas",
      "Gerente de conta dedicado",
    ],
    off: [],
  },
];

export default function Pricing() {
  return (
    <section id="planos" style={{
      background: B.cream,
      padding: "96px 1.5rem",
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
              color: B.ink, fontWeight: 400,
            }}>
              Investimento único.{" "}
              <em style={{ color: B.accent }}>Resultado contínuo.</em>
            </h2>
            <p style={{
              fontFamily: FONTS.sys, fontSize: ".85rem",
              color: B.muted, marginTop: ".8rem",
            }}>
              Setup pago uma vez. Mensalidade para manter, atualizar e crescer.
            </p>
          </div>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: B.latte,
          border: `1px solid ${B.latte}`,
        }}>
          {PLANS.map((p, i) => (
            <Fade key={p.name} delay={.08 * i}>
              <div style={{
                background: p.highlight ? B.accent : "#fff",
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

                {/* Plan name */}
                <div style={{
                  fontFamily: FONTS.sys, fontSize: ".62rem",
                  letterSpacing: ".14em", textTransform: "uppercase",
                  color: p.highlight ? "rgba(255,255,255,.6)" : B.muted,
                  marginBottom: ".5rem",
                }}>{p.name}</div>

                {/* Setup price */}
                <div style={{ marginBottom: ".3rem" }}>
                  {p.setup ? (
                    <div style={{
                      fontFamily: FONTS.serif, fontSize: "2.2rem",
                      fontWeight: 700, lineHeight: 1,
                      color: p.highlight ? "#fff" : B.ink,
                      display: "flex", alignItems: "baseline", gap: ".3rem",
                    }}>
                      R$ {p.setup.toLocaleString("pt-BR")}
                      <span style={{
                        fontFamily: FONTS.sys, fontSize: ".62rem",
                        color: p.highlight ? "rgba(255,255,255,.45)" : B.muted,
                        fontWeight: 400,
                      }}>setup</span>
                    </div>
                  ) : (
                    <div style={{
                      fontFamily: FONTS.serif, fontSize: "2rem",
                      color: p.highlight ? "#fff" : B.ink,
                    }}>Sob consulta</div>
                  )}
                </div>

                {/* Monthly */}
                {p.monthly && (
                  <div style={{
                    fontFamily: FONTS.sys, fontSize: ".75rem",
                    color: p.highlight ? "rgba(255,255,255,.55)" : B.muted,
                    marginBottom: ".5rem",
                  }}>
                    + R$ {p.monthly.toLocaleString("pt-BR")}/mês
                  </div>
                )}

                <p style={{
                  fontFamily: FONTS.sys, fontSize: ".72rem",
                  color: p.highlight ? "rgba(255,255,255,.6)" : B.muted,
                  lineHeight: 1.55, marginBottom: "1.4rem",
                }}>{p.desc}</p>

                {/* Features */}
                <ul style={{ listStyle: "none", flex: 1, marginBottom: "1.6rem" }}>
                  {p.features.map(f => (
                    <li key={f} style={{
                      fontFamily: FONTS.sys, fontSize: ".72rem",
                      color: p.highlight ? "rgba(255,255,255,.82)" : B.brown,
                      padding: ".36rem 0",
                      display: "flex", alignItems: "center", gap: ".5rem",
                      borderBottom: `1px solid ${p.highlight ? "rgba(255,255,255,.1)" : B.cream2}`,
                    }}>
                      <span style={{ color: p.highlight ? "rgba(255,255,255,.5)" : B.gold, fontSize: ".7rem" }}>✓</span>
                      {f}
                    </li>
                  ))}
                  {p.off.map(f => (
                    <li key={f} style={{
                      fontFamily: FONTS.sys, fontSize: ".72rem",
                      color: "rgba(0,0,0,.18)", textDecoration: "line-through",
                      padding: ".36rem 0",
                      display: "flex", alignItems: "center", gap: ".5rem",
                      borderBottom: `1px solid ${B.cream2}`,
                    }}>
                      <span style={{ opacity: .3 }}>✗</span>{f}
                    </li>
                  ))}
                </ul>

                <a href="#contato" style={{
                  display: "block", textAlign: "center",
                  background: p.highlight ? "rgba(255,255,255,.16)" : B.accent,
                  border: p.highlight ? "1.5px solid rgba(255,255,255,.28)" : "none",
                  color: "#fff", padding: ".75rem",
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

        <Fade delay={.2}>
          <p style={{
            textAlign: "center", marginTop: "1.8rem",
            fontFamily: FONTS.sys, fontSize: ".72rem",
            color: B.muted,
          }}>
            Sem fidelidade obrigatória · Suporte em português · No ar em até 7 dias
          </p>
        </Fade>
      </div>
    </section>
  );
}
