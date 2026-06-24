import React from "react";
import { Phone } from "lucide-react";

interface TopBarProps {
  phoneLink: string;
  phoneDisplay: string;
}

export function TopBar({ phoneLink, phoneDisplay }: TopBarProps) {
  return (
    <div className="hidden md:block border-b border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide text-muted-foreground">
        <span className="uppercase">Santiago de los Caballeros · República Dominicana</span>
        <a 
          href={phoneLink} 
          className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
        >
          <Phone className="h-3.5 w-3.5" /> {phoneDisplay}
        </a>
      </div>
    </div>
  );
}