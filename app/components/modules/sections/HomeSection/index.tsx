import { Button, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

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
        <Stack sx={{ gap: '32px' }}>
          <Typography variant='h4' component='h2' sx={{ fontWeight: 'bold' }}>
            Contact details
          </Typography>
          <Stack component='form' sx={{ gap: '32px' }}>
            <Stack>
              <TextField variant='outlined' label='Name' margin='normal' />
              <TextField variant='outlined' label='Email' margin='normal' />
              <TextField
                variant='outlined'
                label='Mobile phone'
                margin='normal'
              />
              <TextField
                variant='outlined'
                label='Home phone'
                margin='normal'
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
      </Stack>
    </Stack>
  );
};

export default HomeSection;
