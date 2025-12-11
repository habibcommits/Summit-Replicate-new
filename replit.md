# North Karakoram - Adventure Tourism Website

## Overview

North Karakoram is an adventure tourism website for a Pakistani mountaineering and expedition company. The platform showcases mountain expeditions (K2, Nanga Parbat, etc.), trekking adventures, and cultural tours in the Karakoram and Himalaya regions. Users can browse trips by category, season, or destination, view detailed trip information, and submit contact inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Design**: RESTful endpoints under `/api/*`
- **Development**: tsx for TypeScript execution

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with Zod validation via drizzle-zod
- **Current Storage**: In-memory storage implementation (ready for database migration)
- **Database Config**: PostgreSQL connection via `DATABASE_URL` environment variable

### Project Structure
```
├── client/src/          # React frontend
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route pages (Home, Expeditions, Trekking, Tours, About, Contact)
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utilities and data helpers
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   └── storage.ts       # Data access layer
├── shared/              # Shared types and schemas
│   └── schema.ts        # Drizzle schema definitions
└── attached_assets/     # Static images and branding assets
```

### Design System
- **Typography**: Jost (headings) and Noto Sans (body) via Google Fonts
- **Color Scheme**: Blue primary (#007BFF), neutral backgrounds
- **Components**: Card-based layouts for trip displays, responsive grid system

## External Dependencies

### Database
- PostgreSQL (configured via Drizzle, requires `DATABASE_URL`)
- Drizzle Kit for migrations (`db:push` command)

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-zod`: Database ORM and validation
- `express`: HTTP server framework
- `wouter`: Client-side routing
- `react-hook-form` / `zod`: Form handling and validation
- `lucide-react` / `react-icons`: Icon libraries

### Build & Development
- Vite for frontend bundling
- esbuild for server bundling (production)
- Replit-specific plugins for development (error overlay, cartographer)

### Vercel Deployment Configuration
- **Node.js Version**: 20.x (configured in `.nvmrc` and Vercel Project Settings)
- **Build Command**: `npx vite build`
- **Output Directory**: `dist/public`
- **API Functions**: Serverless functions in `/api` directory using `@vercel/node@3.0.0` runtime
- **Rewrites**: SPA fallback configured for client-side routing
