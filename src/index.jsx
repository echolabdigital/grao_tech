import { useState } from "react";
import { GLOBAL_CSS, B, Fade } from "./App";
import { GTMark } from "./Logo";
import { SegmentContext, SEGMENTS, useSegment } from "./segments";

import Nav            from "./sections/Nav";
import Hero           from "./sections/Hero";
import PainPoints     from "./sections/PainPoints";
import Solutions      from "./sections/Solutions";
import ProductShowcase from "./sections/ProductShowcase";
import DemoAccess     from "./sections/DemoAccess";
import Pricing        from "./sections/Pricing";
import Contact        from "./sections/Contact";
import Footer         from "./sections/Footer";

/* ──────────────────────────────────────────────
   GRÃO TECH — Landing Page
   by NewtonIA

   Stack: React 18, Vite, CSS-in-JS (style props)
   No external CSS dependencies.
──────────────────────────────────────────────── */
export default function GraoTech() {
  const [segment, setSegment] = useState("padaria");

  return (
    <SegmentContext.Provider value={{ segment, setSegment }}>
      <style>{GLOBAL_CSS}</style>
      <Nav />
      <Hero />
      <ProofStrip />
      <PainPoints />
      <Solutions />
      <ProductShowcase />
      <HowItWorks />
      <IntegrationsHub />
      <Testimonials />
      <DemoAccess />
      <Pricing />
      <Contact />
      <Footer />
    </SegmentContext.Provider>
  );
}

/* ── Proof strip — integrations ── */
function ProofStrip() {
  const items = [
    { icon: "🛵", name: "iFood"        },
    { icon: "📱", name: "WhatsApp"     },
    { icon: "💳", name: "PIX"          },
    { icon: "🏧", name: "Stone"        },
    { icon: "📦", name: "Melhor Envio" },
    { icon: "📊", name: "Bling ERP"    },
  ];
  return (
    <div style={{
      background: B.cream2,
      borderTop: `1px solid ${B.latte}`,
      borderBottom: `1px solid ${B.latte}`,
      padding: ".85rem 1.5rem",
    }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto",
        display: "flex", alignItems: "center",
        gap: "2.5rem", flexWrap: "wrap", justifyContent: "center",
      }}>
        <span style={{
          fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".58rem",
          letterSpacing: ".18em", textTransform: "uppercase", color: B.muted,
        }}>
          Integrado com
        </span>
        {items.map(p => (
          <div key={p.name} style={{
            display: "flex", alignItems: "center", gap: ".4rem",
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".75rem",
            fontWeight: 600, color: B.brown, opacity: .7,
          }}>
            <span style={{ fontSize: "1rem" }}>{p.icon}</span>
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── How it works ── */
function HowItWorks() {
  const steps = [
    {
      n: "01", icon: "☕", title: "Demo em 24h",
      desc: "Demonstração gratuita com especialista. Entendemos seu negócio antes de qualquer proposta.",
    },
    {
      n: "02", icon: "🎨", title: "Sua identidade",
      desc: "Configuramos o sistema com a sua marca: logo, cores, cardápio e integrações.",
    },
    {
      n: "03", icon: "🚀", title: "Ao ar em 48h",
      desc: "Seu site, app e WhatsApp no ar. Clientes já podem pedir.",
    },
    {
      n: "04", icon: "📈", title: "Crescimento contínuo",
      desc: "Clube de fidelidade, campanhas automáticas e relatórios para vender mais todo mês.",
    },
  ];
  return (
    <section id="como" style={{
      background: B.cream, padding: "100px 1.5rem",
      borderTop: `1px solid ${B.cream2}`,
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Fade>
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
            letterSpacing: ".2em", textTransform: "uppercase",
            color: B.terra, display: "block", marginBottom: ".6rem",
          }}>Como funciona</span>
          <h2 style={{
            fontFamily: "Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)",
            color: B.ink, fontWeight: 400, marginBottom: "4rem", lineHeight: 1.1,
          }}>
            Do zero ao digital em{" "}
            <em style={{ color: B.terra }}>menos de 48 horas.</em>
          </h2>
        </Fade>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        }}>
          {steps.map((s, i) => (
            <Fade key={s.n} delay={0.08 * i}>
              <div style={{
                padding: "2.4rem 2rem", position: "relative",
                borderLeft: i === 0 ? "none" : `1px dashed ${B.sand}`,
              }}>
                {i > 0 && (
                  <div style={{
                    position: "absolute", left: -10, top: "3rem",
                    width: 18, height: 18, borderRadius: "50%",
                    background: B.cream, border: `2px solid ${B.gold}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: B.gold }} />
                  </div>
                )}
                <div style={{
                  fontFamily: "Georgia,serif", fontSize: "3.2rem",
                  color: B.cream2, lineHeight: 1, marginBottom: ".7rem", userSelect: "none",
                }}>{s.n}</div>
                <div style={{ fontSize: "1.5rem", marginBottom: ".6rem" }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "Georgia,serif", fontSize: "1.12rem",
                  color: B.ink, fontWeight: 700, marginBottom: ".6rem",
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".78rem",
                  color: B.muted, lineHeight: 1.75,
                }}>{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Integrations hub ── */
function IntegrationsHub() {
  const nodes = [
    { icon: "🛵", label: "iFood",    angle: 0,   color: "#EA1D2C" },
    { icon: "🌐", label: "Site",     angle: 72,  color: B.terra   },
    { icon: "📱", label: "WhatsApp", angle: 144, color: "#25D366" },
    { icon: "🖥️", label: "PDV",      angle: 216, color: B.gold    },
    { icon: "💳", label: "PIX",      angle: 288, color: "#32BCAD" },
  ];
  return (
    <section style={{
      background: B.ink, padding: "100px 1.5rem",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "6rem", alignItems: "center",
        }}>
          <Fade>
            <span style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
              letterSpacing: ".2em", textTransform: "uppercase",
              color: B.gold, display: "block", marginBottom: ".6rem",
            }}>Integrações</span>
            <h2 style={{
              fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              color: B.cream, fontWeight: 400, lineHeight: 1.15, marginBottom: "1rem",
            }}>
              Tudo conectado,{" "}
              <em style={{ color: B.wheat }}>tudo no mesmo lugar.</em>
            </h2>
            <p style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".86rem",
              color: "rgba(250,243,230,.55)", lineHeight: 1.8, marginBottom: "1.8rem",
            }}>
              Atualizou aqui, atualizou em todos os canais automaticamente.
            </p>
            {[
              { icon: "🛵", name: "iFood",             desc: "Sync de cardápio e pedidos",   color: "#EA1D2C" },
              { icon: "📱", name: "WhatsApp Business",  desc: "Robô de atendimento 24h",      color: "#25D366" },
              { icon: "🏧", name: "PDV / ERP",          desc: "Preços e estoque atualizados", color: B.gold    },
              { icon: "💳", name: "PIX + Cartão",       desc: "Checkout sem intermediários",  color: "#32BCAD" },
            ].map(it => (
              <div key={it.name} style={{
                display: "flex", alignItems: "center", gap: ".9rem",
                padding: ".8rem 1rem",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.07)",
                marginBottom: ".5rem", transition: ".2s", cursor: "default",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = it.color + "44";
                  e.currentTarget.style.background = "rgba(255,255,255,.07)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,.04)";
                }}
              >
                <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{it.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".8rem",
                    fontWeight: 700, color: B.cream,
                  }}>{it.name}</div>
                  <div style={{
                    fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".64rem",
                    color: "rgba(250,243,230,.38)",
                  }}>{it.desc}</div>
                </div>
                <div style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#27AE60",
                  boxShadow: "0 0 0 3px rgba(39,174,96,.2)", flexShrink: 0,
                }} />
              </div>
            ))}
          </Fade>

          {/* Orbit diagram */}
          <Fade delay={0.2}>
            <div style={{
              position: "relative", height: 440,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {[150, 200].map((r, ri) => (
                <div key={r} style={{
                  position: "absolute", width: r * 2, height: r * 2,
                  borderRadius: "50%",
                  border: `1px dashed rgba(255,255,255,${ri === 0 ? .07 : .04})`,
                  animation: `rotateSlow ${20 + ri * 8}s linear infinite${ri === 1 ? " reverse" : ""}`,
                }} />
              ))}
              <div style={{
                position: "absolute", zIndex: 3, width: 90, height: 90,
                borderRadius: "50%",
                background: `linear-gradient(135deg,${B.terra},${B.brown})`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                boxShadow: `0 0 0 10px rgba(184,66,26,.15),0 0 0 22px rgba(184,66,26,.07)`,
              }}>
                <GTMark size={40} />
              </div>
              {nodes.map(n => {
                const rad = n.angle * Math.PI / 180;
                const nx = 150 * Math.cos(rad), ny = 150 * Math.sin(rad);
                return (
                  <div key={n.label} style={{
                    position: "absolute", zIndex: 4,
                    left: `calc(50% + ${nx}px - 34px)`,
                    top: `calc(50% + ${ny}px - 34px)`,
                    width: 68, height: 68, borderRadius: "50%",
                    background: "rgba(0,0,0,.4)",
                    border: `2px solid ${n.color}44`,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: 2, transition: ".2s", cursor: "default",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = n.color;
                      e.currentTarget.style.background = n.color + "28";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = n.color + "44";
                      e.currentTarget.style.background = "rgba(0,0,0,.4)";
                    }}
                  >
                    <span style={{ fontSize: "1.25rem" }}>{n.icon}</span>
                    <span style={{
                      fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".5rem",
                      letterSpacing: ".06em", color: "rgba(255,255,255,.45)",
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

/* ── Testimonials — segment-aware ── */
function Testimonials() {
  const { segment } = useSegment();
  const featured = SEGMENTS[segment].testimonial;

  // All testimonials from all segments for the grid
  const allTestimonials = Object.values(SEGMENTS).map(s => s.testimonial);

  return (
    <section id="clientes" style={{
      background: `linear-gradient(160deg,${B.brown},${B.terra})`,
      padding: "100px 1.5rem",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Fade>
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
            letterSpacing: ".2em", textTransform: "uppercase",
            color: B.wheat, display: "block", marginBottom: ".6rem",
          }}>Clientes</span>
          <h2 style={{
            fontFamily: "Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)",
            color: B.cream, fontWeight: 400, marginBottom: "3.5rem",
          }}>
            Negócios que já cresceram.
          </h2>
        </Fade>

        {/* Featured testimonial — segment-aware */}
        <Fade>
          <div style={{
            background: "rgba(255,255,255,.11)",
            border: "1px solid rgba(255,255,255,.18)",
            padding: "2.4rem",
            marginBottom: "1.5px",
            backdropFilter: "blur(4px)",
          }}>
            <div style={{ marginBottom: "1rem" }}>
              {"★★★★★".split("").map((_, j) => (
                <span key={j} style={{ color: B.gold, fontSize: "1rem" }}>★</span>
              ))}
            </div>
            <p style={{
              fontFamily: "Georgia,serif", fontSize: "1.1rem",
              fontStyle: "italic", color: "rgba(250,243,230,.9)",
              lineHeight: 1.75, marginBottom: "1.4rem", maxWidth: 720,
            }}>"{featured.text}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(255,255,255,.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                fontFamily: "Georgia,serif", fontSize: "1rem",
                color: "#fff", fontWeight: 700,
              }}>{featured.initial}</div>
              <div>
                <div style={{
                  fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".82rem",
                  fontWeight: 700, color: B.cream,
                }}>{featured.name}</div>
                <div style={{
                  fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".65rem",
                  color: "rgba(250,243,230,.45)",
                }}>{featured.role}</div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Grid of all 4 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "1.5px", background: "rgba(255,255,255,.15)",
        }}>
          {allTestimonials.map((r, i) => {
            const isActive = r.name === featured.name;
            return (
              <Fade key={r.name} delay={0.1 * i}>
                <div style={{
                  background: isActive ? "rgba(255,255,255,.14)" : "rgba(255,255,255,.06)",
                  padding: "1.8rem",
                  backdropFilter: "blur(4px)",
                  transition: ".25s",
                }}>
                  <div style={{ marginBottom: ".7rem" }}>
                    {"★★★★★".split("").map((_, j) => (
                      <span key={j} style={{ color: B.gold, fontSize: ".82rem" }}>★</span>
                    ))}
                  </div>
                  <p style={{
                    fontFamily: "Georgia,serif", fontSize: ".88rem",
                    fontStyle: "italic", color: "rgba(250,243,230,.82)",
                    lineHeight: 1.7, marginBottom: "1.2rem",
                  }}>"{r.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: isActive ? "rgba(255,255,255,.25)" : B.terra,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      fontFamily: "Georgia,serif", fontSize: ".88rem",
                      color: "#fff", fontWeight: 700,
                    }}>{r.initial}</div>
                    <div>
                      <div style={{
                        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".74rem",
                        fontWeight: 700, color: B.cream,
                      }}>{r.name}</div>
                      <div style={{
                        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
                        color: "rgba(250,243,230,.38)",
                      }}>{r.role}</div>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
