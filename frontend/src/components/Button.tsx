import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "red";
  size?: "full" | "short";
  as?: React.ElementType;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "full",
  as: Component = "button",
  className = "",
  ...props
}: ButtonProps) {
  const base = "py-2 rounded-xl font-semibold transition focus:outline-none transition-colors duration-400"
  const width = size === "full" ? "w-full" : "w-auto";
  const padding = size === "short" ? "px-[2rem]" : "";
  const variants = {
    primary: "bg-[var(--foreground)] text-white hover:bg-[var(--bright-red)]",
    secondary:
      "bg-[var(--background)] text-[var(--foreground)] border hover:bg-white",
      red: "bg-[var(--bright-red)] text-white hover:bg-[var(--foreground)]",
  };
  return (
    <Component
      className={`${base} ${width} ${padding} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
