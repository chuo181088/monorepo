import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
  children: ReactNode | ((isVisible: boolean) => ReactNode);
  className?: string;
  once?: boolean;
  variant?: "default" | "curtain";
  delay?: number; // Opcional: para agregar un retraso personalizado a la animación
}

export function ScrollAnimate({ children, className = "", once = false,variant = "default", delay = 0 }: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 🛡️ BLOQUEO ESTRICTO: Si once es true, destruimos el observador de inmediato
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else {
          // SOLO se apaga el efecto si el usuario explícitamente NO quiere que sea 'once'
          if (!once) {
            setIsVisible(false);
          }
        }
      });
    },
    { 
      threshold: 0,
      rootMargin: "0px 0px -250px 0px"
    }
  );

  const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [once]);

  // 🚀 2. Lógica para elegir las clases correctas según el 'variant'
  const baseClasses = "transition-all duration-700 ease-out transform will-change-[filter,transform]";
  
  const defaultClasses = isVisible 
    ? "blur-none scale-100 opacity-100" 
    : "blur-[6px] scale-[0.95] opacity-80";
  
  const curtainClasses = isVisible ? "curtain-open" : "curtain-closed";

  // Unimos todo: clases base + clases del variante + clases personalizadas
  const finalClassName = `${className} ${baseClasses} ${variant === "curtain" ? curtainClasses : defaultClasses}`;

  return (
    <div 
      ref={domRef} 
      className={finalClassName}
      // 🚀 3. Aplicamos el delay inline. Esto es 100% seguro y no afecta el rendimiento
      style={{ transitionDelay: `${delay}ms` }} 
    >
      {typeof children === "function" ? children(isVisible) : children}
    </div>
  );
}