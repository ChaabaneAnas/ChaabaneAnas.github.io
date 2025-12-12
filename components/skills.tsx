"use client";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "APIs & REST", category: "Backend" },
  { name: "AWS", category: "Tools" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
];

export default function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section
      id="skills"
      className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-bold mb-12">
          Technical <span className="text-accent">Stack</span>
        </h2>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-md font-bold text-accent/90 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/30 text-sm font-medium transition-all duration-300 hover:bg-accent/20 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 cursor-default"
                    >
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
