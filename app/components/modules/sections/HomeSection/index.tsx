import { Stack } from '@mui/system';
import ContactForm from '../../forms/ContactForm';
import ContactsList from '../../lists/ContactsList';

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
        <ContactsList />
        <ContactForm />
      </Stack>
    </Stack>
  );
};

export default HomeSection;
