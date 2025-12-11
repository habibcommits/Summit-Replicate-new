import { type User, type InsertUser, type Trip, type InsertTrip, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllTrips(): Promise<Trip[]>;
  getTripById(id: string): Promise<Trip | undefined>;
  getTripsByCategory(category: string): Promise<Trip[]>;
  getTripsBySeason(season: string): Promise<Trip[]>;
  searchTrips(query: string): Promise<Trip[]>;
  createTrip(trip: InsertTrip): Promise<Trip>;
  filterTrips(params: { category?: string; season?: string; destination?: string; search?: string }): Promise<Trip[]>;
  
  createContactInquiry(contact: InsertContact): Promise<Contact>;
  getAllContactInquiries(): Promise<Contact[]>;
}

const sampleTripsData: Trip[] = [
  {
    id: "1",
    title: "K2 Expedition",
    description: "K2 or Chogori, the world's second highest peak at 8611m, is located in the Karakoram Range. This expedition offers the ultimate mountaineering challenge with professional guides and comprehensive support throughout your journey to the summit.",
    shortDescription: "K2 or Chogori world second highest peak 8611m located in Karakoram Range...",
    destination: "Gilgit Baltistan",
    duration: "60 Days",
    price: 12500,
    category: "Expedition",
    season: "Summer",
    imageUrl: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&q=80",
    rating: 5,
    featured: true,
    difficulty: "Extreme",
    maxGroupSize: 12,
  },
  {
    id: "2",
    title: "Nanga Parbat Expedition",
    description: "Nanga Parbat 8126m is the ninth highest mountain in the world and known as the 'Killer Mountain'. This expedition takes you through the Diamir Face with experienced guides.",
    shortDescription: "Nanga Parbat 8126m is the ninth highest mountain in the world and...",
    destination: "Diamer District",
    duration: "50 Days - 49 Nights",
    price: 11900,
    category: "Expedition",
    season: "Summer",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    rating: 5,
    featured: true,
    difficulty: "Extreme",
    maxGroupSize: 10,
  },
  {
    id: "3",
    title: "Broad Peak Expedition",
    description: "Broad Peak 8047m situated in the Karakoram Range in Pakistan. Join our experienced team for this challenging yet rewarding 8000m expedition.",
    shortDescription: "Broad Peak 8047m situated Karakoram Range in Pakistan on...",
    destination: "Gilgit Baltistan",
    duration: "45 Days",
    price: 9800,
    category: "Expedition",
    season: "Summer",
    imageUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    rating: 5,
    featured: true,
    difficulty: "Extreme",
    maxGroupSize: 12,
  },
  {
    id: "4",
    title: "Rakaposhi Expedition",
    description: "Rakaposhi (7788m) is the valley's most famous peak. The huge pyramid of rock and ice dominates the view from Karimabad.",
    shortDescription: "Rakaposhi (7788m) is valley's most famous peak. The huge...",
    destination: "Gilgit Baltistan",
    duration: "35 Days",
    price: 7500,
    category: "Expedition",
    season: "Summer",
    imageUrl: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
    rating: 5,
    featured: false,
    difficulty: "Advanced",
    maxGroupSize: 10,
  },
  {
    id: "5",
    title: "Skardu Valley Blossom Tour",
    description: "North Karakoram offers the most beautiful city Skardu with cherry blossoms in spring. Experience the magical pink valley with comfortable accommodations.",
    shortDescription: "North Karakoram offering the most beautiful city Skardu and...",
    destination: "Skardu",
    duration: "10 Days - 9 Nights",
    price: 1650,
    category: "Tour",
    season: "Spring",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    rating: 5,
    featured: true,
    difficulty: "Easy",
    maxGroupSize: 20,
  },
  {
    id: "6",
    title: "Hunza Panorama Tour",
    description: "Explore the stunning Hunza Valley with its ancient forts, cherry blossoms, and views of Rakaposhi. A perfect cultural and scenic adventure.",
    shortDescription: "Hunza Valley with ancient forts and cherry blossoms. The perfect...",
    destination: "Hunza Valley",
    duration: "13 Days - 12 Nights",
    price: 1460,
    category: "Tour",
    season: "Spring",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    rating: 5,
    featured: false,
    difficulty: "Easy",
    maxGroupSize: 16,
  },
  {
    id: "7",
    title: "Khunjerab Pass Tour",
    description: "Khunjerab Pass at 4733m is a high mountain pass on the Karakoram Highway. Experience the China-Pakistan border and stunning high-altitude landscapes.",
    shortDescription: "Khunjerab Pass 4733m is a high mountain pass...",
    destination: "Gilgit Baltistan",
    duration: "12 Days - 11 Nights",
    price: 1440,
    category: "Tour",
    season: "Summer",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    rating: 4.8,
    featured: false,
    difficulty: "Moderate",
    maxGroupSize: 18,
  },
  {
    id: "8",
    title: "Culture Tours",
    description: "TAXILA MUSEUM (Dharmarajika Stupa-Taxila) - The modern town of Taxila is 35 km from Islamabad. Explore ancient Buddhist ruins and Pakistani heritage.",
    shortDescription: "TAXILA MUSEUM (DharmaRajika Stupa-Taxila) The modern town of Taxila is 35 km from...",
    destination: "Taxila",
    duration: "11 Days - 10 Nights",
    price: 1250,
    category: "Tour",
    season: "Autumn",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    rating: 4.9,
    featured: false,
    difficulty: "Easy",
    maxGroupSize: 20,
  },
  {
    id: "9",
    title: "Baltistan Autumn Tour",
    description: "Baltistan is also known as Baltiyul, which means the residence of Balti people. Experience golden autumn colors in this magical valley.",
    shortDescription: "Baltistan is also known as Baltiyul, which means the residence of Balti...",
    destination: "Gilgit Baltistan",
    duration: "11 Days - 10 Nights",
    price: 1050,
    category: "Tour",
    season: "Autumn",
    imageUrl: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
    rating: 4.9,
    featured: false,
    difficulty: "Easy",
    maxGroupSize: 18,
  },
  {
    id: "10",
    title: "Concordia Trek",
    description: "Trek to the throne room of the mountain gods - Concordia, surrounded by four 8000m peaks including K2, Broad Peak, and the Gasherbrums.",
    shortDescription: "Trek to Concordia, surrounded by four 8000m peaks including K2...",
    destination: "Gilgit Baltistan",
    duration: "21 Days - 20 Nights",
    price: 3200,
    category: "Trekking",
    season: "Summer",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    rating: 5,
    featured: true,
    difficulty: "Advanced",
    maxGroupSize: 14,
  },
  {
    id: "11",
    title: "Fairy Meadows Trek",
    description: "Fairy Meadows is located in the Raikot valley with stunning views of Nanga Parbat. Experience lush green meadows at the base of the Killer Mountain.",
    shortDescription: "Fairy Meadows is located in the Raikot valley with stunning views...",
    destination: "Diamer District",
    duration: "8 Days - 7 Nights",
    price: 890,
    category: "Trekking",
    season: "Summer",
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80",
    rating: 4.9,
    featured: false,
    difficulty: "Moderate",
    maxGroupSize: 16,
  },
  {
    id: "12",
    title: "Deosai Plateau Tour",
    description: "Deosai is one of the highest plateaus in the world, known for its unique wildlife including the Himalayan brown bear.",
    shortDescription: "Deosai is one of the highest plateaus in the world...",
    destination: "Gilgit Baltistan",
    duration: "17 Days - 16 Nights",
    price: 2100,
    category: "Tour",
    season: "Summer",
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    rating: 4.8,
    featured: false,
    difficulty: "Moderate",
    maxGroupSize: 16,
  },
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private trips: Map<string, Trip>;
  private contactInquiries: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.trips = new Map();
    this.contactInquiries = new Map();
    
    sampleTripsData.forEach(trip => {
      this.trips.set(trip.id, trip);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllTrips(): Promise<Trip[]> {
    return Array.from(this.trips.values());
  }

  async getTripById(id: string): Promise<Trip | undefined> {
    return this.trips.get(id);
  }

  async getTripsByCategory(category: string): Promise<Trip[]> {
    return Array.from(this.trips.values()).filter(
      (trip) => trip.category.toLowerCase() === category.toLowerCase()
    );
  }

  async getTripsBySeason(season: string): Promise<Trip[]> {
    return Array.from(this.trips.values()).filter(
      (trip) => trip.season.toLowerCase() === season.toLowerCase()
    );
  }

  async searchTrips(query: string): Promise<Trip[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.trips.values()).filter(
      (trip) =>
        trip.title.toLowerCase().includes(lowerQuery) ||
        trip.destination.toLowerCase().includes(lowerQuery) ||
        trip.description.toLowerCase().includes(lowerQuery) ||
        trip.category.toLowerCase().includes(lowerQuery) ||
        trip.season.toLowerCase().includes(lowerQuery)
    );
  }

  async filterTrips(params: { category?: string; season?: string; destination?: string; search?: string }): Promise<Trip[]> {
    let result = Array.from(this.trips.values());
    
    if (params.search) {
      const query = params.search.toLowerCase();
      result = result.filter(
        (trip) =>
          trip.title.toLowerCase().includes(query) ||
          trip.destination.toLowerCase().includes(query) ||
          trip.description.toLowerCase().includes(query)
      );
    }
    
    if (params.category && params.category !== "all") {
      result = result.filter((trip) => trip.category.toLowerCase() === params.category!.toLowerCase());
    }
    
    if (params.season && params.season !== "all") {
      result = result.filter((trip) => trip.season.toLowerCase() === params.season!.toLowerCase());
    }
    
    if (params.destination && params.destination !== "all") {
      result = result.filter((trip) => trip.destination.toLowerCase() === params.destination!.toLowerCase());
    }
    
    return result;
  }

  async createTrip(insertTrip: InsertTrip): Promise<Trip> {
    const id = randomUUID();
    const trip: Trip = { 
      ...insertTrip, 
      id,
      rating: insertTrip.rating ?? null,
      featured: insertTrip.featured ?? null,
      difficulty: insertTrip.difficulty ?? null,
      maxGroupSize: insertTrip.maxGroupSize ?? null,
    };
    this.trips.set(id, trip);
    return trip;
  }

  async createContactInquiry(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      phone: insertContact.phone ?? null,
      tripInterest: insertContact.tripInterest ?? null,
    };
    this.contactInquiries.set(id, contact);
    return contact;
  }

  async getAllContactInquiries(): Promise<Contact[]> {
    return Array.from(this.contactInquiries.values());
  }
}

export const storage = new MemStorage();
