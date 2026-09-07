import { createFileRoute, Link } from "@tanstack/react-router";
import creameryImg from "@/assets/creamery-nashik.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cheese\u201cO\u201d — Small-Batch Artisanal Cheesery in Nashik" },
      {
        name: "description",
        content:
          "Handcrafted artisanal cheese made slowly in Nashik, Maharashtra. Pure milk, micro-batch care, and time-honoured traditions.",
      },
      { property: "og:title", content: "About Cheese\u201cO\u201d — Nashik Artisanal Cheese" },
      { property: "og:description", content: "Small batches, slow ageing, quiet craft in Nashik." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Crafted slowly in Nashik."
        lede="Pure milk, patient hands, and small-batch dedication from Maharashtra’s fertile valley."
      />

      <section className="container-x grid gap-14 lg:grid-cols-[1fr_1fr]">
        <ScrollReveal>
          <p className="font-display text-2xl leading-snug md:text-3xl">
            We are a boutique micro-cheesery, hand-crafting small wheels in the heart of Nashik.
          </p>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cheese“O” was created on a single principle: authentic cheese cannot be rushed or factory-produced. Nestled in Nashik, Maharashtra—a region famous for its fertile soil, cool climate, and pristine dairy farms—we bring time-honored European cheesemaking methods to Indian tables.
            </p>
            <p>
              Opening our doors this week, we operate as a focused micro-production creamery. Every wheel of Gouda, block of Feta, and tub of fresh Ricotta is crafted by hand in limited batches, using pure, unadulterated milk. No industrial shortcuts, no artificial additives—just honest craft and time.
            </p>
          </div>

          <dl className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {[
              ["Founded", "2026 (Grand Opening)"],
              ["Where we make", "Nashik, Maharashtra"],
              ["Scale", "Boutique Micro-Batch"],
              ["Certifications", "FSSAI Certified Creamery"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-5">
                <dt className="label text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="relative">
            <img
              src={creameryImg}
              alt="Cheese“O” small-batch creamery studio in Nashik with handcrafted cheese wheels and fresh milk"
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-[3/4] w-full object-cover rounded-sm shadow-sm"
            />
            <div className="mt-3 text-right">
              <span className="text-xs text-muted-foreground font-mono">
                Cheese“O” Micro-Creamery Studio &bull; Nashik, MH
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* HOW WE MAKE IT — Process Section */}
      <section className="container-x mt-32 border-t border-border pt-20 pb-12">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="label text-muted-foreground">The Process</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">How we make it.</h2>
            <p className="mt-4 text-muted-foreground">
              A clean, deliberate process rooted in Nashik’s rich dairy terroir and classical cheesemaking patience.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Fresh Nashik Milk",
                desc: "Collected daily from trusted local dairy farms in Nashik. Pure, high-fat milk forms the rich foundation of every wheel.",
              },
              {
                num: "02",
                title: "Slow Culturing",
                desc: "Active European cultures and vegetarian rennet are introduced slowly, letting curds develop natural structure without heat rushing.",
              },
              {
                num: "03",
                title: "Hand Shaping & Salting",
                desc: "Curds are gently ladled into molds by hand, lightly pressed under wooden weights, and cured in pure sea-salt brine.",
              },
              {
                num: "04",
                title: "Cellar Ageing",
                desc: "Wheels rest peacefully on teakwood planks in our climate-controlled cellars, turned and brushed daily until peak maturity.",
              },
            ].map((step, idx) => (
              <div key={step.num} className="border-t border-border pt-6">
                <span className="label text-muted-foreground font-mono">{step.num}</span>
                <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/craft"
              className="label bg-ink px-8 py-4 text-background hover:opacity-90 transition-opacity inline-block"
            >
              Explore Our Full Craft &amp; Ageing
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
