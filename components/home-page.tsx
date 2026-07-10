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
import { SiteFooter } from "./site-footer";

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content / 跳至主要内容</a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <FocusSection />
        <ProjectsSection />
        <PublicationsSection />
        <ExperienceSection />
        <EducationSection />
        <AboutSection />
        <StackSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
