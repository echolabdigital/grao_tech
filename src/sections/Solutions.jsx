import { useState } from "react";
import { B, Fade } from "../App";

export const SOLUTIONS = [
  {
    icon: "🌐", tag: "canal direto", title: "Site + App de Vendas",
    color: B.terra,
    desc: "Cardápio online, checkout próprio com PIX. Zero taxa de marketplace.",
    highlights: ["Cardápio com fotos", "PIX e cartão integrado", "Push notifications"],
  },
  {
    icon: "🤖", tag: "automação", title: "Robô WhatsApp",
    color: "#128C7E",
    desc: "Atendimento e pedidos automáticos 24h. Envie promoções e campanhas.",
    highlights: ["Fluxo de pedidos", "Campanhas direcionadas", "Atendimento 24/7"],
  },
  {
    icon: "🎂", tag: "zero erro", title: "Gestão de Encomendas",
    color: B.brown,
    desc: "Receba encomendas pagas com antecedência, 24h, mesmo com a loja fechada.",
    highlights: ["Calendário de entregas", "Pagamento antecipado", "Alerta de produção"],
  },
  {
    icon: "⭐", tag: "fidelização", title: "Clube de Pontos",
    color: B.caramel,
    desc: "A cada compra, o cliente acumula pontos e troca por produtos. Sem cartãozinho.",
    highlights: ["Régua de comunicação", "Ofertas personalizadas", "Gamificação"],
  },
  {
    icon: "🏢", tag: "B2B", title: "Vendas para Empresas",
    color: B.sage,
    desc: "Forneça para restaurantes, hotéis e empresas com pedidos recorrentes.",
    highlights: ["Tabela B2B", "Pedidos recorrentes", "Relatório de carteira"],
  },
  {
    icon: "📊", tag: "eficiência", title: "Gestão de Produção",
    color: "#1A4D6B",
    desc: "Todos os pedidos num único painel. Nunca mais esqueça nada.",
    highlights: ["Fila em TV", "Impressão de etiquetas", "Controle de estoque"],
  },
];

export default function Solutions() {
  const [hov, setHov] = useState(null);

  return (
    <section id="solucoes" style={{ background: B.white, padding: "100px 1.5rem" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Fade>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", marginBottom: "4rem",
            flexWrap: "wrap", gap: "1rem",
          }}>
            <div>
              <span style={{
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
                letterSpacing: ".2em", textTransform: "uppercase",
                color: B.terra, display: "block", marginBottom: ".6rem",
              }}>Soluções</span>
              <h2 style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(2rem,4vw,3rem)",
                color: B.ink, fontWeight: 400, lineHeight: 1.1,
              }}>
                Uma plataforma,{" "}
                <em style={{ color: B.terra }}>todos os canais.</em>
              </h2>
            </div>
            <p style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".85rem",
              color: B.muted, lineHeight: 1.75, maxWidth: 340,
            }}>
              Cada solução resolve um desafio real.
              Use o que precisar, quando precisar.
            </p>
          </div>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          background: B.latte, gap: "1.5px", border: `1.5px solid ${B.latte}`,
        }}>
          {SOLUTIONS.map((s, i) => (
            <Fade key={s.title} delay={.05 * i}>
              <div
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  background: hov === i ? s.color : B.white,
                  padding: "2.2rem 2rem",
                  transition: "background .3s",
                  cursor: "default",
                }}
              >
                {/* tag row */}
                <div style={{
                  display: "flex", alignItems: "center",
                  gap: ".7rem", marginBottom: ".9rem",
                }}>
                  <span style={{ fontSize: "1.7rem" }}>{s.icon}</span>
                  <span style={{
                    fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".56rem",
                    letterSpacing: ".15em", textTransform: "uppercase",
                    background: hov === i ? "rgba(255,255,255,.18)" : B.cream2,
                    color:      hov === i ? "#fff" : B.muted,
                    padding: ".18rem .55rem", transition: ".3s",
                  }}>{s.tag}</span>
                </div>

                <h3 style={{
                  fontFamily: "Georgia,serif", fontSize: "1.2rem",
                  color: hov === i ? "#fff" : B.ink,
                  fontWeight: 700, marginBottom: ".6rem", transition: ".3s",
                }}>{s.title}</h3>

                <p style={{
                  fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".78rem",
                  color: hov === i ? "rgba(255,255,255,.75)" : B.muted,
                  lineHeight: 1.75, marginBottom: "1.1rem", transition: ".3s",
                }}>{s.desc}</p>

                <ul style={{ listStyle: "none" }}>
                  {s.highlights.map(h => (
                    <li key={h} style={{
                      fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".7rem",
                      color: hov === i ? "rgba(255,255,255,.7)" : B.brown,
                      padding: ".2rem 0",
                      display: "flex", alignItems: "center", gap: ".5rem",
                      borderBottom: `1px solid ${hov === i ? "rgba(255,255,255,.12)" : B.cream2}`,
                      transition: ".3s",
                    }}>
                      <span style={{ color: hov === i ? "rgba(255,255,255,.55)" : B.gold }}>✦</span>
                      {h}
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
