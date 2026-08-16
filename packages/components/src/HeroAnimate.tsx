// src/components/ui/HeroAnimate.tsx
"use client";

import { useEffect, useState, ReactNode } from "react";

interface HeroAnimateProps {
  children: (showEffects: boolean) => ReactNode;
}

export function HeroAnimate({ children }: HeroAnimateProps) {
  // Iniciamos en false para evitar el "mismatch" de hidratación entre SSR y Cliente
  const [isHydrated, setIsHydrated] = useState(false);
  const [showEffects, setShowEffects] = useState(true);

  useEffect(() => {
    // Marcamos que ya estamos en el cliente
    setIsHydrated(true);

    const handleScroll = () => {
      // Usamos requestAnimationFrame para que el scroll no bloquee el hilo principal
      window.requestAnimationFrame(() => {
        setShowEffects(window.scrollY < 100);
      });
    };

    // Estado inicial al montar el componente
    setShowEffects(window.scrollY < 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Si aún no se ha hidratado, renderizamos un estado inicial estable (true para que se vea)
  // Esto evita que el usuario vea el Hero "oculto" por un milisegundo al cargar
  return (
    <div className="relative w-full overflow-hidden">
      {children(isHydrated ? showEffects : true)}
    </div>
  );
}