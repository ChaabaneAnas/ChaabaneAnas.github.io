import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/ui/Reveal';
import { Chip } from '@/components/ui/Chip';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { ActionLink } from '@/components/ui/ActionLink';
import { ArrowRight, ArrowUpRight, Check } from '@/components/ui/Icons';
import { getContent, getNextProject, getProject, getProjectIndex } from '@/content';
import { sectionPath, workPath } from '@/lib/routes';
import type { Lang } from '@/content/types';

export function CaseStudy({ lang, slug }: { lang: Lang; slug: string }) {
    const content = getContent(lang);
    const project = getProject(lang, slug);
    if (!project) notFound();

    const next = getNextProject(lang, slug);
    const labels = content.caseStudy;

    return (
        <article>
            {/* Header */}
            <header className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10"
                >
                    <div className="absolute inset-0 grid-field mask-fade-y opacity-60" />
                    <div className="absolute -top-56 left-1/3 h-128 w-208 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.12),transparent)] blur-2xl" />
                </div>

                <div className="shell">
                    <Link
                        href={sectionPath(lang, 'work')}
                        className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-dim transition-colors hover:text-accent"
                    >
                        <ArrowRight className="rotate-180 text-sm" />
                        {labels.back}
                    </Link>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <MonoLabel index={getProjectIndex(slug)}>
                            {project.category}
                        </MonoLabel>
                    </div>

                    <h1 className="mt-5 max-w-[18ch] text-h1 font-semibold">
                        {project.name}
                    </h1>
                    <p className="mt-6 max-w-[52ch] text-lead text-muted">
                        {project.tagline}
                    </p>

                    <div
                        aria-hidden
                        className="relative mt-12 h-32 w-full overflow-hidden rounded-xl border border-line bg-linear-to-r from-accent/18 via-violet/12 to-transparent sm:h-40"
                    >
                        <div className="absolute inset-0 grid-field opacity-30" />
                        <div className="absolute inset-0 noise-field opacity-[0.05] mix-blend-overlay" />
                        {/* One line, clipped by the band — a long name must not
                            wrap, or only its last word stays visible. */}
                        <span className="absolute -bottom-3 left-6 select-none whitespace-nowrap text-[clamp(3rem,9vw,6rem)] font-bold uppercase tracking-[-0.04em] text-white/6 sm:left-8">
                            {project.name}
                        </span>
                    </div>

                    <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                        <div className="bg-bg px-6 py-5">
                            <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-dim">
                                {labels.role}
                            </dt>
                            <dd className="mt-2 text-sm text-text">
                                {project.role}
                            </dd>
                        </div>
                        <div className="bg-bg px-6 py-5">
                            <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-dim">
                                {labels.period}
                            </dt>
                            <dd className="mt-2 text-sm text-text">
                                {project.period}
                            </dd>
                        </div>
                        <div className="bg-bg px-6 py-5">
                            <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-dim">
                                {labels.stackLabel}
                            </dt>
                            <dd className="mt-2 text-sm text-text">
                                {project.stack.slice(0, 2).join(' · ')}
                                {project.stack.length > 2
                                    ? ` +${project.stack.length - 2}`
                                    : ''}
                            </dd>
                        </div>
                    </dl>

                    {project.links?.live || project.links?.repo ? (
                        <div className="mt-8 flex flex-wrap gap-3">
                            {project.links.live ? (
                                <ActionLink
                                    href={project.links.live}
                                    external
                                    variant="ghost"
                                >
                                    {labels.liveSite}
                                    <ArrowUpRight className="text-base" />
                                </ActionLink>
                            ) : null}
                            {project.links.repo ? (
                                <ActionLink
                                    href={project.links.repo}
                                    external
                                    variant="ghost"
                                >
                                    {labels.sourceCode}
                                    <ArrowUpRight className="text-base" />
                                </ActionLink>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </header>

            {/* Body */}
            <div className="shell grid gap-16 border-t border-line py-16 lg:grid-cols-12 lg:gap-14 lg:py-24">
                <aside className="lg:col-span-4">
                    <div className="lg:sticky lg:top-28">
                        <Reveal>
                            <MonoLabel>{labels.stackLabel}</MonoLabel>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <li key={tech}>
                                        <Chip>{tech}</Chip>
                                    </li>
                                ))}
                            </ul>

                            {project.study.metrics?.length ? (
                                <dl className="mt-10 grid gap-6">
                                    {project.study.metrics.map((metric) => (
                                        <div key={metric.label}>
                                            <dd className="text-h3 font-semibold figure-accent">
                                                {metric.value}
                                            </dd>
                                            <dt className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-dim">
                                                {metric.label}
                                            </dt>
                                        </div>
                                    ))}
                                </dl>
                            ) : null}
                        </Reveal>
                    </div>
                </aside>

                <div className="lg:col-span-8">
                    <Reveal>
                        <p className="max-w-[64ch] text-lead text-text">
                            {project.study.lead}
                        </p>
                    </Reveal>

                    <div className="mt-14 grid gap-14">
                        {project.study.sections.map((section, index) => (
                            <Reveal key={section.heading} delay={index * 0.04}>
                                <section>
                                    <h2 className="flex items-baseline gap-4 text-h3 font-semibold">
                                        <span className="font-mono text-[0.6875rem] text-accent">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        {section.heading}
                                    </h2>
                                    <div className="mt-5 grid gap-4 border-l border-line pl-6">
                                        {section.body.map((paragraph) => (
                                            <p
                                                key={paragraph.slice(0, 24)}
                                                className="max-w-[66ch] text-muted"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                        {section.list?.length ? (
                                            <ul className="mt-2 grid gap-3">
                                                {section.list.map((entry) => (
                                                    <li
                                                        key={entry}
                                                        className="flex gap-3.5 text-sm text-muted"
                                                    >
                                                        <span
                                                            aria-hidden
                                                            className="mt-2 size-1 shrink-0 rounded-full bg-accent/70"
                                                        />
                                                        {entry}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>
                                </section>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <section className="mt-16 rounded-xl border border-line bg-surface/50 p-7 sm:p-8">
                            <MonoLabel>{labels.outcome}</MonoLabel>
                            <ul className="mt-6 grid gap-4">
                                {project.study.outcome.map((entry) => (
                                    <li
                                        key={entry}
                                        className="flex gap-3.5 text-sm leading-relaxed text-text"
                                    >
                                        <Check className="mt-0.5 shrink-0 text-base text-accent" />
                                        {entry}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </Reveal>
                </div>
            </div>

            {/* Next + CTA */}
            <div className="border-t border-line">
                <div className="shell grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
                    {next ? (
                        <Link
                            href={workPath(lang, next.slug)}
                            className="group block"
                        >
                            <MonoLabel>{labels.next}</MonoLabel>
                            <p className="mt-4 flex items-center gap-4 text-h2 font-semibold transition-colors group-hover:text-accent">
                                {next.name}
                                <ArrowUpRight className="text-2xl transition-transform duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </p>
                            <p className="mt-3 max-w-[46ch] text-sm text-muted">
                                {next.tagline}
                            </p>
                        </Link>
                    ) : null}

                    <div className="lg:justify-self-end lg:text-right">
                        <p className="max-w-[36ch] text-lead text-muted lg:ml-auto">
                            {labels.contactLead}
                        </p>
                        <ActionLink
                            href={sectionPath(lang, 'contact')}
                            className="mt-6"
                        >
                            {labels.contactCta}
                            <ArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                        </ActionLink>
                    </div>
                </div>
            </div>
        </article>
    );
}
