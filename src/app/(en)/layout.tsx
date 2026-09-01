import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Chrome } from "@/components/layout/Chrome";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata: Metadata = baseMetadata("en");

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Chrome lang="en">{children}</Chrome>
      </body>
    </html>
  );
}
