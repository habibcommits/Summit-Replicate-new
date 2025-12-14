import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { TripCard } from "./TripCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { seasons, categories, destinations } from "@shared/schema";
import type { Trip } from "@shared/schema";

interface TripCatalogProps {
  initialCategory?: string;
  initialSeason?: string;
  showFilters?: boolean;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export function TripCatalog({
  initialCategory,
  initialSeason,
  showFilters = true,
  limit,
  title = "Explore Our Tours",
  subtitle = "Take a Look at Our",
}: TripCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "all");
  const [selectedSeason, setSelectedSeason] = useState<string>(initialSeason || "all");
  const [selectedDestination, setSelectedDestination] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (initialSeason) {
      setSelectedSeason(initialSeason);
    } else {
      setSelectedSeason("all");
    }
  }, [initialSeason]);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchQuery]);

  const buildQueryString = () => {
    const params = new URLSearchParams();
    if (selectedCategory !== "all") params.append("category", selectedCategory);
    if (selectedSeason !== "all") params.append("season", selectedSeason);
    if (selectedDestination !== "all") params.append("destination", selectedDestination);
    if (debouncedSearch) params.append("search", debouncedSearch);
    const queryString = params.toString();
    return queryString ? `?${queryString}` : "";
  };

  const { data: trips = [], isLoading } = useQuery<Trip[]>({
    queryKey: ["/api/trips", selectedCategory, selectedSeason, selectedDestination, debouncedSearch],
    queryFn: async () => {
      const response = await fetch(`/api/trips${buildQueryString()}`);
      if (!response.ok) throw new Error("Failed to fetch trips");
      return response.json();
    },
  });

  const displayedTrips = limit && !showAll ? trips.slice(0, limit) : trips;

  if (isLoading) {
    return (
      <section className="py-10" data-testid="section-trip-catalog">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Skeleton className="h-6 w-32 mx-auto mb-2" />
            <Skeleton className="h-10 w-64 mx-auto" />
          </div>
          {showFilters && (
            <Skeleton className="h-20 w-full mb-8 rounded-md" />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-[400px] rounded-md" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10" data-testid="section-trip-catalog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-primary font-medium mb-2">{subtitle}</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">{title}</h2>
        </div>

        {showFilters && (
          <div className="bg-card border border-card-border rounded-md p-4 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative lg:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search trips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-catalog-search"
                />
              </div>

              <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                <SelectTrigger data-testid="select-destination">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Destinations</SelectItem>
                  {destinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger data-testid="select-category">
                  <SelectValue placeholder="Activity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Activities</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                <SelectTrigger data-testid="select-season">
                  <SelectValue placeholder="Season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Seasons</SelectItem>
                  {seasons.map((season) => (
                    <SelectItem key={season} value={season}>
                      {season}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {displayedTrips.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No trips found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setDebouncedSearch("");
                setSelectedCategory(initialCategory || "all");
                setSelectedSeason(initialSeason || "all");
                setSelectedDestination("all");
              }}
              data-testid="button-clear-filters"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>

            {limit && trips.length > limit && !showAll && (
              <div className="text-center mt-10">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAll(true)}
                  data-testid="button-view-more-trips"
                >
                  View More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
