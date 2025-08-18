import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CurrentChallenge from "@/components/CurrentChallenge";
import Disciplines from "@/components/Disciplines";

export default function ProfilePage() {
  return (
    <div>
      <SectionHeader bg="bg-[var(--fuschia)]">Hi [username]!</SectionHeader>
      <SectionHeader>Current challenge</SectionHeader>
      <CurrentChallenge />
      <SectionHeader>Disciplines</SectionHeader>
      <Disciplines />
    </div>
  );
}
