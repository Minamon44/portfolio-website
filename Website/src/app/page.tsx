import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";

const sections = [
  { id: "hero", title: "Hero" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export default function Home() {
  return (
    <PageShell>
      {sections.map((section) => (
        <SectionContainer key={section.id} id={section.id}>
          <h2
            id={`${section.id}-heading`}
            className="text-[var(--text-heading-md)] font-[var(--font-weight-heading-md)] mb-4"
          >
            {section.title}
          </h2>
          <p className="text-[var(--text-body-md)] text-[var(--color-body)]">
            Section content coming in Phase 2+
          </p>
        </SectionContainer>
      ))}
    </PageShell>
  );
}
