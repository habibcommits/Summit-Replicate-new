import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You'll receive updates about our latest expeditions and tours.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-10 bg-primary" data-testid="section-newsletter">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-primary-foreground" />
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            Stay Updated on Our Adventures
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new expeditions,
            special offers, and mountain stories from the Karakoram.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              className="whitespace-nowrap"
              data-testid="button-newsletter-subscribe"
            >
              {isSubmitting ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
