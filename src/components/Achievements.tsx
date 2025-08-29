"use client";
import React, { useEffect, useState } from "react";
import { getSubmissions, Submission } from "@/utils/localStorage";
import disciplinesData from "@/data/disciplines.json";
import ProgressBar from "./ProgressBar";

function calculateProgress(disciplineName: string, totalChallenges: number, submissions: Submission[]) {
  const doneCount = submissions.filter((sub) => sub.discipline === disciplineName).length;
  return Math.min(100, (doneCount / totalChallenges) * 100);
}

export default function Achievements() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  const startedDisciplines = disciplinesData.disciplines.filter((discipline) =>
    submissions.some((sub) => sub.discipline === discipline.discipline)
  );

  return (
    <section className="bg-white grid grid-cols-2 md:grid-cols-4 md:gap-0 md:p-0">
      {startedDisciplines.map((d) => {
        const progressPercent = calculateProgress(
          d.discipline,
          d.challenges.length,
          submissions
        );
        return (
          <div
            key={d.discipline}
            className="items-left justify-between p-6"
            style={{ backgroundColor: d.color }}
          >
            <h2 className="capitalize mb-2">{d.discipline}</h2>
            <ProgressBar percent={progressPercent} colorFill="black" />
          </div>
        );
      })}
    </section>
  );
}
