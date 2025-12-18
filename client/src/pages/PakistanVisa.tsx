import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Clock, CheckCircle, ExternalLink } from "lucide-react";
import visaHeaderImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";

export default function PakistanVisa() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={visaHeaderImage}
            alt="Pakistan Visa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Travel Requirements</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Pakistan Visa & Passports
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-muted-foreground text-lg mb-4">
                All foreign nationals require a Visa to enter Pakistan and a Passport valid for at least 6 months beyond your intended stay.
              </p>
              <p className="text-muted-foreground mb-6">
                Pakistan has recently introduced an Online visa system where you can apply for Tourist, Student, Family, Pilgrimage and other visas online. If you're planning to visit Pakistan as a tourist, you have 3 options:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>On Arrival Tourist Visa (e-Visa)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Online Tourist Visa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Apply by Post or visit your nearest Pakistan embassy/consulate</span>
                </li>
              </ul>
            </div>

            {/* On Arrival Visa */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Pakistan On Arrival Visa (e-Visa)</h2>
              <p className="text-muted-foreground mb-6">
                You can apply for Pakistan on arrival visa if your country is listed in the e-visa countries list. We recommend applying as early as possible. The latest recommended time to apply is 48-72 hours prior to travel.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Documents Required</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Valid Passport</li>
                        <li>• Photograph</li>
                        <li>• Invitation Letter or Hotel Booking</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Processing Time</h3>
                      <p className="text-sm text-muted-foreground">48-72 Hours (Working Hours)</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Validity</h3>
                      <p className="text-sm text-muted-foreground">Valid for 30 Days (Single Entry)</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">How to Apply for On Arrival Visa</h3>
                <ol className="space-y-3 text-sm">
                  <li><strong>1. Preliminary Assessment:</strong> Verify eligibility and document requirements</li>
                  <li><strong>2. Preparation:</strong> Gather all supporting documents and prepare your photograph (up to 350KB)</li>
                  <li><strong>3. Online Application:</strong> Create an account and complete your application through the official Pakistan Online Visa System</li>
                  <li><strong>4. Payment:</strong> Pay your application fee using Credit/Debit Card</li>
                  <li><strong>5. Submission:</strong> Submit your application</li>
                </ol>
              </div>

              <a href="https://visa.nadra.gov.pk/" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  Apply Now
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Online Visa */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Pakistan Online Tourist Visa</h2>
              <p className="text-muted-foreground mb-6">
                Apply for a Pakistan online tourist visa if you're a national from eligible countries.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Documents Required</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Valid Passport</li>
                        <li>• Photograph</li>
                        <li>• Invitation Letter or Hotel Booking</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Processing Time</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Up to 3 months: 7-10 days</li>
                        <li>6 months: 7-10 days</li>
                        <li>6+ months: 4 weeks</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Validity Options</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Single entry</li>
                        <li>• Double entry</li>
                        <li>• Extendable</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <a href="https://visa.nadra.gov.pk/" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  Apply Online
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Embassy Information */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Pakistan Embassies & Consulates</h2>
              <p className="text-muted-foreground mb-8">
                Most Pakistan embassies and consulates accept visa applications by post or in-person. Contact your nearest mission for more information.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">United Kingdom</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">London</p>
                      <p className="text-muted-foreground">High Commission of Pakistan<br />35-36 Lowndes Square<br />London SW1X 9JN<br />Tel: 020 7664 9200</p>
                    </div>
                    <div>
                      <p className="font-medium">Manchester</p>
                      <p className="text-muted-foreground">Pakistan House<br />137 Dickenson Road, Manchester M14 5JB<br />Tel: 161 225 2005</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">United States</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Washington</p>
                      <p className="text-muted-foreground">Embassy of Pakistan<br />3517 International Court NW<br />Washington DC 20008<br />Tel: (202) 243 6500</p>
                    </div>
                    <div>
                      <p className="font-medium">New York</p>
                      <p className="text-muted-foreground">Consulate General<br />12 East 65th Street<br />New York NY 10021<br />Tel: (212) 879 5800</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Canada</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Ottawa</p>
                      <p className="text-muted-foreground">High Commission of Pakistan<br />10 Range Road<br />Ottawa ON K1N 8J3<br />Tel: 613-238-7881</p>
                    </div>
                    <div>
                      <p className="font-medium">Toronto</p>
                      <p className="text-muted-foreground">7880 Keele Street Unit 14<br />Vaughan, Ontario L4K 4G7</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">More Information</h3>
                  <div className="space-y-4 text-sm">
                    <a href="https://visa.nadra.gov.pk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                      Official Pakistan Visa Portal
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-muted-foreground text-xs italic">
                      Note: Issuance of Pakistan Visa is the prerogative of the Government of Pakistan.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="font-heading font-bold text-2xl mb-4">Ready to Plan Your Adventure?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for assistance with your visa application and travel arrangements to Pakistan.
              </p>
              <a href="/contact">
                <Button size="lg">Get in Touch</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
