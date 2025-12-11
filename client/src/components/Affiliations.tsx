import { affiliations } from "@/lib/tripData";

export function Affiliations() {
  return (
    <section className="py-16" data-testid="section-affiliations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-medium mb-2">Featured</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Affiliated With</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {affiliations.map((org, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 grayscale hover:grayscale-0 transition-all duration-300"
              data-testid={`affiliation-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <span className="font-heading font-bold text-lg text-muted-foreground">
                  {org.abbrev}
                </span>
              </div>
              <span className="text-sm text-muted-foreground text-center max-w-[120px]">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
