import { contact } from "@/content/contact";

export function ContactSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-ink">[contact]</h2>
      <div className="flex flex-col gap-3 text-sm">
        <a
          href={`mailto:${contact.email}`}
          className="text-ink/70 hover:text-ink"
        >
          [{contact.email}]
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink/70 hover:text-ink"
        >
          [linkedin]
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink/70 hover:text-ink"
        >
          [github]
        </a>
        {contact.resume && (
          <a
            href={contact.resume}
            className="mt-2 inline-block border border-ink/20 px-4 py-2 text-ink/70 hover:bg-ink hover:text-cream"
          >
            [download resume]
          </a>
        )}
      </div>
    </section>
  );
}
