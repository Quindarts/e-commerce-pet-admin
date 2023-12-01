import React from 'react';
import Button from '@mui/material/Button';
import { CustomModal, MainModal } from './style';

function Modal({ size, appearance, open, handleClose, children, ...rest }) {

  return (
    <CustomModal open={open}
      onClose={handleClose}
      {...rest}
    >
      <MainModal size={size} appearance={appearance}>
        {children}
      </MainModal>
    </CustomModal>
  );
}

export default Modal;
