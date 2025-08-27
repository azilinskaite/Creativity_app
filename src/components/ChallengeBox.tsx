import React from "react";

type ChallengeBoxProps = {
  challenge?: string;
  color?: string;
};

export default function ChallengeBox({
  challenge,
  color = "#fff",
}: ChallengeBoxProps) {
  return (
    <div
      className="p-8 border-2 rounded-2xl h-[9rem]"
      style={{ backgroundColor: color }}
    >
      {challenge ?? "Generated challenge"}
    </div>
  );
}
