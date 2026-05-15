import { B, useScroll, FONTS } from "../App";
import { GTLogo } from "../Logo";

const LINKS = [
  ["Soluções",      "#solucoes"],
  ["Como funciona", "#como"],
  ["Planos",        "#planos"],
  ["Demo",          "#demo"],
];

export default function Nav() {
  const y     = useScroll();
  const solid = y > 60;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      height: 60,
      background:     solid ? "rgba(249,245,238,.96)" : "transparent",
      backdropFilter: solid ? "blur(16px) saturate(1.4)" : "none",
      borderBottom:   solid ? `1px solid ${B.cream2}` : "none",
      transition: "background .35s, border-color .35s",
      display: "flex", alignItems: "center",
    }}>
      <div style={{
        maxWidth: 1200, width: "100%", margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex", alignItems: "center", gap: "2rem",
      }}>
        <GTLogo variant={solid ? "light" : "dark"} size={34} />
        <div style={{ flex: 1 }} />

        {LINKS.map(([label, href]) => (
          <a key={label} href={href} style={{
            fontFamily: FONTS.sys,
            fontSize: ".78rem", letterSpacing: ".01em",
            color: solid ? B.muted : B.textMid,
            textDecoration: "none",
            transition: "color .15s",
          }}
            onMouseEnter={e => e.target.style.color = solid ? B.ink : B.text}
            onMouseLeave={e => e.target.style.color = solid ? B.muted : B.textMid}
          >
            {label}
          </a>
        ))}

        <a href="#contato" className="gt-btn gt-btn-primary"
          style={{ padding: ".45rem 1.2rem", fontSize: ".72rem" }}>
          Começar agora
        </a>
      </div>
    </nav>
  );
}
