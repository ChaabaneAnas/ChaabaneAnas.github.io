import { en } from "./en";
import { fr } from "./fr";
import type { Content, Lang, Project } from "./types";

const dictionaries: Record<Lang, Content> = { en, fr };

export function getContent(lang: Lang): Content {
  return dictionaries[lang];
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  return dictionaries[lang].work.projects.find((project) => project.slug === slug);
}

/** Slugs are language-neutral, so either dictionary can enumerate them. */
export function getProjectSlugs(): string[] {
  return en.work.projects.map((project) => project.slug);
}

export function getNextProject(lang: Lang, slug: string): Project | undefined {
  const projects = dictionaries[lang].work.projects;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}

export { en, fr };
export type { Content, Lang, Project };
