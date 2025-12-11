import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  duration?: number;
  className?: string;
}

export default function CountUp({
  to,
  duration = 1000,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * to);

      if (ref.current) {
        ref.current.textContent = String(value);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [to, duration]);

  return (
    <span ref={ref} className={`font-bold text-lg ${className}`}>
      0
    </span>
  );
}
