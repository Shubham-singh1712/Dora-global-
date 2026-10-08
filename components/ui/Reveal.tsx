"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** If true, applies stagger to direct children */
  stagger?: boolean;
  /** Delay before reveal triggers (ms after entering viewport) */
  delay?: number;
  /** Custom threshold for IntersectionObserver (0-1) */
  threshold?: number;
  /** Element tag to render */
  as?: React.ElementType;
}

/**
 * Wraps content in a scroll-triggered fade-up reveal.
 * Uses IntersectionObserver for performance — no layout thrashing.
 */
export function Reveal({
  children,
  stagger = false,
  delay = 0,
  threshold = 0.15,
  className,
  as: Component = "div",
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsRevealed(true), delay);
          } else {
            setIsRevealed(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <Component
      ref={ref}
      className={cn(
        stagger ? "reveal-stagger" : "reveal",
        isRevealed && "revealed",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
