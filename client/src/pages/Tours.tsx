import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { TripCatalog } from "@/components/TripCatalog";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import type { Trip } from "@shared/schema";

export default function Tours() {
  const { data: heroTrip } = useQuery<Trip[]>({
    queryKey: ["/api/trips", "Tour", "hero"],
    queryFn: async () => {
      const response = await fetch("/api/trips?category=Tour");
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    },
  });

  const heroImage = heroTrip?.[0]?.imageUrl || "/attached_assets/stock_images/summer_green_meadow__8f865b59.jpg";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={heroImage}
            alt="Scenic tour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Experience the Culture</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Scenic Tours
              </h1>
            </div>
          </div>
        </section>

        <TripCatalog
          initialCategory="Tour"
          title="Tour Packages"
          subtitle="Explore Our"
          showFilters={true}
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
