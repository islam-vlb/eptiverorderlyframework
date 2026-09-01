import { PRODUCTS } from "@/lib/supabase";
import { BUSINESS } from "@/lib/config";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or purchasing from EptiverOrderlyFramework, operated by Rese Gig LLC, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this site.",
  },
  {
    title: "2. Products Offered",
    body: "We offer the Food Sensitivity Test Kit and Digestive Wellness Drink Mix, described in detail on their respective product pages. Product descriptions are informational and do not constitute medical advice.",
  },
  {
    title: "3. Nature of the Products",
    body: "The Food Sensitivity Test Kit is a general wellness tool intended for informational purposes only. It does not diagnose, treat, monitor, or prevent any medical condition, and results are read by you at home against the printed reference key. Digestive Wellness Drink Mix is a dietary supplement that provides supplemental nutritional support; these statements have not been evaluated by the Food and Drug Administration.",
  },
  {
    title: "4. Pricing",
    body: "All prices are listed in U.S. Dollars and are shown at the time of purchase. Pricing for every available product option is listed in the table below and is fully visible on this page.",
  },
  {
    title: "5. Payment",
    body: `We accept Visa and Mastercard only. Charges will appear on your statement as ${BUSINESS.descriptor}. Your card will be charged the full order total at checkout — orders are a single, one-time purchase with no subscription or auto-renewal.`,
  },
  {
    title: "6. Shipping",
    body: "Shipping is included at no additional charge on every order shipped within the USA. See our Shipping Policy page for processing and delivery timelines.",
  },
  {
    title: "7. Returns & Refunds",
    body: "We offer a 30-day refund from the date your order is received. See our Refund Policy page for the full step-by-step return process and the return address.",
  },
  {
    title: "8. Eligibility",
    body: "Individuals under 18 are not permitted to purchase from this site. By placing an order, you confirm you are at least 18 years of age.",
  },
  {
    title: "9. Health & Supplement Disclaimer",
    body: "The Food Sensitivity Test Kit is not a substitute for professional medical advice, diagnosis, or treatment; always consult a qualified healthcare provider regarding any health concerns. For Digestive Wellness Drink Mix: consult your physician before beginning any new supplement, especially if you are pregnant, nursing, have a medical condition, or are taking medication.",
  },
  {
    title: "10. Order Accuracy",
    body: "You are responsible for providing accurate shipping and payment information at checkout. We are not responsible for delays or errors resulting from inaccurate information provided by the customer.",
  },
  {
    title: "11. Intellectual Property",
    body: "All content on this site, including text, graphics, and product imagery, is the property of Rese Gig LLC and may not be reproduced without written permission.",
  },
  {
    title: "12. Limitation of Liability",
    body: "Rese Gig LLC is not liable for any indirect, incidental, or consequential damages arising from the use of our products or this website, to the fullest extent permitted by law.",
  },
  {
    title: "13. Privacy & Changes to Terms",
    body: "Your use of this site is also governed by our Privacy Policy. Personal information will not be shared with Third Parties. We may update these Terms & Conditions from time to time, and continued use of this site after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "14. Contact Information",
    body: `Questions about these Terms & Conditions can be directed to Rese Gig LLC, 8465 Elk Grove Florin Rd Ste 100 #2038, Elk Grove, CA 95624, ${BUSINESS.phone}, ${BUSINESS.email}.`,
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">Legal</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-ink">Terms &amp; Conditions</h1>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-lg font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-lg font-semibold text-ink">Full Product Pricing</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[680px] text-left">
            <thead>
              <tr className="bg-panel text-paper">
                <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide">Product</th>
                <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide">Section</th>
                <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide">Option</th>
                <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide">Detail</th>
                <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide">Price</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.flatMap((p) =>
                p.variants.map((v, idx) => (
                  <tr key={v.id} className={idx % 2 === 0 ? "bg-paper" : "bg-white"}>
                    <td className="px-4 py-2.5 font-body text-sm text-ink">{p.name}</td>
                    <td className="px-4 py-2.5 font-body text-sm text-ink/70">{v.section}</td>
                    <td className="px-4 py-2.5 font-body text-sm text-ink/70">{v.label}</td>
                    <td className="px-4 py-2.5 font-body text-sm text-ink/70">{v.detail}</td>
                    <td className="px-4 py-2.5 font-body text-sm font-semibold text-ink">${v.price.toFixed(2)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
