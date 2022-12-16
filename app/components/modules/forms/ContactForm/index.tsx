import { contactStore } from '@/store';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

const ContactForm = () => {
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
          />
          <TextField
            variant='outlined'
            label='Email'
            margin='normal'
            value={contactStore.selectedContact.email}
          />
          <TextField
            variant='outlined'
            label='Mobile phone'
            margin='normal'
            value={contactStore.selectedContact.phone_mobile}
          />
          <TextField
            variant='outlined'
            label='Home phone'
            margin='normal'
            value={contactStore.selectedContact.phone_home}
          />
        </Stack>
        <Stack direction='row' sx={{ gap: '16px' }}>
          <Button variant='contained' color='secondary'>
            Update
          </Button>
          <Button variant='outlined' color='error'>
            Delete
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default observer(ContactForm);
