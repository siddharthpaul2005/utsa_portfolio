import { Section } from "@/components/sections/section"
import { BadgeGroup } from "@/components/ui/badge-group"

export function Skills() {
  return (
    <Section id="skills" title="Skills & Tools" description="Practical tools I use to turn ideas into working systems.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h4 className="text-sm font-semibold text-neutral-900">Simulation & Design</h4>
          <BadgeGroup
            items={["MATLAB", "Simulink", "ETAP", "PSCAD", "PSpice", "AutoCAD Electrical", "Multisim", "Proteus"]}
          />
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h4 className="text-sm font-semibold text-neutral-900">Embedded & IoT</h4>
          <BadgeGroup items={["Arduino IDE", "Arduino", "Raspberry Pi", "IoT Cloud Platforms"]} />
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h4 className="text-sm font-semibold text-neutral-900">Programming</h4>
          <BadgeGroup items={["C (basic)", "Python (basic)"]} />
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h4 className="text-sm font-semibold text-neutral-900">Productivity & OS</h4>
          <BadgeGroup items={["MS Excel", "PowerPoint", "Git/GitHub", "Google Colab", "Windows", "Ubuntu"]} />
        </div>
      </div>
    </Section>
  )
}
