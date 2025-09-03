import type React from "react"
export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mt-10 md:mt-14 scroll-mt-24">
      <div className="mb-4 md:mb-6">
        <h2 className="text-pretty text-2xl font-semibold tracking-tight">{title}</h2>
        {description ? <p className="mt-2 text-neutral-600 leading-relaxed">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}
