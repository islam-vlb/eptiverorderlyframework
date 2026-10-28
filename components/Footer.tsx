import Link from "next/link";
import { BUSINESS, THIRD_PARTY_SENTENCE } from "@/lib/config";
import { CATEGORIES } from "@/lib/products";
import PaymentIcons from "./PaymentIcons";
import Logo from "./Logo";

export default function Footer() {
  const shopLinks = [
    { label: "All Products", href: "/shop" },
    ...CATEGORIES.map((c) => ({ label: c.name, href: `/shop?category=${c.id}` })),
    { label: "Wishlist", href: "/wishlist" },
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
  const linkCls = "font-body text-sm text-paper/65 transition hover:text-accentSoft";
  const headCls = "font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent";

  return (
    <footer className="border-t border-white/10 bg-panelDeep text-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <p className="font-heading text-sm font-semibold text-paper">{BUSINESS.name}</p>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-paper/55">
              General medical products for mobility, home care, first aid and daily living,
              shipped free anywhere in the contiguous USA.
            </p>
            <p className="mt-3 font-body text-sm text-paper/65">DBA: {BUSINESS.name}</p>
          </div>

          <div>
            <p className={headCls}>Shop</p>
            <ul className="mt-4 space-y-2">
              {shopLinks.map((l) => (
                <li key={l.href + l.label}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headCls}>Company</p>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
            <p className={`mt-6 ${headCls}`}>Legal</p>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headCls}>Contact</p>
            <ul className="mt-4 space-y-1.5 font-body text-sm text-paper/65">
              <li>{BUSINESS.phone}</li>
              <li>{BUSINESS.email}</li>
              <li>{BUSINESS.legalName}, {BUSINESS.legalAddress}</li>
            </ul>
            <div className="mt-4">
              <PaymentIcons size="footer" />
            </div>
            <p className="mt-2 font-body text-xs text-paper/55">Visa &amp; Mastercard accepted</p>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-6">
          <p className="text-sm font-bold text-paper">
            Charges will appear as {BUSINESS.descriptor} on your statement.
          </p>
          <p className="text-sm font-semibold text-paper/90">{THIRD_PARTY_SENTENCE}</p>
          <p className="text-sm font-semibold text-paper/90">You must be 18 or older to purchase.</p>
          <p className="text-xs leading-relaxed text-paper/50">
            Products sold here are general-purpose supports and supplies for everyday use. They
            are not intended to diagnose, treat, cure, or prevent any condition and are not a
            substitute for professional medical advice. Ask a qualified healthcare provider about
            any health concern.
          </p>
          <p className="text-xs text-paper/40">
            &copy; 2026 {BUSINESS.legalName} &mdash; {BUSINESS.domain}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
