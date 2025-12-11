import type { VercelRequest, VercelResponse } from '@vercel/node';

const seasons = ["Summer", "Spring", "Autumn"];

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.status(200).json(seasons);
}
