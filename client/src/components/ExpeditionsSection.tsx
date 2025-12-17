import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, Calendar, TrendingUp } from "lucide-react";
import k2Image from "@assets/stock_images/k2_mountain_peak_sno_175a1326.jpg";
import nangaParbatImage from "@assets/stock_images/nanga_parbat_mountai_ef29d039.jpg";
import expeditionImage1 from "@assets/stock_images/mountain_expedition__228548ef.jpg";
import expeditionImage2 from "@assets/stock_images/mountain_expedition__b33a227e.jpg";
import expeditionImage3 from "@assets/stock_images/mountain_expedition__494acab3.jpg";
import k2Image2 from "@assets/stock_images/k2_mountain_peak_sno_c6e62836.jpg";

const expeditions = [
  {
    id: 1,
    title: "K2 Expedition",
    altitude: "8,611m",
    season: "June - August",
    difficulty: "Extreme",
    image: k2Image,
    slug: "k2-expedition",
  },
  {
    id: 2,
    title: "Nanga Parbat Expedition",
    altitude: "8,126m",
    season: "June - August",
    difficulty: "Extreme",
    image: nangaParbatImage,
    slug: "nanga-parbat-expedition",
  },
  {
    id: 3,
    title: "Broad Peak Expedition",
    altitude: "8,051m",
    season: "June - August",
    difficulty: "Very Difficult",
    image: expeditionImage1,
    slug: "broad-peak-expedition",
  },
  {
    id: 4,
    title: "Gasherbrum I & II",
    altitude: "8,080m / 8,034m",
    season: "June - August",
    difficulty: "Very Difficult",
    image: expeditionImage2,
    slug: "gasherbrum-expedition",
  },
  {
    id: 5,
    title: "Spantik Expedition",
    altitude: "7,027m",
    season: "June - August",
    difficulty: "Difficult",
    image: expeditionImage3,
    slug: "spantik-expedition",
  },
  {
    id: 6,
    title: "Rakaposhi Expedition",
    altitude: "7,788m",
    season: "June - August",
    difficulty: "Very Difficult",
    image: k2Image2,
    slug: "rakaposhi-expedition",
  },
];

export function ExpeditionsSection() {
  return (
    <section className="py-16 bg-background" data-testid="section-expeditions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Conquer the Giants</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Mountain Expeditions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our professional team on expeditions to Pakistan's legendary peaks, including five of the world's fourteen 8000m summits
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expeditions.map((expedition) => (
            <Link key={expedition.id} href={`/expedition/${expedition.slug}`}>
              <Card 
                className="overflow-visible hover-elevate cursor-pointer group"
                data-testid={`card-expedition-${expedition.id}`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-md">
                  <img
                    src={expedition.image}
                    alt={expedition.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="bg-primary text-primary-foreground">
                      {expedition.altitude}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">{expedition.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {expedition.season}
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      {expedition.difficulty}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/expeditions">
            <Button size="lg" data-testid="button-view-all-expeditions">
              View All Expeditions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
