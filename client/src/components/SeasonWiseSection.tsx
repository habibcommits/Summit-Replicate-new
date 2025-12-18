import { Footprints } from "lucide-react";

export function SeasonWiseSection() {
  const seasons = [
    {
      title: "Spring Season",
      tours: [
        "Hunza Valley Blossom Tour",
        "Skardu Valley Blossom Tour",
        "Khaplu Valley Blossom Tour",
        "Astore Valley Blossom Tour",
      ],
    },
    {
      title: "Summer Season",
      tours: [
        "Fairy Meadow Tour",
        "Hunza Valley Summer Tour",
        "Skardu Valley Summer Tour",
        "Deosai Plateau Tour",
        "Shandur Polo Festival",
        "Khunjerab Pass Tour",
      ],
    },
    {
      title: "Autumn Season",
      tours: [
        "Phandar Autumn Tour",
        "Hunza Valley Autumn Tour",
        "Skardu Valley Autumn Tour",
        "Baltistan Autumn Tour",
        "Hunza Panorama Tour",
        "Cultural Tours",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {seasons.map((season, idx) => (
            <div key={idx}>
              <div className="bg-orange-400 text-white px-4 py-2 rounded-r-lg font-bold text-lg mb-6 inline-block skew-x-12">
                {season.title}
              </div>
              <div className="space-y-3">
                {season.tours.map((tour, tourIdx) => (
                  <div key={tourIdx} className="flex items-start gap-3">
                    <Footprints className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <span className="text-white font-medium">{tour}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
