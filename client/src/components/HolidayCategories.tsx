import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import tourIcon from "@assets/1_1766088732498.png";
import climbingIcon from "@assets/2_1766088732499.png";
import expeditionIcon from "@assets/3_1766088732500.png";
import trekkingIcon from "@assets/4_1766088732500.png";

const categories = [
  {
    title: "LAILA PEAK EXPEDITION",
    description: "6k and below",
    icon: expeditionIcon,
    href: "/expeditions/laila-peak",
  },
  {
    title: "PASTORE PEAK EXPEDITION",
    description: "6k and below",
    icon: expeditionIcon,
    href: "/expeditions/pastore-peak",
  },
  {
    title: "KHUSROGANG EXPEDITION",
    description: "6k and below",
    icon: expeditionIcon,
    href: "/expeditions/khusrogang",
  },
  {
    title: "GONDOGORO PEAK EXPEDITION",
    description: "6k and below",
    icon: expeditionIcon,
    href: "/expeditions/gondogoro-peak",
  },
  {
    title: "TRANGO TOWER",
    description: "ROCK CLIMBING",
    icon: climbingIcon,
    href: "/climbing/trango-tower",
  },
];

export function HolidayCategories() {
  return (
    <section className="py-16 bg-background" data-testid="section-holiday-categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Book Your Holiday</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Choose Your Adventure
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            return (
              <Link key={category.title} href={category.href}>
                <Card 
                  className="p-6 text-center cursor-pointer group h-full transition-all hover-elevate"
                  style={{ backgroundColor: "#0d7678" }}
                  data-testid={`card-category-${category.title.toLowerCase()}`}
                >
                  <div className="relative h-48 flex items-center justify-center">
                    {/* Icon container - visible by default, hidden on hover */}
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    >
                      <img
                        src={category.icon}
                        alt={category.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Text container - hidden by default, visible on hover */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <h3 className="font-heading font-semibold text-lg mb-2 text-white">
                        {category.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
