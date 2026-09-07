import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { FSSAI_PLACEHOLDER } from "@/data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Cheese\u201cO\u201d" },
      {
        name: "description",
        content:
          "Questions about an order, a wheel or a pairing? Write to the Cheese\u201cO\u201d team.",
      },
      { property: "og:title", content: "Contact — Cheese\u201cO\u201d" },
      { property: "og:description", content: "Reach the Cheese\u201cO\u201d team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader eyebrow="Contact" title="Say hello." />
      <div className="container-x grid gap-16 pb-12 lg:grid-cols-2">
        <form
          className="grid gap-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "order", label: "Order number (optional)", type: "text" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="label text-muted-foreground">
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                required={f.id !== "order"}
                className="mt-2 w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground"
              />
            </div>
          ))}
          <div>
            <label htmlFor="msg" className="label text-muted-foreground">
              Message
            </label>
            <textarea
              id="msg"
              rows={4}
              required
              className="mt-2 w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground"
            />
          </div>
          <div>
            <button
              type="submit"
              className="label bg-ink px-8 py-4 text-background hover:opacity-90"
            >
              Send
            </button>
            <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
              {sent
                ? "Thanks — this form is not connected to an inbox in this demo build."
                : "We use your details only to reply to this message (DPDP Act, 2023)."}
            </p>
          </div>
        </form>

        <aside className="text-sm">
          <dl className="grid gap-6">
            {[
              ["Email", "[EMAIL — CLIENT TO PROVIDE]"],
              ["Phone", "[PHONE — CLIENT TO PROVIDE]"],
              ["Address", "[REGISTERED ADDRESS — CLIENT TO PROVIDE]"],
              ["Grievance officer", "[NAME & EMAIL — REQUIRED UNDER DPDP ACT, 2023]"],
              ["FSSAI", FSSAI_PLACEHOLDER],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-4">
                <dt className="label text-muted-foreground">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </>
  );
}
