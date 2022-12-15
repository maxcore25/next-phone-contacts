import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Contact } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact | Contact[] | null | { message: string }>
) {
  if (req.method === 'GET') {
    const contacts = await prisma.contact.findMany();

    res.status(200).json(contacts);
  } else if (req.method === 'POST') {
    const contactData = req.body;

    try {
      const contacts = await prisma.contact.create({ data: contactData });

      res.status(200).json({ message: 'OK' });
    } catch (error) {
      res.status(500).json({ message: error as string });
    }
  }
}
