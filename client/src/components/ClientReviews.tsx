import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

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
  {
    id: 5,
    name: "Emma Williams",
    country: "Australia",
    rating: 5,
    text: "An absolutely world-class experience! The team's expertise and attention to detail made our Hunza Valley trek the highlight of our lives.",
    initials: "EW",
  },
  {
    id: 6,
    name: "Diego Rodriguez",
    country: "Spain",
    rating: 5,
    text: "Exceeded expectations in every way. The mountain guides are experienced professionals and the camps were comfortable despite the altitude.",
    initials: "DR",
  },
  {
    id: 7,
    name: "Isabella Rossi",
    country: "Italy",
    rating: 5,
    text: "A life-changing adventure! The combination of stunning landscapes and expert guidance created an unforgettable experience.",
    initials: "IR",
  },
  {
    id: 8,
    name: "James Wilson",
    country: "Canada",
    rating: 5,
    text: "Incredible service from start to finish. The team managed logistics flawlessly and kept us safe throughout the expedition.",
    initials: "JW",
  },
];

export function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 1;
  const totalItems = reviews.length;
  
  // Create infinite loop array
  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Reset position when reaching end of loop (seamless reset)
  useEffect(() => {
    if (currentIndex >= totalItems * 2) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalItems]);

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

        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${(currentIndex % (totalItems * 3)) * 100}% - ${(currentIndex % (totalItems * 3)) * 24}px))`,
            }}
          >
            {infiniteReviews.map((review, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4"
              >
                <Card 
                  className="p-6 h-full"
                  data-testid={`card-review-${review.id}-${index}`}
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
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === (currentIndex % totalItems) ? "bg-primary w-8" : "bg-muted"
              }`}
              aria-label={`Go to review ${index + 1}`}
              data-testid={`button-review-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
