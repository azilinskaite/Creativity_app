"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ChallengeBox from "./ChallengeBox";
import ChallengeSubmitBox from "./ChallengeSubmitBox";
import disciplinesData from "@/data/disciplines.json";
import Modal from "./Modal";
import Button from "./Button";
import Image from "next/image";
import { saveSubmission } from "@/utils/localStorage";
import usePendingChallenge from "@/hooks/usePendingChallenge";

export default function CurrentChallenge() {
  const { pendingChallenge, savePending, clearPending } = usePendingChallenge();

  const selectedDisciplineIndex = pendingChallenge?.disciplineIndex ?? -1;
  const selectedChallengeIndex = pendingChallenge?.challengeIndex ?? -1;

  const [challengeVisible, setChallengeVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitModalOpen, setSubmitModalOpen] = useState(false);

  const discipline =
    selectedDisciplineIndex >= 0
      ? disciplinesData.disciplines[selectedDisciplineIndex]
      : null;

  const challenge =
    discipline && selectedChallengeIndex >= 0
      ? discipline.challenges[selectedChallengeIndex]
      : null;

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (
      selectedDisciplineIndex >= 0 &&
      selectedChallengeIndex >= 0 &&
      discipline &&
      challenge
    ) {
      setChallengeVisible(true);
    } else {
      setChallengeVisible(false);
    }
  }, [selectedDisciplineIndex, selectedChallengeIndex, discipline, challenge]);

function handleImageFileChange(e: React.ChangeEvent<HTMLInputElement>) {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const imgData = reader.result as string;
      setUploadedImage(imgData);
    };
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
    const randomChallengeIndex = Math.floor(
      Math.random() * selected.challenges.length
    );
    savePending(index, randomChallengeIndex);
    setIsModalOpen(false);
  };

function handleSaveSubmission() {
  if (!uploadedImage || !discipline || !challenge) return;

  saveSubmission({
    discipline: discipline.discipline,
    challengeId: challenge.id,
    challengeText: challenge.text,
    imageData: uploadedImage,
    comment: comment.trim(),
  });
  toast.success("Submission saved!");
  setSubmitModalOpen(false);
  setUploadedImage(null);
  setComment("");
  clearPending();
}


  return (
    <>
      <section className="bg-white grid grid-cols-1 md:grid-cols-2">
        <ChallengeSubmitBox
          onSubmitChallenge={handleOpenSubmitModal}
          onGetChallenge={handleGetChallenge}
          background={discipline?.background ?? "var(--beige)"}
        />
        <div className="p-[1rem] mb-[1rem] md:p-[2rem]">
          <h5 className="mb-[1rem]" style={{ textTransform: "capitalize" }}>
            Part of: {discipline?.discipline ?? "No discipline selected"}
          </h5>
          {challengeVisible && challenge ? (
            <ChallengeBox
              challenge={challenge.text}
              color={discipline?.color ?? "white"}
            />
          ) : (
            <ChallengeBox
              challenge="No challenge selected"
              color={discipline?.color ?? "var(--beige)"}
            />
          )}
        </div>

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
              className="border p-2 rounded-md w-full max-w-sm"
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
