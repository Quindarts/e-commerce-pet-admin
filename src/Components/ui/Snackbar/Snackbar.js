import React from 'react';
import {useSnackbar, MaterialDesignContent,SnackbarContent } from 'notistack'
import styled from '@emotion/styled';
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


export const CustomVariantSnackbar = React.forwardRef(({ id,message }, ref) => {
  const { closeSnackbar } = useSnackbar();
  const handleCloseSnackbar = () => closeSnackbar(id);
  
  return (
    <SnackbarContent ref={ref}>
      <div className = "bg-gray-800 text-white fixed bottom-5 left-5 z-50 p-2 rounded-lg flex justify-between items-center h-screen w-screen" >
      <span>{message}</span>
      <button className="text-white text-xl cursor-pointer" onClick={handleCloseSnackbar}>Close</button>
      </div>
      </SnackbarContent>
  )
})
