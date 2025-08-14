import React, { useState } from "react";
import Button from "./Button";

export default function RegisterBox({
  onRegister,
}: {
  onRegister?: () => void;
}) {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation / API call here
    setIsRegistered(true);
    onRegister?.();
  };
  return (
    <form onSubmit={handleSubmit}>
      {isRegistered ? (
        <div className="text-center p-4">
          <h2 className="text-2xl font-bold mb-2">Registration complete!</h2>
          <p className="text-[var(--bright-red)]">Thanks for signing up. You can now log in</p>
        </div>
      ) : (
      <fieldset className="p-0 border-0">
        <legend className="sr-only">Sign Up</legend>

        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="User Name"
          className="w-full mb-3 p-2 border rounded-xl"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded-xl"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-3 p-2 border rounded-xl"
        />

        <Button type="submit">Register</Button>
      </fieldset>
      )}
    </form>
  );

}
