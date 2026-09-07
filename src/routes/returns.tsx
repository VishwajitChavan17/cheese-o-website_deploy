import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "100% Quality Guarantee & Returns Policy — Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Cheese\u201cO\u201d 100% Cold-Chain Quality Guarantee. Our replacement and refund policy for artisanal perishable cheeses.",
      },
      { property: "og:title", content: "Quality Guarantee — Cheese\u201cO\u201d" },
      { property: "og:url", content: "/returns" },
    ],
    links: [{ rel: "canonical", href: "/returns" }],
  }),
  component: Returns,
});

function Returns() {
  return (
    <>
      <PageHeader
        eyebrow="Guarantee & Policy"
        title="100% Quality Guarantee"
        lede="Every wheel and wedge dispatched from our Nashik creamery is backed by our cold-chain freshness promise."
      />

      <div className="container-x max-w-4xl pb-24 text-sm text-foreground/90 leading-relaxed">
        <div className="space-y-12">
          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">01. Our Promise</h2>
            <p className="mt-4 font-serif text-xl text-foreground">
              Because artisanal cheese is a live, perishable creation, we take cold-chain integrity personally. If your order arrives spoiled, melted, or damaged during transit, we replace it or issue a full refund immediately.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">02. How to Claim Under Our Guarantee</h2>
            <p className="mt-4">
              To ensure rapid resolution for perishable claims, please follow these simple steps:
            </p>
            <ol className="mt-4 list-decimal pl-5 space-y-3 text-muted-foreground">
              <li>Inspect your package upon delivery.</li>
              <li>If you notice thermal breakdown, broken seals, or transit damage, take a clear photo/video within <strong className="text-foreground">24 hours of delivery</strong>.</li>
              <li>Send the photos along with your Order Number to our support team at <a href="mailto:vishwajitchavan123@gmail.com" className="link-underline font-medium text-foreground">vishwajitchavan123@gmail.com</a> or via WhatsApp/Phone at <a href="tel:+919561157885" className="link-underline font-medium text-foreground">+91 95611 57885</a>.</li>
            </ol>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">03. Resolution Options</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="bg-parchment/40 p-6 border border-border rounded-sm">
                <h3 className="font-display text-lg">Express Replacement</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  We immediately dispatch a fresh batch from our Nashik cellar at zero additional cost to you.
                </p>
              </div>
              <div className="bg-parchment/40 p-6 border border-border rounded-sm">
                <h3 className="font-display text-lg">Full Refund</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  If replacement inventory is unavailable, we issue a 100% refund directly to your original payment method within 3–5 business days.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">04. Perishable Return Exceptions</h2>
            <p className="mt-4 text-muted-foreground">
              Due to food safety and FSSAI hygiene standards, opened food packages cannot be physically shipped back once opened unless defective. However, our 100% replacement guarantee remains fully active for all genuine quality concerns.
            </p>
          </section>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="label bg-ink px-8 py-4 text-background hover:opacity-90 transition-opacity inline-block"
            >
              Contact Support Desk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
