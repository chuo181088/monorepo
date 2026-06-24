import { createFileRoute } from "@tanstack/react-router";
import { Hero, Philosophy, Services, Testimonials, ContactBanner, Footer, Booking, DeveloperBranding } from "@/components/sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    // El título principal fuera del arreglo meta para que TanStack lo renderice bien
    title: "La Marque Rosa | Centro de Belleza y Estética en Santiago",
    meta: [
      {
        name: "description",
        content:
          "Centro de belleza y estética en Santiago de los Caballeros. Faciales, manicura spa y masajes con atención personalizada y productos premium.",
      },
      
      // WhatsApp / Facebook / Open Graph
      { property: "og:title", content: "La Marque Rosa — Belleza y Bienestar" },
      {
        property: "og:description",
        content:
          "Donde tu belleza florece. Experiencias de estética y bienestar en el corazón de Santiago.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_DO" },
      { property: "og:url", content: "https://la-marque-rosa.lucian-creative.lat/" },
      
      // La foto que va a jalar WhatsApp (recuerda meterla en tu carpeta public)
      { property: "og:image", content: "https://la-marque-rosa.lucian-creative.lat/la-marque-og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      
      // Twitter Card (opcional, pero buena práctica)
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "La Marque Rosa — Belleza y Bienestar" },
      { name: "twitter:description", content: "Donde tu belleza florece. Experiencias de estética y bienestar en el corazón de Santiago." },
      { name: "twitter:image", content: "https://la-marque-rosa.lucian-creative.lat/la-marque-og.jpg" },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background">
      <Hero />
      <Philosophy />
      <Services />
      <Testimonials />
      <ContactBanner />
      <Booking />
      <Footer />
      <DeveloperBranding />
    </main>
  );
}