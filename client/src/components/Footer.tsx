/**
 * Footer.tsx - Site Footer Component
 * 
 * Comprehensive footer with:
 * - Company branding and description
 * - Quick navigation links
 * - Useful links section
 * - Popular destinations list
 * - Contact information
 * - Social media links
 * - Copyright and legal links
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { SiWhatsapp, SiYoutube, SiTiktok, SiInstagram, SiFacebook } from "react-icons/si";
import logoImage from "@assets/Untitled_design_1765623825631.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Expeditions", href: "/expeditions" },
  { label: "Trekking", href: "/trekking" },
  { label: "Tours", href: "/tours" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const usefulLinks = [
  { label: "Pakistan Visa", href: "https://visa.nadra.gov.pk/", external: true },
  { label: "Payment Method", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

const destinations = [
  "Gilgit Baltistan",
  "Hunza Valley",
  "Skardu",
  "K2 Base Camp",
  "Fairy Meadows",
  "Deosai Plateau",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground" data-testid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <img src={logoImage} alt="North Karakoram" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Licensed outfitter and guide to major mountaineering expeditions in the
              Karakoram & Himalaya Range since 1998.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/share/1CtcRSQ4Yw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/northkarakoram?igsh=MWlseHgycWNybWx2MA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@northkarakoram?si=vYCoNIBV9C3J1flk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-social-youtube"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@northkarakoram?_r=1&_t=ZS-92DeQDrmQvi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-social-tiktok"
              >
                <SiTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923555718293"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-social-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 uppercase tracking-wide">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:text-primary/80 transition-colors flex items-center gap-1"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Destinations</h3>
            <ul className="space-y-2">
              {destinations.map((dest) => (
                <li key={dest}>
                  <span className="text-muted-foreground text-sm">{dest}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Skardu, Gilgit Baltistan, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <span className="text-muted-foreground text-sm block">+92 355 5718293</span>
                  <span className="text-muted-foreground text-sm block">+92 333 0228111</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@northkarakoram.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} North Karakoram. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
