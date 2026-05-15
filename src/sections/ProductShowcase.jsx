import { B, Fade, FONTS } from "../App";

const ORDERS = [
  { id: "#3041", item: "Pedido via App",      val: "R$ 87,50",  status: "Entregue",  dot: "#16A34A" },
  { id: "#3042", item: "Encomenda · Sábado",  val: "R$ 220,00", status: "Produção",  dot: "#F2B135" },
  { id: "#3043", item: "WhatsApp · Mesa 4",   val: "R$ 53,90",  status: "Novo",      dot: "#3B82F6" },
  { id: "#3044", item: "Resgate clube",       val: "—",         status: "Fidelidade",dot: "#A855F7" },
];

export default function ProductShowcase({ segment: s }) {
  return (
    <section style={{
      background: B.bg, padding: "96px 1.5rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Bg glow */}
      <div style={{
        position: "absolute", top: "50%", right: "-5%",
        transform: "translateY(-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, ${s.accentGlow}, transparent 65%)`,
        pointerEvents: "none", transition: "background .7s",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <Fade>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="label" style={{ color: s.accent, display: "block", marginBottom: ".7rem", transition: "color .4s" }}>
              o sistema
            </span>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              color: B.text, fontWeight: 400, lineHeight: 1.1,
            }}>
              Um painel.{" "}
              <em style={{ color: s.accent, transition: "color .4s" }}>Tudo sob controle.</em>
            </h2>
            <p style={{
              fontFamily: FONTS.sys, fontSize: ".88rem",
              color: B.textMid, maxWidth: 460,
              margin: "1rem auto 0", lineHeight: 1.75,
            }}>
              Pedidos, encomendas, fidelidade e relatórios num só lugar — em tempo real, de qualquer tela.
            </p>
          </div>
        </Fade>

        {/* Browser mockup */}
        <Fade delay={.1}>
          <div style={{
            maxWidth: 880, margin: "0 auto",
            borderRadius: 10,
            border: `1px solid ${B.line}`,
            overflow: "hidden",
            boxShadow: `0 40px 100px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.04)`,
          }}>

            {/* Browser chrome */}
            <div style={{
              background: "#141416",
              padding: ".6rem 1rem",
              display: "flex", alignItems: "center", gap: ".7rem",
              borderBottom: `1px solid ${B.line}`,
            }}>
              <div style={{ display: "flex", gap: ".38rem" }}>
                {["#FF5F57","#FEBC2E","#28C840"].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{
                flex: 1, background: "rgba(255,255,255,.05)",
                borderRadius: 4, padding: ".2rem .75rem",
                fontFamily: "monospace", fontSize: ".62rem",
                color: B.textLow,
                display: "flex", alignItems: "center", gap: ".35rem",
              }}>
                <span style={{ color: "#16A34A", fontSize: ".7rem" }}>●</span>
                app.graotech.com.br/dashboard
              </div>
            </div>

            {/* Dashboard */}
            <div style={{ display: "flex", height: 460, background: "#0D0D0F" }}>

              {/* Sidebar */}
              <div style={{
                width: 52, background: "#111113",
                borderRight: `1px solid ${B.line}`,
                display: "flex", flexDirection: "column",
                alignItems: "center", paddingTop: "1rem", gap: "1rem",
              }}>
                {[
                  { icon: "📊", active: true  },
                  { icon: "🛒", active: false },
                  { icon: "📅", active: false },
                  { icon: "⭐", active: false },
                  { icon: "📦", active: false },
                ].map((item, i) => (
                  <div key={i} style={{
                    width: 34, height: 34, borderRadius: 7,
                    background: item.active ? `${s.accent}18` : "transparent",
                    border: item.active ? `1px solid ${s.accent}33` : "1px solid transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: ".85rem", cursor: "default",
                    transition: "background .4s, border-color .4s",
                  }}>
                    {item.icon}
                  </div>
                ))}
              </div>

              {/* Main */}
              <div style={{ flex: 1, padding: "1.4rem 1.6rem", overflow: "hidden" }}>

                {/* Top */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", marginBottom: "1.3rem",
                }}>
                  <div>
                    <div style={{
                      fontFamily: FONTS.sys, fontSize: ".58rem",
                      color: B.textLow, textTransform: "uppercase",
                      letterSpacing: ".1em",
                    }}>Hoje · 15 mai 2026</div>
                    <div style={{
                      fontFamily: FONTS.serif, fontSize: "1.05rem",
                      color: B.text,
                    }}>Dashboard</div>
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: ".4rem",
                    background: "rgba(22,163,74,.1)",
                    border: "1px solid rgba(22,163,74,.2)",
                    padding: ".22rem .7rem", borderRadius: 20,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A" }} />
                    <span style={{ fontFamily: FONTS.sys, fontSize: ".58rem", color: "#16A34A" }}>
                      Sistema online
                    </span>
                  </div>
                </div>

                {/* Metric cards */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: ".7rem", marginBottom: "1.3rem",
                }}>
                  {[
                    { label: "Pedidos hoje",    val: "38",        sub: "+12% vs ontem",  color: s.accent },
                    { label: "Faturamento",     val: "R$ 2.840",  sub: "6 canais ativos",color: "#16A34A" },
                    { label: "Novos clientes",  val: "7",         sub: "via app próprio", color: "#3B82F6" },
                  ].map(m => (
                    <div key={m.label} style={{
                      background: "rgba(255,255,255,.03)",
                      border: `1px solid ${B.line}`,
                      borderRadius: 7, padding: ".9rem",
                    }}>
                      <div style={{
                        fontFamily: FONTS.sys, fontSize: ".56rem",
                        color: B.textLow, textTransform: "uppercase",
                        letterSpacing: ".09em", marginBottom: ".4rem",
                      }}>{m.label}</div>
                      <div style={{
                        fontFamily: FONTS.serif, fontSize: "1.3rem",
                        color: m.color, lineHeight: 1,
                        marginBottom: ".28rem",
                        transition: "color .4s",
                      }}>{m.val}</div>
                      <div style={{
                        fontFamily: FONTS.sys, fontSize: ".55rem",
                        color: B.textLow,
                      }}>{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Orders table */}
                <div style={{
                  background: "rgba(255,255,255,.025)",
                  border: `1px solid ${B.line}`,
                  borderRadius: 7, overflow: "hidden",
                }}>
                  <div style={{
                    padding: ".6rem 1rem",
                    borderBottom: `1px solid ${B.line}`,
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <span style={{
                      fontFamily: FONTS.sys, fontSize: ".6rem",
                      color: B.textMid, fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: ".09em",
                    }}>Últimos pedidos</span>
                    <span style={{
                      fontFamily: FONTS.sys, fontSize: ".58rem",
                      color: s.accent, cursor: "default",
                      transition: "color .4s",
                    }}>Ver todos →</span>
                  </div>
                  {ORDERS.map((o, i) => (
                    <div key={o.id} style={{
                      display: "flex", alignItems: "center",
                      padding: ".52rem 1rem", gap: ".9rem",
                      borderBottom: i < ORDERS.length - 1 ? `1px solid rgba(255,255,255,.03)` : "none",
                    }}>
                      <span style={{
                        fontFamily: "monospace", fontSize: ".58rem",
                        color: B.textLow, flexShrink: 0, width: 38,
                      }}>{o.id}</span>
                      <span style={{
                        fontFamily: FONTS.sys, fontSize: ".64rem",
                        color: B.textMid, flex: 1,
                      }}>{o.item}</span>
                      <span style={{
                        fontFamily: FONTS.serif, fontSize: ".7rem",
                        color: "rgba(250,249,247,.38)",
                      }}>{o.val}</span>
                      <div style={{
                        display: "flex", alignItems: "center", gap: ".3rem",
                        background: `${o.dot}14`,
                        padding: ".13rem .5rem", borderRadius: 20,
                      }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: o.dot }} />
                        <span style={{
                          fontFamily: FONTS.sys, fontSize: ".54rem",
                          color: o.dot, fontWeight: 600,
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
