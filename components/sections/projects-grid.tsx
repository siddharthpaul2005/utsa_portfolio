import Image from "next/image"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/projects"

export function ProjectsGrid() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-14 sm:py-20"
      aria-label="Projects"
    >
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Projects — EE x IoT
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          Blending core electrical fundamentals with connected, sensor-driven
          systems.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className={cn(
              "group overflow-hidden rounded-2xl border border-border bg-card",
              "shadow-[0_1px_0_rgba(0,0,0,0.02),0_10px_30px_rgba(0,0,0,0.05)]",
              "transition-transform duration-300 hover:-translate-y-0.5"
            )}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.img || "/placeholder.svg"}
                alt={p.thumbAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
