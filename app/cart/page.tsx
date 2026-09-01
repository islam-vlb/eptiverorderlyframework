"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold text-ink">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-line bg-white p-10 text-center shadow-soft">
          <p className="font-body text-sm text-ink/65">Your cart is currently empty.</p>
          <Link href="/" className="mt-6 inline-block rounded-full bg-panel px-8 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-paper hover:bg-accent hover:text-panel">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.variant.id} className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft sm:flex-row sm:items-center">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-line bg-panelSoft">
                    <Image src={item.variant.image} alt={item.productName} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading text-base font-semibold text-ink">{item.productName}</p>
                    <p className="font-body text-sm text-ink/60">{item.variant.label}</p>
                    <p className="font-body text-xs text-ink/50">{item.variant.detail}</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-line px-2 py-1">
                    <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(item.variant.id, item.quantity - 1)} className="flex h-7 w-7 items-center justify-center text-ink hover:bg-accent/10">−</button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(item.variant.id, item.quantity + 1)} className="flex h-7 w-7 items-center justify-center text-ink hover:bg-accent/10">+</button>
                  </div>
                  <p className="w-24 text-right font-heading text-lg font-semibold text-ink">
                    {formatPrice(item.variant.price * item.quantity)}
                  </p>
                  <button type="button" onClick={() => removeItem(item.variant.id)} className="font-body text-xs text-ink/50 underline hover:text-ink">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-fit rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-heading text-lg font-semibold text-ink">Order Summary</h2>
            <div className="mt-4 flex items-center justify-between font-body text-sm text-ink/70">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between font-body text-sm text-ink/70">
              <span>Shipping</span>
              <span>Included</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4 font-heading text-xl font-bold text-ink">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Link href="/checkout" className="mt-6 block rounded-full bg-accent px-6 py-3 text-center font-heading text-xs font-bold uppercase tracking-[0.12em] text-panel hover:bg-panel hover:text-paper">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
