import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/trips", async (req, res) => {
    try {
      const { category, season, destination, search } = req.query;
      
      const trips = await storage.filterTrips({
        category: typeof category === "string" ? category : undefined,
        season: typeof season === "string" ? season : undefined,
        destination: typeof destination === "string" ? destination : undefined,
        search: typeof search === "string" ? search : undefined,
      });
      
      res.json(trips);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trips" });
    }
  });

  app.get("/api/trips/featured", async (req, res) => {
    try {
      const trips = await storage.getAllTrips();
      const featured = trips.filter(t => t.featured);
      res.json(featured);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured trips" });
    }
  });

  app.get("/api/trips/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const trip = await storage.getTripById(id);
      
      if (!trip) {
        return res.status(404).json({ error: "Trip not found" });
      }
      
      res.json(trip);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trip" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json({ success: true, id: inquiry.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid form data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to submit contact inquiry" });
    }
  });

  app.get("/api/destinations", async (req, res) => {
    try {
      const trips = await storage.getAllTrips();
      const destinations = [...new Set(trips.map(t => t.destination))];
      res.json(destinations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch destinations" });
    }
  });

  app.get("/api/categories", async (req, res) => {
    try {
      const trips = await storage.getAllTrips();
      const categories = [...new Set(trips.map(t => t.category))];
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  app.get("/api/seasons", async (req, res) => {
    try {
      const trips = await storage.getAllTrips();
      const seasons = [...new Set(trips.map(t => t.season))];
      res.json(seasons);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch seasons" });
    }
  });

  return httpServer;
}
