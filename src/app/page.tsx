"use client";
import Auth from "@/components/Auth";

export default function Home() {
  return (
    <div className="relative h-full flex items-center p-[2rem] md:p-[6rem]">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover opacity-85"
        style={{ backgroundImage: "url('/Estatuillas.webp')" }}
      ></div>
      <div className="z-10 w-full flex items-center flex-col justify-between md:flex-row">
        <div>
          <h1 className="py-4 max-w-lg text-6xl text-[var(--foreground)] text-center font-bold mr-6 md:text-left">
            Get on the wave <br /> of creativity
          </h1>
          <p className="mb-[1rem] w-[90%] md:w-[70%] m-auto text-center md:m-0 md:text-left">
            Join an inspiring journey with small daily creative challenges
            designed to spark your imagination. Every day, receive a fresh
            challenge that encourages you to create something new and build your own personal creative gallery.
          </p>
        </div>
        <Auth />
      </div>
    </div>
  );
}
