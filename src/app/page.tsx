"use client";
import { useState } from "react";
import LoginBox from "@/components/LoginBox";
import Modal from "@/components/Modal";
import RegisterBox from "@/components/RegisterBox";

export default function Home() {
  const [isSignupOpen, setSignupOpen] = useState(false);
  return (
    <section className="relative flex items-center min-h-screen p-[2rem] md:p-[6rem]">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photolink.jpg')" }}
      ></div> */}
      <div className="z-10 w-full flex items-center flex-col justify-between md:flex-row">
        <h1 className="py-4 max-w-lg text-5xl text-center font-bold mr-6 md:text-left">
          Get into the groove of creativity
        </h1>
        <LoginBox
          onLogin={() => console.log("login")}
          onSignup={() => setSignupOpen(true)}
        />
      </div>
      <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
        <RegisterBox onRegister={() => console.log("register")} />
      </Modal>
    </section>
  );
}
