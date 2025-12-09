"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  summary: string
  outcome: string
  tech: string[]
  image: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with 200k+ daily requests",
    summary: "Built a scalable analytics dashboard using Next.js and PostgreSQL",
    outcome: "Reduced load time by 35%, handled 200k requests/day",
    tech: ["React", "TypeScript", "PostgreSQL", "Redis"],
    image: "/placeholder.svg?key=u6x3g",
  },
  {
    id: "2",
    title: "Design System",
    description: "Component library serving 50+ products across the organization",
    summary: "Created comprehensive design system with 100+ reusable components",
    outcome: "Increased development velocity by 40%, improved consistency",
    tech: ["React", "Storybook", "TypeScript", "Tailwind"],
    image: "/placeholder.svg?key=uscm3",
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration and inventory management",
    summary: "Developed complete e-commerce solution with real-time inventory",
    outcome: "Processed $2M in transactions, 99.9% uptime",
    tech: ["Next.js", "Stripe", "MongoDB", "AWS"],
    image: "/placeholder.svg?key=tpwf6",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="work" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-bold mb-12">
          Featured <span className="text-accent">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer text-left"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 h-48 bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-foreground/60 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full p-8 animate-slide-in max-h-96 overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-display text-3xl font-bold">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-foreground/60 hover:text-foreground transition-colors text-2xl"
              >
                ✕
              </button>
            </div>

            <p className="text-foreground/70 mb-4">{selectedProject.summary}</p>

            <div className="mb-6">
              <h4 className="font-bold text-accent mb-2">Outcome</h4>
              <p className="text-foreground/70">{selectedProject.outcome}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Button
              onClick={() => setSelectedProject(null)}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
