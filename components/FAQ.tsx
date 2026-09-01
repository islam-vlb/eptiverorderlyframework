"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  bullets?: string[];
}

/**
 * "Gentle Table" FAQ style — morphing tabs.
 * Short tab labels run across the top; the panel below cross-fades between answers.
 */
export default function FAQ({ items }: { items: FAQItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item, idx) => (
          <button
            key={item.question}
            type="button"
            onClick={() => setActive(idx)}
            className={`rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition ${
              idx === active
                ? "border-accent bg-accent text-white"
                : "border-line bg-white text-ink/60 hover:border-accent/50"
            }`}
          >
            {`Q${idx + 1}`}
          </button>
        ))}
      </div>

      <div
        key={active}
        className="mt-6 rounded-md border border-line bg-white p-8 transition-opacity duration-300"
        style={{ animation: "fadein 0.35s ease" }}
      >
        <h3 className="font-heading text-2xl text-ink">{current.question}</h3>
        <p className="mt-4 font-body text-sm leading-relaxed text-ink/75">{current.answer}</p>
        {current.bullets && (
          <ul className="mt-3 space-y-1.5">
            {current.bullets.map((b) => (
              <li key={b} className="flex gap-2 font-body text-sm text-ink/75">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <style>{`@keyframes fadein { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}
