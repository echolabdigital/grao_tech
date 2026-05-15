import { useState } from "react";
import { B, Fade, FONTS } from "../App";

const DEMO_URL   = "https://app.graotech.com.br";
const DEMO_EMAIL = "demo@graotech.com.br";
const DEMO_SENHA = "grao2025";

export default function DemoAccess({ segment: s }) {
  const [copied, setCopied] = useState(null);

  function copy(text, key) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    });
  }

  return (
    <section id="demo" style={{
      background: B.surface,
      padding: "96px 1.5rem",
      position: "relative", overflow: "hidden",
      borderTop: `1px solid ${B.line}`,
      borderBottom: `1px solid ${B.line}`,
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%,-50%)",
        width: 700, height: 300, borderRadius: "50%",
        background: `radial-gradient(ellipse, ${s.accentDim}, transparent 65%)`,
        pointerEvents: "none", transition: "background .7s",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem", alignItems: "center",
        }}>

          {/* Left — text */}
          <Fade>
            <span className="label" style={{ color: s.accent, display: "block", marginBottom: ".7rem", transition: "color .4s" }}>
              demonstração
            </span>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              color: B.text, fontWeight: 400, lineHeight: 1.1,
              marginBottom: "1.2rem",
            }}>
              Acesse o sistema agora.{" "}
              <em style={{ color: s.accent, transition: "color .4s" }}>Sem compromisso.</em>
            </h2>
            <p style={{
              fontFamily: FONTS.sys, fontSize: ".88rem",
              color: B.textMid, lineHeight: 1.8,
              marginBottom: "2rem",
            }}>
              Use as credenciais ao lado e explore o painel completo —
              cardápio, pedidos, fidelidade e relatórios. É o sistema real,
              não um demo simplificado.
            </p>

            {[
              "Painel de pedidos em tempo real",
              "Gestão de encomendas e cardápio",
              "Relatórios de vendas e fidelidade",
              "Configurações de marca e canais",
            ].map(item => (
              <div key={item} style={{
                display: "flex", alignItems: "center", gap: ".7rem",
                fontFamily: FONTS.sys, fontSize: ".8rem",
                color: B.textMid, marginBottom: ".5rem",
              }}>
                <span style={{
                  width: 18, height: 18, borderRadius: "50%",
                  background: `${s.accent}18`,
                  border: `1px solid ${s.accent}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: ".6rem", color: s.accent,
                  transition: "background .4s, border-color .4s",
                }}>✓</span>
                {item}
              </div>
            ))}
          </Fade>

          {/* Right — credentials card */}
          <Fade delay={.12}>
            <div style={{
              background: B.bg,
              border: `1px solid ${s.accent}28`,
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: `0 0 0 1px rgba(255,255,255,.04), 0 30px 80px rgba(0,0,0,.4)`,
              transition: "border-color .5s",
            }}>
              {/* Card header */}
              <div style={{
                padding: "1rem 1.6rem",
                borderBottom: `1px solid ${B.line}`,
                display: "flex", alignItems: "center", gap: ".6rem",
                background: "rgba(255,255,255,.02)",
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#16A34A",
                  boxShadow: "0 0 0 3px rgba(22,163,74,.15)",
                  animation: "pulsering 2.5s ease-in-out infinite",
                }} />
                <span style={{
                  fontFamily: FONTS.sys, fontSize: ".65rem",
                  color: B.textLow, letterSpacing: ".04em",
                }}>
                  Acesso demo · sistema ao vivo
                </span>
              </div>

              <div style={{ padding: "1.8rem 1.6rem" }}>
                {[
                  { label: "URL",    val: DEMO_URL,   key: "url"   },
                  { label: "E-mail", val: DEMO_EMAIL, key: "email" },
                  { label: "Senha",  val: DEMO_SENHA, key: "senha" },
                ].map(item => (
                  <div key={item.key} style={{ marginBottom: "1rem" }}>
                    <div style={{
                      fontFamily: FONTS.sys, fontSize: ".58rem",
                      letterSpacing: ".15em", textTransform: "uppercase",
                      color: B.textLow, marginBottom: ".32rem",
                    }}>{item.label}</div>
                    <div style={{
                      display: "flex", alignItems: "center", gap: ".6rem",
                      background: B.surface,
                      border: `1px solid ${B.line}`,
                      padding: ".62rem .9rem",
                    }}>
                      <span style={{
                        fontFamily: "monospace", fontSize: ".85rem",
                        color: B.text, flex: 1, wordBreak: "break-all",
                      }}>
                        {item.val}
                      </span>
                      <button
                        onClick={() => copy(item.val, item.key)}
                        style={{
                          background: copied === item.key ? "#16A34A" : "rgba(255,255,255,.07)",
                          border: `1px solid rgba(255,255,255,.08)`,
                          color: "#fff", cursor: "pointer",
                          fontFamily: FONTS.sys,
                          fontSize: ".6rem", fontWeight: 500,
                          padding: ".28rem .7rem",
                          transition: "background .18s",
                          flexShrink: 0,
                        }}
                      >
                        {copied === item.key ? "✓" : "Copiar"}
                      </button>
                    </div>
                  </div>
                ))}

                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gt-btn"
                  style={{
                    background: s.accent,
                    color: "#fff",
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "1.2rem",
                    transition: "opacity .2s, transform .18s, background .4s",
                  }}
                >
                  ↗ Abrir sistema agora
                </a>

                <p style={{
                  textAlign: "center", marginTop: ".8rem",
                  fontFamily: FONTS.sys, fontSize: ".6rem",
                  color: B.textLow,
                }}>
                  Acesso de leitura · nenhuma compra necessária
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
