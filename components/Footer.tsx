import Link from "next/link";
import { BUSINESS } from "@/lib/config";
import { getMainProduct, getSecondProduct } from "@/lib/supabase";
import PaymentIcons from "./PaymentIcons";
import Logo from "./Logo";

export default function Footer() {
  const mainProduct = getMainProduct();
  const secondProduct = getSecondProduct();

  const shopLinks = [
    { label: mainProduct.name, href: `/product/${mainProduct.slug}` },
    { label: secondProduct.name, href: `/product/${secondProduct.slug}` },
    { label: "Ingredients", href: "/ingredients" },
    { label: "Cart", href: "/cart" },
  ];
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Fulfillment Address", href: "/fulfillment" },
  ];
  const legalLinks = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Shipping Policy", href: "/shipping" },
  ];

  return (
    <footer className="border-t border-white/10 bg-panelDeep text-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <p className="font-heading text-sm font-semibold text-paper">EptiverOrderlyFramework</p>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-paper/55">
              The Food Sensitivity Test Kit and Digestive Wellness Drink Mix — a simple at-home
              food-sensitivity overview, with everyday digestive-wellness support.
            </p>
          </div>

          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Shop</p>
            <ul className="mt-4 space-y-2">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-paper/65 transition hover:text-accentSoft">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Company</p>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-paper/65 transition hover:text-accentSoft">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Legal</p>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-paper/65 transition hover:text-accentSoft">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <ul className="mt-4 space-y-1.5 font-body text-sm text-paper/65">
              <li>{BUSINESS.phone}</li>
              <li>{BUSINESS.email}</li>
              <li>Rese Gig LLC, {BUSINESS.legalAddress}</li>
            </ul>
            <div className="mt-4">
              <PaymentIcons className="h-8" />
            </div>
            <p className="mt-2 font-body text-xs text-paper/55">Visa &amp; Mastercard accepted</p>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-6">
          <p className="text-sm font-bold text-paper">
            Charges will appear as {BUSINESS.descriptor} on your statement
          </p>
          <p className="text-sm font-semibold text-paper/90">
            Personal information will not be shared with Third Parties
          </p>
          <p className="text-sm font-bold text-red-600">
            ⚠️ Individuals under 18 are not permitted to purchase
          </p>
          <p className="text-xs leading-relaxed text-paper/50">
            These statements have not been evaluated by the Food and Drug Administration. This
            product is not intended to diagnose, treat, cure, or prevent any disease. The Food Sensitivity Test Kit is intended for general wellness and informational purposes and is
            not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-xs text-paper/40">
            © 2026 Rese Gig LLC — EptiverOrderlyFramework. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
