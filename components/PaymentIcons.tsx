/* eslint-disable @next/next/no-img-element */
export default function PaymentIcons({ size = "footer" }: { size?: "footer" | "checkout" }) {
  const h = size === "checkout" ? 30 : 26;
  const chip = "flex items-center gap-2 border border-ink/25 bg-white px-2.5 py-1.5";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className={chip}>
        <img src="/images/payments/visa.png" alt="Visa" height={h} style={{ height: h, width: "auto" }} />
      </span>
      <span className={chip}>
        <img src="/images/payments/mastercard.png" alt="Mastercard" height={h} style={{ height: h, width: "auto" }} />
      </span>
    </div>
  );
}
