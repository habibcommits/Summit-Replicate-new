import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain } from "lucide-react";

interface ExpeditionCategory {
  name: string;
  items: string[];
}

const expeditionCategories: ExpeditionCategory[] = [
  {
    name: "8k",
    items: ["K2 EXPEDITION", "BROAD PEAK EXPEDITION", "NANGA PARBAT EXPEDITION", "GASHABRUM I EXPEDITION", "GASHABRUM II EXPEDITION"],
  },
  {
    name: "7k",
    items: ["GASHABRUM III EXPEDITION", "GASHABRUM IV EXPEDITION", "MASHABRUM EXPEDITION", "SPANTIK EXPEDITION", "CHOGOLISA EXPEDITION", "K6 EXPEDITION", "RAKAPOSHI EXPEDITION"],
  },
  {
    name: "6k and below",
    items: ["LAILA PEAK EXPEDITION", "PASTORE PEAK EXPEDITION", "KHUSROGANG EXPEDITION", "GONDOGORO PEAK EXPEDITION"],
  },
  {
    name: "ROCK CLIMBING",
    items: ["TRANGO TOWER", "GREAT TOWER", "K7", "AMIN BRAQ", "NANGMA VALLEY"],
  },
];

export function ExpeditionsSection() {
  return (
    <section className="py-16 bg-background" data-testid="section-expeditions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Expeditions in Pakistan
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The Karakorum is a massive mountain range stretching across parts of Pakistan, India, and China. Choose your climbing peaks: 8000mtr, 7000mtr, 6000mtr peaks in the kingdom of Karakorum, Himalaya and Hindukush mountain range
          </p>
        </div>

        <div className="space-y-12">
          {expeditionCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Mountain className="w-6 h-6" style={{ color: "#0d7678" }} />
                <h3 className="font-heading font-bold text-2xl" style={{ color: "#0d7678" }}>
                  {category.name}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={`${categoryIndex}-${itemIndex}`}
                    className="p-6 text-center cursor-pointer group hover-elevate transition-all"
                    style={{ backgroundColor: "#0d7678" }}
                    data-testid={`card-expedition-${item.toLowerCase().replace(/ /g, '-')}`}
                  >
                    <div className="flex items-center justify-center gap-3 h-full">
                      <Mountain className="w-6 h-6 text-white flex-shrink-0" />
                      <h4 className="font-heading font-semibold text-white text-sm group-hover:text-white/80 transition-colors">
                        {item}
                      </h4>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
