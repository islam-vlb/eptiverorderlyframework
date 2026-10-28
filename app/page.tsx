import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/products";
import { BUSINESS } from "@/lib/config";
import FAQ, { FAQItem } from "@/components/FAQ";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

const OFFER = [
  { title: "Everyday Supports", body: "Knee and posture braces and a folding seat cane for getting through the day with a little extra support." },
  { title: "Comfort at Home", body: "Contour and wedge pillows, a gel seat cushion and bedroom and bathroom safety helpers for a more comfortable home." },
  { title: "Ready for Small Mishaps", body: "A full family first aid kit, bandage and gauze assortments, medical tape and disposable gloves to keep stocked." },
  { title: "Simple Daily Helpers", body: "A pill organizer, a folding reacher and sturdy shower seating that make daily routines easier to manage." },
];

const WHY = [
  { title: "Plain, Honest Products", body: "Every item is a simple, non-electronic product with clear sizes, weights and contents listed on its page." },
  { title: "Free Shipping Always", body: "Every order ships free within the contiguous USA, with no minimum and no hidden fees." },
  { title: "30-Day Returns", body: "If an item is not right, request a return within 30 days from the delivery date." },
];

const FAQ_ITEMS: FAQItem[] = [
  { question: "What do you sell?", answer: "General medical products for everyday use: supports and braces, pillows and cushions, bathroom and bedroom safety helpers, first aid supplies and daily living aids. Everything is non-electronic." },
  { question: "Are these products medical advice or treatment?", answer: "No. They are general-purpose supports and supplies. They are not intended to diagnose, treat, cure, or prevent any condition, so please ask a qualified healthcare provider about any health concern." },
  { question: "How much is shipping?", answer: "Shipping is free on every order. Orders ship within 1-3 business days and arrive in 3-7 business days within the contiguous USA." },
  { question: "What is the return policy?", answer: "You may request a return within 30 days from the delivery date. The Refund Policy page has the full process and the return address." },
  { question: "Which cards do you accept?", answer: `We accept Visa and Mastercard. Your card statement will show ${BUSINESS.descriptor} for this one-time payment.` },
  { question: "How do I contact support?", answer: `By phone at ${BUSINESS.phone} or by email at ${BUSINESS.email}. Both are also on the Contact page and in every footer.` },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="rule-lines">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">General Medical Products</p>
            <h1 className="mt-4 font-heading text-5xl leading-[1.03] text-ink sm:text-6xl">
              Everyday care, kept simple.
            </h1>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-ink/70">
              EptiverOrderlyFramework offers braces and supports, home care comfort, first aid
              supplies and daily living aids, delivered free to your door.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-md bg-accent px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-panel">
                Shop All Products
              </Link>
              <Link href="/about" className="rounded-md border border-ink px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-paper">
                About Us
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div aria-hidden className="absolute -inset-5 rounded-[2rem] bg-accent/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-md border border-line bg-white shadow-soft">
              <Image src="/images/site/hero.png" alt="Wedge pillow, first aid case and weekly pill organizer on a wooden table" width={1376} height={768} className="h-full w-full object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* trust band */}
      <section className="bg-panel text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 lg:grid-cols-4 lg:divide-x lg:divide-white/10 lg:px-8">
          {[
            { label: "Free shipping", note: "Every order, $0.00" },
            { label: "30-day returns", note: "From the delivery date" },
            { label: "One-time payment", note: "No subscriptions" },
            { label: "Visa & Mastercard", note: "Secure checkout" },
          ].map((t) => (
            <div key={t.label} className="px-2 py-5 lg:px-6">
              <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-accentSoft">{t.label}</p>
              <p className="mt-1 font-body text-xs text-white/60">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Browse By Category</p>
          <h2 className="mt-3 font-heading text-4xl text-ink">Four simple places to start</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <Link key={c.id} href={`/shop?category=${c.id}`} className="table-card group block overflow-hidden rounded-md border border-line bg-white shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={c.image} alt={c.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="px-6 py-5">
                <h3 className="font-heading text-2xl text-ink">{c.name}</h3>
                <p className="mt-1 font-body text-sm text-ink/65">{c.blurb}</p>
                <span className="mt-3 inline-block font-body text-xs font-bold uppercase tracking-[0.12em] text-accent">Shop {c.name} &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-panel px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accentSoft">What We Offer</p>
            <h2 className="mt-3 font-heading text-4xl">Practical items for real life</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {OFFER.map((c) => (
              <div key={c.title} className="rounded-md border border-white/10 bg-panelSoft p-6">
                <h3 className="font-heading text-xl">{c.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Our Approach</p>
          <h2 className="mt-3 font-heading text-4xl text-ink">Why shop with us</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title} className="border-t-2 border-accent pt-6">
              <h3 className="font-heading text-2xl text-ink">{w.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 pb-12 lg:px-8">
        <MedicalDisclaimer />
      </div>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Questions</p>
          <h2 className="mt-3 font-heading text-4xl text-ink">Frequently Asked Questions</h2>
        </div>
        <FAQ items={FAQ_ITEMS} />
      </section>
    </div>
  );
}
