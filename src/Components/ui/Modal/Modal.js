import React from 'react';
import Button from '@mui/material/Button';
import { CustomModal, MainModal } from './style';
import { useState } from 'react';

function Modal({ size, appearance, open, handleClose, children, className, ...rest }) {
  return (
    <CustomModal open={open} onClose={handleClose} {...rest}>
      <MainModal size={size} appearance={appearance} className={className}>
        <Button onClick={handleClose} style={{ position: 'absolute', right: 0, top: 0 }}>
          X
        </Button>
        {children}
      </MainModal>
    </CustomModal>
  );
}

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    toggle,
  }
}

export {useModal,CustomModal} ;