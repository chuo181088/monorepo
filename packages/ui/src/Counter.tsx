import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  duration?: number;
  animate: boolean;
}

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export function Counter({ target, duration = 2000, animate }: CounterProps) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!animate) {
      setCount(0);
      startTimeRef.current = null;
      return;
    }

    const animateCount = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      
      const currentValue = Math.floor(easedProgress * target);
      setCount(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animateCount);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate, target, duration]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      const k = num / 1000;
      return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`;
    }
    return num.toLocaleString("es-DO");
  };

  return <span>{formatNumber(count)}</span>;
}