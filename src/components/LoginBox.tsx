import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function LoginBox({
  onLogin,
  onSignup,
}: {
  onLogin?: () => void;
  onSignup?: () => void;
}) {
  return (
    <div className="bg-white bg-opacity-80 p-8 border-2 rounded-2xl max-w-sm">
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border-2 rounded-xl"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border-2 rounded-xl"
      />
      <Link href="/profile" passHref>
        <Button variant="secondary" onClick={onLogin}>
          Log In
        </Button>
      </Link>
      <h3 className="my-4 text-center">...or if you&#39;re new here</h3>
      <Button variant="secondary" onClick={onSignup}>
        Sign Up
      </Button>
    </div>
  );
}
