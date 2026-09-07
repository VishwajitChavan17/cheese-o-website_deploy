import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale & Trade Enquiries — Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Restaurants, hotels, cafés and retailers: enquire about trade pricing and regular supply of Cheese\u201cO\u201d wheels.",
      },
      { property: "og:title", content: "Wholesale & Trade — Cheese\u201cO\u201d" },
      {
        property: "og:description",
        content: "Trade supply for restaurants, hotels and retailers.",
      },
      { property: "og:url", content: "/wholesale" },
    ],
    links: [{ rel: "canonical", href: "/wholesale" }],
  }),
  component: Wholesale,
});

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="label text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground"
      />
    </div>
  );
}

function Wholesale() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Wholesale"
        title="For kitchens and counters."
        lede="Regular supply, trade pricing and cut-to-order wheels for restaurants, hotels, cafés and retailers."
      />
      <div className="container-x grid gap-16 pb-12 lg:grid-cols-[1fr_1fr]">
        <form
          className="grid gap-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Field id="business" label="Business name" required />
          <Field id="name" label="Contact name" required />
          <Field id="email" label="Email" type="email" required />
          <Field id="phone" label="Phone" type="tel" />
          <Field id="city" label="City" />
          <div>
            <label htmlFor="message" className="label text-muted-foreground">
              What are you looking for?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground"
            />
          </div>
          <div>
            <button
              type="submit"
              className="label bg-ink px-8 py-4 text-background hover:opacity-90"
            >
              Send enquiry
            </button>
            <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
              {sent
                ? "Thanks — this form is not connected to an inbox in this demo build."
                : "We use these details only to respond to your enquiry (DPDP Act, 2023)."}
            </p>
          </div>
        </form>

        <aside className="border border-border p-8">
          <h2 className="label text-muted-foreground">Trade notes</h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li>Minimum order quantity — [CLIENT TO PROVIDE]</li>
            <li>Lead time — [CLIENT TO PROVIDE]</li>
            <li>Trade price list — [CLIENT TO PROVIDE]</li>
            <li>GST invoice issued on all trade orders.</li>
            <li>Cold-chain dispatch only. Delivery windows vary by city.</li>
          </ul>
        </aside>
      </div>
    </>
  );
}
