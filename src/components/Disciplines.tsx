import React from "react";
import disciplinesData from "@/data/disciplines.json";

const numCols = 4;

export default function Disciplines() {
  return (
    <section className="bg-white grid grid-cols-2 gap-[1rem] p-[1rem] md:grid-cols-4 md:gap-0 md:p-0">
      {disciplinesData.disciplines.map((d, idx) => {
        if (idx % numCols === 2) {
          return (
            <React.Fragment key={d.discipline}>
              <div
                style={{ backgroundColor: d.color }}
                className="items-left justify-between p-6"
              >
                <h2 className="text-lg capitalize mb-[4rem]">{d.discipline}</h2>
                <p>Progress: {d.challenges.length}</p>
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
                <h2 className="text-lg capitalize mb-[4rem]">{d.discipline}</h2>
                <p>Progress: {d.challenges.length}</p>
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
                <h2 className="text-lg capitalize mb-[4rem]">{d.discipline}</h2>
                <p>Progress: {d.challenges.length}</p>
              </div>
            </React.Fragment>
          );
        }
      })}
    </section>
  );
}
