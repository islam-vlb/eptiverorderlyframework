"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { CATEGORIES } from "@/lib/products";
import SearchOverlay from "./SearchOverlay";
import Logo from "./Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { itemCount, openDrawer, wishlist } = useCart();

  const navLink =
    "font-heading text-[13px] font-medium tracking-wide text-paper/80 transition hover:text-accentSoft";
  const mobLink = "rounded-lg px-3 py-2.5 font-body text-sm text-paper/85 hover:bg-white/5";
  const close = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-panel/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:px-5 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Logo className="h-9 w-9 shrink-0" />
          <span className="font-heading text-[13px] font-semibold tracking-tight text-paper sm:text-lg">
            Eptiver<span className="text-accent">Orderly</span>Framework
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link href="/" className={navLink}>Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <Link href="/shop" className={`flex items-center gap-1 ${navLink}`} onClick={() => setShopOpen(false)}>
              Shop
              <svg viewBox="0 0 12 8" className="h-2 w-2">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </Link>
            {shopOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-panelSoft py-2 shadow-glow">
                <Link href="/shop" onClick={() => setShopOpen(false)} className="block px-4 py-3 font-body text-sm font-semibold text-accentSoft hover:bg-white/5">
                  All Products
                </Link>
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.id}
                    href={`/shop?category=${c.id}`}
                    onClick={() => setShopOpen(false)}
                    className="block px-4 py-3 font-body text-sm text-paper/85 transition hover:bg-white/5 hover:text-accentSoft"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className={navLink}>About</Link>
          <Link href="/contact" className={navLink}>Contact</Link>
        </nav>

        <div className="flex shrink-0 items-center gap-0.5">
          <SearchOverlay />

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-paper transition hover:bg-white/10 hover:text-accentSoft"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
            {wishlist.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-panel">
                {wishlist.length}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Open cart"
            onClick={openDrawer}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-paper transition hover:bg-white/10 hover:text-accentSoft"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-panel">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-paper md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-6 w-6">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-panelSoft px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" onClick={close} className={mobLink}>Home</Link>
            <Link href="/shop" onClick={close} className={mobLink}>Shop All</Link>
            <span className="px-3 pt-2 font-heading text-[10px] uppercase tracking-[0.2em] text-paper/40">Categories</span>
            {CATEGORIES.map((c) => (
              <Link key={c.id} href={`/shop?category=${c.id}`} onClick={close} className={mobLink}>{c.name}</Link>
            ))}
            <Link href="/wishlist" onClick={close} className={mobLink}>Wishlist</Link>
            <Link href="/about" onClick={close} className={mobLink}>About</Link>
            <Link href="/contact" onClick={close} className={mobLink}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
