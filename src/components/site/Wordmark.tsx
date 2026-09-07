import { cn } from "@/lib/utils";
import trademarkLogo from "@/assets/logo.png";

interface WordmarkProps {
  className?: string;
  variant?: "logo" | "text" | "badge";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Wordmark({ className, variant = "logo", size = "md" }: WordmarkProps) {
  if (variant === "text") {
    return (
      <span className={cn("inline-flex items-baseline font-display leading-none", className)}>
        <span>CHEESE</span>
        <span aria-hidden="true" className="px-[0.06em] text-[0.7em] align-super opacity-60">
          &ldquo;
        </span>
        <span className="relative inline-flex items-center justify-center">
          <span className="sr-only">"O"</span>
          <span aria-hidden="true">O</span>
        </span>
        <span aria-hidden="true" className="px-[0.06em] text-[0.7em] align-super opacity-60">
          &rdquo;
        </span>
      </span>
    );
  }

  const sizeClasses = {
    sm: "h-10 w-auto",
    md: "h-14 w-auto",
    lg: "h-24 w-auto",
    xl: "h-40 md:h-56 w-auto",
  };

  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      <img
        src={trademarkLogo}
        alt="Cheese“O” — Artisanal • Premium • Timeless"
        className={cn("object-contain mix-blend-multiply transition-transform duration-300", sizeClasses[size])}
        loading="eager"
      />
    </span>
  );
}

