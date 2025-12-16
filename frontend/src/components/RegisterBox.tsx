"use client";
import React from "react";
import Button from "./Button";
import EmailInput from "./Inputs/EmailInput";
import PasswordInput from "./Inputs/PasswordInput";

export default function RegisterBox({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onRegister,
  loading,
  error,
  registerSuccessMessage,
  onGoBack,
}: {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  onRegister: () => void;
  loading: boolean;
  error?: string;
  registerSuccessMessage: string;
  onGoBack: () => void;
}) {
  const passwordsMatch = password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordsMatch && password && email && username) {
      onRegister?.();
    }
  };

  if (registerSuccessMessage) {
    return (
      <div className="bg-white bg-opacity-80 p-8 border-2 rounded-2xl min-w-sm max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4">{registerSuccessMessage}</h2>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-[2rem] border-2 rounded-2xl min-w-sm max-w-sm"
      noValidate
    >
      <div className="flex justify-between items-center mb-[1rem]">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <Button
          size="short"
          variant="secondary"
          className="text-s p-[0rem]"
          onClick={(e) => {
            e.preventDefault();
            onGoBack();
          }}
        >
          Go Back
        </Button>
      </div>

      <input
        type="text"
        placeholder="User Name"
        className="w-full mb-3 p-2 border rounded-xl"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
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
        className="mb-[1rem]"
      />

      <PasswordInput
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        className={!passwordsMatch ? "border-[var(--fuschia)]" : ""}
        required
      />

      {!passwordsMatch && (
        <p className="text-xs text-center text-[var(--fuschia)] mt-[1rem]">
          Passwords do not match.
        </p>
      )}
      {error && (
        <p className="text-sm text-center text-[var(--fuschia)] mt-2">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={
          loading || !passwordsMatch || !password || !email || !username
        }
        className={`mt-[1rem] ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={onRegister}
      >
        {loading ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
