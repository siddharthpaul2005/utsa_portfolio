import { Section } from "@/components/sections/section"
import { projects } from "@/lib/projects"

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Hands-on systems that connect electrical engineering with automation and IoT."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold">{p.title}</h4>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
              <img
                src={p.img}
                alt={p.thumbAlt}
                className="size-16 rounded-lg border border-border bg-card object-cover"
              />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
