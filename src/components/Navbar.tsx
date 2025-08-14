import React from "react";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white p-4">
      <ul className="flex flex-col md:flex-row gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/challenges">Challenges</Link>
        </li>
      </ul>
    </nav>
  );
}
