import { B, Fade } from "../App";

const ORDERS = [
  { id: "#2841", item: "Pedido via App",      val: "R$ 87,50",  status: "Entregue",  dot: "#27AE60" },
  { id: "#2842", item: "Encomenda Especial",  val: "R$ 220,00", status: "Produção",  dot: "#E8B840" },
  { id: "#2843", item: "Pedido WhatsApp",     val: "R$ 43,90",  status: "Novo",      dot: "#3498DB" },
  { id: "#2844", item: "Clube de Pontos",     val: "R$ 0,00",   status: "Resgate",   dot: "#9B59B6" },
];

export default function ProductShowcase({ segment }) {
  const accent = segment.accent;

  return (
    <section style={{ background: B.ink, padding: "100px 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Bg glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: 700, height: 700, borderRadius: "50%",
        background: `radial-gradient(circle, ${segment.glowAlt}, transparent 65%)`,
        pointerEvents: "none", transition: "background .6s",
      }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <Fade>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
              letterSpacing: ".2em", textTransform: "uppercase",
              color: accent, display: "block", marginBottom: ".6rem",
              transition: "color .4s",
            }}>O sistema</span>
            <h2 style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(1.9rem,3.8vw,2.9rem)",
              color: B.cream, fontWeight: 400, lineHeight: 1.12,
            }}>
              Um painel.{" "}
              <em style={{ color: accent, transition: "color .4s" }}>Tudo sob controle.</em>
            </h2>
            <p style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".85rem",
              color: "rgba(250,243,230,.45)", maxWidth: 480,
              margin: "1rem auto 0", lineHeight: 1.75,
            }}>
              Pedidos, encomendas, fidelidade e relatórios — no mesmo lugar,
              em tempo real, de qualquer tela.
            </p>
          </div>
        </Fade>

        {/* Browser mockup */}
        <Fade delay={.1}>
          <div style={{
            maxWidth: 860, margin: "0 auto",
            borderRadius: 12,
            boxShadow: `0 40px 100px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.07)`,
            overflow: "hidden",
          }}>

            {/* Browser chrome */}
            <div style={{
              background: "#1C1C1E",
              padding: ".65rem 1rem",
              display: "flex", alignItems: "center", gap: ".6rem",
              borderBottom: "1px solid rgba(255,255,255,.06)",
            }}>
              <div style={{ display: "flex", gap: ".4rem" }}>
                {["#FF5F57","#FEBC2E","#28C840"].map(c => (
                  <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{
                flex: 1, background: "rgba(255,255,255,.07)",
                borderRadius: 5, padding: ".22rem .8rem",
                fontFamily: "monospace", fontSize: ".65rem",
                color: "rgba(255,255,255,.3)",
                display: "flex", alignItems: "center", gap: ".4rem",
              }}>
                <span style={{ color: accent, transition: "color .4s" }}>🔒</span>
                app.graotech.com.br/dashboard
              </div>
            </div>

            {/* Dashboard UI */}
            <div style={{ display: "flex", height: 480, background: "#0F0F10" }}>

              {/* Sidebar */}
              <div style={{
                width: 56, background: "#161618",
                borderRight: "1px solid rgba(255,255,255,.05)",
                display: "flex", flexDirection: "column", alignItems: "center",
                paddingTop: "1rem", gap: "1.2rem",
              }}>
                {[
                  { icon: "📊", active: true  },
                  { icon: "🛒", active: false },
                  { icon: "🎂", active: false },
                  { icon: "⭐", active: false },
                  { icon: "📦", active: false },
                  { icon: "📈", active: false },
                ].map((item, i) => (
                  <div key={i} style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: item.active ? accent + "22" : "transparent",
                    border: item.active ? `1px solid ${accent}44` : "1px solid transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: ".95rem", cursor: "default",
                    transition: "background .4s, border-color .4s",
                  }}>
                    {item.icon}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div style={{ flex: 1, padding: "1.4rem", overflow: "hidden" }}>

                {/* Top bar */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", marginBottom: "1.2rem",
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".62rem",
                      color: "rgba(255,255,255,.3)", letterSpacing: ".08em", textTransform: "uppercase",
                    }}>Hoje, {new Date().toLocaleDateString("pt-BR")}</div>
                    <div style={{
                      fontFamily: "Georgia,serif", fontSize: "1rem",
                      color: "#fff", fontWeight: 400,
                    }}>Dashboard</div>
                  </div>
                  <div style={{
                    display: "flex", gap: ".5rem", alignItems: "center",
                  }}>
                    <div style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: "#27AE60",
                      boxShadow: "0 0 0 3px rgba(39,174,96,.2)",
                    }} />
                    <span style={{
                      fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
                      color: "rgba(255,255,255,.3)",
                    }}>Sistema online</span>
                  </div>
                </div>

                {/* Metric cards */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: ".7rem", marginBottom: "1.2rem",
                }}>
                  {[
                    { label: "Pedidos hoje", val: "38",       sub: "+12% vs ontem",   color: accent  },
                    { label: "Faturamento",  val: "R$ 2.840", sub: "6 canais ativos",  color: "#27AE60" },
                    { label: "Novos clientes", val: "7",      sub: "Via app próprio",  color: "#3498DB" },
                  ].map(m => (
                    <div key={m.label} style={{
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid rgba(255,255,255,.06)",
                      borderRadius: 8, padding: ".8rem",
                    }}>
                      <div style={{
                        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".56rem",
                        color: "rgba(255,255,255,.3)", textTransform: "uppercase",
                        letterSpacing: ".08em", marginBottom: ".4rem",
                      }}>{m.label}</div>
                      <div style={{
                        fontFamily: "Georgia,serif", fontSize: "1.25rem",
                        color: m.color, lineHeight: 1, marginBottom: ".3rem",
                        transition: "color .4s",
                      }}>{m.val}</div>
                      <div style={{
                        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".55rem",
                        color: "rgba(255,255,255,.22)",
                      }}>{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Orders table */}
                <div style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.05)",
                  borderRadius: 8, overflow: "hidden",
                }}>
                  <div style={{
                    padding: ".65rem 1rem",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                    display: "flex", justifyContent: "space-between",
                  }}>
                    <span style={{
                      fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".62rem",
                      color: "rgba(255,255,255,.45)", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: ".08em",
                    }}>Últimos pedidos</span>
                    <span style={{
                      fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".58rem",
                      color: accent, transition: "color .4s",
                    }}>Ver todos →</span>
                  </div>
                  {ORDERS.map((o, i) => (
                    <div key={o.id} style={{
                      display: "flex", alignItems: "center",
                      padding: ".55rem 1rem", gap: "1rem",
                      borderBottom: i < ORDERS.length - 1 ? "1px solid rgba(255,255,255,.04)" : "none",
                    }}>
                      <span style={{
                        fontFamily: "monospace", fontSize: ".6rem",
                        color: "rgba(255,255,255,.25)", flexShrink: 0,
                      }}>{o.id}</span>
                      <span style={{
                        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".65rem",
                        color: "rgba(255,255,255,.6)", flex: 1,
                      }}>{o.item}</span>
                      <span style={{
                        fontFamily: "Georgia,serif", fontSize: ".72rem",
                        color: "rgba(255,255,255,.45)",
                      }}>{o.val}</span>
                      <div style={{
                        display: "flex", alignItems: "center", gap: ".35rem",
                        background: o.dot + "18",
                        padding: ".15rem .55rem", borderRadius: 20,
                      }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: o.dot }} />
                        <span style={{
                          fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".55rem",
                          color: o.dot, fontWeight: 700,
                        }}>{o.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
