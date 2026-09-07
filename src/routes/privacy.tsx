import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Privacy Policy for Cheese\u201cO\u201d. How we collect, store, and protect your personal information under the Digital Personal Data Protection (DPDP) Act, 2023.",
      },
      { property: "og:title", content: "Privacy Policy — Cheese\u201cO\u201d" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        lede="How we handle your personal data with privacy, care, and full compliance under India's DPDP Act, 2023."
      />

      <div className="container-x max-w-4xl pb-24 text-sm text-foreground/90 leading-relaxed">
        <div className="space-y-12">
          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">01. Overview &amp; Commitment</h2>
            <p className="mt-4">
              At Cheese“O” (operating from Nashik, Maharashtra), we respect your privacy. This Privacy Policy explains how we collect, process, and safeguard your personal data when you visit our website, place an order, or communicate with us.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">02. Data We Collect</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Order Information:</strong> Name, delivery address, phone number, and email address required to fulfill cold-chain deliveries.</li>
              <li><strong className="text-foreground">Payment Details:</strong> Processed securely via encrypted third-party payment gateways. We never store raw debit/credit card or UPI numbers on our servers.</li>
              <li><strong className="text-foreground">Communication Data:</strong> Inquiries submitted via our contact, trade, or wholesale forms.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">03. Purpose of Processing (DPDP Act, 2023)</h2>
            <p className="mt-4">
              We collect your information strictly to fulfill purchase contracts, coordinate express cold-chain shipping, provide customer support, and issue GST tax invoices for wholesale transactions. We do not sell or rent your data to third parties.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">04. Data Retention &amp; Security</h2>
            <p className="mt-4">
              Personal data is retained only for as long as necessary to complete your order and comply with Indian tax laws. All digital records are stored behind encrypted infrastructure.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="label text-muted-foreground">05. Grievance Officer &amp; Contacts</h2>
            <p className="mt-4">
              For data access, correction, or deletion requests under the DPDP Act, 2023, please contact our designated Grievance Officer:
            </p>
            <div className="mt-4 bg-parchment/40 p-6 border border-border rounded-sm">
              <p className="font-medium text-foreground">Grievance Officer: Tejas Pingle</p>
              <p className="mt-1 text-muted-foreground">Cheese“O” Creamery, Grape Embassy &amp; Zatka Misal, Nashik — 422003, Maharashtra</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:vishwajitchavan123@gmail.com" className="link-underline font-medium text-foreground">
                  vishwajitchavan123@gmail.com
                </a>
                {" | Phone: "}
                <a href="tel:+919561157885" className="link-underline font-medium text-foreground">
                  +91 95611 57885
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
