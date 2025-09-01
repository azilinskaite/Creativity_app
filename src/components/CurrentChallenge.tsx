"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ChallengeBox from "./ChallengeBox";
import ChallengeSubmitBox from "./ChallengeSubmitBox";
import disciplinesData from "@/data/disciplines.json";
import Modal from "./Modal";
import Button from "./Button";
import Image from "next/image";
import { saveSubmission } from "@/utils/localStorage";

export default function CurrentChallenge() {
  const [selectedDisciplineIndex, setSelectedDisciplineIndex] = useState(0);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitModalOpen, setSubmitModalOpen] = useState(false);

  const discipline = disciplinesData.disciplines[selectedDisciplineIndex];
  const challenge = discipline.challenges[selectedChallengeIndex];
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  function handleImageFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  const handleGetChallenge = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenSubmitModal = () => {
    setSubmitModalOpen(true);
  };
  const handleCloseSubmitModal = () => {
    setSubmitModalOpen(false);
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

  function handleSaveSubmission() {
    if (!uploadedImage) return;
    saveSubmission({
      discipline: discipline.discipline,
      challenge: challenge,
      imageData: uploadedImage,
      comment: comment.trim(),
    });
    toast.success("Submission saved!");
    setSubmitModalOpen(false);
    setUploadedImage(null);
    setComment("");
  }

  return (
    <>
      <section className="bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="p-[2rem] py-[1rem] pt-[1rem] mb-[1rem] md:py-[2rem]">
          <h5 className="mb-[1rem]" style={{ textTransform: "capitalize" }}>
            Part of: {discipline.discipline}
          </h5>

          <ChallengeBox challenge={challenge} color={discipline.color} />
        </div>
        <ChallengeSubmitBox
          onSubmitChallenge={handleOpenSubmitModal}
          onGetChallenge={handleGetChallenge}
          background={discipline.background}
        />

        <Modal isOpen={isSubmitModalOpen} onClose={handleCloseSubmitModal}>
          <div className="flex flex-col items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageFileChange}
              className="border p-2 rounded-md"
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Thoughts about the challenge"
              className="border p-2 rounded-md w-full max-w-md"
              rows={3}
            />
            {uploadedImage && (
              <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                <Image
                  src={uploadedImage}
                  alt="Preview"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            )}
            <Button
              variant="primary"
              onClick={handleSaveSubmission}
              size="short"
              disabled={!uploadedImage}
            >
              Save
            </Button>
          </div>
        </Modal>
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
