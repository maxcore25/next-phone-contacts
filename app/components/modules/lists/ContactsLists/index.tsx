import { useState } from 'react';
import { Button, Stack, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getContacts } from '@/api/contactsApi';
import { Contact } from '@prisma/client';
import ContactCard from '@/components/elements/cards/ContactCard';

const ContactsLists = () => {
  const [newTodo, setNewTodo] = useState('');

  const {
    isLoading,
    isError,
    error,
    data: contacts,
  } = useQuery<Contact[]>({ queryKey: ['contacts'], queryFn: getContacts });

  return (
    <Stack sx={{ gap: '32px' }}>
      <Typography variant='h4' component='h2' sx={{ fontWeight: 'bold' }}>
        Contacts
      </Typography>
      <Stack sx={{ gap: '32px' }}>
        {contacts?.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </Stack>
      <Button variant='contained' sx={{ width: 'fit-content' }}>
        Add contact
      </Button>
    </Stack>
  );
};

export default ContactsLists;
