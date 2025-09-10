"use client";
import React, { useState, useEffect } from "react";
import disciplinesData from "@/data/disciplines.json";
import { getSubmissions, Submission } from "@/utils/localStorage";
import { calculateProgress } from "@/utils/localStorage";
import ProgressBar from "./ProgressBar";
import Image from "next/image";

const numCols = 4;

export default function Disciplines() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  function ColoredBox({
    d,
    progressPercent,
  }: {
    d: (typeof disciplinesData.disciplines)[0];
    progressPercent: number;
  }) {
    const [showDescription, setShowDescription] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (showDescription) {
        const timeout = setTimeout(() => setShowDescription(false), 5000);
        return () => clearTimeout(timeout);
      }
    }, [showDescription]);

    const toggleDescription = () => {
      if (isMobile) setShowDescription((prev) => !prev);
    };

    return (
      <div
        style={{ backgroundColor: d.color }}
        className="items-center p-[1.2rem] group"
        onClick={toggleDescription}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <h2 className="text-xl capitalize mb-[0.4rem]">{d.discipline}</h2>
          <p
            className={`text-xs mb-[0.4rem] transition-opacity duration-500 ${
              isMobile
                ? showDescription
                  ? "opacity-100"
                  : "opacity-0"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            {d.description}
          </p>
          <ProgressBar percent={progressPercent} />
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white grid grid-cols-2 md:grid-cols-4 md:gap-0 md:p-0">
      {disciplinesData.disciplines.map((d, idx) => {
        const progressPercent = calculateProgress(
          d.discipline,
          d.challenges.length,
          submissions
        );

        const spacerDiv = (
          <div
            className="hidden h-full w-full md:block relative overflow-hidden"
            key={`spacer-${d.discipline}`}
          >
            {d.background && (
              <Image
                src={d.background}
                alt={`${d.discipline} background`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(min-width: 768px) 100vw"
                priority={false}
              />
            )}
            <div className="absolute inset-0 bg-[var(--beige)] opacity-30"></div>
          </div>
        );

        if (idx % numCols === 2 || idx === 3) {
          return (
            <React.Fragment key={d.discipline}>
              <ColoredBox d={d} progressPercent={progressPercent} />
              {spacerDiv}
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={d.discipline}>
              {spacerDiv}
              <ColoredBox d={d} progressPercent={progressPercent} />
            </React.Fragment>
          );
        }
      })}
    </section>
  );
}
