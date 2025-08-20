import React from "react";
import Button from "./Button";

type ChallengeSubmitBoxProps = {
  onGetChallenge: () => void;
};

export default function ChallengeSubmitBox({ onGetChallenge }: ChallengeSubmitBoxProps) {
    return (
        <div className="p-[2rem] bg-blue-100">
            <Button variant="secondary">Submit</Button>
            <Button variant="secondary" onClick={onGetChallenge}>Get challenge</Button>
        </div>
    )
}