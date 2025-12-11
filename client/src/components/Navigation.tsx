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
import { Menu, Search, Mountain, X } from "lucide-react";
import { cn } from "@/lib/utils";

const expeditionItems = {
  "8000M Expedition": [
    { label: "K2 Expedition", href: "/expeditions" },
    { label: "Nanga Parbat Expedition", href: "/expeditions" },
    { label: "Gasherbrum I & II", href: "/expeditions" },
    { label: "Broad Peak Expedition", href: "/expeditions" },
  ],
  "7000M Expedition": [
    { label: "Spantik Expedition", href: "/expeditions" },
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
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-md bg-primary">
              <Mountain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight">North</span>
              <span className="font-heading text-xs text-muted-foreground leading-tight uppercase tracking-wider">Karakoram</span>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={cn(navigationMenuTriggerStyle(), location === "/" && "bg-accent text-accent-foreground")} data-testid="link-nav-home">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(location === "/expeditions" && "bg-accent text-accent-foreground")} data-testid="link-nav-expeditions">
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
                <NavigationMenuTrigger className={cn(location === "/trekking" && "bg-accent text-accent-foreground")} data-testid="link-nav-trekking">
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
                <Link href="/tours" className={cn(navigationMenuTriggerStyle(), location === "/tours" && "bg-accent text-accent-foreground")} data-testid="link-nav-tours">
                  Tour
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className={cn(navigationMenuTriggerStyle(), location === "/about" && "bg-accent text-accent-foreground")} data-testid="link-nav-travel-info">
                  Travel Info
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(location === "/about" && "bg-accent text-accent-foreground")} data-testid="link-nav-about-us">
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
                <Link href="/contact" className={cn(navigationMenuTriggerStyle(), location === "/contact" && "bg-accent text-accent-foreground")} data-testid="link-nav-contact">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            {searchOpen ? (
              <div className="relative hidden sm:flex items-center">
                <Input
                  type="search"
                  placeholder="Search trips..."
                  className="w-48 pr-8"
                  data-testid="input-search"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0"
                  onClick={() => setSearchOpen(false)}
                  data-testid="button-close-search"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button
                size="icon"
                variant="ghost"
                className="hidden sm:flex"
                onClick={() => setSearchOpen(true)}
                data-testid="button-open-search"
              >
                <Search className="w-5 h-5" />
              </Button>
            )}

            <Link href="/contact">
              <Button className="hidden sm:flex" data-testid="button-book-now-header">
                Book Now
              </Button>
            </Link>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="lg:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary">
                      <Mountain className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading font-bold text-lg leading-tight">North</span>
                      <span className="font-heading text-xs text-muted-foreground leading-tight uppercase tracking-wider">Karakoram</span>
                    </div>
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
    </header>
  );
}
