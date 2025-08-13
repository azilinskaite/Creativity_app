import type { Metadata } from "next";
import React from "react";
import { Cal_Sans } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cal-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "App Title",
  description: "App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={calSans.className}>
      <body>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/challenges">Challenges</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
