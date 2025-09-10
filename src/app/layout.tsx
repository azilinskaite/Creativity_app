import type { Metadata } from "next";
import React from "react";
import { Cal_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cal-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ripple",
  description: "Creativity app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={calSans.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main style={{ height: "calc(100vh - 4rem)" }} className="flex-grow">
          {children}
          <Toaster position="top-center" />
        </main>
      </body>
    </html>
  );
}
