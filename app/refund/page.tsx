import { BUSINESS } from "@/lib/config";

const SECTIONS = [
  { title: "1. 30-Day Refund Window", body: "You may request a refund within 30 days from the date your order is received. Requests made after this window cannot be accepted." },
  { title: "2. Eligibility for Refund", body: "Items must be returned in their original condition where reasonably possible. Please contact us before returning any item so we can provide return instructions." },
  { title: "3. How to Start a Return", body: "Contact our support team by phone or email with your order details to begin the return process." },
  { title: "4. Step-by-Step Return Process", body: "Step 1: Contact support at the phone or email below within 30 days of receiving your order. Step 2: Our team will confirm your return and provide the return address. Step 3: Package the item securely and ship it to the address provided. Step 4: Once received and reviewed, your refund will be processed to your original payment method." },
  { title: "5. Return Address", body: "Returns should be sent to: EptiverOrderlyFramework, 4711 34th St. N. Suite F, St. Petersburg, FL 33714. This is the same address shown on our Fulfillment Address page." },
  { title: "6. Refund Processing Time", body: "Once your return is received, please allow a reasonable processing period for your refund to be issued to your original payment method." },
  { title: "7. Non-Refundable Circumstances", body: "Refund requests submitted after the 30-day window, or for items not returned per these instructions, may not be eligible for a refund." },
  { title: "8. Contact Us", body: `Questions about this Refund Policy can be directed to Rese Gig LLC at ${BUSINESS.phone} or ${BUSINESS.email}.` },
];

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">Legal</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-ink">Refund Policy</h1>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-lg font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
