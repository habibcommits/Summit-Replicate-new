import { useParams, Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Clock,
  Mountain,
  Calendar,
  Users,
  ArrowLeft,
  Check,
  X,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { getExpeditionBySlug, expeditions } from "@/lib/expeditionData";

export default function ExpeditionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const expedition = getExpeditionBySlug(slug || "");

  if (!expedition) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-heading font-bold text-3xl mb-4">Expedition Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The expedition you're looking for doesn't exist.
            </p>
            <Link href="/expeditions">
              <Button data-testid="button-back-expeditions">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View All Expeditions
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const otherExpeditions = expeditions.filter((e) => e.id !== expedition.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={expedition.image}
            alt={expedition.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <Link
                href="/expeditions"
                className="inline-flex items-center text-white/70 mb-4 hover:text-white transition-colors"
                data-testid="link-back-expeditions"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Expeditions
              </Link>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {expedition.altitude}
                </Badge>
                <Badge variant="secondary">{expedition.difficulty}</Badge>
                <Badge variant="outline" className="border-white/30 text-white">
                  {expedition.bestSeason}
                </Badge>
              </div>
              <h1
                className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4"
                data-testid="text-expedition-name"
              >
                {expedition.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{expedition.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{expedition.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{expedition.groupSize}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-2xl mb-3">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {expedition.overview}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Mountain className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-xs mb-1">Altitude</p>
                      <p className="font-heading font-semibold text-sm">{expedition.altitude}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-xs mb-1">Duration</p>
                      <p className="font-heading font-semibold text-sm">{expedition.duration}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-xs mb-1">Best Season</p>
                      <p className="font-heading font-semibold text-sm">{expedition.bestSeason}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-xs mb-1">Group Size</p>
                      <p className="font-heading font-semibold text-sm">{expedition.groupSize}</p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl mb-3">Highlights</h2>
                  <ul className="space-y-2">
                    {expedition.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="w-full h-auto p-0 bg-transparent border-b border-border flex flex-wrap sm:grid sm:grid-cols-5">
                    <TabsTrigger 
                      value="details" 
                      className="flex-1 sm:flex-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-2 font-bold text-sm sm:text-base whitespace-normal text-center leading-tight"
                      data-testid="tab-details"
                    >
                      DETAILS
                    </TabsTrigger>
                    <TabsTrigger 
                      value="itinerary" 
                      className="flex-1 sm:flex-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-2 font-bold text-sm sm:text-base whitespace-normal text-center leading-tight"
                      data-testid="tab-itinerary"
                    >
                      MAP & ITINERARY
                    </TabsTrigger>
                    <TabsTrigger 
                      value="prices" 
                      className="flex-1 sm:flex-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-2 font-bold text-sm sm:text-base whitespace-normal text-center leading-tight"
                      data-testid="tab-prices"
                    >
                      DATES & PRICES
                    </TabsTrigger>
                    <TabsTrigger 
                      value="info" 
                      className="flex-1 sm:flex-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-2 font-bold text-sm sm:text-base whitespace-normal text-center leading-tight"
                      data-testid="tab-info"
                    >
                      HOLIDAY INFO
                    </TabsTrigger>
                    <TabsTrigger 
                      value="photos" 
                      className="flex-1 sm:flex-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-2 font-bold text-sm sm:text-base whitespace-normal text-center leading-tight"
                      data-testid="tab-photos"
                    >
                      PHOTOS
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="mt-4">
                    <div className="space-y-4">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <AlertTriangle className="w-5 h-5 text-secondary" />
                            Climber Requirements
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2">
                            {expedition.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                              </div>
                              Services Included
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2">
                              {expedition.servicesIncluded.map((service, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                  <span>{service}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                                <X className="w-4 h-4 text-red-600 dark:text-red-400" />
                              </div>
                              Not Included
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2">
                              {expedition.servicesNotIncluded.map((service, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <X className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                                  <span>{service}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="itinerary" className="mt-4">
                    <div className="space-y-3">
                      {expedition.timeline.map((item, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap">
                                {item.day}
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="prices" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-center py-8">
                          <h3 className="font-heading font-bold text-xl mb-4">Pricing Information</h3>
                          <p className="text-muted-foreground mb-6">
                            For detailed pricing information and customized packages, please contact us directly.
                          </p>
                          <Link href="/contact">
                            <Button data-testid="button-contact-pricing">
                              Get Pricing Information
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="info" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-heading font-bold text-xl mb-4">Holiday Information</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Location</h4>
                            <p className="text-muted-foreground">{expedition.location}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Difficulty Level</h4>
                            <p className="text-muted-foreground">{expedition.difficulty}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                            <p className="text-muted-foreground">{expedition.bestSeason}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">About This Expedition</h4>
                            <p className="text-muted-foreground">{expedition.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="photos" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-heading font-bold text-xl mb-4">Photo Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {expedition.gallery && expedition.gallery.length > 0 ? (
                            expedition.gallery.map((photo, idx) => (
                              <div key={idx} className="aspect-video rounded-md overflow-hidden">
                                <img src={photo} alt={`${expedition.name} - Photo ${idx + 1}`} className="w-full h-full object-cover" data-testid={`img-gallery-${idx}`} />
                              </div>
                            ))
                          ) : (
                            <>
                              <div className="aspect-video rounded-md overflow-hidden">
                                <img src={expedition.image} alt={expedition.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="aspect-video rounded-md overflow-hidden">
                                <img src={expedition.image} alt={expedition.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="aspect-video rounded-md overflow-hidden">
                                <img src={expedition.image} alt={expedition.name} className="w-full h-full object-cover" />
                              </div>
                            </>
                          )}
                        </div>
                        {(!expedition.gallery || expedition.gallery.length === 0) && (
                          <p className="text-muted-foreground text-sm mt-4 text-center">
                            More photos coming soon. Contact us for detailed expedition visuals.
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <Card className="sticky top-20">
                  <CardContent className="p-5">
                    <div className="space-y-2 mb-5">
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground text-sm">Duration</span>
                        <span className="font-medium text-sm">{expedition.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground text-sm">Difficulty</span>
                        <span className="font-medium text-sm">{expedition.difficulty}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground text-sm">Location</span>
                        <span className="font-medium text-sm">{expedition.location}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground text-sm">Season</span>
                        <span className="font-medium text-sm">{expedition.bestSeason}</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full" size="lg" data-testid="button-book-expedition">
                        Book This Expedition
                      </Button>
                    </Link>

                    <p className="text-muted-foreground text-xs text-center mt-3">
                      Custom dates available. Contact us for group discounts.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {otherExpeditions.length > 0 && (
          <section className="py-8 md:py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-center">
                Other Expeditions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherExpeditions.map((exp) => (
                  <Link
                    key={exp.id}
                    href={`/expedition/${exp.slug}`}
                    data-testid={`card-expedition-${exp.id}`}
                  >
                    <Card className="overflow-hidden hover-elevate cursor-pointer h-full">
                      <div className="relative h-40">
                        <img
                          src={exp.image}
                          alt={exp.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                            {exp.altitude}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-heading font-semibold mb-1">{exp.name}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{exp.location}</p>
                        <div className="text-sm text-muted-foreground">{exp.duration}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
