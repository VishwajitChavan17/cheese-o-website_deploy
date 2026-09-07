import type { Product } from "@/data/products";

function Dots({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-border py-4">
      <span className="label text-muted-foreground">{label}</span>
      <span className="flex items-center gap-2" role="img" aria-label={`${label}: ${value} of 5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            aria-hidden="true"
            className={
              i <= value
                ? "size-2.5 rounded-full bg-foreground"
                : "size-2.5 rounded-full border border-foreground/30"
            }
          />
        ))}
      </span>
    </div>
  );
}

export function TastingProfile({ product }: { product: Product }) {
  return (
    <div>
      <Dots label="Intensity" value={product.intensity} />
      <Dots label="Creaminess" value={product.creaminess} />
      <Dots label="Tanginess" value={product.tanginess} />
      <Dots label="Saltiness" value={product.saltiness} />
      <Dots label="Ageing" value={product.aging} />
      <div className="flex items-center justify-between gap-6 border-b border-border py-4">
        <span className="label text-muted-foreground">Texture</span>
        <span className="text-sm">{product.texture}</span>
      </div>
      <div className="flex items-center justify-between gap-6 py-4">
        <span className="label text-muted-foreground">Age</span>
        <span className="text-sm">{product.ageBand}</span>
      </div>
    </div>
  );
}
