"use client";

export default function About() {
  const facts = [
    { label: "Location", value: "Sousse, TN" },
    { label: "Experience", value: "3+ years" },
    { label: "Focus", value: "React, TypeScript, Node.js" },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Bio */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold text-foreground">
              About <span className="text-accent">me</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Results-driven Full Stack Developer with 3 years of experience
              building high-performance web applications. Specialized in React
              ecosystem (React, Next.js, TypeScript) and modern backend
              technologies (Node.js, NestJS, GraphQL). Demonstrated success in
              optimizing application performance and delivering exceptional user
              experiences. Passionate about clean code and staying current with
              emerging technologies
            </p>
          </div>

          {/* Right - Facts Grid */}
          <div className="grid gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-accent/20 bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300"
              >
                <div className="text-sm font-mono text-accent mb-2">
                  {fact.label}
                </div>
                <div className="text-2xl font-semibold text-foreground/95 group-hover:text-accent transition-colors">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
