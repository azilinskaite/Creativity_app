"use client";
import { useState } from "react";
// import LoginBox from "@/components/LoginBox";
// import Modal from "@/components/Modal";
// import RegisterBox from "@/components/RegisterBox";
import Auth from "@/components/Auth";

export default function Home() {
  return (
    <div className="relative h-full flex items-center p-[2rem] md:p-[6rem]">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover opacity-85"
        style={{ backgroundImage: "url('/bg_krisjanis_kazaks.jpg')" }}
      ></div>
      <div className="z-10 w-full flex items-center flex-col justify-between md:flex-row">
        <h1 className="py-4 max-w-lg text-6xl text-[var(--foreground)] text-center font-bold mr-6 md:text-left">
          Get on the wave of creativity
        </h1>
        <Auth/>
      </div>
    </div>
  );
}
