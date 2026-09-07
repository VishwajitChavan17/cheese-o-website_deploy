import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/products";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductCard } from "@/components/site/ProductCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/gift")({
  head: () => ({
    meta: [
      { title: "Cheese Gifting & Curated Boards — Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Send cheese as a gift: curated boards, a handwritten note and cold-chain delivery to their door.",
      },
      { property: "og:title", content: "Gifting — Cheese\u201cO\u201d" },
      { property: "og:description", content: "Curated boards, gift notes, delivered cold." },
      { property: "og:url", content: "/gift" },
    ],
    links: [{ rel: "canonical", href: "/gift" }],
  }),
  component: Gift,
});

function Gift() {
  const boards = products.filter((p) => p.kind === "board" || p.featured);

  return (
    <>
      <PageHeader
        eyebrow="Gifting"
        title="Send the whole evening."
        lede="Choose a board, add a note, and we pack it cold. Gift wrap and note are collected at checkout."
      />

      <div className="container-x">
        <ol className="grid gap-px bg-border sm:grid-cols-3">
          {[
            ["01", "Choose", "A single wheel or a curated board."],
            ["02", "Write", "Add a short note at checkout."],
            ["03", "We pack", "Insulated, iced, and marked as a gift — no prices inside."],
          ].map(([n, t, d]) => (
            <li key={n} className="bg-background p-8">
              <span className="label text-muted-foreground">{n}</span>
              <h2 className="mt-4 font-display text-2xl">{t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {boards.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <ProductCard product={p} index={i} />
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Corporate and bulk gifting —{" "}
          <Link to="/wholesale" className="underline underline-offset-4">
            enquire here
          </Link>
          .
        </p>
      </div>
    </>
  );
}
