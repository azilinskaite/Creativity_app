"use client";

import React, { useRef } from "react";
import Button from "../Button"; 

interface Props {
  isOpen: boolean;
  onClose: () => void;
  images: (string | null)[];
  setImages: (imgs: (string | null)[]) => void;
}

export default function MoodboardAddModal({ isOpen, onClose, images, setImages }: Props) {
  const fileInputs = useRef<(HTMLInputElement | null)[]>([]);

  if (!isOpen) return null;

  const handleImageChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newImages = [...images];
      newImages[idx] = url;
      setImages(newImages);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl p-8 max-w-lg w-full shadow-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-8 right-9 text-[var(--foreground)] hover:text-[var(--bright-red)]"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-6 text-center">Edit Moodboard</h2>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded aspect-3/4 flex items-center justify-center overflow-hidden border relative group"
            >
              {src ? (
                <img src={src} alt={`Slot ${idx + 1}`} className="object-cover w-full h-full" />
              ) : (
                <span className="text-gray-300">No image</span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(idx, e)}
                className="absolute inset-0 opacity-0 cursor-pointer"
                title="Upload image"
              />
              <button
                type="button"
                onClick={() => {
                  const newImages = [...images];
                  newImages[idx] = null;
                  setImages(newImages);
                }}
                className="absolute top-1 right-1 text-s px-1 py-0.5 rounded hover:text-[var(--bright-red)] transition hidden group-hover:block"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button type="button" onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}
