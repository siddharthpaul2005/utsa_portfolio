"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

function useInView<T extends HTMLElement>(offset = 0.2) {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("in-view")),
      { threshold: 1 - offset },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [offset])
  return ref
}

export function Highlights() {
  const ref = useInView<HTMLDivElement>(0.2)

  const items = [
    {
      title: "Humble learner",
      desc: "Lets projects and growth speak. Focused on learning every day.",
    },
    {
      title: "Team collaborator",
      desc: "Values teamwork and hands-on group execution.",
    },
    {
      title: "Practical thinker",
      desc: "Applies theory to working systems with disciplined follow-through.",
    },
    {
      title: "Curious & futuristic",
      desc: "Explores how energy and automation can positively shape society.",
    },
  ]

  return (
    <section
      ref={ref}
      className={cn(
        "mx-auto max-w-5xl px-6 py-14 sm:py-20",
        "opacity-0 translate-y-6 transition-all duration-700 in-view:opacity-100 in-view:translate-y-0",
      )}
      aria-label="Strengths and direction"
    >
      <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 sm:p-8">
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Strengths & Personality</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-border bg-background/60 p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-colors hover:bg-background"
            >
              <div className="text-sm font-medium">{it.title}</div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-muted/40 p-4">
          <div className="text-sm font-medium">Future Direction</div>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            Work on renewable energy systems (solar, smart grid), innovate in IoT + automation for safety and energy
            efficiency, and contribute to sustainable technology across power and core electrical industries.
          </p>
        </div>
      </div>
    </section>
  )
}
