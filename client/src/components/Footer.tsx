/**
 * Footer.tsx - Site Footer Component
 * 
 * Comprehensive footer with:
 * - Company branding and description
 * - Quick navigation links
 * - Popular destinations list
 * - Contact information
 * - Social media links
 * - Copyright and legal links
 */

import { Link } from "wouter";
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

// Navigation quick links for footer
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Expeditions", href: "/expeditions" },
  { label: "Trekking", href: "/trekking" },
  { label: "Tours", href: "/tours" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const destinations = [
  "Gilgit Baltistan",
  "Hunza Valley",
  "Skardu",
  "K2 Base Camp",
  "Fairy Meadows",
  "Deosai Plateau",
];

const activities = [
  "8000m Expeditions",
  "7000m Expeditions",
  "Peak Climbing",
  "Trekking",
  "Cultural Tours",
  "Adventure Tours",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground" data-testid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary">
                <Mountain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">North</span>
                <span className="font-heading text-xs text-muted-foreground leading-tight uppercase tracking-wider">
                  Karakoram
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Licensed outfitter and guide to major mountaineering expeditions in the
              Karakoram & Himalaya Range since 1998.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-social-youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
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
                <span className="text-muted-foreground text-sm">+92 345 123 4567</span>
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
