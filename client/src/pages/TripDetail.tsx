import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TripCard } from "@/components/TripCard";
import { Skeleton } from "@/components/ui/skeleton";
import {
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
  Mountain,
  Thermometer,
  Check,
  ArrowLeft,
} from "lucide-react";
import type { Trip } from "@shared/schema";

export default function TripDetail() {
  const { id } = useParams<{ id: string }>();
  
  const { data: trip, isLoading, error } = useQuery<Trip>({
    queryKey: ["/api/trips", id],
    queryFn: async () => {
      const response = await fetch(`/api/trips/${id}`);
      if (!response.ok) throw new Error("Trip not found");
      return response.json();
    },
  });

  const { data: allTrips = [] } = useQuery<Trip[]>({
    queryKey: ["/api/trips"],
    queryFn: async () => {
      const response = await fetch("/api/trips");
      if (!response.ok) throw new Error("Failed to fetch trips");
      return response.json();
    },
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  const highlights = [
    "Professional, experienced mountain guides",
    "All permits and entry fees included",
    "Quality camping and climbing equipment",
    "Emergency evacuation insurance",
    "Full board meals during the expedition",
    "Airport transfers and ground transportation",
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Skeleton className="h-[50vh] w-full" />
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-8 w-40" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="h-6 w-full" />
                    ))}
                  </div>
                </div>
                <Skeleton className="h-[400px]" />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading font-bold text-3xl mb-4">Trip Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The trip you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedTrips = allTrips
    .filter((t) => t.category === trip.category && t.id !== trip.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={trip.imageUrl}
            alt={trip.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link href="/" className="inline-flex items-center text-white/70 mb-4 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Trips
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {trip.category}
                </Badge>
                <Badge variant="secondary">{trip.season}</Badge>
                {trip.difficulty && <Badge variant="outline" className="border-white/30 text-white">{trip.difficulty}</Badge>}
              </div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                {trip.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{trip.destination}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{trip.duration}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {renderStars(trip.rating || 5)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none mb-8">
                  <h2 className="font-heading font-bold text-2xl mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {trip.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-heading font-bold text-2xl mb-4">Trip Highlights</h2>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Best Season</p>
                        <p className="font-heading font-semibold">{trip.season}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Group Size</p>
                        <p className="font-heading font-semibold">
                          Max {trip.maxGroupSize || 12} people
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Mountain className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Difficulty</p>
                        <p className="font-heading font-semibold">
                          {trip.difficulty || "Moderate"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Thermometer className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Category</p>
                        <p className="font-heading font-semibold">{trip.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="sticky top-20">
                  <CardContent className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{trip.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Destination</span>
                        <span className="font-medium">{trip.destination}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Season</span>
                        <span className="font-medium">{trip.season}</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full" size="lg" data-testid="button-book-trip">
                        Book This Trip
                      </Button>
                    </Link>

                    <p className="text-muted-foreground text-xs text-center mt-4">
                      Contact us for custom dates and group discounts
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {relatedTrips.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-center">
                Related Trips
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedTrips.map((relatedTrip) => (
                  <TripCard key={relatedTrip.id} trip={relatedTrip} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
