import { projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-2xl font-bold text-ink">[projects]</h2>
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col gap-4 border-l-2 border-ink/10 pl-6"
          >
            <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
            <div className="flex flex-col gap-3 text-sm text-ink/80">
              <div>
                <span className="font-mono text-ink/50">[problem]</span>
                <p className="mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="font-mono text-ink/50">[data]</span>
                <p className="mt-1">{project.data}</p>
              </div>
              <div>
                <span className="font-mono text-ink/50">[method]</span>
                <p className="mt-1">{project.method}</p>
              </div>
              <div>
                <span className="font-mono text-ink/50">[findings]</span>
                <p className="mt-1">{project.findings}</p>
              </div>
              <div>
                <span className="font-mono text-ink/50">[impact]</span>
                <p className="mt-1">{project.impact}</p>
              </div>
            </div>
            {project.visualization && (
              <p className="text-xs text-ink/50">
                visualization: {project.visualization}
              </p>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-mono text-ink/60 hover:text-ink"
            >
              [github]
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
