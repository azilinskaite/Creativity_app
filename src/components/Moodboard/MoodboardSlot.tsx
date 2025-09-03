import React from "react";
import Image from "next/image";

export default function MoodboardSlot({ src }: { src: string | null }) {
  return (
    <div className="aspect-2/3 bg-[var(--beige)] rounded-2xl flex items-center justify-center overflow-hidden relative">
      {src ? (
        <Image
          src={src}
          alt="Inspiration"
          fill
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="text-gray-300">No image</span>
      )}
    </div>
  );
}
