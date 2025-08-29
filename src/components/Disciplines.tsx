"use client";
import React, { useState, useEffect } from "react";
import disciplinesData from "@/data/disciplines.json";
import { getSubmissions, Submission } from "@/utils/localStorage";
import { calculateProgress } from "@/utils/localStorage";
import ProgressBar from "./ProgressBar";

const numCols = 4;

export default function Disciplines() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  return (
    <section className="bg-white grid grid-cols-2 gap-[1rem] p-[1rem] md:grid-cols-4 md:gap-0 md:p-0">
      {disciplinesData.disciplines.map((d, idx) => {
        const progressPercent = calculateProgress(
          d.discipline,
          d.challenges.length,
          submissions
        );
        if (idx % numCols === 2) {
          return (
            <React.Fragment key={d.discipline}>
              <div
                style={{ backgroundColor: d.color }}
                className="items-left justify-between p-6"
              >
                <h2 className="text-lg capitalize mb-[3rem]">{d.discipline}</h2>
                <ProgressBar percent={progressPercent} />
              </div>
              <div className="hidden h-full w-full bg-[var(--beige)] md:block" />
            </React.Fragment>
          );
        } else if (idx === 3) {
          return (
            <React.Fragment key={d.discipline}>
              <div
                style={{ backgroundColor: d.color }}
                className="items-left justify-between p-6"
              >
                <h2 className="text-lg capitalize mb-[3rem]">{d.discipline}</h2>
                <ProgressBar percent={progressPercent} />
              </div>
              <div className="hidden h-full w-full bg-[var(--beige)] md:block" />
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={d.discipline}>
              <div className="hidden h-full w-full bg-[var(--beige)] md:block" />
              <div
                style={{ backgroundColor: d.color }}
                className="items-left justify-between p-6"
              >
                <h2 className="text-lg capitalize mb-[3rem]">{d.discipline}</h2>
                <ProgressBar percent={progressPercent} />
              </div>
            </React.Fragment>
          );
        }
      })}
    </section>
  );
}
