"use client";

import { useEffect, useRef } from "react";
import { ActionLink } from "@/components/ui/ActionLink";
import { ArrowDown, ArrowRight, Download } from "@/components/ui/Icons";
import { SITE } from "@/lib/site";
import { sectionPath } from "@/lib/routes";
import type { Content, Lang } from "@/content/types";

/**
 * Entrance animation is pure CSS with `animation-fill-mode: both`, so the hero
 * paints on first frame and never depends on hydration to become visible.
 * JavaScript here only adds the pointer spotlight.
 */
export function Hero({ lang, content }: { lang: Lang; content: Content }) {
  const { hero, nav } = content;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = root.getBoundingClientRect();
        root.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        root.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
        root.style.setProperty("--spot-opacity", "1");
      });
    };
    const onLeave = () => root.style.setProperty("--spot-opacity", "0");

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-14 sm:pt-32"
    >
      {/* Background stack: grid, ambient glows, pointer spotlight, noise. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-field mask-fade-y opacity-40" />
        <div className="absolute -top-48 left-1/2 h-[40rem] w-[76rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.15),transparent)] blur-2xl" />
        <div className="absolute bottom-[-20rem] right-[-12rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,0.12),transparent)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[var(--spot-opacity,0)] transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(340px circle at var(--spot-x, 50%) var(--spot-y, 40%), rgba(34,211,238,0.10), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-field opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="shell w-full">
        <div
          className="flex flex-wrap items-center justify-between gap-4 enter-rise"
          style={delay(60)}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-accent">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-accent" />
            </span>
            {hero.status}
          </span>
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-dim">
            {hero.location}
          </span>
        </div>

        <h1 className="mt-8 sm:mt-10">
          <span className="sr-only">
            {hero.firstName} {hero.lastName} — {hero.role}
          </span>
          <span aria-hidden className="block">
            <span className="block overflow-hidden pb-[0.06em]">
              <span
                className="block text-display font-bold uppercase enter-line"
                style={delay(120)}
              >
                {hero.firstName}
              </span>
            </span>
            <span className="flex items-end gap-4 sm:gap-8">
              <span className="block flex-none overflow-hidden pb-[0.06em]">
                <span
                  className="block text-display font-bold uppercase enter-line"
                  style={delay(200)}
                >
                  {hero.lastName}
                </span>
              </span>
              <span
                className="mb-5 hidden h-px flex-1 origin-left bg-gradient-to-r from-accent/80 via-line to-transparent enter-grow sm:block"
                style={delay(560)}
              />
            </span>
          </span>
        </h1>

        <p
          className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-accent enter-rise sm:text-sm"
          style={delay(300)}
        >
          {hero.role}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <p
            className="max-w-[62ch] text-lead text-muted enter-rise lg:col-span-7"
            style={delay(360)}
          >
            {hero.lead}
          </p>

          <div
            className="flex flex-col gap-6 enter-rise lg:col-span-5 lg:items-end"
            style={delay(440)}
          >
            <div className="flex flex-wrap gap-3">
              <ActionLink href={sectionPath(lang, "work")}>
                {hero.primaryCta}
                <ArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
              </ActionLink>
              <ActionLink
                href={SITE.resume}
                variant="ghost"
                download
                aria-label={nav.resumeAria}
              >
                {hero.secondaryCta}
                <Download className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
              </ActionLink>
            </div>

            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-dim lg:justify-end">
              {hero.stackLine.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {item}
                  {index < hero.stackLine.length - 1 ? (
                    <span aria-hidden className="size-1 rounded-full bg-line" />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line enter-rise sm:mt-16 sm:grid-cols-4"
          style={delay(540)}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-5 py-6">
              <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-dim">
                {stat.label}
              </dt>
              <dd className="mt-2 text-h3 font-semibold figure-accent">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href={sectionPath(lang, "work")}
        className="shell mt-12 hidden items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-dim transition-colors enter-rise hover:text-accent lg:flex"
        style={delay(900)}
      >
        <ArrowDown className="animate-bounce text-sm" />
        {hero.scrollHint}
      </a>
    </section>
  );
}
