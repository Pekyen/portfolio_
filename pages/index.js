import react from "react";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";


export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <HeroSection></HeroSection>
      <Project></Project>
    </div>
  );
}