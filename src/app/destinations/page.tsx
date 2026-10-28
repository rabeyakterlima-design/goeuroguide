import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "European Destinations & Attractions — GoEuroGuide",
  description:
    "Explore iconic European landmarks, historic cities, alpine peaks, and Mediterranean coastal towns.",
};

const SAMPLE_DESTINATIONS = [
  {
    name: "Eiffel Tower & Champ de Mars",
    country: "France",
    city: "Paris",
    category: "Landmark",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
    summary: "Gustave Eiffel's 1889 wrought-iron masterpiece rising above the Seine river.",
    duration: "2-3 hours",
    country_slug: "france",
  },
  {
    name: "The Colosseum & Roman Forum",
    country: "Italy",
    city: "Rome",
    category: "Historic",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    summary: "The majestic Flavian Amphitheatre and the bustling political core of ancient Rome.",
    duration: "3-4 hours",
    country_slug: "italy",
  },
  {
    name: "Basílica de la Sagrada Família",
    country: "Spain",
    city: "Barcelona",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1583779457094-0cef1bad7ff7?auto=format&fit=crop&w=800&q=80",
    summary: "Antoni Gaudí's unfinished architectural marvel blending Gothic and Art Nouveau forms.",
    duration: "2 hours",
    country_slug: "spain",
  },
  {
    name: "Zermatt & The Matterhorn",
    country: "Switzerland",
    city: "Zermatt",
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    summary: "Car-free alpine paradise under the striking pyramid peak of the Matterhorn.",
    duration: "Full day",
    country_slug: "switzerland",
  },
  {
    name: "Amsterdam Historic Canal Ring",
    country: "Netherlands",
    city: "Amsterdam",
    category: "Canals & Culture",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80",
    summary: "17th-century concentric UNESCO canal network lined with historic merchant mansions.",
    duration: "Half day",
    country_slug: "netherlands",
  },
  {
    name: "Oia & Caldera Coastline",
    country: "Greece",
    city: "Santorini",
    category: "Beaches & Islands",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    summary: "Cliff-clinging whitewashed cubic architecture offering legendary Aegean sunsets.",
    duration: "Full day",
    country_slug: "greece",
  },
];

export default function DestinationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Destinations" }]} />

      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          Destinations & Iconic Attractions
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Discover Europe&apos;s most celebrated monuments, UNESCO World Heritage sites,
          mountain ranges, and coastal wonders with verified visiting advice.
        </p>
      </div>

      {/* Grid of Destinations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_DESTINATIONS.map((dest, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col group"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#17324D]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                {dest.category}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#3478A8]" />
                  <span>{dest.city}, {dest.country}</span>
                </div>
                <h2 className="text-lg font-bold text-[#17324D] group-hover:text-[#3478A8] transition-colors">
                  {dest.name}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {dest.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Duration: <strong className="text-slate-700">{dest.duration}</strong>
                </span>
                <Link
                  href={`/countries/${dest.country_slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#3478A8] hover:text-[#17324D]"
                >
                  <span>Explore {dest.country}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
