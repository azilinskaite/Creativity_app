import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CurrentChallenge from "@/components/CurrentChallenge";
import Disciplines from "@/components/Disciplines";

export default function ProfilePage() {
  return (
    <div>
      <SectionHeader bg="bg-[var(--fuschia)]">Hi user!</SectionHeader>
      <div className="p-[1rem] bg-white md:p-[2rem]">
      <p className="max-w-[74ch]">Here, you&apos;ll find challenges designed to spark your creativity and sharpen your mind. Choose a discipline that interests you, complete a challenge, and then snap a photo of your work to upload. Over time, you&apos;ll build your own personal gallery showcasing your progress and achievements.</p>
      </div>
      <SectionHeader>Current challenge</SectionHeader>
      <CurrentChallenge />
      <SectionHeader>Disciplines</SectionHeader>
      <Disciplines />
    </div>
  );
}
