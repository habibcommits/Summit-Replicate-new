import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Award, Users, Mountain } from "lucide-react";
import trekkingImage from "@assets/stock_images/mountain_trekking_ex_54bf77cb.jpg";
import baseCampImage from "@assets/stock_images/mountain_base_camp_t_930df7d7.jpg";
import heroImage from "@assets/stock_images/majestic_mountain_pe_37c42122.jpg";

const features = [
  "Licensed by Pakistan Department of Tourist Services (#1152)",
  "Successful expeditions to K2, Nanga Parbat, and all 8000m peaks",
  "Professional, experienced mountain guides",
  "Complete trekking and expedition support",
  "Cultural and heritage tour packages",
];

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30" data-testid="section-about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-2">Welcome to</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Summit Karakoram
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Summit Karakoram is an established, licensed outfitter and guide to major
              mountaineering expeditions in the Karakoram & Himalaya Range. Since its
              commencement, Summit Karakoram has provided support for successful attempts
              on K2, Nanga Parbat, Gasherbrum 1, Gasherbrum 2, Broad Peak, and numerous
              other peaks.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              In addition to mountaineering support, Summit Karakoram provides trekking
              and hiking support, enabling our clients to view some of the most
              spectacular mountain scenery in the world. We also offer cultural and
              heritage tours to historic sites across Pakistan.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 bg-card border border-card-border rounded-md px-4 py-3">
                <Mountain className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-heading font-bold text-2xl">25+</p>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card border border-card-border rounded-md px-4 py-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-heading font-bold text-2xl">500+</p>
                  <p className="text-muted-foreground text-sm">Expeditions</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card border border-card-border rounded-md px-4 py-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-heading font-bold text-2xl">2000+</p>
                  <p className="text-muted-foreground text-sm">Happy Clients</p>
                </div>
              </div>
            </div>

            <Link href="/contact">
              <Button size="lg" data-testid="button-about-contact">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-md overflow-hidden aspect-[3/4]">
                <img
                  src={trekkingImage}
                  alt="Mountain trekking expedition"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-md overflow-hidden aspect-square">
                <img
                  src={baseCampImage}
                  alt="Base camp setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-md overflow-hidden aspect-[3/5]">
                <img
                  src={heroImage}
                  alt="Mountain summit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
