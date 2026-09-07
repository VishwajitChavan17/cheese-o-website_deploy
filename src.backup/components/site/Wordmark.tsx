import { cn } from "@/lib/utils";

/** The "O" is a ring — the brand's recurring motif. */
export function Wordmark({ className, spin = false }: { className?: string; spin?: boolean }) {
  return (
    <span className={cn("inline-flex items-baseline font-display leading-none", className)}>
      <span>CHEESE</span>
      <span aria-hidden="true" className="px-[0.06em] text-[0.7em] align-super opacity-60">
        &ldquo;
      </span>
      <span className="relative inline-flex items-center justify-center">
        <span className="sr-only">&quot;O&quot;</span>
        <span aria-hidden="true">O</span>
        {spin ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-0.18em] rounded-full border border-gold/70 motion-safe:[animation:slow-spin_18s_linear_infinite]"
          />
        ) : null}
      </span>
      <span aria-hidden="true" className="px-[0.06em] text-[0.7em] align-super opacity-60">
        &rdquo;
      </span>
    </span>
  );
}
