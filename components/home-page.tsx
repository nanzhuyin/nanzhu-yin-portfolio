import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { FocusSection } from "./focus-section";
import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { PublicationsSection } from "./publications-section";
import { ProjectsSection } from "./projects-section";
import { StackSection } from "./stack-section";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FocusSection />
        <ProjectsSection />
        <PublicationsSection />
        <ExperienceSection />
        <EducationSection />
        <StackSection />
        <ContactSection />
      </main>
    </>
  );
}
