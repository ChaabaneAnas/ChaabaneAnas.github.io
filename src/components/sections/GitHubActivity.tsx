"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ArrowUpRight, GitHub, Star } from "@/components/ui/Icons";
import { SITE } from "@/lib/site";
import type { Content, Lang } from "@/content/types";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
}

/** Repositories to keep out of the feed — add names here to curate it. */
const HIDDEN_REPOS = new Set<string>([]);

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Ruby: "#701516",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Python: "#3572A5",
  Shell: "#89e051",
  Vue: "#41b883",
  Dart: "#00B4AB",
};

type State =
  | { status: "loading" }
  | { status: "ready"; repos: Repo[] }
  | { status: "hidden" };

export function GitHubActivity({ lang, content }: { lang: Lang; content: Content }) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${SITE.githubUser}/repos?sort=pushed&per_page=30`,
          { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } },
        );
        if (!response.ok) throw new Error(String(response.status));

        const data: Repo[] = await response.json();
        const repos = data
          .filter((repo) => !repo.fork && !HIDDEN_REPOS.has(repo.name))
          .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
          .slice(0, 6);

        // Nothing worth showing is the same as an error: stay out of the way.
        setState(repos.length ? { status: "ready", repos } : { status: "hidden" });
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        setState({ status: "hidden" });
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (state.status === "hidden") return null;

  const formatter = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section
      id="github"
      aria-labelledby="github-title"
      className="scroll-mt-24 py-20 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <div aria-hidden className="mb-12 h-px w-full bg-line-soft" />
        <Reveal>
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <MonoLabel index="05">{content.github.label}</MonoLabel>
              <h2 id="github-title" className="mt-5 text-h2 font-semibold">
                {content.github.title}
              </h2>
              <p className="mt-4 max-w-[52ch] text-muted">{content.github.intro}</p>
            </div>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent/45 hover:text-accent"
            >
              <GitHub className="text-base" />
              {content.github.viewProfile}
              <ArrowUpRight className="text-base" />
            </a>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {state.status === "loading"
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-pulse bg-bg p-6">
                  <div className="h-3.5 w-1/2 rounded bg-surface-2" />
                  <div className="mt-4 h-3 w-full rounded bg-surface" />
                  <div className="mt-2 h-3 w-4/5 rounded bg-surface" />
                  <div className="mt-6 h-2.5 w-1/3 rounded bg-surface" />
                </div>
              ))
            : state.repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex flex-col justify-between gap-6 bg-bg p-6 transition-colors hover:bg-surface"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-mono text-sm text-text transition-colors group-hover:text-accent">
                        {repo.name}
                      </h3>
                      <ArrowUpRight className="mt-0.5 shrink-0 text-base text-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                    {repo.description ? (
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                        {repo.description}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-dim">
                    {repo.language ? (
                      <span className="inline-flex items-center gap-2">
                        <span
                          aria-hidden
                          className="size-2 rounded-full"
                          style={{
                            backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#6a6a74",
                          }}
                        />
                        {repo.language}
                      </span>
                    ) : null}
                    {repo.stargazers_count > 0 ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Star className="text-xs" />
                        {repo.stargazers_count}
                      </span>
                    ) : null}
                    <span>
                      {content.github.updated} {formatter.format(new Date(repo.pushed_at))}
                    </span>
                  </div>
                </a>
              ))}
        </div>
      </div>
    </section>
  );
}
