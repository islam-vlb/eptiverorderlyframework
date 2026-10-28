import { BUSINESS } from "@/lib/config";

const SECTIONS = [
  { title: "1. 30-Day Return Window", body: "You may request a refund within 30 days from the delivery date of your order. Requests made after this window cannot be accepted." },
  { title: "2. Eligibility", body: "Items should be returned in their original condition and packaging where reasonably possible. Single-use hygiene items such as disposable gloves, once opened, and sterile first aid items with a broken seal cannot be returned. Please contact us before sending anything back so we can confirm eligibility." },
  { title: "3. How to Start a Return", body: "Contact our support team by phone or email with your order number to begin the return process." },
  { title: "4. Step-by-Step Return Process", body: "Step 1: Contact support at the phone or email below within 30 days of delivery. Step 2: Our team will confirm your return and provide return instructions. Step 3: Package the item securely and ship it to the return address below. Step 4: Once your return is received and reviewed, your refund is issued to your original payment method." },
  { title: "5. Return Address", body: `Returns should be sent to: ${BUSINESS.name}, ${BUSINESS.fulfillmentAddress}. This is the same address shown on our Fulfillment Address page.` },
  { title: "6. Return Shipping", body: "Please contact support before returning an item. If an item arrived damaged or was sent in error, we will cover the return shipping cost." },
  { title: "7. Refund Processing Time", body: "After your return is received and reviewed, your refund is issued to your original payment method. Your bank may take several additional business days to post it." },
  { title: "8. Non-Refundable Circumstances", body: "Requests submitted after the 30-day window, or for items not returned per these instructions, may not be eligible for a refund." },
  { title: "9. Contact Us", body: `Questions about this Refund Policy can be directed to ${BUSINESS.legalName}, ${BUSINESS.legalAddress}, ${BUSINESS.phone}, ${BUSINESS.email}.` },
];

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Legal</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">Refund Policy</h1>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-lg text-ink">{s.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
