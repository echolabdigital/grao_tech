import { B, Fade, FONTS } from "../App";

export default function PainPoints({ segment: s }) {
  return (
    <section style={{
      background: B.cream,
      padding: "96px 1.5rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <Fade>
          <div style={{ marginBottom: "3.5rem" }}>
            <span className="label" style={{ color: s.accent, display: "block", marginBottom: ".7rem", transition: "color .4s" }}>
              {s.icon} o problema
            </span>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
              color: B.ink, fontWeight: 400, lineHeight: 1.1,
              maxWidth: 600,
            }}>
              O que está custando{" "}
              <em style={{ color: s.accent, transition: "color .4s" }}>dinheiro agora</em>{" "}
              no seu negócio.
            </h2>
          </div>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1px",
          background: B.latte,
          border: `1px solid ${B.latte}`,
        }}>
          {s.pains.map((p, i) => (
            <Fade key={p.num} delay={i * 0.09}>
              <PainCard pain={p} accent={s.accent} />
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}

function PainCard({ pain, accent }) {
  return (
    <div
      style={{
        background: B.cream,
        padding: "2.6rem 2.2rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "background .22s",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "#fff"}
      onMouseLeave={e => e.currentTarget.style.background = B.cream}
    >
      {/* Number */}
      <div style={{
        fontFamily: FONTS.serif,
        fontSize: "3.5rem", lineHeight: 1,
        color: B.cream2,
        marginBottom: "1.4rem",
        userSelect: "none",
      }}>
        {pain.num}
      </div>

      {/* Accent bar */}
      <div style={{
        width: 28, height: 2,
        background: accent,
        marginBottom: "1.2rem",
        transition: "background .4s",
      }} />

      <h3 style={{
        fontFamily: FONTS.serif,
        fontSize: "1.08rem",
        color: B.ink, fontWeight: 700,
        lineHeight: 1.3, marginBottom: ".9rem",
      }}>
        {pain.title}
      </h3>

      <p style={{
        fontFamily: FONTS.sys,
        fontSize: ".82rem",
        color: B.muted,
        lineHeight: 1.8,
      }}>
        {pain.body}
      </p>
    </div>
  );
}
