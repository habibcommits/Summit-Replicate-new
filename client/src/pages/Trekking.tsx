import { Navigation } from "@/components/Navigation";
import { TripCatalog } from "@/components/TripCatalog";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { pageImages } from "@/lib/tripData";

export default function Trekking() {
  const heroImage = pageImages.adventure;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={heroImage}
            alt="Mountain trekking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Explore the Trails</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Trekking Adventures
              </h1>
            </div>
          </div>
        </section>

        <TripCatalog
          initialCategory="Trekking"
          title="Trekking Packages"
          subtitle="Discover Our"
          showFilters={true}
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
