"use client";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export function RevealOnScroll({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-800 ease-out transform
        ${inView ? "opacity-100" : "opacity-0 translate-y-4"}
      `}
    >
      {children}
    </div>
  );
}
