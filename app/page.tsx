import { Button } from "@/components/ui/button"
import { AcademicFocus } from "@/components/sections/academic-focus"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Strengths } from "@/components/sections/strengths"
import { FutureDirection } from "@/components/sections/future-direction"
import Image from "next/image"
import { Github, Linkedin, FileText, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <Hero />

      <div className="container mx-auto px-4 py-10 md:py-16 max-w-5xl">
        <section id="about" aria-label="About" className="scroll-mt-24">
          <About />
        </section>
        <AcademicFocus />
        <section id="skills" aria-label="Skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" aria-label="Projects" className="scroll-mt-24">
          <Projects />
        </section>
        <Strengths />
        <FutureDirection />
        <ContactCTA />
      </div>

      {/* previously: <QuickDockNav /> */}
    </main>
  )
}

function Hero() {
  return (
    <header className="relative">
      <div className="container mx-auto px-4 pt-10 md:pt-16 max-w-5xl">
        <div className="group rounded-2xl border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-border shadow-sm transition-all">
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_3px_rgba(8,145,178,0.15)]"
              />
              <p className="text-sm text-muted-foreground">Open to internships & collaborations</p>
            </div>

            <div className="mt-5 md:mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl font-serif">
                  Shaping My Path in Energy, Power & Innovation.
                </h1>
                <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                  I’m a B.Tech student in Electrical Engineering at St. Thomas’ College of Engineering & Technology.
                  Curious about how energy, electronics, and technology shape the world—particularly renewable energy,
                  power systems, automation, and IoT.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a href="#projects" className="inline-flex">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-10">
                      View Projects
                    </Button>
                  </a>
                  <Button asChild variant="outline" className="rounded-full px-5 h-10 bg-transparent">
                    <a href="#" aria-label="View Resume">
                      <FileText className="mr-1.5" /> Resume
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-5 h-10 bg-transparent">
                    <a href="#" aria-label="Visit GitHub profile">
                      <Github className="mr-1.5" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-5 h-10 bg-transparent">
                    <a
                      href="https://www.linkedin.com/in/utsa-ghosh-631b27278/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open LinkedIn profile"
                    >
                      <Linkedin className="mr-1.5" /> LinkedIn
                    </a>
                  </Button>
                  <a href="#contact" className="inline-flex">
                    <Button variant="ghost" className="rounded-full px-5 h-10">
                      Contact
                    </Button>
                  </a>
                </div>
              </div>
                  <div className="flex flex-col items-center gap-3 md:items-center">
                  <div className="relative h-40 w-40 sm:h-44 sm:w-44 rounded-full border-spacing-0.5 border-primary shadow-lg overflow-hidden">
                       <Image
                           src="/images/profile.jpg"
                            alt="Portrait of Utsa Ghosh"
                            fill
                              sizes="(max-width: 640px) 176px, 192px"
                                className="object-cover"
                              priority
                             />
                        </div>
                      <p className="text-lg md:text-xl font-medium text-muted-foreground tracking-tight">
                      Utsa Ghosh
                            </p>
                </div>

            </div>

            <ProfileStrip />
          </div>
        </div>
      </div>
    </header>
  )
}

function ProfileStrip() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <InfoTile
        title="Academic"
        value="B.Tech, Electrical Engineering"
        detail="St. Thomas’ College of Engineering & Technology"
      />
      <InfoTile
        title="Interests"
        value="Renewables, Power, Automation, IoT"
        detail="Small steps today → big impact tomorrow"
      />
      <InfoTile title="Tools" value="MATLAB, Simulink, ETAP, Arduino" detail="Windows + Ubuntu • Git/GitHub" />
    </div>
  )
}

function InfoTile({
  title,
  value,
  detail,
}: {
  title: string
  value: string
  detail: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{title}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
    </div>
  )
}

function ContactCTA() {
  return (
    <section id="contact" className="mt-12 md:mt-16 scroll-mt-24">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center">
        <h3 className="text-xl font-semibold font-serif text-foreground">Let’s build what matters</h3>
        <p className="mt-2 text-muted-foreground">
          I don’t claim to know everything, but I’m learning every day — and one day I hope my work contributes to
          technologies that truly make a difference.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="inline-flex">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-10">
              Contact Me
            </Button>
          </a>
          <Button asChild variant="outline" className="rounded-full px-5 h-10 bg-transparent">
            <a href="mailto:your.email@example.com" aria-label="Send email">
              <Mail className="mr-1.5" /> Email
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-5 h-10 bg-transparent">
            <a
              href="https://www.linkedin.com/in/utsa-ghosh-631b27278/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn"
            >
              <Linkedin className="mr-1.5" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// removed dock navbar implementation by making it a no-op so it renders nothing
function QuickDockNav() {
  return null
}
