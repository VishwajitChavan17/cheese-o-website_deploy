/**
 * OFFICIAL CHEESE"O" CATALOGUE DATA
 *
 * 8 Artisanal Cheese Varieties:
 * - Ricotta
 * - Mozzarella
 * - Plain Feta
 * - Plain Gouda
 * - Aged Cheddar
 * - Chilli Gouda
 * - Pepper Gouda
 * - Chives Feta
 */

import ricottaImg from "@/assets/cheese-ricotta.jpg";
import mozzarellaImg from "@/assets/cheese-mozzarella.jpg";
import plainFetaImg from "@/assets/cheese-plain-feta.jpg";
import plainGoudaImg from "@/assets/cheese-plain-gouda.jpg";
import cheddarImg from "@/assets/cheese-cheddar.jpg";
import chilliGoudaImg from "@/assets/cheese-chilli-gouda.jpg";
import pepperGoudaImg from "@/assets/cheese-pepper-gouda.jpg";
import chivesFetaImg from "@/assets/cheese-chives-feta.jpg";

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
  isSpicedOrHerbed?: boolean;
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
  rating: { average: number | null; count: number };
}

export const products: Product[] = [
  {
    id: "p-ricotta",
    name: "Ricotta",
    slug: "ricotta",
    kind: "single",
    shortDescription: "Fluffy, soft, milky and delicate. Crafted from sweet whey and fresh milk.",
    description:
      "A fresh whey cheese with a pillowy, soft curd and sweet milky flavor. Perfect for spooning onto fresh bread or pairing with honey and fruits.",
    price: 300,
    weight: 100,
    variants: [
      { weight: 100, price: 300, stock: "in_stock" },
      { weight: 200, price: 600, stock: "in_stock" },
      { weight: 500, price: 1500, stock: "in_stock" },
    ],
    milkType: "Milk & Sweet Whey — Client to provide",
    cheeseType: "Fresh Whey Cheese",
    texture: "Soft",
    age: "Unaged",
    ageBand: "Fresh",
    intensity: 1,
    creaminess: 5,
    tanginess: 1,
    saltiness: 1,
    aging: 1,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "7 days refrigerated — Client to provide",
    storage: "Refrigerate at 2–4°C.",
    ingredients: ["Ingredients — Client to provide"],
    allergens: ["Allergen information — Client to provide"],
    crossContamination: "Allergen information — Client to provide",
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
      aroma: "Delicate, milky and fresh",
      first: "Soft and creamy",
      texture: "Light, moist and fluffy",
      finish: "Clean and gently sweet",
    },
    story: "Story — Client to provide",
    pairings: ["honey", "fruit", "bread"],
    image: ricottaImg,
    imageAlt: "Fresh white Ricotta cheese in a ceramic dish with olive oil",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-mozzarella",
    name: "Mozzarella",
    slug: "mozzarella",
    kind: "single",
    shortDescription: "Silken, elastic porcelain balls set in light brine. Pure milk sweetness.",
    description:
      "Traditional pasta filata cheese stretched by hand to form supple, juicy globes. Delivers a clean, fresh milk taste.",
    price: 300,
    weight: 100,
    variants: [
      { weight: 100, price: 300, stock: "in_stock" },
      { weight: 200, price: 600, stock: "in_stock" },
      { weight: 400, price: 1200, stock: "in_stock" },
    ],
    milkType: "Whole Milk — Client to provide",
    cheeseType: "Fresh Pasta Filata",
    texture: "Soft",
    age: "Unaged",
    ageBand: "Fresh",
    intensity: 1,
    creaminess: 4,
    tanginess: 1,
    saltiness: 2,
    aging: 1,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "7 days refrigerated — Client to provide",
    storage: "Refrigerate at 2–4°C in brine.",
    ingredients: ["Ingredients — Client to provide"],
    allergens: ["Allergen information — Client to provide"],
    crossContamination: "Allergen information — Client to provide",
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
      aroma: "Fresh milk and cream",
      first: "Clean and delicate",
      texture: "Soft, moist and supple",
      finish: "Fresh and milky",
    },
    story: "Story — Client to provide",
    pairings: ["bread", "fruit", "wine"],
    image: mozzarellaImg,
    imageAlt: "Fresh Mozzarella ball cut open revealing soft juicy curd",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-plain-feta",
    name: "Plain Feta",
    slug: "plain-feta",
    kind: "single",
    shortDescription: "Tangy, mineral, crumbly white block cured in sea salt brine.",
    description:
      "A classic brined white block cheese with a firm crumbly body and a sharp, refreshing salty tang.",
    price: 300,
    weight: 100,
    variants: [
      { weight: 100, price: 300, stock: "in_stock" },
      { weight: 200, price: 600, stock: "in_stock" },
    ],
    milkType: "Milk — Client to provide",
    cheeseType: "Brined White Block",
    texture: "Semi-soft",
    age: "2–4 weeks",
    ageBand: "Fresh",
    intensity: 3,
    creaminess: 3,
    tanginess: 4,
    saltiness: 4,
    aging: 2,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "14 days refrigerated — Client to provide",
    storage: "Refrigerate at 4–8°C.",
    ingredients: ["Ingredients — Client to provide"],
    allergens: ["Allergen information — Client to provide"],
    crossContamination: "Allergen information — Client to provide",
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
      aroma: "Lactic, briny and bright",
      first: "Sharp and salty",
      texture: "Crumbly and dense",
      finish: "Tangy and mineral",
    },
    story: "Story — Client to provide",
    pairings: ["bread", "fruit", "wine"],
    image: plainFetaImg,
    imageAlt: "Block of Plain Feta cheese with crumbly edges on dark slate",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-plain-gouda",
    name: "Plain Gouda",
    slug: "plain-gouda",
    kind: "single",
    shortDescription: "Smooth, buttery and mild with a subtle caramel finish.",
    description:
      "A classic washed-curd Dutch style wheel. Golden paste with small eyes and a smooth, sliceable texture.",
    price: 300,
    weight: 100,
    variants: [
      { weight: 100, price: 300, stock: "in_stock" },
      { weight: 200, price: 600, stock: "in_stock" },
      { weight: 500, price: 1500, stock: "in_stock" },
    ],
    milkType: "Milk — Client to provide",
    cheeseType: "Traditional Dutch Wheel",
    texture: "Semi-hard",
    age: "2–3 months",
    ageBand: "Young",
    intensity: 3,
    creaminess: 4,
    tanginess: 2,
    saltiness: 2,
    aging: 3,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "30 days refrigerated — Client to provide",
    storage: "Refrigerate at 4–8°C.",
    ingredients: ["Ingredients — Client to provide"],
    allergens: ["Allergen information — Client to provide"],
    crossContamination: "Allergen information — Client to provide",
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
      aroma: "Warm milk and sweet hay",
      first: "Buttery and rounded",
      texture: "Smooth and semi-hard",
      finish: "Gentle caramel notes",
    },
    story: "Story — Client to provide",
    pairings: ["bread", "honey", "nuts", "wine"],
    image: plainGoudaImg,
    imageAlt: "Golden wedge of Plain Gouda cheese with small eyes on a wooden board",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-aged-cheddar",
    name: "Aged Cheddar",
    slug: "aged-cheddar",
    kind: "single",
    shortDescription: "Sharp, nutty, crystalline texture with a rich, complex finish.",
    description:
      "Clothbound and aged until the paste tightens and develops delicate savory crunch crystals.",
    price: 300,
    weight: 100,
    variants: [
      { weight: 100, price: 300, stock: "in_stock" },
      { weight: 200, price: 600, stock: "in_stock" },
      { weight: 500, price: 1500, stock: "low_stock" },
    ],
    milkType: "Milk — Client to provide",
    cheeseType: "Clothbound Cheddar",
    texture: "Hard",
    age: "6+ months",
    ageBand: "Aged",
    intensity: 5,
    creaminess: 2,
    tanginess: 4,
    saltiness: 3,
    aging: 5,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "45 days refrigerated — Client to provide",
    storage: "Refrigerate at 4–8°C.",
    ingredients: ["Ingredients — Client to provide"],
    allergens: ["Allergen information — Client to provide"],
    crossContamination: "Allergen information — Client to provide",
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
      aroma: "Toasted nut, cellar oak and sharp curd",
      first: "Robust and savory",
      texture: "Firm, crumbly with fine crystals",
      finish: "Long, sharp and complex",
    },
    story: "Story — Client to provide",
    pairings: ["wine", "honey", "nuts", "bread"],
    image: cheddarImg,
    imageAlt: "Crumbly golden wedge of Aged Cheddar cheese on parchment paper",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-chilli-gouda",
    name: "Chilli Gouda",
    slug: "chilli-gouda",
    kind: "single",
    shortDescription: "Creamy Gouda infused with crushed red chilli flakes for a warm finish.",
    description:
      "Semi-hard wheel blended with crushed red chillies, balancing rich buttery milkiness with a lively spicy warmth.",
    price: 300,
    weight: 100,
    variants: [
      { weight: 100, price: 300, stock: "in_stock" },
      { weight: 200, price: 600, stock: "in_stock" },
    ],
    milkType: "Milk — Client to provide",
    cheeseType: "Red Chilli Infused Gouda",
    texture: "Semi-hard",
    age: "1–2 months",
    ageBand: "Young",
    isSpicedOrHerbed: true,
    intensity: 4,
    creaminess: 4,
    tanginess: 2,
    saltiness: 3,
    aging: 3,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "30 days refrigerated — Client to provide",
    storage: "Refrigerate at 4–8°C.",
    ingredients: ["Ingredients — Client to provide"],
    allergens: ["Allergen information — Client to provide"],
    crossContamination: "Allergen information — Client to provide",
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
      aroma: "Warm milk and dried chilli heat",
      first: "Rich and creamy",
      texture: "Smooth semi-hard paste with chilli flecks",
      finish: "Warm and lingering chilli kick",
    },
    story: "Story — Client to provide",
    pairings: ["bread", "honey", "coffee"],
    image: chilliGoudaImg,
    imageAlt: "Wedge of semi-hard golden Gouda cheese infused with red chilli flakes",
    featured: true,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-pepper-gouda",
    name: "Pepper Gouda",
    slug: "pepper-gouda",
    kind: "single",
    shortDescription: "Smooth Gouda studded with cracked black peppercorns for a sharp aromatic bite.",
    description:
      "Semi-hard Gouda wheel speckled with crushed black peppercorns. Rich, comforting and aromatic.",
    price: 300,
    weight: 100,
    variants: [
      { weight: 100, price: 300, stock: "in_stock" },
      { weight: 200, price: 600, stock: "in_stock" },
    ],
    milkType: "Milk — Client to provide",
    cheeseType: "Black Peppercorn Gouda",
    texture: "Semi-hard",
    age: "1–2 months",
    ageBand: "Young",
    isSpicedOrHerbed: true,
    intensity: 4,
    creaminess: 4,
    tanginess: 2,
    saltiness: 3,
    aging: 3,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "30 days refrigerated — Client to provide",
    storage: "Refrigerate at 4–8°C.",
    ingredients: ["Ingredients — Client to provide"],
    allergens: ["Allergen information — Client to provide"],
    crossContamination: "Allergen information — Client to provide",
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
      aroma: "Aromatic black pepper and sweet cream",
      first: "Buttery and savory",
      texture: "Smooth paste with pepper crunch",
      finish: "Piquant and peppery",
    },
    story: "Story — Client to provide",
    pairings: ["bread", "nuts", "wine"],
    image: pepperGoudaImg,
    imageAlt: "Wedge of Gouda cheese studded with cracked black peppercorns",
    featured: false,
    rating: { average: null, count: 0 },
  },
  {
    id: "p-chives-feta",
    name: "Chives Feta",
    slug: "chives-feta",
    kind: "single",
    shortDescription: "Tangy feta block blended with fragrant chopped garden chives.",
    description:
      "Brined white feta infused with fine green garden chives. Adds a fresh herb note to salty tang.",
    price: 300,
    weight: 100,
    variants: [
      { weight: 100, price: 300, stock: "in_stock" },
      { weight: 200, price: 600, stock: "in_stock" },
    ],
    milkType: "Milk — Client to provide",
    cheeseType: "Garden Chives Feta",
    texture: "Semi-soft",
    age: "2–4 weeks",
    ageBand: "Fresh",
    isSpicedOrHerbed: true,
    intensity: 3,
    creaminess: 3,
    tanginess: 4,
    saltiness: 3,
    aging: 2,
    vegetarian: true,
    pasteurized: true,
    country: "India",
    shelfLife: "14 days refrigerated — Client to provide",
    storage: "Refrigerate at 4–8°C.",
    ingredients: ["Ingredients — Client to provide"],
    allergens: ["Allergen information — Client to provide"],
    crossContamination: "Allergen information — Client to provide",
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
      aroma: "Fresh cut chives and cool curd",
      first: "Herbaceous and bright",
      texture: "Crumbly and soft",
      finish: "Savory and oniony-fresh",
    },
    story: "Story — Client to provide",
    pairings: ["bread", "fruit", "wine"],
    image: chivesFetaImg,
    imageAlt: "Block of white Feta cheese flecked with fresh green chives",
    featured: false,
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

export const FSSAI_PLACEHOLDER = "FSSAI Lic. No. 11526999000123";
