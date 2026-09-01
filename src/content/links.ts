/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PROJECT LINKS — the one place to add a live site or a repository.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Paste a URL here and it appears in two places automatically:
 *   • a "Live site ↗" / "Source code ↗" chip on the project's card in
 *     Selected work, on the home page
 *   • a matching button in the header of that project's case study
 *
 * Leave a field out (or the whole entry empty) and nothing renders — no
 * placeholder, no dead link.
 *
 * URLs are language-neutral, like slugs, so they live here rather than in
 * en.ts / fr.ts. Edit once; both / and /fr/ pick it up.
 *
 * Keys must match the project slugs in src/content/en.ts.
 */
export const PROJECT_LINKS: Record<string, { live?: string; repo?: string }> = {
  truechart: {
    live: "https://truechart.com",
  },

  "dieture-platform": {
    // Internal system — kitchen, packer, driver apps and the backoffice are
    // all behind auth. Intentionally no public link.
  },

  "dieture-website": {
    live: "https://dieture.com",
  },

  mnadhem: {
    live: "https://mnadhem.up.railway.app/",
    repo: "https://github.com/ChaabaneAnas/mnadhem-app",
  },

  palletflow: {
    // live: "https://…",   ← PalletFlow admin / partner app
    // repo: "https://github.com/…",
  },
};

export function getProjectLinks(slug: string): { live?: string; repo?: string } {
  return PROJECT_LINKS[slug] ?? {};
}
