import { Modal } from '@mui/material';
import { Box } from '@mui/system';

interface IProps {
  children: any;
  open: boolean;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

const BaseModal = ({ children, open, onClose }: IProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        p: 8,
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '500px',
          background: '#fff',
          borderRadius: '16px',
          p: 4,
          maxHeight: '800px',
          overflow: 'auto',
        }}>
        {children}
      </Box>
    </Modal>
  );
};

export default BaseModal;
