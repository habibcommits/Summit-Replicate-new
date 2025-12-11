import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Expeditions from "@/pages/Expeditions";
import Trekking from "@/pages/Trekking";
import Tours from "@/pages/Tours";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import TripDetail from "@/pages/TripDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/expeditions" component={Expeditions} />
      <Route path="/trekking" component={Trekking} />
      <Route path="/tours" component={Tours} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/trip/:id" component={TripDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
