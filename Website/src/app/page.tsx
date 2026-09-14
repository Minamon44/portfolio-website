import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const sections = [
  { id: "hero", Component: HeroSection },
  { id: "projects", Component: ProjectsSection },
  { id: "skills", Component: SkillsSection },
  { id: "experience", Component: ExperienceSection },
  { id: "education", Component: EducationSection },
  { id: "contact", Component: ContactSection },
];

export default function Home() {
  return (
    <PageShell>
      {sections.map(({ id, Component }) => (
        <SectionContainer key={id} id={id}>
          <Component />
        </SectionContainer>
      ))}
    </PageShell>
  );
}
