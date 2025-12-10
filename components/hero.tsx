"use client";
import { Button } from "@/components/ui/button";
import CountUp from "./Countup";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background pointer-events-none" />

      {/* Subtle animated code terminal graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 dark:opacity-30 pointer-events-none">
        <div className="font-mono text-xs text-accent space-y-1">
          <div>$ npm run build</div>
          <div className="text-accent/60">&gt; Building project...</div>
          <div className="text-accent/40">Compiling components...</div>
          <div className="animate-pulse text-accent">&gt; _</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-in space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-balance">
                Build. Deploy.
                <span className="block text-accent animate-glow">Scale.</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-md text-balance">
                Full-stack engineer crafting performant, accessible digital
                experiences with modern technologies.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
              >
                See latest project →
              </Button>
              <Button variant="outline" size="lg" className="">
                ⬇ Download résumé
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 text-sm">
              <div>
                <div className="text-lg font-bold text-accent">
                  <CountUp to={3} className="text-accent" />
                  <span>+</span>
                </div>
                <div className="text-foreground/60">Years Experience</div>
              </div>
              <div>
                <div className="text-lg font-bold text-accent">
                  <CountUp to={15} className="text-accent" />
                  <span>+</span>
                </div>
                <div className="text-foreground/60">Projects Shipped</div>
              </div>
              <div>
                <div className="text-lg font-bold text-accent">
                  <CountUp to={100} className="text-accent" />
                  <span>%</span>
                </div>
                <div className="text-foreground/60">Test Coverage</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden md:block relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-2xl blur-3xl" />
            <div className="relative glass rounded-2xl p-8 h-full flex items-center justify-center border border-accent/20">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 border border-accent/50">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/50 animate-pulse" />
                </div>
                <p className="text-sm font-mono text-accent/70">
                  Ready to create
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
