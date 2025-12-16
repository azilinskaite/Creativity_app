"use client";
import React, { useState, useEffect } from "react";
import { getSubmissions, Submission } from "@/utils/localStorage";
import { calculateProgress } from "@/utils/localStorage";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import { GetAllDisciplinesQueryResult } from "../../sanity.types";

const numCols = 4;

export default function Disciplines({ disciplines }: { disciplines: GetAllDisciplinesQueryResult }) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  
  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  function ColoredBox({
    d,
    progressPercent,
  }: {
    d: GetAllDisciplinesQueryResult[0];
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
          <h2 className="text-xl capitalize mb-[0.4rem]">{d.title}</h2>
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
           <ProgressBar percent={progressPercent} hidden={progressPercent === 0} />

        </div>
      </div>
    );
  }

  return (
    <section className="bg-white grid grid-cols-2 md:grid-cols-4 md:gap-0 md:p-0">
      {disciplines.map((discipline, idx) => {
        const progressPercent = calculateProgress(
          discipline.title || "",
          discipline.challenges?.length || 0,
          submissions
        );

        const spacerDiv = (
          <div
            className="hidden h-full w-full md:block relative overflow-hidden"
            key={`spacer-${discipline._id}`}
          >
            {discipline.image && (
              <Image
                src={discipline.image}
                alt={`${discipline.title} background image`}
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
            <React.Fragment key={discipline._id}>
              <ColoredBox d={discipline} progressPercent={progressPercent} />
              {spacerDiv}
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={discipline._id}>
              {spacerDiv}
              <ColoredBox d={discipline} progressPercent={progressPercent} />
            </React.Fragment>
          );
        }
      })}
    </section>
  );
}
