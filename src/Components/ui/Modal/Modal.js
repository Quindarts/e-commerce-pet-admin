import { CustomModal, MainModal } from './style'
import { Icon } from '@iconify/react'
import { useState } from 'react';
import React from 'react';

function Modal({ size, appearance, open, handleClose, children, ...rest }) {
    return (
        <CustomModal open={open} onClose={handleClose} {...rest}>
            <MainModal size={size} appearance={appearance}>
                <button onClick={handleClose}>
                    <Icon icon="ep:close-bold" width={18} className="text-gray-700" />
                </button>
                {children}
            </MainModal>
        </CustomModal>
    )
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

export default Modal
