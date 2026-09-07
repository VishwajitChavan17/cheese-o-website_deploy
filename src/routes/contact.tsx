import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { FSSAI_PLACEHOLDER } from "@/data/products";
import { sendContactEmail } from "@/lib/send-email";

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
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const order = (form.elements.namedItem("order") as HTMLInputElement)?.value || "";
    const msg = (form.elements.namedItem("msg") as HTMLTextAreaElement)?.value || "";

    setSending(true);
    setStatusMsg("");

    try {
      const res = await sendContactEmail({
        data: {
          name,
          email,
          order,
          message: msg,
          subjectPrefix: "Contact Form Message",
        },
      });

      setSent(true);
      setStatusMsg(`Thank you, ${name}! Your message has been sent directly to ${res.recipient || "vishwajitchavan123@gmail.com"}.`);
      form.reset();
    } catch (err) {
      console.error(err);
      setStatusMsg("Failed to send message via backend mail service. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader eyebrow="Contact" title="Say hello." />
      <div className="container-x grid gap-16 pb-12 lg:grid-cols-2">
        <form className="grid gap-8" onSubmit={handleSubmit}>
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
                name={f.id}
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
              name="msg"
              rows={4}
              required
              className="mt-2 w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={sending}
              className="label bg-ink px-8 py-4 text-background transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {sending ? "Sending email..." : "Send message"}
            </button>
            <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
              {statusMsg
                ? statusMsg
                : "Messages are sent directly from backend server to vishwajitchavan123@gmail.com."}
            </p>
          </div>
        </form>

        <aside className="text-sm">
          <dl className="grid gap-6">
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Testing &amp; Support Email</dt>
              <dd className="mt-2">
                <a href="mailto:vishwajitchavan123@gmail.com" className="link-underline font-medium">
                  vishwajitchavan123@gmail.com
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Phone</dt>
              <dd className="mt-2">
                <a href="tel:+919561157885" className="link-underline">
                  +91 95611 57885
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Address</dt>
              <dd className="mt-2 leading-relaxed">
                Grape Embassy &amp; Zatka Misal,
                <br />
                Nashik — 422003, Maharashtra, India
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">Grievance Officer</dt>
              <dd className="mt-2">
                Tejas Pingle (
                <a href="mailto:tejaspingle7885@gmail.com" className="link-underline">
                  tejaspingle7885@gmail.com
                </a>
                )
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="label text-muted-foreground">FSSAI</dt>
              <dd className="mt-2">{FSSAI_PLACEHOLDER}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </>
  );
}
