import { cn } from "@/lib/cn";

export function Chip({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.6875rem] tracking-[0.06em] whitespace-nowrap",
        tone === "accent"
          ? "border-accent/35 bg-accent/8 text-accent"
          : "border-line bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
