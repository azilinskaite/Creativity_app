"use client";
import React, { useState, useEffect } from "react";
import MoodboardGrid from "./MoodboardGrid";
import Button from "../Button";
import dynamic from "next/dynamic";
import { getMoodboardImages, saveMoodboardImages } from "@/utils/localStorage";

const MoodboardAddModal = dynamic(() => import("./MoodboardAddModal"), {
  ssr: false,
});

export default function Moodboard() {
  const [isClient, setIsClient] = useState(false);
  const [images, setImages] = useState<(string | null)[]>([]);
  const [isEditOpen, setEditOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setImages(getMoodboardImages());
  }, []);

  useEffect(() => {
    if (isClient) {
      saveMoodboardImages(images);
    }
  }, [images, isClient]);

  return (
    <section className="p-[1rem] pt-[1rem] bg-white md:p-[2rem]">
      <div className="flex justify-between items-center mb-[1rem]">
        <h5>Current inspirations</h5>
        <Button
          variant="secondary"
          size="short"
          onClick={() => setEditOpen(true)}
        >
          Edit
        </Button>
      </div>
      <MoodboardGrid images={images} />
      <MoodboardAddModal
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
        images={images}
        setImages={setImages}
      />
    </section>
  );
}
