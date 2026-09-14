import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-ink">[experience]</h2>
      <div className="flex flex-col gap-10">
        {experience.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border-l-2 border-ink/10 pl-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <h3 className="text-lg font-semibold text-ink">{entry.role}</h3>
              <span className="text-sm text-ink/60">{entry.company}</span>
              <span className="font-mono text-xs text-ink/40">
                {entry.period}
              </span>
            </div>
            <ul className="mt-2 flex flex-col gap-1 text-sm text-ink/80">
              {entry.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-ink/40">-</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
