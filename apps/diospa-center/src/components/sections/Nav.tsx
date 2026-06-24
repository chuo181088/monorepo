// src/components/sections/Nav.tsx

import React from "react";
import { Button } from "@salones/ui-components/button";

interface NavItem {
  label: string;
  href: string;
}

interface NavProps {
  nombre: string;
  subnombre?: string;
  items: NavItem[];
  ctaText: string;
  ctaLink: string;
}

export default function Nav({ nombre, subnombre, items, ctaText, ctaLink }: NavProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-[0.18em] text-foreground">
            {nombre}
          </span>
          {subnombre && (
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {subnombre}
            </span>
          )}
        </a>
        
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          {items.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative overflow-hidden border border-primary/30 active:scale-95 transition-transform duration-200">
          <style>{`
            @keyframes celularShine {
              0% { left: -100%; }
              20% { left: 100%; }
              40% { left: 100%; }
              60% { left: -100%; }
              100% { left: -100%; }
            }

            .destello-movil {
              position: absolute;
              top: 0;
              width: 40px;
              height: 100%;
              background: linear-gradient(
                to right,
                transparent,
                rgba(255, 255, 255, 0.6) 50%,
                transparent
              );
              transform: skewX(-25deg);
              animation: celularShine 4s infinite ease-in-out;
              pointer-events: none;
              z-index: 10;
            }
          `}</style>

          <div className="destello-movil" />

          <Button 
            asChild 
            className="relative z-0 rounded-none px-6 tracking-wide bg-primary text-primary-foreground active:bg-primary/90 transition-colors"
          >
            <a href={ctaLink}>
              {ctaText}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}