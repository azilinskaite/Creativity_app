import React from "react";
import CurrentChallenge from "@/components/CurrentChallenge";

export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[var(--foreground)] bg-[var(--fuschia)] px-[2rem] py-[1rem]">
        Hi [username] !
      </h2>
      <h2 className="text-3xl font-bold text-[var(--foreground)] bg-[var(--background)] px-[2rem] py-[1rem]">
        Current challenge
      </h2>
      <CurrentChallenge/>
      <h2 className="text-3xl font-bold text-[var(--foreground)] bg-[var(--background)] px-[2rem] py-[1rem]">
        Disciplines
      </h2>
      {/* disciplines */}
    </div>
  );
}

