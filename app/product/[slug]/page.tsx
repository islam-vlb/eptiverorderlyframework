import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/lib/supabase";
import { PRODUCT_CONTENT } from "@/lib/product-content";
import ProductHero from "@/components/ProductHero";
import FAQ from "@/components/FAQ";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const content = PRODUCT_CONTENT[product.slug];
  const isSupplement = product.category === "supplement";

  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 pt-6 lg:px-8">
        <nav className="font-heading text-[11px] uppercase tracking-[0.12em] text-ink/50">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <span>Products</span>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <ProductHero product={product} />
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">About This Product</h2>
        <div className="mt-5 space-y-4">
          {content.descriptionParagraphs.map((p, idx) => (
            <p key={idx} className="font-body text-sm leading-relaxed text-ink/75">{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-panel px-5 py-14 text-paper lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold">What&apos;s Included</h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {content.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-panelSoft px-4 py-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="font-body text-sm text-paper/80">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-heading text-2xl font-semibold">Specifications</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left">
              <tbody>
                {content.specifications.map((spec, idx) => (
                  <tr key={spec.label} className={idx % 2 === 0 ? "bg-panelSoft" : "bg-panel"}>
                    <td className="w-1/3 px-5 py-3 font-body text-sm font-semibold text-accentSoft">{spec.label}</td>
                    <td className="px-5 py-3 font-body text-sm text-paper/75">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {isSupplement && (
        <section className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-heading text-lg font-semibold text-ink">FDA Disclosure</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">
              These statements have not been evaluated by the Food and Drug Administration. This
              product is not intended to diagnose, treat, cure, or prevent any disease. Individual
              results may vary. Consult your physician before beginning any new supplement,
              especially if you are pregnant, nursing, have a medical condition, or are taking
              medication.
            </p>
            <p className="mt-3 font-body text-sm text-ink/75">
              See the full ingredient list on our{" "}
              <Link href="/ingredients" className="font-semibold text-accent underline">Ingredients page</Link>.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-5 py-8 lg:px-8">
        <MedicalDisclaimer variant={isSupplement ? "supplement" : "device"} />
      </section>

      <section className="bg-panel px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-heading text-2xl font-semibold text-paper">Product FAQ</h2>
          <FAQ items={content.faq} />
        </div>
      </section>
    </div>
  );
}
