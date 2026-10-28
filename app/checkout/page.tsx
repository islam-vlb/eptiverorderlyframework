"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import { US_STATES } from "@/lib/us-states";
import { BUSINESS, THIRD_PARTY_SENTENCE } from "@/lib/config";
import PaymentIcons from "@/components/PaymentIcons";

const inputCls =
  "rounded-md border border-line px-4 py-2.5 font-body text-sm outline-none focus:border-accent";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const total = subtotal;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed || items.length === 0) return;
    setSubmitting(true);
    const orderNumber = `EOF-${Date.now().toString().slice(-8)}`;
    try {
      window.localStorage.setItem(
        "eptiver_last_order",
        JSON.stringify({ orderNumber, items, subtotal, total, placedAt: new Date().toISOString() })
      );
    } catch {
      // ignore storage errors
    }
    setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 600);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <h1 className="font-heading text-3xl text-ink">Checkout</h1>

      {items.length === 0 ? (
        <div className="mt-10 rounded-md border border-line bg-white p-10 text-center shadow-soft">
          <p className="font-body text-sm text-ink/65">Your cart is empty. Add an item before checking out.</p>
          <Link href="/shop" className="mt-6 inline-block rounded-md bg-panel px-8 py-3 font-body text-xs font-bold uppercase tracking-[0.12em] text-paper hover:bg-accent">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-md border border-line bg-white p-6 shadow-soft">
              <h2 className="font-heading text-lg text-ink">Shipping Information</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input required placeholder="First Name" autoComplete="given-name" className={inputCls} />
                <input required placeholder="Last Name" autoComplete="family-name" className={inputCls} />
                <input required type="email" placeholder="Email Address" autoComplete="email" className={inputCls} />
                <input required type="tel" placeholder="Phone Number" autoComplete="tel" className={inputCls} />
                <input required placeholder="Street Address" autoComplete="street-address" className={`sm:col-span-2 ${inputCls}`} />
                <input required placeholder="City" className={inputCls} />
                <select required defaultValue="" className={inputCls}>
                  <option value="" disabled>State</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <input required placeholder="ZIP Code" inputMode="numeric" className={inputCls} />
                <input value="United States" disabled readOnly aria-label="Country" className={`bg-paper text-ink/60 ${inputCls}`} />
              </div>
              <p className="mt-3 font-body text-xs text-ink/60">We currently ship to the contiguous United States only.</p>
            </div>

            <div className="rounded-md border border-line bg-white p-6 shadow-soft">
              <h2 className="font-heading text-lg text-ink">Payment</h2>
              <div className="mt-3">
                <PaymentIcons className="h-10" />
              </div>
              <p className="mt-2 font-body text-xs text-ink/60">We accept Visa and Mastercard only.</p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input required placeholder="Card Number" inputMode="numeric" autoComplete="cc-number" className={`sm:col-span-2 ${inputCls}`} />
                <input required placeholder="MM / YY" autoComplete="cc-exp" className={inputCls} />
                <input required placeholder="CVV" inputMode="numeric" autoComplete="cc-csc" className={inputCls} />
              </div>
              <p className="mt-4 text-sm font-semibold text-ink">{THIRD_PARTY_SENTENCE}</p>
              <p className="mt-2 text-sm font-semibold text-ink">You must be 18 or older to purchase.</p>
            </div>
          </div>

          <div className="h-fit rounded-md border border-line bg-white p-6 shadow-soft">
            <h2 className="font-heading text-lg text-ink">Order Summary</h2>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-3 font-body text-sm text-ink/75">
                  <span>{item.name} &times; {item.quantity}</span>
                  <span className="whitespace-nowrap">{formatPrice(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-2 border-t border-line pt-4 font-body text-sm text-ink/70">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>Free shipping ($0.00)</span>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-2 font-heading text-xl text-ink">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <p className="mt-5 text-sm font-bold text-ink">
              Your card will be charged by {BUSINESS.descriptor} for this one-time payment. By placing this order I agree to the Terms &amp; Conditions.
            </p>

            <label className="mt-5 flex items-start gap-2.5 font-body text-sm text-ink/80">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 h-4 w-4 accent-accent" />
              <span>
                I have read and agree to the{" "}
                <Link href="/terms" className="font-bold text-accent underline decoration-accent">Terms &amp; Conditions</Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-bold text-accent underline decoration-accent">Privacy Policy</Link>.
              </span>
            </label>

            <button
              type="submit"
              disabled={!agreed || submitting}
              className="mt-5 w-full rounded-md bg-panel px-6 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] text-paper transition disabled:cursor-not-allowed disabled:bg-ink/30 enabled:hover:bg-accent"
            >
              {submitting ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
