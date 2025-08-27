import React from "react";
import Button from "./Button";

type ChallengeSubmitBoxProps = {
  onGetChallenge: () => void;
};

export default function ChallengeSubmitBox({ onGetChallenge }: ChallengeSubmitBoxProps) {
    return (
        <div className="p-[2rem] mb:pt-[3rem] bg-blue-100 flex flex-col align-center justify-center gap-[1rem]">
            <Button variant="primary">Submit</Button>
            <Button variant="primary" onClick={onGetChallenge}>Get challenge</Button>
        </div>
    )
}