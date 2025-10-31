"use client";
import React from "react";
import { useUser } from "@/hooks/useUser";

export default function SectionHeader({
  children,
  bg,
  showUser
}: {
  children?: React.ReactNode;
  bg?: string;
  showUser?: boolean;
}) {

  const user = useUser();
  const userName = user?.displayName ?? "user";

  return (
    <h2
      className={`text-2xl font-bold text-[var(--foreground)] px-[1rem] py-[0.8rem] md:px-[2rem] ${
        bg ?? "bg-[var(--background)]"
      }`}
    >
      {showUser ? `Hi ${userName}!` : children}
    </h2>
  );
}
