import React from "react";
import Button from "./Button";

type ChallengeSubmitBoxProps = {
  onGetChallenge: () => void;
  onSubmitChallenge: () => void;
  background: string;
};

export default function ChallengeSubmitBox({
  onGetChallenge,
  onSubmitChallenge,
  background,
}: ChallengeSubmitBoxProps) {
  return (
    <div
      className="px-[2rem] py-[3rem] mb:pt-[3rem] flex flex-col align-center justify-center gap-[1rem] md:p-[2rem]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Button variant="primary" onClick={onGetChallenge}>
        Get a challenge
      </Button>
      <Button variant="primary" onClick={onSubmitChallenge}>
        Submit challenge
      </Button>
    </div>
  );
}
