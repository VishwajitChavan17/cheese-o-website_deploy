import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Terms of Service for Cheese\u201cO\u201d. Governing terms for ordering, payments, and trade supply from our Nashik creamery.",
      },
      { property: "og:title", content: "Terms of Service — Cheese\u201cO\u201d" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Terms"
        title="Terms of Service"
        lede="Governing terms and conditions for placing retail and wholesale orders with Cheese“O”."
      />

      <div className="container-x max-w-4xl pb-24 text-sm text-foreground/90 leading-relaxed">
        <div className="space-y-12">
          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">01. Agreement to Terms</h2>
            <p className="mt-4">
              By accessing our website or placing an order with Cheese“O” (located in Nashik, Maharashtra), you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">02. Products &amp; Pricing</h2>
            <p className="mt-4">
              All cheeses are handcrafted in small batches. Product weights are specified on product pages (e.g. 200g wedges). Prices are displayed in Indian Rupees (INR) and include applicable GST taxes.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">03. Perishable Orders &amp; Cancellations</h2>
            <p className="mt-4">
              Because our artisanal cheeses are freshly cut and packaged cold for dispatch, orders cannot be canceled once dispatched. If you need to modify an order prior to dispatch, please notify us immediately at <a href="mailto:vishwajitchavan123@gmail.com" className="link-underline font-medium text-foreground">vishwajitchavan123@gmail.com</a>.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">04. Intellectual Property</h2>
            <p className="mt-4">
              All branding, trade logos, product names, text, and imagery on this website are the exclusive property of Cheese“O”.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">05. Governing Law</h2>
            <p className="mt-4">
              These terms are governed by and construed in accordance with the laws of India. Any legal proceedings shall fall under the jurisdiction of courts in Nashik, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
