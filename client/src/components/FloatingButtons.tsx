import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/923330228111?text=I'm%20interested%20in%20your%20services.%20Can%20I%20get%20more%20information?", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg group"
          data-testid="button-back-to-top"
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary animate-spin-slow" />
          <ArrowUp className="w-5 h-5 text-primary" />
        </button>
      )}
      
      <button
        onClick={openWhatsApp}
        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        data-testid="button-whatsapp"
      >
        <SiWhatsapp className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
