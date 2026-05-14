import { B } from "../App";
import { GTLogo } from "../Logo";

const COLS = [
  {
    title: "Soluções",
    links: ["Site + App", "Robô WhatsApp", "Encomendas", "Clube de Pontos", "Produção"],
  },
  {
    title: "Empresa",
    links: ["Quem somos", "Blog", "Cases", "Parceiros", "Carreiras"],
  },
  {
    title: "Suporte",
    links: ["Central de ajuda", "Status", "Contato", "API Docs", "WhatsApp"],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: B.ink, padding: "60px 1.5rem 28px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem", marginBottom: "3rem",
        }}>
          {/* Brand col */}
          <div>
            <GTLogo variant="dark" size={38} />
            <p style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".76rem",
              color: "rgba(250,243,230,.35)",
              lineHeight: 1.8, marginTop: ".9rem", maxWidth: 270,
            }}>
              Tecnologia feita para quem acorda cedo e trabalha com amor.
              Do grão ao digital.
            </p>
          </div>

          {/* Link cols */}
          {COLS.map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
                letterSpacing: ".16em", textTransform: "uppercase",
                color: "rgba(250,243,230,.3)", marginBottom: ".8rem",
              }}>{col.title}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{
                  display: "block",
                  fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".76rem",
                  color: "rgba(250,243,230,.38)",
                  textDecoration: "none", padding: ".25rem 0", transition: ".15s",
                }}
                  onMouseEnter={e => e.target.style.color = B.wheat}
                  onMouseLeave={e => e.target.style.color = "rgba(250,243,230,.38)"}
                >{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,.07)",
          paddingTop: "1.4rem",
          display: "flex", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".62rem",
            color: "rgba(250,243,230,.2)",
          }}>
            © 2025 Grão Tech · by NewtonIA
          </span>
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".62rem",
            color: "rgba(250,243,230,.2)",
          }}>
            graotech.com.br · Florianópolis, SC
          </span>
        </div>
      </div>
    </footer>
  );
}
