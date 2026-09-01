export function MedicalDisclaimer({ variant = "device" }: { variant?: "device" | "supplement" }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-panel px-6 py-5 text-sm text-paper/80">
      <p className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-accent">
        {variant === "supplement" ? "Supplement Disclaimer" : "Medical Disclaimer"}
      </p>
      {variant === "supplement" ? (
        <p className="mt-2 leading-relaxed">
          These statements have not been evaluated by the Food and Drug Administration. This
          product is not intended to diagnose, treat, cure, or prevent any disease. Individual
          results may vary. Consult your physician before beginning any new supplement,
          especially if you are pregnant, nursing, have a medical condition, or are taking
          medication.
        </p>
      ) : (
        <p className="mt-2 leading-relaxed">
          This product is intended for general wellness and informational purposes. It is not a
          substitute for professional medical advice, diagnosis, or treatment. Always consult a
          qualified healthcare provider regarding any health concerns.
        </p>
      )}
    </div>
  );
}
