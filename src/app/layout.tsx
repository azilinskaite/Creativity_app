import type { Metadata } from "next";
import React from "react";
import { Cal_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

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
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
