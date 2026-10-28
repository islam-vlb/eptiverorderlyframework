"use client";

import { useState } from "react";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import PaymentIcons from "./PaymentIcons";
import { BUSINESS, THIRD_PARTY_SENTENCE } from "@/lib/config";

export default function AddToCartPanel({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, toggleWishlist, inWishlist } = useCart();
  const wished = inWishlist(product.id);

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div>
      <p className="font-heading text-4xl text-ink">{formatPrice(product.price)}</p>
      <ul className="mt-3 space-y-1 font-body text-sm text-ink/75">
        <li>Free shipping</li>
        <li>30-day returns from the delivery date</li>
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 rounded-md border border-line bg-white px-2 py-1">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="flex h-8 w-8 items-center justify-center text-ink hover:bg-accent/10">&minus;</button>
          <span className="w-8 text-center font-body text-sm" aria-live="polite">{quantity}</span>
          <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((q) => q + 1)} className="flex h-8 w-8 items-center justify-center text-ink hover:bg-accent/10">+</button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="flex-1 rounded-md bg-accent px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-panel sm:flex-none"
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={wished}
          className={`rounded-md border px-5 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] transition ${wished ? "border-accent bg-accent/10 text-accent" : "border-ink text-ink hover:bg-ink hover:text-paper"}`}
        >
          {wished ? "In Wishlist" : "Add to Wishlist"}
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
        <PaymentIcons size="checkout" />
        <p className="font-body text-xs uppercase tracking-[0.1em] text-ink/70">
          Charges appear as {BUSINESS.descriptor} on your statement
        </p>
        <p className="font-body text-sm font-semibold text-ink">{THIRD_PARTY_SENTENCE}</p>
        <p className="font-body text-sm font-semibold text-ink">You must be 18 or older to purchase.</p>
      </div>
    </div>
  );
}
