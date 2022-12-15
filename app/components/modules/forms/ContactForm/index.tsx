import { Button, Stack, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <Stack sx={{ gap: '32px' }}>
      <Typography variant='h4' component='h2' sx={{ fontWeight: 'bold' }}>
        Contact details
      </Typography>
      <Stack component='form' sx={{ gap: '32px' }}>
        <Stack>
          <TextField variant='outlined' label='Name' margin='normal' />
          <TextField variant='outlined' label='Email' margin='normal' />
          <TextField variant='outlined' label='Mobile phone' margin='normal' />
          <TextField variant='outlined' label='Home phone' margin='normal' />
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

export default ContactForm;
