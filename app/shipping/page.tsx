const SECTIONS = [
  { title: "Shipping Cost", body: "Shipping is included at no additional charge. No shipping amount is ever added at checkout." },
  { title: "Shipping Area", body: "We currently ship to addresses within the United States (USA) only." },
  { title: "Processing Time", body: "Orders are typically processed within 1–2 business days of purchase." },
  { title: "Delivery Time", body: "Once shipped, most orders arrive within 5–7 business days, depending on your location." },
  { title: "Order Updates", body: "You will receive a confirmation email once your order has shipped." },
  { title: "Questions", body: "For questions about the status of your shipment, please visit our Contact page." },
];

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">Logistics</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-ink">Shipping Policy</h1>

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
