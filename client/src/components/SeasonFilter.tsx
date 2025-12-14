import { Link } from "wouter";
import { seasonImages } from "@/lib/tripData";
import type { Season } from "@shared/schema";

const seasons: Season[] = ["Spring", "Summer", "Autumn", "Winter"];

interface SeasonFilterProps {
  selectedSeason?: Season | null;
  onSelectSeason?: (season: Season) => void;
}

export function SeasonFilter({ selectedSeason, onSelectSeason }: SeasonFilterProps) {
  return (
    <section className="py-10 bg-muted/30" data-testid="section-seasons">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-primary font-medium mb-2">Find a Trip by</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Season</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {seasons.map((season) => (
            <button
              key={season}
              onClick={() => onSelectSeason?.(season)}
              className={`relative aspect-[4/3] rounded-md overflow-hidden group hover-elevate ${
                selectedSeason === season ? "ring-2 ring-primary ring-offset-2" : ""
              }`}
              data-testid={`button-season-${season.toLowerCase()}`}
            >
              <img
                src={seasonImages[season]}
                alt={`${season} season`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
                  {season}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
