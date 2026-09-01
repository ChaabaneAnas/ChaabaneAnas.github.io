import { Reveal } from "@/components/ui/Reveal";
import { MonoLabel } from "@/components/ui/MonoLabel";
import type { Content } from "@/content/types";

export function About({ content }: { content: Content }) {
  const { about } = content;

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <div className="grid gap-6">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
              <p className="max-w-[64ch] text-lead text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid content-start gap-10 lg:col-span-5">
        <Reveal delay={0.1}>
          <div className="rounded-xl border border-line bg-surface/60 p-7">
            <MonoLabel>{about.factsLabel}</MonoLabel>
            <dl className="mt-6 grid gap-4">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-b border-line-soft pb-4 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-dim">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-text">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div>
            <MonoLabel>{about.languagesLabel}</MonoLabel>
            <ul className="mt-6 grid gap-5">
              {about.languages.map((language) => (
                <li key={language.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-text">{language.name}</span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-dim">
                      {language.level}
                    </span>
                  </div>
                  <div
                    className="mt-2.5 h-px w-full bg-line"
                    role="img"
                    aria-label={`${language.name}: ${language.level}`}
                  >
                    <div
                      className="h-px bg-gradient-to-r from-accent to-violet"
                      style={{ width: `${language.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
