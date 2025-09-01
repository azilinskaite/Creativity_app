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
    <section className="pt-[1rem] bg-white">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
        {Array.from({ length: slotsCount }).map((_, i) => {
          const sub = submissions[i];
          return (
            <div
              key={i}
              className="relative aspect-3/4 overflow-hidden"
            >
              {sub && sub.imageData ? (
                <Image
                  src={sub.imageData}
                  alt={`${sub.discipline} - ${sub.challenge}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <span className="text-gray-300 flex items-center justify-center h-full">
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
