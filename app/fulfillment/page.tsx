export default function FulfillmentPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">Logistics</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-ink">Fulfillment</h1>

      <div className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-soft">
        <h2 className="font-heading text-base font-semibold text-ink">Fulfillment &amp; Returns Address</h2>
        <p className="mt-2 font-body text-sm text-ink/75">EptiverOrderlyFramework</p>
        <p className="font-body text-sm text-ink/75">4711 34th St. N. Suite F, St. Petersburg, FL 33714</p>
      </div>

      <div className="mt-8 space-y-4 font-body text-sm leading-relaxed text-ink/75">
        <p>
          All orders placed on EptiverOrderlyFramework are fulfilled from the address listed
          above. This is also the address used to process eligible returns — see our Refund
          Policy for the full return process.
        </p>
        <p>
          If you have any questions about the status of your order or a return in progress,
          please reach out through our Contact page.
        </p>
      </div>
    </div>
  );
}
