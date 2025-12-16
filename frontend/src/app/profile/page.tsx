import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Moodboard from "@/components/Moodboard";
// import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import { MoodboardProvider } from "@/hooks/useMoodboard";
import Footer from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { getDisciplines } from "@/actions/getDisciplines";

export default async function ProfilePage() {
  const disciplines = await getDisciplines();

  return (
    <h1>profile</h1>
    // <div>
    //   <MoodboardProvider>
    //     <SectionHeader bg="bg-[var(--bright-red)]" showUser/>
    //     <Moodboard />
    //     <SectionHeader>Achievements</SectionHeader>
    //     {/* <Achievements /> */}
    //     <SectionHeader>Gallery</SectionHeader>
    //     <RevealOnScroll>
    //       <Gallery disciplines={disciplines}/>
    //     </RevealOnScroll>
    //   </MoodboardProvider>
    //   <Footer />
    // </div>
  );
}
