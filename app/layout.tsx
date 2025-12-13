import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Anas Chaabane - Full-Stack Engineer",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Full-stack engineer specializing in React, TypeScript, and Node.js. Explore my portfolio, projects, and get in touch for opportunities.",
  keywords: [
    "developer",
    "engineer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Express",
    "Ruby on Rails",
    "Ruby",
    "TypeScript",
    "full-stack",
    "portfolio",
  ],
  authors: [{ name: "Anas Chaabane" }],
  creator: "Anas Chaabane",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chaabaneanas.github.io/",
    title: "Anas Chaabane - Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, TypeScript, and Node.js.",
    siteName: "Anas Chaabane Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0F14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="bottom-right" richColors />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
