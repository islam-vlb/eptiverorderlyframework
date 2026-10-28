import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop General Medical Products | EptiverOrderlyFramework",
  description:
    "Shop braces, supports, pillows, first aid supplies and daily living aids from EptiverOrderlyFramework. Free shipping on every order.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-5 py-20 font-body text-sm text-ink/60">Loading products...</div>}>
      <ShopClient />
    </Suspense>
  );
}
