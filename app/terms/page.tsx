import { PRODUCTS, getCategory, formatPrice } from "@/lib/products";
import { BUSINESS, THIRD_PARTY_SENTENCE } from "@/lib/config";

const SECTIONS = [
  { title: "1. Acceptance of Terms", body: `By accessing or purchasing from ${BUSINESS.name} (${BUSINESS.domain}), operated by ${BUSINESS.legalName}, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this site.` },
  { title: "2. Products Offered", body: "We sell sixteen general medical products in four categories: Mobility & Support, Home Care, First Aid & Wound Care, and Daily Living Aids. Product descriptions are informational and do not constitute medical advice." },
  { title: "3. Nature of the Products", body: "Our products are general-purpose supports and supplies for everyday use. They are not intended to diagnose, treat, cure, or prevent any condition and are not a substitute for professional medical advice. Always follow the instructions provided with each item and ask a qualified healthcare provider about any health concern." },
  { title: "4. Pricing", body: "All prices are in U.S. Dollars. The price of every product is listed in the table below and matches the price at checkout." },
  { title: "5. Payment", body: `We accept Visa and Mastercard only. Your card will be charged by ${BUSINESS.descriptor} for this one-time payment. Every order is a single purchase with no subscription or recurring billing.` },
  { title: "6. Shipping", body: "Shipping is free on every order within the contiguous USA. Orders ship within 1-3 business days and arrive in 3-7 business days. See our Shipping Policy for details." },
  { title: "7. Returns & Refunds", body: "You may request a refund within 30 days from the delivery date. See our Refund Policy for the full process and the return address." },
  { title: "8. Eligibility", body: "You must be 18 or older to purchase from this site. By placing an order, you confirm you are at least 18 years of age." },
  { title: "9. Order Accuracy", body: "You are responsible for providing accurate shipping, contact and payment information at checkout. We are not responsible for delays or errors resulting from inaccurate information." },
  { title: "10. Intellectual Property", body: `All content on this site, including text, graphics and product imagery, is the property of ${BUSINESS.legalName} and may not be reproduced without written permission.` },
  { title: "11. Limitation of Liability", body: `${BUSINESS.legalName} is not liable for any indirect, incidental, or consequential damages arising from the use of our products or this website, to the fullest extent permitted by law.` },
  { title: "12. Privacy & Changes to Terms", body: `Your use of this site is also governed by our Privacy Policy. ${THIRD_PARTY_SENTENCE} We may update these Terms & Conditions from time to time, and continued use of this site after changes are posted constitutes acceptance of the revised terms.` },
  { title: "13. Contact Information", body: `Questions about these Terms & Conditions can be directed to ${BUSINESS.legalName} (DBA ${BUSINESS.name}), ${BUSINESS.legalAddress}, ${BUSINESS.phone}, ${BUSINESS.email}.` },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Legal</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">Terms &amp; Conditions</h1>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-lg text-ink">{s.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-lg text-ink">Full Product Pricing</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="bg-panel text-paper">
                <th className="px-4 py-3 font-body text-xs font-bold uppercase tracking-wide">Product</th>
                <th className="px-4 py-3 font-body text-xs font-bold uppercase tracking-wide">Category</th>
                <th className="px-4 py-3 font-body text-xs font-bold uppercase tracking-wide">Price</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p, idx) => (
                <tr key={p.id} className={idx % 2 === 0 ? "bg-paper" : "bg-white"}>
                  <td className="px-4 py-2.5 font-body text-sm text-ink">{p.name}</td>
                  <td className="px-4 py-2.5 font-body text-sm text-ink/70">{getCategory(p.category)?.name}</td>
                  <td className="px-4 py-2.5 font-body text-sm font-semibold text-ink">{formatPrice(p.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-body text-sm text-ink/70">Shipping: Free shipping ($0.00) on every order.</p>
      </div>
    </div>
  );
}
