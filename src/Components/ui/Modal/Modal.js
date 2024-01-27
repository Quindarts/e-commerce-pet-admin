import { CustomModal, MainModal } from './style'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import React from 'react'

function Modal({ size, appearance, open, handleClose, className, children, ...rest }) {
    return (
        <CustomModal className={`${className}`} open={open} onClose={handleClose} {...rest}>
            <MainModal size={size} appearance={appearance}>
                <button className="exit_model" onClick={handleClose}>
                    <Icon icon="ep:close-bold" width={18} className="text-gray-700" />
                </button>
                {children}
            </MainModal>
        </CustomModal>
    )
}

export default Modal
