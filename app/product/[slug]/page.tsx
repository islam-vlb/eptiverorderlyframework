import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, getCategory } from "@/lib/products";
import AddToCartPanel from "@/components/AddToCartPanel";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} | EptiverOrderlyFramework`, description: p.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const cat = getCategory(product.category);

  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 pt-6 lg:px-8">
        <nav className="font-body text-[11px] uppercase tracking-[0.12em] text-ink/50">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-ink">{cat?.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-5 py-10 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-square w-full overflow-hidden rounded-md border border-line bg-white shadow-soft lg:sticky lg:top-24">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" priority />
        </div>
        <div>
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-accent">{cat?.name}</p>
          <h1 className="mt-3 font-heading text-3xl leading-tight text-ink sm:text-4xl">{product.name}</h1>
          <p className="mt-3 font-body text-base text-ink/70">{product.summary}</p>
          <div className="mt-8">
            <AddToCartPanel product={product} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
        <h2 className="font-heading text-2xl text-ink">About This Product</h2>
        <div className="mt-5 space-y-4">
          {product.description.map((p, i) => (
            <p key={i} className="font-body text-sm leading-relaxed text-ink/75">{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-panel px-5 py-14 text-paper lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl">What&apos;s Included</h2>
            <ul className="mt-5 space-y-3">
              {product.included.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-md border border-white/10 bg-panelSoft px-4 py-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="font-body text-sm text-paper/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-2xl">Key Details</h2>
            <div className="mt-5 overflow-hidden rounded-md border border-white/10">
              <table className="w-full text-left">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 === 0 ? "bg-panelSoft" : "bg-panel"}>
                      <td className="w-2/5 px-4 py-3 font-body text-sm font-semibold text-accentSoft">{s.label}</td>
                      <td className="px-4 py-3 font-body text-sm text-paper/75">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
        <h2 className="font-heading text-2xl text-ink">Usage and Care</h2>
        <ul className="mt-5 space-y-2">
          {product.care.map((c) => (
            <li key={c} className="flex items-start gap-3 border-b border-line pb-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="font-body text-sm text-ink/75">{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-md border border-line bg-white p-5">
            <h3 className="font-heading text-lg text-ink">Shipping</h3>
            <p className="mt-1 font-body text-sm text-ink/70">Free shipping. Ships within 1-3 business days and arrives in 3-7 business days anywhere in the contiguous USA.</p>
          </div>
          <div className="rounded-md border border-line bg-white p-5">
            <h3 className="font-heading text-lg text-ink">Returns</h3>
            <p className="mt-1 font-body text-sm text-ink/70">30-day returns from the delivery date. See the <Link href="/refund" className="font-semibold text-accent underline">Refund Policy</Link>.</p>
          </div>
        </div>
        <div className="mt-8">
          <MedicalDisclaimer />
        </div>
      </section>
    </div>
  );
}
