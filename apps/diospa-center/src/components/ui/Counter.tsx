import { useEffect, useState } from "react";
interface CounterProps {
  target: number;          // El número final al que debe llegar
  duration?: number;       // Cuánto tiempo tarda el conteo completo (en milisegundos)
  animate: boolean;        // La señal que viene de ScrollAnimate para arrancar
  decimals?: number;       // Cantidad de decimales (ej: 1 para el 4.9)
  suffix?: string;         // Letras o símbolos al final (ej: "%")
}

export function Counter({ target, duration = 1500, animate, decimals = 0, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Si la sección no es visible, reiniciamos a cero (Estilo K-Pelo infinito)
    if (!animate) {
      setCount(0);
      return;
    }

    if (target === 0) return;

    const totalFrames = Math.round(duration / 16); 
    const increment = target / totalFrames;
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const nextValue = increment * frame;
      
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(nextValue);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, animate]);

  // Formateo inteligente: Conserva tu lógica "K" para números grandes,
  // y añade soporte para decimales y sufijos en números pequeños.
  const getDisplayValue = () => {
    if (target >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return `${count.toFixed(decimals)}${suffix}`;
  };

  return <span>{getDisplayValue()}</span>;
}