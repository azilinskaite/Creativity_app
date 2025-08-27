"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import MoodboardGrid from "./MoodboardGrid";
import Button from "../Button";

const MoodboardAddModal = dynamic(() => import("./MoodboardAddModal"), {
  ssr: false,
});

export default function Moodboard() {
  const [isEditOpen, setEditOpen] = useState(false);
  const [images, setImages] = useState<Array<string | null>>(
    Array(6).fill(null)
  );

  return (
    <section className="p-[2rem] pt-[1rem] bg-white">
      <div className="flex justify-between items-center mb-[1rem]">
        <h5>Current inspirations</h5>
        <Button variant="secondary" size="short" onClick={() => setEditOpen(true)}>
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
