"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("done");
    setEmail("");
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">Stay In The Loop</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-paper sm:text-4xl">
        Occasional product updates
      </h2>
      <p className="mt-3 font-body text-sm leading-relaxed text-paper/60">
        Join the list for restock notices and new option releases. No spam, unsubscribe anytime.
      </p>

      {status === "done" ? (
        <p className="mx-auto mt-6 max-w-md rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 font-body text-sm text-paper">
          Thanks — you&apos;re on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@example.com"
            aria-label="Email address"
            className="flex-1 rounded-full border border-white/20 bg-panelDeep px-5 py-3 font-body text-sm text-paper outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-7 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-panel transition hover:bg-accentSoft"
          >
            Subscribe
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 font-body text-xs text-red-400">Please enter a valid email address.</p>
      )}
    </div>
  );
}
