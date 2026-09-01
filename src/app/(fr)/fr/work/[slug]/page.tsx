import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { getProject, getProjectSlugs } from "@/content";
import { workPath } from "@/lib/routes";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject("fr", slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: workPath("fr", slug),
      languages: { en: workPath("en", slug), fr: workPath("fr", slug) },
    },
    openGraph: {
      type: "article",
      title: `${project.name} · ${project.tagline}`,
      description: project.summary,
      url: workPath("fr", slug),
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <CaseStudy lang="fr" slug={slug} />;
}
