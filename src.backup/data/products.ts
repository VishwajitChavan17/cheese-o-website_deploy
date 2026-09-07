/**
 * DEMO / SAMPLE CATALOGUE — NOT PRODUCTION DATA.
 *
 * Every value below is placeholder content for design and development only.
 * Prices, weights, nutrition, ingredients, aging and origin must be replaced
 * with client-supplied data before launch. Image assets in src/assets are
 * temporary art direction references, not client photography.
 *
 * v1 content governance decision: hard-coded typed JSON in this file.
 * Phase 2: move to a headless CMS (Sanity/Contentful) — the Product type below
 * is the contract the CMS schema should mirror so no component rewrite is needed.
 */

import cheese1 from "@/assets/cheese-1.jpg";
import cheese2 from "@/assets/cheese-2.jpg";
import cheese3 from "@/assets/cheese-3.jpg";
import cheese4 from "@/assets/cheese-4.jpg";
import cheese5 from "@/assets/cheese-5.jpg";

export type StockState = "in_stock" | "low_stock" | "sold_out";
export type ProductKind = "single" | "board";

export interface ProductVariant {
  /** Grams. */
  weight: number;
  /** INR, inclusive of applicable taxes (Indian retail convention). */
  price: number;
  stock: StockState;
}

export interface NutritionPer100g {
  energyKcal: number;
  protein: number;
  carbohydrate: number;
  totalSugars: number;
  addedSugars: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  kind: ProductKind;
  shortDescription: string;
  description: string;
  /** Base price shown in listings — mirrors the default variant. */
  price: number;
  weight: number;
  variants: ProductVariant[];
  milkType: string;
  cheeseType: string;
  texture: "Soft" | "Semi-soft" | "Semi-hard" | "Hard";
  age: string;
  ageBand: "Fresh" | "Young" | "Aged";
  /** 1–5 scales for the tasting profile. */
  intensity: number;
  creaminess: number;
  tanginess: number;
  saltiness: number;
  aging: number;
  vegetarian: boolean;
  pasteurized: boolean;
  country: string;
  shelfLife: string;
  storage: string;
  ingredients: string[];
  allergens: string[];
  crossContamination: string;
  nutrition: NutritionPer100g;
  taste: { aroma: string; first: string; texture: string; finish: string };
  story: string;
  pairings: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  /** Placeholder review structure — no live review data at launch. */
  rating: { average: number | null; count: number };
}

export const products: Product[] = [
  {
    id: "p-001",
    name: "Wheel No. 01 — Nilgiri Tomme",
    slug: "nilgiri-tomme",
    kind: "single",
    shortDescription: "Nutty, grassy, quietly firm. A slow wheel for slow evenings.",
    description:
      "[PRODUCT COPY — CLIENT TO PROVIDE] A natural-rind wheel pressed and turned by hand, then left to settle until the paste tightens and the flavour turns from milk to meadow.",
    price: 890,
    weight: 200,
    variants: [
      { weight: 200, price: 890, stock: "in_stock" },
      { weight: 500, price: 1990, stock: "low_stock" },
    ],
    milkType: "[MILK TYPE — CLIENT TO PROVIDE]",
    cheeseType: "Tomme style",
    texture: "Semi-hard",
    age: "[AGEING PERIOD — CLIENT TO PROVIDE]",
    ageBand: "Aged",
    intensity: 4,
    creaminess: 2,
    tanginess: 3,
    saltiness: 3,
    aging: 4,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "[SHELF LIFE — CLIENT TO PROVIDE]",
    storage: "Refrigerate at 4–8°C. Keep wrapped in cheese paper.",
    ingredients: ["Milk", "Salt", "Starter cultures", "Microbial rennet"],
    allergens: ["Milk", "Lactose"],
    crossContamination: "[FACILITY ALLERGEN STATEMENT — CLIENT TO PROVIDE]",
    nutrition: {
      energyKcal: 0,
      protein: 0,
      carbohydrate: 0,
      totalSugars: 0,
      addedSugars: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 0,
    },
    taste: {
      aroma: "Cellar air, warm hay, a trace of toasted cashew.",
      first: "Dry, mineral, restrained.",
      texture: "Firm at the edge, yielding at the centre.",
      finish: "Long, savoury, faintly sweet.",
    },
    story:
      "[STORY — CLIENT TO PROVIDE] Placeholder narrative for the origin, the maker and the intent behind this wheel.",
    pairings: ["wine", "honey", "nuts", "bread"],
    image: cheese2,
    imageAlt: "Wedge of aged natural-rind tomme style cheese on a dark stone slab",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-002",
    name: "Wheel No. 02 — Bloom",
    slug: "bloom",
    kind: "single",
    shortDescription: "Soft, buttered, gently mushroomy. Spoonable at room temperature.",
    description:
      "[PRODUCT COPY — CLIENT TO PROVIDE] A bloomy-rind round that softens from the rind inward as it matures.",
    price: 740,
    weight: 150,
    variants: [
      { weight: 150, price: 740, stock: "in_stock" },
      { weight: 300, price: 1420, stock: "in_stock" },
    ],
    milkType: "[MILK TYPE — CLIENT TO PROVIDE]",
    cheeseType: "Bloomy rind",
    texture: "Soft",
    age: "[AGEING PERIOD — CLIENT TO PROVIDE]",
    ageBand: "Young",
    intensity: 2,
    creaminess: 5,
    tanginess: 2,
    saltiness: 2,
    aging: 2,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "[SHELF LIFE — CLIENT TO PROVIDE]",
    storage: "Refrigerate at 4–8°C. Rest 30 minutes before serving.",
    ingredients: ["Milk", "Cream", "Salt", "Starter cultures", "Microbial rennet"],
    allergens: ["Milk", "Lactose"],
    crossContamination: "[FACILITY ALLERGEN STATEMENT — CLIENT TO PROVIDE]",
    nutrition: {
      energyKcal: 0,
      protein: 0,
      carbohydrate: 0,
      totalSugars: 0,
      addedSugars: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 0,
    },
    taste: {
      aroma: "Warm butter and damp forest floor.",
      first: "Soft, milky, immediately rich.",
      texture: "Silken, close to molten at the centre.",
      finish: "Clean, short, quietly savoury.",
    },
    story: "[STORY — CLIENT TO PROVIDE]",
    pairings: ["bread", "fruit", "honey", "coffee"],
    image: cheese1,
    imageAlt: "Wedge of soft bloomy rind cheese resting on cream parchment",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-003",
    name: "Wheel No. 03 — Fresh Curd in Oil",
    slug: "fresh-curd-in-oil",
    kind: "single",
    shortDescription: "Bright, lactic, herb-lifted. The youngest thing we make.",
    description: "[PRODUCT COPY — CLIENT TO PROVIDE] A fresh curd set in oil with herbs.",
    price: 520,
    weight: 180,
    variants: [{ weight: 180, price: 520, stock: "in_stock" }],
    milkType: "[MILK TYPE — CLIENT TO PROVIDE]",
    cheeseType: "Fresh",
    texture: "Soft",
    age: "Unaged",
    ageBand: "Fresh",
    intensity: 1,
    creaminess: 4,
    tanginess: 4,
    saltiness: 2,
    aging: 1,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "[SHELF LIFE — CLIENT TO PROVIDE]",
    storage: "Refrigerate at 4–8°C. Consume soon after opening.",
    ingredients: ["Milk", "Salt", "Starter cultures", "Sunflower oil", "Herbs"],
    allergens: ["Milk", "Lactose"],
    crossContamination: "[FACILITY ALLERGEN STATEMENT — CLIENT TO PROVIDE]",
    nutrition: {
      energyKcal: 0,
      protein: 0,
      carbohydrate: 0,
      totalSugars: 0,
      addedSugars: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 0,
    },
    taste: {
      aroma: "Cold cream and cut herbs.",
      first: "Bright, lactic, clean.",
      texture: "Loose, spreadable, cool.",
      finish: "Short and refreshing.",
    },
    story: "[STORY — CLIENT TO PROVIDE]",
    pairings: ["bread", "fruit", "wine"],
    image: cheese3,
    imageAlt: "Fresh white cheese set in olive oil with herbs in a shallow dish",
    featured: false,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-004",
    name: "Wheel No. 04 — Blue Hour",
    slug: "blue-hour",
    kind: "single",
    shortDescription: "Sharp, mineral, unapologetic. For the end of the board.",
    description: "[PRODUCT COPY — CLIENT TO PROVIDE] A blue-veined cheese, needled and rested.",
    price: 980,
    weight: 150,
    variants: [
      { weight: 150, price: 980, stock: "low_stock" },
      { weight: 300, price: 1880, stock: "sold_out" },
    ],
    milkType: "[MILK TYPE — CLIENT TO PROVIDE]",
    cheeseType: "Blue",
    texture: "Semi-soft",
    age: "[AGEING PERIOD — CLIENT TO PROVIDE]",
    ageBand: "Aged",
    intensity: 5,
    creaminess: 3,
    tanginess: 4,
    saltiness: 4,
    aging: 4,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "[SHELF LIFE — CLIENT TO PROVIDE]",
    storage: "Refrigerate at 4–8°C, wrapped in foil.",
    ingredients: ["Milk", "Salt", "Starter cultures", "Penicillium roqueforti", "Microbial rennet"],
    allergens: ["Milk", "Lactose"],
    crossContamination: "[FACILITY ALLERGEN STATEMENT — CLIENT TO PROVIDE]",
    nutrition: {
      energyKcal: 0,
      protein: 0,
      carbohydrate: 0,
      totalSugars: 0,
      addedSugars: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 0,
    },
    taste: {
      aroma: "Wet stone, cream, a lick of iron.",
      first: "Salt first, then sweetness.",
      texture: "Dense, fudgy, crumbling at the edge.",
      finish: "Very long. Peppery.",
    },
    story: "[STORY — CLIENT TO PROVIDE]",
    pairings: ["honey", "wine", "nuts", "fruit"],
    image: cheese4,
    imageAlt: "Blue veined artisanal cheese wedge on parchment paper",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-005",
    name: "Wheel No. 05 — Smoke",
    slug: "smoke",
    kind: "single",
    shortDescription: "Cold-smoked, amber-rinded, deeply savoury.",
    description: "[PRODUCT COPY — CLIENT TO PROVIDE] A semi-hard wheel finished with cold smoke.",
    price: 860,
    weight: 200,
    variants: [{ weight: 200, price: 860, stock: "in_stock" }],
    milkType: "[MILK TYPE — CLIENT TO PROVIDE]",
    cheeseType: "Smoked",
    texture: "Semi-hard",
    age: "[AGEING PERIOD — CLIENT TO PROVIDE]",
    ageBand: "Young",
    intensity: 4,
    creaminess: 3,
    tanginess: 2,
    saltiness: 3,
    aging: 3,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "[SHELF LIFE — CLIENT TO PROVIDE]",
    storage: "Refrigerate at 4–8°C. Keep wrapped.",
    ingredients: ["Milk", "Salt", "Starter cultures", "Microbial rennet"],
    allergens: ["Milk", "Lactose"],
    crossContamination: "[FACILITY ALLERGEN STATEMENT — CLIENT TO PROVIDE]",
    nutrition: {
      energyKcal: 0,
      protein: 0,
      carbohydrate: 0,
      totalSugars: 0,
      addedSugars: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 0,
    },
    taste: {
      aroma: "Embers and warm milk.",
      first: "Savoury, rounded, immediate.",
      texture: "Supple, slightly elastic.",
      finish: "Smoke lingers, then clears.",
    },
    story: "[STORY — CLIENT TO PROVIDE]",
    pairings: ["coffee", "bread", "wine", "nuts"],
    image: cheese5,
    imageAlt: "Block of smoked semi-hard cheese with amber rind on dark linen",
    featured: false,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-006",
    name: "The Tasting Board",
    slug: "the-tasting-board",
    kind: "board",
    shortDescription: "Four wheels, one board. Built to be opened with company.",
    description:
      "[BUNDLE CONTENTS — CLIENT TO CONFIRM] A curated selection assembled from the current maturing stock.",
    price: 2650,
    weight: 600,
    variants: [{ weight: 600, price: 2650, stock: "in_stock" }],
    milkType: "Mixed",
    cheeseType: "Curated selection",
    texture: "Semi-soft",
    age: "Mixed",
    ageBand: "Aged",
    intensity: 3,
    creaminess: 4,
    tanginess: 3,
    saltiness: 3,
    aging: 3,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "[SHELF LIFE — CLIENT TO PROVIDE]",
    storage: "Refrigerate at 4–8°C.",
    ingredients: ["See individual cheeses"],
    allergens: ["Milk", "Lactose"],
    crossContamination: "[FACILITY ALLERGEN STATEMENT — CLIENT TO PROVIDE]",
    nutrition: {
      energyKcal: 0,
      protein: 0,
      carbohydrate: 0,
      totalSugars: 0,
      addedSugars: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 0,
    },
    taste: {
      aroma: "A room's worth of it.",
      first: "Start fresh, end blue.",
      texture: "Soft to firm, in order.",
      finish: "Depends where you stop.",
    },
    story: "[STORY — CLIENT TO PROVIDE]",
    pairings: ["wine", "bread", "fruit", "honey", "nuts"],
    image: cheese1,
    imageAlt: "Selection of artisanal cheeses arranged for a tasting board",
    featured: true,
    rating: { average: null, count: 0 },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatINR = (paise: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(paise);

export const FSSAI_PLACEHOLDER = "[FSSAI LIC. NO. — CLIENT TO PROVIDE]";
