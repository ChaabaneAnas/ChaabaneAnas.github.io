"use client";

interface MicroProject {
  title: string;
  description: string;
  tech: string;
  link?: string;
}

const projects: MicroProject[] = [
  {
    title: "Dieture Dashboard ",
    description: "Admin dashboard for managing Dieture's operations",
    tech: "React, TypeScript, NestJS, MongoDB",
  },
  {
    title: "Dieture Kitchen App Backend",
    description: "Meal management app for Dieture's kitchen staff",
    tech: "NestJS, MongoDB, ",
  },
  {
    title: "Dieture Driver App Backend",
    description: "Delivery management app for Dieture's drivers",
    tech: "NestJS, MongoDB,",
  },
  {
    title: "Enr Agri App",
    description: "Mobile app for agricultural management and monitoring",
    tech: "React Native, TypeScript,",
  },
  {
    title: "Custom Multi-Select Component",
    description:
      "Accessible and customizable multi-select dropdown component built with React and TypeScript",
    tech: "React, TypeScript",
  },
  {
    title: "Budget Tracker",
    description: "Track your expenses and manage your budget effectively",
    tech: "Ruby on Rails, PostgreSQL",
  },
];

export default function MicroProjects() {
  return (
    <section className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-bold mb-12">
          Side <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-accent/10 bg-card/50 hover:border-accent/50 hover:bg-card transition-all duration-300 cursor-pointer"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-4">
                {project.description}
              </p>
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
