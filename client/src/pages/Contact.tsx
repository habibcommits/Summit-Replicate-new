import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import baseCampImage from "@assets/stock_images/mountain_base_camp_t_3e7d1acc.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={baseCampImage}
            alt="Mountain base camp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">We'd Love to Hear From You</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Contact Us
              </h1>
            </div>
          </div>
        </section>

        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
