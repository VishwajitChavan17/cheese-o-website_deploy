import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const KEY = "cheeseo.consent.v1";

/** DPDP Act, 2023 style notice-and-choice banner. Analytics stay off until accepted. */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* ignore */
    }
  }, []);

  const decide = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-border bg-card/98 backdrop-blur-sm"
    >
      <div className="container-x flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
          We use essential cookies to run the store, and optional cookies to measure how the site is
          used. You can accept or keep only the essential ones. Read how we handle personal data
          under India&rsquo;s Digital Personal Data Protection Act, 2023 in our{" "}
          <Link to="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="label border border-border px-4 py-3 hover:bg-muted"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="label bg-ink px-4 py-3 text-background hover:opacity-90"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
