"use client";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }: AnimatedCounterProps) {
  const { ref, isVisible } = useInView(0.3);
  const [count, setCount] = useState(end);

  useEffect(() => {
    if (!isVisible) return;
    setCount(0);
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
    </span>
  );
}
