import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { MaterialDesignContent } from 'notistack'

export const StyledButton = styled(Button)`
    border-radius: 4px;
`
export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-success': {
        backgroundColor: '#2D7738',
    },
    '&.notistack-MuiContent-error': {
        backgroundColor: '#970C0C',
    },
}))
