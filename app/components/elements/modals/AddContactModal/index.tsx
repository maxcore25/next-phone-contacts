import BaseModal from '../BaseModal';
import { contactStore } from '@/store';
import { Button, Stack, TextField } from '@mui/material';

const AddContactModal = () => {
  return (
    <BaseModal open={true}>
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
          <Button variant='contained' color='secondary' onClick={() => 1}>
            Update
          </Button>
          <Button variant='outlined' color='error' onClick={() => 1}>
            Delete
          </Button>
        </Stack>
      </Stack>
    </BaseModal>
  );
};

export default AddContactModal;
