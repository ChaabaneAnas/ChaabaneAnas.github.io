/**
 * Reading-progress bar, driven entirely by a scroll-linked CSS animation.
 * No JavaScript, no layout reads. Browsers without `animation-timeline`
 * simply do not render it — it is decorative.
 */
export function ScrollProgress() {
  return <div aria-hidden className="scroll-progress" />;
}
