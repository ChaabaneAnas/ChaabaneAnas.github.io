import Link from "next/link";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/Icons";
import { SITE } from "@/lib/site";
import { homePath, otherLang } from "@/lib/routes";
import type { Content, Lang } from "@/content/types";

interface FooterProps {
  lang: Lang;
  content: Content;
}

export function Footer({ lang, content }: FooterProps) {
  const year = new Date().getFullYear();
  const alt = otherLang(lang);

  const socials = [
    { href: `mailto:${SITE.email}`, label: "Email", Icon: Mail },
    { href: SITE.github, label: "GitHub", Icon: GitHub },
    { href: SITE.linkedin, label: "LinkedIn", Icon: LinkedIn },
  ];

  return (
    <footer className="relative border-t border-line">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-dim">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-accent" />
              </span>
              {content.footer.availability}
            </div>
            <p className="mt-4 max-w-[46ch] text-sm text-muted">{content.footer.built}</p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noreferrer noopener" })}
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/45 hover:text-accent"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line-soft pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. {content.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <Link href={homePath(alt)} hrefLang={alt} className="transition-colors hover:text-accent">
              {content.nav.switchTo}
            </Link>
            <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              {content.nav.backToTop}
              <ArrowUpRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
