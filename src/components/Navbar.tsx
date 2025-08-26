"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white w-full px-[2rem] py-[1rem] flex flex-col items-center md:flex-row md:justify-between md:items-center">
      <div className="flex w-full flex-row justify-between">
        <Image
          src="/Ripple_logo.png"
          alt="Site Logo"
          width={80}
          height={33}
          style={{ width: "80px", height: "33px", objectFit: "contain" }}
        />
        <div className="md:hidden">
          <Hamburger
            size={24}
            // toggled={isMenuOpen}
            // toggle={setIsMenuOpen}
          />
        </div>
      </div>

      <ul className="w-full flex flex-col gap-[1rem] md:flex-row md:justify-end md:gap-[2rem]">
        <hr className="border-1 border-black mt-[0.5rem] md:hidden" />
        <li className="transition-[1s] md:hover:-rotate-15">
          <Link href="/">Home</Link>
        </li>
        <li className="transition-[1s] md:hover:-rotate-15">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="transition-[1s] md:hover:-rotate-15">
          <Link href="/challenges">Challenges</Link>
        </li>
      </ul>
    </nav>
  );
}
