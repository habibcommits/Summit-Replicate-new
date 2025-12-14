import expeditionImage1 from "@assets/stock_images/mountain_expedition__228548ef.jpg";
import expeditionImage2 from "@assets/stock_images/mountain_expedition__b33a227e.jpg";
import expeditionImage3 from "@assets/stock_images/mountain_expedition__494acab3.jpg";
import heroImage1 from "@assets/stock_images/majestic_mountain_pe_743f6593.jpg";
import heroImage2 from "@assets/stock_images/majestic_mountain_pe_34e27685.jpg";

export interface ExpeditionTimeline {
  day: string;
  title: string;
  description: string;
}

export interface ExpeditionData {
  id: string;
  slug: string;
  name: string;
  altitude: string;
  location: string;
  duration: string;
  difficulty: string;
  bestSeason: string;
  price: number;
  groupSize: string;
  image: string;
  description: string;
  overview: string;
  timeline: ExpeditionTimeline[];
  servicesIncluded: string[];
  servicesNotIncluded: string[];
  requirements: string[];
  highlights: string[];
}

export const expeditions: ExpeditionData[] = [
  {
    id: "k2",
    slug: "k2-expedition",
    name: "K2 Expedition",
    altitude: "8,611m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "60-65 Days",
    difficulty: "Extremely Difficult",
    bestSeason: "June - August",
    price: 45000,
    groupSize: "6-12 climbers",
    image: expeditionImage1,
    description: "K2, the second highest mountain in the world, stands at 8,611 meters. Known as the 'Savage Mountain,' K2 is considered the most difficult and dangerous climb of all the 8,000m peaks.",
    overview: "The K2 Expedition is the ultimate mountaineering challenge. Located in the Karakoram Range on the China-Pakistan border, K2 demands exceptional climbing skills, physical fitness, and mental fortitude. Our expedition provides comprehensive support including experienced high-altitude guides, premium equipment, and thorough acclimatization schedules to maximize your summit success.",
    timeline: [
      { day: "Day 1-2", title: "Arrival in Islamabad", description: "Arrive in Islamabad. Team briefing, gear check, and documentation. Rest and acclimatization." },
      { day: "Day 3", title: "Fly to Skardu", description: "Scenic flight to Skardu (weather permitting) or drive via Karakoram Highway. Check into hotel." },
      { day: "Day 4-5", title: "Skardu Acclimatization", description: "Rest days in Skardu. Visit local attractions, final gear purchases, and team preparation." },
      { day: "Day 6-7", title: "Drive to Askole", description: "Jeep drive from Skardu to Askole, the last village before the trek begins. Organize porters and supplies." },
      { day: "Day 8-14", title: "Trek to Base Camp", description: "7-day trek through the Baltoro Glacier to K2 Base Camp (5,150m). Stops at Jola, Paiju, Urdukas, Gore II, and Concordia." },
      { day: "Day 15-20", title: "Base Camp Setup", description: "Establish base camp, acclimatization walks, and preparation for climbing. Medical checks and team meetings." },
      { day: "Day 21-35", title: "Rotations to Higher Camps", description: "Progressive acclimatization climbs. Establish Camp 1 (6,100m), Camp 2 (6,700m), and Camp 3 (7,300m)." },
      { day: "Day 36-50", title: "Summit Push Window", description: "Wait for optimal weather window. Final rest at base camp before summit attempt via Camp 4 (7,800m) to summit." },
      { day: "Day 51-57", title: "Descent & Trek Out", description: "Descend from summit, pack up camps, and trek back to Askole through Concordia and Baltoro." },
      { day: "Day 58-60", title: "Return Journey", description: "Drive to Skardu, fly to Islamabad. Celebration dinner and expedition debrief." },
    ],
    servicesIncluded: [
      "All government permits and royalties",
      "Liaison Officer and their expenses",
      "Experienced high-altitude climbing guides",
      "All meals at base camp and higher camps",
      "High-altitude tents and camping equipment",
      "Fixed ropes and technical climbing gear",
      "Oxygen bottles and regulators for summit",
      "Satellite phone and communication equipment",
      "Emergency evacuation insurance",
      "Porter and pack animal services for approach",
      "Airport transfers and ground transportation",
      "Hotel accommodation in cities",
    ],
    servicesNotIncluded: [
      "International flights to/from Pakistan",
      "Personal climbing gear and clothing",
      "Personal travel and medical insurance",
      "Tips and gratuities for staff",
      "Extra oxygen bottles beyond allocation",
      "Personal expenses and souvenirs",
      "Visa fees and passport expenses",
      "Additional hotel nights due to delays",
    ],
    requirements: [
      "Previous 8000m peak experience strongly recommended",
      "Minimum 7000m summit experience required",
      "Technical ice and rock climbing proficiency",
      "Excellent physical conditioning",
      "Medical clearance for high altitude",
      "Current mountaineering insurance",
    ],
    highlights: [
      "Summit the world's second highest peak",
      "Experience the legendary Baltoro Glacier",
      "Camp at the iconic Concordia with views of four 8000m peaks",
      "Challenge yourself on the most technical 8000m mountain",
    ],
  },
  {
    id: "nanga-parbat",
    slug: "nanga-parbat-expedition",
    name: "Nanga Parbat Expedition",
    altitude: "8,126m",
    location: "Diamer District, Pakistan",
    duration: "45-50 Days",
    difficulty: "Very Difficult",
    bestSeason: "June - August",
    price: 35000,
    groupSize: "6-10 climbers",
    image: expeditionImage2,
    description: "Nanga Parbat, the 'Killer Mountain,' rises 8,126 meters in the western Himalayas. It features the world's largest mountain face - the Rupal Face - rising 4,600m from base to summit.",
    overview: "The Nanga Parbat Expedition offers a challenging climb on one of the world's most dramatic peaks. Known for its massive size and unpredictable weather, Nanga Parbat requires excellent mountaineering skills. We offer routes via the Diamir Face (normal route) or the more challenging Rupal Face for experienced climbers.",
    timeline: [
      { day: "Day 1-2", title: "Arrival in Islamabad", description: "Arrive in Islamabad. Team briefing, permits verification, and gear check. Hotel accommodation." },
      { day: "Day 3", title: "Drive to Chilas", description: "Drive along the Karakoram Highway to Chilas. Views of the Indus River and Himalayan foothills." },
      { day: "Day 4", title: "Drive to Herligkoffer Base", description: "Continue drive to Diamir valley. Short trek to Herligkoffer Base Camp area." },
      { day: "Day 5-8", title: "Trek to Base Camp", description: "4-day trek to Diamir Base Camp (4,100m). Gradual acclimatization along the route." },
      { day: "Day 9-14", title: "Base Camp Acclimatization", description: "Establish base camp, acclimatization hikes, and preparation for climbing phase." },
      { day: "Day 15-30", title: "Rotations to Higher Camps", description: "Establish Camp 1 (5,000m), Camp 2 (5,800m), and Camp 3 (6,700m). Multiple acclimatization rotations." },
      { day: "Day 31-40", title: "Summit Push Window", description: "Wait for weather window. Summit push via Camp 4 (7,200m) to the summit (8,126m)." },
      { day: "Day 41-45", title: "Descent & Return", description: "Descend, pack up camps, trek out to road head. Drive back to Islamabad." },
    ],
    servicesIncluded: [
      "Climbing and trekking permits",
      "Liaison Officer expenses",
      "Professional mountain guides",
      "All meals at base camp and above",
      "High-altitude camping equipment",
      "Fixed ropes and anchors",
      "Supplemental oxygen for summit",
      "Emergency communication devices",
      "Helicopter rescue insurance",
      "Porter services to base camp",
      "Ground transportation in Pakistan",
      "City hotel accommodations",
    ],
    servicesNotIncluded: [
      "International airfare",
      "Personal climbing equipment",
      "Travel and medical insurance",
      "Staff gratuities",
      "Extra oxygen beyond standard",
      "Personal expenses",
      "Visa costs",
      "Delays due to weather",
    ],
    requirements: [
      "Previous 7000m+ peak experience",
      "Strong technical climbing skills",
      "Excellent physical fitness",
      "High altitude medical clearance",
      "Comprehensive mountaineering insurance",
    ],
    highlights: [
      "Climb the 'Killer Mountain' - 9th highest peak",
      "Witness the massive Rupal Face",
      "Experience authentic Himalayan adventure",
      "Stunning views of the western Himalayas",
    ],
  },
  {
    id: "gasherbrum",
    slug: "gasherbrum-expedition",
    name: "Gasherbrum I & II Expedition",
    altitude: "8,080m / 8,035m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "55-60 Days",
    difficulty: "Very Difficult",
    bestSeason: "June - August",
    price: 38000,
    groupSize: "6-10 climbers",
    image: expeditionImage3,
    description: "The Gasherbrum peaks offer an incredible double-header expedition. Gasherbrum I (Hidden Peak) at 8,080m and Gasherbrum II at 8,035m are the 11th and 13th highest mountains in the world.",
    overview: "Our Gasherbrum Expedition offers the unique opportunity to summit two 8000m peaks in one expedition. Located in the Karakoram Range, these peaks share a similar approach via the Baltoro Glacier. Gasherbrum II is often climbed first as preparation for the more technical Gasherbrum I.",
    timeline: [
      { day: "Day 1-2", title: "Arrival in Islamabad", description: "Arrive in Islamabad. Expedition briefing, permit verification, and equipment check." },
      { day: "Day 3", title: "Fly to Skardu", description: "Morning flight to Skardu with spectacular mountain views. Hotel check-in and rest." },
      { day: "Day 4-5", title: "Skardu Preparation", description: "Organize porters, final supplies, and team preparation. Acclimatization walks." },
      { day: "Day 6-7", title: "Drive to Askole", description: "Scenic jeep drive to Askole village. Porter and equipment organization." },
      { day: "Day 8-14", title: "Trek to Base Camp", description: "7-day trek through Baltoro Glacier via Concordia to Gasherbrum Base Camp (5,200m)." },
      { day: "Day 15-20", title: "Base Camp Setup", description: "Establish base camp, acclimatization, and preparation for climbing both peaks." },
      { day: "Day 21-35", title: "GII Climb & Rotations", description: "Establish camps on Gasherbrum II. Summit GII (8,035m) as acclimatization for GI." },
      { day: "Day 36-48", title: "GI Summit Push", description: "After GII success, attempt Gasherbrum I (Hidden Peak) at 8,080m." },
      { day: "Day 49-55", title: "Descent & Trek Out", description: "Pack up camps, trek back to Askole via Concordia and Baltoro." },
      { day: "Day 56-60", title: "Return to Islamabad", description: "Drive and fly to Islamabad. Expedition debrief and celebration." },
    ],
    servicesIncluded: [
      "Permits for both Gasherbrum I & II",
      "Liaison Officer support",
      "IFMGA certified guides",
      "All base camp and high camp meals",
      "High-altitude tents and equipment",
      "Fixed ropes and technical gear",
      "Supplemental oxygen supplies",
      "Satellite communication",
      "Emergency evacuation coverage",
      "Porter services throughout",
      "All ground transportation",
      "Hotel stays in cities",
    ],
    servicesNotIncluded: [
      "International flights",
      "Personal climbing gear",
      "Personal insurance policies",
      "Tips for local staff",
      "Additional oxygen requests",
      "Personal spending money",
      "Pakistan visa fees",
      "Weather delay costs",
    ],
    requirements: [
      "Previous 6000m+ climbing experience",
      "Technical ice climbing ability",
      "Excellent cardiovascular fitness",
      "High altitude medical approval",
      "Valid mountaineering insurance",
    ],
    highlights: [
      "Climb two 8000m peaks in one expedition",
      "Trek the legendary Baltoro Glacier",
      "Experience the beauty of Concordia",
      "Achieve rare double 8000m summit",
    ],
  },
  {
    id: "broad-peak",
    slug: "broad-peak-expedition",
    name: "Broad Peak Expedition",
    altitude: "8,051m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "50-55 Days",
    difficulty: "Difficult",
    bestSeason: "June - August",
    price: 32000,
    groupSize: "6-12 climbers",
    image: heroImage1,
    description: "Broad Peak, at 8,051m, is the 12th highest mountain in the world. Known for its massive summit plateau, it offers a technically accessible route compared to its neighbor K2.",
    overview: "The Broad Peak Expedition is an excellent choice for climbers seeking their first 8000m summit. While still demanding extreme fitness and mountaineering skills, the normal route is less technical than K2 or Nanga Parbat. Located just 8km from K2, Broad Peak offers stunning Karakoram views.",
    timeline: [
      { day: "Day 1-2", title: "Arrival in Islamabad", description: "Arrive in Islamabad. Team meeting, briefing, and gear verification." },
      { day: "Day 3", title: "Fly to Skardu", description: "Fly to Skardu (weather dependent). Enjoy views of the Karakoram Range." },
      { day: "Day 4-5", title: "Skardu Rest Days", description: "Acclimatization and rest in Skardu. Final preparations and shopping." },
      { day: "Day 6-7", title: "Drive to Askole", description: "Jeep journey to Askole. Organize porters and pack animals." },
      { day: "Day 8-14", title: "Trek to Base Camp", description: "Trek through Baltoro Glacier to Broad Peak Base Camp (4,900m)." },
      { day: "Day 15-20", title: "Base Camp Setup", description: "Establish base camp, acclimatization walks, and climbing preparation." },
      { day: "Day 21-35", title: "Rotations to High Camps", description: "Establish Camp 1 (5,700m), Camp 2 (6,400m), and Camp 3 (7,100m)." },
      { day: "Day 36-45", title: "Summit Window", description: "Wait for weather. Summit push to 8,051m via the West Spur route." },
      { day: "Day 46-50", title: "Descent & Trek Out", description: "Descend and pack camps. Trek back to Askole." },
      { day: "Day 51-55", title: "Return Journey", description: "Return to Skardu and fly to Islamabad. Celebration and departure." },
    ],
    servicesIncluded: [
      "All climbing permits and fees",
      "Liaison Officer provision",
      "Experienced climbing guides",
      "Base camp and high camp meals",
      "Camping and climbing equipment",
      "Fixed rope installation",
      "Supplemental oxygen (3 bottles)",
      "Communication equipment",
      "Emergency rescue insurance",
      "Porter and animal transport",
      "Overland transportation",
      "Hotel accommodation",
    ],
    servicesNotIncluded: [
      "International airfare",
      "Personal climbing equipment",
      "Travel insurance",
      "Staff tips and gratuities",
      "Extra oxygen bottles",
      "Personal expenses",
      "Pakistan visa",
      "Weather-related delays",
    ],
    requirements: [
      "Previous 6000m peak experience",
      "Good technical climbing skills",
      "Excellent physical condition",
      "Medical fitness certificate",
      "Mountaineering insurance required",
    ],
    highlights: [
      "Accessible first 8000m peak",
      "Views of K2 from base camp",
      "Trek the famous Baltoro Glacier",
      "Climb in the heart of the Karakoram",
    ],
  },
  {
    id: "spantik",
    slug: "spantik-expedition",
    name: "Spantik Expedition",
    altitude: "7,027m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "25-30 Days",
    difficulty: "Moderate to Difficult",
    bestSeason: "June - August",
    price: 6500,
    groupSize: "4-10 climbers",
    image: heroImage2,
    description: "Spantik, or Golden Peak, rises to 7,027m in the Karakoram. Known for its stunning golden color at sunset, it's an excellent introduction to high-altitude mountaineering.",
    overview: "The Spantik Expedition is ideal for climbers looking to gain experience on 7000m peaks. The normal route via the Southeast Ridge is technically moderate but requires solid mountaineering fundamentals. The peak offers spectacular views of Nanga Parbat, Rakaposhi, and the Karakoram giants.",
    timeline: [
      { day: "Day 1-2", title: "Arrival in Islamabad", description: "Arrive and meet the team. Briefing and gear check." },
      { day: "Day 3", title: "Drive to Gilgit", description: "Scenic drive along the Karakoram Highway to Gilgit." },
      { day: "Day 4", title: "Drive to Arandu", description: "Continue to Arandu village in the Chogo Lungma Valley." },
      { day: "Day 5-8", title: "Trek to Base Camp", description: "4-day trek to Spantik Base Camp (4,500m)." },
      { day: "Day 9-12", title: "Acclimatization", description: "Rest and acclimatization at base camp. Short hikes." },
      { day: "Day 13-20", title: "Summit Rotations", description: "Establish Camp 1 (5,400m) and Camp 2 (6,100m). Summit attempts." },
      { day: "Day 21-25", title: "Summit & Descent", description: "Final summit push and descent to base camp." },
      { day: "Day 26-30", title: "Trek Out & Return", description: "Trek to road head and return to Islamabad." },
    ],
    servicesIncluded: [
      "Climbing and trekking permits",
      "Professional mountain guide",
      "All meals during expedition",
      "Camping equipment",
      "Fixed ropes where needed",
      "Porter services",
      "Ground transportation",
      "Hotel accommodation in cities",
    ],
    servicesNotIncluded: [
      "International flights",
      "Personal climbing gear",
      "Travel insurance",
      "Tips for staff",
      "Personal expenses",
      "Visa fees",
    ],
    requirements: [
      "Previous high altitude trekking experience",
      "Basic mountaineering skills",
      "Good physical fitness",
      "Medical clearance",
    ],
    highlights: [
      "Perfect 7000m training peak",
      "Stunning 'Golden Peak' sunset views",
      "Views of Karakoram giants",
      "Experience authentic mountain culture",
    ],
  },
];

export function getExpeditionBySlug(slug: string): ExpeditionData | undefined {
  return expeditions.find((exp) => exp.slug === slug);
}

export function getExpeditionById(id: string): ExpeditionData | undefined {
  return expeditions.find((exp) => exp.id === id);
}
