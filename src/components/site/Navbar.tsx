import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/utils";

export const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/craft", label: "Our Craft" },
  { to: "/pairings", label: "Pairings" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500",
          scrolled
            ? "border-b border-border bg-background/95 py-3 backdrop-blur-sm"
            : "border-b border-transparent py-5",
        )}
      >
        <nav aria-label="Primary" className="container-x flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02]" aria-label="Cheese“O”, home">
            <Wordmark size={scrolled ? "sm" : "md"} className="transition-all duration-300" />
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="label link-underline"
                  activeProps={{ className: "label link-underline text-foreground/100" }}
                  inactiveProps={{ className: "label link-underline text-foreground/70" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="label inline-flex items-center gap-2 py-2 transition-opacity hover:opacity-60"
              aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
            >
              <ShoppingBag className="size-4" aria-hidden="true" strokeWidth={1.4} />
              <span className="tabular-nums">{count}</span>
            </button>
            <button
              type="button"
              onClick={() => setMenu(true)}
              className="label inline-flex items-center gap-2 py-2 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden="true" strokeWidth={1.4} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile: full-screen editorial menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-parchment transition-opacity duration-500 md:hidden",
          menu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menu}
      >
        <div className="container-x flex h-full flex-col py-5">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setMenu(false)}>
              <Wordmark size="md" />
            </Link>
            <button
              type="button"
              onClick={() => setMenu(false)}
              className="label inline-flex items-center gap-2 py-2"
              aria-label="Close menu"
            >
              <X className="size-5" aria-hidden="true" strokeWidth={1.4} />
            </button>
          </div>

          <ul className="mt-12 flex flex-col gap-2">
            {navLinks.map((l, i) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setMenu(false)}
                  className="block border-b border-border/70 py-4 font-display text-3xl sm:text-4xl leading-none"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pb-6 pt-8">
            {[
              { to: "/journal", label: "Journal" },
              { to: "/gift", label: "Gifting" },
              { to: "/wholesale", label: "Wholesale" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy", label: "Privacy" },
              { to: "/returns", label: "Guarantee" },
              { to: "/shipping", label: "Shipping" },
              { to: "/terms", label: "Terms" },
            ].map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setMenu(false)} className="label text-xs">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
