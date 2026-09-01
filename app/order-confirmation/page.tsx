import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export default function OrderConfirmationPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center lg:px-8">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h1 className="mt-6 font-heading text-3xl font-semibold text-ink">Thank You For Your Order</h1>
      <p className="mt-4 font-body text-sm leading-relaxed text-ink/70">
        Your order has been received. A confirmation email will be sent to the address you
        provided. Shipping is included at no additional charge — please allow the usual
        processing and delivery window described on our Shipping Policy page.
      </p>
      <p className="mt-4 font-body text-sm text-ink/70">
        Questions about your order? Reach us at {BUSINESS.phone} or{" "}
        <a href={`mailto:${BUSINESS.email}`} className="text-accent underline">{BUSINESS.email}</a>.
      </p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-panel px-8 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-paper hover:bg-accent hover:text-panel">
        Return Home
      </Link>
    </div>
  );
}
