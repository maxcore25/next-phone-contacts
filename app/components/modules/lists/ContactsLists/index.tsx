import { Button, Stack, Paper, Typography } from '@mui/material';

const ContactsLists = () => {
  return (
    <Stack sx={{ gap: '32px' }}>
      <Typography variant='h4' component='h2' sx={{ fontWeight: 'bold' }}>
        Contacts
      </Typography>
      <Stack sx={{ gap: '32px' }}>
        <Paper elevation={3} sx={{ padding: '16px' }}>
          John Doe
        </Paper>
        <Paper elevation={3} sx={{ padding: '16px' }}>
          Jack Rose
        </Paper>
      </Stack>
      <Button variant='contained' sx={{ width: 'fit-content' }}>
        Add contact
      </Button>
    </Stack>
  );
};

export default ContactsLists;
