import { createFileRoute, Link } from "@tanstack/react-router";
import craftImg from "@/assets/craft.jpg";
import creameryImg from "@/assets/creamery-nashik.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "Our Craft — How Cheese\u201cO\u201d Is Made" },
      {
        name: "description",
        content:
          "Milk, culture, curd, press, age. How each Cheese\u201cO\u201d wheel is made and matured in Nashik, step by step.",
      },
      { property: "og:title", content: "Our Craft — How Cheese\u201cO\u201d Is Made" },
      {
        property: "og:description",
        content: "From milk to wheel: the six stages behind every batch.",
      },
      { property: "og:url", content: "/craft" },
    ],
    links: [{ rel: "canonical", href: "/craft" }],
  }),
  component: Craft,
});

function Craft() {
  return (
    <>
      <PageHeader
        eyebrow="The craft"
        title="From milk to wheel."
        lede="Six stages, none of which can be hurried without the cheese telling on you."
      />

      <div className="container-x">
        <img
          src={craftImg}
          alt="A cheesemaker's hands lifting fresh curd from a steel vat"
          loading="lazy"
          width={1400}
          height={1000}
          className="aspect-[2/1] w-full object-cover rounded-sm"
        />
        <ProcessTimeline />
      </div>

      <section className="container-x mt-28 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <ScrollReveal>
          <h2 className="display-md max-w-xl">The cellar decides when it&rsquo;s finished.</h2>
          <p className="mt-8 max-w-lg text-muted-foreground leading-relaxed">
            In our Nashik cellar, precise humidity, temperature, and patient daily care dictate when a wheel is ready. Every wheel matures gracefully on natural wooden boards, turned and brushed by hand until the rind sets. We never rush maturity—a wheel is cut only when it reaches peak flavor.
          </p>
          <Link to="/shop" className="label link-underline mt-10 inline-block">
            See what&rsquo;s ready
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="relative">
            <img
              src={creameryImg}
              alt="Cheese“O” small-batch creamery studio in Nashik with handcrafted cheese wheels"
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover rounded-sm shadow-sm"
            />
            <div className="mt-2 text-right">
              <span className="text-xs text-muted-foreground font-mono">
                Cheese“O” Cellar Studio &bull; Nashik, MH
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
