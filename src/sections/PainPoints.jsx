import { B, Fade } from "../App";

export default function PainPoints({ segment }) {
  const s = segment;
  return (
    <section style={{
      background: B.white, padding: "100px 1.5rem",
      borderTop: `1px solid ${B.cream2}`,
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Fade>
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
            letterSpacing: ".2em", textTransform: "uppercase",
            color: s.accent, display: "block", marginBottom: ".6rem",
            transition: "color .4s",
          }}>
            {s.icon} {s.label} — o problema real
          </span>
          <h2 style={{
            fontFamily: "Georgia,serif",
            fontSize: "clamp(1.9rem,3.8vw,2.9rem)",
            color: B.ink, fontWeight: 400, lineHeight: 1.12,
            maxWidth: 680, marginBottom: "3.5rem",
          }}>
            O que está{" "}
            <em style={{ color: s.accent, transition: "color .4s" }}>custando dinheiro</em>{" "}
            hoje no seu negócio.
          </h2>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "1.5px",
          background: B.latte,
          border: `1.5px solid ${B.latte}`,
        }}>
          {s.pains.map((p, i) => (
            <Fade key={p.title} delay={.08 * i}>
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
        background: B.white, padding: "2.4rem 2rem",
        borderBottom: `3px solid transparent`,
        transition: "border-color .25s, background .25s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderBottomColor = accent;
        e.currentTarget.style.background = B.cream;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderBottomColor = "transparent";
        e.currentTarget.style.background = B.white;
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        background: B.cream2, display: "flex",
        alignItems: "center", justifyContent: "center",
        fontSize: "1.5rem", marginBottom: "1.2rem",
      }}>
        {pain.icon}
      </div>

      <h3 style={{
        fontFamily: "Georgia,serif", fontSize: "1.1rem",
        color: B.ink, fontWeight: 700,
        marginBottom: ".75rem", lineHeight: 1.25,
      }}>
        {pain.title}
      </h3>

      <p style={{
        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".8rem",
        color: B.muted, lineHeight: 1.8,
      }}>
        {pain.desc}
      </p>
    </div>
  );
}
