import { useEffect, useState, ReactNode } from "react";

interface HeroAnimateProps {
  children: (showEffects: boolean) => ReactNode;
}

export function HeroAnimate({ children }: HeroAnimateProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setHasLoaded(true));

    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsTop(window.scrollY < 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showEffects = hasLoaded && isTop;

  return (
    <div className="relative w-full overflow-hidden">
      {children(showEffects)}
    </div>
  );
}