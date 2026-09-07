import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { PairingExperience } from "@/components/site/PairingExperience";

export const Route = createFileRoute("/pairings")({
  head: () => ({
    meta: [
      { title: "Cheese Pairings — Wine, Honey, Fruit & More | Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "What goes with cheese: wine, honey, fruit, bread, nuts and coffee — and which Cheese\u201cO\u201d wheel to try with each.",
      },
      { property: "og:title", content: "Cheese Pairings — Cheese\u201cO\u201d" },
      {
        property: "og:description",
        content: "Six pairings, six wheels. What to put beside your cheese.",
      },
      { property: "og:url", content: "/pairings" },
    ],
    links: [{ rel: "canonical", href: "/pairings" }],
  }),
  component: Pairings,
});

function Pairings() {
  return (
    <>
      <PageHeader
        eyebrow="Pairings"
        title="What goes with cheese?"
        lede="Salt, fat, acid and sweetness, arranged so nothing shouts over anything else."
      />
      <div className="container-x pb-16">
        <PairingExperience />
      </div>
    </>
  );
}
