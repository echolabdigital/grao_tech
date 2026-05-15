import { B, Fade } from "../App";
import { useSegment, SEGMENTS } from "../segments";

export default function PainPoints() {
  const { segment } = useSegment();
  const seg = SEGMENTS[segment];

  return (
    <section style={{
      background: B.cream2,
      padding: "100px 1.5rem",
      borderTop: `1px solid ${B.latte}`,
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Fade>
          <span style={{
            fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
            letterSpacing: ".2em", textTransform: "uppercase",
            color: B.terra, display: "block", marginBottom: ".6rem",
          }}>O desafio de hoje</span>
          <h2 style={{
            fontFamily: "Georgia,serif",
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            color: B.ink, fontWeight: 400, lineHeight: 1.15,
            marginBottom: "3.5rem",
          }}>
            O que sua{" "}
            <em style={{ color: B.terra, fontStyle: "italic" }}>
              {seg.label.toLowerCase()}
            </em>
            {" "}enfrenta hoje.
          </h2>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {seg.pains.map((pain, i) => (
            <Fade key={pain.title} delay={0.1 * i}>
              <PainCard pain={pain} accent={seg.accent} />
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
        background: B.white,
        border: `1px solid ${B.latte}`,
        padding: "2rem",
        transition: "transform .25s, box-shadow .25s, border-left .25s",
        cursor: "default",
        borderLeft: `3px solid ${B.latte}`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(18,8,0,.09)";
        e.currentTarget.style.borderLeftColor = accent;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderLeftColor = B.latte;
      }}
    >
      <div style={{
        fontSize: "2.4rem", marginBottom: "1rem", lineHeight: 1,
      }}>
        {pain.emoji}
      </div>
      <h3 style={{
        fontFamily: "Georgia,serif", fontSize: "1.05rem",
        color: B.ink, fontWeight: 700, marginBottom: ".65rem",
        lineHeight: 1.3,
      }}>
        {pain.title}
      </h3>
      <p style={{
        fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".78rem",
        color: B.muted, lineHeight: 1.75,
      }}>
        {pain.desc}
      </p>
    </div>
  );
}
