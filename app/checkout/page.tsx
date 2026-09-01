"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { US_STATES } from "@/lib/us-states";
import { BUSINESS } from "@/lib/config";
import PaymentIcons from "@/components/PaymentIcons";

function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}

const inputCls =
  "rounded-lg border border-line px-4 py-2.5 font-body text-sm outline-none focus:border-accent";

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
    setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 600);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold text-ink">Checkout</h1>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-line bg-white p-10 text-center shadow-soft">
          <p className="font-body text-sm text-ink/65">Your cart is empty. Add an item before checking out.</p>
          <Link href="/" className="mt-6 inline-block rounded-full bg-panel px-8 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-paper hover:bg-accent hover:text-panel">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <h2 className="font-heading text-lg font-semibold text-ink">Shipping Information</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input required placeholder="First Name" className={inputCls} />
                <input required placeholder="Last Name" className={inputCls} />
                <input required type="email" placeholder="Email Address" className={`sm:col-span-2 ${inputCls}`} />
                <input required placeholder="Street Address" className={`sm:col-span-2 ${inputCls}`} />
                <input required placeholder="City" className={inputCls} />
                <select required defaultValue="" className={inputCls}>
                  <option value="" disabled>State</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <input required placeholder="ZIP Code" className={inputCls} />
                <input value="United States" disabled className={`bg-paper text-ink/60 ${inputCls}`} />
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <h2 className="font-heading text-lg font-semibold text-ink">Payment</h2>
              <div className="mt-3">
                <PaymentIcons className="h-10" />
              </div>
              <p className="mt-2 font-body text-xs text-ink/60">We accept Visa &amp; Mastercard only.</p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input required placeholder="Card Number" className={`sm:col-span-2 ${inputCls}`} />
                <input required placeholder="MM / YY" className={inputCls} />
                <input required placeholder="CVV" className={inputCls} />
              </div>
              <p className="mt-4 text-sm font-semibold text-ink">
                Personal information will not be shared with Third Parties
              </p>
              <p className="mt-2 text-sm font-bold text-red-600">
                ⚠️ Individuals under 18 are not permitted to purchase
              </p>
            </div>
          </div>

          <div className="h-fit rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-heading text-lg font-semibold text-ink">Order Summary</h2>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item.variant.id} className="flex items-start justify-between gap-3 font-body text-sm text-ink/75">
                  <span>
                    <span className="block">{item.productName} — {item.variant.label} × {item.quantity}</span>
                    <span className="block text-xs text-ink/55">{item.variant.detail}</span>
                  </span>
                  <span className="whitespace-nowrap">{formatPrice(item.variant.price * item.quantity)}</span>
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
                <span>Included</span>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-2 font-heading text-xl font-bold text-ink">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <p className="mt-5 text-base font-semibold text-ink">I agree to be billed {formatPrice(total)}</p>
            <p className="mt-1 text-base font-bold text-ink">Your credit card will be charged {formatPrice(total)}</p>
            <p className="mt-1 text-sm font-bold text-ink">Charges will appear as {BUSINESS.descriptor} on your statement</p>

            <label className="mt-5 flex items-start gap-2.5 font-body text-sm text-ink/80">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 h-4 w-4 accent-accent" />
              <span>
                I have read and agree to the{" "}
                <Link href="/terms" className="font-bold text-accent underline decoration-accent">Terms &amp; Conditions</Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-bold text-accent underline decoration-accent">Privacy Policy</Link>{" "}
                and{" "}
                <Link href="/refund" className="font-bold text-accent underline decoration-accent">Refund Policy</Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={!agreed || submitting}
              className="mt-5 w-full rounded-full bg-panel px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-paper transition disabled:cursor-not-allowed disabled:bg-ink/30 enabled:hover:bg-accent enabled:hover:text-panel"
            >
              {submitting ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
