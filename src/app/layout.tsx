import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GoEuroGuide — Europe Travel Information & Trip Planning",
    template: "%s | GoEuroGuide",
  },
  description:
    "Discover Europe with confidence. Verified destination guides, official Schengen visa & entry requirements, transport tips, and interactive trip planning.",
  keywords: [
    "Europe travel",
    "European destinations",
    "Schengen visa requirements",
    "Europe itinerary planner",
    "travel budget calculator",
    "France travel guide",
    "Italy travel guide",
    "Spain travel guide",
    "Switzerland travel guide",
  ],
  authors: [{ name: "GoEuroGuide Editorial Team" }],
  openGraph: {
    title: "GoEuroGuide — Europe Travel Information & Trip Planning",
    description:
      "Explore beautiful destinations, discover essential travel information, and create your own European adventure.",
    url: "https://goeuroguide.com",
    siteName: "GoEuroGuide",
    locale: "en_IE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#17324D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F3] text-[#263238]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
