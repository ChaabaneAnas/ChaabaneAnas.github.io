import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content/types";

export function StackGrid({ content }: { content: Content }) {
  const { stack } = content;

  return (
    <div className="grid gap-10">
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {stack.groups.map((group, index) => (
          <Reveal key={group.name} delay={index * 0.06} className="bg-bg">
            <div className="h-full p-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.625rem] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
                  {group.name}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line-soft bg-surface px-3 py-1.5 text-sm text-text transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="max-w-[62ch] border-l-2 border-accent/50 pl-5 text-lead text-muted">
          {stack.note}
        </p>
      </Reveal>
    </div>
  );
}
