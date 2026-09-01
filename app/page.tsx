import Link from "next/link";
import { getMainProduct, getSecondProduct, lowestPrice } from "@/lib/supabase";
import FAQ, { FAQItem } from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import ProductCard from "@/components/ProductCard";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

const INSIDE = [
  "Food-sensitivity test card",
  "Single-use lancets for the finger-prick sample",
  "Sample applicator",
  "Printed reference key for reading the card",
  "Quick start guide",
];

const COVERS = [
  { title: "A General Overview", body: "The card develops a color pattern you compare against a printed key — a broad wellness overview, not a diagnosis." },
  { title: "Read At Home", body: "You collect the sample, apply it to the card, and read the result yourself. Nothing is sent away." },
  { title: "One Reading Per Kit", body: "Each kit includes everything for a single reading. Multiple-kit options are available if more than one person wants to test." },
  { title: "Not A Medical Test", body: "It does not diagnose, treat, or monitor any condition. Food reactions and health questions belong with a qualified healthcare provider." },
];

const WHO = [
  { title: "Curious Eaters", body: "Adults who want a simple, general at-home overview before a conversation with their clinician or dietitian." },
  { title: "Routine Keepers", body: "People who prefer a low-friction check they can do themselves at home on their own schedule." },
  { title: "Households", body: "Families who want more than one kit so each person can read their own card." },
];

const FAQ_ITEMS: FAQItem[] = [
  { question: "Is this diagnostic?", answer: "No. The Food Sensitivity Test Kit and Digestive Wellness Drink Mix are for general wellness and informational purposes only. They do not diagnose, treat, or monitor any medical condition." },
  { question: "How do I read my kit?", answer: "At home, against the printed reference key. Apply a quick finger-prick sample to the included card, wait the stated time, and compare the color pattern. Nothing is sent away, and there is no online step of any kind." },
  { question: "How private is this?", answer: "Your result stays on the card, with you. No online setup is required. Our Privacy Policy explains the limited information collected when you place an order and states that personal information will not be shared with Third Parties." },
  { question: "What's the refund policy?", answer: "You may request a refund within 30 days from the date your order is received. The Refund Policy page has the full step-by-step process and the return address." },
  { question: "How do I contact support?", answer: "By phone or email — both are listed on the Contact page and in the footer of every page." },
  { question: "What does the drink mix do?", answer: "Digestive Wellness Drink Mix provides supplemental support for a normal digestive-wellness routine. These statements have not been evaluated by the Food and Drug Administration, and the product is not intended to diagnose, treat, cure, or prevent any disease." },
];

export default function HomePage() {
  const kit = getMainProduct();
  const mix = getSecondProduct();
  const bundle = mix.variants.find((v) => v.id === "sachets-3box")!;

  return (
    <div>
      {/* HERO — cream, editorial rules, plate graphic */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="rule-lines">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Food-Sensitivity Assessment</p>
            <h1 className="mt-4 font-heading text-5xl leading-[1.03] text-ink sm:text-6xl">
              A calm overview, read at your own table.
            </h1>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-ink/70">
              The Food Sensitivity Test Kit uses a quick finger-prick sample and an included card
              you read yourself against a printed key. Pair it with Digestive Wellness Drink Mix
              for everyday digestive-wellness support.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href={`/product/${kit.slug}`} className="rounded-md bg-accent px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-panel">
                Shop the Kit
              </Link>
              <Link href={`/product/${mix.slug}`} className="rounded-md border border-accent px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] text-accent transition hover:bg-accent hover:text-white">
                Shop the Drink Mix
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="plate" aria-hidden />
          </div>
        </div>
      </section>

      {/* trust band */}
      <section className="bg-panel text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 lg:grid-cols-4 lg:divide-x lg:divide-white/10 lg:px-8">
          {[
            { label: "Shipping included", note: "No fee, every order" },
            { label: "30-day returns", note: "From the date received" },
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

      {/* HOW IT WORKS */}
      <section className="bg-panelDeep px-5 py-20 lg:px-8">
        <HowItWorks
          headline="Your Food Sensitivity Test Kit, Made Simple"
          subheadline="Simple testing. Immediate results. All from the comfort of home."
          steps={[
            { title: "Order & Receive Your Kit", body: "Choose the kit option that fits your needs at checkout, and it ships with everything needed for one reading." },
            { title: "Test at Home", body: "Collect a quick finger-prick sample and apply it to the included test card, following the simple included instructions." },
            { title: "Get Instant Results", body: "Read the card against the printed reference key right at your table. No clinic visit, nothing to send away, and no account to set up." },
          ]}
        />
      </section>

      {/* INSIDE THE KIT */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Inside The Kit</p>
            <h2 className="mt-3 font-heading text-4xl text-ink">Everything for one reading</h2>
            <ul className="mt-6 space-y-3">
              {INSIDE.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-line pb-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="font-body text-sm text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-line bg-white p-10 text-center shadow-soft">
            <div className="plate mx-auto" aria-hidden />
            <p className="mt-6 font-body text-sm text-ink/70">
              A color-read test card and a printed reference key — a general at-home overview,
              nothing to send away.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS OVERVIEW COVERS */}
      <section className="bg-panel px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accentSoft">What This Overview Covers</p>
            <h2 className="mt-3 font-heading text-4xl">Clear about what it is</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {COVERS.map((c) => (
              <div key={c.title} className="rounded-md border border-white/10 bg-panelSoft p-6">
                <h3 className="font-heading text-xl">{c.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Made For</p>
          <h2 className="mt-3 font-heading text-4xl text-ink">Who It&apos;s For</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {WHO.map((w) => (
            <div key={w.title} className="border-t-2 border-accent pt-6">
              <h3 className="font-heading text-2xl text-ink">{w.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUNDLE OFFER */}
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="rounded-md border-2 border-accent bg-white p-8 text-center sm:p-12">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Bundle Offer</p>
          <h2 className="mt-3 font-heading text-3xl text-ink">{bundle.label}</h2>
          <p className="mt-2 font-body text-sm text-ink/70">{bundle.detail}</p>
          <p className="mt-4 font-heading text-5xl text-accent">${bundle.price.toFixed(2)}</p>
          <Link href={`/product/${mix.slug}`} className="mt-6 inline-block rounded-md bg-panel px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-accent">
            View Drink Mix Options
          </Link>
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="bg-panelDeep px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accentSoft">Our Products</p>
            <h2 className="mt-3 font-heading text-4xl text-white">Two parts of one routine</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ProductCard href={`/product/${kit.slug}`} imageSrc="/images/products/eptiver/kit.svg" imageAlt={kit.heroImageAlt} title={kit.name} blurb="An at-home color-read test card with a printed reference key." fromPrice={lowestPrice(kit)} />
            <ProductCard href={`/product/${mix.slug}`} imageSrc="/images/products/eptiver/mix.svg" imageAlt={mix.heroImageAlt} title={mix.name} blurb="A mild ginger-citrus powder in single-serve sachets for everyday support." fromPrice={lowestPrice(mix)} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
        <MedicalDisclaimer variant="device" />
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
