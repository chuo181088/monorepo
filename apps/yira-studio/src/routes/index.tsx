import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Hero, Services, Testimonials, Footer, BookingCTA, Contact, Header, About,DeveloperBranding } from "@/components/site";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    // Título principal limpio para la pestaña del navegador
    title: "Centro de Belleza Yira — Salón de Belleza en Santiago de los Caballeros",
    meta: [
      {
        name: "description",
        content:
          "Salón de belleza en Santiago de los Caballeros. Estilistas expertos en cortes, coloración, manicura y tratamientos faciales. Reserva tu cita online en Centro de Belleza Yira.",
      },
      
      // WhatsApp / Facebook / Open Graph (URLs absolutas optimizadas)
      { property: "og:title", content: "Centro de Belleza Yira — Salón de Belleza en Santiago" },
      {
        property: "og:description",
        content: "Tu belleza, nuestra pasión. Reserva tu cita en el salón de referencia en Santiago de los Caballeros.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_DO" },
      { property: "og:url", content: "https://yira-studio.lucian-creative.lat/" },
      
      // Imagen de portada única (Recuerda subirla a tu carpeta public como centro-yira-og.jpg)
      { property: "og:image", content: "https://yira-studio.lucian-creative.lat/centro-yira-og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Centro de Belleza Yira — Salón de Belleza en Santiago" },
      { name: "twitter:description", content: "Tu belleza, nuestra pasión. Reserva tu cita en el salón de referencia en Santiago de los Caballeros." },
      { name: "twitter:image", content: "https://yira-studio.lucian-creative.lat/centro-yira-og.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://yira-studio.lucian-creative.lat/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Centro de Belleza Yira",
          image: "https://yira-studio.lucian-creative.lat/centro-yira-og.jpg",
          telephone: "+1-809-581-2222",
          email: "contacto@yira-studio.lucian-creative.lat",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Las Carreras",
            addressLocality: "Santiago de los Caballeros",
            postalCode: "51000",
            addressCountry: "DO",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.3", reviewCount: "120" },
          openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
          sameAs: ["https://www.facebook.com/CentroDeBellezaYira"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      <DeveloperBranding />
      <FloatingWhatsApp phoneLink="https://wa.me/18095812222" />
    </div>
  );
}