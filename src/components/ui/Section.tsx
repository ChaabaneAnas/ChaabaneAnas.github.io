import { MonoLabel } from "./MonoLabel";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  index?: string;
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  /** Hairline rule above the section header. */
  bordered?: boolean;
}

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  className,
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn("scroll-mt-24 py-20 sm:py-28 lg:py-36", className)}
    >
      <div className="shell">
        {bordered ? <div aria-hidden className="mb-12 h-px w-full bg-line-soft" /> : null}
        <Reveal>
          <header className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <MonoLabel index={index}>{label}</MonoLabel>
              <h2
                id={id ? `${id}-title` : undefined}
                className="mt-5 max-w-[18ch] text-h2 font-semibold"
              >
                {title}
              </h2>
            </div>
            {intro ? (
              <p className="max-w-[58ch] self-end text-lead text-muted lg:col-span-6 lg:col-start-7">
                {intro}
              </p>
            ) : null}
          </header>
        </Reveal>
        <div className="mt-14 sm:mt-16 lg:mt-20">{children}</div>
      </div>
    </section>
  );
}
