import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "full" | "short";
  as?: React.ElementType;
}

export default function Button({
  children,
  variant = "primary",
  size = "full",
  as: Component = "button",
  ...props
}: ButtonProps) {
  const base =
    "py-2 rounded-xl font-semibold transition focus:outline-none";
  const width = size === "full" ? "w-full" : "w-auto";
  const padding = size === "short" ? "px-[2rem]" : "";
  const variants = {
    primary: "bg-[var(--foreground)] text-white hover:bg-[var(--bright-red)]",
    secondary:
      "bg-[var(--background)] text-[var(--foreground)] border hover:bg-white",
  };
  return (
    <Component className={`${base} ${width} ${padding} ${variants[variant]}`} {...props}>
      {children}
    </Component>
  );
}
