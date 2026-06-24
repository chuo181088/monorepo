import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
  children: ReactNode | ((isVisible: boolean) => ReactNode);
  className?: string;
  once?: boolean;
  variant?: "default" | "curtain" | "counter"; // 🌟 Agregamos 'counter'
  delay?: number;
}

export function ScrollAnimate({ children, className = "", once = false, variant = "default", delay = 0 }: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else {
            if (!once) {
              setIsVisible(false);
            }
          }
        });
      },
      { 
        threshold: 0,
        // 🌟 Si es un contador, se dispara APENAS entra a la pantalla (-50px). Si no, usa el margen normal.
        rootMargin: variant === "counter" ? "0px 0px -50px 0px" : "0px 0px -250px 0px"
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [once, variant]); // 🌟 Añadimos variant a las dependencias

  const baseClasses = "transition-all duration-700 ease-out transform will-change-[filter,transform]";
  
  // 🌟 Definimos las clases según el variante (el de counter entra limpio sin blur ni escalas bruscas)
  let variantClasses = "";
  if (variant === "curtain") {
    variantClasses = isVisible ? "curtain-open" : "curtain-closed";
  } else if (variant === "counter") {
    variantClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"; // Entrada limpia y ultra sutil
  } else {
    variantClasses = isVisible ? "blur-none scale-100 opacity-100" : "blur-[6px] scale-[0.95] opacity-80";
  }

  const finalClassName = `${className} ${baseClasses} ${variantClasses}`;

  return (
    <div 
      ref={domRef} 
      className={finalClassName}
      style={{ transitionDelay: `${delay}ms` }} 
    >
      {typeof children === "function" ? children(isVisible) : children}
    </div>
  );
}