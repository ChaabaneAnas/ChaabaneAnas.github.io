import { getContent } from "@/content";
import { SITE } from "@/lib/site";
import { homePath } from "@/lib/routes";
import type { Lang } from "@/content/types";

/**
 * Person + WebSite structured data. Rendered once per page from the root
 * layouts so both language trees are described.
 */
export function JsonLd({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const pageUrl = `${SITE.url}${homePath(lang)}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        jobTitle: content.hero.role,
        description: content.meta.description,
        email: `mailto:${SITE.email}`,
        telephone: SITE.phone,
        url: pageUrl,
        image: `${SITE.url}/og.png`,
        sameAs: [SITE.linkedin, SITE.github],
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.locality,
          addressCountry: SITE.country,
        },
        knowsLanguage: content.about.languages.map((language) => language.name),
        knowsAbout: content.meta.keywords,
        worksFor: {
          "@type": "Organization",
          name: content.experience.items[0]?.company,
        },
        alumniOf: content.experience.education.map((item) => ({
          "@type": "EducationalOrganization",
          name: item.school,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: pageUrl,
        name: content.meta.title,
        description: content.meta.description,
        inLanguage: content.htmlLang,
        publisher: { "@id": `${SITE.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Content is authored in this repo, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
