"use client";
import React, { useState, useEffect, useRef, createContext, useContext, ReactNode } from "react";
import Image from "next/image";
import { getMoodboardImages, saveMoodboardImages } from "@/utils/localStorage";

type MoodboardContextType = {
  images: (string | null)[];
  setImages: React.Dispatch<React.SetStateAction<(string | null)[]>>;
};

const MoodboardContext = createContext<MoodboardContextType | undefined>(undefined);

export function MoodboardProvider({ children }: { children: ReactNode }) {
  const maxImages = 6;
  const [images, setImages] = useState<(string | null)[]>(() => {
    const stored = getMoodboardImages();
    if (stored && Array.isArray(stored)) {
      return [...stored, ...Array(maxImages - stored.length).fill(null)];
    }
    return Array(maxImages).fill(null);
  });

  useEffect(() => {
    saveMoodboardImages(images);
  }, [images]);

  return (
    <MoodboardContext.Provider value={{ images, setImages }}>
      {children}
    </MoodboardContext.Provider>
  );
}

export function useMoodboard() {
  const context = useContext(MoodboardContext);
  if (!context) {
    throw new Error("useMoodboard must be used within a MoodboardProvider");
  }
  return context;
}

export default function Moodboard() {
  const maxImages = 6;
  const { images, setImages } = useMoodboard();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadIndex = useRef<number | null>(null);

  function onAddImageClick(index: number) {
    if (index < 0 || index >= maxImages) {
      console.error("Invalid image index clicked:", index);
      return;
    }
    uploadIndex.current = index;
    fileInputRef.current?.click();
  }

  function onImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || uploadIndex.current === null) {
      console.log("No file or upload index is null");
      return;
    }
    const currentIndex = uploadIndex.current;
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setImages((prev) => {
          const updated = [...prev];
          updated[currentIndex] = result;
          return updated;
        });
      } else {
        console.warn("FileReader result not string:", result);
      }
      uploadIndex.current = null;
      e.target.value = "";
    };

    reader.onerror = (error) => {
      console.error("FileReader error:", error);
      uploadIndex.current = null;
      e.target.value = "";
    };

    reader.readAsDataURL(file);
  }

  return (
    <section className="p-4 bg-white md:px-[2rem] md:pb-[2rem]">
      <h5 className="mb-4">Current inspirations</h5>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {images.map((imgSrc, i) => (
          <div
            key={i}
            className="relative aspect-[2/3] bg-[var(--beige)] rounded-xl overflow-hidden cursor-pointer flex items-center justify-center hover:bg-gray-100"
            onClick={() => !imgSrc && onAddImageClick(i)}
          >
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={`Moodboard image ${i + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <span className="text-gray-300 select-none">+ Add image</span>
            )}
          </div>
        ))}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageUpload}
        />
      </div>
    </section>
  );
}
