// src/components/sections/Hero.tsx
import React from "react";
import { Phone, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAnimate } from "@/components/ui/HeroAnimate";
import { cn } from "@/lib/utils";

type HeroProps = {
  microTitulo: string;
  titulo: string;
  tituloHighlight: string;
  subtitulo: string;
  descripcion: string;
  rating: string | number;
  reviewsText: string;
  ctaText: string;
  ctaLink: string;
  phoneLink: string;
  phoneDisplay: string;
  videoUrl: string;
  fallbackImage: string;
};

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 text-primary" />
      ))}
    </div>
  );
}

export default function Hero({
  microTitulo,
  titulo,
  tituloHighlight,
  subtitulo,
  descripcion,
  rating,
  reviewsText,
  ctaText,
  ctaLink,
  phoneLink,
  phoneDisplay,
  videoUrl,
  fallbackImage,
}: HeroProps) {
  return (
    <HeroAnimate>
      {(showEffects) => (
        <section id="top" className="relative isolate overflow-hidden">
          {/* 🎥 Video de fondo con desenfoque suave */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className={cn(
              "absolute inset-0 -z-10 h-full w-full object-cover transform-gpu transition-all duration-[1200ms] ease-out",
              showEffects ? "blur-0 scale-100 opacity-80" : "blur-[5px] scale-105 opacity-30"
            )}
          >
            <source src={videoUrl} type="video/mp4" />
            <img
              src={fallbackImage}
              alt={`${titulo} ${subtitulo}`}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </video>

          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/55 to-background/85" />

          <div className="mx-auto max-w-7xl px-6 pt-28 pb-32 md:pt-40 md:pb-48">
            {/* CONTENEDOR PADRE: Efecto de "emergencia" (escala + traslación) */}
            <div
              className={cn(
                "max-w-2xl flex flex-col will-change-[transform,opacity] backface-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                showEffects 
                  ? "translate-y-0 opacity-100 scale-100" 
                  : "translate-y-6 opacity-0 scale-[0.98]"
              )}
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary mb-8">
                <span className="h-px w-10 bg-primary" />
                {microTitulo}
              </div>

              <h1
                style={{ 
                  textShadow: "0 2px 4px rgba(0,0,0,.15), 0 6px 12px rgba(0,0,0,.1)" 
                }}
                className="font-serif text-5xl md:text-7xl leading-[1.05] text-foreground"
              >
                {titulo}
                <br />
                <span className="italic text-primary">{tituloHighlight}</span> {subtitulo}
              </h1>

              <p
                style={{ textShadow: "0 1px 2px rgba(0,0,0,.1)" }}
                className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
              >
                {descripcion}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="relative overflow-hidden border border-primary/30 active:scale-95 transition-transform duration-200">
                  <div className="destello-movil" />
                  <Button
                    asChild
                    size="lg"
                    className="relative z-0 rounded-none px-8 py-6 text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground active:bg-primary/90 transition-colors"
                  >
                    <a href={ctaLink} className="flex items-center">
                      {ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <a
                  href={phoneLink}
                  className="flex items-center gap-2 px-4 py-3 min-h-[44px] text-sm text-foreground border-b border-foreground/30 hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {phoneDisplay}
                </a>
              </div>

              <div
                style={{ textShadow: "0 1px 2px rgba(0,0,0,.1)" }}
                className="mt-12 flex items-center gap-3 text-sm text-muted-foreground"
              >
                <Stars />
                <span>
                  <span className="text-foreground font-medium">{rating}</span> · {reviewsText}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </HeroAnimate>
  );
}