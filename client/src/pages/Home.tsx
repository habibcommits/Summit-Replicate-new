import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { HolidayCategories } from "@/components/HolidayCategories";
import { TrekkingSection } from "@/components/TrekkingSection";
import { ExpeditionsSection } from "@/components/ExpeditionsSection";
import { ClientReviews } from "@/components/ClientReviews";
import { SocialIcons } from "@/components/SocialIcons";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <HolidayCategories />
        <TrekkingSection />
        <ExpeditionsSection />
        <ClientReviews />
        <SocialIcons />
      </main>
      <Footer />
    </div>
  );
}
