"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, ProductVariant } from "@/lib/supabase";
import VariantSelector from "@/components/VariantSelector";
import PaymentIcons from "@/components/PaymentIcons";
import { BUSINESS } from "@/lib/config";

export default function ProductHero({ product }: { product: Product }) {
  const [selectedId, setSelectedId] = useState(product.variants[0].id);
  const selected = product.variants.find((v) => v.id === selectedId) as ProductVariant;

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
      <div className="relative aspect-square w-full self-start overflow-hidden rounded-2xl border border-line bg-panelSoft shadow-soft lg:sticky lg:top-24">
        <Image
          src={selected.image}
          alt={`${product.name} — ${selected.label}`}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
          priority
        />
      </div>

      <div>
        <h1 className="font-heading text-2xl font-semibold leading-tight text-ink sm:text-3xl">
          {product.name}
        </h1>
        <p className="mt-3 font-body text-base text-ink/65">{product.tagline}</p>

        <div className="mt-8">
          <VariantSelector product={product} selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
          <PaymentIcons className="h-9" />
          <p className="font-heading text-xs uppercase tracking-[0.12em] text-ink/70">
            Charges appear as {BUSINESS.descriptor} on your statement
          </p>
          <p className="font-body text-sm font-semibold text-ink">
            Personal information will not be shared with Third Parties
          </p>
          <p className="font-body text-sm font-bold text-red-600">
            ⚠️ Individuals under 18 are not permitted to purchase
          </p>
        </div>
      </div>
    </div>
  );
}
