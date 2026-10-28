"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/config";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (!form.message.trim()) errs.message = "Please enter a message.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  const inputCls =
    "mt-1 w-full rounded-lg border border-line px-4 py-2.5 font-body text-sm outline-none focus:border-accent";

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">Get In Touch</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-ink">Contact Us</h1>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-heading text-base font-semibold text-ink">Phone</h2>
            <p className="mt-1 font-body text-sm text-ink/70">{BUSINESS.phone}</p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-heading text-base font-semibold text-ink">Email</h2>
            <p className="mt-1 font-body text-sm text-ink/70">{BUSINESS.email}</p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="font-heading text-base font-semibold text-ink">Corporate Address</h2>
            <p className="mt-1 font-body text-sm text-ink/70">Rese Gig LLC</p>
            <p className="font-body text-sm text-ink/70">{BUSINESS.legalAddress}</p>
            <p className="mt-2 font-body text-sm text-ink/70">DBA: {BUSINESS.name} ({BUSINESS.domain})</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
          <h2 className="font-heading text-lg font-semibold text-ink">Send a Message</h2>

          {submitted && (
            <div className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 font-body text-sm text-ink">
              Thank you — your message has been received. Our team will respond soon.
            </div>
          )}

          <div className="mt-4 space-y-4">
            <div>
              <label className="font-heading text-[11px] font-bold uppercase tracking-wide text-ink/60">Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label className="font-heading text-[11px] font-bold uppercase tracking-wide text-ink/60">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label className="font-heading text-[11px] font-bold uppercase tracking-wide text-ink/60">Message</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full rounded-full bg-panel px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-paper hover:bg-accent hover:text-panel">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
