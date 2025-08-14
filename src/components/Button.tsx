import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "w-full py-2 rounded-xl font-semibold transition focus:outline-none";
  const variants = {
    primary: "bg-[var(--foreground)] text-white hover:bg-[var(--bright-red)]",
    secondary: "bg-[var(--background)] text-[var(--foreground)] border hover:bg-white",
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
