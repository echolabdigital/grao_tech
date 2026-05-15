import { useState } from "react";
import { B, Fade, FONTS } from "../App";

export default function Contact() {
  const [f, setF]       = useState({ name: "", phone: "", city: "", seg: "padaria" });
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

  const inputStyle = {
    width: "100%", padding: ".62rem .85rem",
    border: `1px solid ${B.line}`,
    background: B.bg,
    fontFamily: FONTS.sys, fontSize: ".86rem",
    color: B.text, outline: "none",
    transition: "border-color .18s",
  };

  return (
    <section id="contato" style={{
      background: B.cream,
      padding: "96px 1.5rem",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "5rem", alignItems: "start",
        }}>

          {/* Left */}
          <Fade>
            <span className="label" style={{ color: B.accent, display: "block", marginBottom: ".7rem" }}>
              contato
            </span>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: B.ink, fontWeight: 400, lineHeight: 1.1,
              marginBottom: "1rem",
            }}>
              Pronto para parar de pagar taxa?
            </h2>
            <p style={{
              fontFamily: FONTS.sys, fontSize: ".86rem",
              color: B.muted, lineHeight: 1.8, marginBottom: "2rem",
            }}>
              Demo gratuita, sem compromisso. A gente entende o seu negócio antes de mostrar qualquer proposta.
            </p>

            {[
              ["Demo gratuita em 24h",      "●"],
              ["No ar em até 7 dias","●"],
              ["Sem fidelidade obrigatória", "●"],
              ["Suporte em português",       "●"],
            ].map(([text]) => (
              <div key={text} style={{
                display: "flex", alignItems: "center", gap: ".75rem",
                fontFamily: FONTS.sys, fontSize: ".8rem",
                color: B.brown, marginBottom: ".55rem",
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: B.accent, flexShrink: 0,
                }} />
                {text}
              </div>
            ))}
          </Fade>

          {/* Right — form */}
          <Fade delay={.12}>
            <div style={{
              background: "#fff",
              border: `1px solid ${B.cream2}`,
              padding: "2.4rem",
            }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: `${B.accent}12`,
                    border: `1px solid ${B.accent}28`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.2rem",
                    fontSize: "1.4rem",
                  }}>✓</div>
                  <div style={{
                    fontFamily: FONTS.serif, fontSize: "1.2rem",
                    color: B.ink, marginBottom: ".6rem",
                  }}>
                    Recebemos, {f.name}!
                  </div>
                  <p style={{
                    fontFamily: FONTS.sys, fontSize: ".8rem",
                    color: B.muted, lineHeight: 1.65,
                  }}>
                    Nossa equipe vai entrar em contato via WhatsApp em até 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3 style={{
                    fontFamily: FONTS.serif, fontSize: "1.1rem",
                    color: B.ink, marginBottom: "1.4rem",
                  }}>Solicitar demonstração</h3>

                  {[
                    { k: "name",  l: "Seu nome",       p: "Maria Silva"       },
                    { k: "phone", l: "WhatsApp",        p: "(48) 9 9999-9999"  },
                    { k: "city",  l: "Cidade / Estado", p: "Florianópolis, SC" },
                  ].map(fi => (
                    <div key={fi.k} style={{ marginBottom: ".9rem" }}>
                      <label style={{
                        display: "block",
                        fontFamily: FONTS.sys, fontSize: ".6rem",
                        letterSpacing: ".1em", textTransform: "uppercase",
                        color: B.muted, marginBottom: ".32rem",
                      }}>{fi.l}</label>
                      <input
                        type="text" value={f[fi.k]} required
                        placeholder={fi.p}
                        onChange={e => setF({ ...f, [fi.k]: e.target.value })}
                        style={inputStyle}
                        onFocus={e  => e.target.style.borderColor = B.accent}
                        onBlur={e   => e.target.style.borderColor = B.line}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: "1.4rem" }}>
                    <label style={{
                      display: "block",
                      fontFamily: FONTS.sys, fontSize: ".6rem",
                      letterSpacing: ".1em", textTransform: "uppercase",
                      color: B.muted, marginBottom: ".32rem",
                    }}>Segmento</label>
                    <select
                      value={f.seg}
                      onChange={e => setF({ ...f, seg: e.target.value })}
                      style={{ ...inputStyle }}
                    >
                      <option value="padaria">Padaria / Confeitaria</option>
                      <option value="cafe">Café / Coffee Shop</option>
                      <option value="restaurante">Restaurante</option>
                      <option value="adega">Adega / Loja de Vinhos</option>
                      <option value="conveniencia">Conveniência</option>
                      <option value="rede">Rede / Franquia</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="gt-btn gt-btn-primary"
                    style={{ width: "100%", justifyContent: "center", padding: ".82rem" }}
                  >
                    Quero minha demonstração →
                  </button>

                  <p style={{
                    fontFamily: FONTS.sys, fontSize: ".6rem",
                    color: B.muted, textAlign: "center", marginTop: ".7rem",
                  }}>
                    Sem spam. Retorno exclusivo via WhatsApp.
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
