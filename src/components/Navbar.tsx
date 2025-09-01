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
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/">
          <Image
            src="/Ripple_logo.png"
            alt="Site Logo"
            width={80}
            height={33}
            style={{ width: "80px", height: "33px", objectFit: "contain" }}
          />
        </Link>
        <div className="md:hidden flex items-center justify-center h-[33px] w-[33px]">
          <Hamburger size={22} toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
      </div>

      {pathname !== "/" && (
        <ul
          className={`
    fixed top-16 left-0 w-full h-full z-50
    flex flex-col gap-4 px-8 bg-[var(--beige)] transition-transform duration-500
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
    md:static md:flex-row md:h-auto md:w-auto md:bg-transparent md:px-0 md:gap-8 md:translate-x-0 md:justify-end
  `}
        >
          <hr className="border-1 border-black md:hidden" />
          <li className="md:hover:-rotate-15">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="md:hover:-rotate-15">
            <Link href="/challenges">Challenges</Link>
          </li>
          <li className="md:hover:-rotate-15">
            <Link href="/">Sign Out</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
