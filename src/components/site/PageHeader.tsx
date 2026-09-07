import { ScrollReveal } from "./ScrollReveal";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="container-x pb-14 pt-20 md:pb-20 md:pt-28">
      <ScrollReveal>
        <p className="label text-muted-foreground">{eyebrow}</p>
        <h1 className="display-lg mt-6 max-w-4xl">{title}</h1>
        {lede ? <p className="mt-8 max-w-xl text-lg text-muted-foreground">{lede}</p> : null}
      </ScrollReveal>
    </header>
  );
}
