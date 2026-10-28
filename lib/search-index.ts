import { PRODUCTS, CATEGORIES } from "./products";

export interface SearchResult {
  id: string;
  name: string;
  type: "Product" | "Category" | "Page";
  href: string;
}

const PAGES: SearchResult[] = [
  { id: "home", name: "Home", type: "Page", href: "/" },
  { id: "shop", name: "Shop", type: "Page", href: "/shop" },
  { id: "about", name: "About Us", type: "Page", href: "/about" },
  { id: "contact", name: "Contact Us", type: "Page", href: "/contact" },
  { id: "terms", name: "Terms & Conditions", type: "Page", href: "/terms" },
  { id: "privacy", name: "Privacy Policy", type: "Page", href: "/privacy" },
  { id: "refund", name: "Refund Policy", type: "Page", href: "/refund" },
  { id: "shipping", name: "Shipping Policy", type: "Page", href: "/shipping" },
  { id: "fulfillment", name: "Fulfillment Address", type: "Page", href: "/fulfillment" },
  { id: "wishlist", name: "Wishlist", type: "Page", href: "/wishlist" },
  { id: "cart", name: "Cart", type: "Page", href: "/cart" },
];

const SEARCH_INDEX: SearchResult[] = [
  ...PRODUCTS.map((p) => ({ id: p.id, name: p.name, type: "Product" as const, href: `/product/${p.slug}` })),
  ...CATEGORIES.map((c) => ({ id: c.id, name: c.name, type: "Category" as const, href: `/shop?category=${c.id}` })),
  ...PAGES,
];

export function searchSite(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_INDEX.filter((item) => item.name.toLowerCase().includes(q)).slice(0, 8);
}
