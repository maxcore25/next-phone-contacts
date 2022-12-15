import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Contact } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact | Contact[] | null>
) {
  if (req.method === 'GET') {
    const contacts = await prisma.contact.findMany();

    res.status(200).json(contacts);
  } else if (req.method === 'POST') {
    const contactData = JSON.parse(req.body);

    const savedContact = await prisma.contact.create({ data: contactData });

    res.status(200).json(savedContact);
  } else if (req.method === 'PATCH') {
    const contactData = JSON.parse(req.body);

    const savedContact = await prisma.contact.update({
      data: contactData,
      where: contactData.id,
    });

    res.status(200).json(savedContact);
  } else if (req.method === 'DELETE') {
    const contactId = JSON.parse(req.body);

    const deletedContact = await prisma.contact.delete({ where: contactId });

    res.status(200).json(deletedContact);
  }
}
