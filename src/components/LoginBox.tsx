"use client";
import React, { useState } from "react";
import Button from "./Button";

export default function LoginBox({
  onLogin,
  onSignup,
  onGoogleLogin,
  error,
}: {
  onLogin?: () => void;
  onSignup?: () => void;
  onGoogleLogin?: () => void;
  error?: string;
}) {
  return (
    <div className="bg-white bg-opacity-80 p-8 border-2 rounded-2xl min-w-sm max-w-sm">
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded-xl"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded-xl"
        required
      />
      {error && <p className="text-xs text-center text-[var(--fuschia)] pb-[0.5rem]">{error}</p>}
      <Button variant="secondary" onClick={onLogin}>
        Log In
      </Button>
      <Button variant="secondary" onClick={onGoogleLogin} className="mt-4">
        Sign in with Google
      </Button>
      <h3 className="my-4 text-center">...or if you&#39;re new here</h3>
      <Button variant="secondary" onClick={onSignup}>
        Sign Up
      </Button>
    </div>
  );
}
