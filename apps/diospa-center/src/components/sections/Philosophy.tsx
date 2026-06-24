// src/components/sections/Philosophy.tsx

import React from "react";
import { ScrollAnimate } from "@salones/ui-components/ScrollAnimate";
import { Counter } from "@salones/ui-components/Counter";

interface StatProps {
  value: string;
  label: string;
  triggerAnimation: boolean;
}

function Stat({ value, label, triggerAnimation }: StatProps) {
  if (value === "L–S") {
    return (
      <div className="flex flex-col items-center justify-center">
        <span className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground">
          L–S
        </span>
        <span className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
          9AM – 7PM
        </span>
      </div>
    );
  }

  const isPercent = value.includes("%");
  const targetNumber = parseFloat(value);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground">
        {!isNaN(targetNumber) ? (
          <Counter
            target={targetNumber}
            animate={triggerAnimation}
            duration={3000} 
            decimals={isPercent ? 0 : 1} 
            suffix={isPercent ? "%" : ""} 
          />
        ) : (
          value
        )}
      </span>
      <span className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

interface PhilosophyProps {
  microTitulo: string;
  titulo: string;
  tituloHighlight: string;
  descripcion: string;
  cita: string;
  stats: Array<{ value: string; label: string }>;
  imagen: string;
  imagenAlt: string;
}

export default function Philosophy({
  microTitulo,
  titulo,
  tituloHighlight,
  descripcion,
  cita,
  stats,
  imagen,
  imagenAlt,
}: PhilosophyProps) {
  return (
    <section id="filosofia" className="py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        <ScrollAnimate once={false} className="order-1 md:order-2 max-w-lg">
          {(isVisible) => (
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-primary mb-6 flex items-center gap-2">
                <span className="h-[1px] w-4 bg-primary/60" /> {microTitulo}
              </div>
              <h2 className="font-serif text-4xl leading-tight text-foreground">
                {titulo} <span className="italic text-primary">{tituloHighlight}</span>.
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                {descripcion}
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 italic bg-secondary/20 py-2 pr-2">
                "{cita}"
              </p>
              
              <div className="mt-10 grid grid-cols-3 gap-2 border-t border-border/60 pt-8 text-center">
                {stats.map((stat, index) => (
                  <Stat 
                    key={index}
                    value={stat.value} 
                    label={stat.label} 
                    triggerAnimation={isVisible} 
                  />
                ))}
              </div>
            </div>
          )}
        </ScrollAnimate>

        <ScrollAnimate once={false} className="order-2 md:order-1 mt-4 md:mt-0">
          <div className="relative overflow-hidden">
            <img
              src={imagen}
              alt={imagenAlt}
              width={1200}
              height={1400}
              loading="lazy"
              className="w-full h-[24rem] md:h-[32rem] object-cover"
            />
            <div className="absolute inset-0 border border-foreground/5 pointer-events-none" />
          </div>
        </ScrollAnimate>

      </div>
    </section>
  );
}