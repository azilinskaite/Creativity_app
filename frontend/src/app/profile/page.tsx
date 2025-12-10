import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Moodboard from "@/components/Moodboard";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import { MoodboardProvider } from "@/components/Moodboard";
import Footer from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function ProfilePage() {

  return (
    <div>
      <MoodboardProvider>
        <SectionHeader bg="bg-[var(--bright-red)]" showUser/>
        <Moodboard />
        <SectionHeader>Achievements</SectionHeader>
        {/* <Achievements /> */}
        <SectionHeader>Gallery</SectionHeader>
        <RevealOnScroll>
          <Gallery />
        </RevealOnScroll>
      </MoodboardProvider>
      <Footer />
    </div>
  );
}
