import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mountain, MapPin, Phone } from "lucide-react";
import logoImage from "@assets/white_logo_(3)_1766041182585.png";

export function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("welcomePopupSeen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("welcomePopupSeen", "true");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md" data-testid="welcome-popup">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary rounded-md p-2">
              <img src={logoImage} alt="North Karakoram" className="h-20 w-auto" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-heading text-center">
            Welcome to North Karakoram
          </DialogTitle>
          <DialogDescription className="text-center">
            Your Gateway to Pakistan's Majestic Peaks
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            <Mountain className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium text-sm">Expert Expeditions</p>
              <p className="text-xs text-muted-foreground">K2, Nanga Parbat, Broad Peak & More</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium text-sm">Based in Skardu</p>
              <p className="text-xs text-muted-foreground">Gilgit Baltistan, Pakistan</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium text-sm">Contact Us</p>
              <p className="text-xs text-muted-foreground">+92 355 5718293 | +92 333 0228111</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={handleClose} className="w-full" data-testid="button-close-popup">
            Explore Adventures
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
