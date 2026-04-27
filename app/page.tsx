import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import GrainOverlay from "@/components/GrainOverlay";
import ParticleField from "@/components/ParticleField";
import { portfolioData } from "./data";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <GrainOverlay />
      <ParticleField />
      <main className="relative z-10">
        <Navbar />
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          summary={portfolioData.summary}
          contact={portfolioData.contact}
        />
        <SkillsMarquee />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Contact
          contact={portfolioData.contact}
          education={portfolioData.education}
        />
      </main>
    </>
  );
}
