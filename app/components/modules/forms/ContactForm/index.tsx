import { contactStore } from '@/store';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

const ContactForm = () => {
  const handleUpdateContact = () => {
    console.log(contactStore.selectedContact);
  };

  const handleDeleteContact = () => {
    console.log(contactStore.selectedContact);
  };

  return (
    <Stack sx={{ gap: '32px' }}>
      <Typography variant='h4' component='h2' sx={{ fontWeight: 'bold' }}>
        Contact details
      </Typography>
      <Stack component='form' sx={{ gap: '32px' }}>
        <Stack>
          <TextField
            variant='outlined'
            label='Name'
            margin='normal'
            value={contactStore.selectedContact.name}
            onChange={e => (contactStore.selectedContact.name = e.target.value)}
          />
          <TextField
            variant='outlined'
            label='Email'
            margin='normal'
            value={contactStore.selectedContact.email}
            onChange={e =>
              (contactStore.selectedContact.email = e.target.value)
            }
          />
          <TextField
            variant='outlined'
            label='Mobile phone'
            margin='normal'
            value={contactStore.selectedContact.phone_mobile}
            onChange={e =>
              (contactStore.selectedContact.phone_mobile = e.target.value)
            }
          />
          <TextField
            variant='outlined'
            label='Home phone'
            margin='normal'
            value={contactStore.selectedContact.phone_home}
            onChange={e =>
              (contactStore.selectedContact.phone_home = e.target.value)
            }
          />
        </Stack>
        <Stack direction='row' sx={{ gap: '16px' }}>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleUpdateContact}>
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
