import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { name, email, phone, tripInterest, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }
  
  return res.status(201).json({ 
    success: true, 
    id: Date.now().toString(),
    message: 'Contact inquiry received. Note: For persistent storage, connect a database.'
  });
}
