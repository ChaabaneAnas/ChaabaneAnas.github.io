import type { Metadata } from "next";
import { getContent } from "@/content";
import { SITE } from "@/lib/site";
import type { Lang } from "@/content/types";

const LOCALES: Record<Lang, string> = { en: "en_US", fr: "fr_FR" };

/** Base metadata shared by every page in a language tree. */
export function baseMetadata(lang: Lang): Metadata {
  const content = getContent(lang);
  const path = lang === "en" ? "/" : "/fr/";
  const ogImage = {
    url: lang === "en" ? "/og.png" : "/og-fr.png",
    width: 1200,
    height: 630,
    alt: content.meta.ogAlt,
  };

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: content.meta.title,
      template: content.meta.titleTemplate,
    },
    description: content.meta.description,
    keywords: content.meta.keywords,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    applicationName: SITE.name,
    alternates: {
      canonical: path,
      languages: { en: "/", fr: "/fr/", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      siteName: SITE.name,
      title: content.meta.title,
      description: content.meta.description,
      url: path,
      locale: LOCALES[lang],
      alternateLocale: Object.values(LOCALES).filter((l) => l !== LOCALES[lang]),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    category: "technology",
  };
}
