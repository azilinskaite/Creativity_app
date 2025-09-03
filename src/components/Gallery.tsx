"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Submission, getSubmissions } from "@/utils/localStorage";

export default function Gallery() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  const slotsCount = Math.max(1, submissions.length);

  return (
    <section className="bg-white">
      <div className="px-[1rem] pb-[2rem] grid grid-cols-2 gap-[2rem] md:grid-cols-4 md:px-[2rem]">
        {Array.from({ length: slotsCount }).map((_, i) => {
          const sub = submissions[i];
          return (
            <div key={i} className="overflow-hidden flex flex-col">
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
    </section>
  );
}
