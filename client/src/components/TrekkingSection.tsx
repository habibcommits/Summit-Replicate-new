import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, TrendingUp } from "lucide-react";
import trekkingImage1 from "@assets/stock_images/mountain_trekking_ex_54bf77cb.jpg";
import trekkingImage2 from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";
import trekkingImage3 from "@assets/stock_images/mountain_trekking_ex_40f18eca.jpg";
import valleyImage1 from "@assets/stock_images/pakistan_mountain_va_c849d0c5.jpg";
import valleyImage2 from "@assets/stock_images/pakistan_mountain_va_42ede9d1.jpg";
import baseCampImage from "@assets/stock_images/mountain_base_camp_t_930df7d7.jpg";

const trekkingTrips = [
  {
    id: 1,
    title: "K2 Base Camp Trek",
    location: "Karakoram Range",
    duration: "14-18 Days",
    difficulty: "Challenging",
    image: trekkingImage1,
    href: "/trekking",
  },
  {
    id: 2,
    title: "Fairy Meadows Trek",
    location: "Nanga Parbat Region",
    duration: "4-5 Days",
    difficulty: "Moderate",
    image: valleyImage1,
    href: "/trekking",
  },
  {
    id: 3,
    title: "Biafo & Snow Lake Trek",
    location: "Karakoram Range",
    duration: "16-20 Days",
    difficulty: "Challenging",
    image: trekkingImage2,
    href: "/trekking",
  },
  {
    id: 4,
    title: "Hushe Valley Trek",
    location: "Baltistan",
    duration: "8-10 Days",
    difficulty: "Moderate",
    image: valleyImage2,
    href: "/trekking",
  },
  {
    id: 5,
    title: "Gondogoro La Pass Trek",
    location: "Karakoram Range",
    duration: "18-21 Days",
    difficulty: "Challenging",
    image: trekkingImage3,
    href: "/trekking",
  },
  {
    id: 6,
    title: "Deosai Plateau Trek",
    location: "Gilgit-Baltistan",
    duration: "5-7 Days",
    difficulty: "Easy",
    image: baseCampImage,
    href: "/trekking",
  },
];

export function TrekkingSection() {
  return (
    <section className="py-16 bg-muted/30" data-testid="section-trekking">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Explore Pakistan</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Trekking in Pakistan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most breathtaking trekking routes in the Karakoram, Himalayas, and Hindu Kush mountain ranges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trekkingTrips.map((trip) => (
            <Link key={trip.id} href={trip.href}>
              <Card 
                className="overflow-visible hover-elevate cursor-pointer group"
                data-testid={`card-trekking-${trip.id}`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-md">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge 
                    className="absolute top-3 right-3"
                    variant={trip.difficulty === "Challenging" ? "destructive" : trip.difficulty === "Moderate" ? "secondary" : "default"}
                  >
                    {trip.difficulty}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">{trip.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {trip.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-primary" />
                      {trip.duration}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/trekking">
            <Button size="lg" data-testid="button-view-all-trekking">
              View All Trekking Trips
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
