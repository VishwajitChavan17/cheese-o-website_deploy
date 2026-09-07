import { Link } from "@tanstack/react-router";
import { X, Snowflake } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/data/products";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const { open, setOpen, lines, resolve, setQuantity, remove, subtotal, count } = useCart();
  const [gift, setGift] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-[70] bg-ink/40 transition-opacity duration-500",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        aria-hidden={!open}
        className={cn(
          "fixed right-0 top-0 z-[80] flex h-dvh w-full max-w-md flex-col bg-background shadow-soft transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="label">Your board ({count})</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="p-2 hover:opacity-60"
          >
            <X className="size-5" strokeWidth={1.4} aria-hidden="true" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-display text-3xl leading-tight">Nothing on the board yet.</p>
            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="label mt-8 border-b border-foreground pb-1"
            >
              Explore the cheeses
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {lines.map((line) => {
                const r = resolve(line);
                if (!r) return null;
                return (
                  <li key={`${line.productId}-${line.weight}`} className="flex gap-4 py-6">
                    <img
                      src={r.product.image}
                      alt={r.product.imageAlt}
                      loading="lazy"
                      width={160}
                      height={200}
                      className="h-24 w-20 shrink-0 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm">{r.product.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{line.weight} g</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-border">
                          <button
                            type="button"
                            className="px-3 py-1 text-sm hover:bg-muted"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              setQuantity(line.productId, line.weight, line.quantity - 1)
                            }
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            className="px-3 py-1 text-sm hover:bg-muted"
                            aria-label="Increase quantity"
                            onClick={() =>
                              setQuantity(line.productId, line.weight, line.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm tabular-nums">
                          {formatINR(r.price * line.quantity)}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(line.productId, line.weight)}
                        className="mt-3 text-xs text-muted-foreground underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-border px-6 py-6">
              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={gift}
                  onChange={(e) => setGift(e.target.checked)}
                  className="mt-1 size-4 accent-[oklch(0.235_0.021_60)]"
                />
                <span>
                  Send as a gift
                  <span className="block text-xs text-muted-foreground">
                    Gift note and wrap are collected at checkout.
                  </span>
                </span>
              </label>
              {gift ? (
                <>
                  <label htmlFor="giftnote" className="sr-only">
                    Gift note
                  </label>
                  <textarea
                    id="giftnote"
                    rows={2}
                    placeholder="Write a short note…"
                    className="mt-3 w-full border border-border bg-card p-3 text-sm outline-none focus:border-foreground"
                  />
                </>
              ) : null}

              <p className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
                <Snowflake className="mt-0.5 size-3.5 shrink-0" strokeWidth={1.4} aria-hidden />
                Ships in insulated packaging with ice packs.{" "}
                <span className="whitespace-nowrap">[DELIVERY WINDOW — TBC]</span>
              </p>

              <div className="mt-5 flex items-baseline justify-between">
                <span className="label">Subtotal</span>
                <span className="font-display text-2xl tabular-nums">{formatINR(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Inclusive of all taxes. Shipping calculated at checkout.
              </p>

              <button
                type="button"
                disabled
                title="Payment gateway not connected in this build"
                className="mt-5 w-full bg-ink px-6 py-4 text-background disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="label">Checkout</span>
              </button>
              <p className="mt-2 text-center text-[0.7rem] text-muted-foreground">
                Demo build — UPI / cards / net banking not yet connected.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
