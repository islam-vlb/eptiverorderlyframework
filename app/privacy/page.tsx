import { PRODUCTS } from "@/lib/supabase";
import { BUSINESS } from "@/lib/config";

const SECTIONS = [
  { title: "1. Information We Collect", body: "We collect information you provide directly, such as your name, email address, shipping address, and payment details, when you place an order or contact us." },
  { title: "2. How We Use Your Information", body: "We use your information to process orders, provide customer support, and communicate with you about your purchase." },
  { title: "3. Third Parties", body: "Personal information will not be shared with Third Parties, except as strictly necessary to process payments and fulfill shipping through our payment and fulfillment providers. We do not sell personal information." },
  { title: "4. Payment Information", body: "Payment information is processed securely at checkout. We accept Visa and Mastercard only. We do not store full card numbers on our own servers." },
  { title: "5. Cookies & Tracking", body: "This site may use basic cookies to support core functionality, such as remembering items in your shopping cart." },
  { title: "6. Data Security", body: "We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure." },
  { title: "7. Data Retention", body: "We retain order and contact information only as long as necessary to fulfill orders, respond to inquiries, and comply with legal obligations." },
  { title: "8. No Online Setup Required", body: "The Food Sensitivity Test Kit is read at home against the printed reference key. There is no online results system, and no sign-in of any kind is required to use the product." },
  { title: "9. Children's Privacy", body: "Our products and this site are not intended for individuals under 18. We do not knowingly collect information from minors." },
  { title: "10. Your Choices", body: "You may contact us at any time to ask questions about the personal information we hold or to request updates to your contact information." },
  { title: "11. Changes to This Policy", body: "We may update this Privacy Policy from time to time. Continued use of this site after changes are posted constitutes acceptance of the revised policy." },
  { title: "12. Contact Us", body: `Questions about this Privacy Policy can be directed to Rese Gig LLC, ${BUSINESS.legalAddress}, ${BUSINESS.phone}, ${BUSINESS.email}.` },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">Legal</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-ink">Privacy Policy</h1>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-lg font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-lg font-semibold text-ink">Products Covered</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[480px] text-left">
            <thead>
              <tr className="bg-panel text-paper">
                <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide">Product</th>
                <th className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wide">Category</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p, idx) => (
                <tr key={p.id} className={idx % 2 === 0 ? "bg-paper" : "bg-white"}>
                  <td className="px-4 py-2.5 font-body text-sm text-ink">{p.name}</td>
                  <td className="px-4 py-2.5 font-body text-sm capitalize text-ink/70">{p.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
