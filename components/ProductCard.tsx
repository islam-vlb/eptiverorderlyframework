"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice, getCategory } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, toggleWishlist, inWishlist } = useCart();
  const wished = inWishlist(product.id);
  const cat = getCategory(product.category);

  return (
    <div className="table-card group flex flex-col overflow-hidden rounded-md border border-line bg-white shadow-soft">
      <Link href={`/product/${product.slug}`} className="relative block aspect-square w-full overflow-hidden bg-paper">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 px-5 py-5">
        <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{cat?.name}</p>
        <Link href={`/product/${product.slug}`} className="font-heading text-lg leading-snug text-ink hover:text-accent">
          {product.name}
        </Link>
        <p className="font-body text-sm leading-relaxed text-ink/65">{product.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <p className="font-heading text-xl text-ink">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={wished}
              onClick={() => toggleWishlist(product.id)}
              className={`flex h-9 w-9 items-center justify-center rounded-md border transition ${wished ? "border-accent bg-accent text-white" : "border-line text-ink hover:border-accent"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={wished ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.7} className="h-4 w-4">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => addItem(product, 1)}
              className="rounded-md bg-accent px-4 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-panel"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
