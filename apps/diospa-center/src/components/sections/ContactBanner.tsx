// src/components/sections/ContactBanner.tsx

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { ScrollAnimate } from "@salones/ui-components/ScrollAnimate";

interface ContactBannerProps {
  microTitulo: string;
  titulo: string;
  tituloHighlight: string;
  descripcion: string;
  botonWhatsapp: string;
  botonWhatsappLink: string;
  botonReserva: string;
  botonReservaLink: string;
}

export default function ContactBanner({
  microTitulo,
  titulo,
  tituloHighlight,
  descripcion,
  botonWhatsapp,
  botonWhatsappLink,
  botonReserva,
  botonReservaLink,
}: ContactBannerProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_50%)]" />
      
      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        <ScrollAnimate once={false}>
          {(isVisible) => (
            <div 
              className={`transform transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-xs uppercase tracking-[0.4em] opacity-80 inline-block mb-4">
                {microTitulo}
              </span>
              
              <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
                {titulo} <span className="italic opacity-90">{tituloHighlight}</span>
              </h2>
              
              <p className="mt-6 text-base opacity-80 max-w-xl mx-auto leading-relaxed">
                {descripcion}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={botonWhatsappLink}
                  className="group relative inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold overflow-hidden transition-all duration-300 active:scale-[0.98] hover:bg-background/95 shadow-lg"
                >
                  <span>{botonWhatsapp}</span>
                  <MessageSquare className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 text-primary" />
                </a>
                
                <a
                  href={botonReservaLink}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] py-3 px-6 border border-primary-foreground/30 hover:border-primary-foreground transition-colors duration-300"
                >
                  <span>{botonReserva}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          )}
        </ScrollAnimate>
      </div>
    </section>
  );
}