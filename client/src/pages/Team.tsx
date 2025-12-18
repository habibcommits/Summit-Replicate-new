import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { SiWhatsapp, SiYoutube, SiTiktok, SiInstagram, SiFacebook } from "react-icons/si";
import trekkingImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";
import ceoImage from "@assets/Muhammad_AliFounder_&_CEO_1765743996704.png";
import operationManagerImage from "@assets/Mohsin_Ali_Operation_Manager_1765743996704.png";
import tourConsultantImage from "@assets/Ibrahim_khalil_Operation_Manager_&_Tour_Consultant_1765743996703.png";
import logisticsImage from "@assets/ghulam_abbas_logistic_specilist_1765743996703.png";
import fieldManagerImage from "@assets/Field_Manager_&_tour_guide_1765743996702.png";
import tourGuideImage from "@assets/Murtaza_Ali_Field_Manager_&_tour_guide_1765743996705.png";

const teamMembers = [
  {
    id: 1,
    name: "Mohsin Ali",
    role: "CEO and Founder",
    image: operationManagerImage,
    expertise: ["Strategic Planning", "Expedition Leadership", "Business Development", "Mountain Tourism", "Team Building"],
    description: "With over 15 years of mountaineering experience, Mohsin Ali founded North Karakoram with a vision to share the majestic beauty of Pakistan's peaks with adventurers worldwide. His deep knowledge of the Karakoram range and passion for sustainable tourism drives our company's mission."
  },
  {
    id: 2,
    name: "Muhammad Ali",
    role: "Operation Manager",
    image: ceoImage,
    expertise: ["Logistics Management", "Team Coordination", "Safety Protocols", "Route Planning", "Crisis Management"],
    description: "Muhammad Ali ensures seamless operations across all expeditions and treks. His meticulous attention to detail and expertise in coordinating complex logistics guarantees that every adventure runs smoothly from start to finish."
  },
  {
    id: 3,
    name: "Ibrahim Khalil",
    role: "Operation Manager and Tour Consultant",
    image: tourConsultantImage,
    expertise: ["Tour Planning", "Client Relations", "Custom Itineraries", "Customer Service", "Travel Consulting"],
    description: "Ibrahim combines operational excellence with personalized tour consulting. He works closely with clients to design bespoke adventures that match their skill levels, preferences, and dreams of conquering Pakistan's legendary peaks."
  },
  {
    id: 4,
    name: "Ghulam Abbas",
    role: "Logistic Specialist",
    image: logisticsImage,
    expertise: ["Equipment Management", "Supply Chain", "Base Camp Operations", "Inventory Control", "Vendor Relations"],
    description: "Ghulam is the backbone of our expedition logistics. His expertise in managing equipment, supplies, and base camp operations ensures that every expedition is properly equipped and supported throughout the journey."
  },
  {
    id: 5,
    name: "Muhammad Ibrahim",
    role: "Head Cook",
    image: fieldManagerImage,
    expertise: ["High Altitude Cooking", "Nutrition Planning", "Team Catering", "Camp Kitchen Management"],
    description: "Muhammad Ibrahim is our expert Head Cook who ensures all expedition members are well-nourished with delicious, nutritious meals even at the highest altitudes. His expertise in high-altitude cooking and meal planning keeps teams energized throughout their adventures."
  },
  {
    id: 6,
    name: "Murtaza Ali",
    role: "Field Manager and Tour Guide",
    image: tourGuideImage,
    expertise: ["High Altitude Trekking", "Cultural Interpretation", "Client Safety", "Mountain Navigation", "First Aid"],
    description: "Murtaza brings energy and expertise to every expedition. His passion for the mountains and ability to connect with diverse groups makes him an invaluable guide for both challenging climbs and cultural explorations."
  }
];

const socialLinks = [
  { icon: SiYoutube, href: "https://youtube.com/@northkarakoram?si=vYCoNIBV9C3J1flk", label: "YouTube" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@northkarakoram?_r=1&_t=ZS-92DeQDrmQvi", label: "TikTok" },
  { icon: SiInstagram, href: "https://www.instagram.com/northkarakoram?igsh=MWlseHgycWNybWx2MA%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: SiFacebook, href: "https://www.facebook.com/share/1CtcRSQ4Yw/?mibextid=wwXIfr", label: "Facebook" },
  { icon: SiWhatsapp, href: "https://wa.me/923555718293", label: "WhatsApp" }
];

function FlipCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <div className="group perspective-1000" data-testid={`card-team-member-${member.id}`}>
      <div className="relative w-full h-[480px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden bg-card border border-border">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-6">
            <h3 className="font-heading font-bold text-xl mb-1" data-testid={`text-member-name-${member.id}`}>
              {member.name}
            </h3>
            <p className="text-primary font-medium" data-testid={`text-member-role-${member.id}`}>
              {member.role}
            </p>
          </div>
        </div>
        
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg overflow-hidden bg-primary text-primary-foreground p-6 flex flex-col justify-center">
          <h3 className="font-heading font-bold text-xl mb-2">
            {member.name}
          </h3>
          <p className="text-primary-foreground/90 font-medium mb-4">
            {member.role}
          </p>
          <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
            {member.description}
          </p>
          <div>
            <p className="text-xs uppercase tracking-wide mb-2 text-primary-foreground/70">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-white/20 text-primary-foreground border-0">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={trekkingImage}
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Meet the Experts</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Our Team
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2">Passionate Professionals</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                The People Behind Your Adventures
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our dedicated team of mountaineering experts, operations specialists, and guides 
                work together to deliver safe, unforgettable experiences in the world's most 
                spectacular mountain ranges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <FlipCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Connect With Us
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Follow our adventures and get in touch with our team on social media
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-md bg-muted flex items-center justify-center hover-elevate"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/923555718293?text=I'm%20interested%20in%20your%20services.%20Can%20I%20get%20more%20information?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-elevate"
                data-testid="link-whatsapp-contact"
              >
                <SiWhatsapp className="w-5 h-5" />
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
