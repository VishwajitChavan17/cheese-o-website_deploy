import { useState } from "react";

/**
 * DEMO serviceability check.
 * No logistics API is connected — result is derived from a placeholder rule
 * so the UX can be reviewed. Replace with the courier serviceability API.
 */
const SERVICEABLE_PREFIXES = ["11", "40", "56", "60", "70", "50", "38", "41"];

export function PincodeChecker() {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState<null | { ok: boolean; message: string }>(null);

  return (
    <div className="border border-border p-5">
      <h3 className="label">Check cold-chain delivery</h3>
      <form
        className="mt-4 flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!/^\d{6}$/.test(pin)) {
            setResult({ ok: false, message: "Enter a valid 6-digit pincode." });
            return;
          }
          const ok = SERVICEABLE_PREFIXES.includes(pin.slice(0, 2));
          setResult({
            ok,
            message: ok
              ? "Deliverable in insulated packaging with ice packs. [DELIVERY WINDOW — CLIENT TO CONFIRM]"
              : "Not currently serviceable for perishable shipping to this pincode.",
          });
        }}
      >
        <label htmlFor="pincode" className="sr-only">
          Delivery pincode
        </label>
        <input
          id="pincode"
          inputMode="numeric"
          maxLength={6}
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
          placeholder="Pincode"
          className="w-full border-b border-foreground/40 bg-transparent py-2 text-sm outline-none focus:border-foreground"
        />
        <button
          type="submit"
          className="label shrink-0 border border-border px-4 py-2 hover:bg-muted"
        >
          Check
        </button>
      </form>
      <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
        {result ? result.message : "Order by Thursday for weekend delivery. [CUTOFF — TO CONFIRM]"}
      </p>
      <p className="mt-1 text-[0.7rem] text-muted-foreground/80">
        Demo check — logistics partner not yet connected.
      </p>
    </div>
  );
}
