import React from "react";
import Button from "./Button";

type ChallengeSubmitBoxProps = {
  onGetChallenge: () => void;
  onSubmitChallenge: () => void;
  background: string;
};

export default function ChallengeSubmitBox({ onGetChallenge, onSubmitChallenge, background }: ChallengeSubmitBoxProps) {
    return (
        <div className="p-[2rem] mb:pt-[3rem] flex flex-col align-center justify-center gap-[1rem]" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Button variant="primary" onClick={onSubmitChallenge}>Submit</Button>
            <Button variant="primary" onClick={onGetChallenge}>Get challenge</Button>
        </div>
    )
}