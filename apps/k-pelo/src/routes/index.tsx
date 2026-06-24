import{
   Hero,
   About,
   Services,
   Gallery,
   Testimonials,
   FinalCTA,
   Contact,
   AgencyContactBanner,
   Footer,
   Nav,
   FloatingWhatsApp,

}from "@/components/sections";


import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "K-Pelo Center | Salón de Belleza Premium en Santiago, RD" },
      { name: "description", content: "Salón de belleza y cuidado capilar en Santiago de los Caballeros. Cortes, coloración, tratamientos y manicura. Agenda tu cita por WhatsApp." },
      
      // Open Graph / Facebook / WhatsApp
      { property: "og:title", content: "K-Pelo Center | Belleza y Estilo en Santiago" },
      { property: "og:description", content: "Expertos en belleza y cuidado capilar. Agenda tu cita por WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_DO" },
      { property: "og:url", content: "https://k-pelo.lucian-creative.lat/" },
      { property: "og:image", content: "https://k-pelo.lucian-creative.lat/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "K-Pelo Center | Belleza y Estilo en Santiago" },
      { name: "twitter:description", content: "Expertos en belleza y cuidado capilar. Agenda tu cita por WhatsApp." },
      { name: "twitter:image", content: "https://k-pelo.lucian-creative.lat/og-image.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "name": "K-Pelo Center",
          "image": "https://k-pelo.lucian-creative.lat/og-image.jpg",
          "telephone": "+18092767878",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Juan Pablo Duarte 115",
            "addressLocality": "Santiago de los Caballeros",
            "addressCountry": "DO"
          },
          "openingHours": "Mo-Sa 09:00-19:00",
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "127"
          },
          "sameAs": ["https://www.facebook.com/kpelocenter"]
        })
      }
    ]
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <FinalCTA />
        
        
        {/* 🌟 BANNER DE AGENCIA: Perfectamente ubicado tras el mapa y con espaciado natural antes del Footer */}
        <AgencyContactBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}