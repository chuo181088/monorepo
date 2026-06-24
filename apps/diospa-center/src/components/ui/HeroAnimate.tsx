import { useEffect, useState, ReactNode } from "react";

// Definimos las propiedades que acepta nuestro componente
interface HeroAnimateProps {
  // children es una función que recibe el estado de la animación y devuelve código JSX
  children: (showEffects: boolean) => ReactNode;
}

export function HeroAnimate({ children }: HeroAnimateProps) {
  // -------------------------------------------------------------------------
  // 📌 ESTADOS DE CONTROL
  // -------------------------------------------------------------------------
  // mounted: Detecta si la página ya se montó en el navegador (Evita parpadeos en blanco)
  const [mounted, setMounted] = useState(false);

  // ready: Espera 1 frame del navegador para evitar flash de hidratación
  const [ready, setReady] = useState(false);

  // isTop: Monitorea si el usuario está en la parte superior de la web
  const [isTop, setIsTop] = useState(true);

  // -------------------------------------------------------------------------
  // ⚙️ CONTROL DE TIEMPOS Y DETECCIÓN DE SCROLL
  // -------------------------------------------------------------------------
  useEffect(() => {
    // Activa la carga inicial inmediatamente al renderizar el componente
    setMounted(true);

    // Espera 1 frame real del navegador para evitar parpadeo inicial
    const raf = requestAnimationFrame(() => {
      setReady(true);
    });

    const handleScroll = () => {
      // ⏱️ CONTROL DE RE-ACTIVACIÓN (Ajusta los píxeles aquí si lo necesitas)
      // window.scrollY < 80: Cuando el usuario sube del todo, reactiva los efectos
      if (window.scrollY < 80) {
        setIsTop(true);

      // window.scrollY > 600: Al bajar más de 600px, "apaga" el efecto para prepararlo para la subida
      } else if (window.scrollY > 600) {
        setIsTop(false);
      }
    };

    // Escuchamos el evento de scroll nativo del navegador
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Limpieza estricta del evento al desmontar la página
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -------------------------------------------------------------------------
  // 🎯 CONDICIONAL MAESTRA (Bandera booleana de disparo)
  // -------------------------------------------------------------------------
  // Solo se anima si la página ya montó + está lista + usuario arriba
  const showEffects = mounted && ready && isTop;

  return (
    // 🛡️ CONTENEDOR HERMÉTICO: Corta de raíz cualquier desbordamiento lateral (0% scroll horizontal)
    <div className="relative w-full overflow-hidden">
      {/* Ejecutamos la función pasándole el estado actual de los efectos */}
      {children(showEffects)}
    </div>
  );
}