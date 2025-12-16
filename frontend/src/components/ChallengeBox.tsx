import React from "react";

type ChallengeBoxProps = {
  challenge?: string;
  color?: string;
};

export default function ChallengeBox({
  challenge,
  color = "white",
}: ChallengeBoxProps) {
  return (
    <div
      className="p-8 rounded-2xl h-[9rem]"
      style={{ backgroundColor: color }}
    >&quot;
      {challenge ?? "Generated challenge"}
      &quot;
    </div>
  );
}
