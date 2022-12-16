import { contactStore } from '@/store';
import { IContact } from '@/types';
import { Paper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

interface IProps {
  contact: IContact;
}

const ContactCard = ({ contact }: IProps) => {
  const handleClick = () => {
    contactStore.selectContact(contact);
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: '16px', cursor: 'pointer' }}
      onClick={handleClick}>
      <Typography variant='h6' component='h6' sx={{ fontWeight: 'bold' }}>
        {contact.name}
      </Typography>
      <Typography>{contact.email}</Typography>
    </Paper>
  );
};

export default observer(ContactCard);
