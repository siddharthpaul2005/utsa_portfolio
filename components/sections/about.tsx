import { Section } from "@/components/sections/section"

export function About() {
  return (
    <Section
      id="about"
      title="About"
      description="A humble learner combining electrical fundamentals with IoT and automation."
    >
      <div className="rounded-2xl border border-border bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur p-5 md:p-6">
        <div className="text-neutral-700 leading-relaxed">
          <p>
            I’m pursuing B.Tech in Electrical Engineering at St. Thomas’ College of Engineering & Technology. I’m
            curious about how energy, electronics, and technology shape the world. My focus blends traditional
            EE—motors, circuits, power systems—with modern systems like renewable energy, automation, and IoT.
          </p>
          <p className="mt-3">
            I prefer letting projects speak more than words. I’m disciplined, practical, and collaborative—comfortable
            learning beyond the classroom with tools like MATLAB, Simulink, ETAP, and embedded platforms. My long-term
            goal is to contribute to sustainable technology and smart systems that benefit society.
          </p>
        </div>
      </div>
    </Section>
  )
}
