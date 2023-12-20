import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { MaterialDesignContent } from 'notistack'

export const StyledButton = styled(Button)`
    border-radius: 4px;
`

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-warning': {
      backgroundColor: '#f8e06a',
      color:'black'
    },
    '&.notistack-MuiContent-info': {
      backgroundColor: '#299cdb',
    },
    '&.notistack-MuiContent-success': {
        backgroundColor: '#4fd06b',
      },
      '&.notistack-MuiContent-error': {
        backgroundColor: '#ff0000',
      }, 
  }));