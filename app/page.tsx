"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import MicroProjects from "@/components/micro-projects";
import Contact from "@/components/contact";
import ScrollProgress from "@/components/scroll-progress";
import SchemaOrg from "@/components/schema-org";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const theme = localStorage.getItem("theme") || "dark";
    setIsDark(theme === "dark");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <SchemaOrg />
      <div className="relative w-full overflow-x-hidden">
        <Navigation />

        <main className="w-full">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <MicroProjects />
          <Contact />
        </main>
      </div>
    </>
  );
}
