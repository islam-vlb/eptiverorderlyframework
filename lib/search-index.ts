import { PRODUCTS } from "./supabase";

export interface SearchResult {
  id: string;
  name: string;
  type: "Product" | "Option" | "Page";
  href: string;
}

const PAGES: SearchResult[] = [
  { id: "home", name: "Home", type: "Page", href: "/" },
  { id: "about", name: "About Us", type: "Page", href: "/about" },
  { id: "contact", name: "Contact Us", type: "Page", href: "/contact" },
  { id: "ingredients", name: "Ingredients", type: "Page", href: "/ingredients" },
  { id: "terms", name: "Terms & Conditions", type: "Page", href: "/terms" },
  { id: "privacy", name: "Privacy Policy", type: "Page", href: "/privacy" },
  { id: "refund", name: "Refund Policy", type: "Page", href: "/refund" },
  { id: "shipping", name: "Shipping Policy", type: "Page", href: "/shipping" },
  { id: "fulfillment", name: "Fulfillment Address", type: "Page", href: "/fulfillment" },
  { id: "cart", name: "Cart", type: "Page", href: "/cart" },
];

function buildIndex(): SearchResult[] {
  const productResults: SearchResult[] = PRODUCTS.map((p) => ({
    id: p.id,
    name: p.name,
    type: "Product",
    href: `/product/${p.slug}`,
  }));

  const variantResults: SearchResult[] = PRODUCTS.flatMap((p) =>
    p.variants.map((v) => ({
      id: `${p.id}-${v.id}`,
      name: v.label,
      type: "Option" as const,
      href: `/product/${p.slug}`,
    }))
  );

  return [...productResults, ...PAGES, ...variantResults];
}

const SEARCH_INDEX = buildIndex();

export function searchSite(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_INDEX.filter((item) => item.name.toLowerCase().includes(q)).slice(0, 8);
}
