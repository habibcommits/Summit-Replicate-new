import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Michael Chen",
    country: "USA",
    rating: 5,
    text: "North Karakoram made our K2 Base Camp trek an unforgettable experience. The guides were incredibly knowledgeable and the logistics were flawless.",
    initials: "MC",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    country: "UK",
    rating: 5,
    text: "Professional team, amazing scenery, and perfect organization. Our expedition to Broad Peak was challenging but the support was outstanding.",
    initials: "SJ",
  },
  {
    id: 3,
    name: "Hans Mueller",
    country: "Germany",
    rating: 5,
    text: "I've been on many mountain expeditions, but North Karakoram's attention to safety and client care is unmatched. Highly recommended!",
    initials: "HM",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    country: "Japan",
    rating: 5,
    text: "The Fairy Meadows trek exceeded all expectations. The views of Nanga Parbat were breathtaking. Thank you for an amazing adventure!",
    initials: "YT",
  },
];

export function ClientReviews() {
  return (
    <section className="py-16 bg-muted/30" data-testid="section-reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from adventurers who have explored Pakistan with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="p-6"
              data-testid={`card-review-${review.id}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.country}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
