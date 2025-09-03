import { Section } from "@/components/sections/section"

export function AcademicFocus() {
  return (
    <Section
      id="focus"
      title="Academic & Technical Focus"
      description="Core subjects and domains that define my engineering foundation."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FocusCard
          title="Core Subjects"
          items={[
            "Power Systems",
            "Electrical Machines",
            "Power Electronics",
            "Control Systems",
            "Circuit Theory",
            "Renewable Energy Systems",
          ]}
        />
        <FocusCard
          title="Future-Oriented Interests"
          items={["Smart Grids", "Sustainable Power", "Automation & IoT", "Energy Efficiency", "Safety Systems"]}
        />
      </div>
    </Section>
  )
}

function FocusCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5">
      <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
      <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-neutral-700">
        {items.map((x) => (
          <li key={x} className="rounded-lg border border-neutral-200 bg-white px-3 py-2">
            {x}
          </li>
        ))}
      </ul>
    </div>
  )
}
