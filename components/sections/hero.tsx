"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

function useInViewFadeUp<T extends HTMLElement>(offset = 0.15) {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("in-view")
        })
      },
      { threshold: 1 - offset },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [offset])
  return ref
}

export function Hero() {
  const ref = useInViewFadeUp<HTMLDivElement>(0.2)

  return (
    <section
      ref={ref}
      className={cn(
        "relative mx-auto max-w-5xl px-6 py-16 sm:py-20",
        "opacity-0 translate-y-6 transition-all duration-700 will-change-transform",
        "in-view:opacity-100 in-view:translate-y-0",
      )}
      aria-label="Intro"
    >
      <div
        className={cn(
          "rounded-2xl border border-border bg-card/80 backdrop-blur-sm",
          "shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_8px_30px_rgba(0,0,0,0.06)]",
          "p-6 sm:p-8 md:p-10",
        )}
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
          <div
            className={cn(
              "relative h-28 w-28 shrink-0 rounded-full border border-border bg-background",
              "shadow-[0_1px_0_0_rgba(0,0,0,0.03),0_8px_20px_rgba(0,0,0,0.06)]",
              "overflow-hidden",
            )}
          >
            <Image
              src="/images/profile.jpg"
              alt="Portrait of the Electrical Engineering student"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className={cn("text-balance text-3xl font-semibold tracking-tight sm:text-4xl")}>
              Electrical Engineering Student • St. Thomas’ College of Engineering & Technology
            </h1>
            <p className={cn("mt-3 max-w-2xl text-pretty text-muted-foreground sm:text-lg leading-relaxed")}>
              Curious about how energy, electronics, and technology shape the world. Deep interests in renewable energy,
              power systems, automation, and IoT — believing small engineering steps today can create big impacts
              tomorrow.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Button className="h-10 rounded-full px-5" size="sm">
                View Resume
              </Button>
              <Button variant="outline" className="h-10 rounded-full px-5 bg-transparent" size="sm" asChild>
                <a href="#" aria-label="Visit GitHub profile">
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" className="h-10 rounded-full px-5" size="sm" asChild>
                <a href="#contact" aria-label="Jump to contact section">
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            "Power Systems",
            "Electrical Machines",
            "Power Electronics",
            "Control Systems",
            "Circuit Theory",
            "Renewable Energy",
            "Automation",
            "IoT",
          ].map((k) => (
            <div
              key={k}
              className={cn(
                "rounded-lg border border-border bg-muted/40 px-3 py-2 text-center text-sm text-foreground/80",
                "transition-colors hover:bg-muted",
              )}
            >
              {k}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
