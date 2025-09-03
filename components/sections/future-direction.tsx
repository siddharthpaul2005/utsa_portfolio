import { Section } from "@/components/sections/section"

export function FutureDirection() {
  return (
    <Section
      id="future"
      title="Future Direction"
      description="Staying grounded while aiming for meaningful, sustainable impact."
    >
      <ul className="grid grid-cols-1 gap-3 text-sm text-neutral-700">
        <li className="rounded-lg border border-border bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur px-3 py-2">
          Work on renewable energy systems — solar, smart grids, sustainable power.
        </li>
        <li className="rounded-lg border border-border bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur px-3 py-2">
          Innovate in IoT + automation for safety and energy efficiency.
        </li>
        <li className="rounded-lg border border-border bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur px-3 py-2">
          Contribute to R&D in sustainable tech or core electrical industries.
        </li>
        <li className="rounded-lg border border-border bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur px-3 py-2">
          Keep learning daily and building systems that help society.
        </li>
      </ul>
    </Section>
  )
}
