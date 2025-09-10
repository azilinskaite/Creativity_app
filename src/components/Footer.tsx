import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-[2rem] bg-[var(--foreground)] flex justify-end">
      <Image
        src="/Ripple_logo_red.png"
        alt="Red Logo"
        width={555}
        height={437}
        style={{ width: "auto", height: "8rem", objectFit: "contain" }}
      />
    </footer>
  );
}
