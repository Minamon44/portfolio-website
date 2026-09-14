import { hero } from "@/content/hero";

export function HeroSection() {
  return (
    <section className="flex flex-col items-start gap-6">
      <h1 className="text-4xl font-bold tracking-tight text-ink">
        {hero.name}
      </h1>
      <p className="text-xl text-ink/70">{hero.title}</p>
      <p className="max-w-2xl leading-relaxed text-ink/80">{hero.intro}</p>
      <a
        href={hero.ctaHref}
        className="mt-4 inline-block border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        [{hero.ctaLabel}]
      </a>
    </section>
  );
}
