import { deleteContact, updateContact } from '@/api/contactsApi';
import { QUERY_KEYS } from '@/constants';
import { contactStore } from '@/store';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Contact } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';

const ContactForm = () => {
  const queryClient = useQueryClient();

  const updateTodoMutation = useMutation(updateContact, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CONTACTS] });
    },
  });

  const deleteTodoMutation = useMutation(deleteContact, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CONTACTS] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTodoMutation.mutate(contactStore.selectedContact as Contact);
  };

  const handleDeleteContact = () => {
    deleteTodoMutation.mutate({
      id: contactStore.selectedContact.id as number,
    });
    contactStore.selectedContact = {
      name: '',
      email: '',
      phone_mobile: '',
      phone_home: '',
    };
  };

  return (
    <Stack sx={{ gap: '32px' }}>
      <Typography variant='h4' component='h2' sx={{ fontWeight: 'bold' }}>
        Contact details
      </Typography>
      <Stack component='form' onSubmit={handleSubmit} sx={{ gap: '32px' }}>
        <Stack>
          <TextField
            type='text'
            variant='outlined'
            label='Name'
            margin='normal'
            value={contactStore.selectedContact.name}
            onChange={e => (contactStore.selectedContact.name = e.target.value)}
            required
          />
          <TextField
            type='email'
            variant='outlined'
            label='Email'
            margin='normal'
            value={contactStore.selectedContact.email}
            onChange={e =>
              (contactStore.selectedContact.email = e.target.value)
            }
            required
          />
          <TextField
            type='tel'
            inputProps={{ pattern: '\\+(\\d{1,50})' }}
            variant='outlined'
            label='Mobile phone'
            margin='normal'
            value={contactStore.selectedContact.phone_mobile}
            onChange={e =>
              (contactStore.selectedContact.phone_mobile = e.target.value)
            }
            required
          />
          <TextField
            type='tel'
            inputProps={{ pattern: '\\+(\\d{1,50})' }}
            variant='outlined'
            label='Home phone'
            margin='normal'
            value={contactStore.selectedContact.phone_home}
            onChange={e =>
              (contactStore.selectedContact.phone_home = e.target.value)
            }
            required
          />
        </Stack>
        <Stack direction='row' sx={{ gap: '16px' }}>
          <Button type='submit' variant='contained' color='secondary'>
            Update
          </Button>
          <Button
            variant='outlined'
            color='error'
            onClick={handleDeleteContact}>
            Delete
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default observer(ContactForm);
