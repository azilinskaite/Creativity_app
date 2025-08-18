"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import MoodboardGrid from "./MoodboardGrid";

const MoodboardAddModal = dynamic(() => import("./MoodboardAddModal"), { ssr: false });

export default function Moodboard() {
  const [isEditOpen, setEditOpen] = useState(false);
  const [images, setImages] = useState<Array<string | null>>(Array(6).fill(null));

  return (
    <section className=" p-[2rem]">
      <div className="flex justify-between items-center mb-8">
        <h5 className="mb-[2rem]">Current inspirations</h5>
        <button className="px-4 py-2 bg-[var(--foreground)] text-white rounded" onClick={() => setEditOpen(true)}>
        Edit
      </button>
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
