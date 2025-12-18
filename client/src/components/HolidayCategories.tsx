import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import tourIcon from "@assets/tour_1766088463289.png";
import climbingIcon from "@assets/climbing_(2)_1766088463287.png";
import expeditionIcon from "@assets/expiditon_1766088463288.png";
import trekkingIcon from "@assets/treking_1766088463289.png";

const categories = [
  {
    title: "Tours",
    description: "Explore scenic routes and cultural experiences",
    icon: tourIcon,
    href: "/tours",
  },
  {
    title: "Climbing",
    description: "Technical mountaineering adventures",
    icon: climbingIcon,
    href: "/expeditions",
  },
  {
    title: "Expeditions",
    description: "Summit the world's highest peaks",
    icon: expeditionIcon,
    href: "/expeditions",
  },
  {
    title: "Trekking",
    description: "Trek through pristine mountain trails",
    icon: trekkingIcon,
    href: "/trekking",
  },
];

export function HolidayCategories() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setActiveCard(activeCard === title ? null : title);
  };

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
            const isActive = activeCard === category.title;

            return (
              <Link key={category.title} href={category.href}>
                <Card 
                  className="p-6 text-center cursor-pointer group h-full bg-green-50 dark:bg-green-950/20 hover-elevate transition-all"
                  data-testid={`card-category-${category.title.toLowerCase()}`}
                  onClick={(e) => handleCardClick(e as any, category.title)}
                  onMouseEnter={() => setActiveCard(category.title)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="relative h-40 flex items-center justify-center">
                    {/* Icon container - visible on hover/click */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 md:group-hover:opacity-100"
                      }`}
                    >
                      <img
                        src={category.icon}
                        alt={category.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>

                    {/* Text container - hidden on hover/click */}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                        isActive
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    >
                      <h3 className="font-heading font-semibold text-lg mb-1 text-green-800 dark:text-green-100">
                        {category.title}
                      </h3>
                      <p className="text-green-600 dark:text-green-200 text-xs">
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
