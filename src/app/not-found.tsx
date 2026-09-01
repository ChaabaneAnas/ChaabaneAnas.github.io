import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { en } from "@/content";
import "./globals.css";

/**
 * Global 404. With multiple root layouts this page owns its own document,
 * so it renders html/body itself. Exported as out/404.html by the static build.
 */
export default function NotFound() {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <main className="relative grid min-h-[100svh] place-items-center overflow-hidden px-6 text-center">
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-field mask-fade-y opacity-60" />
          <div className="relative">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-accent">
              404
            </p>
            <h1 className="mt-6 text-h1 font-semibold">{en.notFound.title}</h1>
            <p className="mx-auto mt-5 max-w-[46ch] text-lead text-muted">{en.notFound.lead}</p>
            <Link
              href="/"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-accent px-5 py-3 text-sm font-medium text-[#04212a] transition-colors hover:bg-[#67e3f5]"
            >
              {en.notFound.cta}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
