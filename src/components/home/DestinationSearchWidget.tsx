"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Calendar, Users, Wallet, ChevronDown, Check } from "lucide-react";
import { SAMPLE_COUNTRIES } from "@/lib/mock-data";

export function DestinationSearchWidget() {
  const router = useRouter();

  // Field states
  const [destination, setDestination] = useState("");
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState("Any time");
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);
  const [travellers, setTravellers] = useState(1);
  const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);
  const [budgetTier, setBudgetTier] = useState("All budgets");
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDestDropdown(false);
        setShowSeasonDropdown(false);
        setShowTravellerDropdown(false);
        setShowBudgetDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const seasons = [
    "Any time",
    "Spring (Apr - May)",
    "Summer (Jun - Aug)",
    "Autumn (Sep - Oct)",
    "Winter (Nov - Mar)",
  ];

  const budgets = [
    { label: "All budgets", value: "all" },
    { label: "Budget (under €80/day)", value: "budget" },
    { label: "Moderate (€80 - €200/day)", value: "moderate" },
    { label: "Luxury (€200+/day)", value: "luxury" },
  ];

  const filteredDestinations = destination
    ? SAMPLE_COUNTRIES.filter((c) =>
        c.name.toLowerCase().includes(destination.toLowerCase()) ||
        c.capital.toLowerCase().includes(destination.toLowerCase())
      )
    : SAMPLE_COUNTRIES;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("q", destination);
    if (budgetTier !== "All budgets") params.set("budget", budgetTier);
    if (travellers > 1) params.set("travellers", travellers.toString());
    router.push(`/countries?${params.toString()}`);
  };

  return (
    <div ref={containerRef} className="w-full">
      <form
        onSubmit={handleSearch}
        className="bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-2xl border border-white/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 items-center"
      >
        {/* Field 1: Destination */}
        <div className="relative lg:col-span-4 px-3 py-2 border-b sm:border-b-0 sm:border-r border-slate-200">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Where do you want to go?
          </label>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#3478A8] flex-shrink-0" />
            <input
              type="text"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setShowDestDropdown(true);
              }}
              onFocus={() => setShowDestDropdown(true)}
              placeholder="Search countries or cities"
              className="w-full text-xs sm:text-sm font-semibold text-[#17324D] placeholder-slate-400 focus:outline-none bg-transparent"
            />
          </div>

          {showDestDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 max-h-60 overflow-y-auto">
              <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1">
                Popular European Countries
              </div>
              {filteredDestinations.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setDestination(c.name);
                    setShowDestDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-[#17324D] hover:bg-slate-50 flex items-center justify-between"
                >
                  <div>
                    <span className="font-semibold">{c.name}</span>
                    <span className="text-slate-400 ml-1.5 font-normal">({c.capital})</span>
                  </div>
                  <span className="text-[10px] text-[#3478A8] font-normal">{c.tagline}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Field 2: Dates / Season */}
        <div className="relative lg:col-span-3 px-3 py-2 border-b sm:border-b-0 lg:border-r border-slate-200">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            When are you travelling?
          </label>
          <button
            type="button"
            onClick={() => {
              setShowSeasonDropdown(!showSeasonDropdown);
              setShowDestDropdown(false);
              setShowTravellerDropdown(false);
              setShowBudgetDropdown(false);
            }}
            className="w-full flex items-center justify-between text-left focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#3478A8] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#17324D] truncate">
                {selectedSeason}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </button>

          {showSeasonDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50">
              {seasons.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSelectedSeason(s);
                    setShowSeasonDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs font-medium hover:bg-slate-50 flex items-center justify-between ${
                    selectedSeason === s ? "text-[#3478A8] font-bold" : "text-[#17324D]"
                  }`}
                >
                  <span>{s}</span>
                  {selectedSeason === s && <Check className="w-3.5 h-3.5 text-[#3478A8]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Field 3: Travellers */}
        <div className="relative lg:col-span-2 px-3 py-2 border-b sm:border-b-0 sm:border-r border-slate-200">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Travellers
          </label>
          <button
            type="button"
            onClick={() => {
              setShowTravellerDropdown(!showTravellerDropdown);
              setShowDestDropdown(false);
              setShowSeasonDropdown(false);
              setShowBudgetDropdown(false);
            }}
            className="w-full flex items-center justify-between text-left focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#3478A8] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#17324D]">
                {travellers} {travellers === 1 ? "Traveller" : "Travellers"}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </button>

          {showTravellerDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#17324D]">People:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setTravellers((prev) => Math.max(1, prev - 1))}
                    className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-[#17324D] w-4 text-center">
                    {travellers}
                  </span>
                  <button
                    type="button"
                    onClick={() => setTravellers((prev) => Math.min(10, prev + 1))}
                    className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Field 4: Budget */}
        <div className="relative lg:col-span-2 px-3 py-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Budget
          </label>
          <button
            type="button"
            onClick={() => {
              setShowBudgetDropdown(!showBudgetDropdown);
              setShowDestDropdown(false);
              setShowSeasonDropdown(false);
              setShowTravellerDropdown(false);
            }}
            className="w-full flex items-center justify-between text-left focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-[#D6A85F] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#17324D] truncate">
                {budgetTier}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </button>

          {showBudgetDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50">
              {budgets.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => {
                    setBudgetTier(b.label);
                    setShowBudgetDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs font-medium hover:bg-slate-50 flex items-center justify-between ${
                    budgetTier === b.label ? "text-[#3478A8] font-bold" : "text-[#17324D]"
                  }`}
                >
                  <span>{b.label}</span>
                  {budgetTier === b.label && <Check className="w-3.5 h-3.5 text-[#3478A8]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Submit Button */}
        <div className="lg:col-span-1 p-1">
          <button
            type="submit"
            className="w-full h-11 lg:h-12 bg-[#17324D] hover:bg-[#23476c] text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            aria-label="Search destinations"
          >
            <Search className="w-4 h-4 text-[#D6A85F]" />
            <span className="lg:hidden text-sm font-semibold">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}
