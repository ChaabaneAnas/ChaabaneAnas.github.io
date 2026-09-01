"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "./Icons";
import { cn } from "@/lib/cn";

interface CopyButtonProps {
  value: string;
  label: string;
  copiedLabel: string;
  className?: string;
}

export function CopyButton({ value, label, copiedLabel, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard blocked — the address is selectable text right beside this. */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-dim transition-colors hover:border-accent/40 hover:text-accent",
        className,
      )}
    >
      {copied ? <Check className="text-[0.9em] text-accent" /> : <Copy className="text-[0.9em]" />}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
