import { createContext, useContext } from "react";

export const SEGMENTS = {
  padaria: {
    key: "padaria",
    label: "Padaria & Confeitaria",
    emoji: "🍞",
    accent: "#D4851A",
    glow: "rgba(212,133,26,.18)",
    headlineA: "Sua padaria no digital,",
    headlineItalic: "sem abrir mão",
    headlineB: "do que é seu.",
    sub: "Site e app com a sua marca, robô no WhatsApp, gestão de encomendas — tudo sem taxa de marketplace.",
    channels: ["iFood", "WhatsApp", "App Próprio", "PIX", "Encomendas"],
    ctaText: "Quero minha padaria no digital",
    pains: [
      {
        emoji: "😤",
        title: "Encomenda perdida no WhatsApp pessoal",
        desc: "Pedido de bolo chega na sua mensagem direta, misturado com foto de família. Impossível organizar.",
      },
      {
        emoji: "💸",
        title: "27% de comissão que você não vê",
        desc: "Você produz com amor e o marketplace fica com quase um terço da sua receita.",
      },
      {
        emoji: "📷",
        title: "Cardápio é foto no WhatsApp",
        desc: "Sem preço, sem estoque, sem profissionalismo. Cliente pede coisa que acabou.",
      },
    ],
    testimonial: {
      initial: "C",
      name: "Carlos Menezes",
      role: "Padaria Dom Trigo · Florianópolis, SC",
      text: "Em 2 meses do app, as vendas diretas subiram 38%. Paramos de pagar taxa pro iFood no que era pedido nosso.",
    },
  },
  cafe: {
    key: "cafe",
    label: "Café & Coffee Shop",
    emoji: "☕",
    accent: "#B8420A",
    glow: "rgba(184,66,10,.18)",
    headlineA: "Seu café no digital com",
    headlineItalic: "identidade própria.",
    headlineB: "",
    sub: "Cardápio no QR code da mesa, pedido antecipado, clube de fidelidade e app com a sua cara.",
    channels: ["QR Code Mesa", "WhatsApp", "App Próprio", "PIX", "Fidelidade"],
    ctaText: "Quero meu café no digital",
    pains: [
      {
        emoji: "📱",
        title: "QR code leva pro iFood genérico",
        desc: "O cliente escaneia e cai numa plataforma sem identidade. Você perde a conversa com o seu cliente.",
      },
      {
        emoji: "⏰",
        title: "Fila no pico sem pedido antecipado",
        desc: "Hora do almoço, galera esperando, equipe atrapalhada, cliente insatisfeito.",
      },
      {
        emoji: "💔",
        title: "Frequentador fiel sem benefício",
        desc: "O cliente que vem toda semana não tem nenhuma vantagem. Isso não é fidelização, é sorte.",
      },
    ],
    testimonial: {
      initial: "A",
      name: "Ana Luísa Ferreira",
      role: "Coffee Lab · Curitiba, PR",
      text: "O QR code da mesa mudou tudo. O cliente pede sozinho, gasta 22% mais por pedido e a equipe foca no atendimento.",
    },
  },
  restaurante: {
    key: "restaurante",
    label: "Restaurante",
    emoji: "🍽️",
    accent: "#2D7A50",
    glow: "rgba(45,122,80,.18)",
    headlineA: "Mais mesas cheias,",
    headlineItalic: "menos dependência",
    headlineB: "do iFood.",
    sub: "Canal de delivery próprio, reservas online, gestão de salão e marketplaces — um painel só.",
    channels: ["iFood", "App Próprio", "Reservas", "PIX", "Salão"],
    ctaText: "Quero reduzir dependência do iFood",
    pains: [
      {
        emoji: "📉",
        title: "Margem destruída pela comissão",
        desc: "27% por pedido no iFood. Você trabalha para pagar o marketplace, não para crescer.",
      },
      {
        emoji: "📞",
        title: "Reserva via WhatsApp: caos puro",
        desc: "Sem confirmação, sem controle de capacidade. Mesa marcada, cliente que não aparece, mesa vazia.",
      },
      {
        emoji: "🚫",
        title: "Sem dados sobre seus clientes",
        desc: "O marketplace sabe tudo sobre seu cliente. Você não sabe nada. Isso é um risco enorme.",
      },
    ],
    testimonial: {
      initial: "R",
      name: "Roberto Takahashi",
      role: "Restaurante Sabor da Terra · São Paulo, SP",
      text: "Migramos 40% dos pedidos do iFood pro app próprio em 3 meses. A margem subiu 18 pontos percentuais.",
    },
  },
  adega: {
    key: "adega",
    label: "Adega & Conveniência",
    emoji: "🍷",
    accent: "#7A3A72",
    glow: "rgba(122,58,114,.18)",
    headlineA: "Delivery próprio,",
    headlineItalic: "sem taxa",
    headlineB: "de marketplace.",
    sub: "App e site para delivery de bebidas e conveniência — rápido, rastreável e sem intermediário.",
    channels: ["WhatsApp", "App Próprio", "PIX", "Cartão", "Agendado"],
    ctaText: "Quero meu delivery próprio",
    pains: [
      {
        emoji: "🕐",
        title: "Pedido de bebida gelada no pessoal",
        desc: "Às 22h, mensagem no seu WhatsApp pessoal misturada com família. Não escala, não organiza.",
      },
      {
        emoji: "💸",
        title: "Comissão em produto de margem apertada",
        desc: "Bebida já tem margem baixa. Marketplace em cima é insustentável. A conta não fecha.",
      },
      {
        emoji: "🗺️",
        title: "Área de entrega sem controle",
        desc: "Motoboy aceita pedido longe demais, frete sai do bolso e cliente ainda fica insatisfeito.",
      },
    ],
    testimonial: {
      initial: "F",
      name: "Fernanda Lima",
      role: "Adega Bom Vinho · Porto Alegre, RS",
      text: "Nosso app de delivery próprio pagou o plano no primeiro mês. A comissão economizada no iFood virou margem pura.",
    },
  },
};

export const SegmentContext = createContext({
  segment: "padaria",
  setSegment: () => {},
});

export function useSegment() {
  return useContext(SegmentContext);
}
