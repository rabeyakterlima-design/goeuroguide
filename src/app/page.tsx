import { HeroSection } from "@/components/home/HeroSection";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { TravelStyles } from "@/components/home/TravelStyles";
import { TripPlannerBanner } from "@/components/home/TripPlannerBanner";
import { FeaturedGuides } from "@/components/home/FeaturedGuides";
import { SidebarVisaCard } from "@/components/home/SidebarVisaCard";
import { SidebarTravelEssentials } from "@/components/home/SidebarTravelEssentials";
import { SidebarInspiration } from "@/components/home/SidebarInspiration";
import { SidebarNewsletter } from "@/components/home/SidebarNewsletter";
import { SidebarPromoCard } from "@/components/home/SidebarPromoCard";

export default function HomePage() {
  return (
    <div className="space-y-10 lg:space-y-12 pb-16">
      {/* 1. Hero Section with Landscape & Search */}
      <HeroSection />

      {/* 2. Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Main Content (Popular Destinations, Styles, Planner, Guides) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Popular Destinations */}
            <PopularDestinations />

            {/* Explore by Travel Style */}
            <TravelStyles />

            {/* Plan Your Trip Banner */}
            <TripPlannerBanner />

            {/* Featured Travel Guides */}
            <FeaturedGuides />
          </div>

          {/* Right Sidebar (Visa, Essentials, Inspiration, Newsletter, Promo) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Visa & Entry Information Card */}
            <SidebarVisaCard />

            {/* Travel Essentials Link List */}
            <SidebarTravelEssentials />

            {/* Travel Inspiration Collections */}
            <SidebarInspiration />

            {/* Join Our Newsletter Box */}
            <SidebarNewsletter />

            {/* Scenic Promo Card */}
            <SidebarPromoCard />
          </aside>
        </div>
      </div>
    </div>
  );
}
