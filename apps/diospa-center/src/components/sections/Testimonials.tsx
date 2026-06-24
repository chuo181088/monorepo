// src/components/sections/Testimonials.tsx

import React from "react";
import { Star } from "lucide-react";
import { ScrollAnimate } from "@salones/ui-components/ScrollAnimate";

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-[color:var(--color-gold)]" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

interface Testimonio {
  quote: string;
  author: string;
}

interface TestimonialsProps {
  microTitulo: string;
  titulo: string;
  tituloHighlight: string;
  rating: string;
  ratingTexto: string;
  items: Testimonio[];
}

export default function Testimonials({
  microTitulo,
  titulo,
  tituloHighlight,
  rating,
  ratingTexto,
  items,
}: TestimonialsProps) {
  return (
    <section id="testimonios" className="py-28 md:py-40 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        <ScrollAnimate once={false}>
          {(isVisible) => (
            <div className="text-center max-w-3xl mx-auto mb-20 select-none">
              
              <div className={`text-xs uppercase tracking-[0.35em] text-primary mb-4 transition-opacity duration-[1500ms] ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
                {microTitulo}
              </div>
              
              <h2 
                className={`font-serif text-3xl md:text-5xl leading-tight text-foreground transition-all duration-[1500ms] delay-100 ease-out md:whitespace-nowrap ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {titulo} <br className="block md:hidden" />
                {tituloHighlight.split(' ')[0]} <span className="italic">{tituloHighlight.split(' ').slice(1).join(' ')}</span>
              </h2>
              
              <div className="flex justify-center mt-1.5">
                <div 
                  className="h-[2px] bg-gradient-to-r from-transparent via-[color:var(--color-gold)] to-transparent transition-all duration-[1400ms] delay-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    width: isVisible ? "300px" : "0px",
                  }}
                />
              </div>
              
              <div className={`mt-6 flex items-center justify-center gap-3 transition-all duration-[1500ms] delay-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}>
                <Stars />
                <span className="text-foreground font-medium">{rating}</span>
                <span className="text-muted-foreground text-sm">{ratingTexto}</span>
              </div>

            </div>
          )}
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, index) => {
            const esImpar = index % 2 !== 0;
            
            return (
              <ScrollAnimate key={t.author} once={false}>
                {(isVisible) => (
                  <figure 
                    className={`bg-secondary/40 p-10 border-t border-primary/40 transform transition-all duration-[1000ms] ease-[cubic-bezier(0.215,0.610,0.355,1)] ${
                      isVisible 
                        ? "opacity-100 translate-x-0" 
                        : esImpar 
                          ? "opacity-0 translate-x-10"
                          : "opacity-0 -translate-x-10"
                    }`}
                  >
                    <Stars />
                    <blockquote className="mt-6 font-serif text-xl italic text-foreground leading-relaxed">
                      "{t.quote}"
                    </blockquote>
                    <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      — {t.author}
                    </figcaption>
                  </figure>
                )}
              </ScrollAnimate>
            );
          })}
        </div>

      </div>
    </section>
  );
}