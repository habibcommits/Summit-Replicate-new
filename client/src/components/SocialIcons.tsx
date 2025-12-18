import { SiFacebook, SiInstagram, SiYoutube, SiTiktok, SiWhatsapp } from "react-icons/si";

const socialLinks = [
  {
    name: "Facebook",
    icon: SiFacebook,
    href: "https://www.facebook.com/share/1CtcRSQ4Yw/?mibextid=wwXIfr",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/northkarakoram?igsh=MWlseHgycWNybWx2MA%3D%3D&utm_source=qr",
    color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    href: "https://youtube.com/@northkarakoram?si=vYCoNIBV9C3J1flk",
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    href: "https://www.tiktok.com/@northkarakoram?_r=1&_t=ZS-92DeQDrmQvi",
    color: "bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200",
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    href: "https://wa.me/923555718293",
    color: "bg-green-600 hover:bg-green-700",
  },
];

export function SocialIcons() {
  return (
    <section className="py-12 bg-background" data-testid="section-social">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading font-semibold text-2xl mb-2">
            Follow Us on Social Media
          </h2>
          <p className="text-muted-foreground">
            Stay connected for the latest adventures and updates
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center text-white transition-transform hover:scale-110`}
              data-testid={`link-social-${social.name.toLowerCase()}`}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
