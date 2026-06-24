// src/components/sections/Services.tsx

import React from "react";
import { Sparkles, Leaf, Flower2, type LucideIcon } from "lucide-react";
import { Button } from "@salones/ui-components/button";
import { ScrollAnimate } from "@salones/ui-components/ScrollAnimate";

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  leaf: Leaf,
  flower2: Flower2
};

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface ServicesProps {
  microTitulo: string;
  titulo: string;
  tituloHighlight: string;
  servicios: Service[];
  ctaText: string;
  ctaLink: string;
}

export default function Services({ 
  microTitulo, 
  titulo, 
  tituloHighlight, 
  servicios, 
  ctaText, 
  ctaLink 
}: ServicesProps) {
  return (
    <section id="servicios" className="py-28 md:py-40 bg-secondary/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        <ScrollAnimate once={false}>
          {(isVisible) => (
            <div 
              className={`max-w-2xl mb-20 transform transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="text-xs uppercase tracking-[0.35em] text-primary mb-6">
                {microTitulo}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
                {titulo} <span className="italic">{tituloHighlight}</span>.
              </h2>
            </div>
          )}
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-10">
          {servicios.map((s) => {
            const Icon = ICONS[s.icon] || Sparkles;
            
            return (
              <ScrollAnimate key={s.id} once={false}>
                {(isVisible) => (
                  <article className="group bg-background border border-border/40 transition-colors duration-500 hover:border-primary/30">
                    <div className="relative h-72 w-full overflow-hidden bg-secondary">
                      <div 
                        className={`absolute inset-0 z-10 bg-background transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] origin-top ${
                          isVisible ? "scale-y-0" : "scale-y-100"
                        }`}
                      />

                      <img
                        src={s.image}
                        alt={s.title}
                        width={1024}
                        height={1024}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 border border-foreground/5 z-20 pointer-events-none" />
                    </div>
                    
                    <div className="p-8 space-y-4">
                      <Icon className="h-5 w-5 text-primary/80 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                      <h3 className="font-serif text-2xl text-foreground font-light tracking-wide">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.description}</p>
                    </div>
                  </article>
                )}
              </ScrollAnimate>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="relative rounded-none px-8 py-6 text-sm tracking-[0.15em] uppercase border-transparent bg-background text-foreground overflow-hidden hover:bg-foreground hover:text-background active:scale-[0.97] transition-all duration-300 select-none touch-manipulation group/btn"
          >
            <a href={ctaLink} className="relative block">
              <div 
                className="absolute inset-[-200%] pointer-events-none z-0"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 50%, var(--color-primary, #C5A880) 80%, transparent 100%)',
                  animation: 'borde-grueso 3.5s infinite linear',
                }}
              />
              <div className="absolute inset-[2.5px] bg-background group-hover/btn:bg-foreground transition-colors duration-300 z-0" />
              <span className="relative z-10">
                {ctaText}
              </span>
              <style>{`
                @keyframes borde-grueso {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}