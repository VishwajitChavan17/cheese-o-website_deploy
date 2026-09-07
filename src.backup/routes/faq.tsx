import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

const faqs = [
  {
    q: "How is the cheese shipped?",
    a: "In insulated packaging with ice packs, by courier. [DELIVERY WINDOW AND PARTNER — CLIENT TO CONFIRM]",
  },
  {
    q: "Which pincodes do you deliver to?",
    a: "Enter your pincode on any product page to check serviceability before adding to cart.",
  },
  {
    q: "Is there an order cutoff?",
    a: "Perishable orders follow a weekly dispatch schedule. [CUTOFF DAY — CLIENT TO CONFIRM]",
  },
  {
    q: "Is the cheese vegetarian?",
    a: "Each product page states milk type, rennet and pasteurisation. [DETAILS — CLIENT TO CONFIRM]",
  },
  {
    q: "What if my order arrives damaged?",
    a: "Our quality guarantee covers cold-chain failures and damage in transit — send photos within 24 hours of delivery and we replace the item.",
  },
  {
    q: "Do you supply restaurants and cafés?",
    a: "Yes — use the wholesale enquiry form and we'll get back with a trade list.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Shipping, Storage & Orders | Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Answers on cold-chain shipping, serviceable pincodes, order cutoffs, storage and our quality guarantee.",
      },
      { property: "og:title", content: "FAQ — Cheese\u201cO\u201d" },
      {
        property: "og:description",
        content: "Shipping, storage, orders and the quality guarantee.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHeader eyebrow="Help" title="Questions, answered." />
      <div className="container-x pb-12">
        <dl>
          {faqs.map((f) => (
            <div
              key={f.q}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[1fr_1.4fr]"
            >
              <dt className="font-display text-2xl leading-tight">{f.q}</dt>
              <dd className="text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
