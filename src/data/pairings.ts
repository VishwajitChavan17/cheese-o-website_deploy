import wine from "@/assets/pair-wine.jpg";
import honey from "@/assets/pair-honey.jpg";
import fruit from "@/assets/pair-fruit.jpg";
import bread from "@/assets/pair-bread.jpg";
import nuts from "@/assets/pair-nuts.jpg";
import coffee from "@/assets/pair-coffee.jpg";

export interface Pairing {
  id: string;
  name: string;
  note: string;
  image: string;
  alt: string;
  /** Slug of the suggested cheese from the demo catalogue. */
  tryWith: string;
}

/** DEMO CONTENT — pairing copy is editorial placeholder, client to review. */
export const pairings: Pairing[] = [
  {
    id: "wine",
    name: "Wine",
    note: "Tannin cuts fat. Fat softens tannin. The oldest agreement at the table.",
    image: wine,
    alt: "Glass of red wine beside a wedge of cheese on ivory linen",
    tryWith: "aged-cheddar",
  },
  {
    id: "honey",
    name: "Honey",
    note: "Sweetness meets salt, and the bite balances itself out.",
    image: honey,
    alt: "Honey drizzling from a wooden dipper onto a round of fresh cheese",
    tryWith: "plain-feta",
  },
  {
    id: "fruit",
    name: "Fruit",
    note: "Acid and water. Fruit resets the palate between wedges.",
    image: fruit,
    alt: "Figs, grapes and pears arranged on a stone board with cheese",
    tryWith: "ricotta",
  },
  {
    id: "bread",
    name: "Bread",
    note: "A sour crumb gives soft cheese something to stand on.",
    image: bread,
    alt: "Torn sourdough loaf with an open crumb on ivory linen",
    tryWith: "mozzarella",
  },
  {
    id: "nuts",
    name: "Nuts",
    note: "Toasted, never salted. They echo what ageing already put there.",
    image: nuts,
    alt: "Walnuts and almonds scattered on a dark stone surface",
    tryWith: "plain-gouda",
  },
  {
    id: "coffee",
    name: "Coffee",
    note: "Bitter and spicy warmth in the same mouthful. Try it once.",
    image: coffee,
    alt: "Cup of black filter coffee beside slices of cheese",
    tryWith: "chilli-gouda",
  },
];
