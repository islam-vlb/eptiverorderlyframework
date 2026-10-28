import { BUSINESS } from "@/lib/config";

export default function FulfillmentPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Logistics</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">Fulfillment Address</h1>

      <div className="mt-8 rounded-md border border-line bg-white p-6 shadow-soft">
        <h2 className="font-heading text-lg text-ink">Fulfillment &amp; Returns Address</h2>
        <p className="mt-2 font-body text-sm text-ink/75">{BUSINESS.name}</p>
        <p className="font-body text-sm text-ink/75">{BUSINESS.fulfillmentAddress}</p>
      </div>

      <div className="mt-8 space-y-4 font-body text-sm leading-relaxed text-ink/75">
        <p>
          All orders placed on {BUSINESS.domain} are fulfilled from the address listed above. This
          is also the address used to process eligible returns. See our Refund Policy for the full
          return process.
        </p>
        <p>
          The business is operated by {BUSINESS.legalName}, {BUSINESS.legalAddress}. For questions
          about an order or a return in progress, call {BUSINESS.phone} or email {BUSINESS.email}.
        </p>
      </div>
    </div>
  );
}
