import axios from '@/api';
import { Contact } from '@prisma/client';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async (contact: Contact) => {
  return await axios.post('/contacts', contact);
};

export const updateContact = async (contact: Contact) => {
  return await axios.put(`/contacts/${contact.id}`, contact);
};

export const deleteContact = async ({ id }: { id: number }) => {
  return await axios.delete(`/contacts/${id}`);
};
