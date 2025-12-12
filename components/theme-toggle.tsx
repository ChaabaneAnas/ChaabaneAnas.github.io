"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, SunMoon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by ensuring theme is known on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="border border-accent/30 text-accent/70 bg-card/50 dark:text-foreground dark:border-foreground/30 dark:hover:text-accent  dark:hover:border-accent/30 "
        aria-label="Toggle theme"
      >
        <SunMoon />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className=" border border-accent/30 text-accent/70 bg-card/50 dark:text-foreground dark:border-foreground/30 dark:hover:text-accent  dark:hover:border-accent/30 cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
