"use client";
import { Button } from "@/components/ui/button";
import CountUp from "./Countup";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20  overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-linear-to-b from-accent/10 via-background to-background pointer-events-none" />

      {/* Subtle animated code terminal graphic */}
      <div className=" hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 opacity-50 dark:opacity-60 pointer-events-none">
        <div className="font-mono text-xs text-accent space-y-1 ">
          <div>$ npm run build</div>
          <div className="text-accent/60">&gt; Building project...</div>
          <div className="text-accent/40">Compiling components...</div>
          <div className="animate-pulse text-accent">&gt; _</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-in fade-in slide-in-from-bottom-20 ease-in duration-500 space-y-8">
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
                asChild
              >
                <Link href="#work">
                  <span>See latest project</span>
                  <ArrowRight />{" "}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="" asChild>
                <Link
                  download
                  href="/Anas Chaabane.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download résumé</span>
                  <ArrowDown />
                </Link>
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
            <div className="absolute inset-0 bg-linear-to-br from-accent/40 via-accent/20 to-transparent  dark:from-accent/20 dark:via-accent/5 rounded-2xl blur-3xl" />
            <div className="relative glass rounded-2xl p-8 h-full flex items-center justify-center border border-accent/20">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 border border-accent/50">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent to-accent/50 animate-pulse" />
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
