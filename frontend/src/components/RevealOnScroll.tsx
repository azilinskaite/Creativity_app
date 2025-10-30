"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";

export function RevealOnScroll({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-800 ease-out transform
        ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}
      `}
    >
      {children}
    </div>
  );
}
