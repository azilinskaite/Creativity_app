import React from "react";

export default function MoodboardSlot({ src }: { src: string | null }) {
  return (
    <div className="aspect-2/3 bg-gray-100 rounded flex items-center justify-center overflow-hidden border">
      {src ? (
        <img src={src} alt="Inspiration" className="object-cover w-full h-full" />
      ) : (
        <span className="text-gray-300">No image</span>
      )}
    </div>
  );
}
