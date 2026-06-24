// src/config/diospa.ts

export const diospaConfig = {
  // Identidad
  nombre: "DIOSPA",
  subnombre: "Center",
  
  // Contacto
  telefono: {
    display: "+1 (809) 000-0000",
    link: "tel:+18090000000",
    whatsapp: "https://wa.me/18090000000"
  },
  email: "reservas@diospacenter.com",
  direccion: "C. Roman Franco 8, Santiago de los Caballeros 51000",
  
  // SEO
  seo: {
    title: "Diospa Center — Bienestar y Estética Premium en Santiago",
    description: "Vive una experiencia de relajación total. Tratamientos faciales, corporales y masajes de lujo en Santiago.",
    ogImage: "https://diospa-center.lucian-creative.lat/diospa-og.jpg",
    url: "https://diospa-center.lucian-creative.lat/"
  },
  
  // Hero
hero: {
    microTitulo: "Tu Santuario de Bienestar",
    titulo: "DIOSPA CENTER:",
    tituloHighlight: "Bienestar",
    subtitulo: "en Santiago.",
    descripcion: "Experimenta la relajación divina y renueva tu energía. Un espacio íntimo y sereno, calificado con 4.9 estrellas por nuestros clientes.",
    rating: "4.9",
    reviewsText: "Google Reviews",
    ctaText: "Reservar Mi Experiencia",
    videoUrl: "/videos/hero-spa1.mp4",
    fallbackImage: "/images/hero-spa.jpg" // Imagen local por ahora
  },
  
  // Nav
  nav: {
    items: [
      { label: "Filosofía", href: "#filosofia" },
      { label: "Servicios", href: "#servicios" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" }
    ],
    ctaText: "Reservar"
  },
  
  // Servicios
servicios: {
    microTitulo: "Tratamientos",
    titulo: "Descubre nuestros tratamientos",
    tituloHighlight: "exclusivos",
    ctaText: "Ver Todos los Servicios",
    items: [
      {
        id: "masajes",
        icon: "sparkles",
        title: "Masajes Terapéuticos",
        description: "Experimenta la relajación divina y renueva tu energía con técnicas manuales profundas diseñadas para liberar tensiones.",
        image: "/images/service-massage.jpg" // Imagen local por ahora
      },
      {
        id: "faciales",
        icon: "leaf",
        title: "Faciales Rejuvenecedores",
        description: "Tratamientos personalizados que devuelven la luminosidad, hidratación y juventud natural a tu rostro.",
        image: "/images/service-facial.jpg"
      },
      {
        id: "corporales",
        icon: "flower2",
        title: "Rituales Corporales",
        description: "Una inmersión completa de exfoliación y nutrición que renueva la textura de tu piel bajo una atmósfera serena.",
        image: "/images/service-body.jpg"
      }
    ]
  },
  
  // Booking (SIMPLE por ahora, sin Supabase)
booking: {
    microTitulo: "Reserva Inmediata",
    titulo: "Comienza tu viaje hacia la",
    tituloHighlight: "serenidad",
    descripcion: "Selecciona tu tratamiento, fecha y hora preferida. Nuestro equipo se pondrá en contacto contigo en minutos para confirmar.",
    botonText: "Solicitar Reserva Ahora",
    servicios: [
      { value: "masaje", label: "Masajes Terapéuticos" },
      { value: "facial", label: "Faciales Rejuvenecedores" },
      { value: "corporal", label: "Rituales Corporales" }
    ]
  },
philosophy: {
  microTitulo: "Nuestra Filosofía",
  titulo: "El arte del",
  tituloHighlight: "bienestar",
  descripcion: "En DIOSPA CENTER, fusionamos técnicas ancestrales y modernas para ofrecerte una experiencia de relajación inigualable. Nuestro compromiso es tu paz interior y tu belleza exterior.",
  cita: "Cada visita es un viaje hacia la serenidad — un ritual cuidadosamente diseñado para devolverte a tu centro.",
  stats: [
    { value: "4.9", label: "Google" },
    { value: "100%", label: "Personalizado" },
    { value: "L–S", label: "9AM – 7PM" }
  ],
  imagen: "/images/philosophy.jpg",
  imagenAlt: "Orquídea blanca, símbolo del bienestar de DIOSPA CENTER"
  }, // <-- Add a comma here
testimonials: {
  microTitulo: "Prueba Social",
  titulo: "La experiencia que",
  tituloHighlight: "nuestros clientes aman",
  rating: "4.9 / 5.0",
  ratingTexto: "Estrellas en Google",
  items: [
    {
      quote: "El mejor spa de Santiago, sin duda. La atención es impecable y sales sintiéndote completamente renovado. ¡Una experiencia divina!",
      author: "María G."
    },
    {
      quote: "Un oasis de paz en medio de la ciudad. Los masajes terapéuticos son verdaderamente sanadores. Vuelvo cada mes.",
      author: "Andrea P."
    },
    {
      quote: "Servicio profesional, ambiente impecable y tratamientos faciales que realmente transforman la piel. Mi lugar favorito.",
      author: "Camila R."
    }
  ]
  }, // <-- Add a comma here
contactBanner: {
  microTitulo: "¿Listo para transformar tu espacio?",
  titulo: "Comienza hoy tu viaje hacia el",
  tituloHighlight: "bienestar absoluto",
  descripcion: "Hablemos de tus necesidades y diseñemos una experiencia a tu medida. Nuestro equipo está listo para recibirte.",
  botonWhatsapp: "Conversar por WhatsApp",
  botonWhatsappLink: "https://wa.me/18090000000",
  botonReserva: "Ver disponibilidad",
  botonReservaLink: "#reservar"
}
};

