import { ScrollReveal } from "./ScrollReveal";

const stages = [
  { n: "01", name: "Milk", note: "It starts and ends with what the milk already is." },
  { n: "02", name: "Culture", note: "Live cultures go in warm. Time does the rest." },
  { n: "03", name: "Curd", note: "Cut, stirred, drained — by feel, not by clock." },
  { n: "04", name: "Press", note: "Weight, patience, and a turn every few hours." },
  { n: "05", name: "Age", note: "Brushed and turned on wood until the rind sets." },
  { n: "06", name: "Ready", note: "We cut one. If it isn't right, it waits." },
];

export function ProcessTimeline() {
  return (
    <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {stages.map((s, i) => (
        <ScrollReveal as="li" key={s.n} delay={i * 70} className="bg-background p-8 lg:p-10">
          <div className="flex items-start gap-5">
            <span
              aria-hidden="true"
              className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-gold/70 text-xs tabular-nums"
              style={{ opacity: 0.4 + i * 0.12 }}
            >
              {s.n}
            </span>
            <div>
              <h3 className="font-display text-3xl leading-none">{s.name}</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{s.note}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </ol>
  );
}
