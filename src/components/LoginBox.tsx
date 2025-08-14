import React from "react";

export default function LoginBox() {
  return (
    <div className="bg-white bg-opacity-80 p-6 border rounded-3xl max-w-sm">
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
      <button type="submit">Log In</button>
      <h3>If you&#39;re new here</h3>
      <button type="button">Sign Up</button>
    </div>
  );
}
