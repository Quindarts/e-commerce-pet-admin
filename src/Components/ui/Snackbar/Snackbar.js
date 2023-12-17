import React from 'react';
import {useSnackbar, MaterialDesignContent } from 'notistack'
import styled from '@emotion/styled';
import { css } from '@emotion/react'
import { forwardRef } from "react";

interface Props {
  id: string;
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info' | 'customVariant';
 }

 export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-warning': {
    backgroundColor: '#2D7738',
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: '#970C0C',
  },
}));

const SnackbarContainer = css`
  background-color: #323232;
  color: white;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const CloseButton = css`
  color: white;
  font-size: 20px;
  cursor: pointer;
`
export const CustomVariantSnackbar = React.forwardRef(({ id,message }, ref) => {
  const { closeSnackbar } = useSnackbar();
  const handleCloseSnackbar = () => closeSnackbar(id);
  const styles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fddc6c;
  color: #000;
`;
  return (

    <div css={SnackbarContainer} ref={ref}>
            <span>{message}</span>
      <button css={CloseButton} onClick={handleCloseSnackbar}>Close</button>
    </div>

  )
})
