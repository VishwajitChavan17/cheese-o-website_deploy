import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { pairings } from "@/data/pairings";
import { getProduct } from "@/data/products";
import { cn } from "@/lib/utils";

export function PairingExperience({ ids }: { ids?: string[] }) {
  const list = ids ? pairings.filter((p) => ids.includes(p.id)) : pairings;
  const [active, setActive] = useState(list[0]?.id ?? "");
  const current = list.find((p) => p.id === active) ?? list[0];
  if (!current) return null;
  const suggested = getProduct(current.tryWith);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <ul className="order-2 lg:order-1">
        {list.map((p) => {
          const isActive = p.id === current.id;
          return (
            <li key={p.id} className="border-b border-border first:border-t">
              <button
                type="button"
                onMouseEnter={() => setActive(p.id)}
                onFocus={() => setActive(p.id)}
                onClick={() => setActive(p.id)}
                aria-pressed={isActive}
                className="group flex w-full items-baseline justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-3xl transition-[opacity,transform] duration-500 md:text-4xl",
                    isActive ? "opacity-100" : "opacity-40 group-hover:opacity-70",
                  )}
                >
                  {p.name}
                </span>
                <span
                  className={cn(
                    "hidden max-w-xs text-sm text-muted-foreground transition-opacity duration-500 md:block",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                >
                  {p.note}
                </span>
              </button>
              {isActive ? (
                <p className="pb-5 text-sm text-muted-foreground md:hidden">{p.note}</p>
              ) : null}
            </li>
          );
        })}
      </ul>

      <figure className="order-1 lg:order-2">
        <div className="relative overflow-hidden bg-parchment">
          <img
            key={current.id}
            src={current.image}
            alt={current.alt}
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full object-cover motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700"
          />
        </div>
        {suggested ? (
          <figcaption className="mt-5 flex items-baseline justify-between gap-6">
            <span className="label text-muted-foreground">Try with</span>
            <Link
              to="/shop/$slug"
              params={{ slug: suggested.slug }}
              className="link-underline text-right font-display text-xl"
            >
              {suggested.name}
            </Link>
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
