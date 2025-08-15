import React from "react";
import ChallengeBox from "./ChallengeBox";
import ChallengeSubmitBox from "./ChallengeSubmitBox";

export default function CurrentChallenge() {
  return (
    <section className="bg-white grid grid-cols-2">
      <div className="p-[2rem]">
        <h5 className="mb-[2rem]">Part of: [discipline]</h5>
        <ChallengeBox />
      </div>
      <ChallengeSubmitBox />
    </section>
  );
}
