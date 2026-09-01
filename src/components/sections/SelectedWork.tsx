"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, GitHub } from "@/components/ui/Icons";
import { workPath } from "@/lib/routes";
import type { Content, Lang } from "@/content/types";

/** Per-project colour signature — stands in for a screenshot, and never 404s. */
const SIGNATURES = [
  "from-[#0e7490] via-[#22d3ee] to-[#a78bfa]",
  "from-[#7c3aed] via-[#a78bfa] to-[#22d3ee]",
  "from-[#0891b2] via-[#38bdf8] to-[#4ade80]",
  "from-[#c2410c] via-[#f59e0b] to-[#22d3ee]",
  "from-[#be123c] via-[#f43f5e] to-[#a78bfa]",
];

export function SelectedWork({ lang, content }: { lang: Lang; content: Content }) {
  const { work, caseStudy } = content;
  const listRef = useRef<HTMLUListElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  // The floating preview is a fine-pointer, full-motion affordance only.
  useEffect(() => {
    setEnabled(
      window.matchMedia("(pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  // Position is written straight to the element inside a rAF — tracking the
  // cursor through React state would re-render the whole list on every move.
  useEffect(() => {
    if (!enabled) return;
    const list = listRef.current;
    if (!list) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const preview = previewRef.current;
        const rect = list.getBoundingClientRect();
        if (!preview) return;
        preview.style.transform = `translate3d(${event.clientX - rect.left}px, ${
          event.clientY - rect.top
        }px, 0)`;
      });
    };

    list.addEventListener("pointermove", onMove);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      list.removeEventListener("pointermove", onMove);
    };
  }, [enabled]);

  const shown = enabled && hovered !== null ? hovered : null;

  return (
    <ul
      ref={listRef}
      onMouseLeave={() => setHovered(null)}
      className="relative border-t border-line"
    >
      {work.projects.map((project, index) => (
        <li key={project.slug}>
          <Reveal delay={index * 0.05}>
            {/*
              The row is a plain container, not a link: an <a> cannot nest
              inside another <a>. The title carries the real link and stretches
              an overlay across the row, and the external links sit above that
              overlay so they stay independently clickable.
            */}
            <div
              onMouseEnter={() => setHovered(index)}
              onFocus={() => setHovered(index)}
              className="group relative flex flex-col gap-5 border-b border-line py-8 transition-colors duration-500 hover:bg-surface/40 sm:py-10 lg:flex-row lg:items-center lg:gap-10 lg:px-4"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-linear-to-r from-accent to-transparent transition-transform duration-700 ease-expo group-hover:scale-x-100 group-focus-within:scale-x-100"
              />

              <span className="font-mono text-xs tracking-[0.2em] text-muted transition-colors group-hover:text-accent lg:w-16">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-h3 font-semibold">
                    {/*
                      Two details this overlay depends on:
                      - z-1 lifts it above the row's later siblings, which would
                        otherwise paint over it and swallow the click.
                      - the hover nudge lives on the inner span, never on an
                        ancestor of the link. A transform on an ancestor becomes
                        the containing block for `inset-0`, which would silently
                        shrink the overlay to the title box on hover — clickable
                        until you point at it.
                    */}
                    <Link
                      href={workPath(lang, project.slug)}
                      className="after:absolute after:inset-0 after:z-1 after:content-['']"
                    >
                      <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
                        {project.name}
                      </span>
                    </Link>
                  </h3>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-dim">
                    {project.category}
                  </span>
                </div>
                <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-dim">
                  {project.stack.slice(0, 5).map((tech) => (
                    <li key={tech} className="rounded border border-line-soft px-2 py-0.5">
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.links?.live || project.links?.repo ? (
                  <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                    {project.links.live ? (
                      <ExternalChip href={project.links.live} label={caseStudy.liveSite} />
                    ) : null}
                    {project.links.repo ? (
                      <ExternalChip
                        href={project.links.repo}
                        label={caseStudy.sourceCode}
                        icon="repo"
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between gap-6 lg:w-52 lg:flex-col lg:items-end lg:justify-center">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-dim">
                  {project.period}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-accent">
                  {work.viewCase}
                  <ArrowUpRight className="text-base transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Signature bar, shown where the cursor preview cannot be. */}
              <span
                aria-hidden
                className={`h-1 w-full rounded-full bg-linear-to-r opacity-60 lg:hidden ${
                  SIGNATURES[index % SIGNATURES.length]
                }`}
              />
            </div>
          </Reveal>
        </li>
      ))}

      {enabled ? (
        <div
          ref={previewRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-20 hidden will-change-transform lg:block"
        >
          <div
            className={`-translate-x-1/2 -translate-y-1/2 transition-[opacity,scale,rotate] duration-300 ease-expo ${
              shown !== null ? "scale-100 -rotate-2 opacity-100" : "scale-90 rotate-[-4deg] opacity-0"
            }`}
          >
            <div
              className={`relative h-44 w-72 overflow-hidden rounded-xl border border-white/10 bg-linear-to-br p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] ${
                SIGNATURES[(shown ?? 0) % SIGNATURES.length]
              }`}
            >
              <div className="absolute inset-0 grid-field opacity-20" />
              <div className="absolute inset-0 noise-field opacity-[0.12] mix-blend-overlay" />
              <div className="relative flex h-full flex-col justify-between text-[#050506]">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] opacity-80">
                  {String((shown ?? 0) + 1).padStart(2, "0")} / {work.projects[shown ?? 0].period}
                </span>
                <div>
                  <p className="text-xl font-semibold leading-tight">
                    {work.projects[shown ?? 0].name}
                  </p>
                  <p className="mt-1 text-xs font-medium opacity-80">
                    {work.projects[shown ?? 0].tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </ul>
  );
}

function ExternalChip({
  href,
  label,
  icon = "live",
}: {
  href: string;
  label: string;
  icon?: "live" | "repo";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent/45 hover:bg-surface-2 hover:text-accent"
    >
      {icon === "repo" ? <GitHub className="text-sm" /> : null}
      {label}
      <ArrowUpRight className="text-sm" />
    </a>
  );
}
