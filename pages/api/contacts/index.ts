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
  }
}
