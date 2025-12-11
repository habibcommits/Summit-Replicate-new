import heroImage1 from "@assets/stock_images/majestic_mountain_pe_743f6593.jpg";
import heroImage2 from "@assets/stock_images/majestic_mountain_pe_34e27685.jpg";
import heroImage3 from "@assets/stock_images/majestic_mountain_pe_37c42122.jpg";
import trekkingImage1 from "@assets/stock_images/mountain_trekking_ex_54bf77cb.jpg";
import trekkingImage2 from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";
import trekkingImage3 from "@assets/stock_images/mountain_trekking_ex_40f18eca.jpg";
import springImage from "@assets/stock_images/cherry_blossom_sprin_c38c5d7d.jpg";
import summerImage from "@assets/stock_images/summer_green_meadow__8f865b59.jpg";
import autumnImage from "@assets/stock_images/autumn_golden_foliag_727c6f87.jpg";
import winterImage from "@assets/stock_images/winter_snow_mountain_7f1a8755.jpg";
import baseCampImage1 from "@assets/stock_images/mountain_base_camp_t_930df7d7.jpg";
import baseCampImage2 from "@assets/stock_images/mountain_base_camp_t_3e7d1acc.jpg";
import cultureImage from "@assets/stock_images/ancient_culture_tour_93a1f0b6.jpg";
import expeditionImage1 from "@assets/stock_images/mountain_expedition__228548ef.jpg";
import expeditionImage2 from "@assets/stock_images/mountain_expedition__b33a227e.jpg";
import expeditionImage3 from "@assets/stock_images/mountain_expedition__494acab3.jpg";
import valleyImage1 from "@assets/stock_images/pakistan_mountain_va_c849d0c5.jpg";
import valleyImage2 from "@assets/stock_images/pakistan_mountain_va_42ede9d1.jpg";
import valleyImage3 from "@assets/stock_images/pakistan_mountain_va_33d46532.jpg";
import adventureImage1 from "@assets/stock_images/adventure_trekking_g_ebb73f85.jpg";
import adventureImage2 from "@assets/stock_images/adventure_trekking_g_ae9918f3.jpg";

export const heroImages = [heroImage1, heroImage2, heroImage3];

export const seasonImages = {
  Spring: springImage,
  Summer: summerImage,
  Autumn: autumnImage,
  Winter: winterImage,
};

export const tripImageMap: Record<string, string> = {
  "1": heroImage1,
  "2": heroImage2,
  "3": baseCampImage1,
  "4": heroImage3,
  "5": springImage,
  "6": trekkingImage1,
  "7": summerImage,
  "8": cultureImage,
  "9": autumnImage,
  "10": trekkingImage2,
  "11": trekkingImage3,
  "12": baseCampImage2,
};

export const pageImages = {
  expedition: expeditionImage1,
  expedition2: expeditionImage2,
  expedition3: expeditionImage3,
  valley: valleyImage1,
  valley2: valleyImage2,
  valley3: valleyImage3,
  adventure: adventureImage1,
  adventure2: adventureImage2,
};

export const affiliations = [
  { name: "Alpine Club of Pakistan", abbrev: "ACP" },
  { name: "Pakistan Association of Tour Operators", abbrev: "PATO" },
  { name: "Pakistan Tourism Development Corporation", abbrev: "PTDC" },
  { name: "Ministry of Tourism", abbrev: "GOV" },
  { name: "Adventure Travel Trade Association", abbrev: "ATTA" },
];
