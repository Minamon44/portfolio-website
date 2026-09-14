import { skills } from "@/content/skills";

export function SkillsSection() {
  const categories = [
    { label: "languages", items: skills.languages },
    { label: "frameworks", items: skills.frameworks },
    { label: "tools", items: skills.tools },
    { label: "domains", items: skills.domains },
  ];

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-ink">[skills]</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {categories.map((category) => (
          <div key={category.label} className="flex flex-col gap-2">
            <span className="font-mono text-sm text-ink/50">
              [{category.label}]
            </span>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="border border-ink/10 px-3 py-1 text-sm text-ink/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
