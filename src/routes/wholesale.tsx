import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { sendContactEmail } from "@/lib/send-email";

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
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const business = (form.elements.namedItem("business") as HTMLInputElement)?.value || "";
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const city = (form.elements.namedItem("city") as HTMLInputElement)?.value || "";
    const msg = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    setSending(true);
    setStatusMsg("");

    try {
      const res = await sendContactEmail({
        data: {
          name,
          email,
          message: `Business: ${business}\nPhone: ${phone}\nCity: ${city}\n\nEnquiry:\n${msg}`,
          subjectPrefix: `Wholesale Trade Enquiry (${business})`,
        },
      });

      setStatusMsg(`Thank you, ${name}! Your trade enquiry for ${business} has been sent directly to ${res.recipient || "vishwajitchavan123@gmail.com"}.`);
      form.reset();
    } catch (err) {
      console.error(err);
      setStatusMsg("Failed to send wholesale enquiry via backend mail service. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Wholesale"
        title="For kitchens and counters."
        lede="Regular supply, trade pricing and cut-to-order wheels for restaurants, hotels, cafés and retailers."
      />
      <div className="container-x grid gap-16 pb-12 lg:grid-cols-[1fr_1fr]">
        <form className="grid gap-8" onSubmit={handleSubmit}>
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
              disabled={sending}
              className="label bg-ink px-8 py-4 text-background transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {sending ? "Sending enquiry..." : "Send enquiry"}
            </button>
            <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
              {statusMsg
                ? statusMsg
                : "Trade enquiries are sent directly from backend server to vishwajitchavan123@gmail.com."}
            </p>
          </div>
        </form>

        <aside className="text-sm">
          <h2 className="label text-muted-foreground">Trade Notes</h2>
          <dl className="mt-4 grid gap-6">
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Minimum order</dt>
              <dd className="mt-1 font-serif text-lg text-foreground">
                5 kg across varieties <span className="text-muted-foreground font-sans text-xs">or</span> 1 whole wheel
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Lead time</dt>
              <dd className="mt-1 leading-relaxed text-foreground/90">
                48 hours for fresh cheeses &bull; 3–5 days for cut-to-order wheels
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Trade pricing &amp; Billing</dt>
              <dd className="mt-1 leading-relaxed text-foreground/90">
                Tiered B2B pricing catalogue &bull; GST invoice issued on all orders
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Cold-chain dispatch</dt>
              <dd className="mt-1 leading-relaxed text-foreground/90">
                Temperature-controlled delivery windows scheduled across India
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Direct Trade Desk</dt>
              <dd className="mt-2 space-y-1">
                <p>
                  <a href="tel:+919561157885" className="link-underline font-medium text-foreground">
                    +91 95611 57885
                  </a>
                </p>
                <p>
                  <a href="mailto:vishwajitchavan123@gmail.com" className="link-underline font-medium text-foreground">
                    vishwajitchavan123@gmail.com
                  </a>
                </p>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </>
  );
}
