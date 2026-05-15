import { B, Fade } from "../App";
import { GTMark } from "../Logo";
import { useSegment, SEGMENTS } from "../segments";

const FEATURES = [
  {
    emoji: "📋",
    title: "Painel de Pedidos",
    desc: "Todos os pedidos em tempo real, por canal, com status.",
  },
  {
    emoji: "🎨",
    title: "Cardápio Digital",
    desc: "Atualize itens, fotos e preços em segundos.",
  },
  {
    emoji: "🎂",
    title: "Gestão de Encomendas",
    desc: "Calendário de entrega, pagamento antecipado, alertas.",
  },
  {
    emoji: "⭐",
    title: "Clube de Fidelidade",
    desc: "Pontos automáticos a cada compra, sem cartãozinho.",
  },
];

const ORDERS = [
  { name: "Maria S.", item: "Bolo de Chocolate", status: "Em preparo", statusColor: "#D4851A", bg: "rgba(212,133,26,.12)" },
  { name: "João P.", item: "Pão de Queijo (12un)", status: "Aguardando", statusColor: "#8C7058", bg: "rgba(140,112,88,.1)" },
  { name: "Fernanda L.", item: "Croissant + Café", status: "Pronto", statusColor: "#2D7A50", bg: "rgba(45,122,80,.12)" },
];

function DashboardPreview({ accent }) {
  const navItems = ["Pedidos", "Cardápio", "Encomendas", "Clientes", "Relatórios"];
  return (
    <div style={{
      display: "flex", height: "100%", fontFamily: "'Trebuchet MS',sans-serif",
    }}>
      {/* Sidebar */}
      <div style={{
        width: 140, background: "#1A1A1A", flexShrink: 0,
        display: "flex", flexDirection: "column", padding: "14px 0",
      }}>
        {/* Logo area */}
        <div style={{
          padding: "0 12px 14px", borderBottom: "1px solid rgba(255,255,255,.07)",
          marginBottom: 8,
        }}>
          <GTMark size={24} />
        </div>
        {navItems.map((item, i) => (
          <div key={item} style={{
            padding: "7px 14px",
            background: i === 0 ? accent + "28" : "transparent",
            borderLeft: i === 0 ? `2px solid ${accent}` : "2px solid transparent",
            fontSize: ".6rem",
            color: i === 0 ? "#fff" : "rgba(255,255,255,.38)",
            fontWeight: i === 0 ? 700 : 400,
            letterSpacing: ".05em",
            cursor: "default",
            transition: ".15s",
          }}>
            {item}
          </div>
        ))}
      </div>

      {/* Main area */}
      <div style={{
        flex: 1, background: "#F8F5F0", padding: "14px",
        display: "flex", flexDirection: "column", gap: 10, overflow: "hidden",
      }}>
        {/* Stats */}
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { label: "Pedidos Hoje", value: "23" },
            { label: "Faturamento", value: "R$ 1.847" },
            { label: "Pendentes", value: "4" },
          ].map(stat => (
            <div key={stat.label} style={{
              flex: 1, background: "#fff",
              border: `1px solid ${B.latte}`,
              padding: "8px 10px",
              borderTop: `2.5px solid ${accent}`,
            }}>
              <div style={{
                fontSize: ".5rem", color: B.muted, letterSpacing: ".08em",
                textTransform: "uppercase", marginBottom: 3,
              }}>{stat.label}</div>
              <div style={{
                fontFamily: "Georgia,serif", fontSize: ".95rem",
                color: B.ink, fontWeight: 700,
              }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Orders table */}
        <div style={{
          flex: 1, background: "#fff", border: `1px solid ${B.latte}`,
          overflow: "hidden",
        }}>
          <div style={{
            padding: "7px 10px",
            borderBottom: `1px solid ${B.cream2}`,
            fontSize: ".52rem", color: B.muted,
            letterSpacing: ".1em", textTransform: "uppercase",
            display: "flex", gap: 8,
          }}>
            <span style={{ flex: 1 }}>Cliente</span>
            <span style={{ flex: 2 }}>Pedido</span>
            <span style={{ width: 70 }}>Status</span>
          </div>
          {ORDERS.map(order => (
            <div key={order.name} style={{
              padding: "6px 10px",
              borderBottom: `1px solid ${B.cream2}`,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ flex: 1, fontSize: ".6rem", color: B.ink, fontWeight: 600 }}>
                {order.name}
              </span>
              <span style={{ flex: 2, fontSize: ".6rem", color: B.muted }}>
                {order.item}
              </span>
              <span style={{
                width: 70, fontSize: ".52rem",
                color: order.statusColor, fontWeight: 700,
                background: order.bg,
                padding: "2px 5px",
                textAlign: "center",
              }}>
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BrowserMockup({ accent }) {
  return (
    <div style={{
      borderRadius: 10, overflow: "hidden",
      boxShadow: "0 24px 80px rgba(18,8,0,.22), 0 4px 16px rgba(18,8,0,.12)",
      border: "1px solid rgba(0,0,0,.15)",
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#2A2A2A", padding: "10px 14px",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map(color => (
            <div key={color} style={{
              width: 10, height: 10, borderRadius: "50%", background: color,
            }} />
          ))}
        </div>
        {/* URL bar */}
        <div style={{
          flex: 1, background: "rgba(255,255,255,.08)",
          borderRadius: 4, padding: "3px 10px",
          fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
          color: "rgba(255,255,255,.55)", letterSpacing: ".02em",
          display: "flex", alignItems: "center", gap: 5,
        }}>
          <span style={{ opacity: .4, fontSize: ".55rem" }}>🔒</span>
          app.graotech.com.br/painel
        </div>
      </div>
      {/* Dashboard content */}
      <div style={{ height: 320 }}>
        <DashboardPreview accent={accent} />
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const { segment } = useSegment();
  const seg = SEGMENTS[segment];

  return (
    <section style={{
      background: B.cream,
      padding: "100px 1.5rem",
      borderTop: `1px solid ${B.cream2}`,
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "5rem",
          alignItems: "center",
        }}>
          {/* Left column */}
          <Fade>
            <span style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
              letterSpacing: ".2em", textTransform: "uppercase",
              color: B.terra, display: "block", marginBottom: ".6rem",
            }}>O sistema</span>
            <h2 style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              color: B.ink, fontWeight: 400, lineHeight: 1.15,
              marginBottom: "2.2rem",
            }}>
              Conheça o painel{" "}
              <em style={{ color: B.terra }}>por dentro.</em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem", marginBottom: "2.4rem" }}>
              {FEATURES.map((f, i) => (
                <Fade key={f.title} delay={0.08 * i}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{
                      fontSize: "1.3rem", flexShrink: 0,
                      width: 42, height: 42,
                      background: B.cream2,
                      border: `1px solid ${B.latte}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {f.emoji}
                    </span>
                    <div>
                      <div style={{
                        fontFamily: "Georgia,serif", fontSize: ".95rem",
                        color: B.ink, fontWeight: 700, marginBottom: ".2rem",
                      }}>{f.title}</div>
                      <div style={{
                        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".76rem",
                        color: B.muted, lineHeight: 1.65,
                      }}>{f.desc}</div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>

            <a
              href="#demo"
              style={{
                display: "inline-flex", alignItems: "center", gap: ".5rem",
                background: B.terra, color: "#fff",
                padding: ".75rem 2rem",
                fontFamily: "'Trebuchet MS',sans-serif",
                fontSize: ".75rem", fontWeight: 700,
                letterSpacing: ".1em", textTransform: "uppercase",
                textDecoration: "none",
                transition: "background .2s, transform .2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Ver demonstração ao vivo →
            </a>
          </Fade>

          {/* Right column — browser mockup */}
          <Fade delay={0.18}>
            <BrowserMockup accent={seg.accent} />
          </Fade>
        </div>
      </div>
    </section>
  );
}
