import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const CustomListOrder = styled(Box)`
    & .contain {
        width: 100%;
        &__left,
        &__right {
            width: 100%;
            @media (min-width: 1024px) {
                width: 50%;
            }
        }
        &__right {
            margin: 1rem 0;
            @media (min-width: 1024px) {
                margin: 0;
            }
        }
    }
`
export const Card = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
};