"use client";
import React, { useState } from "react";

export default function EmailInput({
  value,
  onChange,
  required,
  ...props
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(e);

    if (required && val.trim() === "") {
      setEmailError("Email is required");
    } else if (!validateEmail(val)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={value}
        onChange={handleChange}
        className={`w-full mb-3 p-2 border rounded-xl ${
          emailError ? "border-[var(--fuschia)]" : ""
        }`}
        aria-describedby="email-error"
        required={required}
        {...props}
      />
      {emailError && (
        <p
          id="email-error"
          className="text-xs text-center text-[var(--fuschia)] pb-[0.5rem]"
        >
          {emailError}
        </p>
      )}
    </div>
  );
}
