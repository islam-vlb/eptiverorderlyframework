import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  href,
  imageSrc,
  imageAlt,
  title,
  blurb,
  fromPrice,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  blurb: string;
  fromPrice?: number;
}) {
  return (
    <Link
      href={href}
      className="glow-card group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-panelSoft shadow-soft"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-panelDeep">
        <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-6 py-5">
        <p className="font-heading text-lg font-semibold text-paper">{title}</p>
        <p className="font-body text-sm leading-relaxed text-paper/65">{blurb}</p>
        {fromPrice !== undefined && (
          <p className="mt-1 font-heading text-sm font-semibold text-accentSoft">From ${fromPrice.toFixed(2)}</p>
        )}
        <span className="mt-2 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-accent transition group-hover:text-accentSoft">
          View Product →
        </span>
      </div>
    </Link>
  );
}
