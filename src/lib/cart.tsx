/**
 * Frontend cart architecture only.
 * No payment gateway, no order capture, no inventory reservation is connected.
 * Checkout is intentionally a non-functional, clearly-labelled stub.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export interface CartLine {
  productId: string;
  weight: number;
  quantity: number;
  /** Gifting flow (frontend architecture only). */
  gift?: { note: string };
}

interface CartApi {
  lines: CartLine[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (productId: string, weight: number, quantity?: number) => void;
  setQuantity: (productId: string, weight: number, quantity: number) => void;
  remove: (productId: string, weight: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  resolve: (line: CartLine) => { product: Product; price: number } | null;
}

const CartContext = createContext<CartApi | null>(null);
const KEY = "cheeseo.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const resolve = useCallback((line: CartLine) => {
    const product = products.find((p) => p.id === line.productId);
    if (!product) return null;
    const variant = product.variants.find((v) => v.weight === line.weight) ?? product.variants[0];
    if (!variant) return null;
    return { product, price: variant.price };
  }, []);

  const add = useCallback((productId: string, weight: number, quantity = 1) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.productId === productId && l.weight === weight);
      if (i === -1) return [...prev, { productId, weight, quantity }];
      const existing = prev[i];
      if (!existing) return prev;
      const next = [...prev];
      next[i] = { ...existing, quantity: existing.quantity + quantity };
      return next;
    });
    setOpen(true);
  }, []);

  const setQuantity = useCallback((productId: string, weight: number, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => !(l.productId === productId && l.weight === weight))
        : prev.map((l) =>
            l.productId === productId && l.weight === weight ? { ...l, quantity } : l,
          ),
    );
  }, []);

  const remove = useCallback((productId: string, weight: number) => {
    setLines((prev) => prev.filter((l) => !(l.productId === productId && l.weight === weight)));
  }, []);

  const value = useMemo<CartApi>(() => {
    const count = lines.reduce((n, l) => n + l.quantity, 0);
    const subtotal = lines.reduce((n, l) => {
      const r = resolve(l);
      return r ? n + r.price * l.quantity : n;
    }, 0);
    return {
      lines,
      open,
      setOpen,
      add,
      setQuantity,
      remove,
      clear: () => setLines([]),
      count,
      subtotal,
      resolve,
    };
  }, [lines, open, add, setQuantity, remove, resolve]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
