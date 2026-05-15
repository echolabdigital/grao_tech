import { B, FONTS } from "../App";
import { GTLogo } from "../Logo";

const COLS = [
  {
    title: "Soluções",
    links: ["Site + App", "Robô WhatsApp", "Encomendas", "Clube de Pontos", "Painel de Produção"],
  },
  {
    title: "Empresa",
    links: ["Quem somos", "Cases", "Blog", "Parceiros", "Carreiras"],
  },
  {
    title: "Suporte",
    links: ["Central de ajuda", "Documentação", "Status", "Contato", "WhatsApp"],
  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#100600",
      borderTop: "1px solid rgba(255,255,255,.06)",
      padding: "56px 1.5rem 28px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem", marginBottom: "3rem",
          flexWrap: "wrap",
        }}>
          {/* Brand */}
          <div>
            <GTLogo variant="dark" size={34} />
            <p style={{
              fontFamily: FONTS.sys, fontSize: ".76rem",
              color: B.textLow,
              lineHeight: 1.8, marginTop: "1rem", maxWidth: 260,
            }}>
              Tecnologia feita para quem acorda cedo e trabalha com amor.
              Do grão ao digital.
            </p>
          </div>

          {/* Link cols */}
          {COLS.map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: FONTS.sys, fontSize: ".58rem",
                letterSpacing: ".16em", textTransform: "uppercase",
                color: B.textLow, marginBottom: ".9rem",
              }}>{col.title}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{
                  display: "block",
                  fontFamily: FONTS.sys, fontSize: ".76rem",
                  color: B.textLow,
                  textDecoration: "none", padding: ".24rem 0",
                  transition: "color .15s",
                }}
                  onMouseEnter={e => e.target.style.color = B.text}
                  onMouseLeave={e => e.target.style.color = B.textLow}
                >{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          borderTop: `1px solid ${B.line}`,
          paddingTop: "1.4rem",
          display: "flex", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <span style={{
            fontFamily: FONTS.sys, fontSize: ".62rem",
            color: B.textLow,
          }}>
            © 2026 Grão Tech · Florianópolis, SC
          </span>
          <span style={{
            fontFamily: FONTS.sys, fontSize: ".62rem",
            color: B.textLow,
          }}>
            graotech.com.br
          </span>
        </div>
      </div>
    </footer>
  );
}
