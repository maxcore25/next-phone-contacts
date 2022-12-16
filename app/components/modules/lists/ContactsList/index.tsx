import { useState } from 'react';
import { Button, Stack, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getContacts } from '@/api/contactsApi';
import { Contact } from '@prisma/client';
import ContactCard from '@/components/elements/cards/ContactCard';
import { modalStore } from '@/store/modalStore';
import { observer } from 'mobx-react-lite';

const ContactsList = () => {
  const [newTodo, setNewTodo] = useState('');

  const {
    isLoading,
    isError,
    error,
    data: contacts,
  } = useQuery<Contact[]>({ queryKey: ['contacts'], queryFn: getContacts });

  const handleOpenModal = () => {
    modalStore.isOpen = true;
  };

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
      <Button
        variant='contained'
        sx={{ width: 'fit-content' }}
        onClick={handleOpenModal}>
        Add contact
      </Button>
    </Stack>
  );
};

export default observer(ContactsList);
