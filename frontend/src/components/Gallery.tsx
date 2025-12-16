"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import {
  Submission,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
} from "@/utils/localStorage";
import { GetAllDisciplinesQueryResult } from "../../sanity.types";

export default function Gallery({ disciplines }: { disciplines: GetAllDisciplinesQueryResult }) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState("");
  const slotsCount = Math.max(1, submissions.length);

  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  useEffect(() => {
    if (selected) {
      setEditedComment(selected.comment || "");
      setIsEditing(false);
    }
  }, [selected]);

  function getChallengeText(submission: Submission) {
    return submission.challengeText || "";
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
                <div className="text-gray-400 bg-[var(--beige)] flex items-center py-[6rem] px-[1rem] text-center justify-center h-full">
                  No submitted images yet
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
              {getChallengeText(selected)}
            </p>

            {isEditing ? (
              <div className="flex flex-col gap-2">
                <textarea
                  className="border rounded p-2 text-sm w-full"
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                  rows={4}
                  placeholder="Edit comment..."
                />
                <div className="flex gap-2">
                  <Button
        size="short"
        variant="primary"
        className="text-xs p-[0.5rem]"
        onClick={() => {
          if (selected) {
            const updatedSub = {
              ...selected,
              comment: editedComment,
            };
            const updated = updateSubmission(updatedSub);
            setSubmissions(updated);
            setSelected(updatedSub);
          }
          setIsEditing(false);
        }}
      >
        Save
      </Button>
      <Button
        size="short"
        variant="primary"
        className="text-xs p-[0.5rem]"
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </Button>
                </div>
              </div>
            ) : (
              selected.comment && (
                <p className="italic text-[var(--foreground)] justify-end">
                  {selected.comment}
                </p>
              )
            )}
            <div className="flex gap-[0.5rem] mt-[4rem]">
            <Button
              variant="secondary"
              size="short"
              onClick={() => {
                if (selected) {
                  const updated = deleteSubmission(selected.challengeId);
                  setSubmissions(updated);
                  setSelected(null);
                }
              }}
            >
              Delete
            </Button>

            <Button
              variant="secondary"
              size="short"
              onClick={() => {
                setIsEditing(true);
                setEditedComment(selected?.comment || "");
              }}
            >
              Edit
            </Button>
          </div>
          </div>
        </div>
      )}
    </section>
  );
}
