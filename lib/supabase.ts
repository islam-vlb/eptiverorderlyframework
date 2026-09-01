// NOTE: despite the filename, this is a local static data module — no external
// database connection is used. It defines the site's 2 products and their
// purchasable variants (16 price points total across both products).

export interface ProductVariant {
  id: string;
  label: string;
  detail: string; // container + unit counts always shown together
  price: number;
  section: string;
  isBundle: boolean;
  kitCount?: number;
  boxCount?: number;
  unitCount?: number; // total sachets across all boxes
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: "device" | "supplement";
  unitNoun: string;
  heroImageAlt: string;
  variants: ProductVariant[];
}

const IMG = "/images/products/eptiver";

export const PRODUCTS: Product[] = [
  {
    id: "food-sensitivity-test-kit",
    slug: "food-sensitivity-test-kit",
    name: "Food Sensitivity Test Kit",
    shortName: "Food Sensitivity Test Kit",
    tagline:
      "An at-home kit that uses a quick finger-prick sample and an included test card you read yourself — a general overview, nothing sent away.",
    category: "device",
    unitNoun: "Kit",
    heroImageAlt: "Food Sensitivity Test Kit — product image",
    variants: [
      { id: "kit-1", label: "Food Sensitivity Test Kit — 1 Kit", detail: "1 Kit", price: 47.89, section: "Testing Options", isBundle: false, kitCount: 1, image: `${IMG}/kit-1.jpg` },
      { id: "kit-1-sachets-10", label: "Food Sensitivity Test Kit + 1 Box — 10 Sachets", detail: "1 Kit + 1 Box (10 Sachets)", price: 49.76, section: "Testing Options", isBundle: true, kitCount: 1, boxCount: 1, unitCount: 10, image: `${IMG}/kit-1-sachets-10.jpg` },
      { id: "kit-1-sachets-20", label: "Food Sensitivity Test Kit + 1 Box — 20 Sachets", detail: "1 Kit + 1 Box (20 Sachets)", price: 53.45, section: "Testing Options", isBundle: true, kitCount: 1, boxCount: 1, unitCount: 20, image: `${IMG}/kit-1-sachets-20.jpg` },
      { id: "kit-1-sachets-30", label: "Food Sensitivity Test Kit + 1 Box — 30 Sachets", detail: "1 Kit + 1 Box (30 Sachets)", price: 54.95, section: "Testing Options", isBundle: true, kitCount: 1, boxCount: 1, unitCount: 30, image: `${IMG}/kit-1-sachets-30.jpg` },
      { id: "kit-2", label: "Food Sensitivity Test Kits — 2 Kits", detail: "2 Kits", price: 86.88, section: "Multiple Kit Options", isBundle: false, kitCount: 2, image: `${IMG}/kit-2.jpg` },
      { id: "kit-2-sachets-10", label: "Food Sensitivity Test Kits — 2 Kits + 1 Box — 10 Sachets", detail: "2 Kits + 1 Box (10 Sachets)", price: 87.64, section: "Multiple Kit Options", isBundle: true, kitCount: 2, boxCount: 1, unitCount: 10, image: `${IMG}/kit-2-sachets-10.jpg` },
      { id: "kit-2-sachets-20", label: "Food Sensitivity Test Kits — 2 Kits + 1 Box — 20 Sachets", detail: "2 Kits + 1 Box (20 Sachets)", price: 87.76, section: "Multiple Kit Options", isBundle: true, kitCount: 2, boxCount: 1, unitCount: 20, image: `${IMG}/kit-2-sachets-20.jpg` },
      { id: "kit-2-sachets-30", label: "Food Sensitivity Test Kits — 2 Kits + 1 Box — 30 Sachets", detail: "2 Kits + 1 Box (30 Sachets)", price: 94.82, section: "Multiple Kit Options", isBundle: true, kitCount: 2, boxCount: 1, unitCount: 30, image: `${IMG}/kit-2-sachets-30.jpg` },
      { id: "kit-3", label: "Food Sensitivity Test Kits — 3 Kits", detail: "3 Kits", price: 96.95, section: "Multiple Kit Options", isBundle: false, kitCount: 3, image: `${IMG}/kit-3.jpg` },
    ],
  },
  {
    id: "digestive-wellness-drink-mix",
    slug: "digestive-wellness-drink-mix",
    name: "Digestive Wellness Drink Mix",
    shortName: "Digestive Wellness Drink Mix",
    tagline:
      "A mild ginger-citrus powder in single-serve sachets that provides supplemental support for your normal digestive-wellness routine.",
    category: "supplement",
    unitNoun: "Sachets",
    heroImageAlt: "Digestive Wellness Drink Mix — product image",
    variants: [
      { id: "sachets-10", label: "Digestive Wellness Drink Mix — 1 Box (10 Sachets)", detail: "1 Box — 10 Sachets", price: 9.99, section: "Regular Options", isBundle: false, boxCount: 1, unitCount: 10, image: `${IMG}/sachets-10.jpg` },
      { id: "sachets-20", label: "Digestive Wellness Drink Mix — 1 Box (20 Sachets)", detail: "1 Box — 20 Sachets", price: 13.95, section: "Regular Options", isBundle: false, boxCount: 1, unitCount: 20, image: `${IMG}/sachets-20.jpg` },
      { id: "sachets-30", label: "Digestive Wellness Drink Mix — 1 Box (30 Sachets)", detail: "1 Box — 30 Sachets", price: 14.75, section: "Regular Options", isBundle: false, boxCount: 1, unitCount: 30, image: `${IMG}/sachets-30.jpg` },
      { id: "sachets-40", label: "Digestive Wellness Drink Mix — 1 Box (40 Sachets)", detail: "1 Box — 40 Sachets", price: 17.95, section: "Regular Options", isBundle: false, boxCount: 1, unitCount: 40, image: `${IMG}/sachets-40.jpg` },
      { id: "sachets-2box", label: "Digestive Wellness Drink Mix — 2 Boxes / 20 Sachets each", detail: "2 Boxes — 20 Sachets each / 40 total", price: 18.75, section: "Wellness Value Offers", isBundle: true, boxCount: 2, unitCount: 40, image: `${IMG}/sachets-2box.jpg` },
      { id: "sachets-3box", label: "Digestive Wellness Drink Mix — 3 Boxes / 20 Sachets each", detail: "3 Boxes — 20 Sachets each / 60 total", price: 28.76, section: "Wellness Value Offers", isBundle: true, boxCount: 3, unitCount: 60, image: `${IMG}/sachets-3box.jpg` },
      { id: "sachets-4box", label: "Digestive Wellness Drink Mix — 4 Boxes / 20 Sachets each", detail: "4 Boxes — 20 Sachets each / 80 total", price: 38.64, section: "Wellness Value Offers", isBundle: true, boxCount: 4, unitCount: 80, image: `${IMG}/sachets-4box.jpg` },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getMainProduct(): Product {
  return PRODUCTS[0];
}
export function getSecondProduct(): Product {
  return PRODUCTS[1];
}
export function lowestPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price));
}
