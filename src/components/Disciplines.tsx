import React from "react";
import disciplinesData from "@/data/disciplines.json";

const numCols = 4;

export default function Disciplines() {
  return (
    <section className="bg-white grid grid-cols-2 md:grid-cols-4">
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
              <div
                className="h-full w-full bg-[var(--beige)]"
              />
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
              <div
                className="h-full w-full bg-[var(--beige)]"
              />
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={d.discipline}>
              <div
                className="h-full w-full bg-[var(--beige)]"
              />
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
