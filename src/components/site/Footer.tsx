import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Wordmark } from "./Wordmark";
import { FSSAI_PLACEHOLDER } from "@/data/products";

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Cheeses" },
      { to: "/gift", label: "Gifting" },
      { to: "/wholesale", label: "Wholesale" },
    ],
  },
  {
    title: "Brand",
    links: [
      { to: "/craft", label: "Our Craft" },
      { to: "/pairings", label: "Pairings" },
      { to: "/about", label: "About" },
      { to: "/journal", label: "Journal" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/faq", label: "FAQ" },
      { to: "/shipping", label: "Shipping & Cold Chain" },
      { to: "/returns", label: "Quality Guarantee" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
    ],
  },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="mt-32 border-t border-border bg-parchment">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link to="/" className="inline-block">
              <Wordmark size="lg" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Crafted slowly. Savoured completely.
            </p>

            <div className="mt-12 max-w-md">
              <h2 className="label">Join the table</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                New wheels, small batches, and the occasional pairing note.
              </p>
              <form
                className="mt-5 flex items-center gap-3 border-b border-foreground/40 pb-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Newsletter capture is not connected to a mailing provider yet.
                  setDone(true);
                }}
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button type="submit" className="label shrink-0 py-2 hover:opacity-60">
                  Sign up
                </button>
              </form>
              <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
                {done
                  ? "Thanks — signup is not connected to a mailing provider yet (demo)."
                  : "We use your email only to send Cheese\u201cO\u201d updates. You can unsubscribe anytime. See our Privacy Policy (DPDP Act, 2023)."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="label text-muted-foreground">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="link-underline text-sm">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{FSSAI_PLACEHOLDER}</p>
          <div className="flex gap-6">
            <a href="#" className="link-underline" aria-label="Instagram (link placeholder)">
              Instagram
            </a>
            <a href="#" className="link-underline" aria-label="Facebook (link placeholder)">
              Facebook
            </a>
          </div>
          <p>© {new Date().getFullYear()} Cheese&ldquo;O&rdquo;. Demo build.</p>
        </div>
      </div>
    </footer>
  );
}
