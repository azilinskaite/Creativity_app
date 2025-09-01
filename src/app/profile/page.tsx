import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Moodboard from "@/components/Moodboard/Moodboard";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";

export default function ProfilePage() {
  return (
    <div>
      <SectionHeader bg="bg-[var(--fuschia)]">Hi user!</SectionHeader>
      <Moodboard/>
      <SectionHeader>Achievements</SectionHeader>
      <Achievements/>
      <SectionHeader>Gallery</SectionHeader>
      <Gallery/>
    </div>
  );
}
