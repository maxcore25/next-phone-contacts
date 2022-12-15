import { Button, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ContactForm from '../../forms/ContactForm';

const HomeSection = () => {
  return (
    <Stack
      component='main'
      sx={{
        minHeight: '100vh',
        padding: '128px 16px',
        alignItems: 'center',
      }}>
      <Stack
        direction='row'
        sx={{
          gap: '64px',
          maxWidth: 'var(--max-width)',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}>
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
        <ContactForm />
      </Stack>
    </Stack>
  );
};

export default HomeSection;
