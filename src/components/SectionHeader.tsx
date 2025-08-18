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
      className={`text-3xl font-bold text-[var(--foreground)] px-[2rem] py-[1rem] ${
        bg ?? "bg-[var(--background)]"
      }`}
    >
      {children}
    </h2>
  );
}
