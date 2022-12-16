import { useReducer } from 'react';
import BaseModal from '../BaseModal';
import { contactStore } from '@/store';
import { Button, Stack, TextField } from '@mui/material';
import { IContact } from '@/types';

type ActionType = 'NAME' | 'EMAIL' | 'PHONE_MOBILE' | 'PHONE_HOME' | 'RESET';

type Action = { type: ActionType; payload?: string };

const initialState: IContact = {
  name: '',
  email: '',
  phone_home: '',
  phone_mobile: '',
};

type State = typeof initialState;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload as string };
    case 'EMAIL':
      return { ...state, email: action.payload as string };
    case 'PHONE_MOBILE':
      return { ...state, phone_mobile: action.payload as string };
    case 'PHONE_HOME':
      return { ...state, phone_home: action.payload as string };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const AddContactModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddContact = () => {
    console.log(state);
  };

  const handleCloseModal = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <BaseModal open={true}>
      <Stack component='form' sx={{ gap: '32px' }}>
        <Stack>
          <TextField
            type='text'
            variant='outlined'
            label='Name'
            margin='normal'
            value={state.name}
            onChange={e => dispatch({ type: 'NAME', payload: e.target.value })}
            required
          />
          <TextField
            type='email'
            variant='outlined'
            label='Email'
            margin='normal'
            value={state.email}
            onChange={e => dispatch({ type: 'EMAIL', payload: e.target.value })}
            required
          />
          <TextField
            type='text'
            variant='outlined'
            label='Mobile phone'
            margin='normal'
            value={state.phone_mobile}
            onChange={e =>
              dispatch({ type: 'PHONE_MOBILE', payload: e.target.value })
            }
            required
          />
          <TextField
            type='text'
            variant='outlined'
            label='Home phone'
            margin='normal'
            value={state.phone_home}
            onChange={e =>
              dispatch({ type: 'PHONE_HOME', payload: e.target.value })
            }
            required
          />
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          <Button variant='outlined' color='error' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='contained' onClick={handleAddContact}>
            Create
          </Button>
        </Stack>
      </Stack>
    </BaseModal>
  );
};

export default AddContactModal;
