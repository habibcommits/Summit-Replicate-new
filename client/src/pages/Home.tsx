import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedTrips } from "@/components/FeaturedTrips";
import { SeasonFilter } from "@/components/SeasonFilter";
import { TripCatalog } from "@/components/TripCatalog";
import { AboutSection } from "@/components/AboutSection";
import { Affiliations } from "@/components/Affiliations";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import type { Season } from "@shared/schema";

export default function Home() {
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <FeaturedTrips />
        <SeasonFilter
          selectedSeason={selectedSeason}
          onSelectSeason={(season) =>
            setSelectedSeason(selectedSeason === season ? null : season)
          }
        />
        <TripCatalog
          initialSeason={selectedSeason || undefined}
          title="Expedition & Treks"
          subtitle="Take a Look at Our"
          limit={6}
          showFilters={true}
        />
        <AboutSection />
        <Affiliations />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
