import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Compass, Mountain, Flag, Footprints } from "lucide-react";

const categories = [
  {
    title: "Tours",
    description: "Explore scenic routes and cultural experiences",
    icon: Compass,
    href: "/tours",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Climbing",
    description: "Technical mountaineering adventures",
    icon: Mountain,
    href: "/expeditions",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Expeditions",
    description: "Summit the world's highest peaks",
    icon: Flag,
    href: "/expeditions",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    title: "Trekking",
    description: "Trek through pristine mountain trails",
    icon: Footprints,
    href: "/trekking",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
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
          {categories.map((category) => (
            <Link key={category.title} href={category.href}>
              <Card 
                className="p-6 text-center hover-elevate cursor-pointer group h-full"
                data-testid={`card-category-${category.title.toLowerCase()}`}
              >
                <div className={`w-16 h-16 rounded-full ${category.color} mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
