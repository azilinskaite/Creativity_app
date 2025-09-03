import React from "react";
import MoodboardSlot from "./MoodboardSlot";

export default function MoodboardGrid({ images }: { images: (string | null)[] }) {
  return (
    <div className="grid grid-cols-3 gap-[0.5rem] md:grid-cols-6">
      {images.map((src, i) => (
        <MoodboardSlot key={i} src={src} />
      ))}
    </div>
  );
}
