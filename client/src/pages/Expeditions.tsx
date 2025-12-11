import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { TripCatalog } from "@/components/TripCatalog";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import type { Trip } from "@shared/schema";

export default function Expeditions() {
  const { data: heroTrip } = useQuery<Trip[]>({
    queryKey: ["/api/trips/featured"],
    queryFn: async () => {
      const response = await fetch("/api/trips?category=Expedition");
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    },
  });

  const heroImage = heroTrip?.[0]?.imageUrl || "/attached_assets/stock_images/majestic_mountain_pe_743f6593.jpg";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={heroImage}
            alt="Mountain expedition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Conquer the Giants</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                8000m Expeditions
              </h1>
            </div>
          </div>
        </section>

        <TripCatalog
          initialCategory="Expedition"
          title="Mountain Expeditions"
          subtitle="Challenge Yourself With"
          showFilters={true}
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
