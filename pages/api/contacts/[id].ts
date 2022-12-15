import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Contact } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact | Contact[] | null>
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    const contact = await prisma.contact.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(contact);
  } else if (req.method === 'PATCH') {
    const { id } = req.query;
    const contactData = JSON.parse(req.body);

    const savedContact = await prisma.contact.update({
      data: contactData,
      where: { id: Number(id) },
    });

    res.status(200).json(savedContact);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    const deletedContact = await prisma.contact.delete({
      where: { id: Number(id) },
    });

    res.status(200).json(deletedContact);
  }
}
