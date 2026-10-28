import { PRODUCTS, getCategory } from "@/lib/products";
import { BUSINESS, THIRD_PARTY_SENTENCE } from "@/lib/config";

const SECTIONS = [
  { title: "1. Information We Collect", body: "We collect information you provide directly, such as your name, email address, phone number, shipping address, and payment details, when you place an order or contact us." },
  { title: "2. How We Use Your Information", body: "We use your information to process and ship orders, provide customer support, and send messages about your purchase." },
  { title: "3. Third Parties", body: `${THIRD_PARTY_SENTENCE} Information is used only as strictly necessary to process payments and deliver orders through our payment and shipping providers. We do not sell personal information.` },
  { title: "4. Payment Information", body: "Payment information is processed securely at checkout. We accept Visa and Mastercard only. We do not store full card numbers on our own servers." },
  { title: "5. Cookies & Local Storage", body: "This site uses basic browser storage to support core functionality, such as remembering items in your cart and wishlist." },
  { title: "6. Data Security", body: "We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure." },
  { title: "7. Data Retention", body: "We retain order and contact information only as long as necessary to fulfill orders, respond to inquiries, and comply with legal obligations." },
  { title: "8. Children's Privacy", body: "Our products and this site are not intended for individuals under 18. We do not knowingly collect information from minors." },
  { title: "9. Your Choices", body: "You may contact us at any time to ask what personal information we hold or to request updates to your contact information." },
  { title: "10. Changes to This Policy", body: "We may update this Privacy Policy from time to time. Continued use of this site after changes are posted constitutes acceptance of the revised policy." },
  { title: "11. Contact Us", body: `Questions about this Privacy Policy can be directed to ${BUSINESS.legalName}, ${BUSINESS.legalAddress}, ${BUSINESS.phone}, ${BUSINESS.email}.` },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Legal</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">Privacy Policy</h1>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-lg text-ink">{s.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-lg text-ink">Products Covered</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[480px] text-left">
            <thead>
              <tr className="bg-panel text-paper">
                <th className="px-4 py-3 font-body text-xs font-bold uppercase tracking-wide">Product</th>
                <th className="px-4 py-3 font-body text-xs font-bold uppercase tracking-wide">Category</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p, idx) => (
                <tr key={p.id} className={idx % 2 === 0 ? "bg-paper" : "bg-white"}>
                  <td className="px-4 py-2.5 font-body text-sm text-ink">{p.name}</td>
                  <td className="px-4 py-2.5 font-body text-sm text-ink/70">{getCategory(p.category)?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
