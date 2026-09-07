import { Link } from "@tanstack/react-router";
import { formatINR, type Product } from "@/data/products";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const soldOut = product.variants.every((v) => v.stock === "sold_out");
  const low = !soldOut && product.variants.some((v) => v.stock === "low_stock");

  return (
    <article className="group relative">
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="block focus-visible:outline-offset-8"
      >
        <div className="relative overflow-hidden bg-parchment">
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            width={1000}
            height={1250}
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <span className="label absolute left-4 top-4 text-foreground/50">
            {String(index + 1).padStart(2, "0")}
          </span>
          {soldOut ? (
            <span className="label absolute right-4 top-4 bg-ink px-2 py-1 text-background">
              Sold out
            </span>
          ) : low ? (
            <span className="label absolute right-4 top-4 bg-background/90 px-2 py-1">
              Low stock
            </span>
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-ink/70 to-transparent p-4 pt-16 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="label text-background">View cheese</span>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl leading-tight">{product.name}</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {product.shortDescription}
            </p>
          </div>
          <p className="shrink-0 text-sm tabular-nums">{formatINR(product.price)}</p>
        </div>

        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
          <div className="flex gap-2">
            <dt className="sr-only">Type</dt>
            <dd>{product.cheeseType}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">Texture</dt>
            <dd>{product.texture}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">Age</dt>
            <dd>{product.ageBand}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">Weight</dt>
            <dd>{product.weight} g</dd>
          </div>
        </dl>
      </Link>
    </article>
  );
}
