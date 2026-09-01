import type { Lang } from "@/content/types";

/** English lives at the root, French under /fr — both fully prerendered. */
export function homePath(lang: Lang): string {
  return lang === "en" ? "/" : "/fr/";
}

export function sectionPath(lang: Lang, id: string): string {
  return `${homePath(lang)}#${id}`;
}

export function workPath(lang: Lang, slug: string): string {
  return lang === "en" ? `/work/${slug}/` : `/fr/work/${slug}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "fr" : "en";
}
