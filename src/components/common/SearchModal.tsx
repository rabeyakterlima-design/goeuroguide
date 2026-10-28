"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, MapPin, Compass, FileText, ArrowRight } from "lucide-react";
import { SAMPLE_COUNTRIES, FEATURED_ARTICLES, TRAVEL_STYLES } from "@/lib/mock-data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  const trimmed = query.trim().toLowerCase();

  const filteredCountries = trimmed
    ? SAMPLE_COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmed) ||
          c.capital.toLowerCase().includes(trimmed) ||
          c.tagline.toLowerCase().includes(trimmed)
      )
    : SAMPLE_COUNTRIES.slice(0, 4);

  const filteredArticles = trimmed
    ? FEATURED_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmed) ||
          a.category.toLowerCase().includes(trimmed)
      )
    : FEATURED_ARTICLES.slice(0, 3);

  const filteredStyles = trimmed
    ? TRAVEL_STYLES.filter((s) => s.name.toLowerCase().includes(trimmed))
    : [];

  const handleSelect = (href: string) => {
    handleClose();
    router.push(href);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-[#17324D]/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Search GoEuroGuide"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search countries, destinations, visa rules, travel guides..."
            className="w-full bg-transparent text-[#17324D] placeholder-slate-400 text-base focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold text-slate-400 bg-slate-100 rounded-md border border-slate-200">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {/* Countries */}
          {filteredCountries.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3478A8]" />
                <span>Countries</span>
              </div>
              <div className="space-y-1">
                {filteredCountries.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(`/countries/${c.slug}`)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div>
                      <span className="font-semibold text-sm text-[#17324D] group-hover:text-[#3478A8] transition-colors">
                        {c.name}
                      </span>
                      <span className="text-xs text-slate-500 ml-2">
                        {c.capital} • {c.region}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#3478A8] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Travel Guides */}
          {filteredArticles.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#D6A85F]" />
                <span>Travel Guides & Visa Advice</span>
              </div>
              <div className="space-y-1">
                {filteredArticles.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => handleSelect(`/guides/${a.slug}`)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="pr-4">
                      <div className="font-semibold text-sm text-[#17324D] group-hover:text-[#3478A8] transition-colors line-clamp-1">
                        {a.title}
                      </div>
                      <span className="text-xs text-slate-400">{a.category}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#3478A8] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Travel Styles */}
          {filteredStyles.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-600" />
                <span>Travel Styles</span>
              </div>
              <div className="flex flex-wrap gap-2 px-2">
                {filteredStyles.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelect(s.href)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-[#3478A8] hover:text-white transition-colors"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredCountries.length === 0 &&
            filteredArticles.length === 0 &&
            filteredStyles.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <p className="text-sm">No matches found for &quot;{query}&quot;</p>
                <p className="text-xs text-slate-400 mt-1">
                  Try searching for France, Italy, Schengen, or Budget.
                </p>
              </div>
            )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Search GoEuroGuide travel information</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
