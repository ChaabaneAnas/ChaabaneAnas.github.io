import { en } from "./en";
import { fr } from "./fr";
import type { Content, Lang, Project } from "./types";

const dictionaries: Record<Lang, Content> = { en, fr };

/**
 * The work routes are generated from `en`'s slugs but rendered from whichever
 * dictionary the route belongs to, so a slug that exists in one and not the
 * other prerenders a 404 and fails the static export with no useful message.
 * Fail here instead, at module scope, naming both lists.
 */
const enSlugs = en.work.projects.map((project) => project.slug);
const frSlugs = fr.work.projects.map((project) => project.slug);

if (enSlugs.join() !== frSlugs.join()) {
  throw new Error(
    "Project slugs are out of sync between en.ts and fr.ts — both must list " +
      `the same projects in the same order.\n  en: ${enSlugs.join(", ")}\n  fr: ${frSlugs.join(", ")}`,
  );
}

export function getContent(lang: Lang): Content {
  return dictionaries[lang];
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  return dictionaries[lang].work.projects.find((project) => project.slug === slug);
}

/** Slugs are language-neutral, so either dictionary can enumerate them. */
export function getProjectSlugs(): string[] {
  return enSlugs;
}

/** Display number, derived from position so it can never drift from the list. */
export function getProjectIndex(slug: string): string {
  const position = enSlugs.indexOf(slug);
  return String(position + 1).padStart(2, "0");
}

export function getNextProject(lang: Lang, slug: string): Project | undefined {
  const projects = dictionaries[lang].work.projects;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}

export { en, fr };
export type { Content, Lang, Project };
