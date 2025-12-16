"use client";

export default function About() {
  const facts = [
    { label: "Location", value: "Sousse, TN" },
    { label: "Experience", value: "3+ Years" },
    { label: "Focus", value: "React, TypeScript, Node.js" },
  ];

  return (
    <section
      id="about"
      className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Bio */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold text-foreground">
              About <span className="text-accent">me</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Results-driven Full Stack Developer with 3+ years of experience in
              Production environments.
              <br /> I specialize in the JavaScript/TypeScript ecosystem (React,
              Next.js) for the front-end and (Node.js, NestJS) for the backend.
              <br />
              <br />
              Demonstrated success in optimizing application performance and
              delivering exceptional user experiences. <br /> Passionate about
              clean code and staying current with emerging technologies.
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
