import { useState } from "react";
import { B, Fade, FONTS } from "../App";

const SOLUTIONS = [
  {
    icon: "🌐", tag: "canal direto",
    title: "Site + App de Vendas",
    color: "#E8622A",
    desc: "Cardápio online com checkout próprio. PIX, cartão e boleto integrados. Zero comissão de marketplace.",
    items: ["Cardápio com variações e preços", "PIX e cartão integrado", "Notificações para clientes"],
  },
  {
    icon: "✦", tag: "inteligência artificial",
    title: "Agente de IA",
    color: "#128C7E",
    desc: "Atende, tira pedidos e responde dúvidas no WhatsApp 24h — sem humano, sem demora, sem erro.",
    items: ["Pedidos automáticos no WhatsApp", "Campanhas e reativação de clientes", "Respostas em linguagem natural"],
  },
  {
    icon: "📅", tag: "zero erro",
    title: "Gestão de Encomendas",
    color: "#2C1206",
    desc: "Receba encomendas pagas com antecedência, qualquer hora — mesmo com a loja fechada.",
    items: ["Calendário de produção", "Pagamento antecipado online", "Alerta automático de entrega"],
  },
  {
    icon: "⭐", tag: "retenção",
    title: "Clube de Fidelidade",
    color: "#D4851A",
    desc: "A cada compra o cliente acumula pontos e troca por produtos. Sem cartãozinho físico.",
    items: ["Pontuação automática", "Ofertas personalizadas", "Régua de comunicação"],
  },
];

export default function Solutions() {
  const [hov, setHov] = useState(null);

  return (
    <section id="solucoes" style={{ background: "#fff", padding: "96px 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <Fade>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", marginBottom: "3.5rem",
            flexWrap: "wrap", gap: "1rem",
          }}>
            <div>
              <span className="label" style={{ color: B.accent, display: "block", marginBottom: ".7rem" }}>
                soluções
              </span>
              <h2 style={{
                fontFamily: FONTS.serif,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: B.ink, fontWeight: 400, lineHeight: 1.08,
              }}>
                Uma plataforma,{" "}
                <em style={{ color: B.accent }}>todos os canais.</em>
              </h2>
            </div>
            <p style={{
              fontFamily: FONTS.sys, fontSize: ".86rem",
              color: B.muted, lineHeight: 1.75, maxWidth: 360,
            }}>
              Cada módulo resolve um problema real.
              Ative o que precisar, quando precisar.
            </p>
          </div>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1px",
          background: B.cream2,
          outline: `1px solid ${B.cream2}`,
        }}>
          {SOLUTIONS.map((s, i) => (
            <Fade key={s.title} delay={.05 * i}>
              <div
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  background: hov === i ? s.color : "#fff",
                  padding: "2.4rem 2.2rem",
                  transition: "background .28s",
                  cursor: "default",
                }}
              >
                <div style={{
                  display: "flex", alignItems: "center",
                  gap: ".65rem", marginBottom: "1rem",
                }}>
                  <span style={{ fontSize: "1.6rem" }}>{s.icon}</span>
                  <span style={{
                    fontFamily: FONTS.sys, fontSize: ".58rem",
                    letterSpacing: ".14em", textTransform: "uppercase",
                    background: hov === i ? "rgba(255,255,255,.18)" : B.cream,
                    color: hov === i ? "#fff" : B.muted,
                    padding: ".18rem .55rem", transition: ".28s",
                  }}>{s.tag}</span>
                </div>

                <h3 style={{
                  fontFamily: FONTS.serif, fontSize: "1.15rem",
                  color: hov === i ? "#fff" : B.ink,
                  fontWeight: 700, marginBottom: ".65rem",
                  transition: ".28s",
                }}>{s.title}</h3>

                <p style={{
                  fontFamily: FONTS.sys, fontSize: ".79rem",
                  color: hov === i ? "rgba(255,255,255,.72)" : B.muted,
                  lineHeight: 1.75, marginBottom: "1.1rem",
                  transition: ".28s",
                }}>{s.desc}</p>

                <ul style={{ listStyle: "none" }}>
                  {s.items.map(item => (
                    <li key={item} style={{
                      fontFamily: FONTS.sys, fontSize: ".72rem",
                      color: hov === i ? "rgba(255,255,255,.68)" : B.brown,
                      padding: ".22rem 0",
                      display: "flex", alignItems: "center", gap: ".5rem",
                      borderBottom: `1px solid ${hov === i ? "rgba(255,255,255,.1)" : B.cream2}`,
                      transition: ".28s",
                    }}>
                      <span style={{
                        color: hov === i ? "rgba(255,255,255,.45)" : B.gold,
                        fontSize: ".65rem",
                      }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
