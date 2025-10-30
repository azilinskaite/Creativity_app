import React from "react";

export default function SectionHeader({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <h2
      className={`text-2xl font-bold text-[var(--foreground)] px-[1rem] py-[0.8rem] md:px-[2rem] ${
        bg ?? "bg-[var(--background)]"
      }`}
    >
      {children}
    </h2>
  );
}
