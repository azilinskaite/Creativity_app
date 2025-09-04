"use client";
import React from "react";
import Button from "./Button";
import EmailInput from "./Inputs/EmailInput";
import PasswordInput from "./Inputs/PasswordInput";

export default function LoginBox({
  email,
  setEmail,
  password,
  setPassword,
  onLogin,
  onSignup,
  onGoogleLogin,
  error,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onLogin?: (email: string, password: string) => void;
  onSignup?: () => void;
  onGoogleLogin?: () => void;
  error?: string;
}) {
  return (
    <div className="bg-white bg-opacity-80 p-8 border-2 rounded-2xl min-w-sm max-w-sm">
      <EmailInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && (
        <p className="text-xs text-center text-[var(--fuschia)] pb-[0.5rem]">
          {error}
        </p>
      )}
      <Button
        variant="secondary"
        onClick={() => onLogin?.(email, password)}
        className="mt-[1rem]"
      >
        Log In
      </Button>
      <Button variant="secondary" onClick={onGoogleLogin} className="mt-[1rem]">
        Sign in with Google
      </Button>
      <h3 className="my-4 text-center">...or if you&#39;re new here</h3>
      <Button variant="secondary" onClick={onSignup}>
        Sign Up
      </Button>
    </div>
  );
}
