import React from "react";
import SectionHeader from "@/components/SectionHeader";
// import CurrentChallenge from "@/components/CurrentChallenge";
import Disciplines from "@/components/Disciplines";
import Footer from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { getDisciplines } from "@/actions/getDisciplines";

export default async function ProfilePage() {
  const disciplines = await getDisciplines();

  return (
    <div>
      <SectionHeader bg="bg-[var(--bright-red)]" showUser/>
      <div className="p-[1rem] bg-white md:p-[2rem]">
        <p className="max-w-[74ch]">
          Here, you&apos;ll find challenges designed to spark your creativity
          and sharpen your mind. Choose a discipline that interests you,
          complete a challenge, and then snap a photo of your work to upload.
          Over time, you&apos;ll build your own personal gallery showcasing your
          progress and achievements.
        </p>
      </div>
      <SectionHeader>Current challenge</SectionHeader>
      {/* <CurrentChallenge /> */}
      <RevealOnScroll>
        <SectionHeader>Your journey</SectionHeader>
        <Disciplines disciplines={disciplines}/>
      </RevealOnScroll>
      <Footer />
    </div>
  );
}
