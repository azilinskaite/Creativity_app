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
      <div className="pt-[1rem] pb-[2rem] grid grid-cols-3 gap-2 md:grid-cols-5">
        {Array.from({ length: slotsCount }).map((_, i) => {
          const sub = submissions[i];
          return (
            <div key={i} className="overflow-hidden flex flex-col">
              {sub ? (
                <>
                  <div className="relative w-full aspect-3/4">
                    <Image
                      src={sub.imageData}
                      alt={`${sub.discipline} - ${sub.challenge}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {sub.comment && (
                    <p className="text-sm italic text-center mt-[1rem] truncate">
                      {sub.comment}
                    </p>
                  )}
                </>
              ) : (
                <span className="text-gray-300 bg-[var(--background)] flex items-center justify-center h-full">
                  No image
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
