import { createFileRoute, Link } from "@tanstack/react-router";
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

const filters = ["All", "Fresh", "Young", "Aged", "Spiced & Herbed"] as const;

function Shop() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const list = useMemo(() => {
    if (filter === "All") return products;
    if (filter === "Spiced & Herbed") return products.filter((p) => p.isSpicedOrHerbed);
    return products.filter((p) => p.ageBand === filter);
  }, [filter]);

  return (
    <>
      <PageHeader
        eyebrow="The collection"
        title="Eight artisanal cheeses. Crafted slowly."
        lede="Small-batch cheeses made with pure milk, tradition, and time."
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

        {/* Wholesale B2B Banner */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border bg-parchment/40 p-8 sm:flex-row">
          <div>
            <h3 className="font-display text-xl">Ordering for a kitchen or retail counter?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We offer cut-to-order whole wheels, trade pricing, and scheduled cold-chain delivery for restaurants and hotels.
            </p>
          </div>
          <Link
            to="/wholesale"
            className="label shrink-0 bg-ink px-6 py-3 text-background hover:opacity-90"
          >
            Explore Wholesale Trade
          </Link>
        </div>
      </div>
    </>
  );
}
