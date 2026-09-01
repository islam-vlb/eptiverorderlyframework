import Link from "next/link";

const INGREDIENTS = [
  { name: "Papain Enzyme (from Carica papaya)", amount: "100 mg", note: "A plant-sourced proteolytic enzyme." },
  { name: "Betaine HCl", amount: "300 mg", note: "Included for daily nutritional support." },
  { name: "Dandelion Root Extract", amount: "150 mg", note: "Botanical extract from Taraxacum officinale." },
  { name: "Gentian Root Extract", amount: "100 mg", note: "Traditional bittering botanical from Gentiana lutea." },
  { name: "Zinc Carnosine", amount: "75 mg", note: "A complex of zinc and L-carnosine." },
  { name: "Vitamin B6 (as Pyridoxine HCl)", amount: "2 mg", note: "Water-soluble vitamin for supplemental support." },
];

const OTHER = ["Citric acid", "Natural ginger flavor", "Natural lemon flavor", "Silicon dioxide (anti-caking)", "Steviol glycosides (from stevia leaf)"];

export default function IngredientsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">Full Transparency</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">Ingredients</h1>
      <p className="mt-4 font-body text-sm leading-relaxed text-ink/70">
        Every active ingredient in <strong>Digestive Wellness Drink Mix</strong>, with the amount
        per serving (one sachet). Always refer to the Supplement Facts panel on the box you receive.
      </p>

      <div className="mt-10 overflow-hidden rounded-md border border-line">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-panel text-white">
              <th className="px-5 py-3 font-body text-xs font-bold uppercase tracking-wide">Ingredient</th>
              <th className="px-5 py-3 font-body text-xs font-bold uppercase tracking-wide">Per Serving</th>
              <th className="hidden px-5 py-3 font-body text-xs font-bold uppercase tracking-wide sm:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody>
            {INGREDIENTS.map((ing, idx) => (
              <tr key={ing.name} className={idx % 2 === 0 ? "bg-white" : "bg-paper"}>
                <td className="px-5 py-3 font-body text-sm font-semibold text-ink">{ing.name}</td>
                <td className="px-5 py-3 font-body text-sm text-ink/75">{ing.amount}</td>
                <td className="hidden px-5 py-3 font-body text-sm text-ink/60 sm:table-cell">{ing.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-heading text-2xl text-ink">Other Ingredients</h2>
      <p className="mt-2 font-body text-sm text-ink/70">{OTHER.join(", ")}.</p>

      <div className="mt-12 rounded-md border border-line bg-white p-6">
        <h2 className="font-heading text-2xl text-ink">FDA Disclosure</h2>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">
          These statements have not been evaluated by the Food and Drug Administration. This
          product is not intended to diagnose, treat, cure, or prevent any disease. Individual
          results may vary. Consult your physician before beginning any new supplement, especially
          if you are pregnant, nursing, have a medical condition, or are taking medication.
        </p>
        <p className="mt-3 font-body text-sm text-ink/75">
          Digestive Wellness Drink Mix provides supplemental support and daily nutritional support
          for a normal digestive-wellness routine. Questions? Visit our{" "}
          <Link href="/contact" className="font-semibold text-accent underline">Contact page</Link>.
        </p>
      </div>
    </div>
  );
}
