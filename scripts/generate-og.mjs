/**
 * Renders the social preview images to public/og.png and public/og-fr.png.
 *
 * These are generated once and committed, rather than produced by the
 * metadata file convention: a static export emits convention images at an
 * extensionless, hash-suffixed path, which GitHub Pages serves without an
 * image content type — and social scrapers then ignore it.
 *
 *   npm run og
 */
import { readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const SIZE = { width: 1200, height: 630 };

const FONT_DIR = "node_modules/geist/dist/fonts/geist-sans";

const fonts = [
  { name: "Geist", weight: 400, style: "normal", data: await readFile(`${FONT_DIR}/Geist-Regular.ttf`) },
  { name: "Geist", weight: 600, style: "normal", data: await readFile(`${FONT_DIR}/Geist-SemiBold.ttf`) },
  { name: "Geist", weight: 700, style: "normal", data: await readFile(`${FONT_DIR}/Geist-Bold.ttf`) },
];

const VARIANTS = [
  {
    file: "public/og.png",
    role: "Full Stack Developer",
    footer: "4 years in production",
  },
  {
    file: "public/og-fr.png",
    role: "Développeur Full Stack",
    footer: "4 ans en production",
  },
];

const text = (style, children) => h("div", { style: { display: "flex", ...style } }, children);

function template({ role, footer }) {
  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0b",
        backgroundImage:
          "radial-gradient(900px circle at 12% -10%, rgba(34,211,238,0.20), transparent 55%), radial-gradient(700px circle at 105% 110%, rgba(167,139,250,0.18), transparent 55%)",
        padding: "72px 80px",
        color: "#ededef",
        fontFamily: "Geist",
      },
    },
    [
      h("div", { key: "top", style: { display: "flex", alignItems: "center", gap: 18 } }, [
        h(
          "div",
          {
            key: "mark",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 12,
              border: "1px solid #2b2c33",
              color: "#22d3ee",
              fontSize: 22,
              fontWeight: 700,
            },
          },
          "AC",
        ),
        text({ fontSize: 20, letterSpacing: 5, color: "#6a6a74" }, "CHAABANEANAS.GITHUB.IO"),
      ]),

      h("div", { key: "mid", style: { display: "flex", flexDirection: "column" } }, [
        text(
          {
            key: "n1",
            fontSize: 132,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -5,
            textTransform: "uppercase",
          },
          "Anas",
        ),
        text(
          {
            key: "n2",
            fontSize: 132,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -5,
            textTransform: "uppercase",
          },
          "Chaabane",
        ),
        text({ key: "role", marginTop: 30, fontSize: 32, color: "#22d3ee", letterSpacing: 1 }, role),
      ]),

      h(
        "div",
        {
          key: "bottom",
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #232429",
            paddingTop: 30,
            fontSize: 22,
            color: "#9a9aa4",
          },
        },
        [
          text({ key: "stack" }, "TypeScript · React · Next.js · NestJS · D3.js"),
          text({ key: "years" }, footer),
        ],
      ),
    ],
  );
}

for (const variant of VARIANTS) {
  const response = new ImageResponse(template(variant), { ...SIZE, fonts });
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(variant.file, buffer);
  console.log(`wrote ${variant.file} (${(buffer.length / 1024).toFixed(1)} kB)`);
}
