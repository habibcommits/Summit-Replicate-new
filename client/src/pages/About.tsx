import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";
import { Affiliations } from "@/components/Affiliations";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield } from "lucide-react";
import trekkingImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide safe, professional, and unforgettable mountain experiences while respecting local communities and the environment.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the world's most trusted adventure company, inspiring people to explore the majestic peaks of the Karakoram and Himalaya.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Safety first, environmental stewardship, cultural respect, professional excellence, and creating lasting memories for our clients.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    description:
      "Expert guides, quality equipment, comprehensive support, and an unwavering commitment to your safety and satisfaction.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={trekkingImage}
            alt="Mountain expedition team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Get to Know Us</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                About North Karakoram
              </h1>
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-primary font-medium mb-2">What Drives Us</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl">
                Our Values & Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Affiliations />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
