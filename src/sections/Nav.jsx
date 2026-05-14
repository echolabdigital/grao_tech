import { B, useScroll } from "../App";
import { GTLogo } from "../Logo";

const LINKS = [
  ["Soluções",      "#solucoes"],
  ["Como funciona", "#como"],
  ["Planos",        "#planos"],
  ["Clientes",      "#clientes"],
];

export default function Nav() {
  const y     = useScroll();
  const solid = y > 60;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      height: 72,
      background:    solid ? "rgba(250,243,230,.96)" : "transparent",
      backdropFilter: solid ? "blur(12px)" : "none",
      boxShadow:     solid ? "0 1px 20px rgba(18,8,0,.07)" : "none",
      transition: "background .35s, box-shadow .35s",
      display: "flex", alignItems: "center",
    }}>
      <div style={{
        maxWidth: 1180, width: "100%", margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex", alignItems: "center", gap: "1.5rem",
      }}>
        <GTLogo variant={solid ? "dark" : "light"} size={36} />
        <div style={{ flex: 1 }} />

        {LINKS.map(([label, href]) => (
          <a key={label} href={href} style={{
            fontFamily: "'Trebuchet MS',sans-serif",
            fontSize: ".75rem", letterSpacing: ".06em",
            textTransform: "uppercase",
            color:       solid ? B.brown : B.cream,
            textDecoration: "none", opacity: .8,
            transition: "opacity .2s",
          }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = .8}
          >
            {label}
          </a>
        ))}

        <a href="#contato" className="gt-btn-primary"
          style={{ padding: ".5rem 1.4rem", fontSize: ".68rem" }}>
          Começar →
        </a>
      </div>
    </nav>
  );
}
