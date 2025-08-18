import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Moodboard from "@/components/Moodboard/Moodboard";

export default function ProfilePage() {
  return (
    <div>
      <SectionHeader bg="bg-[var(--fuschia)]">Hi [username]!</SectionHeader>
      <Moodboard/>
      <SectionHeader>Achievements</SectionHeader>
      <SectionHeader>Gallery</SectionHeader>
    </div>
  );
}
