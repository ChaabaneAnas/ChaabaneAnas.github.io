import { cn } from "@/lib/cn";

interface MonoLabelProps {
  children: React.ReactNode;
  index?: string;
  className?: string;
}

export function MonoLabel({ children, index, className }: MonoLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-dim",
        className,
      )}
    >
      {index ? (
        <>
          <span className="text-accent">{index}</span>
          <span aria-hidden className="h-px w-6 bg-line" />
        </>
      ) : null}
      {children}
    </span>
  );
}
