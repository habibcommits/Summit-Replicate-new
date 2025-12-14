import { useQuery } from "@tanstack/react-query";
import { TripCard } from "./TripCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Trip } from "@shared/schema";

export function FeaturedTrips() {
  const { data: trips = [], isLoading } = useQuery<Trip[]>({
    queryKey: ["/api/trips/featured"],
    queryFn: async () => {
      const response = await fetch("/api/trips/featured");
      if (!response.ok) throw new Error("Failed to fetch featured trips");
      return response.json();
    },
  });

  const featuredTrips = trips.slice(0, 3);

  if (isLoading) {
    return (
      <section className="py-10" data-testid="section-featured-trips">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Skeleton className="aspect-[16/9] rounded-md" />
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-[200px] rounded-md" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const heroImage = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80";

  return (
    <section className="py-10" data-testid="section-featured-trips">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-4">
              <img
                src={heroImage}
                alt="Featured expedition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">
                  Made to Mountain
                </h2>
                <p className="text-white/80 text-lg max-w-xl">
                  Professional mountaineering expeditions in the Karakoram & Himalaya Range
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-4">
            {featuredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} variant="compact" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
