"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/config";
import { formatPrice } from "@/lib/products";
import type { CartItem } from "@/lib/cart-context";

interface LastOrder {
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  total: number;
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("eptiver_last_order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-5 py-20 lg:px-8">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1 className="mt-6 font-heading text-3xl text-ink">Thank You For Your Order</h1>
        {order && <p className="mt-3 font-body text-sm font-semibold text-ink">Order number: {order.orderNumber}</p>}
      </div>

      {order && (
        <div className="mt-8 rounded-md border border-line bg-white p-6 shadow-soft">
          <ul className="space-y-2">
            {order.items.map((i) => (
              <li key={i.id} className="flex justify-between gap-3 font-body text-sm text-ink/80">
                <span>{i.name} &times; {i.quantity}</span>
                <span>{formatPrice(i.price * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-1 border-t border-line pt-3 font-body text-sm text-ink/75">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(order.subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free shipping ($0.00)</span></div>
            <div className="flex justify-between font-heading text-lg text-ink"><span>Total</span><span>{formatPrice(order.total)}</span></div>
          </div>
        </div>
      )}

      <p className="mt-6 text-center font-body text-sm leading-relaxed text-ink/70">
        Your order has been received and a confirmation email will be sent to the address you
        provided. Orders ship free within 1-3 business days and arrive in 3-7 business days.
      </p>
      <p className="mt-3 text-center font-body text-sm font-semibold text-ink">
        Your card was charged by {BUSINESS.descriptor} for this one-time payment.
      </p>
      <p className="mt-3 text-center font-body text-sm text-ink/70">
        Questions about your order? Call {BUSINESS.phone} or email{" "}
        <a href={`mailto:${BUSINESS.email}`} className="text-accent underline">{BUSINESS.email}</a>.
      </p>
      <div className="mt-8 text-center">
        <Link href="/shop" className="inline-block rounded-md bg-panel px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] text-paper hover:bg-accent">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
