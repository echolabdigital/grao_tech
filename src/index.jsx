import { useState } from "react";
import { GLOBAL_CSS, B, Fade, FONTS } from "./App";
import { SEGMENTS } from "./segments";
import { GTMark }   from "./Logo";
import Nav           from "./sections/Nav";
import Hero          from "./sections/Hero";
import PainPoints    from "./sections/PainPoints";
import Solutions     from "./sections/Solutions";
import ProductShowcase from "./sections/ProductShowcase";
import DemoAccess    from "./sections/DemoAccess";
import Pricing       from "./sections/Pricing";
import Contact       from "./sections/Contact";
import Footer        from "./sections/Footer";

export default function GraoTech() {
  const [segment, setSegment] = useState(SEGMENTS[0]);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <Nav />
      <Hero segment={segment} setSegment={setSegment} />
      <ProofStrip />
      <PainPoints segment={segment} />
      <Solutions />
      <HowItWorks />
      <ProductShowcase segment={segment} />
      <IntegrationsHub />
      <Testimonials segment={segment} />
      <DemoAccess segment={segment} />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

/* ── Proof Strip ─────────────────────────────── */
function ProofStrip() {
  const items = ["iFood", "WhatsApp Business", "PIX", "Stone", "App Store", "Google Play"];
  return (
    <div style={{
      background: "#fff",
      borderTop: `1px solid ${B.cream2}`,
      borderBottom: `1px solid ${B.cream2}`,
      padding: ".85rem 1.5rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center",
        gap: "2.5rem", flexWrap: "wrap", justifyContent: "center",
      }}>
        <span style={{
          fontFamily: FONTS.sys, fontSize: ".58rem",
          letterSpacing: ".18em", textTransform: "uppercase",
          color: B.muted,
        }}>Compatível com</span>
        {items.map(p => (
          <span key={p} style={{
            fontFamily: FONTS.sys, fontSize: ".72rem",
            fontWeight: 500, color: B.brown, opacity: .65,
          }}>{p}</span>
        ))}
      </div>
    </div>
  );
}

/* ── How It Works ────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Demo em 24h",
      desc: "Demonstração gratuita com especialista. Entendemos o seu negócio antes de mostrar qualquer proposta.",
    },
    {
      n: "02",
      title: "Configuração da marca",
      desc: "Personalizamos o sistema com o seu logo, cores, cardápio e integrações. Tudo com a sua identidade.",
    },
    {
      n: "03",
      title: "No ar em 48h",
      desc: "Site, app e WhatsApp publicados. Seus clientes já podem pedir no primeiro fim de semana.",
    },
    {
      n: "04",
      title: "Crescimento contínuo",
      desc: "Clube de fidelidade, campanhas automáticas e relatórios para vender mais a cada mês.",
    },
  ];

  return (
    <section id="como" style={{
      background: "#fff",
      padding: "96px 1.5rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <span className="label" style={{ color: B.accent, display: "block", marginBottom: ".7rem" }}>
            como funciona
          </span>
          <h2 style={{
            fontFamily: FONTS.serif,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: B.ink, fontWeight: 400, lineHeight: 1.08,
            marginBottom: "4rem",
          }}>
            Do zero ao digital em{" "}
            <em style={{ color: B.accent }}>menos de 48 horas.</em>
          </h2>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          position: "relative",
        }}>
          {steps.map((s, i) => (
            <Fade key={s.n} delay={.08 * i}>
              <div style={{
                padding: "2.4rem 2rem",
                borderLeft: i === 0 ? "none" : `1px solid ${B.cream2}`,
                position: "relative",
              }}>
                {i > 0 && (
                  <div style={{
                    position: "absolute", left: -5, top: "2.8rem",
                    width: 9, height: 9, borderRadius: "50%",
                    background: "#fff",
                    border: `2px solid ${B.accent}`,
                  }} />
                )}

                <div style={{
                  fontFamily: FONTS.serif, fontSize: "3rem",
                  color: B.cream2, lineHeight: 1,
                  marginBottom: ".8rem", userSelect: "none",
                }}>{s.n}</div>

                <div style={{
                  width: 24, height: 2,
                  background: B.accent,
                  marginBottom: "1rem",
                }} />

                <h3 style={{
                  fontFamily: FONTS.serif, fontSize: "1.1rem",
                  color: B.ink, fontWeight: 700,
                  marginBottom: ".6rem",
                }}>{s.title}</h3>

                <p style={{
                  fontFamily: FONTS.sys, fontSize: ".8rem",
                  color: B.muted, lineHeight: 1.8,
                }}>{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Integrations Hub ────────────────────────── */
function IntegrationsHub() {
  const nodes = [
    { icon: "🛵", label: "iFood",    angle: 0,   color: "#EA1D2C" },
    { icon: "🌐", label: "Site",     angle: 72,  color: B.accent  },
    { icon: "📱", label: "WhatsApp", angle: 144, color: "#25D366" },
    { icon: "🖥️", label: "PDV",      angle: 216, color: B.gold    },
    { icon: "💳", label: "PIX",      angle: 288, color: "#32BCAD" },
  ];

  return (
    <section style={{
      background: `linear-gradient(160deg, #1C0800, #2E1206)`,
      padding: "96px 1.5rem",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem", alignItems: "center",
        }}>
          <Fade>
            <span className="label" style={{ color: B.accent, display: "block", marginBottom: ".7rem" }}>
              integrações
            </span>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
              color: B.text, fontWeight: 400, lineHeight: 1.1,
              marginBottom: "1rem",
            }}>
              Tudo conectado,{" "}
              <em style={{ color: B.gold }}>tudo no mesmo lugar.</em>
            </h2>
            <p style={{
              fontFamily: FONTS.sys, fontSize: ".86rem",
              color: B.textMid, lineHeight: 1.8, marginBottom: "2rem",
            }}>
              Atualizou o cardápio aqui, atualizou em todos os canais automaticamente. Sem trabalho duplicado.
            </p>

            {[
              { icon: "🛵", name: "iFood",            desc: "Sync de cardápio e pedidos",   color: "#EA1D2C" },
              { icon: "📱", name: "WhatsApp Business", desc: "Robô de atendimento 24h",      color: "#25D366" },
              { icon: "🏧", name: "PDV / ERP",         desc: "Preços e estoque em tempo real",color: B.gold   },
              { icon: "💳", name: "PIX + Cartão",      desc: "Checkout sem intermediários",  color: "#32BCAD" },
            ].map(it => (
              <div
                key={it.name}
                style={{
                  display: "flex", alignItems: "center", gap: ".9rem",
                  padding: ".75rem 1rem",
                  background: "rgba(255,255,255,.03)",
                  border: `1px solid ${B.line}`,
                  marginBottom: ".5px",
                  transition: ".2s", cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${it.color}33`;
                  e.currentTarget.style.background  = "rgba(255,255,255,.055)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = B.line;
                  e.currentTarget.style.background  = "rgba(255,255,255,.03)";
                }}
              >
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{it.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: FONTS.sys, fontSize: ".78rem", fontWeight: 600, color: B.text }}>{it.name}</div>
                  <div style={{ fontFamily: FONTS.sys, fontSize: ".64rem", color: B.textLow }}>{it.desc}</div>
                </div>
                <div style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#16A34A",
                  boxShadow: "0 0 0 3px rgba(22,163,74,.15)",
                  flexShrink: 0,
                }} />
              </div>
            ))}
          </Fade>

          {/* Orbit */}
          <Fade delay={.2}>
            <div style={{
              position: "relative", height: 420,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {[140, 195].map((r, ri) => (
                <div key={r} style={{
                  position: "absolute", width: r * 2, height: r * 2,
                  borderRadius: "50%",
                  border: `1px dashed rgba(255,255,255,${ri === 0 ? .06 : .03})`,
                  animation: `rotateSlow ${22 + ri * 9}s linear infinite${ri === 1 ? " reverse" : ""}`,
                }} />
              ))}

              {/* Center mark */}
              <div style={{
                position: "absolute", zIndex: 3,
                width: 80, height: 80, borderRadius: "50%",
                background: `linear-gradient(135deg, ${B.accent}, #2C1206)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 0 0 12px ${B.accentLo}, 0 0 0 28px rgba(232,98,42,.04)`,
              }}>
                <GTMark size={40} color="#fff" />
              </div>

              {/* Node dots */}
              {nodes.map(n => {
                const rad = n.angle * Math.PI / 180;
                const nx = 140 * Math.cos(rad), ny = 140 * Math.sin(rad);
                return (
                  <div
                    key={n.label}
                    style={{
                      position: "absolute", zIndex: 4,
                      left: `calc(50% + ${nx}px - 30px)`,
                      top: `calc(50% + ${ny}px - 30px)`,
                      width: 60, height: 60, borderRadius: "50%",
                      background: "rgba(0,0,0,.5)",
                      border: `1.5px solid ${n.color}33`,
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      gap: 2, transition: ".2s", cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = n.color;
                      e.currentTarget.style.background  = `${n.color}20`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = `${n.color}33`;
                      e.currentTarget.style.background  = "rgba(0,0,0,.5)";
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{n.icon}</span>
                    <span style={{
                      fontFamily: FONTS.sys, fontSize: ".48rem",
                      letterSpacing: ".06em", color: B.textLow,
                      textTransform: "uppercase",
                    }}>{n.label}</span>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ────────────────────────────── */
function Testimonials({ segment }) {
  const featured = segment.testimonial;

  const others = SEGMENTS
    .filter(sg => sg.id !== segment.id)
    .map(sg => sg.testimonial);

  return (
    <section id="clientes" style={{
      background: B.cream,
      padding: "96px 1.5rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <span className="label" style={{ color: B.accent, display: "block", marginBottom: ".7rem" }}>
            clientes
          </span>
          <h2 style={{
            fontFamily: FONTS.serif,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: B.ink, fontWeight: 400, marginBottom: "3rem",
          }}>
            Negócios que já cresceram.
          </h2>
        </Fade>

        {/* Featured */}
        <Fade>
          <div style={{
            background: B.ink,
            padding: "3rem 3.5rem",
            marginBottom: "1px",
            position: "relative",
          }}>
            <div style={{
              fontFamily: FONTS.serif, fontSize: "4rem",
              color: B.accent, lineHeight: 1,
              position: "absolute", top: "1.5rem", left: "2.5rem",
              opacity: .35,
            }}>"</div>
            <div style={{ marginBottom: "1rem", display: "flex", gap: ".2rem" }}>
              {"★★★★★".split("").map((_, j) => (
                <span key={j} style={{ color: B.gold, fontSize: ".95rem" }}>★</span>
              ))}
            </div>
            <p style={{
              fontFamily: FONTS.serif, fontSize: "1.12rem",
              fontStyle: "italic",
              color: "rgba(250,249,247,.82)",
              lineHeight: 1.8, marginBottom: "1.6rem",
              maxWidth: 720, position: "relative",
            }}>
              {featured.text}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: ".85rem" }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: B.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: FONTS.serif, fontSize: "1.05rem",
                color: "#fff", fontWeight: 700, flexShrink: 0,
              }}>{featured.init}</div>
              <div>
                <div style={{ fontFamily: FONTS.sys, fontSize: ".8rem", fontWeight: 600, color: B.text }}>
                  {featured.name}
                </div>
                <div style={{ fontFamily: FONTS.sys, fontSize: ".64rem", color: B.textLow }}>
                  {featured.role}
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Others */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px", background: B.latte,
          border: `1px solid ${B.latte}`,
        }}>
          {others.map((r, i) => (
            <Fade key={r.name} delay={.09 * i}>
              <div style={{
                background: B.cream,
                padding: "2.2rem",
              }}>
                <div style={{ marginBottom: ".9rem", display: "flex", gap: ".18rem" }}>
                  {"★★★★★".split("").map((_, j) => (
                    <span key={j} style={{ color: B.gold, fontSize: ".82rem" }}>★</span>
                  ))}
                </div>
                <p style={{
                  fontFamily: FONTS.serif, fontSize: ".9rem",
                  fontStyle: "italic", color: B.brown,
                  lineHeight: 1.75, marginBottom: "1.3rem",
                }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: B.accent,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: FONTS.serif, fontSize: ".9rem",
                    color: "#fff", fontWeight: 700, flexShrink: 0,
                  }}>{r.init}</div>
                  <div>
                    <div style={{ fontFamily: FONTS.sys, fontSize: ".76rem", fontWeight: 600, color: B.ink }}>
                      {r.name}
                    </div>
                    <div style={{ fontFamily: FONTS.sys, fontSize: ".62rem", color: B.muted }}>
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
