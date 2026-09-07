import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import pairFruit from "@/assets/pair-fruit.jpg";
import pairHoney from "@/assets/pair-honey.jpg";
import cellar from "@/assets/cellar.jpg";

/** DEMO editorial index. Phase 2: CMS-backed collection with per-post routes. */
const posts = [
  {
    title: "How to build a cheese board that isn't crowded",
    kicker: "Guide",
    excerpt: "Three cheeses, two textures, one sweet thing. Stop there.",
    image: pairFruit,
    alt: "Figs, grapes and pears on a stone board with cheese",
  },
  {
    title: "Honey and blue: why salt likes sugar",
    kicker: "Pairing",
    excerpt: "The oldest trick on the board, explained in two paragraphs.",
    image: pairHoney,
    alt: "Honey drizzling onto a round of fresh cheese",
  },
  {
    title: "What actually happens in the ageing room",
    kicker: "Process",
    excerpt: "Humidity, turning, and the moment a rind decides to behave.",
    image: cellar,
    alt: "Cheese wheels ageing on wooden shelves",
  },
];

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Cheese Guides, Pairings & Process | Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Boards, pairings and process notes from the Cheese\u201cO\u201d ageing room. Written for people who like cheese more than jargon.",
      },
      { property: "og:title", content: "Journal — Cheese\u201cO\u201d" },
      { property: "og:description", content: "Guides, pairings and process notes." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

function Journal() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes from the ageing room."
        lede="Guides, pairings and process writing. [EDITORIAL CALENDAR — CLIENT TO OWN]"
      />
      <div className="container-x grid gap-x-10 gap-y-16 pb-12 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title}>
            <img
              src={p.image}
              alt={p.alt}
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
            <p className="label mt-5 text-muted-foreground">{p.kicker}</p>
            <h2 className="mt-3 font-display text-2xl leading-tight">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            <p className="mt-4 text-xs text-muted-foreground">[ARTICLE — CLIENT TO PROVIDE]</p>
          </article>
        ))}
      </div>
    </>
  );
}
