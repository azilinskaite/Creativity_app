"use client";
import React, { useState } from "react";

export default function PasswordInput({
  value,
  onChange,
  placeholder,
  className = "",
  required,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        type={show ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-2 border rounded-xl"
        required={required}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
