import { Header } from "./Header";
import { Footer } from "./Footer";
import { SkipLink } from "./SkipLink";
import { ScrollProgress } from "./ScrollProgress";
import { JsonLd } from "@/components/JsonLd";
import { getContent } from "@/content";
import type { Lang } from "@/content/types";

/** Shared page chrome for both root layouts. */
export function Chrome({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const content = getContent(lang);

  return (
    <>
      {/* Marks the document as JS-capable before first paint, which is what
          gates every hidden-then-revealed state in the stylesheet. */}
      <script
        dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
      />
      <JsonLd lang={lang} />
      <SkipLink label={content.nav.skipToContent} />
      <ScrollProgress />
      <Header lang={lang} nav={content.nav} />
      <main id="main">{children}</main>
      <Footer lang={lang} content={content} />
    </>
  );
}
