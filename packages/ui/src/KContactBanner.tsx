import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

interface KContactBannerProps {
  waLink: string;
}

export function KContactBanner({ waLink }: KContactBannerProps) {
  return (
    <section className="py-20 bg-foreground text-background overflow-hidden relative border-t border-border/10">
      {/* Destello dorado sutil de fondo para K-Pelo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent_50%)]" />
      
      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        <ScrollAnimate once={false}>
          {(isVisible) => (
            <div 
              className={`transform transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-gold text-xs uppercase tracking-[0.4em] inline-block mb-4">
                ¿Lista para un cambio inolvidable?
              </span>
              
              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight max-w-3xl mx-auto text-white">
                Tu cabello habla antes de que digas una <span className="italic text-gradient-gold">sola palabra</span>
              </h2>
              
              <p className="mt-6 text-base text-white/85 max-w-xl mx-auto leading-relaxed font-light">
                Permítenos diseñar la versión perfecta de tu estilo. Separa tu espacio exclusivo hoy mismo en Santiago.
              </p>

              {/* Botones adaptativos sin desborde */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gold text-foreground px-6 py-4 uppercase tracking-normal sm:tracking-[0.2em] text-[11px] sm:text-xs font-semibold overflow-hidden transition-all duration-300 active:scale-[0.98] hover:bg-gold/90 shadow-lg rounded-sm w-full sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4 text-foreground fill-current" />
                  <span>Agendar por WhatsApp</span>
                </a>
                
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] py-4 px-6 border border-white/30 hover:border-white text-white transition-colors duration-300 w-full sm:w-auto"
                >
                  <span>Ver Precios</span>
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