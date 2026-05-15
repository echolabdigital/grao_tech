import { useState } from "react";
import { B, Fade } from "../App";

const DEMO_URL = "https://app.graotech.com.br";
const DEMO_EMAIL = "demo@graotech.com.br";
const DEMO_SENHA = "grao2025";

export default function DemoAccess({ segment }) {
  const [copied, setCopied] = useState(null);

  function copy(text, key) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    });
  }

  const accent = segment.accent;

  return (
    <section id="demo" style={{
      background: `linear-gradient(160deg, ${B.ink} 0%, #1A0A00 100%)`,
      padding: "100px 1.5rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Glow bg */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%,-50%)",
        width: 800, height: 400, borderRadius: "50%",
        background: `radial-gradient(ellipse, ${segment.glow}, transparent 65%)`,
        pointerEvents: "none", transition: "background .6s",
      }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <Fade>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
              letterSpacing: ".2em", textTransform: "uppercase",
              color: accent, display: "block", marginBottom: ".6rem",
              transition: "color .4s",
            }}>Demonstração</span>
            <h2 style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              color: B.cream, fontWeight: 400, lineHeight: 1.1,
              marginBottom: "1rem",
            }}>
              Acesse o sistema agora.{" "}
              <em style={{ color: accent, transition: "color .4s" }}>Sem compromisso.</em>
            </h2>
            <p style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".88rem",
              color: "rgba(250,243,230,.45)", maxWidth: 500,
              margin: "0 auto", lineHeight: 1.75,
            }}>
              Use o login abaixo e explore o painel completo — cardápio, pedidos,
              fidelidade e relatórios. É o sistema real do cliente.
            </p>
          </div>
        </Fade>

        <Fade delay={.1}>
          <div style={{
            maxWidth: 580, margin: "0 auto",
            background: "rgba(255,255,255,.04)",
            border: `1px solid ${accent}33`,
            borderRadius: 4,
            boxShadow: `0 0 60px ${segment.glowAlt}`,
            transition: "border-color .4s, box-shadow .4s",
          }}>

            {/* Card header */}
            <div style={{
              padding: "1.4rem 2rem",
              borderBottom: "1px solid rgba(255,255,255,.06)",
              display: "flex", alignItems: "center", gap: ".7rem",
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%",
                background: "#27AE60",
                boxShadow: "0 0 0 4px rgba(39,174,96,.18)",
              }} />
              <span style={{
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".68rem",
                color: "rgba(255,255,255,.4)", letterSpacing: ".06em",
              }}>
                Sistema ao vivo — acesso demo
              </span>
            </div>

            {/* Credentials */}
            <div style={{ padding: "2rem" }}>
              {[
                { label: "URL de acesso", val: DEMO_URL,   key: "url",   icon: "🌐" },
                { label: "E-mail",        val: DEMO_EMAIL, key: "email", icon: "📧" },
                { label: "Senha",         val: DEMO_SENHA, key: "senha", icon: "🔑" },
              ].map(item => (
                <div key={item.key} style={{ marginBottom: "1.1rem" }}>
                  <div style={{
                    fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".58rem",
                    letterSpacing: ".15em", textTransform: "uppercase",
                    color: "rgba(255,255,255,.28)", marginBottom: ".35rem",
                  }}>
                    {item.icon} {item.label}
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: ".6rem",
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.08)",
                    padding: ".7rem 1rem",
                  }}>
                    <span style={{
                      fontFamily: "monospace", fontSize: ".88rem",
                      color: B.cream, flex: 1, wordBreak: "break-all",
                    }}>
                      {item.val}
                    </span>
                    <button
                      onClick={() => copy(item.val, item.key)}
                      style={{
                        background: copied === item.key ? "#27AE60" : "rgba(255,255,255,.08)",
                        border: "1px solid rgba(255,255,255,.1)",
                        color: "#fff", cursor: "pointer",
                        fontFamily: "'Trebuchet MS',sans-serif",
                        fontSize: ".6rem", letterSpacing: ".06em",
                        padding: ".3rem .75rem",
                        transition: "background .2s",
                        flexShrink: 0,
                      }}
                    >
                      {copied === item.key ? "✓ Copiado" : "Copiar"}
                    </button>
                  </div>
                </div>
              ))}

              {/* Open button */}
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: ".55rem", marginTop: "1.6rem",
                  background: accent, color: "#fff",
                  padding: ".9rem 2rem",
                  fontFamily: "'Trebuchet MS',sans-serif",
                  fontSize: ".75rem", fontWeight: 700,
                  letterSpacing: ".12em", textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "opacity .2s, transform .2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = ".88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
              >
                ↗ Abrir sistema agora
              </a>

              <p style={{
                textAlign: "center", marginTop: "1rem",
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".62rem",
                color: "rgba(255,255,255,.2)",
              }}>
                Acesso de leitura. Nenhuma compra necessária.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
