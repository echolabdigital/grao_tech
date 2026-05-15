import { B, Fade } from "../App";

export default function DemoAccess() {
  return (
    <section id="demo" style={{
      background: B.ink,
      padding: "80px 1.5rem",
      borderTop: "1px solid rgba(255,255,255,.06)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}>
          {/* Left column */}
          <Fade>
            <span style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
              letterSpacing: ".2em", textTransform: "uppercase",
              color: B.gold, display: "block", marginBottom: ".8rem",
            }}>Demonstração</span>

            <h2 style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              color: B.cream, fontWeight: 400, lineHeight: 1.15,
              marginBottom: "1rem",
            }}>
              Veja o sistema funcionando agora.
            </h2>

            <p style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".86rem",
              color: "rgba(250,243,230,.5)", lineHeight: 1.8,
              marginBottom: "2rem",
            }}>
              Acesse com as credenciais ao lado e explore o painel completo.
              Dados fictícios, sistema real.
            </p>

            {[
              "Sem cadastro necessário",
              "Ambiente de demonstração isolado",
              "Mesmo sistema que nossos clientes usam",
            ].map(text => (
              <div key={text} style={{
                display: "flex", alignItems: "center", gap: ".8rem",
                fontFamily: "'Trebuchet MS',sans-serif",
                fontSize: ".78rem", color: "rgba(250,243,230,.6)",
                marginBottom: ".65rem",
              }}>
                <span style={{ color: B.gold, flexShrink: 0 }}>✦</span>
                {text}
              </div>
            ))}
          </Fade>

          {/* Right column — credentials card */}
          <Fade delay={0.15}>
            <div style={{
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.1)",
              padding: "2.4rem",
            }}>
              {/* Header */}
              <div style={{
                fontFamily: "Georgia,serif", fontSize: "1.05rem",
                color: B.cream, marginBottom: "1.8rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(255,255,255,.07)",
                display: "flex", alignItems: "center", gap: ".6rem",
              }}>
                <span>🔑</span> Acesso à demo
              </div>

              {/* Credential rows */}
              {[
                {
                  label: "Endereço",
                  value: "demo.graotech.com.br",
                  mono: true,
                  gold: true,
                  link: true,
                },
                {
                  label: "Login",
                  value: "demo@graotech.com.br",
                  mono: true,
                  gold: false,
                  link: false,
                },
                {
                  label: "Senha",
                  value: "grao2025",
                  mono: true,
                  gold: false,
                  link: false,
                },
              ].map(row => (
                <div key={row.label} style={{
                  marginBottom: "1.2rem",
                  paddingBottom: "1.2rem",
                  borderBottom: "1px solid rgba(255,255,255,.06)",
                }}>
                  <div style={{
                    fontFamily: "'Trebuchet MS',sans-serif",
                    fontSize: ".52rem", letterSpacing: ".15em",
                    textTransform: "uppercase",
                    color: "rgba(250,243,230,.3)", marginBottom: ".3rem",
                  }}>{row.label}</div>
                  <div style={{
                    fontFamily: "monospace",
                    fontSize: ".9rem",
                    color: row.gold ? B.gold : B.cream,
                    display: "flex", alignItems: "center", gap: ".5rem",
                  }}>
                    {row.value}
                    {row.link && (
                      <span style={{
                        fontSize: ".65rem", color: "rgba(250,243,230,.3)",
                        cursor: "pointer",
                      }}>↗</span>
                    )}
                  </div>
                </div>
              ))}

              {/* CTA button */}
              <a
                href="https://demo.graotech.com.br"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block", textAlign: "center",
                  background: B.terra, color: "#fff",
                  padding: ".85rem",
                  fontFamily: "'Trebuchet MS',sans-serif",
                  fontSize: ".75rem", fontWeight: 700,
                  letterSpacing: ".12em", textTransform: "uppercase",
                  textDecoration: "none",
                  marginBottom: ".8rem",
                  transition: "background .2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = B.brown}
                onMouseLeave={e => e.currentTarget.style.background = B.terra}
              >
                Abrir sistema →
              </a>

              <p style={{
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".58rem",
                color: "rgba(250,243,230,.22)", textAlign: "center",
                letterSpacing: ".04em",
              }}>
                Acesso compartilhado · não altere as configurações
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
