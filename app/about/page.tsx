import { BUSINESS } from "@/lib/config";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-accent">About Us</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-ink">EptiverOrderlyFramework</h1>

      <div className="mt-8 space-y-5 font-body text-sm leading-relaxed text-ink/75">
        <p>
          EptiverOrderlyFramework is a general-wellness storefront operated by Rese Gig LLC. We
          offer the Food Sensitivity Test Kit alongside Digestive Wellness Drink Mix, so people can
          keep a simple, private digestive-wellness routine at home.
        </p>
        <p>
          The Food Sensitivity Test Kit uses a quick finger-prick sample and an included card that
          you read yourself against a printed reference key. It is a general wellness tool intended
          for informational purposes only. It is not a substitute for professional medical advice,
          diagnosis, or treatment, and it does not diagnose or monitor any condition. Nothing is
          sent away and there is no online setup — you read your own result at home.
        </p>
        <p>
          Digestive Wellness Drink Mix is a dietary supplement that provides supplemental support
          for a normal digestive-wellness routine. These statements have not been evaluated by the Food and
          Drug Administration. This product is not intended to diagnose, treat, cure, or prevent
          any disease.
        </p>
        <p>
          Every order is a single, one-time purchase — we do not use subscriptions, auto-renewals,
          or trial offers. Shipping is included at no additional charge on every order shipped
          within the USA, and we stand behind our products with a 30-day refund policy from the
          date your order is received.
        </p>
        <p>
          EptiverOrderlyFramework is operated by Rese Gig LLC, {BUSINESS.legalAddress}. If you have
          questions about our products or policies, our Contact page has the details you need to
          reach our support team.
        </p>
      </div>
    </div>
  );
}
