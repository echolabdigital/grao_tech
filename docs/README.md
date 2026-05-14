# Grão Tech — Projeto Completo
> Vertical de Panificação, Café & Conveniência · by NewtonIA

---

## Estrutura

```
graotech/
├── src/
│   ├── index.jsx          ← Entry point + seções inline
│   ├── App.jsx            ← Tokens de cor, hooks, CSS global
│   ├── Logo.jsx           ← GTLogo + GTMark (SVG components)
│   └── sections/
│       ├── Nav.jsx        ← Navbar sticky com scroll detection
│       ├── Hero.jsx       ← Hero com counter animado
│       ├── Solutions.jsx  ← Grid de 6 soluções com hover
│       ├── Pricing.jsx    ← 3 planos + toggle anual/mensal
│       ├── Contact.jsx    ← Formulário → abre WhatsApp
│       └── Footer.jsx     ← Rodapé com colunas de links
├── brand/
│   ├── tokens.json        ← Design tokens (cores, tipo, voz)
│   ├── BRANDBOOK.md       ← Guia de marca completo
│   ├── logo-dark.svg      ← Logo exportado (fundo claro)
│   ├── logo-light.svg     ← Logo exportado (fundo escuro)
│   └── palette.svg        ← Paleta de cores visual
└── docs/
    └── README.md          ← Este arquivo
```

---

## Stack

- **React 18** + hooks (useState, useEffect, useRef)
- **CSS-in-JS** — style props inline, sem lib externa
- **IntersectionObserver** — fade-in no scroll
- **SVG puro** — logo sem dependências de fonte

---

## Como rodar

```bash
npx create-react-app graotech-app
cd graotech-app

# Copie os arquivos src/ para dentro do projeto
cp -r /path/to/graotech/src/* src/

npm start
```

---

## Logo

```jsx
import { GTLogo, GTMark } from "./Logo";

// Logo completo — fundo claro
<GTLogo variant="dark" size={48} />

// Logo completo — fundo escuro
<GTLogo variant="light" size={48} />

// Símbolo isolado (app icon, favicon)
<GTMark size={40} />
```

---

## Brand Tokens

```js
import { B } from "./App";

// Exemplo
<div style={{ background: B.terra, color: B.cream }}>
  Botão CTA
</div>
```

Todos os tokens em `brand/tokens.json`.

---

## Integrações mapeadas

| Canal | Status |
|-------|--------|
| iFood Merchant API | Pronto para configurar |
| WhatsApp Business (FluiChat) | Pronto |
| PIX (Stone / Pagar.me) | Pronto |
| PDV / ERP (Bling, Omie) | Via webhook |
| Melhor Envio | Via API |

---

## Hierarquia de Marca

```
NewtonIA
└── Grão Tech  (panificação, café, conveniência)
     └── "by NewtonIA" em rodapés
```

---

## Domínios sugeridos

- `graotech.com.br`
- `grao.tech`
- `graotech.app`

---

## Contato

**NewtonIA** · newtonIA.com.br  
Desenvolvido para o mercado de panificação brasileiro.
