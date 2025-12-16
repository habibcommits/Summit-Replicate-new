/**
 * TripCard.tsx - Reusable Trip Display Card Component
 * 
 * Renders trip information in three variants:
 * - default: Standard card with full details
 * - compact: Smaller card for grid layouts
 * - featured: Enhanced card with gradient overlay for featured trips
 * 
 * Displays trip image, title, destination, duration, and rating
 */

import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import type { Trip } from "@shared/schema";

const getWhatsAppLink = (tripTitle: string) => {
  const message = encodeURIComponent(`I'm interested in ${tripTitle}. Can I get more information?`);
  return `https://wa.me/923555718293?text=${message}`;
};

const getTripDetailLink = (trip: Trip) => {
  return `/trip/${trip.id}`;
};

interface TripCardProps {
  trip: Trip;
  variant?: "default" | "compact" | "featured";
}

export function TripCard({ trip, variant = "default" }: TripCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  if (variant === "compact") {
    return (
      <Card className="overflow-hidden group hover-elevate" data-testid={`card-trip-${trip.id}`}>
        <Link href={getTripDetailLink(trip)}>
          <div className="relative aspect-[16/10] overflow-hidden cursor-pointer">
            <img
              src={trip.imageUrl}
              alt={trip.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                {trip.category}
              </Badge>
            </div>
            <div className="absolute top-3 right-3 flex gap-0.5">
              {renderStars(trip.rating || 5)}
            </div>
          </div>
        </Link>
        <CardContent className="p-4">
          <Link href={getTripDetailLink(trip)}>
            <h3 className="font-heading font-semibold text-lg mb-1 line-clamp-1 cursor-pointer hover:text-primary transition-colors">{trip.title}</h3>
          </Link>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{trip.destination}</span>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {trip.shortDescription}
          </p>
          <a
            href={getWhatsAppLink(trip.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full gap-2" data-testid={`button-quote-trip-${trip.id}`}>
              <SiWhatsapp className="w-4 h-4" />
              Get Instant Quote
            </Button>
          </a>
        </CardContent>
      </Card>
    );
  }

  if (variant === "featured") {
    return (
      <Card className="overflow-hidden group hover-elevate" data-testid={`card-trip-featured-${trip.id}`}>
        <Link href={getTripDetailLink(trip)}>
          <div className="relative aspect-[16/9] overflow-hidden cursor-pointer">
            <img
              src={trip.imageUrl}
              alt={trip.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {trip.category}
              </Badge>
              {trip.featured && (
                <Badge variant="secondary" className="bg-yellow-500 text-black">
                  Featured
                </Badge>
              )}
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-1 mb-1">
                {renderStars(trip.rating || 5)}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-1">{trip.title}</h3>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{trip.destination}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{trip.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {trip.shortDescription}
          </p>
          <a
            href={getWhatsAppLink(trip.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full gap-2" data-testid={`button-quote-featured-${trip.id}`}>
              <SiWhatsapp className="w-4 h-4" />
              Get Instant Quote
            </Button>
          </a>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden group hover-elevate" data-testid={`card-trip-${trip.id}`}>
      <Link href={getTripDetailLink(trip)}>
        <div className="relative aspect-[16/10] overflow-hidden cursor-pointer">
          <img
            src={trip.imageUrl}
            alt={trip.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {trip.category}
            </Badge>
          </div>
          <div className="absolute top-3 right-3 flex gap-0.5">
            {renderStars(trip.rating || 5)}
          </div>
        </div>
      </Link>
      <CardContent className="p-5">
        <Link href={getTripDetailLink(trip)}>
          <h3 className="font-heading font-semibold text-xl mb-2 cursor-pointer hover:text-primary transition-colors">{trip.title}</h3>
        </Link>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{trip.destination}</span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {trip.shortDescription}
        </p>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <Clock className="w-4 h-4" />
          <span>{trip.duration}</span>
        </div>
        <a
          href={getWhatsAppLink(trip.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full gap-2" data-testid={`button-quote-trip-${trip.id}`}>
            <SiWhatsapp className="w-4 h-4" />
            Get Instant Quote
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
