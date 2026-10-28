import { BUSINESS } from "@/lib/config";

const SECTIONS = [
  { title: "Shipping Cost", body: "Shipping is free on every order. The shipping charge at checkout is always $0.00, with no minimum order and no handling fee." },
  { title: "Shipping Area", body: "We ship to addresses in the contiguous United States only. We cannot currently deliver to Alaska, Hawaii, U.S. territories, military boxes, or outside the USA." },
  { title: "Fulfillment Location", body: `Orders ship from our fulfillment address: ${BUSINESS.name}, ${BUSINESS.fulfillmentAddress}.` },
  { title: "Processing Time", body: "Orders ship within 1-3 business days of purchase. Business days are Monday through Friday, excluding U.S. holidays." },
  { title: "Delivery Time", body: "Once shipped, orders are delivered in 3-7 business days within the contiguous USA, depending on your location and the carrier." },
  { title: "Order Updates", body: "A confirmation email is sent after you place your order, and another with tracking details once it ships." },
  { title: "Address Accuracy", body: "Please check your shipping address before placing your order. Packages returned because of an incorrect or incomplete address may delay delivery." },
  { title: "Damaged or Missing Packages", body: `If your package arrives damaged or does not arrive within the delivery window, contact us at ${BUSINESS.phone} or ${BUSINESS.email} and we will help.` },
];

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Logistics</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">Shipping Policy</h1>

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
