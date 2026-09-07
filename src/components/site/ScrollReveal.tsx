import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

/** Lightweight IntersectionObserver reveal — CSS-driven, no animation library. */
export function ScrollReveal({ children, className, delay = 0, as }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
