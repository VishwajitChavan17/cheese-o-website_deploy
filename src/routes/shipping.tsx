import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Cold Chain Policy — Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Cold-chain delivery policy for Cheese\u201cO\u201d. How we package and ship artisanal cheeses across India with ice gels and insulated thermal liners.",
      },
      { property: "og:title", content: "Shipping & Cold Chain — Cheese\u201cO\u201d" },
      { property: "og:url", content: "/shipping" },
    ],
    links: [{ rel: "canonical", href: "/shipping" }],
  }),
  component: Shipping,
});

function Shipping() {
  return (
    <>
      <PageHeader
        eyebrow="Delivery & Cold Chain"
        title="Shipping & Cold Chain Policy"
        lede="How we ensure every wheel and wedge arrives from our Nashik creamery at ideal tasting temperature."
      />

      <div className="container-x max-w-4xl pb-24 text-sm text-foreground/90 leading-relaxed">
        <div className="space-y-12">
          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">01. Temperature-Controlled Packaging</h2>
            <p className="mt-4">
              All Cheese“O” orders are packed in custom insulated thermal boxes lined with non-toxic frozen gel packs. This protective micro-environment maintains cold temperatures for up to 48–72 hours in transit, preserving curd texture and flavor profile.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">02. Dispatch Schedule &amp; Cutoffs</h2>
            <p className="mt-4">
              To prevent packages from sitting in courier hubs over weekends, we dispatch perishable orders from Monday through Thursday morning:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Major Metro Cities:</strong> Delivered within 24–48 hours via express air courier.</li>
              <li><strong className="text-foreground">Tier 2/3 Cities:</strong> Delivered within 48–72 hours depending on cold-chain logisitics accessibility.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">03. Unpacking &amp; Immediate Care</h2>
            <p className="mt-4">
              Upon receiving your package:
            </p>
            <ol className="mt-4 list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Remove the cheese from the insulated box immediately.</li>
              <li>Place wedges/wheels in the main compartment of your refrigerator (4°C–8°C).</li>
              <li>Allow cheeses to rest cold for 2 hours before serving. For peak flavor, bring to room temperature 20 minutes prior to tasting.</li>
            </ol>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">04. Serviceability &amp; Support</h2>
            <p className="mt-4 text-muted-foreground">
              If your location experiences delivery delays, our support team monitors cold-chain tracking active signals. Questions? Email us at{" "}
              <a href="mailto:vishwajitchavan123@gmail.com" className="link-underline font-medium text-foreground">
                vishwajitchavan123@gmail.com
              </a>{" "}
              or call{" "}
              <a href="tel:+919561157885" className="link-underline font-medium text-foreground">
                +91 95611 57885
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
