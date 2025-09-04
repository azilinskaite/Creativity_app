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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState("");

  const handleRegister = async () => {
    if (loading) return;
    setError("");
    if (!username || !email || !password) {
      return setError("All fields are required");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        setRegisterSuccessMessage(
          "Registration successful! You can now log in."
        );
        // setIsRegistering(false);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setError("");
    if (!email || !password) return setError("Incorrect email or password");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      router.push("/profile");
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        typeof (error as { code?: unknown }).code === "string"
      ) {
        const code = (error as { code: string }).code;
        if (code === "auth/user-not-found") {
          setError("User not found");
        } else if (code === "auth/wrong-password") {
          setError("Incorrect password");
        } else {
          if (
            "message" in error &&
            typeof (error as { message?: unknown }).message === "string"
          ) {
            setError((error as { message: string }).message);
          } else {
            setError("Authentication error");
          }
        }
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Login failed");
      }
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setTimeout(() => {
        router.push("/profile");
      }, 500);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      {isRegistering ? (
        <RegisterBox
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onRegister={handleRegister}
          loading={loading}
          error={error}
          registerSuccessMessage={registerSuccessMessage}
        />
      ) : (
        <LoginBox
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onLogin={handleLogin}
          onSignup={() => {
            setError("");
            setEmail("");
            setPassword("");
            setIsRegistering(true);
          }}
          onGoogleLogin={handleGoogleLogin}
          error={error}
        />
      )}
    </div>
  );
}
