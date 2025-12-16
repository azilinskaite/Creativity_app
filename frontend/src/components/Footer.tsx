import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-[2rem] py-[0.5rem] bg-[var(--foreground)] flex justify-end">
      <Image
        src="/Ripple_logo_large.png"
        alt="Red Logo"
        width={555}
        height={437}
        style={{ width: "auto", height: "8rem", objectFit: "contain" }}
      />
    </footer>
  );
}
