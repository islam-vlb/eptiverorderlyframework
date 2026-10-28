/* eslint-disable @next/next/no-img-element */
export default function PaymentIcons({ size = "footer" }: { size?: "footer" | "checkout" }) {
  const h = size === "checkout" ? 20 : 17;
  const chip = "inline-flex items-center border border-ink/25 bg-white px-1.5 py-1";
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className={chip}>
        <img src="/images/payments/visa.png" alt="Visa" height={h} style={{ height: h, width: "auto" }} />
      </span>
      <span className={chip}>
        <img src="/images/payments/mastercard.png" alt="Mastercard" height={h} style={{ height: h, width: "auto" }} />
      </span>
    </div>
  );
}
