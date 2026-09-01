"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, GitHub } from "@/components/ui/Icons";
import { getProjectLinks } from "@/content/links";
import { workPath } from "@/lib/routes";
import type { Content, Lang } from "@/content/types";

/**
 * Per-project colour signature — stands in for a screenshot, and never 404s.
 *
 * Held as colour data rather than Tailwind class strings. A class name picked
 * out of an array at runtime is only styled if the scanner happened to find
 * that exact literal in the source, and when it does not the failure is silent:
 * no error, no warning, just a card with no background.
 */
const SIGNATURES = [
  ["#0e7490", "#22d3ee", "#a78bfa"],
  ["#7c3aed", "#a78bfa", "#22d3ee"],
  ["#0891b2", "#38bdf8", "#4ade80"],
  ["#c2410c", "#f59e0b", "#22d3ee"],
  ["#be123c", "#f43f5e", "#a78bfa"],
] as const;

function signature(index: number, direction: "to bottom right" | "to right") {
  const stops = SIGNATURES[index % SIGNATURES.length];
  return `linear-gradient(${direction}, ${stops.join(", ")})`;
}

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

      /** Distance between the pointer and the nearest corner of the card. */
      const GAP = 16;
      /** Keep-out margin at the viewport edge. */
      const EDGE = 12;

      // Measured here rather than in the handler: reading offsetWidth inside the
      // rAF would force a synchronous layout on every pointer move, which is the
      // exact cost this rAF exists to avoid.
      let cardW = 0;
      let cardH = 0;
      const measure = () => {
          const card =
              previewRef.current?.querySelector<HTMLElement>('[data-card]');
          if (!card) return;
          cardW = card.offsetWidth;
          cardH = card.offsetHeight;
      };
      measure();
      window.addEventListener('resize', measure);

      let frame = 0;
      const onMove = (event: PointerEvent) => {
          if (frame) return;
          frame = requestAnimationFrame(() => {
              frame = 0;
              const preview = previewRef.current;
              if (!preview) return;
              // The wrapper is `hidden` below lg, so a narrow window measures zero.
              if (!cardW) measure();

              const rect = list.getBoundingClientRect();

              // Sit above and to the right of the pointer, flipping to the other side
              // rather than leaving the viewport — the page hides overflow-x, so a
              // card pushed past the right edge would silently vanish.
              const flipX =
                  event.clientX + GAP + cardW > window.innerWidth - EDGE;
              const flipY = event.clientY - GAP - cardH < EDGE;
              const dx = flipX ? -(cardW + GAP) : GAP;
              const dy = flipY ? GAP : -(cardH + GAP);

              preview.style.transform = `translate3d(${event.clientX - rect.left + dx}px, ${
                  event.clientY - rect.top + dy
              }px, 0)`;
          });
      };

      list.addEventListener('pointermove', onMove);
      return () => {
          if (frame) cancelAnimationFrame(frame);
          window.removeEventListener('resize', measure);
          list.removeEventListener('pointermove', onMove);
      };
  }, [enabled]);

  const shown = enabled && hovered !== null ? hovered : null;

  return (
      <ul
          ref={listRef}
          onMouseLeave={() => setHovered(null)}
          className="relative border-t border-line"
      >
          {work.projects.map((project, index) => {
              const links = getProjectLinks(project.slug);
              return (
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
                                  {String(index + 1).padStart(2, '0')}
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
                                              href={workPath(
                                                  lang,
                                                  project.slug
                                              )}
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
                                          <li
                                              key={tech}
                                              className="rounded border border-line-soft px-2 py-0.5"
                                          >
                                              {tech}
                                          </li>
                                      ))}
                                  </ul>

                                  {links.live || links.repo ? (
                                      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                                          {links.live ? (
                                              <ExternalChip
                                                  href={links.live}
                                                  label={caseStudy.liveSite}
                                              />
                                          ) : null}
                                          {links.repo ? (
                                              <ExternalChip
                                                  href={links.repo}
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
                                  style={{
                                      backgroundImage: signature(
                                          index,
                                          'to right'
                                      )
                                  }}
                                  className="h-1 w-full rounded-full opacity-60 lg:hidden"
                              />
                          </div>
                      </Reveal>
                  </li>
              );
          })}

          {enabled ? (
              <div
                  ref={previewRef}
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 z-20 hidden will-change-transform lg:block"
              >
                  {/* Offset lives on the wrapper's transform (set in the rAF above), so
              this layer only animates in and out. Origin at the pointer-facing
              corner makes it read as growing out of the cursor. */}
                  <div
                      className={`origin-bottom-left transition-[opacity,scale,rotate] duration-300 ease-expo ${
                          shown !== null
                              ? 'scale-100 -rotate-2 opacity-100'
                              : 'scale-90 rotate-[-4deg] opacity-0'
                      }`}
                  >
                      <div
                          data-card
                          style={{
                              backgroundImage: signature(
                                  shown ?? 0,
                                  'to bottom right'
                              )
                          }}
                          className="relative h-40 w-64 overflow-hidden rounded-xl border border-white/10 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]"
                      >
                          <div className="absolute inset-0 grid-field opacity-20" />
                          <div className="absolute inset-0 noise-field opacity-[0.12] mix-blend-overlay" />
                          <div className="relative flex h-full flex-col justify-between text-[#050506]">
                              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] opacity-80">
                                  {String((shown ?? 0) + 1).padStart(2, '0')} /{' '}
                                  {work.projects[shown ?? 0].period}
                              </span>
                              {/* The card is a fixed size so it does not resize under the
                    cursor; clamping keeps a long name or tagline inside it. */}
                              <div>
                                  <p className="line-clamp-2 text-lg font-semibold leading-tight">
                                      {work.projects[shown ?? 0].name}
                                  </p>
                                  <p className="mt-1 line-clamp-2 text-xs font-medium opacity-80">
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
