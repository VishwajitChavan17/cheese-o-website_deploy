import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Snowflake, ShieldCheck, BadgeCheck, Lock } from "lucide-react";
import { formatINR, getProduct, products, FSSAI_PLACEHOLDER } from "@/data/products";
import { useCart } from "@/lib/cart";
import { TastingProfile } from "@/components/site/TastingProfile";
import { PairingExperience } from "@/components/site/PairingExperience";
import { PincodeChecker } from "@/components/site/PincodeChecker";
import { ProductCard } from "@/components/site/ProductCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Cheese not found — Cheese\u201cO\u201d" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Cheese\u201cO\u201d` },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: `${p.name} — Cheese\u201cO\u201d` },
        { property: "og:description", content: p.shortDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/shop/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/shop/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.shortDescription,
            brand: { "@type": "Brand", name: 'Cheese"O"' },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: p.price,
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <div className="container-x py-40 text-center">
      <h1 className="display-md">This cheese isn&rsquo;t on the board.</h1>
      <Link to="/shop" className="label mt-8 inline-block border-b border-foreground pb-1">
        Back to the collection
      </Link>
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [weight, setWeight] = useState(product.variants[0]?.weight ?? product.weight);
  const [qty, setQty] = useState(1);

  const variant = product.variants.find((v) => v.weight === weight) ?? product.variants[0];
  const soldOut = variant?.stock === "sold_out";
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container-x grid gap-12 pb-20 pt-14 lg:grid-cols-2 lg:gap-20 lg:pt-20">
        <div className="relative bg-parchment">
          <img
            src={product.image}
            alt={product.imageAlt}
            width={1000}
            height={1250}
            fetchPriority="high"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="lg:pt-6">
          <nav aria-label="Breadcrumb" className="label text-muted-foreground">
            <Link to="/shop" className="link-underline">
              Shop
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{product.cheeseType}</span>
          </nav>

          <h1 className="display-md mt-6">{product.name}</h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">{product.shortDescription}</p>

          <div className="mt-8 flex items-center gap-4">
            <span className="font-display text-3xl tabular-nums">
              {formatINR(variant?.price ?? product.price)}
            </span>
            <span className="text-xs text-muted-foreground">Inclusive of all taxes</span>
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            {product.rating.average === null
              ? "No reviews yet — be the first once we open reviews."
              : `${product.rating.average} / 5 · ${product.rating.count} reviews`}
          </p>

          <fieldset className="mt-8">
            <legend className="label text-muted-foreground">Weight</legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.variants.map((v) => (
                <button
                  key={v.weight}
                  type="button"
                  onClick={() => setWeight(v.weight)}
                  disabled={v.stock === "sold_out"}
                  aria-pressed={v.weight === weight}
                  className={cn(
                    "border px-5 py-3 text-sm transition-colors",
                    v.weight === weight
                      ? "border-foreground bg-ink text-background"
                      : "border-border hover:bg-muted",
                    v.stock === "sold_out" && "cursor-not-allowed line-through opacity-40",
                  )}
                >
                  {v.weight} g
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center border border-border">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 hover:bg-muted"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-3 hover:bg-muted"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {soldOut ? (
              <button
                type="button"
                className="label border border-border px-7 py-4 hover:bg-muted"
                onClick={() => alert("Notify-me is not connected in this demo build.")}
              >
                Notify me
              </button>
            ) : (
              <button
                type="button"
                onClick={() => add(product.id, weight, qty)}
                className="label bg-ink px-8 py-4 text-background transition-opacity hover:opacity-90"
              >
                Add to cart
              </button>
            )}

            {variant?.stock === "low_stock" ? (
              <span className="text-xs text-terracotta">Low stock — small batch</span>
            ) : null}
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-5 text-xs text-muted-foreground sm:grid-cols-4">
            <li className="flex items-center gap-2">
              <Snowflake className="size-4" strokeWidth={1.3} aria-hidden /> Cold chain
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="size-4" strokeWidth={1.3} aria-hidden /> FSSAI licensed
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4" strokeWidth={1.3} aria-hidden /> Quality guarantee
            </li>
            <li className="flex items-center gap-2">
              <Lock className="size-4" strokeWidth={1.3} aria-hidden /> Secure checkout
            </li>
          </ul>

          {/* Allergens — deliberately prominent, never inside an accordion */}
          <div className="mt-8 border-l-2 border-terracotta bg-parchment p-5">
            <h2 className="label">Allergen information</h2>
            <p className="mt-3 text-sm">
              Contains: <strong>{product.allergens.join(", ")}</strong>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">{product.crossContamination}</p>
          </div>

          <div className="mt-6">
            <PincodeChecker />
          </div>

          <p className="mt-4 text-xs text-muted-foreground">{FSSAI_PLACEHOLDER}</p>
        </div>
      </section>

      {/* Personality + facts */}
      <section className="container-x grid gap-16 border-t border-border py-20 lg:grid-cols-2 lg:gap-24">
        <ScrollReveal>
          <h2 className="label text-muted-foreground">Personality</h2>
          <div className="mt-8">
            <TastingProfile product={product} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="label text-muted-foreground">Key facts</h2>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-border">
            {[
              ["Milk", product.milkType],
              ["Type", product.cheeseType],
              ["Texture", product.texture],
              ["Ageing", product.age],
              ["Weight", `${weight} g`],
              ["Vegetarian", product.vegetarian ? "Yes" : "No"],
              ["Pasteurised", product.pasteurized ? "Yes" : "No"],
              ["Country", product.country],
              ["Shelf life", product.shelfLife],
              ["Storage", product.storage],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-4">
                <dt className="label text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </section>

      {/* The taste */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="container-x">
          <ScrollReveal>
            <p className="label text-muted-foreground">The taste</p>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-16">
              {[
                ["Aroma", product.taste.aroma],
                ["First impression", product.taste.first],
                ["Texture", product.taste.texture],
                ["Finish", product.taste.finish],
              ].map(([k, v]) => (
                <div key={k}>
                  <h3 className="label text-muted-foreground">{k}</h3>
                  <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">{v}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pairings */}
      <section className="container-x py-24 md:py-32">
        <ScrollReveal>
          <p className="label text-muted-foreground">Pair it with</p>
          <h2 className="display-md mt-6 max-w-xl">What to put beside it.</h2>
        </ScrollReveal>
        <div className="mt-12">
          <PairingExperience ids={product.pairings} />
        </div>
      </section>

      {/* Story */}
      <section className="container-x border-t border-border py-24">
        <ScrollReveal className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <p className="label text-muted-foreground">The story behind the cheese</p>
          <p className="max-w-3xl font-display text-2xl leading-snug md:text-4xl">
            {product.story}
          </p>
        </ScrollReveal>
      </section>

      {/* Ingredients + nutrition */}
      <section className="container-x grid gap-16 border-t border-border py-20 lg:grid-cols-2 lg:gap-24">
        <ScrollReveal>
          <h2 className="label text-muted-foreground">Ingredients</h2>
          <p className="mt-6 text-lg">{product.ingredients.join(", ")}.</p>
          <p className="mt-4 text-xs text-muted-foreground">
            [INGREDIENT DECLARATION — CLIENT TO CONFIRM against pack label]
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="label text-muted-foreground">Nutritional information (per 100 g)</h2>
          <table className="mt-6 w-full text-sm">
            <caption className="sr-only">
              Nutritional information per 100 g, FSSAI labelling format
            </caption>
            <tbody>
              {[
                ["Energy (kcal)", product.nutrition.energyKcal],
                ["Protein (g)", product.nutrition.protein],
                ["Carbohydrate (g)", product.nutrition.carbohydrate],
                ["— Total sugars (g)", product.nutrition.totalSugars],
                ["— Added sugars (g)", product.nutrition.addedSugars],
                ["Total fat (g)", product.nutrition.totalFat],
                ["— Saturated fat (g)", product.nutrition.saturatedFat],
                ["— Trans fat (g)", product.nutrition.transFat],
                ["Cholesterol (mg)", product.nutrition.cholesterol],
                ["Sodium (mg)", product.nutrition.sodium],
              ].map(([k, v]) => (
                <tr key={String(k)} className="border-b border-border">
                  <th scope="row" className="py-3 text-left font-normal text-muted-foreground">
                    {k}
                  </th>
                  <td className="py-3 text-right tabular-nums">{String(v)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-muted-foreground">
            [NUTRITION VALUES — CLIENT TO PROVIDE from lab analysis. Values shown are zeroed
            placeholders in FSSAI per-100 g format.]
          </p>
        </ScrollReveal>
      </section>

      {/* Related */}
      <section className="container-x border-t border-border py-20">
        <h2 className="label text-muted-foreground">Also on the board</h2>
        <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <ProductCard product={p} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
