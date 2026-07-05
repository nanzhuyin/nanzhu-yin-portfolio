import { AboutSection } from "./about-section";
import { AffiliationsSection } from "./affiliations-section";
import { ContactSection } from "./contact-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { FocusSection } from "./focus-section";
import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { ProfileHighlightsSection } from "./profile-highlights-section";
import { ProjectsSection } from "./projects-section";
import { StackSection } from "./stack-section";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProfileHighlightsSection />
        <AboutSection />
        <AffiliationsSection />
        <FocusSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <StackSection />
        <ContactSection />
      </main>
    </>
  );
}
