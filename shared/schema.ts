import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, real, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const trips = pgTable("trips", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  shortDescription: text("short_description").notNull(),
  destination: text("destination").notNull(),
  duration: text("duration").notNull(),
  price: real("price").notNull(),
  category: text("category").notNull(),
  season: text("season").notNull(),
  imageUrl: text("image_url").notNull(),
  rating: real("rating").default(5),
  featured: boolean("featured").default(false),
  difficulty: text("difficulty"),
  maxGroupSize: integer("max_group_size"),
});

export const insertTripSchema = createInsertSchema(trips).omit({ id: true });
export type InsertTrip = z.infer<typeof insertTripSchema>;
export type Trip = typeof trips.$inferSelect;

export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  tripInterest: text("trip_interest"),
});

export const insertContactSchema = createInsertSchema(contactInquiries).omit({ id: true });
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactInquiries.$inferSelect;

export const seasons = ["Spring", "Summer", "Autumn", "Winter"] as const;
export type Season = typeof seasons[number];

export const categories = ["Expedition", "Trekking", "Tour"] as const;
export type Category = typeof categories[number];

export const destinations = [
  "Gilgit Baltistan",
  "Hunza Valley",
  "Skardu",
  "Diamer District",
  "Taxila",
  "Nagar Valley",
] as const;
export type Destination = typeof destinations[number];
