export interface HowStep {
  title: string;
  body: string;
}

export default function HowItWorks({
  headline,
  subheadline,
  steps,
}: {
  headline: string;
  subheadline: string;
  steps: HowStep[];
}) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">How It Works</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-paper sm:text-4xl">{headline}</h2>
        <p className="mt-3 font-body text-base leading-relaxed text-paper/65">{subheadline}</p>
      </div>

      <ol className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step, idx) => (
          <li key={step.title} className="rounded-2xl border border-white/10 bg-panelSoft p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-heading text-sm font-bold text-panel">
              {idx + 1}
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-paper">{step.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-paper/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
