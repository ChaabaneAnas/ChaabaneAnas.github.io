"use client";

export default function About() {
  const facts = [
    { label: "Location", value: "San Francisco, CA" },
    { label: "Experience", value: "8+ years" },
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
              I&apos;m a full-stack engineer passionate about crafting
              accessible, performant digital experiences. With a strong
              foundation in both frontend and backend technologies, I enjoy
              solving complex problems and mentoring junior developers.
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
