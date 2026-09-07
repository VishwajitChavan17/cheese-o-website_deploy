import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroWheel from "@/assets/hero-wheel.jpg";
import craftImg from "@/assets/craft.jpg";
import cellarImg from "@/assets/cellar.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { PairingExperience } from "@/components/site/PairingExperience";
import { Wordmark } from "@/components/site/Wordmark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheese\u201cO\u201d — Artisanal Cheese, Crafted Slowly" },
      {
        name: "description",
        content:
          "Small-batch artisanal cheese. Six wheels, each with a character of its own. Cold-chain delivery across India.",
      },
      { property: "og:title", content: "Cheese\u201cO\u201d — Artisanal Cheese, Crafted Slowly" },
      {
        property: "og:description",
        content: "Crafted slowly. Savoured completely. Small-batch artisanal cheese from India.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-16">
          <div>
            <h1 className="display-xl">
              <Wordmark spin />
            </h1>
            <p className="mt-8 font-display text-3xl leading-[1.15] md:text-5xl">
              Crafted slowly.
              <br />
              Savoured completely.
            </p>
            <p className="mt-8 max-w-md text-muted-foreground">
              A little tang. A little earth. A long finish. Six wheels, made in small batches and
              sent cold to your door.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link to="/shop" className="label bg-ink px-7 py-4 text-background hover:opacity-90">
                Explore the collection
              </Link>
              <Link to="/craft" className="label link-underline">
                Our craft
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full border border-gold/40"
              style={{ transform: `rotate(${y * 0.04}deg) scale(${1 + Math.min(y, 400) / 4000})` }}
              aria-hidden="true"
            />
            <img
              src={heroWheel}
              alt="An aged artisanal cheese wheel resting on dark walnut wood in warm light"
              width={1408}
              height={1408}
              fetchPriority="high"
              className="w-full rounded-full object-cover"
              style={{ transform: `rotate(${y * 0.02}deg)` }}
            />
          </div>
        </div>

        <div className="container-x flex items-center justify-between border-t border-border py-5">
          <span className="label text-muted-foreground">Scroll</span>
          <span className="label text-muted-foreground">Small batch · Made in India</span>
        </div>
      </section>

      {/* Brand introduction */}
      <section className="container-x py-24 md:py-36">
        <ScrollReveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="label text-muted-foreground">Introduction</p>
          <div>
            <h2 className="display-md max-w-3xl">
              We make cheese the slow way, because the slow way is the only way it tastes like
              anything.
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">
              [BRAND INTRODUCTION — CLIENT TO PROVIDE] Placeholder copy for the brand&rsquo;s
              positioning statement. Replace with the maker&rsquo;s own words.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured cheeses */}
      <section className="container-x pb-24 md:pb-36" aria-labelledby="meet">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <p className="label text-muted-foreground">The collection</p>
            <h2 id="meet" className="display-lg mt-5">
              Meet the cheeses
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Every wheel has a character of its own.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <ProductCard product={p} index={i} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16">
          <Link to="/shop" className="label link-underline">
            See all cheeses
          </Link>
        </div>
      </section>

      {/* Craft */}
      <section className="bg-parchment py-24 md:py-36" aria-labelledby="craft">
        <div className="container-x">
          <ScrollReveal>
            <p className="label text-muted-foreground">The craft</p>
            <h2 id="craft" className="display-lg mt-6">
              From milk
              <br />
              to wheel.
            </h2>
          </ScrollReveal>
          <ProcessTimeline />
          <ScrollReveal className="mt-16 grid gap-6 md:grid-cols-2">
            <img
              src={craftImg}
              alt="A cheesemaker's hands lifting fresh curd from a steel vat"
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-[7/5] w-full object-cover"
            />
            <img
              src={cellarImg}
              alt="Rows of cheese wheels ageing on wooden shelves in a cellar"
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-[7/5] w-full object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Pairings */}
      <section className="container-x py-24 md:py-36" aria-labelledby="pairing">
        <ScrollReveal className="max-w-2xl">
          <p className="label text-muted-foreground">Pairings</p>
          <h2 id="pairing" className="display-lg mt-6">
            Make a moment of it.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Cheese is rarely eaten alone. Here is what we reach for.
          </p>
        </ScrollReveal>
        <div className="mt-14">
          <PairingExperience />
        </div>
      </section>

      {/* Philosophy + CTA */}
      <section className="bg-ink py-28 text-background md:py-40">
        <div className="container-x">
          <ScrollReveal className="max-w-4xl">
            <p className="label opacity-60">Why Cheese&ldquo;O&rdquo;</p>
            <h2 className="display-lg mt-8">
              Nothing here is rushed, and nothing here is pretending to be from somewhere else.
            </h2>
            <p className="mt-8 max-w-xl opacity-70">
              [BRAND STORY — CLIENT TO PROVIDE] Placeholder for the brand philosophy. No claims
              about origin, awards or certifications are made in this build.
            </p>
            <Link
              to="/shop"
              className="label mt-12 inline-block border border-background/40 px-7 py-4 transition-colors hover:bg-background hover:text-ink"
            >
              Find your cheese
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
