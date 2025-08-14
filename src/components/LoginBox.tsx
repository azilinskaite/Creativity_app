import React from "react";

export default function LoginBox() {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded max-w-sm">
      <h2 className="text-xl mb-4">Sign up / Log in</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
      />
    </div>
  );
}
