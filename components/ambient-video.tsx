"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
  opacity?: number;
  blend?: "normal" | "screen" | "lighten" | "soft-light";
  eager?: boolean;
  poster?: string;
};

export function AmbientVideo({
  src,
  className,
  opacity = 0.55,
  blend = "screen",
  eager = false,
  poster,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      v.pause();
      return;
    }

    // Pause off-screen to save battery / GPU
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.1 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
      style={{ opacity, mixBlendMode: blend }}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? "auto" : "metadata"}
      poster={poster}
      aria-hidden
    />
  );
}
