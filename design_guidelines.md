# North Karakoram-Inspired Adventure Tourism Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium adventure tourism platforms (Airbnb Experiences, REI Adventures, Intrepid Travel) combined with the rugged, adventure-focused aesthetic of North Karakoram. The design emphasizes dramatic mountain imagery, clear expedition information hierarchy, and trust-building elements essential for high-value adventure bookings.

## Typography System

**Font Families:**
- Headings: Jost (bold, modern sans-serif via Google Fonts)
- Body: Noto Sans (clean, highly readable via Google Fonts)

**Type Scale:**
- Hero Headline: 3xl-6xl (48-60px desktop, 32-40px mobile) - Jost Bold
- Section Headers: 2xl-4xl (32-48px desktop, 24-32px mobile) - Jost SemiBold
- Card Titles: xl-2xl (24-32px) - Jost Medium
- Body Text: base-lg (16-18px) - Noto Sans Regular
- Metadata (duration, price): sm-base (14-16px) - Noto Sans Medium

## Layout System

**Spacing Units:** Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 (maintaining consistent rhythm)

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl inner containers
- Content blocks: max-w-6xl for main content areas
- Cards: Consistent padding of p-6 (desktop) and p-4 (mobile)

**Grid Patterns:**
- Tour/Expedition Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Featured Trips: grid-cols-1 lg:grid-cols-2 for larger hero cards
- Season Categories: grid-cols-2 lg:grid-cols-4
- Affiliate Logos: grid-cols-3 md:grid-cols-5

## Component Library

### Navigation
- Sticky header with logo left, navigation center, CTA button right
- Menu items: Home, Expeditions, Trekking, Tours, About, Contact
- Mobile: Hamburger menu with slide-out drawer
- Search icon in header for quick trip finder

### Hero Section
- Full-width background with mountain imagery overlay
- Centered content with large headline + supporting tagline
- Primary CTA button with backdrop blur treatment
- Height: 80vh to maintain impact while allowing scroll discovery

### Trip/Tour Cards
- Image at top (16:9 aspect ratio)
- Destination tag overlay on image (top-left corner)
- Title, brief description (2 lines max)
- Duration and price displayed prominently
- "Book Now" CTA button at bottom
- Hover: Subtle lift effect (translate-y-1) with shadow

### Season Filter Section
- Four large category cards (Spring, Summer, Autumn, Winter)
- Background images representing each season
- Semi-transparent overlay with season name
- Click to filter trips by season

### Search/Filter Component
- Dropdown selectors for: Destination, Activity Type, Season
- Search button with primary styling
- Positioned prominently before trip listings

### About Section
- Two-column layout: text left, image gallery right (3 stacked images)
- Company description with license/credential mentions
- "View More" or "Contact Us" CTA

### Pricing Display
- Large, bold numerals for price
- Currency symbol subtle
- "Per Person" or duration context below price

### Affiliation Badges
- Logo grid showcasing certifications and partnerships
- Grayscale logos with hover to full color transition
- Builds trust and credibility

## Images

**Hero Section:**
- Large dramatic mountain landscape (Karakoram range peak at sunrise/sunset)
- High contrast with trekkers/climbers for scale
- Image should evoke adventure and aspiration
- Placement: Full-width background covering 80vh

**Tour/Expedition Cards:**
- Authentic mountain/trekking photography
- Each card needs unique, high-quality imagery
- Images: K2 summit, mountain base camps, valley blossoms, cultural sites, high-altitude passes
- All images 16:9 aspect ratio for consistency

**About Section:**
- 3 supporting images: group expedition photo, summit celebration, scenic valley trek
- Portrait or square aspect ratio, stacked vertically

**Season Categories:**
- Spring: Cherry blossoms in mountain valleys
- Summer: Green meadows with snow peaks
- Autumn: Golden foliage with mountains
- Winter: Snow-covered peaks and landscapes

**Affiliate/Certification Logos:**
- Partner organization logos (Alpine Club, Tour Operators Association, Government Tourism)

## Page Sections (Marketing Landing Structure)

1. **Hero Section** (80vh) - Dramatic mountain imagery with headline and CTA
2. **Featured Expeditions** - 3-card grid showcasing premium trips
3. **Season Selection** - 4-card grid for seasonal filtering
4. **Trip Catalog** - 6-9 trip cards in 3-column grid with search/filter above
5. **About North Karakoram** - Two-column company introduction with imagery
6. **Expedition Highlights** - Carousel or grid of popular/affordable tours
7. **Affiliations** - Logo grid of certifications and partners
8. **Newsletter/Contact CTA** - Full-width section encouraging booking inquiries
9. **Footer** - Multi-column with quick links, contact info, social media, destinations

## Interactions & Micro-animations

**Minimal Motion Philosophy:**
- Card hover: Subtle lift (4px) with shadow increase
- Button hover: Background darken by 10%
- Image zoom on hover: 105% scale over 300ms
- Smooth scroll to anchor links
- No parallax or complex scroll-triggered animations

## Accessibility

- All images have descriptive alt text emphasizing adventure context
- Color contrast ratios meet WCAG AA standards (text on image overlays use semi-transparent dark backgrounds)
- Focus states visible on all interactive elements
- Touch targets minimum 44x44px for mobile

## Multi-Column Strategy

- Hero: Single focused column (centered)
- Trip Cards: 1-2-3 column responsive grid
- About: 2-column split (text/images)
- Footer: 4-column layout (desktop), stacked mobile
- Avoid multi-column for: expedition details, pricing tables, search forms

This design creates an aspirational yet trustworthy adventure booking platform that balances dramatic imagery with practical trip information, optimized for converting browsers into expedition participants.
