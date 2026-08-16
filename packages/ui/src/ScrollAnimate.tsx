import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
  children: ReactNode | ((isVisible: boolean) => ReactNode);
  className?: string;
  once?: boolean;
  fallbackClass?: string;
}

export function ScrollAnimate({ 
  children, 
  className = "", 
  once = false,
  fallbackClass = "opacity-0 translate-y-6"
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = domRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(element);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? "is-visible" : fallbackClass}`}
    >
      {typeof children === "function" ? children(isVisible) : children}
    </div>
  );
}