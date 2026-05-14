import { useState } from "react";
import { B, Fade } from "../App";

const LABEL = {
  display: "block",
  fontFamily: "'Trebuchet MS',sans-serif",
  fontSize: ".6rem", letterSpacing: ".12em",
  textTransform: "uppercase", color: B.muted, marginBottom: ".32rem",
};

const INPUT_BASE = {
  width: "100%", padding: ".58rem .8rem",
  border: `1px solid ${B.latte}`, background: "#fff",
  fontFamily: "'Trebuchet MS',sans-serif",
  fontSize: ".86rem", color: B.ink, outline: "none", transition: "border .2s",
};

export default function Contact() {
  const [f, setF]     = useState({ name: "", phone: "", city: "", seg: "padaria" });
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    const msg =
      `Olá! Tenho interesse no Grão Tech.%0A%0A` +
      `Nome: ${encodeURIComponent(f.name)}%0A` +
      `Telefone: ${encodeURIComponent(f.phone)}%0A` +
      `Cidade: ${encodeURIComponent(f.city)}%0A` +
      `Segmento: ${encodeURIComponent(f.seg)}`;
    window.open(`https://wa.me/5548999999999?text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contato" style={{
      background: B.white, padding: "100px 1.5rem",
      borderTop: `1px solid ${B.cream2}`,
    }}>
      <div style={{ maxWidth: 940, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.05fr",
          gap: "5rem", alignItems: "center",
        }}>
          {/* Left col */}
          <Fade>
            <span style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
              letterSpacing: ".2em", textTransform: "uppercase",
              color: B.terra, display: "block", marginBottom: ".6rem",
            }}>Contato</span>

            <h2 style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              color: B.ink, fontWeight: 400, lineHeight: 1.15, marginBottom: "1rem",
            }}>
              Pronto para o próximo nível?
            </h2>

            <p style={{
              fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".86rem",
              color: B.muted, lineHeight: 1.8, marginBottom: "1.8rem",
            }}>
              Demo gratuita e sem compromisso. Implementamos em 48h.
            </p>

            {[
              { icon: "⚡", text: "Demo gratuita em 24h" },
              { icon: "🚀", text: "No ar em 48 horas" },
              { icon: "🔒", text: "Sem fidelidade obrigatória" },
              { icon: "🛠️", text: "Suporte em português" },
            ].map(it => (
              <div key={it.text} style={{
                display: "flex", alignItems: "center", gap: ".8rem",
                fontFamily: "'Trebuchet MS',sans-serif",
                fontSize: ".78rem", color: B.brown, marginBottom: ".6rem",
              }}>
                <span>{it.icon}</span>{it.text}
              </div>
            ))}
          </Fade>

          {/* Right col — form */}
          <Fade delay={.15}>
            <div style={{
              background: B.cream, border: `1.5px solid ${B.cream2}`,
              padding: "2.4rem",
            }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                  <div style={{
                    fontFamily: "Georgia,serif", fontSize: "1.2rem",
                    color: B.ink, marginBottom: ".6rem",
                  }}>
                    Recebemos, {f.name}!
                  </div>
                  <p style={{
                    fontFamily: "'Trebuchet MS',sans-serif",
                    fontSize: ".8rem", color: B.muted, lineHeight: 1.6,
                  }}>
                    Nossa equipe vai entrar em contato via WhatsApp em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3 style={{
                    fontFamily: "Georgia,serif", fontSize: "1.1rem",
                    color: B.ink, marginBottom: "1.3rem",
                  }}>Solicitar demonstração</h3>

                  {[
                    { k: "name",  l: "Seu nome *",          p: "Ex: Maria Silva"        },
                    { k: "phone", l: "WhatsApp *",           p: "(48) 9 9999-9999"       },
                    { k: "city",  l: "Cidade / Estado *",    p: "Florianópolis, SC"      },
                  ].map(fi => (
                    <div key={fi.k} style={{ marginBottom: ".9rem" }}>
                      <label style={LABEL}>{fi.l}</label>
                      <input
                        type="text" value={f[fi.k]} required
                        placeholder={fi.p}
                        onChange={e => setF({ ...f, [fi.k]: e.target.value })}
                        style={INPUT_BASE}
                        onFocus={e  => e.target.style.borderColor = B.terra}
                        onBlur={e   => e.target.style.borderColor = B.latte}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: "1.4rem" }}>
                    <label style={LABEL}>Segmento *</label>
                    <select value={f.seg} onChange={e => setF({ ...f, seg: e.target.value })}
                      style={{ ...INPUT_BASE }}>
                      <option value="padaria">Padaria / Confeitaria</option>
                      <option value="cafe">Café / Coffee Shop</option>
                      <option value="conveniencia">Conveniência</option>
                      <option value="industria">Indústria de Panificação</option>
                      <option value="rede">Rede / Franquia</option>
                    </select>
                  </div>

                  <button type="submit" className="gt-btn-primary"
                    style={{ width: "100%", justifyContent: "center", padding: ".85rem" }}>
                    Quero minha demonstração →
                  </button>

                  <p style={{
                    fontFamily: "'Trebuchet MS',sans-serif", fontSize: ".6rem",
                    color: B.muted, textAlign: "center", marginTop: ".7rem",
                  }}>
                    Sem spam. Contato apenas via WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
