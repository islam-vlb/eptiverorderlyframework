import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">About Us</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">{BUSINESS.name}</h1>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
        <div className="space-y-5 font-body text-sm leading-relaxed text-ink/75">
          <p>
            {BUSINESS.name} ({BUSINESS.domain}) is a general medical products store operated by{" "}
            {BUSINESS.legalName}. We sell the practical, non-electronic items people reach for
            every day: braces and supports, pillows and cushions, bathroom and bedroom safety
            helpers, first aid supplies and daily living aids.
          </p>
          <p>
            Our catalog is deliberately small. Sixteen products, each listed with its size, weight,
            contents and care notes, so you know exactly what you are ordering. Every product is a
            standalone item with a single clear price.
          </p>
          <p>
            Our items are general-purpose supports and supplies. They are not intended to
            diagnose, treat, cure, or prevent any condition, and they are not a substitute for
            professional medical advice. Please talk with a qualified healthcare provider about any
            health concern.
          </p>
          <p>
            Every order is a one-time purchase and ships free within the contiguous USA. We stand
            behind each item with a 30-day return window from the delivery date. Questions? Visit
            our <Link href="/contact" className="font-semibold text-accent underline">Contact page</Link> or call {BUSINESS.phone}.
          </p>
          <p>
            {BUSINESS.name} is operated by {BUSINESS.legalName}, {BUSINESS.legalAddress}.
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-line bg-white shadow-soft">
          <Image src="/images/site/about.png" alt="A bright living room corner with a cushion and a folding cane" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
