import type { VercelRequest, VercelResponse } from '@vercel/node';

const categories = ["Expedition", "Tour", "Trekking"];

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.status(200).json(categories);
}
