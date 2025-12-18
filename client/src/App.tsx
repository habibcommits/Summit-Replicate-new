/**
 * App.tsx - Main Application Entry Point
 * 
 * North Karakoram Adventure Tourism Website
 * This file configures the React application with routing, state management,
 * and global UI providers for the adventure tourism platform.
 */

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ContentProtection } from "@/components/ContentProtection";
import { WelcomePopup } from "@/components/WelcomePopup";

// Page imports - each represents a main section of the website
import Home from "@/pages/Home";
import Expeditions from "@/pages/Expeditions";
import ExpeditionDetail from "@/pages/ExpeditionDetail";
import Trekking from "@/pages/Trekking";
import Tours from "@/pages/Tours";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import TripDetail from "@/pages/TripDetail";
import PakistanVisa from "@/pages/PakistanVisa";
import PaymentMethod from "@/pages/PaymentMethod";
import NotFound from "@/pages/not-found";

/**
 * Router Component
 * Defines all application routes using wouter for client-side navigation
 */
function Router() {
  return (
    <Switch>
      {/* Main landing page */}
      <Route path="/" component={Home} />
      {/* Trip category pages */}
      <Route path="/expeditions" component={Expeditions} />
      <Route path="/expedition/:slug" component={ExpeditionDetail} />
      <Route path="/trekking" component={Trekking} />
      <Route path="/tours" component={Tours} />
      {/* Information pages */}
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/pakistan-visa" component={PakistanVisa} />
      <Route path="/payment-method" component={PaymentMethod} />
      {/* Dynamic trip detail page with ID parameter */}
      <Route path="/trip/:id" component={TripDetail} />
      {/* 404 fallback for unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * App Component
 * Root component that wraps the application with necessary providers:
 * - QueryClientProvider: TanStack Query for server state management
 * - TooltipProvider: Global tooltip support for UI components
 * - Toaster: Toast notifications for user feedback
 * - FloatingButtons: WhatsApp and scroll-to-top buttons
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <FloatingButtons />
        <ContentProtection />
        <WelcomePopup />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
