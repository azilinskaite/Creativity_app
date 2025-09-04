"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterBox from "./RegisterBox";
import LoginBox from "./LoginBox";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default function Auth() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");
    if (!email || !password) return setError("Email and password required");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful! You can now log in.");
      setIsRegistering(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleLogin = async () => {
    setError("");
    if (!email || !password) return setError("Email and password required");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in!");
      setEmail("");
      setPassword("");
      router.push("/profile");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      {isRegistering ? (
        <RegisterBox onRegister={handleRegister} />
      ) : (
        <LoginBox
          onLogin={handleLogin}
          onSignup={() => setIsRegistering(true)}
          onGoogleLogin={handleGoogleLogin}
          error={error}
        />
      )}
    </div>
  );
}
