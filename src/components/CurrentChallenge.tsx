"use client";
import React, { useState } from "react";
import ChallengeBox from "./ChallengeBox";
import ChallengeSubmitBox from "./ChallengeSubmitBox";
import disciplinesData from "@/data/disciplines.json";

export default function CurrentChallenge() {
  const [selectedDisciplineIndex, _setSelectedDisciplineIndex] = useState(0);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(0);

  const discipline = disciplinesData.disciplines[selectedDisciplineIndex];
  const challenge = discipline.challenges[selectedChallengeIndex];

  const handleGetChallenge = () => {
    const nextChallengeIndex = (selectedChallengeIndex + 1) % discipline.challenges.length;
    setSelectedChallengeIndex(nextChallengeIndex);
  } 
  return (
    <section className="bg-white grid grid-cols-2">
      <div className="p-[2rem]">
        <h5 className="mb-[2rem]">Part of: {discipline.discipline}</h5>
        <ChallengeBox challenge={challenge} />
      </div>
      <ChallengeSubmitBox onGetChallenge={handleGetChallenge} />
    </section>
  );
}
