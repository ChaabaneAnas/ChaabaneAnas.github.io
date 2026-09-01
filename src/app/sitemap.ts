import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/content";
import { SITE } from "@/lib/site";
import { workPath } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${SITE.url}${path}`;

  const home: MetadataRoute.Sitemap = [
    {
      url: url("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: url("/"), fr: url("/fr/") } },
    },
    {
      url: url("/fr/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: url("/"), fr: url("/fr/") } },
    },
  ];

  const work: MetadataRoute.Sitemap = getProjectSlugs().flatMap((slug) => [
    {
      url: url(workPath("en", slug)),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      alternates: {
        languages: { en: url(workPath("en", slug)), fr: url(workPath("fr", slug)) },
      },
    },
    {
      url: url(workPath("fr", slug)),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      alternates: {
        languages: { en: url(workPath("en", slug)), fr: url(workPath("fr", slug)) },
      },
    },
  ]);

  return [...home, ...work];
}
