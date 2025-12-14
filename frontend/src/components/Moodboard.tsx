"use client";
import React, {
  useState,
  // useEffect,
  useRef,
} from "react";
import Image from "next/image";
import { useMoodboard } from "@/hooks/useMoodboard";

export default function Moodboard() {
  // const maxImages = 6;
  const moodboard = useMoodboard();
  const { images, setImages } = moodboard || { images: [], setImages: () => {} };
  const [hasMounted, setHasMounted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadIndex = useRef<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  //  useEffect(() => {
  //   setHasMounted(true);
  //   const loadedImages = getMoodboardImages() || [];
  //   const paddedImages = [...loadedImages, ...Array(maxImages - loadedImages.length).fill(null)];
  //   setImages(paddedImages);
  // }, [setImages]);

  // useEffect(() => {
  //   if (hasMounted) {
  //     saveMoodboardImages(images);
  //   }
  // }, [images, hasMounted]);

  function onImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || uploadIndex.current === null) return;
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
      }
      uploadIndex.current = null;
      e.target.value = "";
    };

    reader.onerror = () => {
      uploadIndex.current = null;
      e.target.value = "";
    };

    reader.readAsDataURL(file);
  }

  return (
    <section className="p-4 bg-white md:px-8 md:pb-8">
      <h5 className="mb-4">Moodboard of current inspirations</h5>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {images.map((imgSrc, i) => (
          <div
            key={i}
            className="relative aspect-2/3 bg-(--beige) rounded-xl overflow-hidden cursor-pointer flex items-center justify-center hover:bg-gray-100"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              uploadIndex.current = i;
              fileInputRef.current?.click();
            }}
          >
            {hasMounted && imgSrc ? (
              <>
                <Image
                  src={imgSrc}
                  alt={`Moodboard image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                {hoveredIndex === i && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      uploadIndex.current = i;
                      fileInputRef.current?.click();
                    }}
                    className="absolute top-2 right-2 z-10 rounded bg-black bg-opacity-50 text-white px-2 py-1 text-xs"
                    aria-label={`Edit moodboard image ${i + 1}`}
                  >
                    Edit
                  </button>
                )}
              </>
            ) : (
              <span className="text-gray-400 select-none p-4 text-center">+ Add moodboard image</span>
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
