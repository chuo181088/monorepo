// src/components/sections/Footer.tsx

import React from "react";

interface FooterProps {
  nombre: string;
  subnombre?: string;
  address: string;
  phoneDisplay: string;
  phoneLink: string;
  email: string;
}

export default function Footer({ nombre, subnombre, address, phoneDisplay, phoneLink, email }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/40 py-12 text-center">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        
        {/* Marca */}
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif tracking-[0.15em] text-foreground font-medium">
            {nombre} {subnombre}
          </span>
          <span className="uppercase tracking-[0.25em] text-[9px]">Santiago</span>
        </div>

        {/* Enlaces Rápidos de Contacto */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a href={phoneLink} className="hover:text-primary transition-colors">{phoneDisplay}</a>
          <a href={`mailto:${email}`} className="hover:text-primary transition-colors">{email}</a>
          <span className="max-w-[280px] md:max-w-none truncate">{address}</span>
        </div>

        {/* Copyright */}
        <div>
          &copy; {currentYear} {nombre} {subnombre}. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}