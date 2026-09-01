"use client";

import { useMemo, useState } from "react";
import { Product, ProductVariant } from "@/lib/supabase";
import { useCart } from "@/lib/cart-context";

function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function VariantSelector({
  product,
  selectedId: controlledSelectedId,
  onSelect,
}: {
  product: Product;
  selectedId?: string;
  onSelect?: (id: string) => void;
}) {
  const [internalSelectedId, setInternalSelectedId] = useState(product.variants[0].id);
  const selectedId = controlledSelectedId ?? internalSelectedId;
  const setSelectedId = onSelect ?? setInternalSelectedId;
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const sections = useMemo(() => {
    const seen: string[] = [];
    for (const v of product.variants) {
      if (!seen.includes(v.section)) seen.push(v.section);
    }
    return seen.map((section) => ({
      section,
      variants: product.variants.filter((v) => v.section === section),
    }));
  }, [product]);

  const selected = product.variants.find((v) => v.id === selectedId) as ProductVariant;
  const total = selected.price * quantity;

  function handleAdd() {
    addItem(
      {
        productId: product.id,
        productSlug: product.slug,
        productName: product.name,
        variant: selected,
      },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div>
      {sections.map(({ section, variants }) => (
        <div key={section} className="mb-8">
          <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-ink/70">
            {section}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {variants.map((v) => {
              const isSelected = v.id === selectedId;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedId(v.id)}
                  className={`relative rounded-2xl border px-4 py-3.5 text-left transition ${
                    isSelected
                      ? "border-accent bg-accent/10 ring-1 ring-accent"
                      : "border-line bg-white hover:border-accent/60"
                  }`}
                >
                  {v.isBundle && (
                    <span className="absolute -top-2.5 right-3 rounded-full bg-accent px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-panel">
                      Bundle Offer
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-body text-sm font-semibold text-ink">{v.label}</p>
                      <p className="mt-0.5 font-body text-xs text-ink/60">{v.detail}</p>
                    </div>
                    <p className="whitespace-nowrap font-heading text-base font-semibold text-ink">
                      {formatPrice(v.price)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="sticky bottom-4 mt-6 rounded-2xl border border-white/10 bg-panel p-5 shadow-glow">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-paper/50">Selected</p>
            <p className="font-body text-sm font-semibold text-paper">{selected.label}</p>
            <p className="font-body text-xs text-paper/60">{selected.detail}</p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/20 px-2 py-1">
            <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="flex h-7 w-7 items-center justify-center rounded-full text-paper hover:bg-white/10">−</button>
            <span className="w-6 text-center font-body text-sm text-paper">{quantity}</span>
            <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((q) => q + 1)} className="flex h-7 w-7 items-center justify-center rounded-full text-paper hover:bg-white/10">+</button>
          </div>

          <div className="text-right">
            <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-paper/50">Total</p>
            <p className="font-heading text-2xl font-bold text-accentSoft">{formatPrice(total)}</p>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="w-full rounded-full bg-accent px-8 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-panel transition hover:bg-accentSoft sm:w-auto"
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
