// src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@salones/ui-components/sonner";
import { FloatingWhatsApp } from "@salones/ui-components/FloatingWhatsApp";

import { 
  Hero, Philosophy, Services, Testimonials, ContactBanner, 
  Footer, TopBar, Nav, Booking, LocationContact 
} from "@/components/sections";

// 🆕 Importar configuración
import { diospaConfig } from "@/config/diospa";

export const Route = createFileRoute("/")({
  head: () => ({
    title: diospaConfig.seo.title,
    meta: [
      { name: "description", content: diospaConfig.seo.description },
      { property: "og:title", content: diospaConfig.seo.title },
      { property: "og:description", content: diospaConfig.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: diospaConfig.seo.url },
      { property: "og:image", content: diospaConfig.seo.ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: diospaConfig.seo.url }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      
      <TopBar 
        phoneLink={diospaConfig.telefono.whatsapp} 
        phoneDisplay={diospaConfig.telefono.display} 
      />
      
      <Nav 
        nombre={diospaConfig.nombre}
        subnombre={diospaConfig.subnombre}
        items={diospaConfig.nav.items}
        ctaText={diospaConfig.nav.ctaText}
        ctaLink="#reservar"
      />
      
      <Hero 
        isActive={true}
        microTitulo={diospaConfig.hero.microTitulo}
        titulo={diospaConfig.hero.titulo}
        tituloHighlight={diospaConfig.hero.tituloHighlight}
        subtitulo={diospaConfig.hero.subtitulo}
        descripcion={diospaConfig.hero.descripcion}
        rating={diospaConfig.hero.rating}
        reviewsText={diospaConfig.hero.reviewsText}
        ctaText={diospaConfig.hero.ctaText}
        ctaLink="#reservar"
        phoneLink={diospaConfig.telefono.whatsapp}
        phoneDisplay={diospaConfig.telefono.display}
        videoUrl={diospaConfig.hero.videoUrl}
        fallbackImage={diospaConfig.hero.fallbackImage}
      />
      
      <Philosophy

        microTitulo={diospaConfig.philosophy.microTitulo}
        titulo={diospaConfig.philosophy.titulo}
        tituloHighlight={diospaConfig.philosophy.tituloHighlight}
        descripcion={diospaConfig.philosophy.descripcion}
        cita={diospaConfig.philosophy.cita}
        stats={diospaConfig.philosophy.stats}
        imagen={diospaConfig.philosophy.imagen}
        imagenAlt={diospaConfig.philosophy.imagenAlt}
        />
      
      <Services 
        microTitulo={diospaConfig.servicios.microTitulo}
        titulo={diospaConfig.servicios.titulo}
        tituloHighlight={diospaConfig.servicios.tituloHighlight}
        servicios={diospaConfig.servicios.items}
        ctaText={diospaConfig.servicios.ctaText}
        ctaLink="#reservar"
      />
      
      <Testimonials

        microTitulo={diospaConfig.testimonials.microTitulo}
        titulo={diospaConfig.testimonials.titulo}
        tituloHighlight={diospaConfig.testimonials.tituloHighlight}
        rating={diospaConfig.testimonials.rating}
        ratingTexto={diospaConfig.testimonials.ratingTexto}
        items={diospaConfig.testimonials.items}
      
       />
      
      {/* 🆕 BOOKING CON TODAS LAS PROPS */}
      <Booking 
        microTitulo={diospaConfig.booking.microTitulo}
        titulo={diospaConfig.booking.titulo}
        tituloHighlight={diospaConfig.booking.tituloHighlight}
        descripcion={diospaConfig.booking.descripcion}
        botonText={diospaConfig.booking.botonText}
        phoneLink={diospaConfig.telefono.whatsapp}
        email={diospaConfig.email}
        servicios={diospaConfig.booking.servicios}
      />
      
      <LocationContact 
        address={diospaConfig.direccion}
        phoneDisplay={diospaConfig.telefono.display}
        phoneLink={diospaConfig.telefono.whatsapp}
        email={diospaConfig.email}
      />
      
      <ContactBanner      
        microTitulo={diospaConfig.contactBanner.microTitulo}
        titulo={diospaConfig.contactBanner.titulo}
        tituloHighlight={diospaConfig.contactBanner.tituloHighlight}
        descripcion={diospaConfig.contactBanner.descripcion}
        botonWhatsapp={diospaConfig.contactBanner.botonWhatsapp}
        botonWhatsappLink={diospaConfig.contactBanner.botonWhatsappLink}
        botonReserva={diospaConfig.contactBanner.botonReserva}
        botonReservaLink={diospaConfig.contactBanner.botonReservaLink}    
      />


      
      <Footer 
        nombre={diospaConfig.nombre}
        subnombre={diospaConfig.subnombre}
        address={diospaConfig.direccion}
        phoneDisplay={diospaConfig.telefono.display}
        phoneLink={diospaConfig.telefono.whatsapp}
        email={diospaConfig.email}
      />
      
      <FloatingWhatsApp whatsappLink={diospaConfig.telefono.whatsapp} />
    </div>
  );
}