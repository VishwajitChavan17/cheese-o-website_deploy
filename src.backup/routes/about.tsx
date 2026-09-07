import { createFileRoute, Link } from "@tanstack/react-router";
import cellarImg from "@/assets/cellar.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cheese\u201cO\u201d — A Small-Batch Cheese Maker" },
      {
        name: "description",
        content:
          "Who we are and how we think about cheese. Small batches, slow ageing, and no claims we can't stand behind.",
      },
      { property: "og:title", content: "About Cheese\u201cO\u201d" },
      { property: "og:description", content: "Small batches, slow ageing, quiet craft." },
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
        eyebrow="About"
        title="Why Cheese&ldquo;O&rdquo;?"
        lede="Because a wheel is a circle, and a circle is what a good evening looks like."
      />

      <section className="container-x grid gap-14 lg:grid-cols-[1fr_1fr]">
        <ScrollReveal>
          <p className="font-display text-3xl leading-snug md:text-4xl">
            [BRAND STORY — CLIENT TO PROVIDE]
          </p>
          <p className="mt-8 text-muted-foreground">
            Placeholder for the founding narrative, the people, and the intent. Nothing about the
            founding year, awards, farms, certifications or sustainability is stated in this build —
            all such content must come from the client.
          </p>
          <dl className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {[
              ["Founded", "[CLIENT TO PROVIDE]"],
              ["Where we make", "[CLIENT TO PROVIDE]"],
              ["Team", "[CLIENT TO PROVIDE]"],
              ["Certifications", "[CLIENT TO PROVIDE]"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-5">
                <dt className="label text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
          <Link to="/craft" className="label link-underline mt-10 inline-block">
            How we make it
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <img
            src={cellarImg}
            alt="Cheese wheels maturing on wooden shelves"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[3/4] w-full object-cover"
          />
        </ScrollReveal>
      </section>
    </>
  );
}
