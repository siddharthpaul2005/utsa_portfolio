import { cn } from "@/lib/utils"

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-4xl px-6 text-center", className)}>
      {eyebrow ? <div className="mb-2 text-xs font-medium tracking-wide text-muted-foreground">{eyebrow}</div> : null}
      <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground leading-relaxed">{description}</p>
      ) : null}
      <div className="mx-auto mt-6 h-px max-w-24 bg-border" />
    </div>
  )
}
