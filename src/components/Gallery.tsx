"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import disciplinesData from "@/data/disciplines.json";
import { Submission, getSubmissions } from "@/utils/localStorage";

export default function Gallery() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selected, setSelected] = useState<Submission | null>(null);
  const slotsCount = Math.max(1, submissions.length);

  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  function getChallengeText(discipline: string, challengeId: string) {
    const disciplineObj = disciplinesData.disciplines.find(
      (d) => d.discipline === discipline
    );
    if (!disciplineObj) return "";
    const challengeObj = disciplineObj.challenges.find(
      (c) => c.id === challengeId
    );
    return challengeObj ? challengeObj.text : "";
  }

  return (
    <section className="bg-white">
      <div className="pb-[2rem] grid grid-cols-2 gap-[1rem] md:grid-cols-4 md:px-[2rem] md:p-[1rem] md:gap-[2rem]">
        {Array.from({ length: slotsCount }).map((_, i) => {
          const sub = submissions[i];
          return (
            <div
              key={i}
              className="overflow-hidden flex flex-col cursor-pointer"
              onClick={() => sub && setSelected(sub)}
            >
              {sub ? (
                <>
                  <div className="relative w-full aspect-2/3">
                    <Image
                      src={sub.imageData}
                      alt={`${sub.discipline} - ${sub.challengeId}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {sub.comment && (
                    <p className="text-sm italic text-left mt-[1rem]">
                      {sub.comment}
                    </p>
                  )}
                </>
              ) : (
                <div className="text-gray-300 bg-[var(--beige)] flex items-center py-[6rem] justify-center h-full">
                  No image
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed top-0 right-0 flex flex-col h-full w-full bg-[var(--background)] z-50 md:w-[70vw] md:flex-row overflow-y-auto overscroll-contain"
          style={{ transition: "all 0.3s" }}
        >
          <div className="relative p-[1rem] w-full md:w-[60%] md:max-w-[60vw] md:p-0 left-0">
            <Image
              src={selected.imageData}
              alt={selected.comment || ""}
              width={700}
              height={400}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="p-[1rem] space-y-[1rem] md:w-[40%] flex flex-col">
            <button
              className="absolute top-[1.2rem] right-[1.4rem] text-xl text-[var(--foreground)] hover:text-[var(--bright-red)]"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="font-bold text-xl capitalize">
              {selected.discipline}
            </h2>
            <p className="text-sm text-[var(--foreground)]">
              Challenge: <br />
              {getChallengeText(selected.discipline, selected.challengeId)}
            </p>
            {selected.comment && (
              <p className="italic text-[var(--foreground)] justify-end">
                {selected.comment}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
