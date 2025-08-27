"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[var(--beige)] w-full px-8 py-4 flex items-center justify-between">
      <div className="flex w-full md:w-auto flex-row justify-between items-center">
        <Image
          src="/Ripple_logo.png"
          alt="Site Logo"
          width={80}
          height={33}
          style={{ width: "80px", height: "33px", objectFit: "contain" }}
        />
        <div className="overflow-hidden h-[33px] w-[33px] flex items-center justify-center md:w-[0px]">
          <Hamburger size={22} toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
      </div>
      {pathname !== "/" && (
        <ul
          className={`
  fixed top-16 left-0 w-full h-full bg-white z-50
  flex flex-col gap-4 px-8 transition-transform duration-500
  ${isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"}
  md:static md:flex-row md:h-auto md:w-auto md:bg-transparent md:px-0 md:gap-8 md:transform-none md:justify-end
`}
        >
          <hr className="border-1 border-black md:hidden" />
          <li className="transition-[1s] md:hover:-rotate-15">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="transition-[1s] md:hover:-rotate-15">
            <Link href="/challenges">Challenges</Link>
          </li>
          <li className="transition-[1s] md:hover:-rotate-15">
            <Link href="/">Sign Out</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
