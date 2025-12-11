import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Menu, Search, Mountain, X } from "lucide-react";

const navItems = [
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
              <span className="font-heading font-bold text-lg leading-tight">Summit</span>
              <span className="font-heading text-xs text-muted-foreground leading-tight uppercase tracking-wider">Karakoram</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`font-medium ${location === item.href ? "bg-accent text-accent-foreground" : ""}`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

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
                      <span className="font-heading font-bold text-lg leading-tight">Summit</span>
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
                    {navItems.map((item) => (
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
