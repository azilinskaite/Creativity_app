import React from "react";

type ChallengeBoxProps = {
  challenge?: string;
};

export default function ChallengeBox({ challenge }: ChallengeBoxProps) {
    return (
        <div className="bg-white bg-opacity-80 p-8 border rounded-2xl max-w-sm">{challenge ?? "Generated challenge"}</div>
    )
}