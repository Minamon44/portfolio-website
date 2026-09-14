import { education } from "@/content/education";

export function EducationSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-ink">[education]</h2>
      <div className="flex flex-col gap-6">
        {education.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 border-l-2 border-ink/10 pl-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <h3 className="text-lg font-semibold text-ink">
                {entry.degree}
              </h3>
              <span className="text-sm text-ink/60">{entry.institution}</span>
              <span className="font-mono text-xs text-ink/40">{entry.year}</span>
            </div>
            {entry.details && (
              <p className="mt-1 text-sm text-ink/70">{entry.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
