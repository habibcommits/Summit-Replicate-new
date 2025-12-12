import type { VercelRequest, VercelResponse } from '@vercel/node';

const destinations = ["Gilgit Baltistan", "Diamer District", "Skardu", "Hunza Valley", "Taxila"];

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.status(200).json(destinations);
}
