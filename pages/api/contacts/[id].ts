import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Contact } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact | Contact[] | null | { message: string }>
) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      const contact = await prisma.contact.findUnique({
        where: {
          id: Number(id),
        },
      });

      res.status(200).json(contact);
    } catch {
      res.status(500).json({ message: 'Server side error' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const contactData = req.body;

      const savedContact = await prisma.contact.update({
        data: contactData,
        where: { id: Number(id) },
      });

      res.status(200).json(savedContact);
    } catch {
      res.status(500).json({ message: 'Server side error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      const deletedContact = await prisma.contact.delete({
        where: { id: Number(id) },
      });

      res.status(200).json(deletedContact);
    } catch {
      res.status(500).json({ message: 'Server side error' });
    }
  }
}
