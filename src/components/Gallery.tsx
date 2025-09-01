import React from "react";
import Image from "next/image";
import { getSubmissions } from "@/utils/localStorage";

export default function Gallery() {
  const submissions = getSubmissions();

  return (
    <section className="p-[2rem]">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {submissions.map((sub, i) => {
  console.log("Submission", i, sub);
  return sub.imageData ? (
    <img
      key={i}
      src={sub.imageData}
      alt={`${sub.discipline} - ${sub.challenge}`}
      className="object-cover w-full h-full aspect-square rounded border"
    />
  ) : null;
})}
      </div>
    </section>
  );
}
