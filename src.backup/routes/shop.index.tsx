import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { PageHeader } from "@/components/site/PageHeader";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop Artisanal Cheese — Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Browse the Cheese\u201cO\u201d collection: fresh, bloomy, smoked, blue and aged wheels, with tasting notes and cold-chain delivery.",
      },
      { property: "og:title", content: "Shop Artisanal Cheese — Cheese\u201cO\u201d" },
      {
        property: "og:description",
        content: "Fresh, bloomy, smoked, blue and aged wheels. Small batch, delivered cold.",
      },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

const filters = ["All", "Fresh", "Young", "Aged", "Boards"] as const;

function Shop() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const list = useMemo(() => {
    if (filter === "All") return products;
    if (filter === "Boards") return products.filter((p) => p.kind === "board");
    return products.filter((p) => p.kind === "single" && p.ageBand === filter);
  }, [filter]);

  return (
    <>
      <PageHeader
        eyebrow="The collection"
        title="Six wheels. One board. Choose slowly."
        lede="Everything is made in small batches, so what's here changes with the season."
      />

      <div className="container-x">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-border py-5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "label transition-opacity",
                filter === f
                  ? "opacity-100 underline underline-offset-8"
                  : "opacity-50 hover:opacity-80",
              )}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">{list.length} products</span>
        </div>

        {list.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-display text-3xl">Nothing in this section right now.</p>
            <button
              type="button"
              onClick={() => setFilter("All")}
              className="label mt-6 border-b border-foreground pb-1"
            >
              See everything
            </button>
          </div>
        ) : (
          <div className="grid gap-x-10 gap-y-20 py-16 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <ScrollReveal key={p.id} delay={(i % 3) * 80}>
                <ProductCard product={p} index={i} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
