"use client";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { getMoodboardImages, saveMoodboardImages } from "@/utils/localStorage";

type MoodboardContextType = {
  images: (string | null)[];
  setImages: React.Dispatch<React.SetStateAction<(string | null)[]>>;
};

const MoodboardContext = createContext<MoodboardContextType | undefined>(
  undefined
);

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
    // Return default values during SSR or when context is not available
    return {
      images: Array(6).fill(null),
      setImages: () => {},
    };
  }
  return context;
}