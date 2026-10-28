"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { searchSite, SearchResult } from "@/lib/search-index";

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    setResults(searchSite(query));
  }, [query]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  function handleClose() {
    setOpen(false);
    setQuery("");
    setResults([]);
  }

  function goTo(href: string) {
    router.push(href);
    handleClose();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") handleClose();
    else if (e.key === "Enter" && results.length > 0) goTo(results[0].href);
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Search"
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-paper transition hover:bg-white/10 hover:text-accentSoft"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-50 flex flex-col bg-panelDeep p-5 md:hidden">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search products, categories, pages..."
                className="flex-1 rounded-full border border-white/15 bg-panelSoft px-4 py-2 font-body text-paper outline-none focus:border-accent"
              />
              <button type="button" onClick={handleClose} aria-label="Close search" className="text-paper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-6 w-6">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <SearchResultsList query={query} results={results} onSelect={goTo} />
          </div>

          <div className="absolute right-0 top-full z-50 mt-2 hidden w-96 rounded-2xl border border-white/10 bg-panelSoft p-4 shadow-glow md:block">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search products, categories, pages..."
              className="w-full rounded-full border border-white/15 bg-panelDeep px-4 py-2 font-body text-sm text-paper outline-none focus:border-accent"
            />
            <SearchResultsList query={query} results={results} onSelect={goTo} />
          </div>
        </>
      )}
    </div>
  );
}

function SearchResultsList({
  query,
  results,
  onSelect,
}: {
  query: string;
  results: SearchResult[];
  onSelect: (href: string) => void;
}) {
  if (!query.trim()) return null;

  return (
    <div className="mt-3 max-h-80 overflow-y-auto">
      {results.length === 0 ? (
        <p className="py-3 text-center font-body text-sm text-paper/60">No results found</p>
      ) : (
        <ul className="divide-y divide-white/10">
          {results.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => onSelect(r.href)}
                className="flex w-full items-center justify-between gap-3 py-3 text-left text-paper/85 hover:text-accentSoft"
              >
                <span className="font-body text-sm">{r.name}</span>
                <span className="shrink-0 rounded-full border border-white/15 px-2 py-0.5 font-heading text-[10px] uppercase tracking-wide text-paper/50">
                  {r.type}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
