import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function ContentProtection() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const showCopyWarning = () => {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 1500);
    };

    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
      showCopyWarning();
    };

    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'A' || target.closest('a') || target.closest('footer')) {
        return;
      }
      e.preventDefault();
      showCopyWarning();
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  if (!showWarning) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-none"
      data-testid="overlay-copy-warning"
    >
      <div className="bg-destructive text-destructive-foreground rounded-md p-6 flex flex-col items-center gap-3 animate-in fade-in zoom-in duration-200">
        <X className="w-12 h-12" />
        <span className="font-semibold text-lg">Content Protected</span>
        <span className="text-sm opacity-90">Copying is not allowed</span>
      </div>
    </div>
  );
}
