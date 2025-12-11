/**
 * Hero.tsx - Homepage Hero Section Component
 * 
 * Features an auto-rotating image carousel with animated text overlays.
 * Displays stunning mountain imagery with call-to-action buttons for
 * exploring expeditions and contacting the company.
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/lib/tripData";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slide content configuration - each slide has subtitle, title, and description
const slides = [
  {
    subtitle: "Plan Your Next Trip with",
    title: "North Karakoram",
    description: "An Excellent Opportunity to Travel and Experience Adventure",
  },
  {
    subtitle: "Discover the world's",
    title: "Hottest Destinations",
    description: "Embark on a journey of adventure with our tour company.",
  },
  {
    subtitle: "Experience the majesty of",
    title: "8000m Peaks",
    description: "Professional expeditions to K2, Nanga Parbat, and beyond.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden" data-testid="section-hero">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Mountain landscape ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ${
              index === currentSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <p className="text-white/90 text-lg md:text-xl mb-2 font-medium">
              {slide.subtitle}
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              {slide.title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8" data-testid="button-hero-contact">
                  Contact Us
                </Button>
              </Link>
              <Link href="/expeditions">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white"
                  data-testid="button-hero-explore"
                >
                  Explore Trips
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <Button
          size="icon"
          variant="ghost"
          className="bg-white/10 backdrop-blur-sm text-white border border-white/20"
          onClick={prevSlide}
          data-testid="button-hero-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? "bg-primary w-8" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              data-testid={`button-hero-dot-${index}`}
            />
          ))}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="bg-white/10 backdrop-blur-sm text-white border border-white/20"
          onClick={nextSlide}
          data-testid="button-hero-next"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
