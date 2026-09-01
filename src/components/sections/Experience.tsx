import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { MonoLabel } from "@/components/ui/MonoLabel";
import type { Content } from "@/content/types";

export function Experience({ content }: { content: Content }) {
  const { experience } = content;

  return (
    <div className="grid gap-16 lg:gap-20">
      <ol className="relative">
        {/* Timeline rail — decorative, hidden from assistive tech. */}
        <span
          aria-hidden
          className="absolute left-[0.3125rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/50 via-line to-transparent sm:block"
        />

        {experience.items.map((item, index) => (
          <li key={item.id} className="relative sm:pl-12">
            <Reveal delay={index * 0.06}>
              <span
                aria-hidden
                className={`absolute left-0 top-2.5 hidden size-2.5 rounded-full ring-4 ring-bg sm:block ${
                  item.current ? "bg-accent" : "bg-line"
                }`}
              />

              <article className="border-b border-line-soft pb-12 pt-1 sm:pb-14">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h3 className="text-h3 font-semibold">{item.role}</h3>
                  <span className="text-h3 font-semibold text-dim">·</span>
                  <span className="text-h3 font-semibold text-accent">{item.company}</span>
                  {item.current ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-accent">
                      <span className="size-1.5 animate-pulse-dot rounded-full bg-accent" />
                      {experience.present}
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-dim">
                  {item.period} · {item.location}
                </p>

                <p className="mt-5 max-w-[64ch] text-muted">{item.summary}</p>

                <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="text-h3 font-semibold figure-accent">{metric.value}</dd>
                      <dt className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-dim">
                        {metric.label}
                      </dt>
                    </div>
                  ))}
                </dl>

                <ul className="mt-7 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3.5 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-accent/70"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li key={tech}>
                      <Chip>{tech}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <div>
        <Reveal>
          <MonoLabel>{experience.educationLabel}</MonoLabel>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          {experience.education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06} className="bg-bg">
              <article className="h-full p-7">
                <h3 className="text-h3 font-semibold">{item.program}</h3>
                <p className="mt-2 text-sm text-accent">{item.school}</p>
                <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-dim">
                  {item.period} · {item.location}
                </p>
                <ul className="mt-5 grid gap-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-line" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
