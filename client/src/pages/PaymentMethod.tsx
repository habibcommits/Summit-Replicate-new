import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Banknote, MessageCircle, Users, CheckCircle } from "lucide-react";
import paymentHeaderImage from "@assets/stock_images/mountain_expedition__228548ef.jpg";

export default function PaymentMethod() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={paymentHeaderImage}
            alt="Payment Methods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Booking Information</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Payment Methods
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-muted-foreground text-lg mb-4 font-medium">
                For Booking make Payment of 50% advance per head and send us Message.
              </p>
              <p className="text-muted-foreground mb-6">
                You can deposit money from any bank or through mobile payment services. Choose the method that works best for you. After making the payment, send a screenshot through WhatsApp along with the names and CNIC numbers of all group members.
              </p>
              <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Payment Currency</p>
                    <p className="font-medium text-lg">PKR (Pakistani Rupees)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Advance Required</p>
                    <p className="font-medium text-lg">50% Per Person</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bank Transfer */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6 flex items-center gap-3">
                <Banknote className="w-8 h-8 text-primary" />
                Bank Transfer
              </h2>
              <Card className="p-8 bg-muted/30">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Bank Name</p>
                      <p className="font-medium text-lg">Habib Bank Limited</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Account Title</p>
                      <p className="font-medium text-lg">Asif Hussain</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Account Number</p>
                      <p className="font-medium text-lg">20440078002274011</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Branch</p>
                      <p className="font-medium text-lg">Alamdar Chowk Branch, Skardu</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mobile Payment Methods */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-primary" />
                Mobile Payment Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Easypaisa</h3>
                  <p className="text-muted-foreground mb-4">Easy and quick mobile payment service</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Number: 03435129893</p>
                    <p className="text-sm font-medium">Account: Asif Hussain</p>
                  </div>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Jazz Cash</h3>
                  <p className="text-muted-foreground mb-4">Fast and secure mobile wallet payments</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Number: 03229933208</p>
                    <p className="text-sm font-medium">Account: Asif Hussain</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Payment Instructions */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-primary" />
                After Payment
              </h2>
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Take a Screenshot</p>
                      <p className="text-muted-foreground text-sm">Screenshot of your payment proof from your bank or mobile payment app</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Send via WhatsApp</p>
                      <p className="text-muted-foreground text-sm">Send the screenshot to <span className="font-medium">+92 355 4175752</span></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Provide Member Details</p>
                      <p className="text-muted-foreground text-sm">Send names of all members with their CNIC numbers</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Group Booking */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Group Bookings
              </h2>
              <Card className="p-8 bg-muted/30">
                <p className="text-muted-foreground mb-4">
                  For group bookings, please send the names and CNIC numbers of all group members along with the payment screenshot. This helps us process your booking more efficiently and provide you with personalized service.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Contact us before booking to confirm availability for your group size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Group discounts may be available for larger parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>We offer customized itineraries for group requirements</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Security & Privacy */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Security & Privacy</h2>
              <Card className="p-8 bg-muted/30">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">All payment information is kept strictly confidential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Secure bank transfers through verified financial institutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Direct payment to authorized company accounts only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Payment receipt issued for all transactions</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What happens after I pay 50% advance?</h3>
                  <p className="text-muted-foreground text-sm">Your booking is confirmed after we receive your payment and member details. We will send you a confirmation email with your booking reference and itinerary details.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">When is the remaining 50% payment due?</h3>
                  <p className="text-muted-foreground text-sm">The remaining balance must be paid 2 weeks before your expedition or trek start date. We will send you a payment reminder 3 weeks before your departure.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I pay via international transfer?</h3>
                  <p className="text-muted-foreground text-sm">Yes, international bank transfers are accepted. Please contact us directly for international banking details and to ensure a smooth transfer process.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Is there a cancellation refund policy?</h3>
                  <p className="text-muted-foreground text-sm">Cancellations made 30+ days before departure receive 80% refund. Cancellations 15-29 days before receive 50% refund. Cancellations within 14 days are non-refundable.</p>
                </Card>
              </div>
            </div>

            {/* Contact for Confirmation */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">
                For any questions about payment or booking confirmation, please contact us:
              </p>
              <div className="space-y-2">
                <p className="font-heading font-bold text-2xl">+92 355 4175752</p>
                <p className="text-muted-foreground">WhatsApp: Available 24/7</p>
                <p className="text-muted-foreground text-sm mt-3 mb-6">Email: info@northkarakoram.com</p>
                <Button className="mt-6" data-testid="button-contact-whatsapp">
                  Contact Us on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
