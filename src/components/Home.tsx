import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { StackGrid } from "@/components/sections/StackGrid";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/content";
import type { Lang } from "@/content/types";

export function Home({ lang }: { lang: Lang }) {
  const content = getContent(lang);

  return (
    <>
      <Hero lang={lang} content={content} />

      <Section
        id="work"
        index="01"
        label={content.work.label}
        title={content.work.title}
        intro={content.work.intro}
      >
        <SelectedWork lang={lang} content={content} />
      </Section>

      <Section
        id="experience"
        index="02"
        label={content.experience.label}
        title={content.experience.title}
        intro={content.experience.intro}
      >
        <Experience content={content} />
      </Section>

      <Section
        id="stack"
        index="03"
        label={content.stack.label}
        title={content.stack.title}
        intro={content.stack.intro}
      >
        <StackGrid content={content} />
      </Section>

      <Section
        id="about"
        index="04"
        label={content.about.label}
        title={content.about.title}
      >
        <About content={content} />
      </Section>

      <Section
        id="contact"
        index="05"
        label={content.contact.label}
        title={content.contact.title}
      >
        <Contact content={content} />
      </Section>
    </>
  );
}
