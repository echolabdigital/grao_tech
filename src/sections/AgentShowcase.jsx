import { B, Fade, FONTS } from "../App";

const MSGS = [
  { from: "client", text: "Oi! Quero fazer um pedido pra retirar amanhã às 9h" },
  { from: "agent",  text: "Olá! 😊 Claro, aqui está o nosso cardápio atualizado. O que vai querer?" },
  { from: "client", text: "2 pães de queijo, 1 croissant de presunto e um café com leite grande" },
  { from: "agent",  text: "Perfeito! Resumo do pedido:\n• 2× Pão de queijo — R$ 8,00\n• 1× Croissant presunto — R$ 12,00\n• 1× Café com leite grande — R$ 9,00\n\nTotal: R$ 29,00 • Retirada: amanhã às 9h\n\nConfirma? Vou gerar o link de pagamento PIX." },
  { from: "client", text: "Confirmo!" },
  { from: "agent",  text: "✅ Pedido confirmado! Link PIX enviado. Assim que identificarmos o pagamento, você recebe a confirmação. Até amanhã! 🥐" },
];

export default function AgentShowcase() {
  return (
    <section style={{
      background: "#fff",
      padding: "96px 1.5rem",
      borderTop: `1px solid ${B.cream2}`,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem", alignItems: "center",
        }}>

          {/* Phone mockup */}
          <Fade>
            <div style={{
              display: "flex", justifyContent: "center",
            }}>
              <div style={{
                width: 300,
                background: "#FAFAFA",
                borderRadius: 24,
                boxShadow: "0 40px 100px rgba(0,0,0,.14), 0 0 0 1px rgba(0,0,0,.06)",
                overflow: "hidden",
                position: "relative",
              }}>
                {/* WhatsApp header */}
                <div style={{
                  background: "#075E54",
                  padding: ".85rem 1rem",
                  display: "flex", alignItems: "center", gap: ".7rem",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: B.accent,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: FONTS.serif, fontSize: ".95rem",
                    color: "#fff", fontWeight: 700, flexShrink: 0,
                  }}>GT</div>
                  <div>
                    <div style={{
                      fontFamily: FONTS.sys, fontSize: ".78rem",
                      fontWeight: 600, color: "#fff",
                    }}>Padaria Dom Trigo</div>
                    <div style={{
                      fontFamily: FONTS.sys, fontSize: ".6rem",
                      color: "rgba(255,255,255,.65)",
                      display: "flex", alignItems: "center", gap: ".3rem",
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#25D366", display: "inline-block" }} />
                      Agente IA • online agora
                    </div>
                  </div>
                </div>

                {/* Chat area */}
                <div style={{
                  background: "#ECE5DD",
                  padding: ".8rem",
                  minHeight: 360,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='.03'/%3E%3C/svg%3E")`,
                }}>
                  {MSGS.map((msg, i) => (
                    <Fade key={i} delay={i * 0.07}>
                      <div style={{
                        display: "flex",
                        justifyContent: msg.from === "client" ? "flex-end" : "flex-start",
                        marginBottom: ".5rem",
                      }}>
                        <div style={{
                          maxWidth: "82%",
                          background: msg.from === "client" ? "#DCF8C6" : "#fff",
                          padding: ".5rem .7rem",
                          borderRadius: msg.from === "client"
                            ? "10px 2px 10px 10px"
                            : "2px 10px 10px 10px",
                          boxShadow: "0 1px 2px rgba(0,0,0,.1)",
                        }}>
                          <p style={{
                            fontFamily: FONTS.sys, fontSize: ".72rem",
                            color: "#111", lineHeight: 1.55,
                            margin: 0, whiteSpace: "pre-line",
                          }}>{msg.text}</p>
                          <div style={{
                            textAlign: "right", marginTop: ".2rem",
                            fontFamily: FONTS.sys, fontSize: ".55rem",
                            color: "rgba(0,0,0,.35)",
                          }}>
                            {["8:02","8:02","8:03","8:03","8:04","8:04"][i]}
                            {msg.from === "client" && " ✓✓"}
                          </div>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>

                {/* Input bar */}
                <div style={{
                  background: "#F0F0F0",
                  padding: ".55rem .8rem",
                  display: "flex", alignItems: "center", gap: ".5rem",
                }}>
                  <div style={{
                    flex: 1, background: "#fff",
                    borderRadius: 20, padding: ".42rem .9rem",
                    fontFamily: FONTS.sys, fontSize: ".7rem",
                    color: "rgba(0,0,0,.3)",
                  }}>Mensagem</div>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: "#075E54",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: ".85rem",
                  }}>🎤</div>
                </div>
              </div>
            </div>
          </Fade>

          {/* Text */}
          <Fade delay={.12}>
            <span className="label" style={{ color: B.accent, display: "block", marginBottom: ".7rem" }}>
              agente de ia
            </span>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              color: B.ink, fontWeight: 400, lineHeight: 1.1,
              marginBottom: "1.2rem",
            }}>
              Seu WhatsApp vende,{" "}
              <em style={{ color: B.accent }}>24 horas por dia.</em>
            </h2>
            <p style={{
              fontFamily: FONTS.sys, fontSize: ".9rem",
              color: B.muted, lineHeight: 1.8, marginBottom: "2rem",
            }}>
              O Agente IA atende clientes, tira pedidos completos, confirma pagamento via PIX e responde dúvidas — tudo em linguagem natural, sem nenhuma intervenção humana.
            </p>

            {[
              ["Responde em segundos, qualquer horário",   "Sem cliente esperando, sem venda perdida"],
              ["Tira pedidos completos com confirmação",   "Valor, itens, horário e pagamento numa conversa"],
              ["Aprende com o cardápio da sua marca",       "Respostas com o tom e os produtos do seu negócio"],
              ["Campanhas e reativação automática",         "Mensagens para clientes inativos sem esforço manual"],
            ].map(([title, sub]) => (
              <div key={title} style={{
                display: "flex", gap: ".9rem",
                marginBottom: "1.1rem", alignItems: "flex-start",
              }}>
                <div style={{
                  width: 20, height: 20,
                  background: `${B.accent}14`,
                  border: `1px solid ${B.accent}28`,
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: ".6rem", color: B.accent,
                  marginTop: ".1rem",
                }}>✓</div>
                <div>
                  <div style={{
                    fontFamily: FONTS.sys, fontSize: ".82rem",
                    fontWeight: 600, color: B.ink, marginBottom: ".18rem",
                  }}>{title}</div>
                  <div style={{
                    fontFamily: FONTS.sys, fontSize: ".74rem",
                    color: B.muted, lineHeight: 1.55,
                  }}>{sub}</div>
                </div>
              </div>
            ))}
          </Fade>

        </div>
      </div>
    </section>
  );
}
