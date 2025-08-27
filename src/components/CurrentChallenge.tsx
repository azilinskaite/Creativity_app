"use client";
import React, { useState } from "react";
import ChallengeBox from "./ChallengeBox";
import ChallengeSubmitBox from "./ChallengeSubmitBox";
import disciplinesData from "@/data/disciplines.json";
import Modal from "./Modal";

export default function CurrentChallenge() {
  const [selectedDisciplineIndex, setSelectedDisciplineIndex] = useState(0);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const discipline = disciplinesData.disciplines[selectedDisciplineIndex];
  const challenge = discipline.challenges[selectedChallengeIndex];

  const handleGetChallenge = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDisciplineSelect = (index: number) => {
    const selected = disciplinesData.disciplines[index];
    setSelectedDisciplineIndex(index);
    const randomChallengeIndex = Math.floor(
      Math.random() * selected.challenges.length
    );
    setSelectedChallengeIndex(randomChallengeIndex);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-white grid grid-cols-2">
        <div className="p-[2rem]">
          <h5 className="mb-[1rem]">Part of: {discipline.discipline}</h5>
          <ChallengeBox challenge={challenge} color={discipline.color} />
        </div>
        <ChallengeSubmitBox onGetChallenge={handleGetChallenge} />
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3 className="text-xl mb-4">Select a discipline</h3>
        <ul className="grid grid-cols-2 gap-2">
          {disciplinesData.disciplines.map((d, idx) => (
            <li key={d.discipline}>
              <button
                className="px-4 py-2 pb-[3rem] w-full text-left capitalize"
                style={{ backgroundColor: d.color }}
                onClick={() => handleDisciplineSelect(idx)}
              >
                {d.discipline}
              </button>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}
