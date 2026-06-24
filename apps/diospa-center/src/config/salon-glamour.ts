// src/config/salon-glamour.ts

export const salonGlamourConfig = {
  nombre: "Salón",
  subnombre: "Glamour",
  
  telefono: {
    display: "809-555-9876",
    link: "tel:+18095559876",
    whatsapp: "https://wa.me/18095559876"
  },
  email: "reservas@salonglamour.com",
  direccion: "Av. George Washington 501, Santo Domingo",
  
  seo: {
    title: "Salón Glamour — Uñas y Belleza en Santo Domingo",
    description: "Manicure, pedicure y uñas acrílicas. Los mejores precios en Santo Domingo. Reserva tu cita ahora.",
    ogImage: "https://salon-glamour.tusistema.com/og.jpg",
    url: "https://salon-glamour.tusistema.com/"
  },
  
  hero: {
    microTitulo: "Tu Belleza, Nuestra Pasión",
    titulo: "Salón Glamour:",
    tituloHighlight: "Belleza",
    subtitulo: "en Santo Domingo.",
    descripcion: "Especialistas en uñas acrílicas, manicure y pedicure. Más de 500 clientas satisfechas nos respaldan.",
    rating: "4.8",
    reviewsText: "Google Reviews",
    ctaText: "Reservar Mi Cita",
    videoUrl: "/videos/salon-glamour.mp4",
    fallbackImage: "/images/salon-glamour-hero.jpg"
  },
  
  nav: {
    items: [
      { label: "Filosofía", href: "#filosofia" },
      { label: "Servicios", href: "#servicios" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" }
    ],
    ctaText: "Reservar"
  },
  
  philosophy: {
    microTitulo: "Nuestra Filosofía",
    titulo: "El arte de la",
    tituloHighlight: "belleza",
    descripcion: "En Salón Glamour, nos especializamos en hacer que cada clienta se sienta hermosa y confiada. Usamos productos de alta calidad y técnicas modernas para lograr uñas perfectas que duren.",
    cita: "Cada set de uñas es una obra de arte — diseñada para reflejar tu estilo único y personalidad.",
    stats: [
      { value: "4.8", label: "Google" },
      { value: "500+", label: "Clientas" },
      { value: "L–S", label: "9AM – 7PM" }
    ],
    imagen: "/images/salon-glamour-philosophy.jpg",
    imagenAlt: "Uñas acrílicas perfectas, símbolo de belleza de Salón Glamour"
  },
  
  servicios: {
    microTitulo: "Nuestros Servicios",
    titulo: "Servicios de",
    tituloHighlight: "belleza",
    ctaText: "Ver Todos los Servicios",
    items: [
      {
        id: "manicure",
        icon: "sparkles",
        title: "Manicure",
        description: "Manicure profesional con esmaltes de alta calidad. Incluye limado, cutículas y esmaltado. Duración: 30 minutos.",
        image: "/images/manicure.jpg"
      },
      {
        id: "pedicure",
        icon: "leaf",
        title: "Pedicure",
        description: "Pedicure spa con exfoliación, hidratación profunda y esmaltado. Tus pies como nuevos. Duración: 45 minutos.",
        image: "/images/pedicure.jpg"
      },
      {
        id: "acrilicas",
        icon: "flower2",
        title: "Uñas Acrílicas",
        description: "Uñas acrílicas con diseños personalizados. Incluye forma, largo y diseño a tu gusto. Duración: 90 minutos.",
        image: "/images/acrilicas.jpg"
      }
    ]
  },
  
  testimonials: {
    microTitulo: "Lo Que Dicen Nuestras Clientas",
    titulo: "La experiencia que",
    tituloHighlight: "nuestras clientas aman",
    rating: "4.8 / 5.0",
    ratingTexto: "Estrellas en Google",
    items: [
      {
        quote: "El mejor salón de uñas de Santo Domingo. Las acrílicas me duran perfectas por 3 semanas. ¡Súper recomendadas!",
        author: "Jessica M."
      },
      {
        quote: "Atención increíble, precios justos y el trabajo es impecable. Siempre salgo feliz con mis uñas. Vuelvo cada mes.",
        author: "Laura P."
      },
      {
        quote: "Me encanta el ambiente y la profesionalidad. Los diseños son hermosos y el pedicure spa es relajante. Mi lugar favorito.",
        author: "Carmen R."
      }
    ]
  },
  
  booking: {
    microTitulo: "Reserva Tu Cita",
    titulo: "Agenda tu",
    tituloHighlight: "cita",
    descripcion: "Selecciona el servicio, fecha y hora. Te confirmaremos por WhatsApp en minutos.",
    botonText: "Solicitar Cita Ahora",
    servicios: [
      { value: "manicure", label: "Manicure - RD$500" },
      { value: "pedicure", label: "Pedicure - RD$600" },
      { value: "acrilicas", label: "Uñas Acrílicas - RD$1,500" }
    ]
  },
  
  contactBanner: {
    microTitulo: "¿Lista para lucir hermosa?",
    titulo: "Reserva tu cita hoy y",
    tituloHighlight: "brilla con confianza",
    descripcion: "Nuestro equipo de especialistas está listo para atenderte. Agenda tu cita y déjanos cuidar de tu belleza.",
    botonWhatsapp: "Conversar por WhatsApp",
    botonWhatsappLink: "https://wa.me/18095559876",
    botonReserva: "Ver disponibilidad",
    botonReservaLink: "#reservar"
  }
};