import { Section } from "@/components/sections/section"

export function Strengths() {
  const items = [
    { title: "Humble learner", desc: "Lets projects and growth speak." },
    { title: "Team collaborator", desc: "Values teamwork on group builds." },
    { title: "Practical thinker", desc: "Applies theory to working systems." },
    { title: "Curious & futuristic", desc: "Explores energy + automation’s impact." },
    { title: "Disciplined", desc: "Learns tools beyond the syllabus." },
  ]
  return (
    <Section id="strengths" title="Strengths & Personality" description="A grounded mindset focused on real impact.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((x) => (
          <div
            key={x.title}
            className="rounded-xl border border-border bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur p-5"
          >
            <h4 className="text-sm font-semibold">{x.title}</h4>
            <p className="mt-1 text-sm text-neutral-700">{x.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
