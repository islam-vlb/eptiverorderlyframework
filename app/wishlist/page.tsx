"use client";

import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useCart();
  const list = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Saved Items</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">Your Wishlist</h1>
      {list.length === 0 ? (
        <div className="mt-10 rounded-md border border-line bg-white p-10 text-center shadow-soft">
          <p className="font-body text-sm text-ink/65">Your wishlist is empty. Tap the heart on any product to save it here.</p>
          <Link href="/shop" className="mt-6 inline-block rounded-md bg-panel px-8 py-3 font-body text-xs font-bold uppercase tracking-[0.12em] text-paper hover:bg-accent">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
