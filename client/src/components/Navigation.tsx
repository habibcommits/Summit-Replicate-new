/**
 * Navigation.tsx - Main Site Navigation Component
 * 
 * Responsive navigation header with:
 * - Desktop: Full mega-menu dropdowns for Expeditions, Trekking, and About sections
 * - Mobile: Slide-out sheet menu with simplified navigation
 * - Search functionality and Book Now CTA button
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoImage from "@assets/white_logo_(2)_1766041006047.png";

interface NavigationProps {
  onSearch?: (query: string) => void;
}

const expeditionItems = {
  "8000M Expedition": [
    { label: "K2 Expedition", href: "/expedition/k2-expedition" },
    { label: "Nanga Parbat Expedition", href: "/expedition/nanga-parbat-expedition" },
    { label: "Gasherbrum I & II", href: "/expedition/gasherbrum-expedition" },
    { label: "Broad Peak Expedition", href: "/expedition/broad-peak-expedition" },
  ],
  "7000M Expedition": [
    { label: "Spantik Expedition", href: "/expedition/spantik-expedition" },
    { label: "Gasherbrum V Expedition", href: "/expeditions" },
    { label: "Masherbrum Expedition", href: "/expeditions" },
    { label: "Diran Peak Expedition", href: "/expeditions" },
    { label: "Rakaposhi Expedition", href: "/expeditions" },
  ],
  "6000M": [
    { label: "Diran Peak Expedition", href: "/expeditions" },
    { label: "Bondit Peak Expedition", href: "/expeditions" },
    { label: "Paju Peak Expedition", href: "/expeditions" },
    { label: "Kolpin Peak Expedition", href: "/expeditions" },
  ],
  "Rock Climbing": [
    { label: "Trango Tower Expedition", href: "/expeditions" },
    { label: "Latok Ogri Expedition", href: "/expeditions" },
    { label: "Charakusa Valley Expedition", href: "/expeditions" },
    { label: "Nangma Valley Expedition", href: "/expeditions" },
  ],
};

const trekkingItems = {
  "Karakoram Range": [
    { label: "K2 Base Camp Trek", href: "/trekking" },
    { label: "Biafo & Snow Lake Trek", href: "/trekking" },
    { label: "K2 BC & Gondogoro la Trek", href: "/trekking" },
    { label: "Five Base Camp Trek", href: "/trekking" },
    { label: "Iqbal Top Trek", href: "/trekking" },
  ],
  "Himalayan Range": [
    { label: "Around Nanga Parbat Trek", href: "/trekking" },
    { label: "Nanga Parbat Rupal Face Trek", href: "/trekking" },
    { label: "Nanga Parbat Raikot Face Trek", href: "/trekking" },
    { label: "Nanga Parbat Diamir Face Trek", href: "/trekking" },
  ],
  "Hindukush Range": [
    { label: "Tirich Mir Base Camp", href: "/trekking" },
    { label: "Darkot Pass Trek", href: "/trekking" },
    { label: "Chilinji Pass Trek", href: "/trekking" },
    { label: "Naltar Ishkoman Trek", href: "/trekking" },
  ],
};

const aboutItems = [
  { label: "Our Team", href: "/team" },
  { label: "Mountaineering Rule", href: "/about" },
  { label: "Mountains List In Pakistan", href: "/about" },
  { label: "Peak Royalty In Pakistan", href: "/about" },
  { label: "Term & Conditions", href: "/about" },
  { label: "Company Info", href: "/about" },
];

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Expeditions", href: "/expeditions" },
  { label: "Trekking", href: "/trekking" },
  { label: "Tours", href: "/tours" },
  { label: "Our Team", href: "/team" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation({ onSearch }: NavigationProps = {}) {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim());
      }
      setLocation(`/expeditions?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border">
      <div className="flex">
        <div className="bg-white dark:bg-gray-900 flex items-center px-4 h-[65px]">
          <Link href="/" className="flex items-center" data-testid="link-home-logo">
            <img src={logoImage} alt="North Karakoram" className="h-14 w-auto" />
          </Link>
        </div>
        <div className="flex-1 bg-primary">
          <div className="container mx-auto px-4">
            <div className="flex h-[65px] items-center justify-between gap-4">
              <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" className={cn(navigationMenuTriggerStyle(), "bg-primary text-white hover:text-white hover:bg-primary/80 text-base font-bold", location === "/" && "bg-primary/80")} data-testid="link-nav-home">
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("bg-primary text-white hover:text-white hover:bg-primary/80 data-[state=open]:bg-primary/80 text-base font-bold", location === "/expeditions" && "bg-primary/80")} data-testid="link-nav-expeditions">
                      Expedition
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[700px] grid-cols-4 gap-3 p-4">
                        {Object.entries(expeditionItems).map(([category, items]) => (
                          <div key={category} className="space-y-2">
                            <h4 className="font-semibold text-sm text-foreground">{category}</h4>
                            <ul className="space-y-1">
                              {items.map((item) => (
                                <li key={item.label}>
                                  <Link 
                                    href={item.href}
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                                    data-testid={`link-expedition-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("bg-primary text-white hover:text-white hover:bg-primary/80 data-[state=open]:bg-primary/80 text-base font-bold", location === "/trekking" && "bg-primary/80")} data-testid="link-nav-trekking">
                      Trekking
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] grid-cols-3 gap-3 p-4">
                        {Object.entries(trekkingItems).map(([category, items]) => (
                          <div key={category} className="space-y-2">
                            <h4 className="font-semibold text-sm text-foreground">{category}</h4>
                            <ul className="space-y-1">
                              {items.map((item) => (
                                <li key={item.label}>
                                  <Link 
                                    href={item.href}
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                                    data-testid={`link-trekking-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/tours" className={cn(navigationMenuTriggerStyle(), "bg-primary text-white hover:text-white hover:bg-primary/80 text-base font-bold", location === "/tours" && "bg-primary/80")} data-testid="link-nav-tours">
                      Tour
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" className={cn(navigationMenuTriggerStyle(), "bg-primary text-white hover:text-white hover:bg-primary/80 text-base font-bold", location === "/about" && "bg-primary/80")} data-testid="link-nav-travel-info">
                      Travel Info
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("bg-primary text-white hover:text-white hover:bg-primary/80 data-[state=open]:bg-primary/80 text-base font-bold", location === "/about" && "bg-primary/80")} data-testid="link-nav-about-us">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[200px] p-2">
                        {aboutItems.map((item) => (
                          <li key={item.label}>
                            <Link 
                              href={item.href}
                              className="block text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors py-2 px-3"
                              data-testid={`link-about-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" className={cn(navigationMenuTriggerStyle(), "bg-primary text-white hover:text-white hover:bg-primary/80 text-base font-bold", location === "/contact" && "bg-primary/80")} data-testid="link-nav-contact">
                      Contact
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-2">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="relative hidden sm:flex items-center">
                    <Input
                      type="search"
                      placeholder="Search trips..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 pr-8 bg-white/20 text-primary-foreground placeholder:text-primary-foreground/70 border-primary-foreground/30"
                      data-testid="input-search"
                      autoFocus
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      type="button"
                      className="absolute right-0 text-primary-foreground hover:bg-primary/80"
                      onClick={() => setSearchOpen(false)}
                      data-testid="button-close-search"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="hidden sm:flex text-primary-foreground hover:bg-primary/80"
                    onClick={() => setSearchOpen(true)}
                    data-testid="button-open-search"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                )}

                <ThemeToggle />

                <Link href="/contact">
                  <Button className="hidden sm:flex bg-secondary text-secondary-foreground" data-testid="button-book-now-header">
                    Book Now
                  </Button>
                </Link>

                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="lg:hidden text-primary-foreground hover:bg-primary/80"
                      data-testid="button-mobile-menu"
                    >
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px]">
                    <div className="flex flex-col gap-4 mt-8">
                      <div className="flex items-center mb-4">
                        <img src={logoImage} alt="North Karakoram" className="h-20 w-auto" />
                      </div>

                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search trips..."
                          className="pl-10"
                          data-testid="input-mobile-search"
                        />
                      </div>

                      <nav className="flex flex-col gap-1">
                        {mobileNavItems.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                            <Button
                              variant="ghost"
                              className={`w-full justify-start font-medium ${location === item.href ? "bg-accent text-accent-foreground" : ""}`}
                              data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {item.label}
                            </Button>
                          </Link>
                        ))}
                      </nav>

                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full mt-4" data-testid="button-mobile-book-now">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
