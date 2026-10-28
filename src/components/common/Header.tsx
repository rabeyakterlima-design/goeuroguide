"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Logo from "./Logo";
import { SearchModal } from "./SearchModal";

interface NavItem {
  label: string;
  href: string;
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Explore Countries", href: "/countries" },
  { label: "Destinations", href: "/destinations" },
  { label: "Travel Guides", href: "/guides" },
  { label: "Visa & Entry", href: "/visa" },
  { label: "Transport", href: "/transport" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Trip Planner", href: "/planner" },
  { label: "Budget Calculator", href: "/budget-calculator" },
  { label: "Travel Blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80"
            : "bg-[#FAF8F3]/95 backdrop-blur-sm border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20 gap-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden xl:flex items-center space-x-1 lg:space-x-1.5"
              aria-label="Main Navigation"
            >
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 py-1.5 rounded-md text-[13.5px] font-medium transition-colors ${
                      isActive
                        ? "text-[#17324D] font-semibold bg-slate-200/50"
                        : "text-[#263238] hover:text-[#3478A8] hover:bg-slate-100/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Compact Desktop Navigation for Medium/Large Screens */}
            <nav
              className="hidden lg:flex xl:hidden items-center space-x-1"
              aria-label="Tablet Navigation"
            >
              <Link
                href="/countries"
                className="px-2 py-1 text-xs font-medium text-[#263238] hover:text-[#3478A8]"
              >
                Countries
              </Link>
              <Link
                href="/destinations"
                className="px-2 py-1 text-xs font-medium text-[#263238] hover:text-[#3478A8]"
              >
                Destinations
              </Link>
              <Link
                href="/visa"
                className="px-2 py-1 text-xs font-medium text-[#263238] hover:text-[#3478A8]"
              >
                Visa & Entry
              </Link>
              <Link
                href="/planner"
                className="px-2 py-1 text-xs font-medium text-[#263238] hover:text-[#3478A8]"
              >
                Planner
              </Link>
              <Link
                href="/budget-calculator"
                className="px-2 py-1 text-xs font-medium text-[#263238] hover:text-[#3478A8]"
              >
                Budget
              </Link>
            </nav>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-slate-600 hover:text-[#17324D] hover:bg-slate-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478A8]"
                aria-label="Open search dialog (Ctrl+K)"
                title="Search GoEuroGuide (Ctrl+K)"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Sign In */}
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center text-xs sm:text-sm font-medium text-[#17324D] hover:text-[#3478A8] px-2.5 py-1.5 transition-colors"
              >
                Sign In
              </Link>

              {/* Plan Your Trip CTA */}
              <Link
                href="/planner"
                className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#D6A85F] text-[#17324D] hover:bg-[#c29143] hover:text-white transition-all shadow-xs active:scale-95"
              >
                Plan Your Trip
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#17324D] hover:bg-slate-200/60 xl:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17324D]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2">
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#17324D] text-white"
                        : "text-[#263238] hover:bg-slate-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex-1 text-center py-2.5 px-4 text-sm font-medium text-[#17324D] bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/planner"
                onClick={closeMobileMenu}
                className="flex-1 text-center py-2.5 px-4 text-sm font-semibold text-[#17324D] bg-[#D6A85F] rounded-lg hover:bg-[#c29143] hover:text-white transition-colors"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
