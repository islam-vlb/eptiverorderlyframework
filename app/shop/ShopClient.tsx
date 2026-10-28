"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopClient() {
  const params = useSearchParams();
  const active = params.get("category") ?? "all";
  const current = CATEGORIES.find((c) => c.id === active);
  const list = current ? PRODUCTS.filter((p) => p.category === current.id) : PRODUCTS;

  const tab = (isActive: boolean) =>
    `rounded-md border px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.1em] transition ${
      isActive ? "border-accent bg-accent text-white" : "border-line bg-white text-ink hover:border-accent"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Shop</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">{current ? current.name : "All General Medical Products"}</h1>
      <p className="mt-3 max-w-2xl font-body text-sm text-ink/70">
        {current ? current.blurb : "Sixteen everyday supports, supplies and aids. Free shipping on every order."}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/shop" className={tab(!current)}>All</Link>
        {CATEGORIES.map((c) => (
          <Link key={c.id} href={`/shop?category=${c.id}`} className={tab(current?.id === c.id)}>{c.name}</Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
