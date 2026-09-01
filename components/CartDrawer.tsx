"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeItem, subtotal } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button aria-label="Close cart overlay" onClick={closeDrawer} className="absolute inset-0 bg-panelDeep/70" />
      <div className="relative flex h-full w-full max-w-md flex-col bg-paper shadow-2xl">
        <div className="flex items-center justify-between border-b border-line bg-panel px-6 py-5">
          <h2 className="font-heading text-lg font-semibold text-paper">Your Cart</h2>
          <button aria-label="Close cart" onClick={closeDrawer} className="text-paper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-6 w-6">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <p className="mt-10 text-center font-body text-sm text-ink/60">Your cart is empty.</p>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.variant.id} className="flex gap-4 border-b border-line pb-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-line bg-panelSoft">
                    <Image src={item.variant.image} alt={item.productName} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-sm font-semibold text-ink">{item.productName}</p>
                    <p className="font-body text-xs text-ink/60">{item.variant.detail}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-line px-2 py-0.5">
                        <button type="button" onClick={() => updateQuantity(item.variant.id, item.quantity - 1)} className="flex h-6 w-6 items-center justify-center text-ink" aria-label="Decrease quantity">−</button>
                        <span className="w-4 text-center text-xs">{item.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(item.variant.id, item.quantity + 1)} className="flex h-6 w-6 items-center justify-center text-ink" aria-label="Increase quantity">+</button>
                      </div>
                      <p className="font-heading text-sm font-semibold text-ink">
                        {formatPrice(item.variant.price * item.quantity)}
                      </p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.variant.id)} className="mt-2 font-body text-xs text-ink/50 underline hover:text-ink">
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="mb-1 flex items-center justify-between font-body text-sm text-ink/70">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="mb-4 flex items-center justify-between font-body text-sm text-ink/70">
              <span>Shipping</span>
              <span>Included</span>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/cart" onClick={closeDrawer} className="w-full rounded-full border border-ink px-6 py-3 text-center font-heading text-xs font-semibold uppercase tracking-[0.12em] text-ink hover:bg-ink hover:text-paper">
                View Cart
              </Link>
              <Link href="/checkout" onClick={closeDrawer} className="w-full rounded-full bg-accent px-6 py-3 text-center font-heading text-xs font-semibold uppercase tracking-[0.12em] text-panel hover:bg-ink hover:text-paper">
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
