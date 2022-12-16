import { Button, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getContacts } from '@/api/contactsApi';
import { Contact } from '@prisma/client';
import ContactCard from '@/components/elements/cards/ContactCard';
import { modalStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { QUERY_KEYS } from '@/constants';

const ContactsList = () => {
  const { data: contacts } = useQuery<Contact[]>({
    queryKey: [QUERY_KEYS.CONTACTS],
    queryFn: getContacts,
  });

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
